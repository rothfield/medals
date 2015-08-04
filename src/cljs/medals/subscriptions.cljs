(ns medals.subscriptions
  (:require-macros 
    [reagent.ratom :refer [reaction]]
    )
  (:require 
    [re-frame.core :refer [register-sub]]
    [reagent.core :as reagent]
    ))

(register-sub :medals-data
              (fn [db _]  
                (reaction (:medals-data @db))))

(register-sub :maximum-countries-to-show
              (fn [db _]  
                (reaction (:maximum-countries-to-show @db))))

(register-sub :ajax-error?
              (fn [db _]  
                (reaction (:ajax-error? @db))))

(register-sub :sort-medals-by
              (fn [db _]  
                (reaction (:sort-medals-by @db))))


