(ns ketornah-client.components.search
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [goog.functions]
            [cljs.core.async :refer [chan put! <! >!]]
            [rum.core :as rum]
            [cuerdas.core :as str]
            [ketornah-client.sql :as sql]
            [ketornah-client.food :as food]))

(def mixin-render-result-bar
  {:did-mount
   (fn [state]
     (let [comp (:rum/react-component state)
           dom-node (js/ReactDOM.findDOMNode comp)]
       (-> js/d3
           (.select dom-node)
           (.select ".search-result-bar")
           (.append "svg")
           (.style "background-color" "white")
           (.style "border-radius" "5px")
           (.attr "width" "100%")
           (.attr "height" "10px")
           ))
     state)})

(defn update-food-search [app-state text]
  (let [{:keys [database]} @app-state]
    (swap! app-state merge {:querying? true :search-items [] :search-text text})
    (.setTimeout js/window
                 (fn []
                   (.time js/console "Search Query")
                   (swap! app-state merge {:search-items (sql/search-food database text)
                                           :querying? false})
                   (.timeEnd js/console "Search Query")) 500)))

(rum/defcs c-search-result <
  {:key-fn (fn [food] (str (:name food)))}
  mixin-render-result-bar
  [state {:keys [name carbs protein fat fibre category] :as food}]
  (let [{:keys [carbs protein fat]} (food/process-percent-ratios food)]
    [:.search-result {:class (-> (food/process-keto-index food) str/kebab)}
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
  (rum/local "" ::search-text)
  mixin-fix-focus
  rum/reactive
  [state app-state]
  (let [{:keys [search-items querying?]} (rum/react app-state)
        a-search-text (::search-text state)
        ]
    [:.search-container
     [:.search-input
      [:input {:type "text"
               :placeholder "Search Food"
               :value @a-search-text
               :disabled querying?
               :on-change
               (fn [e]
                 (let [text (-> e .-target .-value)
                       text (if-not (str/ends-with? text " ") (str/title text) text)]
                   (reset! a-search-text text)))
               :on-key-down
               (fn [e]
                 (let [key (-> e .-key)]
                   (when (= key "Enter")
                     (update-food-search app-state @a-search-text))
                   ))}]]
     [:.search-results
      (cond
        querying?
        [:.search-querying "Querying..."]
        (not (empty? search-items))
        (for [item search-items] (c-search-result item))
        :else
        [:.search-no-results "No Search Results"])]]))
