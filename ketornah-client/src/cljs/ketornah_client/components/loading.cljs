(ns ketornah-client.components.loading
  (:require [rum.core :as rum]))

(rum/defcs c-loading [state app-state]
  [:div.progress-spinner "Loading Database..."])
