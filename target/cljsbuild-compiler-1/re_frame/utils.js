// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$log,(function (p1__17067_SHARP_){
return console.log(p1__17067_SHARP_);
}),cljs.core.constant$keyword$warn,(function (p1__17068_SHARP_){
return console.warn(p1__17068_SHARP_);
}),cljs.core.constant$keyword$error,(function (p1__17069_SHARP_){
return console.error(p1__17069_SHARP_);
}),cljs.core.constant$keyword$group,(function (p1__17070_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__17070_SHARP_);
} else {
return console.log(p1__17070_SHARP_);
}
}),cljs.core.constant$keyword$groupEnd,(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = (function (){var G__17071 = re_frame.utils.default_loggers;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17071) : cljs.core.atom.call(null,G__17071));
})();
/**
 * Change the set (subset?) of logging functions used by re-frame.
 * 'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(){
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.constant$keyword$log.cljs$core$IFn$_invoke$arity$1((function (){var G__17073 = re_frame.utils.loggers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17073) : cljs.core.deref.call(null,G__17073));
})()).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq17072){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17072));
});
re_frame.utils.warn = (function re_frame$utils$warn(){
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.constant$keyword$warn.cljs$core$IFn$_invoke$arity$1((function (){var G__17075 = re_frame.utils.loggers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17075) : cljs.core.deref.call(null,G__17075));
})()).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq17074){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17074));
});
re_frame.utils.group = (function re_frame$utils$group(){
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.constant$keyword$group.cljs$core$IFn$_invoke$arity$1((function (){var G__17077 = re_frame.utils.loggers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17077) : cljs.core.deref.call(null,G__17077));
})()).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq17076){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17076));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.constant$keyword$groupEnd.cljs$core$IFn$_invoke$arity$1((function (){var G__17079 = re_frame.utils.loggers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17079) : cljs.core.deref.call(null,G__17079));
})()).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq17078){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17078));
});
re_frame.utils.error = (function re_frame$utils$error(){
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1((function (){var G__17081 = re_frame.utils.loggers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17081) : cljs.core.deref.call(null,G__17081));
})()).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq17080){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17080));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
