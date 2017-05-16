(ns ketornah-client.search
  (:require [cuerdas.core :as str]
            [clojure.string :refer [index-of]]
            [ketornah-client.sql :as sql]
            [ketornah-client.utils :refer [wait-for-database set-title!]]))

(defn init-food-cost [food]
  (assoc food :cost 1.0))

(defn search-terms [search-text]
  (let [cleaned-text
        (-> search-text
            (str/replace #"'" "")
            (str/replace #"\s+|[^a-zA-Z]+" " ")
            str/strip)]
    (-> cleaned-text
        str/split
        (conj cleaned-text)
        set)))
      

#_(search-terms "Hello's are in order!!@!  ")
#_(search-terms "Beans")

(defn *-cost [food ratio]
  (update-in food [:cost] * ratio))

(defn modifier-starts-with
  [{:keys [name] :as food} search-term]
  (cond 
    (str/starts-with? (str/lower name) (str (str/lower search-term) ","))
    (*-cost food 1.5)
    (str/starts-with? (str/lower name) (str (str/lower search-term)))
    (*-cost food 1.3)
    :else
    (*-cost food 1.0)))

(defn modifier-index-of
  [{:keys [name] :as food} search-term]
  (if-let [idx (index-of name search-term 1)]
    (*-cost food (+ 1.0
                    (* 0.2
                       (/ (- (count name) idx)
                          (count name)))))
    (*-cost food 1.0)))
  
(defn apply-modifiers [food search-term]
  (-> food
      (modifier-starts-with search-term)
      (modifier-index-of search-term)))

#_(apply-modifiers {:name "Beans, canned" :cost 1.0} "Beans")

(defn search-text-cost [food search-text]
  (let [search-terms (search-terms search-text)
        new-cost
        (->> search-terms
             (map #(apply-modifiers food %) search-terms)
             (map :cost)
             (apply *))]
    (assoc food :cost new-cost)))

#_(search-text-cost {:name "Beans, canned" :cost 1.0} "Beans")

(defn sort-search-items [search-items]
  (->> search-items
       (sort-by :cost)
       reverse))

(defn process-costs [search-items search-text]
  (->> search-items 
       (map init-food-cost)
       (map #(search-text-cost % search-text))
       sort-search-items))

#_(process-costs [{:name "Beans, canned"} {:name "Canned Beans"}] "Beans")

(defn update-food-search [app-state text]
  (set-title! (str "Keto or Nah? - Search - " text))
  (swap! app-state merge {:querying? true :search-items [] :search-text text})
  (.setTimeout js/window
               (fn []
                 (wait-for-database app-state)
                 (let [{:keys [database]} @app-state]
                   (.time js/console "Search Query")
                   (swap! app-state merge {:search-items (-> (sql/search-food database text)
                                                             (process-costs text))
                                           :querying? false})
                   (.timeEnd js/console "Search Query"))) 500))
