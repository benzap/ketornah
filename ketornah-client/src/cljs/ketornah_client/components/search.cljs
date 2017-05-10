(ns ketornah-client.component.search
  (:require [rum.core :as rum]))

(rum/defc c-search < rum/reactive 
  []
  [:div.search-container
   [:input {:type "text" :placeholder "Search Food"}]])
