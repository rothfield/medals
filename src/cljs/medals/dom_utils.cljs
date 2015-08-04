(ns medals.dom-utils)

(defn by-id [id]
  (.getElementById js/document (name id)))

