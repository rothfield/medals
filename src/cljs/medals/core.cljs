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

(defn medal-count-main
  ([dom-id] (medal-count-main dom-id :gold))
  ([dom-id sort-medals-by]
   (re-frame/dispatch-sync [:initialize 
                   (merge
                     initial-state
                     { :sort-medals-by (keyword sort-medals-by)}) 
                   ])
   (re-frame/dispatch [:load-medals])
   (reagent.core/render-component 
     [medal-count-table]
     (by-id dom-id))
   ))

(defn ^:export init [] 
  (medal-count-main "container" "gold"))

