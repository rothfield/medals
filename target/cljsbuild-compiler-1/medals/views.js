// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('medals.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
medals.views.flag_icon = (function medals$views$flag_icon(ioc_code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$flag,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,[cljs.core.str("ioc_code_"),cljs.core.str(ioc_code)].join('')], null)], null);
});
medals.views.error_div = (function medals$views$error_div(){
var ajax_error_QMARK_ = (function (){var G__14078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ajax_DASH_error_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14078) : re_frame.core.subscribe.call(null,G__14078));
})();
if(cljs.core.truth_((function (){var G__14079 = ajax_error_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14079) : cljs.core.deref.call(null,G__14079));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$error,"A server error occurred"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div], null);
}
});
medals.views.header = (function medals$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$header$headerSilverColor,"MEDAL COUNT"], null);
});
medals.views.medal_class_sort_control = (function medals$views$medal_class_sort_control(p__14080){
var map__14084 = p__14080;
var map__14084__$1 = ((cljs.core.seq_QMARK_(map__14084))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14084):map__14084);
var sort_medals_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.constant$keyword$sort_DASH_medals_DASH_by);
var medal_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.constant$keyword$medal_DASH_class);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.constant$keyword$key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14085 = sort_medals_by;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14085) : cljs.core.deref.call(null,G__14085));
})(),medal_class))?cljs.core.constant$keyword$div$colMedalClass$currentSort:cljs.core.constant$keyword$div$colMedalClass),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,medal_class,cljs.core.constant$keyword$on_DASH_click,((function (map__14084,map__14084__$1,sort_medals_by,medal_class,key){
return (function (){
var G__14086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$set_DASH_sort_DASH_medals_DASH_by,medal_class], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14086) : re_frame.core.dispatch.call(null,G__14086));
});})(map__14084,map__14084__$1,sort_medals_by,medal_class,key))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$circle,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$key,medal_class,cljs.core.constant$keyword$class,medal_class], null)], null)], null);
});
medals.views.total_sort_control = (function medals$views$total_sort_control(sort_medals_by){
var sort_keyword = cljs.core.constant$keyword$total;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14089 = sort_medals_by;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14089) : cljs.core.deref.call(null,G__14089));
})(),sort_keyword))?cljs.core.constant$keyword$div$colTotal$currentSort:cljs.core.constant$keyword$div$colTotal),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$on_DASH_click,((function (sort_keyword){
return (function (){
var G__14090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$set_DASH_sort_DASH_medals_DASH_by,sort_keyword], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14090) : re_frame.core.dispatch.call(null,G__14090));
});})(sort_keyword))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,"TOTAL"], null)], null);
});
medals.views.gold_silver_and_bronze_sort_controls = (function medals$views$gold_silver_and_bronze_sort_controls(sort_medals_by){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,medal_class){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.medal_class_sort_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$medal_DASH_class,medal_class,cljs.core.constant$keyword$key,idx,cljs.core.constant$keyword$sort_DASH_medals_DASH_by,sort_medals_by], null)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gold,cljs.core.constant$keyword$silver,cljs.core.constant$keyword$bronze], null)))], null);
});
medals.views.sort_controls = (function medals$views$sort_controls(){
var sort_medals_by = (function (){var G__14092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$sort_DASH_medals_DASH_by], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14092) : re_frame.core.subscribe.call(null,G__14092));
})();
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$sortControls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colId], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colFlag], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colCountryCode], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.gold_silver_and_bronze_sort_controls,sort_medals_by], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.total_sort_control,sort_medals_by], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$clearFix], null)], null);
});
medals.views.country_row = (function medals$views$country_row(p__14093){
var map__14095 = p__14093;
var map__14095__$1 = ((cljs.core.seq_QMARK_(map__14095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14095):map__14095);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$total);
var bronze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$bronze);
var silver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$silver);
var gold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$gold);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$code);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$key);
var on_last_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.constant$keyword$on_DASH_last_DASH_row_QMARK_);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$countryRow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colId,(key + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colFlag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.flag_icon,code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colCountryCode,code], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colMedalClass,gold], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colMedalClass,silver], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colMedalClass,bronze], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$colTotal,total], null),((cljs.core.not(on_last_row_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$clearFix], null):null)], null);
});
medals.views.medal_count_table = (function medals$views$medal_count_table(){
var medals_data = (function (){var G__14101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$medals_DASH_data], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14101) : re_frame.core.subscribe.call(null,G__14101));
})();
var maximum_countries_to_show = (function (){var G__14102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$maximum_DASH_countries_DASH_to_DASH_show], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14102) : re_frame.core.subscribe.call(null,G__14102));
})();
var row_count = (function (){var x__4654__auto__ = (function (){var G__14103 = maximum_countries_to_show;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14103) : cljs.core.deref.call(null,G__14103));
})();
var y__4655__auto__ = cljs.core.count((function (){var G__14104 = medals_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14104) : cljs.core.deref.call(null,G__14104));
})());
return ((x__4654__auto__ < y__4655__auto__) ? x__4654__auto__ : y__4655__auto__);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$medalCountTable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.error_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.sort_controls], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (medals_data,maximum_countries_to_show,row_count){
return (function (idx,country_data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.country_row,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(country_data,cljs.core.constant$keyword$key,idx,cljs.core.array_seq([cljs.core.constant$keyword$on_DASH_last_DASH_row_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((idx + (1)),row_count)], 0))], null);
});})(medals_data,maximum_countries_to_show,row_count))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(row_count,(function (){var G__14105 = medals_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14105) : cljs.core.deref.call(null,G__14105));
})())))], null);
});
