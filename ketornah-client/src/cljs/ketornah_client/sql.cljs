(ns ketornah-client.sql
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan put! <! >!]]
            [cuerdas.core :as str]))

(def default-db-url "db/foodsr28.sqlite")

(defn get-database [url]
  (let [req (js/XMLHttpRequest.)
        data-channel (chan)]
    (.open req "GET" url true)
    (aset req "responseType" "arraybuffer")

    ;; Send loaded data to data channel
    (aset req "onload"
          (fn [e]
            (let [response (.-response req)]
              (put! data-channel 
                    {:result :ok
                     :data (js/Uint8Array. response)}))))

    (aset req "onerror"
          (fn [e]
            (.error js/console "Failed Response:" e)
            (put! data-channel
                  {:result :error
                   :error e})))
    (.send req)
    data-channel))

(defn create-database [data]
  {:context (js/SQL.Database. data)})

(defn open-database [url]
  (let [data-channel (get-database url)
        db-channel (chan)]
    (go (let [{:keys [result] :as response} (<! data-channel)]
          (if (= result :ok)
            (let [database (create-database (:data response))]
              (put! db-channel database))
            (.error js/console "Error: " (:error response)))
          ))
    db-channel))

(defn result-vector->result-map [columns value]
  (let [columns (map str/keyword columns)]
    (->> (map #(vec [%1 %2]) columns value)
         flatten
         (apply hash-map))))

#_(result-vector->result-map ["test" "test2"] [123 456])

(defn execute-query [{:keys [context] :as db} query]
  (let [result (.exec context query)
        data (-> result first (js->clj :keywordize-keys true))
        {:keys [columns values]} data]
    (mapv  #(result-vector->result-map columns %) values)
    ))

#_(let [db-channel (open-database default-db-url)]
    (go (let [db (<! db-channel)
              result (execute-query db "SELECT * FROM food_group LIMIT 2;")]
          (println result))))

(def food-query
  "SELECT * FROM food_summary WHERE name LIKE ")

(defn search-food [db name]
  )

#_(let [db-channel (open-database default-db-url)]
    (go (let [db (<! db-channel)
              result (search-food db "peanut")]
          (println result))))
