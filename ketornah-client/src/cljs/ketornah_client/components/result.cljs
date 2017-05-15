(ns ketornah-client.components.result
  (:require [rum.core :as rum]))

(rum/defcs c-result < rum/reactive 
  [state app-state]
  [:div "Search Results"])
