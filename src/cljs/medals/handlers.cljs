(ns medals.handlers
  (:require-macros 
    [reagent.ratom :refer [reaction]]
    )
  (:require 
    [ajax.core :refer [GET]]
    [reagent.core :as reagent]
    [re-frame.core :refer [register-handler
                           dispatch
                           ]]
    ))


(defn load-medals-handler[response]
  (dispatch 
    [:set-medals-data (js->clj response)]
    ))

(defn load-medals-error-handler[{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
  (dispatch 
    [:set-ajax-error true]
    ))

(register-handler :set-ajax-error
                  (fn [db [_ bool]]
                    (assoc db :ajax-error? bool)))

(register-handler :load-medals
                  (fn [db [_]]
                    (GET (:load-medals-url db) 
                         {:handler load-medals-handler
                          :error-handler load-medals-error-handler
                          :response-format :json
                          :keywords? true 
                          })
                    db
                    ))

(register-handler :initialize 
                  (fn 
                    [db [_ initial-state]]
                    (merge db initial-state))) 

(defn sort-medals-data[medals-data sort-medals-by]
  (reverse (sort-by (fn[row]
                      (cond 
                        (= sort-medals-by :gold)
                        [(:gold row) (:silver row) (:bronze row)] 
                        (= sort-medals-by :silver)
                        [(:silver row) (:bronze row) (:total row)] 
                        (= sort-medals-by :bronze)
                        [ (:bronze row) (:total row)] 
                        (= sort-medals-by :total)
                        [(:total row) (:gold row) (:silver row) (:bronze row)] 
                        true
                        row
                        ))
                    medals-data)))

;;; TODO: DRY
(register-handler :set-medals-data
                  (fn [db [_ medals-data]]
                    (let [new-medals-data 
                          (map (fn[{:keys [gold silver bronze] :as row}] 
                                 (assoc row :total (+ gold silver bronze)))
                               medals-data)
                          ]
                      (assoc db :medals-data (sort-medals-data new-medals-data (:sort-medals-by db))
                             :ajax-error? false
                             ))))

(register-handler :set-sort-medals-by
                  (fn [db [_ sort-medals-by]]
                    (assoc db :sort-medals-by sort-medals-by
                           :medals-data (sort-medals-data (:medals-data db) sort-medals-by)
                           )))

