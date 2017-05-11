(ns ketornah-client.component.search
  (:require [rum.core :as rum]))

(defn mixin-handle-search-onchange[]
  {:did-mount
   (fn [state]
     (let [app-state (-> state :rum/args first)
           {:keys [search-text]} @app-state]
       
       
       
       state))})

(rum/defcs c-search < rum/reactive 
  [state app-state]
  [:div.search-container
   [:input {:type "text"
            :placeholder "Search Food"
            :value (@app-state :search-text)
            :on-change
            (fn [e]
              (let [text (-> e .-target .-value)]
                (swap! app-state assoc :search-text text)))}]])
