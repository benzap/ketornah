(ns ketornah-client.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [rum.core :as rum]
            [cljs.core.async :refer [chan put! <! >!]]
            [ketornah-client.sql :as sql]
            [ketornah-client.component.search :refer [c-search]]
            [ketornah-client.component.result :refer [c-result]]
            [ketornah-client.component.loading :refer [c-loading]]))

(enable-console-print!)

(defonce app-state 
  (atom
   {:database nil
    :loading? true
    :query? false
    :search-text "peanut butter"
    :search-items []
    :search-complete? false}))

(defn mixin-load-database []
  {:did-mount
   (fn [state]
     (let [app-state (-> state :rum/args first)
           db-channel (sql/open-database sql/default-db-url)]
       (go (let [db (<! db-channel)]
             (swap! app-state merge {:database db :loading? false})))
       state))})

(defn mixin-query-database []
  {:did-update
   (fn [state]
     (let [app-state (-> state :rum/args first)
           {:keys [database search-text]} @app-state]
       (swap! app-state assoc :search-items (sql/search-food database search-text))
       state))})

(rum/defcs main-app < 
  rum/reactive
  (mixin-load-database)
  (mixin-query-database)
  [state app-state]
  (let [{:keys [loading? search-text search-complete?]} (rum/react app-state)]
    (cond
      loading?
      (c-loading app-state)
      (not search-complete?)
      (c-search app-state)
      :else
      (c-result app-state))))

(rum/mount (main-app app-state) (. js/document (getElementById "app")))