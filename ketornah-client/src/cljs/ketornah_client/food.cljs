(ns ketornah-client.food)

(defn process-percent-ratios
  [{:keys [protein fat fibre carbs] :as food}]
  (let [ncarbs (- carbs fibre)
        total (+ protein fat ncarbs)
        p-protein (/ protein total)
        p-fat (/ fat total)
        p-net-carbs (/ ncarbs total)]
    {:protein (.floor js/Math (* 100 p-protein))
     :fat (.floor js/Math (* 100 p-fat))
     :carbs (.floor js/Math (* 100 p-net-carbs))}))

#_(def test_food
  {:protein 5.32
   :fat 9.32
   :carbs 40.00
   :fibre 9.30})

#_(process-percent-ratios test_food)
