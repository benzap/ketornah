(ns ketornah-client.utils)

(defn remove-empty-values [xs]
  (->> xs
      (filter (fn [[_ v]] (not (nil? v))))
      (into {})))

#_(remove-empty-values {:k1 nil :k2 1})

(defn gen-query-params [params]
  (let [query-string
        (->> params
             remove-empty-values
             (map (fn [[k v]] (str (name k) "=" v)))
             (interpose "&")
             (apply str "?"))]
    (if-not (= query-string "?")
      query-string
      "")))

(defn set-hash! [v]
  "Set the location hash of a js/window object." 
  (aset js/window "location" "hash" v))

(defn set-title! [s]
  (aset js/document "title" s))

#_(set-title! "Testing")

(defn wait-for-database [app-state]
  (while (:loading? @app-state)))

(defn remove-tooltips-from-body []
  (let [tooltip-elems (.querySelectorAll js/document ".search-result-tooltip")]
    (.forEach tooltip-elems (fn [elem] (.remove elem)))))
