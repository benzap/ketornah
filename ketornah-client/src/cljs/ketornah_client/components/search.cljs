(ns ketornah-client.components.search
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.functions]
            [cljs.core.async :refer [chan put! <! >!]]
            [rum.core :as rum]
            [cuerdas.core :as str]
            [ketornah-client.sql :as sql]
            [ketornah-client.food :as food]
            [ketornah-client.search :as search]
            [ketornah-client.utils :refer [set-hash!]]))

(def bar-height 20)
(def bar-excess-color "#64b5f6")
(def bar-carbs-color "#ff8a65")
(def bar-protein-color "#dce775")
(def bar-fat-color "#fff176")

(defn append-tooltip! [classname text]
  (-> js/d3
      (.select "body")
      (.append "div")
      (.attr "class" (str "search-result-tooltip " classname))
      (.style "position" "absolute")
      (.style "z-index" 10)
      (.style "visibility" "hidden")
      (.text text)))

(defn attach-tooltip! [root tooltip]
  (-> root
      (.on "mouseover" (fn [] (-> tooltip (.style "visibility" "visible"))))
      (.on "mousemove" (fn [] (let [page-x (aget js/d3 "event" "pageX")
                                    page-y (aget js/d3 "event" "pageY")
                                    left (+ page-x 10)
                                    top (- page-y 10)]
                                (-> tooltip 
                                    (.style "top" (str top "px"))
                                    (.style "left" (str left "px"))))))
      (.on "mouseout" (fn [] (-> tooltip (.style "visibility" "hidden")))))
  root)

(defn remove-tooltips-from-body []
  (let [tooltip-elems (.querySelectorAll js/document ".search-result-tooltip")]
    (.forEach tooltip-elems (fn [elem] (.remove elem)))))

(def mixin-render-result-bar
  {:did-mount
   (fn [state]
     (let [comp (:rum/react-component state)
           dom-node (js/ReactDOM.findDOMNode comp)
           bar-element (.querySelector dom-node ".search-result-bar")
           data-unparsed (.getAttribute bar-element "data-nutr-values")
           [carbs protein fat] (str/split data-unparsed ",")
           carbs (.parseFloat js/window carbs)
           protein (.parseFloat js/window protein)
           fat (.parseFloat js/window fat)
           svg-element (-> js/d3 (.select bar-element) (.append "svg"))
           
           ;;Tooltips
           carb-tooltip (append-tooltip!
                         "search-result-tooltip-carbs"
                         (str (.toFixed carbs 1) "% Carbs"))
           protein-tooltip (append-tooltip!
                            "search-result-tooltip-protein"
                            (str (.toFixed protein 1) "% Protein"))
           fat-tooltip (append-tooltip!
                        "search-result-tooltip-fat"
                        (str (.toFixed fat 1) "% Fat"))
           ]

       ;; Style svg element
       (-> svg-element
           (.style "background-color" bar-excess-color)
           (.style "border-radius" "5px")
           (.style "border" "2px solid #1d1d1d")
           (.attr "width" "100%")
           (.attr "height" bar-height))

       ;; Add Carbs bar
       (-> svg-element
           (.append "rect")
           (.attr "x" 0)
           (.attr "y" 0)
           (.attr "width" (str carbs "%"))
           (.attr "height" bar-height)
           (.attr "fill" bar-carbs-color)
           (attach-tooltip! carb-tooltip))

       ;; Add Protein bar
       (-> svg-element
           (.append "rect")
           (.attr "x" (str carbs "%"))
           (.attr "y" 0)
           (.attr "width" (str protein "%"))
           (.attr "height" bar-height)
           (.attr "fill" bar-protein-color)
           (attach-tooltip! protein-tooltip))
       
       ;; Add Fat bar
       (-> svg-element
           (.append "rect")
           (.attr "x" (str (+ carbs protein) "%"))
           (.attr "y" 0)
           (.attr "width" (str fat "%"))
           (.attr "height" bar-height)
           (.attr "fill" bar-fat-color)
           (attach-tooltip! fat-tooltip))
       
       
       )
     state)})

(rum/defcs c-search-result <
  {:key-fn (fn [food] (str (:name food)))}
  mixin-render-result-bar
  [state {:keys [name carbs protein fat fibre category] :as food}]
  (let [{:keys [carbs protein fat]} (food/process-percent-ratios food)]
    [:.search-result.animated.fadeInUp
     {:class (-> (food/process-keto-index food) str/kebab)}
     [:.search-result-title name]
     [:.search-result-category category]
     [:.search-result-values
      [:.search-result-carbs (str (.toFixed carbs 1) "% Carbs")]
      [:.search-result-protein (str (.toFixed protein 1) "% Protein")]
      [:.search-result-fat (str (.toFixed fat 1) "% Fat")]
      [:.search-result-bar {:data-nutr-values (str carbs "," protein "," fat)}]]]))

(def mixin-fix-focus
  (let [focus-input 
        (fn [state]
          (let [comp (:rum/react-component state)
                dom-node (js/ReactDOM.findDOMNode comp)
                input-element (.querySelector dom-node ".search-input>input")]
            (.focus input-element)
            state))]
    {:did-mount focus-input
     :did-update focus-input}))

(rum/defcs c-search <
  mixin-fix-focus
  rum/reactive
  [state app-state]
  (let [{:keys [search-text search-items querying?]} (rum/react app-state)]
    [:.search-container
     [:.search-input
      [:input
       {:type "text"
        :placeholder "Search Food ↵"
        :value search-text
        :disabled querying?
        :on-change
        (fn [e]
          (let [text (-> e .-target .-value)
                text (if-not (str/ends-with? text " ") (str/title text) text)]
            (swap! app-state assoc :search-text text)))
        :on-key-down
        (fn [e]
          (let [key (-> e .-key)
                target (-> e .-target)]
            (when (= key "Enter")
              (set-hash! (str "/search/" (.encodeURIComponent js/window search-text)))
              (.setSelectionRange target 0 (-> target .-value .-length))
              (remove-tooltips-from-body)
              ;;(search/update-food-search app-state search-text)
              )
            ))
        :on-click
        (fn [e]
          (let [target (-> e .-target)]
            (.setSelectionRange target 0 (-> target .-value .-length))))}]]
     [:.search-results
      (cond
        querying?
        [:.search-querying.animated.pulse "Querying..."]
        (not (empty? search-items))
        (for [item search-items] (c-search-result item))
        :else
        [:.search-no-results "No Search Results"])]]))
