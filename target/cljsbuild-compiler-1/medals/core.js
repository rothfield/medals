// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('medals.core');
goog.require('cljs.core');
goog.require('medals.subscriptions');
goog.require('medals.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('medals.views');
goog.require('medals.db');
goog.require('medals.dom_utils');
medals.core.medal_count_main = (function medals$core$medal_count_main(){
var G__15334 = arguments.length;
switch (G__15334) {
case 1:
return medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$1 = (function (dom_id){
return medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$2(dom_id,cljs.core.constant$keyword$gold);
});

medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$2 = (function (dom_id,sort_medals_by){
var G__15335_15340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$initialize,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([medals.db.initial_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$sort_DASH_medals_DASH_by,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(sort_medals_by)], null)], 0))], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15335_15340) : re_frame.core.dispatch_sync.call(null,G__15335_15340));

var G__15336_15341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$load_DASH_medals], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15336_15341) : re_frame.core.dispatch.call(null,G__15336_15341));

var G__15337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.medal_count_table], null);
var G__15338 = medals.dom_utils.by_id(dom_id);
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__15337,G__15338) : reagent.core.render_component.call(null,G__15337,G__15338));
});

medals.core.medal_count_main.cljs$lang$maxFixedArity = 2;
medals.core.init = (function medals$core$init(){
return medals.core.medal_count_main.cljs$core$IFn$_invoke$arity$2("container","gold");
});
goog.exportSymbol('medals.core.init', medals.core.init);
