(ns medals.views
  (:require 
    [reagent.core :as reagent]
    [re-frame.core :refer [ dispatch
                           subscribe]]
    ))

(defn flag-icon[ioc-code]
  [:div.flag {:class (str "ioc_code_" ioc-code) }
   ]
  )

(defn error-div[]
  (let [ ajax-error? (subscribe [:ajax-error?]) ]
    (if @ajax-error?
      [:div.error
       "A server error occurred"]
      [:div]
      )))

(defn header[]
  [:div.header.headerSilverColor
   "MEDAL COUNT"
   ]

  )
(defn medal-class-sort-control[ { sort-medals-by :sort-medals-by ;; a ref
                                 medal-class :medal-class  ;; a symbol
                                 key :key}]
  ;; sort controls for gold,silver, and bronze totals.
  ;; Sort control consists of a colored circle
  [
   (if (= @sort-medals-by medal-class)
     :div.colMedalClass.currentSort
     :div.colMedalClass)
   { 
    :class medal-class 
    :on-click 
    #(dispatch [:set-sort-medals-by medal-class]) 
    }
   [:div.circle {:key medal-class
                 :class medal-class
                 }]
   ]
  )

(defn total-sort-control[sort-medals-by]
  ;; sort-medals-by is a reaction
  (let [sort-keyword :total]
    [ (if (= @sort-medals-by sort-keyword)
        :div.colTotal.currentSort
        :div.colTotal)
     { :on-click 
      #(dispatch [:set-sort-medals-by sort-keyword]) 
      }
     [:div
      "TOTAL"]
     ]
    ))

(defn gold-silver-and-bronze-sort-controls[sort-medals-by]
  ;; sort-medals-by is a reaction.
  [:div  ;; TODO: review use of empty div as grouping.
   (doall (map-indexed
            (fn[idx medal-class]
              [medal-class-sort-control 
               {:medal-class medal-class
                :key idx
                :sort-medals-by sort-medals-by
                }
               ]) [:gold :silver :bronze]))
   ]) 

(defn sort-controls[]
  (let [ sort-medals-by (subscribe [:sort-medals-by]) ]
    [:div.sortControls
     [:div.colId]
     [:div.colFlag]
     [:div.colCountryCode]
     [gold-silver-and-bronze-sort-controls sort-medals-by]
     [total-sort-control sort-medals-by]
     [:div.clearFix] ;; float fix
     ]
    ))

(defn country-row[{:keys [on-last-row? key code gold silver bronze total]}]
  ;; my-last means we are on last row
  [:div.countryRow
   [:div.colId (inc key)]
   [:div.colFlag
    [flag-icon code] 
    ]
   [:div.colCountryCode code]
   [:div.colMedalClass gold]
   [:div.colMedalClass silver]
   [:div.colMedalClass bronze]
   [:div.colTotal total]
   (if-not on-last-row?
     [:div.clearFix] 
     ;; don't put clearFix on last row; it messes with the medalCountTable size. 
     )
   ]
  )

(defn medal-count-table[]
  (let [ medals-data (subscribe [:medals-data])
         maximum-countries-to-show (subscribe [:maximum-countries-to-show])
         row-count (min @maximum-countries-to-show (count @medals-data))
        ]
    [:div.medalCountTable
     [header]
     [error-div]
     [sort-controls]
     (doall (map-indexed
              (fn[idx country-data]
                [country-row
                 (assoc country-data 
                        :key idx
                        :on-last-row? (= (inc idx) row-count))
                 ]) (take row-count @medals-data)))
     ] 
    ))
