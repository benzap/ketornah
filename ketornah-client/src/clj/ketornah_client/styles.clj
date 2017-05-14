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
   {:width (px 400)}]
  [:.search-input
   {:margin-bottom (px 13)}]
  [:.search-input>input
   {:width (px 400)
    :height (px 50)
    :font-size (px 42)
    :text-align "center"
    :outline-width (px 0)
    :border-radius (px 4)
    :border "1px solid #4d4d4d"}]
  [:.search-result
   {:border "1px solid black"
    :border-radius (px 4)
    :min-height (px 80)
    :padding (px 5)
    :margin (px 5)}]
  [:.search-result-title
   {:font-weight "bold"
    :font-size (px 14)}])
