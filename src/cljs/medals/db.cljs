(ns medals.db)

(def initial-state
  {
   :medals-data []
   :ajax-error? false
   :load-medals-url 
   "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json"
   ;;  If no sort parameter is passed the  sort should be by gold medals.
   :sort-medals-by :gold
   ;; choices are :total :gold :silver or :bronze
   :maximum-countries-to-show 10
   })

