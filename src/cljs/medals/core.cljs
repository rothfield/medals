(ns medals.core
  (:require 
    [medals.dom-utils :refer [by-id]] 
    [medals.db :refer [initial-state]]
    [medals.views :refer [medal-count-table]]
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [medals.handlers]
    [medals.subscriptions]
    ))

(defn remove-trailing-forward-slash[x]
  ;; browsers are adding a forward slash to url parameters
  (if (nil? x)
    x
    (if (= "/" (last x))
      (.substring x 0 (dec (count x)))
      x)))

(defn medal-count-main
  ([dom-id] (medal-count-main dom-id :gold))
  ([dom-id sort-medals-by]
   (let [load-medals-url 
         (remove-trailing-forward-slash (.getParameterValue
                                          (new goog/Uri (.-href (.-location js/window)))
                                          "load-medals-url"))
         extra-merge (if load-medals-url 
                       {:load-medals-url load-medals-url}
                       {})
         ]
     (re-frame/dispatch-sync 
       [:initialize 
        (merge
          initial-state
          { :sort-medals-by (keyword sort-medals-by)}
          extra-merge
          )
        ])
     (re-frame/dispatch [:load-medals])
     (reagent.core/render-component 
       [medal-count-table]
       (by-id dom-id))
     )))

(defn ^:export init [] 
  (medal-count-main "container" "gold"))

