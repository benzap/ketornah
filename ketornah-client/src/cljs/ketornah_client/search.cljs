(ns ketornah-client.search
  (:require [cuerdas.core :as str]
            [clojure.string :refer [index-of]]))

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
    (str/starts-with? name (str (str/title search-term) ","))
    (*-cost food 1.5)
    (str/starts-with? name (str (str/title search-term)))
    (*-cost food 1.2)
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
        _ (println search-text "-->" search-terms)
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
