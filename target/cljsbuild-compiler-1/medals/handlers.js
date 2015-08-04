// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('medals.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('ajax.core');
medals.handlers.load_medals_handler = (function medals$handlers$load_medals_handler(response){
var G__15299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$set_DASH_medals_DASH_data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15299) : re_frame.core.dispatch.call(null,G__15299));
});
medals.handlers.load_medals_error_handler = (function medals$handlers$load_medals_error_handler(p__15300){
var map__15303 = p__15300;
var map__15303__$1 = ((cljs.core.seq_QMARK_(map__15303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15303):map__15303);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.constant$keyword$status_DASH_text);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.constant$keyword$status);
console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

var G__15304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$set_DASH_ajax_DASH_error,true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15304) : re_frame.core.dispatch.call(null,G__15304));
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$set_DASH_ajax_DASH_error,(function (db,p__15305){
var vec__15306 = p__15305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15306,(0),null);
var bool = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15306,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.constant$keyword$ajax_DASH_error_QMARK_,bool);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$load_DASH_medals,(function (db,p__15307){
var vec__15308 = p__15307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$load_DASH_medals_DASH_url.cljs$core$IFn$_invoke$arity$1(db),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$handler,medals.handlers.load_medals_handler,cljs.core.constant$keyword$error_DASH_handler,medals.handlers.load_medals_error_handler,cljs.core.constant$keyword$response_DASH_format,cljs.core.constant$keyword$json,cljs.core.constant$keyword$keywords_QMARK_,true], null)], 0));

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$initialize,(function (db,p__15309){
var vec__15310 = p__15309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310,(0),null);
var initial_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([db,initial_state], 0));
}));
medals.handlers.sort_medals_data = (function medals$handlers$sort_medals_data(medals_data,sort_medals_by){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_medals_by,cljs.core.constant$keyword$gold)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gold.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$silver.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$bronze.cljs$core$IFn$_invoke$arity$1(row)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_medals_by,cljs.core.constant$keyword$silver)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$silver.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$bronze.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$total.cljs$core$IFn$_invoke$arity$1(row)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_medals_by,cljs.core.constant$keyword$bronze)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$bronze.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$total.cljs$core$IFn$_invoke$arity$1(row)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_medals_by,cljs.core.constant$keyword$total)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$total.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$gold.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$silver.cljs$core$IFn$_invoke$arity$1(row),cljs.core.constant$keyword$bronze.cljs$core$IFn$_invoke$arity$1(row)], null);
} else {
return row;

}
}
}
}
}),medals_data));
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$set_DASH_medals_DASH_data,(function (db,p__15311){
var vec__15312 = p__15311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(0),null);
var medals_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15312,(1),null);
var new_medals_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15312,_,medals_data){
return (function (p__15313){
var map__15314 = p__15313;
var map__15314__$1 = ((cljs.core.seq_QMARK_(map__15314))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15314):map__15314);
var row = map__15314__$1;
var bronze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15314__$1,cljs.core.constant$keyword$bronze);
var silver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15314__$1,cljs.core.constant$keyword$silver);
var gold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15314__$1,cljs.core.constant$keyword$gold);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,cljs.core.constant$keyword$total,((gold + silver) + bronze));
});})(vec__15312,_,medals_data))
,medals_data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.constant$keyword$medals_DASH_data,medals.handlers.sort_medals_data(new_medals_data,cljs.core.constant$keyword$sort_DASH_medals_DASH_by.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.array_seq([cljs.core.constant$keyword$ajax_DASH_error_QMARK_,false], 0));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$set_DASH_sort_DASH_medals_DASH_by,(function (db,p__15315){
var vec__15316 = p__15315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
var sort_medals_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.constant$keyword$sort_DASH_medals_DASH_by,sort_medals_by,cljs.core.array_seq([cljs.core.constant$keyword$medals_DASH_data,medals.handlers.sort_medals_data(cljs.core.constant$keyword$medals_DASH_data.cljs$core$IFn$_invoke$arity$1(db),sort_medals_by)], 0));
}));
