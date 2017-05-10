(ns ketornah-client.styles
  (:require [garden-watcher.def :refer [defstyles]]
            [garden.units :refer [px]]
            [garden.color :as color :refer [rgb rgba]]))

(defstyles style
  [:*
   {:padding 0
    :margin 0
    :box-sizing "border-box"
    :font-family "'Roboto', sans-serif"}]
  [:html
   {:height "100%"}]
  [:body 
   {:height "100%"
    :width "100%"}]
  [:#ketornah-main-header
   {:text-align "center"
    :height (px 56)
    :background-color (rgb 240 240 240)
    :margin 0}]
  [:#ketornah-main-header>h1
   {:font-size (px 48)}]
  [:#app
   {:display "flex"
    :align-content "center"
    :justify-content "center"
    :margin (px 18)}]
  [:h1
   {:text-decoration "none"
    :margin 0}]
  [:.search-container
   {:min-width (px 400)
    :width "33%"}]
  [:.search-container>input
   {:width (px 400)
    :height (px 50)
    :font-size (px 42)
    :text-align "center"
    :outline-width (px 0)
    :border-radius (px 4)
    :border "1px solid #4d4d4d"}])
