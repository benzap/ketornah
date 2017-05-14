(ns ketornah-client.component.search
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.functions]
            [cljs.core.async :refer [chan put! <! >!]]
            [rum.core :as rum]
            [ketornah-client.sql :as sql]))

(defn update-food-search [app-state]
  (let [{:keys [database search-text]} @app-state]
    (swap! app-state merge {:querying? true :search-items []})
    (.setTimeout js/window
                 (fn []
                   (.time js/console "Search Query")
                   (swap! app-state merge {:search-items (sql/search-food database search-text)
                                           :querying? false})
                   (.timeEnd js/console "Search Query")) 500)))

(rum/defcs c-search-result <
  {:key-fn (fn [food] (str (:name food)))}
  [state {:keys [name carbs protein fat fibre] :as food}]
  [:.search-result
   [:.search-result-title name]
   [:.search-result-values (str carbs " " protein " " fat " " fibre)]])

(rum/defcs c-search <
  rum/reactive
  [state app-state]
  (let [{:keys [search-text search-items querying?]} (rum/react app-state)]
    [:.search-container
     [:.search-input
      [:input {:type "text"
               :placeholder "Search Food"
               :value search-text
               :disabled querying?
               :on-change
               (fn [e]
                 (let [text (-> e .-target .-value)]
                   (swap! app-state assoc :search-text text)))
               :on-key-down
               (fn [e]
                 (let [key (-> e .-key)]
                   (when (= key "Enter")
                     (update-food-search app-state))
                   ))}]]
     [:.search-results
      (cond
        querying?
        [:.search-querying "Querying..."]
        (not (empty? search-items))
        (for [item search-items] (c-search-result item))
        :else
        [:.search-no-results "No Search Results"])]]))
