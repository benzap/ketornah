(ns ketornah-client.core
  (:require [rum.core :as rum]
            [ketornah-client.sql :as sql]
            [ketornah-client.component.search :refer [c-search]]
            [ketornah-client.component.result :refer [c-result]]))

(enable-console-print!)

(defonce app-state 
  (atom
   {:search-text "peanut butter"
    :search-complete? false}))

(rum/defc main-app < rum/reactive []
  (let [{:keys [search-text search-complete?]} (rum/react app-state)]
   (if-not search-complete?
     (c-search)
     (c-result))))

(rum/mount (main-app) (. js/document (getElementById "app")))
