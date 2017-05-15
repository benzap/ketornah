(ns ketornah-client.food)

(defn process-percent-ratios
  [{:keys [protein fat fibre carbs] :as food}]
  (let [ncarbs (- carbs fibre)
        total (+ protein fat ncarbs)
        p-protein (/ protein total)
        p-fat (/ fat total)
        p-net-carbs (/ ncarbs total)]
    {:protein-relative (.fround js/Math (* 100 p-protein))
     :fat-relative (.fround js/Math (* 100 p-fat))
     :carbs-relative (.fround js/Math (* 100 p-net-carbs))
     :protein (.fround js/Math protein)
     :fat (.fround js/Math fat)
     :carbs (.fround js/Math ncarbs)}))

#_(def test_food
  {:protein 5.32
   :fat 9.32
   :carbs 40.00
   :fibre 9.30})

#_(process-percent-ratios test_food)

(defn process-keto-index [{:keys [protein fat fibre carbs] :as food}]
  (let [{:keys [protein-relative fat-relative carbs-relative
                protein fat carbs]} (process-percent-ratios food)]
    (cond
      (and (<= carbs 5) (>= fat-relative 80))
      :keto-index-fatbomb
      (<= carbs 10)
      :keto-index-keto
      (<= carbs 20)
      :keto-index-mild
      (<= carbs 30)
      :keto-index-danger
      :else
      :keto-index-not-keto
      )))
