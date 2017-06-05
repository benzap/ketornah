(ns ketornah-client.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.functions]
            [goog.events]
            [goog.history.EventType :as EventType]
            [rum.core :as rum]
            [cljs.core.async :refer [chan put! <! >!]]
            [secretary.core :as secretary :refer-macros [defroute]]

            ;; Local
            [ketornah-client.sql :as sql]
            [ketornah-client.search :as search]
            [ketornah-client.utils :refer [set-hash! gen-query-params remove-tooltips-from-body]]

            ;; Rum Components
            [ketornah-client.components.search :refer [c-search]]
            [ketornah-client.components.result :refer [c-result]]
            [ketornah-client.components.loading :refer [c-loading]])
  (:import goog.History))

(enable-console-print!)

;; Main Application State
(defonce app-state
  (atom
   {:database nil
    :loading? true
    :querying? false
    :search-text ""
    :search-items []
    :search-selected nil
    :worker-channel nil}))

;; Secretary Configuration
(secretary/set-config! :prefix "#")

;; Secretary Routes
(defroute search-query "/search/:query"
  [query query-params]
  (search/update-food-search app-state (.decodeURIComponent js/window query)))

(defroute default-route "*" [])

;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

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

(when-let [main-logo (.querySelector js/document "#ketornah-main-logo-scroll")]
  (.addEventListener
   main-logo "click"
   (fn [e]
     (let [elem (.querySelector js/document "body")
           input (.querySelector js/document ".search-input>input")]
       (aset elem "scrollTop" 0)
       (swap! app-state assoc
              :search-text ""
              :search-items []
              :search-selected nil)
       (remove-tooltips-from-body)
       (.focus input)))))
