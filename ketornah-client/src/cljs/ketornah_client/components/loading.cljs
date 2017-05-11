(ns ketornah-client.component.loading
  (:require [rum.core :as rum]))

(rum/defcs c-loading [state app-state]
  [:div.progress-spinner "Progress Spinner"])
