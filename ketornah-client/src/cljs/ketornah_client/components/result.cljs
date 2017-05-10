(ns ketornah-client.component.result
  (:require [rum.core :as rum]))

(rum/defc c-result < rum/reactive 
  []
  [:div "Search Results"])
