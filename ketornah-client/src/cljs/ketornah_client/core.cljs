(ns ketornah-client.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.functions]
            [rum.core :as rum]
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
    :querying? false
    :search-text "Peanut Butter"
    :search-items []
    :search-selected nil
    :worker-channel nil}))

(defn mixin-load-database []
  {:did-mount
   (fn [state]
     (let [db-channel (sql/open-database sql/default-db-url)]
       (go (let [db (<! db-channel)]
             (swap! app-state merge {:database db :loading? false})))
       state))})

(rum/defcs main-app < 
  rum/reactive
  (mixin-load-database)
  [state app-state]
  (let [{:keys [loading? search-selected]} (rum/react app-state)]
    (cond
      loading?
      (c-loading app-state)
      (not search-selected)
      (c-search app-state)
      :else
      (c-result app-state))))

(rum/mount (main-app app-state) (. js/document (getElementById "app")))
