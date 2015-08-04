// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('re_frame.handlers');
goog.require('cljs.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
/**
 * See https://github.com/Day8/re-frame/issues/65
 */
re_frame.handlers.report_middleware_factories = (function re_frame$handlers$report_middleware_factories(v){
var name_of_factory = (function re_frame$handlers$report_middleware_factories_$_name_of_factory(f){
return cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f));
});
var factory_names_in = (function re_frame$handlers$report_middleware_factories_$_factory_names_in(v__$1){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(name_of_factory,v__$1));
});
var seq__17031 = cljs.core.seq(factory_names_in(v));
var chunk__17032 = null;
var count__17033 = (0);
var i__17034 = (0);
while(true){
if((i__17034 < count__17033)){
var name = chunk__17032.cljs$core$IIndexed$_nth$arity$2(null,i__17034);
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\"."], 0));

var G__17035 = seq__17031;
var G__17036 = chunk__17032;
var G__17037 = count__17033;
var G__17038 = (i__17034 + (1));
seq__17031 = G__17035;
chunk__17032 = G__17036;
count__17033 = G__17037;
i__17034 = G__17038;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17031);
if(temp__4126__auto__){
var seq__17031__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17031__$1)){
var c__5120__auto__ = cljs.core.chunk_first(seq__17031__$1);
var G__17039 = cljs.core.chunk_rest(seq__17031__$1);
var G__17040 = c__5120__auto__;
var G__17041 = cljs.core.count(c__5120__auto__);
var G__17042 = (0);
seq__17031 = G__17039;
chunk__17032 = G__17040;
count__17033 = G__17041;
i__17034 = G__17042;
continue;
} else {
var name = cljs.core.first(seq__17031__$1);
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\"."], 0));

var G__17043 = cljs.core.next(seq__17031__$1);
var G__17044 = null;
var G__17045 = (0);
var G__17046 = (0);
seq__17031 = G__17043;
chunk__17032 = G__17044;
count__17033 = G__17045;
i__17034 = G__17046;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a vector of middleware, filter out any nils, and use "comp" to compose the elements.
 * v can have nested vectors, and will be flattened before "comp" is applied.
 * For convienience, if v is a function (assumed to be middleware already), just return it.
 * Filtering out nils allows us to create Middleware conditionally like this:
 * (comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil
 * 
 */
re_frame.handlers.comp_middleware = (function re_frame$handlers$comp_middleware(v){
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
if(cljs.core.vector_QMARK_(v)){
var v__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(v));
var _ = re_frame.handlers.report_middleware_factories(v__$1);
if(cljs.core.empty_QMARK_(v__$1)){
return cljs.core.identity;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(v__$1))){
return cljs.core.first(v__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,v__$1);

}
}
} else {
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: comp-middleware expects a vector, got: ",v], 0));

}
}
});
re_frame.handlers.id__GT_fn = (function (){var G__17047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17047) : cljs.core.atom.call(null,G__17047));
})();
re_frame.handlers.lookup_handler = (function re_frame$handlers$lookup_handler(event_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17049 = re_frame.handlers.id__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17049) : cljs.core.deref.call(null,G__17049));
})(),event_id);
});
/**
 * Unregister all event handlers
 */
re_frame.handlers.clear_handlers_BANG_ = (function re_frame$handlers$clear_handlers_BANG_(){
var G__17052 = re_frame.handlers.id__GT_fn;
var G__17053 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17052,G__17053) : cljs.core.reset_BANG_.call(null,G__17052,G__17053));
});
/**
 * register a handler for an event.
 * This is low level and it is expected that "re-frame.core/register-handler" would
 * generally be used.
 */
re_frame.handlers.register_base = (function re_frame$handlers$register_base(){
var G__17055 = arguments.length;
switch (G__17055) {
case 2:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_((function (){var G__17056 = re_frame.handlers.id__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17056) : cljs.core.deref.call(null,G__17056));
})(),event_id)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting an event-handler for: ",event_id], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware,handler_fn){
var mid_ware = re_frame.handlers.comp_middleware(middleware);
var midware_PLUS_hfn = (function (){var G__17057 = handler_fn;
return (mid_ware.cljs$core$IFn$_invoke$arity$1 ? mid_ware.cljs$core$IFn$_invoke$arity$1(G__17057) : mid_ware.call(null,G__17057));
})();
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(event_id,midware_PLUS_hfn);
});

re_frame.handlers.register_base.cljs$lang$maxFixedArity = 3;
re_frame.handlers._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the handler, then call it.
 * By default, handlers are not assumed to be pure. They are called with
 * two paramters:
 * - the `app-db` atom
 * - the event vector
 * The handler is assumed to side-effect on `app-db` - the return value is ignored.
 * To write a pure handler, use the "pure" middleware when registering the handler.
 */
re_frame.handlers.handle = (function re_frame$handlers$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var handler_fn = re_frame.handlers.lookup_handler(event_id);
if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no event handler registered for: \"",event_id,"\". Ignoring."], 0));
} else {
if(cljs.core.truth_(re_frame.handlers._STAR_handling_STAR_)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: while handling \"",re_frame.handlers._STAR_handling_STAR_,"\"  dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync in an event handler."], 0));
} else {
var _STAR_handling_STAR_17062 = re_frame.handlers._STAR_handling_STAR_;
re_frame.handlers._STAR_handling_STAR_ = event_v;

try{var G__17063 = re_frame.db.app_db;
var G__17064 = event_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__17063,G__17064) : handler_fn.call(null,G__17063,G__17064));
}finally {re_frame.handlers._STAR_handling_STAR_ = _STAR_handling_STAR_17062;
}}
}
});
