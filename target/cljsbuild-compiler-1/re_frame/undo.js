// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('reagent.core');
/**
 * Maximum number of undo states maintained
 */
re_frame.undo.max_undos = (function (){var G__16889 = (50);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16889) : cljs.core.atom.call(null,G__16889));
})();
re_frame.undo.set_max_undos_BANG_ = (function re_frame$undo$set_max_undos_BANG_(n){
var G__16892 = re_frame.undo.max_undos;
var G__16893 = n;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16892,G__16893) : cljs.core.reset_BANG_.call(null,G__16892,G__16893));
});
/**
 * A list of history states
 */
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
/**
 * Mirrors undo-list
 */
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_undos_BANG_ = (function re_frame$undo$clear_undos_BANG_(){
var G__16898_16902 = re_frame.undo.undo_list;
var G__16899_16903 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16898_16902,G__16899_16903) : cljs.core.reset_BANG_.call(null,G__16898_16902,G__16899_16903));

var G__16900 = re_frame.undo.undo_explain_list;
var G__16901 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16900,G__16901) : cljs.core.reset_BANG_.call(null,G__16900,G__16901));
});
re_frame.undo.clear_redos_BANG_ = (function re_frame$undo$clear_redos_BANG_(){
var G__16908_16912 = re_frame.undo.redo_list;
var G__16909_16913 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16908_16912,G__16909_16913) : cljs.core.reset_BANG_.call(null,G__16908_16912,G__16909_16913));

var G__16910 = re_frame.undo.redo_explain_list;
var G__16911 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16910,G__16911) : cljs.core.reset_BANG_.call(null,G__16910,G__16911));
});
re_frame.undo.clear_history_BANG_ = (function re_frame$undo$clear_history_BANG_(){
re_frame.undo.clear_undos_BANG_();

re_frame.undo.clear_redos_BANG_();

var G__16916 = re_frame.undo.app_explain;
var G__16917 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16916,G__16917) : cljs.core.reset_BANG_.call(null,G__16916,G__16917));
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
re_frame.undo.store_now_BANG_ = (function re_frame$undo$store_now_BANG_(explanation){
re_frame.undo.clear_redos_BANG_();

var G__16930_16942 = re_frame.undo.undo_list;
var G__16931_16943 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__16932 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16932) : cljs.core.deref.call(null,G__16932));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__16933 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16933) : cljs.core.deref.call(null,G__16933));
})(),(function (){var G__16934 = re_frame.db.app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16934) : cljs.core.deref.call(null,G__16934));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16930_16942,G__16931_16943) : cljs.core.reset_BANG_.call(null,G__16930_16942,G__16931_16943));

var G__16935_16944 = re_frame.undo.undo_explain_list;
var G__16936_16945 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__16937 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16937) : cljs.core.deref.call(null,G__16937));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__16938 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16938) : cljs.core.deref.call(null,G__16938));
})(),(function (){var G__16939 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16939) : cljs.core.deref.call(null,G__16939));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16935_16944,G__16936_16945) : cljs.core.reset_BANG_.call(null,G__16935_16944,G__16936_16945));

var G__16940 = re_frame.undo.app_explain;
var G__16941 = explanation;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16940,G__16941) : cljs.core.reset_BANG_.call(null,G__16940,G__16941));
});
/**
 * Returns true if undos exist, false otherwise
 */
re_frame.undo.undos_QMARK_ = (function re_frame$undo$undos_QMARK_(){
return (cljs.core.count((function (){var G__16947 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16947) : cljs.core.deref.call(null,G__16947));
})()) > (0));
});
/**
 * Returns true if redos exist, false otherwise
 */
re_frame.undo.redos_QMARK_ = (function re_frame$undo$redos_QMARK_(){
return (cljs.core.count((function (){var G__16949 = re_frame.undo.redo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16949) : cljs.core.deref.call(null,G__16949));
})()) > (0));
});
/**
 * Returns list of undo descriptions or empty list if no undos
 */
re_frame.undo.undo_explanations = (function re_frame$undo$undo_explanations(){
if(cljs.core.truth_(re_frame.undo.undos_QMARK_())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__16952 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16952) : cljs.core.deref.call(null,G__16952));
})(),(function (){var G__16953 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16953) : cljs.core.deref.call(null,G__16953));
})());
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.subs.register(cljs.core.constant$keyword$undos_QMARK_,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$redos_QMARK_,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.redos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$undo_DASH_explanations,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undo_explanations();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$redo_DASH_explanations,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
var G__16955 = re_frame.undo.redo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16955) : cljs.core.deref.call(null,G__16955));
}));
}));
re_frame.undo.undo = (function re_frame$undo$undo(undos,cur,redos){
var u = (function (){var G__16965 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16965) : cljs.core.deref.call(null,G__16965));
})();
var r = cljs.core.cons((function (){var G__16966 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16966) : cljs.core.deref.call(null,G__16966));
})(),(function (){var G__16967 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16967) : cljs.core.deref.call(null,G__16967));
})());
var G__16968_16974 = cur;
var G__16969_16975 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16968_16974,G__16969_16975) : cljs.core.reset_BANG_.call(null,G__16968_16974,G__16969_16975));

var G__16970_16976 = redos;
var G__16971_16977 = r;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16970_16976,G__16971_16977) : cljs.core.reset_BANG_.call(null,G__16970_16976,G__16971_16977));

var G__16972 = undos;
var G__16973 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16972,G__16973) : cljs.core.reset_BANG_.call(null,G__16972,G__16973));
});
/**
 * undo n steps or until we run out of undos
 */
re_frame.undo.undo_n = (function re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__4323__auto__ = (n > (0));
if(and__4323__auto__){
return re_frame.undo.undos_QMARK_();
} else {
return and__4323__auto__;
}
})())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__16978 = (n - (1));
n = G__16978;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$undo,(function re_frame$undo$handler(_,p__16979){
var vec__16981 = p__16979;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16981,(1),null);
if(cljs.core.not(re_frame.undo.undos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
} else {
return re_frame.undo.undo_n((function (){var or__4335__auto__ = n;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function re_frame$undo$redo(undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__16991 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16991) : cljs.core.deref.call(null,G__16991));
})(),(function (){var G__16992 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16992) : cljs.core.deref.call(null,G__16992));
})());
var r = (function (){var G__16993 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16993) : cljs.core.deref.call(null,G__16993));
})();
var G__16994_17000 = cur;
var G__16995_17001 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16994_17000,G__16995_17001) : cljs.core.reset_BANG_.call(null,G__16994_17000,G__16995_17001));

var G__16996_17002 = redos;
var G__16997_17003 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16996_17002,G__16997_17003) : cljs.core.reset_BANG_.call(null,G__16996_17002,G__16997_17003));

var G__16998 = undos;
var G__16999 = u;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16998,G__16999) : cljs.core.reset_BANG_.call(null,G__16998,G__16999));
});
/**
 * redo n steps or until we run out of redos
 */
re_frame.undo.redo_n = (function re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__4323__auto__ = (n > (0));
if(and__4323__auto__){
return re_frame.undo.redos_QMARK_();
} else {
return and__4323__auto__;
}
})())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__17004 = (n - (1));
n = G__17004;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$redo,(function re_frame$undo$handler(_,p__17005){
var vec__17007 = p__17005;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17007,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17007,(1),null);
if(cljs.core.not(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.redo_n((function (){var or__4335__auto__ = n;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$purge_DASH_redos,(function re_frame$undo$handler(_,___$1){
if(cljs.core.not(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.clear_redos_BANG_();
}
}));
