(ns ketornah-client.styles
  (:require [garden-watcher.def :refer [defstyles]]
            [garden.units :refer [px]]
            [garden.color :as color :refer [rgb rgba hex->rgb]]))

(def color-green (hex->rgb "#8BC34A"))
(def color-blue (hex->rgb "#039BE5"))
(def color-red (hex->rgb "#F44336"))

(defstyles style
  [:*
   {:padding 0
    :margin 0
    :box-sizing "border-box"
    :color "#1d1d1d"
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
   {:width "100%"}]
  [:.search-input
   {:display "flex"
    :align-content "center"
    :justify-content "center"
    :margin-bottom (px 13)}]
  [:.search-input>input
   {:width (px 400)
    :height (px 50)
    :font-size (px 42)
    :text-align "center"
    :outline-width (px 0)
    :border-radius (px 4)
    :border "none"
    :border-top "1px solid #ddd"
    :border-bottom "4px solid #4d4d4d"}
   [:&:focus
    {:background-color "#f3f3f3"
     :border-top "1px solid #aaa"
     :border-bottom "4px solid #2d2d2d"}]]
  [:.search-results
   {:display "flex"
    :align-content "center"
    :justify-content "center"
    :flex-wrap "wrap"}]
  [:.search-result
   {;;:border "1px solid black"
    :box-shadow "0 5px 8px 0 rgba(0,0,0,0.2),0 7px 12px 0 rgba(0,0,0,0.3)"
    :border-radius (px 2)
    :width (px 400)
    :min-height (px 80)
    :padding (px 5)
    :margin (px 15)}]
  [:.search-result-title
   {:font-weight "bold"
    :font-size (px 14)
    :padding (px 5)}]
  [:.search-result-category
   {:padding (px 5)
    :padding-left (px 7)
    :font-size (px 12)
    :font-style "italic"}]
  [:.search-result-values
   {:display "flex"
    :padding (px 7)}]
  [:.search-result-bar
   {:display "flex"
    :flex-direction "column"
    :justify-content "center"
    :align-items "center"
    :padding (px 5)
    :padding-right 0
    :overflow "hidden"}]
  [:.keto-index-fatbomb
   {:background-color (color/darken color-green 0)}]
  [:.keto-index-keto
   {:background-color (color/lighten color-green 10)}]
  [:.keto-index-mild
   {:background-color color-blue}]
  [:.keto-index-danger
   {:background-color (color/lighten color-red 15)}]
  [:.keto-index-not-keto
   {:background-color (color/darken color-red 5)}]
  [:#progress-loader
   {:font-size (px 42)}]
  [:.progress-spinner
   {:font-size (px 42)}]
  [:.search-no-results
   {:font-style "italic"
    :font-size "90%"}]
  [:.search-querying
   {:font-size (px 42)
    :font-style "italic"
    :font-weight "bold"}])