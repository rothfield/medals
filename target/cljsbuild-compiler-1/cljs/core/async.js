// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17206 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17206 = (function (f,fn_handler,meta17207){
this.f = f;
this.fn_handler = fn_handler;
this.meta17207 = meta17207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17208){
var self__ = this;
var _17208__$1 = this;
return self__.meta17207;
});

cljs.core.async.t17206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17208,meta17207__$1){
var self__ = this;
var _17208__$1 = this;
return (new cljs.core.async.t17206(self__.f,self__.fn_handler,meta17207__$1));
});

cljs.core.async.t17206.cljs$lang$type = true;

cljs.core.async.t17206.cljs$lang$ctorStr = "cljs.core.async/t17206";

cljs.core.async.t17206.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17206");
});

cljs.core.async.__GT_t17206 = (function cljs$core$async$fn_handler_$___GT_t17206(f__$1,fn_handler__$1,meta17207){
return (new cljs.core.async.t17206(f__$1,fn_handler__$1,meta17207));
});

}

return (new cljs.core.async.t17206(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17210 = buff;
if(G__17210){
var bit__5009__auto__ = null;
if(cljs.core.truth_((function (){var or__4335__auto__ = bit__5009__auto__;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return G__17210.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17210.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17210);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17210);
}
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 * will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__17212 = arguments.length;
switch (G__17212) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__17215 = arguments.length;
switch (G__17215) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17220 = (function (){var G__17216 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17216) : cljs.core.deref.call(null,G__17216));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17217_17221 = val_17220;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17217_17221) : fn1.call(null,G__17217_17221));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17220,ret){
return (function (){
var G__17218 = val_17220;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17218) : fn1.call(null,G__17218));
});})(val_17220,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__17223 = arguments.length;
switch (G__17223) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__17224 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17224) : cljs.core.deref.call(null,G__17224));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__17225 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17225) : cljs.core.deref.call(null,G__17225));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17226_17229 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17226_17229) : fn1.call(null,G__17226_17229));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17227 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17227) : fn1.call(null,G__17227));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5220__auto___17230 = n;
var x_17231 = (0);
while(true){
if((x_17231 < n__5220__auto___17230)){
(a[x_17231] = (0));

var G__17232 = (x_17231 + (1));
x_17231 = G__17232;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17233 = (i + (1));
i = G__17233;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17241 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17241) : cljs.core.atom.call(null,G__17241));
})();
if(typeof cljs.core.async.t17242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17242 = (function (flag,alt_flag,meta17243){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17243 = meta17243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17242.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17245 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17245) : cljs.core.deref.call(null,G__17245));
});})(flag))
;

cljs.core.async.t17242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17246_17248 = self__.flag;
var G__17247_17249 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17246_17248,G__17247_17249) : cljs.core.reset_BANG_.call(null,G__17246_17248,G__17247_17249));

return true;
});})(flag))
;

cljs.core.async.t17242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17244){
var self__ = this;
var _17244__$1 = this;
return self__.meta17243;
});})(flag))
;

cljs.core.async.t17242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17244,meta17243__$1){
var self__ = this;
var _17244__$1 = this;
return (new cljs.core.async.t17242(self__.flag,self__.alt_flag,meta17243__$1));
});})(flag))
;

cljs.core.async.t17242.cljs$lang$type = true;

cljs.core.async.t17242.cljs$lang$ctorStr = "cljs.core.async/t17242";

cljs.core.async.t17242.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17242");
});})(flag))
;

cljs.core.async.__GT_t17242 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17242(flag__$1,alt_flag__$1,meta17243){
return (new cljs.core.async.t17242(flag__$1,alt_flag__$1,meta17243));
});})(flag))
;

}

return (new cljs.core.async.t17242(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17253 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17253 = (function (cb,flag,alt_handler,meta17254){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17254 = meta17254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17255){
var self__ = this;
var _17255__$1 = this;
return self__.meta17254;
});

cljs.core.async.t17253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17255,meta17254__$1){
var self__ = this;
var _17255__$1 = this;
return (new cljs.core.async.t17253(self__.cb,self__.flag,self__.alt_handler,meta17254__$1));
});

cljs.core.async.t17253.cljs$lang$type = true;

cljs.core.async.t17253.cljs$lang$ctorStr = "cljs.core.async/t17253";

cljs.core.async.t17253.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17253");
});

cljs.core.async.__GT_t17253 = (function cljs$core$async$alt_handler_$___GT_t17253(cb__$1,flag__$1,alt_handler__$1,meta17254){
return (new cljs.core.async.t17253(cb__$1,flag__$1,alt_handler__$1,meta17254));
});

}

return (new cljs.core.async.t17253(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17263 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17263) : port.call(null,G__17263));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17264 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17264) : port.call(null,G__17264));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17256_SHARP_){
var G__17265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17256_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17265) : fret.call(null,G__17265));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17257_SHARP_){
var G__17266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17257_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17266) : fret.call(null,G__17266));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17267 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17267) : cljs.core.deref.call(null,G__17267));
})(),(function (){var or__4335__auto__ = wport;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17268 = (i + (1));
i = G__17268;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4335__auto__ = ret;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4126__auto__ = (function (){var and__4323__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4323__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4323__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17271){
var map__17272 = p__17271;
var map__17272__$1 = ((cljs.core.seq_QMARK_(map__17272))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17272):map__17272);
var opts = map__17272__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17269){
var G__17270 = cljs.core.first(seq17269);
var seq17269__$1 = cljs.core.next(seq17269);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17270,seq17269__$1);
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values produced by applying f to each value taken from
 * the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t17286 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17286 = (function (ch,f,map_LT_,meta17287){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17287 = meta17287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t17289 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17289 = (function (fn1,_,meta17287,map_LT_,f,ch,meta17290){
this.fn1 = fn1;
this._ = _;
this.meta17287 = meta17287;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17290 = meta17290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17289.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t17289.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var G__17292 = self__.fn1;
return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__17292) : cljs.core.async.impl.protocols.lock_id.call(null,G__17292));
});})(___$1))
;

cljs.core.async.t17289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17273_SHARP_){
var G__17293 = (((p1__17273_SHARP_ == null))?null:(function (){var G__17294 = p1__17273_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17294) : self__.f.call(null,G__17294));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17293) : f1.call(null,G__17293));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17291){
var self__ = this;
var _17291__$1 = this;
return self__.meta17290;
});})(___$1))
;

cljs.core.async.t17289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17291,meta17290__$1){
var self__ = this;
var _17291__$1 = this;
return (new cljs.core.async.t17289(self__.fn1,self__._,self__.meta17287,self__.map_LT_,self__.f,self__.ch,meta17290__$1));
});})(___$1))
;

cljs.core.async.t17289.cljs$lang$type = true;

cljs.core.async.t17289.cljs$lang$ctorStr = "cljs.core.async/t17289";

cljs.core.async.t17289.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17289");
});})(___$1))
;

cljs.core.async.__GT_t17289 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t17289(fn1__$1,___$2,meta17287__$1,map_LT___$1,f__$1,ch__$1,meta17290){
return (new cljs.core.async.t17289(fn1__$1,___$2,meta17287__$1,map_LT___$1,f__$1,ch__$1,meta17290));
});})(___$1))
;

}

return (new cljs.core.async.t17289(fn1,___$1,self__.meta17287,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4323__auto__ = ret;
if(cljs.core.truth_(and__4323__auto__)){
return !(((function (){var G__17295 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17295) : cljs.core.deref.call(null,G__17295));
})() == null));
} else {
return and__4323__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17296 = (function (){var G__17297 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17297) : cljs.core.deref.call(null,G__17297));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17296) : self__.f.call(null,G__17296));
})());
} else {
return ret;
}
});

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t17286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17288){
var self__ = this;
var _17288__$1 = this;
return self__.meta17287;
});

cljs.core.async.t17286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17288,meta17287__$1){
var self__ = this;
var _17288__$1 = this;
return (new cljs.core.async.t17286(self__.ch,self__.f,self__.map_LT_,meta17287__$1));
});

cljs.core.async.t17286.cljs$lang$type = true;

cljs.core.async.t17286.cljs$lang$ctorStr = "cljs.core.async/t17286";

cljs.core.async.t17286.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17286");
});

cljs.core.async.__GT_t17286 = (function cljs$core$async$map_LT__$___GT_t17286(ch__$1,f__$1,map_LT___$1,meta17287){
return (new cljs.core.async.t17286(ch__$1,f__$1,map_LT___$1,meta17287));
});

}

return (new cljs.core.async.t17286(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t17302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17302 = (function (ch,f,map_GT_,meta17303){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17303 = meta17303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__17305 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17305) : self__.f.call(null,G__17305));
})(),fn1);
});

cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17304){
var self__ = this;
var _17304__$1 = this;
return self__.meta17303;
});

cljs.core.async.t17302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17304,meta17303__$1){
var self__ = this;
var _17304__$1 = this;
return (new cljs.core.async.t17302(self__.ch,self__.f,self__.map_GT_,meta17303__$1));
});

cljs.core.async.t17302.cljs$lang$type = true;

cljs.core.async.t17302.cljs$lang$ctorStr = "cljs.core.async/t17302";

cljs.core.async.t17302.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17302");
});

cljs.core.async.__GT_t17302 = (function cljs$core$async$map_GT__$___GT_t17302(ch__$1,f__$1,map_GT___$1,meta17303){
return (new cljs.core.async.t17302(ch__$1,f__$1,map_GT___$1,meta17303));
});

}

return (new cljs.core.async.t17302(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns true to the
 * target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t17310 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17310 = (function (ch,p,filter_GT_,meta17311){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17311 = meta17311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__17313 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__17313) : self__.p.call(null,G__17313));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t17310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17312){
var self__ = this;
var _17312__$1 = this;
return self__.meta17311;
});

cljs.core.async.t17310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17312,meta17311__$1){
var self__ = this;
var _17312__$1 = this;
return (new cljs.core.async.t17310(self__.ch,self__.p,self__.filter_GT_,meta17311__$1));
});

cljs.core.async.t17310.cljs$lang$type = true;

cljs.core.async.t17310.cljs$lang$ctorStr = "cljs.core.async/t17310";

cljs.core.async.t17310.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t17310");
});

cljs.core.async.__GT_t17310 = (function cljs$core$async$filter_GT__$___GT_t17310(ch__$1,p__$1,filter_GT___$1,meta17311){
return (new cljs.core.async.t17310(ch__$1,p__$1,filter_GT___$1,meta17311));
});

}

return (new cljs.core.async.t17310(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns false to the
 * target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns true. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__17315 = arguments.length;
switch (G__17315) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___17359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___17359,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___17359,out){
return (function (state_17336){
var state_val_17337 = (state_17336[(1)]);
if((state_val_17337 === (7))){
var inst_17332 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17338_17360 = state_17336__$1;
(statearr_17338_17360[(2)] = inst_17332);

(statearr_17338_17360[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (1))){
var state_17336__$1 = state_17336;
var statearr_17339_17361 = state_17336__$1;
(statearr_17339_17361[(2)] = null);

(statearr_17339_17361[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (4))){
var inst_17318 = (state_17336[(7)]);
var inst_17318__$1 = (state_17336[(2)]);
var inst_17319 = (inst_17318__$1 == null);
var state_17336__$1 = (function (){var statearr_17340 = state_17336;
(statearr_17340[(7)] = inst_17318__$1);

return statearr_17340;
})();
if(cljs.core.truth_(inst_17319)){
var statearr_17341_17362 = state_17336__$1;
(statearr_17341_17362[(1)] = (5));

} else {
var statearr_17342_17363 = state_17336__$1;
(statearr_17342_17363[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (6))){
var inst_17318 = (state_17336[(7)]);
var inst_17323 = (function (){var G__17343 = inst_17318;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17343) : p.call(null,G__17343));
})();
var state_17336__$1 = state_17336;
if(cljs.core.truth_(inst_17323)){
var statearr_17344_17364 = state_17336__$1;
(statearr_17344_17364[(1)] = (8));

} else {
var statearr_17345_17365 = state_17336__$1;
(statearr_17345_17365[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (3))){
var inst_17334 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17336__$1,inst_17334);
} else {
if((state_val_17337 === (2))){
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17336__$1,(4),ch);
} else {
if((state_val_17337 === (11))){
var inst_17326 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17346_17366 = state_17336__$1;
(statearr_17346_17366[(2)] = inst_17326);

(statearr_17346_17366[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (9))){
var state_17336__$1 = state_17336;
var statearr_17347_17367 = state_17336__$1;
(statearr_17347_17367[(2)] = null);

(statearr_17347_17367[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (5))){
var inst_17321 = cljs.core.async.close_BANG_(out);
var state_17336__$1 = state_17336;
var statearr_17348_17368 = state_17336__$1;
(statearr_17348_17368[(2)] = inst_17321);

(statearr_17348_17368[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (10))){
var inst_17329 = (state_17336[(2)]);
var state_17336__$1 = (function (){var statearr_17349 = state_17336;
(statearr_17349[(8)] = inst_17329);

return statearr_17349;
})();
var statearr_17350_17369 = state_17336__$1;
(statearr_17350_17369[(2)] = null);

(statearr_17350_17369[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17337 === (8))){
var inst_17318 = (state_17336[(7)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17336__$1,(11),out,inst_17318);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___17359,out))
;
return ((function (switch__11530__auto__,c__11621__auto___17359,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_17354 = [null,null,null,null,null,null,null,null,null];
(statearr_17354[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_17354[(1)] = (1));

return statearr_17354;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_17336){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17336);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17355){if((e17355 instanceof Object)){
var ex__11534__auto__ = e17355;
var statearr_17356_17370 = state_17336;
(statearr_17356_17370[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17336);

return cljs.core.constant$keyword$recur;
} else {
throw e17355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17371 = state_17336;
state_17336 = G__17371;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_17336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_17336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___17359,out))
})();
var state__11623__auto__ = (function (){var statearr_17357 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___17359);

return statearr_17357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___17359,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns false. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17373 = arguments.length;
switch (G__17373) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto__){
return (function (state_17541){
var state_val_17542 = (state_17541[(1)]);
if((state_val_17542 === (7))){
var inst_17537 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17543_17585 = state_17541__$1;
(statearr_17543_17585[(2)] = inst_17537);

(statearr_17543_17585[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (20))){
var inst_17507 = (state_17541[(7)]);
var inst_17518 = (state_17541[(2)]);
var inst_17519 = cljs.core.next(inst_17507);
var inst_17493 = inst_17519;
var inst_17494 = null;
var inst_17495 = (0);
var inst_17496 = (0);
var state_17541__$1 = (function (){var statearr_17544 = state_17541;
(statearr_17544[(8)] = inst_17518);

(statearr_17544[(9)] = inst_17495);

(statearr_17544[(10)] = inst_17493);

(statearr_17544[(11)] = inst_17494);

(statearr_17544[(12)] = inst_17496);

return statearr_17544;
})();
var statearr_17545_17586 = state_17541__$1;
(statearr_17545_17586[(2)] = null);

(statearr_17545_17586[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (1))){
var state_17541__$1 = state_17541;
var statearr_17546_17587 = state_17541__$1;
(statearr_17546_17587[(2)] = null);

(statearr_17546_17587[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (4))){
var inst_17482 = (state_17541[(13)]);
var inst_17482__$1 = (state_17541[(2)]);
var inst_17483 = (inst_17482__$1 == null);
var state_17541__$1 = (function (){var statearr_17547 = state_17541;
(statearr_17547[(13)] = inst_17482__$1);

return statearr_17547;
})();
if(cljs.core.truth_(inst_17483)){
var statearr_17548_17588 = state_17541__$1;
(statearr_17548_17588[(1)] = (5));

} else {
var statearr_17549_17589 = state_17541__$1;
(statearr_17549_17589[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (15))){
var state_17541__$1 = state_17541;
var statearr_17553_17590 = state_17541__$1;
(statearr_17553_17590[(2)] = null);

(statearr_17553_17590[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (21))){
var state_17541__$1 = state_17541;
var statearr_17554_17591 = state_17541__$1;
(statearr_17554_17591[(2)] = null);

(statearr_17554_17591[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (13))){
var inst_17495 = (state_17541[(9)]);
var inst_17493 = (state_17541[(10)]);
var inst_17494 = (state_17541[(11)]);
var inst_17496 = (state_17541[(12)]);
var inst_17503 = (state_17541[(2)]);
var inst_17504 = (inst_17496 + (1));
var tmp17550 = inst_17495;
var tmp17551 = inst_17493;
var tmp17552 = inst_17494;
var inst_17493__$1 = tmp17551;
var inst_17494__$1 = tmp17552;
var inst_17495__$1 = tmp17550;
var inst_17496__$1 = inst_17504;
var state_17541__$1 = (function (){var statearr_17555 = state_17541;
(statearr_17555[(9)] = inst_17495__$1);

(statearr_17555[(10)] = inst_17493__$1);

(statearr_17555[(11)] = inst_17494__$1);

(statearr_17555[(12)] = inst_17496__$1);

(statearr_17555[(14)] = inst_17503);

return statearr_17555;
})();
var statearr_17556_17592 = state_17541__$1;
(statearr_17556_17592[(2)] = null);

(statearr_17556_17592[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (22))){
var state_17541__$1 = state_17541;
var statearr_17557_17593 = state_17541__$1;
(statearr_17557_17593[(2)] = null);

(statearr_17557_17593[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (6))){
var inst_17482 = (state_17541[(13)]);
var inst_17491 = (function (){var G__17558 = inst_17482;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17558) : f.call(null,G__17558));
})();
var inst_17492 = cljs.core.seq(inst_17491);
var inst_17493 = inst_17492;
var inst_17494 = null;
var inst_17495 = (0);
var inst_17496 = (0);
var state_17541__$1 = (function (){var statearr_17559 = state_17541;
(statearr_17559[(9)] = inst_17495);

(statearr_17559[(10)] = inst_17493);

(statearr_17559[(11)] = inst_17494);

(statearr_17559[(12)] = inst_17496);

return statearr_17559;
})();
var statearr_17560_17594 = state_17541__$1;
(statearr_17560_17594[(2)] = null);

(statearr_17560_17594[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (17))){
var inst_17507 = (state_17541[(7)]);
var inst_17511 = cljs.core.chunk_first(inst_17507);
var inst_17512 = cljs.core.chunk_rest(inst_17507);
var inst_17513 = cljs.core.count(inst_17511);
var inst_17493 = inst_17512;
var inst_17494 = inst_17511;
var inst_17495 = inst_17513;
var inst_17496 = (0);
var state_17541__$1 = (function (){var statearr_17561 = state_17541;
(statearr_17561[(9)] = inst_17495);

(statearr_17561[(10)] = inst_17493);

(statearr_17561[(11)] = inst_17494);

(statearr_17561[(12)] = inst_17496);

return statearr_17561;
})();
var statearr_17562_17595 = state_17541__$1;
(statearr_17562_17595[(2)] = null);

(statearr_17562_17595[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (3))){
var inst_17539 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17541__$1,inst_17539);
} else {
if((state_val_17542 === (12))){
var inst_17527 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17563_17596 = state_17541__$1;
(statearr_17563_17596[(2)] = inst_17527);

(statearr_17563_17596[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (2))){
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17541__$1,(4),in$);
} else {
if((state_val_17542 === (23))){
var inst_17535 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17564_17597 = state_17541__$1;
(statearr_17564_17597[(2)] = inst_17535);

(statearr_17564_17597[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (19))){
var inst_17522 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17565_17598 = state_17541__$1;
(statearr_17565_17598[(2)] = inst_17522);

(statearr_17565_17598[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (11))){
var inst_17507 = (state_17541[(7)]);
var inst_17493 = (state_17541[(10)]);
var inst_17507__$1 = cljs.core.seq(inst_17493);
var state_17541__$1 = (function (){var statearr_17566 = state_17541;
(statearr_17566[(7)] = inst_17507__$1);

return statearr_17566;
})();
if(inst_17507__$1){
var statearr_17567_17599 = state_17541__$1;
(statearr_17567_17599[(1)] = (14));

} else {
var statearr_17568_17600 = state_17541__$1;
(statearr_17568_17600[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (9))){
var inst_17529 = (state_17541[(2)]);
var inst_17530 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17541__$1 = (function (){var statearr_17569 = state_17541;
(statearr_17569[(15)] = inst_17529);

return statearr_17569;
})();
if(cljs.core.truth_(inst_17530)){
var statearr_17570_17601 = state_17541__$1;
(statearr_17570_17601[(1)] = (21));

} else {
var statearr_17571_17602 = state_17541__$1;
(statearr_17571_17602[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (5))){
var inst_17485 = cljs.core.async.close_BANG_(out);
var state_17541__$1 = state_17541;
var statearr_17572_17603 = state_17541__$1;
(statearr_17572_17603[(2)] = inst_17485);

(statearr_17572_17603[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (14))){
var inst_17507 = (state_17541[(7)]);
var inst_17509 = cljs.core.chunked_seq_QMARK_(inst_17507);
var state_17541__$1 = state_17541;
if(inst_17509){
var statearr_17573_17604 = state_17541__$1;
(statearr_17573_17604[(1)] = (17));

} else {
var statearr_17574_17605 = state_17541__$1;
(statearr_17574_17605[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (16))){
var inst_17525 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17575_17606 = state_17541__$1;
(statearr_17575_17606[(2)] = inst_17525);

(statearr_17575_17606[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17542 === (10))){
var inst_17494 = (state_17541[(11)]);
var inst_17496 = (state_17541[(12)]);
var inst_17501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17494,inst_17496);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17541__$1,(13),out,inst_17501);
} else {
if((state_val_17542 === (18))){
var inst_17507 = (state_17541[(7)]);
var inst_17516 = cljs.core.first(inst_17507);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17541__$1,(20),out,inst_17516);
} else {
if((state_val_17542 === (8))){
var inst_17495 = (state_17541[(9)]);
var inst_17496 = (state_17541[(12)]);
var inst_17498 = (inst_17496 < inst_17495);
var inst_17499 = inst_17498;
var state_17541__$1 = state_17541;
if(cljs.core.truth_(inst_17499)){
var statearr_17576_17607 = state_17541__$1;
(statearr_17576_17607[(1)] = (10));

} else {
var statearr_17577_17608 = state_17541__$1;
(statearr_17577_17608[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto__))
;
return ((function (switch__11530__auto__,c__11621__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____0 = (function (){
var statearr_17581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17581[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__);

(statearr_17581[(1)] = (1));

return statearr_17581;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____1 = (function (state_17541){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17541);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17582){if((e17582 instanceof Object)){
var ex__11534__auto__ = e17582;
var statearr_17583_17609 = state_17541;
(statearr_17583_17609[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17541);

return cljs.core.constant$keyword$recur;
} else {
throw e17582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17610 = state_17541;
state_17541 = G__17610;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__ = function(state_17541){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____1.call(this,state_17541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11531__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_17584 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_17584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values in each collection produced by applying f to
 * each value taken from the source channel. f must return a
 * collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The channel will close when the source channel
 * closes.
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17612 = arguments.length;
switch (G__17612) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value put, then supplies each element of the result
 * to the target channel. f must return a collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The target channel will be closed when the source
 * channel closes.
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__17615 = arguments.length;
switch (G__17615) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__17618 = arguments.length;
switch (G__17618) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11621__auto___17667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___17667){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___17667){
return (function (state_17642){
var state_val_17643 = (state_17642[(1)]);
if((state_val_17643 === (7))){
var inst_17638 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17644_17668 = state_17642__$1;
(statearr_17644_17668[(2)] = inst_17638);

(statearr_17644_17668[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (1))){
var state_17642__$1 = state_17642;
var statearr_17645_17669 = state_17642__$1;
(statearr_17645_17669[(2)] = null);

(statearr_17645_17669[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (4))){
var inst_17621 = (state_17642[(7)]);
var inst_17621__$1 = (state_17642[(2)]);
var inst_17622 = (inst_17621__$1 == null);
var state_17642__$1 = (function (){var statearr_17646 = state_17642;
(statearr_17646[(7)] = inst_17621__$1);

return statearr_17646;
})();
if(cljs.core.truth_(inst_17622)){
var statearr_17647_17670 = state_17642__$1;
(statearr_17647_17670[(1)] = (5));

} else {
var statearr_17648_17671 = state_17642__$1;
(statearr_17648_17671[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (13))){
var state_17642__$1 = state_17642;
var statearr_17649_17672 = state_17642__$1;
(statearr_17649_17672[(2)] = null);

(statearr_17649_17672[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (6))){
var inst_17621 = (state_17642[(7)]);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17642__$1,(11),to,inst_17621);
} else {
if((state_val_17643 === (3))){
var inst_17640 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17642__$1,inst_17640);
} else {
if((state_val_17643 === (12))){
var state_17642__$1 = state_17642;
var statearr_17650_17673 = state_17642__$1;
(statearr_17650_17673[(2)] = null);

(statearr_17650_17673[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (2))){
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17642__$1,(4),from);
} else {
if((state_val_17643 === (11))){
var inst_17631 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
if(cljs.core.truth_(inst_17631)){
var statearr_17651_17674 = state_17642__$1;
(statearr_17651_17674[(1)] = (12));

} else {
var statearr_17652_17675 = state_17642__$1;
(statearr_17652_17675[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (9))){
var state_17642__$1 = state_17642;
var statearr_17653_17676 = state_17642__$1;
(statearr_17653_17676[(2)] = null);

(statearr_17653_17676[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (5))){
var state_17642__$1 = state_17642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17654_17677 = state_17642__$1;
(statearr_17654_17677[(1)] = (8));

} else {
var statearr_17655_17678 = state_17642__$1;
(statearr_17655_17678[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (14))){
var inst_17636 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17656_17679 = state_17642__$1;
(statearr_17656_17679[(2)] = inst_17636);

(statearr_17656_17679[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (10))){
var inst_17628 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17657_17680 = state_17642__$1;
(statearr_17657_17680[(2)] = inst_17628);

(statearr_17657_17680[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17643 === (8))){
var inst_17625 = cljs.core.async.close_BANG_(to);
var state_17642__$1 = state_17642;
var statearr_17658_17681 = state_17642__$1;
(statearr_17658_17681[(2)] = inst_17625);

(statearr_17658_17681[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___17667))
;
return ((function (switch__11530__auto__,c__11621__auto___17667){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_17662 = [null,null,null,null,null,null,null,null];
(statearr_17662[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_17662[(1)] = (1));

return statearr_17662;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_17642){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17642);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17663){if((e17663 instanceof Object)){
var ex__11534__auto__ = e17663;
var statearr_17664_17682 = state_17642;
(statearr_17664_17682[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17642);

return cljs.core.constant$keyword$recur;
} else {
throw e17663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17683 = state_17642;
state_17642 = G__17683;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_17642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_17642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___17667))
})();
var state__11623__auto__ = (function (){var statearr_17665 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___17667);

return statearr_17665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___17667))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__17685 = arguments.length;
switch (G__17685) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11621__auto___17738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___17738,tc,fc){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___17738,tc,fc){
return (function (state_17711){
var state_val_17712 = (state_17711[(1)]);
if((state_val_17712 === (7))){
var inst_17707 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17713_17739 = state_17711__$1;
(statearr_17713_17739[(2)] = inst_17707);

(statearr_17713_17739[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (1))){
var state_17711__$1 = state_17711;
var statearr_17714_17740 = state_17711__$1;
(statearr_17714_17740[(2)] = null);

(statearr_17714_17740[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (4))){
var inst_17688 = (state_17711[(7)]);
var inst_17688__$1 = (state_17711[(2)]);
var inst_17689 = (inst_17688__$1 == null);
var state_17711__$1 = (function (){var statearr_17715 = state_17711;
(statearr_17715[(7)] = inst_17688__$1);

return statearr_17715;
})();
if(cljs.core.truth_(inst_17689)){
var statearr_17716_17741 = state_17711__$1;
(statearr_17716_17741[(1)] = (5));

} else {
var statearr_17717_17742 = state_17711__$1;
(statearr_17717_17742[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (13))){
var state_17711__$1 = state_17711;
var statearr_17718_17743 = state_17711__$1;
(statearr_17718_17743[(2)] = null);

(statearr_17718_17743[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (6))){
var inst_17688 = (state_17711[(7)]);
var inst_17694 = (function (){var G__17719 = inst_17688;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17719) : p.call(null,G__17719));
})();
var state_17711__$1 = state_17711;
if(cljs.core.truth_(inst_17694)){
var statearr_17720_17744 = state_17711__$1;
(statearr_17720_17744[(1)] = (9));

} else {
var statearr_17721_17745 = state_17711__$1;
(statearr_17721_17745[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (3))){
var inst_17709 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17711__$1,inst_17709);
} else {
if((state_val_17712 === (12))){
var state_17711__$1 = state_17711;
var statearr_17722_17746 = state_17711__$1;
(statearr_17722_17746[(2)] = null);

(statearr_17722_17746[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (2))){
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17711__$1,(4),ch);
} else {
if((state_val_17712 === (11))){
var inst_17688 = (state_17711[(7)]);
var inst_17698 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17711__$1,(8),inst_17698,inst_17688);
} else {
if((state_val_17712 === (9))){
var state_17711__$1 = state_17711;
var statearr_17723_17747 = state_17711__$1;
(statearr_17723_17747[(2)] = tc);

(statearr_17723_17747[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (5))){
var inst_17691 = cljs.core.async.close_BANG_(tc);
var inst_17692 = cljs.core.async.close_BANG_(fc);
var state_17711__$1 = (function (){var statearr_17724 = state_17711;
(statearr_17724[(8)] = inst_17691);

return statearr_17724;
})();
var statearr_17725_17748 = state_17711__$1;
(statearr_17725_17748[(2)] = inst_17692);

(statearr_17725_17748[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (14))){
var inst_17705 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
var statearr_17726_17749 = state_17711__$1;
(statearr_17726_17749[(2)] = inst_17705);

(statearr_17726_17749[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (10))){
var state_17711__$1 = state_17711;
var statearr_17727_17750 = state_17711__$1;
(statearr_17727_17750[(2)] = fc);

(statearr_17727_17750[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17712 === (8))){
var inst_17700 = (state_17711[(2)]);
var state_17711__$1 = state_17711;
if(cljs.core.truth_(inst_17700)){
var statearr_17728_17751 = state_17711__$1;
(statearr_17728_17751[(1)] = (12));

} else {
var statearr_17729_17752 = state_17711__$1;
(statearr_17729_17752[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___17738,tc,fc))
;
return ((function (switch__11530__auto__,c__11621__auto___17738,tc,fc){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_17733 = [null,null,null,null,null,null,null,null,null];
(statearr_17733[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_17733[(1)] = (1));

return statearr_17733;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_17711){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17711);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17734){if((e17734 instanceof Object)){
var ex__11534__auto__ = e17734;
var statearr_17735_17753 = state_17711;
(statearr_17735_17753[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17711);

return cljs.core.constant$keyword$recur;
} else {
throw e17734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17754 = state_17711;
state_17711 = G__17754;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_17711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_17711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___17738,tc,fc))
})();
var state__11623__auto__ = (function (){var statearr_17736 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___17738);

return statearr_17736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___17738,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto__){
return (function (state_17803){
var state_val_17804 = (state_17803[(1)]);
if((state_val_17804 === (7))){
var inst_17799 = (state_17803[(2)]);
var state_17803__$1 = state_17803;
var statearr_17805_17823 = state_17803__$1;
(statearr_17805_17823[(2)] = inst_17799);

(statearr_17805_17823[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17804 === (6))){
var inst_17792 = (state_17803[(7)]);
var inst_17789 = (state_17803[(8)]);
var inst_17796 = (function (){var G__17806 = inst_17789;
var G__17807 = inst_17792;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17806,G__17807) : f.call(null,G__17806,G__17807));
})();
var inst_17789__$1 = inst_17796;
var state_17803__$1 = (function (){var statearr_17808 = state_17803;
(statearr_17808[(8)] = inst_17789__$1);

return statearr_17808;
})();
var statearr_17809_17824 = state_17803__$1;
(statearr_17809_17824[(2)] = null);

(statearr_17809_17824[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17804 === (5))){
var inst_17789 = (state_17803[(8)]);
var state_17803__$1 = state_17803;
var statearr_17810_17825 = state_17803__$1;
(statearr_17810_17825[(2)] = inst_17789);

(statearr_17810_17825[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17804 === (4))){
var inst_17792 = (state_17803[(7)]);
var inst_17792__$1 = (state_17803[(2)]);
var inst_17793 = (inst_17792__$1 == null);
var state_17803__$1 = (function (){var statearr_17811 = state_17803;
(statearr_17811[(7)] = inst_17792__$1);

return statearr_17811;
})();
if(cljs.core.truth_(inst_17793)){
var statearr_17812_17826 = state_17803__$1;
(statearr_17812_17826[(1)] = (5));

} else {
var statearr_17813_17827 = state_17803__$1;
(statearr_17813_17827[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17804 === (3))){
var inst_17801 = (state_17803[(2)]);
var state_17803__$1 = state_17803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17803__$1,inst_17801);
} else {
if((state_val_17804 === (2))){
var state_17803__$1 = state_17803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17803__$1,(4),ch);
} else {
if((state_val_17804 === (1))){
var inst_17789 = init;
var state_17803__$1 = (function (){var statearr_17814 = state_17803;
(statearr_17814[(8)] = inst_17789);

return statearr_17814;
})();
var statearr_17815_17828 = state_17803__$1;
(statearr_17815_17828[(2)] = null);

(statearr_17815_17828[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11621__auto__))
;
return ((function (switch__11530__auto__,c__11621__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11531__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11531__auto____0 = (function (){
var statearr_17819 = [null,null,null,null,null,null,null,null,null];
(statearr_17819[(0)] = cljs$core$async$reduce_$_state_machine__11531__auto__);

(statearr_17819[(1)] = (1));

return statearr_17819;
});
var cljs$core$async$reduce_$_state_machine__11531__auto____1 = (function (state_17803){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17803);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object)){
var ex__11534__auto__ = e17820;
var statearr_17821_17829 = state_17803;
(statearr_17821_17829[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17803);

return cljs.core.constant$keyword$recur;
} else {
throw e17820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17830 = state_17803;
state_17803 = G__17830;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11531__auto__ = function(state_17803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11531__auto____1.call(this,state_17803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11531__auto____0;
cljs$core$async$reduce_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11531__auto____1;
return cljs$core$async$reduce_$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_17822 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__17832 = arguments.length;
switch (G__17832) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto__){
return (function (state_17857){
var state_val_17858 = (state_17857[(1)]);
if((state_val_17858 === (7))){
var inst_17839 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17859_17883 = state_17857__$1;
(statearr_17859_17883[(2)] = inst_17839);

(statearr_17859_17883[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (1))){
var inst_17833 = cljs.core.seq(coll);
var inst_17834 = inst_17833;
var state_17857__$1 = (function (){var statearr_17860 = state_17857;
(statearr_17860[(7)] = inst_17834);

return statearr_17860;
})();
var statearr_17861_17884 = state_17857__$1;
(statearr_17861_17884[(2)] = null);

(statearr_17861_17884[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (4))){
var inst_17834 = (state_17857[(7)]);
var inst_17837 = cljs.core.first(inst_17834);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17857__$1,(7),ch,inst_17837);
} else {
if((state_val_17858 === (13))){
var inst_17851 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17862_17885 = state_17857__$1;
(statearr_17862_17885[(2)] = inst_17851);

(statearr_17862_17885[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (6))){
var inst_17842 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
if(cljs.core.truth_(inst_17842)){
var statearr_17863_17886 = state_17857__$1;
(statearr_17863_17886[(1)] = (8));

} else {
var statearr_17864_17887 = state_17857__$1;
(statearr_17864_17887[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (3))){
var inst_17855 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17857__$1,inst_17855);
} else {
if((state_val_17858 === (12))){
var state_17857__$1 = state_17857;
var statearr_17865_17888 = state_17857__$1;
(statearr_17865_17888[(2)] = null);

(statearr_17865_17888[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (2))){
var inst_17834 = (state_17857[(7)]);
var state_17857__$1 = state_17857;
if(cljs.core.truth_(inst_17834)){
var statearr_17866_17889 = state_17857__$1;
(statearr_17866_17889[(1)] = (4));

} else {
var statearr_17867_17890 = state_17857__$1;
(statearr_17867_17890[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (11))){
var inst_17848 = cljs.core.async.close_BANG_(ch);
var state_17857__$1 = state_17857;
var statearr_17868_17891 = state_17857__$1;
(statearr_17868_17891[(2)] = inst_17848);

(statearr_17868_17891[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (9))){
var state_17857__$1 = state_17857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17869_17892 = state_17857__$1;
(statearr_17869_17892[(1)] = (11));

} else {
var statearr_17870_17893 = state_17857__$1;
(statearr_17870_17893[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (5))){
var inst_17834 = (state_17857[(7)]);
var state_17857__$1 = state_17857;
var statearr_17871_17894 = state_17857__$1;
(statearr_17871_17894[(2)] = inst_17834);

(statearr_17871_17894[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (10))){
var inst_17853 = (state_17857[(2)]);
var state_17857__$1 = state_17857;
var statearr_17872_17895 = state_17857__$1;
(statearr_17872_17895[(2)] = inst_17853);

(statearr_17872_17895[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17858 === (8))){
var inst_17834 = (state_17857[(7)]);
var inst_17844 = cljs.core.next(inst_17834);
var inst_17834__$1 = inst_17844;
var state_17857__$1 = (function (){var statearr_17873 = state_17857;
(statearr_17873[(7)] = inst_17834__$1);

return statearr_17873;
})();
var statearr_17874_17896 = state_17857__$1;
(statearr_17874_17896[(2)] = null);

(statearr_17874_17896[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto__))
;
return ((function (switch__11530__auto__,c__11621__auto__){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_17878 = [null,null,null,null,null,null,null,null];
(statearr_17878[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_17878[(1)] = (1));

return statearr_17878;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_17857){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17857);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17879){if((e17879 instanceof Object)){
var ex__11534__auto__ = e17879;
var statearr_17880_17897 = state_17857;
(statearr_17880_17897[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17857);

return cljs.core.constant$keyword$recur;
} else {
throw e17879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17898 = state_17857;
state_17857 = G__17898;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_17857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_17857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_17881 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_17881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj17900 = {};
return obj17900;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4323__auto__ = _;
if(and__4323__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4971__auto__ = (((_ == null))?null:_);
return (function (){var or__4335__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__17904 = x__4971__auto__;
return goog.typeOf(G__17904);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17906 = {};
return obj17906;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__17910 = x__4971__auto__;
return goog.typeOf(G__17910);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__17914 = x__4971__auto__;
return goog.typeOf(G__17914);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__17918 = x__4971__auto__;
return goog.typeOf(G__17918);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18148 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18148) : cljs.core.atom.call(null,G__18148));
})();
var m = (function (){
if(typeof cljs.core.async.t18149 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18149 = (function (cs,ch,mult,meta18150){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18150 = meta18150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18149.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18152_18377 = self__.cs;
var G__18153_18378 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18152_18377,G__18153_18378) : cljs.core.reset_BANG_.call(null,G__18152_18377,G__18153_18378));

return null;
});})(cs))
;

cljs.core.async.t18149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18151){
var self__ = this;
var _18151__$1 = this;
return self__.meta18150;
});})(cs))
;

cljs.core.async.t18149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18151,meta18150__$1){
var self__ = this;
var _18151__$1 = this;
return (new cljs.core.async.t18149(self__.cs,self__.ch,self__.mult,meta18150__$1));
});})(cs))
;

cljs.core.async.t18149.cljs$lang$type = true;

cljs.core.async.t18149.cljs$lang$ctorStr = "cljs.core.async/t18149";

cljs.core.async.t18149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t18149");
});})(cs))
;

cljs.core.async.__GT_t18149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18149(cs__$1,ch__$1,mult__$1,meta18150){
return (new cljs.core.async.t18149(cs__$1,ch__$1,mult__$1,meta18150));
});})(cs))
;

}

return (new cljs.core.async.t18149(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18154 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18154) : cljs.core.atom.call(null,G__18154));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11621__auto___18379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___18379,cs,m,dchan,dctr,done){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___18379,cs,m,dchan,dctr,done){
return (function (state_18285){
var state_val_18286 = (state_18285[(1)]);
if((state_val_18286 === (7))){
var inst_18281 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18287_18380 = state_18285__$1;
(statearr_18287_18380[(2)] = inst_18281);

(statearr_18287_18380[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (20))){
var inst_18186 = (state_18285[(7)]);
var inst_18196 = cljs.core.first(inst_18186);
var inst_18197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18196,(0),null);
var inst_18198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18196,(1),null);
var state_18285__$1 = (function (){var statearr_18288 = state_18285;
(statearr_18288[(8)] = inst_18197);

return statearr_18288;
})();
if(cljs.core.truth_(inst_18198)){
var statearr_18289_18381 = state_18285__$1;
(statearr_18289_18381[(1)] = (22));

} else {
var statearr_18290_18382 = state_18285__$1;
(statearr_18290_18382[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (27))){
var inst_18157 = (state_18285[(9)]);
var inst_18233 = (state_18285[(10)]);
var inst_18228 = (state_18285[(11)]);
var inst_18226 = (state_18285[(12)]);
var inst_18233__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18226,inst_18228);
var inst_18234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18233__$1,inst_18157,done);
var state_18285__$1 = (function (){var statearr_18291 = state_18285;
(statearr_18291[(10)] = inst_18233__$1);

return statearr_18291;
})();
if(cljs.core.truth_(inst_18234)){
var statearr_18292_18383 = state_18285__$1;
(statearr_18292_18383[(1)] = (30));

} else {
var statearr_18293_18384 = state_18285__$1;
(statearr_18293_18384[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (1))){
var state_18285__$1 = state_18285;
var statearr_18294_18385 = state_18285__$1;
(statearr_18294_18385[(2)] = null);

(statearr_18294_18385[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (24))){
var inst_18186 = (state_18285[(7)]);
var inst_18203 = (state_18285[(2)]);
var inst_18204 = cljs.core.next(inst_18186);
var inst_18166 = inst_18204;
var inst_18167 = null;
var inst_18168 = (0);
var inst_18169 = (0);
var state_18285__$1 = (function (){var statearr_18295 = state_18285;
(statearr_18295[(13)] = inst_18169);

(statearr_18295[(14)] = inst_18167);

(statearr_18295[(15)] = inst_18168);

(statearr_18295[(16)] = inst_18203);

(statearr_18295[(17)] = inst_18166);

return statearr_18295;
})();
var statearr_18296_18386 = state_18285__$1;
(statearr_18296_18386[(2)] = null);

(statearr_18296_18386[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (39))){
var state_18285__$1 = state_18285;
var statearr_18300_18387 = state_18285__$1;
(statearr_18300_18387[(2)] = null);

(statearr_18300_18387[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (4))){
var inst_18157 = (state_18285[(9)]);
var inst_18157__$1 = (state_18285[(2)]);
var inst_18158 = (inst_18157__$1 == null);
var state_18285__$1 = (function (){var statearr_18301 = state_18285;
(statearr_18301[(9)] = inst_18157__$1);

return statearr_18301;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18302_18388 = state_18285__$1;
(statearr_18302_18388[(1)] = (5));

} else {
var statearr_18303_18389 = state_18285__$1;
(statearr_18303_18389[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (15))){
var inst_18169 = (state_18285[(13)]);
var inst_18167 = (state_18285[(14)]);
var inst_18168 = (state_18285[(15)]);
var inst_18166 = (state_18285[(17)]);
var inst_18182 = (state_18285[(2)]);
var inst_18183 = (inst_18169 + (1));
var tmp18297 = inst_18167;
var tmp18298 = inst_18168;
var tmp18299 = inst_18166;
var inst_18166__$1 = tmp18299;
var inst_18167__$1 = tmp18297;
var inst_18168__$1 = tmp18298;
var inst_18169__$1 = inst_18183;
var state_18285__$1 = (function (){var statearr_18304 = state_18285;
(statearr_18304[(13)] = inst_18169__$1);

(statearr_18304[(14)] = inst_18167__$1);

(statearr_18304[(18)] = inst_18182);

(statearr_18304[(15)] = inst_18168__$1);

(statearr_18304[(17)] = inst_18166__$1);

return statearr_18304;
})();
var statearr_18305_18390 = state_18285__$1;
(statearr_18305_18390[(2)] = null);

(statearr_18305_18390[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (21))){
var inst_18207 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18309_18391 = state_18285__$1;
(statearr_18309_18391[(2)] = inst_18207);

(statearr_18309_18391[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (31))){
var inst_18233 = (state_18285[(10)]);
var inst_18237 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_18238 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18233);
var state_18285__$1 = (function (){var statearr_18310 = state_18285;
(statearr_18310[(19)] = inst_18237);

return statearr_18310;
})();
var statearr_18311_18392 = state_18285__$1;
(statearr_18311_18392[(2)] = inst_18238);

(statearr_18311_18392[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (32))){
var inst_18225 = (state_18285[(20)]);
var inst_18228 = (state_18285[(11)]);
var inst_18227 = (state_18285[(21)]);
var inst_18226 = (state_18285[(12)]);
var inst_18240 = (state_18285[(2)]);
var inst_18241 = (inst_18228 + (1));
var tmp18306 = inst_18225;
var tmp18307 = inst_18227;
var tmp18308 = inst_18226;
var inst_18225__$1 = tmp18306;
var inst_18226__$1 = tmp18308;
var inst_18227__$1 = tmp18307;
var inst_18228__$1 = inst_18241;
var state_18285__$1 = (function (){var statearr_18312 = state_18285;
(statearr_18312[(22)] = inst_18240);

(statearr_18312[(20)] = inst_18225__$1);

(statearr_18312[(11)] = inst_18228__$1);

(statearr_18312[(21)] = inst_18227__$1);

(statearr_18312[(12)] = inst_18226__$1);

return statearr_18312;
})();
var statearr_18313_18393 = state_18285__$1;
(statearr_18313_18393[(2)] = null);

(statearr_18313_18393[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (40))){
var inst_18253 = (state_18285[(23)]);
var inst_18257 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var inst_18258 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18253);
var state_18285__$1 = (function (){var statearr_18314 = state_18285;
(statearr_18314[(24)] = inst_18257);

return statearr_18314;
})();
var statearr_18315_18394 = state_18285__$1;
(statearr_18315_18394[(2)] = inst_18258);

(statearr_18315_18394[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (33))){
var inst_18244 = (state_18285[(25)]);
var inst_18246 = cljs.core.chunked_seq_QMARK_(inst_18244);
var state_18285__$1 = state_18285;
if(inst_18246){
var statearr_18316_18395 = state_18285__$1;
(statearr_18316_18395[(1)] = (36));

} else {
var statearr_18317_18396 = state_18285__$1;
(statearr_18317_18396[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (13))){
var inst_18176 = (state_18285[(26)]);
var inst_18179 = cljs.core.async.close_BANG_(inst_18176);
var state_18285__$1 = state_18285;
var statearr_18318_18397 = state_18285__$1;
(statearr_18318_18397[(2)] = inst_18179);

(statearr_18318_18397[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (22))){
var inst_18197 = (state_18285[(8)]);
var inst_18200 = cljs.core.async.close_BANG_(inst_18197);
var state_18285__$1 = state_18285;
var statearr_18319_18398 = state_18285__$1;
(statearr_18319_18398[(2)] = inst_18200);

(statearr_18319_18398[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (36))){
var inst_18244 = (state_18285[(25)]);
var inst_18248 = cljs.core.chunk_first(inst_18244);
var inst_18249 = cljs.core.chunk_rest(inst_18244);
var inst_18250 = cljs.core.count(inst_18248);
var inst_18225 = inst_18249;
var inst_18226 = inst_18248;
var inst_18227 = inst_18250;
var inst_18228 = (0);
var state_18285__$1 = (function (){var statearr_18320 = state_18285;
(statearr_18320[(20)] = inst_18225);

(statearr_18320[(11)] = inst_18228);

(statearr_18320[(21)] = inst_18227);

(statearr_18320[(12)] = inst_18226);

return statearr_18320;
})();
var statearr_18321_18399 = state_18285__$1;
(statearr_18321_18399[(2)] = null);

(statearr_18321_18399[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (41))){
var inst_18244 = (state_18285[(25)]);
var inst_18260 = (state_18285[(2)]);
var inst_18261 = cljs.core.next(inst_18244);
var inst_18225 = inst_18261;
var inst_18226 = null;
var inst_18227 = (0);
var inst_18228 = (0);
var state_18285__$1 = (function (){var statearr_18322 = state_18285;
(statearr_18322[(27)] = inst_18260);

(statearr_18322[(20)] = inst_18225);

(statearr_18322[(11)] = inst_18228);

(statearr_18322[(21)] = inst_18227);

(statearr_18322[(12)] = inst_18226);

return statearr_18322;
})();
var statearr_18323_18400 = state_18285__$1;
(statearr_18323_18400[(2)] = null);

(statearr_18323_18400[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (43))){
var state_18285__$1 = state_18285;
var statearr_18324_18401 = state_18285__$1;
(statearr_18324_18401[(2)] = null);

(statearr_18324_18401[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (29))){
var inst_18269 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18325_18402 = state_18285__$1;
(statearr_18325_18402[(2)] = inst_18269);

(statearr_18325_18402[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (44))){
var inst_18278 = (state_18285[(2)]);
var state_18285__$1 = (function (){var statearr_18326 = state_18285;
(statearr_18326[(28)] = inst_18278);

return statearr_18326;
})();
var statearr_18327_18403 = state_18285__$1;
(statearr_18327_18403[(2)] = null);

(statearr_18327_18403[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (6))){
var inst_18217 = (state_18285[(29)]);
var inst_18216 = (function (){var G__18328 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18328) : cljs.core.deref.call(null,G__18328));
})();
var inst_18217__$1 = cljs.core.keys(inst_18216);
var inst_18218 = cljs.core.count(inst_18217__$1);
var inst_18219 = (function (){var G__18329 = dctr;
var G__18330 = inst_18218;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18329,G__18330) : cljs.core.reset_BANG_.call(null,G__18329,G__18330));
})();
var inst_18224 = cljs.core.seq(inst_18217__$1);
var inst_18225 = inst_18224;
var inst_18226 = null;
var inst_18227 = (0);
var inst_18228 = (0);
var state_18285__$1 = (function (){var statearr_18331 = state_18285;
(statearr_18331[(30)] = inst_18219);

(statearr_18331[(20)] = inst_18225);

(statearr_18331[(11)] = inst_18228);

(statearr_18331[(29)] = inst_18217__$1);

(statearr_18331[(21)] = inst_18227);

(statearr_18331[(12)] = inst_18226);

return statearr_18331;
})();
var statearr_18332_18404 = state_18285__$1;
(statearr_18332_18404[(2)] = null);

(statearr_18332_18404[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (28))){
var inst_18244 = (state_18285[(25)]);
var inst_18225 = (state_18285[(20)]);
var inst_18244__$1 = cljs.core.seq(inst_18225);
var state_18285__$1 = (function (){var statearr_18333 = state_18285;
(statearr_18333[(25)] = inst_18244__$1);

return statearr_18333;
})();
if(inst_18244__$1){
var statearr_18334_18405 = state_18285__$1;
(statearr_18334_18405[(1)] = (33));

} else {
var statearr_18335_18406 = state_18285__$1;
(statearr_18335_18406[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (25))){
var inst_18228 = (state_18285[(11)]);
var inst_18227 = (state_18285[(21)]);
var inst_18230 = (inst_18228 < inst_18227);
var inst_18231 = inst_18230;
var state_18285__$1 = state_18285;
if(cljs.core.truth_(inst_18231)){
var statearr_18336_18407 = state_18285__$1;
(statearr_18336_18407[(1)] = (27));

} else {
var statearr_18337_18408 = state_18285__$1;
(statearr_18337_18408[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (34))){
var state_18285__$1 = state_18285;
var statearr_18338_18409 = state_18285__$1;
(statearr_18338_18409[(2)] = null);

(statearr_18338_18409[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (17))){
var state_18285__$1 = state_18285;
var statearr_18339_18410 = state_18285__$1;
(statearr_18339_18410[(2)] = null);

(statearr_18339_18410[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (3))){
var inst_18283 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18285__$1,inst_18283);
} else {
if((state_val_18286 === (12))){
var inst_18212 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18340_18411 = state_18285__$1;
(statearr_18340_18411[(2)] = inst_18212);

(statearr_18340_18411[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (2))){
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18285__$1,(4),ch);
} else {
if((state_val_18286 === (23))){
var state_18285__$1 = state_18285;
var statearr_18341_18412 = state_18285__$1;
(statearr_18341_18412[(2)] = null);

(statearr_18341_18412[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (35))){
var inst_18267 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18342_18413 = state_18285__$1;
(statearr_18342_18413[(2)] = inst_18267);

(statearr_18342_18413[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (19))){
var inst_18186 = (state_18285[(7)]);
var inst_18190 = cljs.core.chunk_first(inst_18186);
var inst_18191 = cljs.core.chunk_rest(inst_18186);
var inst_18192 = cljs.core.count(inst_18190);
var inst_18166 = inst_18191;
var inst_18167 = inst_18190;
var inst_18168 = inst_18192;
var inst_18169 = (0);
var state_18285__$1 = (function (){var statearr_18343 = state_18285;
(statearr_18343[(13)] = inst_18169);

(statearr_18343[(14)] = inst_18167);

(statearr_18343[(15)] = inst_18168);

(statearr_18343[(17)] = inst_18166);

return statearr_18343;
})();
var statearr_18344_18414 = state_18285__$1;
(statearr_18344_18414[(2)] = null);

(statearr_18344_18414[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (11))){
var inst_18186 = (state_18285[(7)]);
var inst_18166 = (state_18285[(17)]);
var inst_18186__$1 = cljs.core.seq(inst_18166);
var state_18285__$1 = (function (){var statearr_18345 = state_18285;
(statearr_18345[(7)] = inst_18186__$1);

return statearr_18345;
})();
if(inst_18186__$1){
var statearr_18346_18415 = state_18285__$1;
(statearr_18346_18415[(1)] = (16));

} else {
var statearr_18347_18416 = state_18285__$1;
(statearr_18347_18416[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (9))){
var inst_18214 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18348_18417 = state_18285__$1;
(statearr_18348_18417[(2)] = inst_18214);

(statearr_18348_18417[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (5))){
var inst_18164 = (function (){var G__18349 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18349) : cljs.core.deref.call(null,G__18349));
})();
var inst_18165 = cljs.core.seq(inst_18164);
var inst_18166 = inst_18165;
var inst_18167 = null;
var inst_18168 = (0);
var inst_18169 = (0);
var state_18285__$1 = (function (){var statearr_18350 = state_18285;
(statearr_18350[(13)] = inst_18169);

(statearr_18350[(14)] = inst_18167);

(statearr_18350[(15)] = inst_18168);

(statearr_18350[(17)] = inst_18166);

return statearr_18350;
})();
var statearr_18351_18418 = state_18285__$1;
(statearr_18351_18418[(2)] = null);

(statearr_18351_18418[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (14))){
var state_18285__$1 = state_18285;
var statearr_18352_18419 = state_18285__$1;
(statearr_18352_18419[(2)] = null);

(statearr_18352_18419[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (45))){
var inst_18275 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18353_18420 = state_18285__$1;
(statearr_18353_18420[(2)] = inst_18275);

(statearr_18353_18420[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (26))){
var inst_18217 = (state_18285[(29)]);
var inst_18271 = (state_18285[(2)]);
var inst_18272 = cljs.core.seq(inst_18217);
var state_18285__$1 = (function (){var statearr_18354 = state_18285;
(statearr_18354[(31)] = inst_18271);

return statearr_18354;
})();
if(inst_18272){
var statearr_18355_18421 = state_18285__$1;
(statearr_18355_18421[(1)] = (42));

} else {
var statearr_18356_18422 = state_18285__$1;
(statearr_18356_18422[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (16))){
var inst_18186 = (state_18285[(7)]);
var inst_18188 = cljs.core.chunked_seq_QMARK_(inst_18186);
var state_18285__$1 = state_18285;
if(inst_18188){
var statearr_18357_18423 = state_18285__$1;
(statearr_18357_18423[(1)] = (19));

} else {
var statearr_18358_18424 = state_18285__$1;
(statearr_18358_18424[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (38))){
var inst_18264 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18359_18425 = state_18285__$1;
(statearr_18359_18425[(2)] = inst_18264);

(statearr_18359_18425[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (30))){
var state_18285__$1 = state_18285;
var statearr_18360_18426 = state_18285__$1;
(statearr_18360_18426[(2)] = null);

(statearr_18360_18426[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (10))){
var inst_18169 = (state_18285[(13)]);
var inst_18167 = (state_18285[(14)]);
var inst_18175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18167,inst_18169);
var inst_18176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18175,(0),null);
var inst_18177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18175,(1),null);
var state_18285__$1 = (function (){var statearr_18361 = state_18285;
(statearr_18361[(26)] = inst_18176);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18177)){
var statearr_18362_18427 = state_18285__$1;
(statearr_18362_18427[(1)] = (13));

} else {
var statearr_18363_18428 = state_18285__$1;
(statearr_18363_18428[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (18))){
var inst_18210 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18364_18429 = state_18285__$1;
(statearr_18364_18429[(2)] = inst_18210);

(statearr_18364_18429[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (42))){
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18285__$1,(45),dchan);
} else {
if((state_val_18286 === (37))){
var inst_18253 = (state_18285[(23)]);
var inst_18157 = (state_18285[(9)]);
var inst_18244 = (state_18285[(25)]);
var inst_18253__$1 = cljs.core.first(inst_18244);
var inst_18254 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18253__$1,inst_18157,done);
var state_18285__$1 = (function (){var statearr_18365 = state_18285;
(statearr_18365[(23)] = inst_18253__$1);

return statearr_18365;
})();
if(cljs.core.truth_(inst_18254)){
var statearr_18366_18430 = state_18285__$1;
(statearr_18366_18430[(1)] = (39));

} else {
var statearr_18367_18431 = state_18285__$1;
(statearr_18367_18431[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18286 === (8))){
var inst_18169 = (state_18285[(13)]);
var inst_18168 = (state_18285[(15)]);
var inst_18171 = (inst_18169 < inst_18168);
var inst_18172 = inst_18171;
var state_18285__$1 = state_18285;
if(cljs.core.truth_(inst_18172)){
var statearr_18368_18432 = state_18285__$1;
(statearr_18368_18432[(1)] = (10));

} else {
var statearr_18369_18433 = state_18285__$1;
(statearr_18369_18433[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___18379,cs,m,dchan,dctr,done))
;
return ((function (switch__11530__auto__,c__11621__auto___18379,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11531__auto__ = null;
var cljs$core$async$mult_$_state_machine__11531__auto____0 = (function (){
var statearr_18373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18373[(0)] = cljs$core$async$mult_$_state_machine__11531__auto__);

(statearr_18373[(1)] = (1));

return statearr_18373;
});
var cljs$core$async$mult_$_state_machine__11531__auto____1 = (function (state_18285){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_18285);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e18374){if((e18374 instanceof Object)){
var ex__11534__auto__ = e18374;
var statearr_18375_18434 = state_18285;
(statearr_18375_18434[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18285);

return cljs.core.constant$keyword$recur;
} else {
throw e18374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__18435 = state_18285;
state_18285 = G__18435;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11531__auto__ = function(state_18285){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11531__auto____1.call(this,state_18285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11531__auto____0;
cljs$core$async$mult_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11531__auto____1;
return cljs$core$async$mult_$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___18379,cs,m,dchan,dctr,done))
})();
var state__11623__auto__ = (function (){var statearr_18376 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_18376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___18379);

return statearr_18376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___18379,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__18437 = arguments.length;
switch (G__18437) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj18440 = {};
return obj18440;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__18444 = x__4971__auto__;
return goog.typeOf(G__18444);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__18448 = x__4971__auto__;
return goog.typeOf(G__18448);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__18452 = x__4971__auto__;
return goog.typeOf(G__18452);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__18456 = x__4971__auto__;
return goog.typeOf(G__18456);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4323__auto__ = m;
if(and__4323__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4971__auto__ = (((m == null))?null:m);
return (function (){var or__4335__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__18460 = x__4971__auto__;
return goog.typeOf(G__18460);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18594 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18594) : cljs.core.atom.call(null,G__18594));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__18595 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18595) : cljs.core.atom.call(null,G__18595));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__18596 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__18596) : attr.call(null,G__18596));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__18597 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18597) : cljs.core.deref.call(null,G__18597));
})();
var mode = (function (){var G__18598 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18598) : cljs.core.deref.call(null,G__18598));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18599 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18600){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18600 = meta18600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18599.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18602_18727 = self__.cs;
var G__18603_18728 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18602_18727,G__18603_18728) : cljs.core.reset_BANG_.call(null,G__18602_18727,G__18603_18728));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__18604 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__18604) : self__.solo_modes.call(null,G__18604));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__18605_18729 = self__.solo_mode;
var G__18606_18730 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18605_18729,G__18606_18730) : cljs.core.reset_BANG_.call(null,G__18605_18729,G__18606_18730));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18601){
var self__ = this;
var _18601__$1 = this;
return self__.meta18600;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18601,meta18600__$1){
var self__ = this;
var _18601__$1 = this;
return (new cljs.core.async.t18599(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18600__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18599.cljs$lang$type = true;

cljs.core.async.t18599.cljs$lang$ctorStr = "cljs.core.async/t18599";

cljs.core.async.t18599.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t18599");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18599 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18599(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18600){
return (new cljs.core.async.t18599(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18600));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18599(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11621__auto___18731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18678){
var state_val_18679 = (state_18678[(1)]);
if((state_val_18679 === (7))){
var inst_18620 = (state_18678[(7)]);
var inst_18625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18620);
var state_18678__$1 = state_18678;
var statearr_18680_18732 = state_18678__$1;
(statearr_18680_18732[(2)] = inst_18625);

(statearr_18680_18732[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (20))){
var inst_18635 = (state_18678[(8)]);
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18678__$1,(23),out,inst_18635);
} else {
if((state_val_18679 === (1))){
var inst_18610 = (state_18678[(9)]);
var inst_18610__$1 = calc_state();
var inst_18611 = cljs.core.seq_QMARK_(inst_18610__$1);
var state_18678__$1 = (function (){var statearr_18681 = state_18678;
(statearr_18681[(9)] = inst_18610__$1);

return statearr_18681;
})();
if(inst_18611){
var statearr_18682_18733 = state_18678__$1;
(statearr_18682_18733[(1)] = (2));

} else {
var statearr_18683_18734 = state_18678__$1;
(statearr_18683_18734[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (24))){
var inst_18628 = (state_18678[(10)]);
var inst_18620 = inst_18628;
var state_18678__$1 = (function (){var statearr_18684 = state_18678;
(statearr_18684[(7)] = inst_18620);

return statearr_18684;
})();
var statearr_18685_18735 = state_18678__$1;
(statearr_18685_18735[(2)] = null);

(statearr_18685_18735[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (4))){
var inst_18610 = (state_18678[(9)]);
var inst_18616 = (state_18678[(2)]);
var inst_18617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18616,cljs.core.constant$keyword$reads);
var inst_18618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18616,cljs.core.constant$keyword$mutes);
var inst_18619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18616,cljs.core.constant$keyword$solos);
var inst_18620 = inst_18610;
var state_18678__$1 = (function (){var statearr_18686 = state_18678;
(statearr_18686[(11)] = inst_18618);

(statearr_18686[(7)] = inst_18620);

(statearr_18686[(12)] = inst_18619);

(statearr_18686[(13)] = inst_18617);

return statearr_18686;
})();
var statearr_18687_18736 = state_18678__$1;
(statearr_18687_18736[(2)] = null);

(statearr_18687_18736[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (15))){
var state_18678__$1 = state_18678;
var statearr_18688_18737 = state_18678__$1;
(statearr_18688_18737[(2)] = null);

(statearr_18688_18737[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (21))){
var inst_18628 = (state_18678[(10)]);
var inst_18620 = inst_18628;
var state_18678__$1 = (function (){var statearr_18689 = state_18678;
(statearr_18689[(7)] = inst_18620);

return statearr_18689;
})();
var statearr_18690_18738 = state_18678__$1;
(statearr_18690_18738[(2)] = null);

(statearr_18690_18738[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (13))){
var inst_18674 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18691_18739 = state_18678__$1;
(statearr_18691_18739[(2)] = inst_18674);

(statearr_18691_18739[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (22))){
var inst_18672 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18692_18740 = state_18678__$1;
(statearr_18692_18740[(2)] = inst_18672);

(statearr_18692_18740[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (6))){
var inst_18676 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18678__$1,inst_18676);
} else {
if((state_val_18679 === (25))){
var state_18678__$1 = state_18678;
var statearr_18693_18741 = state_18678__$1;
(statearr_18693_18741[(2)] = null);

(statearr_18693_18741[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (17))){
var inst_18651 = (state_18678[(14)]);
var state_18678__$1 = state_18678;
var statearr_18694_18742 = state_18678__$1;
(statearr_18694_18742[(2)] = inst_18651);

(statearr_18694_18742[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (3))){
var inst_18610 = (state_18678[(9)]);
var state_18678__$1 = state_18678;
var statearr_18695_18743 = state_18678__$1;
(statearr_18695_18743[(2)] = inst_18610);

(statearr_18695_18743[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (12))){
var inst_18631 = (state_18678[(15)]);
var inst_18651 = (state_18678[(14)]);
var inst_18636 = (state_18678[(16)]);
var inst_18651__$1 = (function (){var G__18696 = inst_18636;
return (inst_18631.cljs$core$IFn$_invoke$arity$1 ? inst_18631.cljs$core$IFn$_invoke$arity$1(G__18696) : inst_18631.call(null,G__18696));
})();
var state_18678__$1 = (function (){var statearr_18697 = state_18678;
(statearr_18697[(14)] = inst_18651__$1);

return statearr_18697;
})();
if(cljs.core.truth_(inst_18651__$1)){
var statearr_18698_18744 = state_18678__$1;
(statearr_18698_18744[(1)] = (17));

} else {
var statearr_18699_18745 = state_18678__$1;
(statearr_18699_18745[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (2))){
var inst_18610 = (state_18678[(9)]);
var inst_18613 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18610);
var state_18678__$1 = state_18678;
var statearr_18700_18746 = state_18678__$1;
(statearr_18700_18746[(2)] = inst_18613);

(statearr_18700_18746[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (23))){
var inst_18663 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
if(cljs.core.truth_(inst_18663)){
var statearr_18701_18747 = state_18678__$1;
(statearr_18701_18747[(1)] = (24));

} else {
var statearr_18702_18748 = state_18678__$1;
(statearr_18702_18748[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (19))){
var inst_18660 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
if(cljs.core.truth_(inst_18660)){
var statearr_18703_18749 = state_18678__$1;
(statearr_18703_18749[(1)] = (20));

} else {
var statearr_18704_18750 = state_18678__$1;
(statearr_18704_18750[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (11))){
var inst_18635 = (state_18678[(8)]);
var inst_18641 = (inst_18635 == null);
var state_18678__$1 = state_18678;
if(cljs.core.truth_(inst_18641)){
var statearr_18705_18751 = state_18678__$1;
(statearr_18705_18751[(1)] = (14));

} else {
var statearr_18706_18752 = state_18678__$1;
(statearr_18706_18752[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (9))){
var inst_18628 = (state_18678[(10)]);
var inst_18628__$1 = (state_18678[(2)]);
var inst_18629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18628__$1,cljs.core.constant$keyword$reads);
var inst_18630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18628__$1,cljs.core.constant$keyword$mutes);
var inst_18631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18628__$1,cljs.core.constant$keyword$solos);
var state_18678__$1 = (function (){var statearr_18707 = state_18678;
(statearr_18707[(10)] = inst_18628__$1);

(statearr_18707[(15)] = inst_18631);

(statearr_18707[(17)] = inst_18630);

return statearr_18707;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_18678__$1,(10),inst_18629);
} else {
if((state_val_18679 === (5))){
var inst_18620 = (state_18678[(7)]);
var inst_18623 = cljs.core.seq_QMARK_(inst_18620);
var state_18678__$1 = state_18678;
if(inst_18623){
var statearr_18708_18753 = state_18678__$1;
(statearr_18708_18753[(1)] = (7));

} else {
var statearr_18709_18754 = state_18678__$1;
(statearr_18709_18754[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (14))){
var inst_18636 = (state_18678[(16)]);
var inst_18643 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18636);
var state_18678__$1 = state_18678;
var statearr_18710_18755 = state_18678__$1;
(statearr_18710_18755[(2)] = inst_18643);

(statearr_18710_18755[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (26))){
var inst_18668 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18711_18756 = state_18678__$1;
(statearr_18711_18756[(2)] = inst_18668);

(statearr_18711_18756[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (16))){
var inst_18646 = (state_18678[(2)]);
var inst_18647 = calc_state();
var inst_18620 = inst_18647;
var state_18678__$1 = (function (){var statearr_18712 = state_18678;
(statearr_18712[(18)] = inst_18646);

(statearr_18712[(7)] = inst_18620);

return statearr_18712;
})();
var statearr_18713_18757 = state_18678__$1;
(statearr_18713_18757[(2)] = null);

(statearr_18713_18757[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (10))){
var inst_18635 = (state_18678[(8)]);
var inst_18636 = (state_18678[(16)]);
var inst_18634 = (state_18678[(2)]);
var inst_18635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18634,(0),null);
var inst_18636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18634,(1),null);
var inst_18637 = (inst_18635__$1 == null);
var inst_18638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18636__$1,change);
var inst_18639 = (inst_18637) || (inst_18638);
var state_18678__$1 = (function (){var statearr_18714 = state_18678;
(statearr_18714[(8)] = inst_18635__$1);

(statearr_18714[(16)] = inst_18636__$1);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18639)){
var statearr_18715_18758 = state_18678__$1;
(statearr_18715_18758[(1)] = (11));

} else {
var statearr_18716_18759 = state_18678__$1;
(statearr_18716_18759[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (18))){
var inst_18631 = (state_18678[(15)]);
var inst_18636 = (state_18678[(16)]);
var inst_18630 = (state_18678[(17)]);
var inst_18655 = cljs.core.empty_QMARK_(inst_18631);
var inst_18656 = (function (){var G__18717 = inst_18636;
return (inst_18630.cljs$core$IFn$_invoke$arity$1 ? inst_18630.cljs$core$IFn$_invoke$arity$1(G__18717) : inst_18630.call(null,G__18717));
})();
var inst_18657 = cljs.core.not(inst_18656);
var inst_18658 = (inst_18655) && (inst_18657);
var state_18678__$1 = state_18678;
var statearr_18718_18760 = state_18678__$1;
(statearr_18718_18760[(2)] = inst_18658);

(statearr_18718_18760[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18679 === (8))){
var inst_18620 = (state_18678[(7)]);
var state_18678__$1 = state_18678;
var statearr_18719_18761 = state_18678__$1;
(statearr_18719_18761[(2)] = inst_18620);

(statearr_18719_18761[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11530__auto__,c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11531__auto__ = null;
var cljs$core$async$mix_$_state_machine__11531__auto____0 = (function (){
var statearr_18723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18723[(0)] = cljs$core$async$mix_$_state_machine__11531__auto__);

(statearr_18723[(1)] = (1));

return statearr_18723;
});
var cljs$core$async$mix_$_state_machine__11531__auto____1 = (function (state_18678){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_18678);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e18724){if((e18724 instanceof Object)){
var ex__11534__auto__ = e18724;
var statearr_18725_18762 = state_18678;
(statearr_18725_18762[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18678);

return cljs.core.constant$keyword$recur;
} else {
throw e18724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__18763 = state_18678;
state_18678 = G__18763;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11531__auto__ = function(state_18678){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11531__auto____1.call(this,state_18678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11531__auto____0;
cljs$core$async$mix_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11531__auto____1;
return cljs$core$async$mix_$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11623__auto__ = (function (){var statearr_18726 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_18726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___18731);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___18731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj18765 = {};
return obj18765;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__18769 = x__4971__auto__;
return goog.typeOf(G__18769);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__18773 = x__4971__auto__;
return goog.typeOf(G__18773);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__18775 = arguments.length;
switch (G__18775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__18777 = x__4971__auto__;
return goog.typeOf(G__18777);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4323__auto__ = p;
if(and__4323__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4971__auto__ = (((p == null))?null:p);
return (function (){var or__4335__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__18779 = x__4971__auto__;
return goog.typeOf(G__18779);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__18783 = arguments.length;
switch (G__18783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18784) : cljs.core.atom.call(null,G__18784));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4335__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__18786 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18786) : cljs.core.deref.call(null,G__18786));
})(),topic);
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4335__auto__,mults){
return (function (p1__18781_SHARP_){
if(cljs.core.truth_((function (){var G__18787 = topic;
return (p1__18781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18781_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18787) : p1__18781_SHARP_.call(null,G__18787));
})())){
return p1__18781_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18781_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__18788 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__18788) : buf_fn.call(null,G__18788));
})())));
}
});})(or__4335__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18789 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta18790){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta18790 = meta18790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18789.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__18792 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__18792) : self__.ensure_mult.call(null,G__18792));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__18793 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18793) : cljs.core.deref.call(null,G__18793));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18794 = self__.mults;
var G__18795 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18794,G__18795) : cljs.core.reset_BANG_.call(null,G__18794,G__18795));
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18791){
var self__ = this;
var _18791__$1 = this;
return self__.meta18790;
});})(mults,ensure_mult))
;

cljs.core.async.t18789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18791,meta18790__$1){
var self__ = this;
var _18791__$1 = this;
return (new cljs.core.async.t18789(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta18790__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18789.cljs$lang$type = true;

cljs.core.async.t18789.cljs$lang$ctorStr = "cljs.core.async/t18789";

cljs.core.async.t18789.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cljs.core.async/t18789");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18789 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t18789(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta18790){
return (new cljs.core.async.t18789(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta18790));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18789(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11621__auto___18919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___18919,mults,ensure_mult,p){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___18919,mults,ensure_mult,p){
return (function (state_18867){
var state_val_18868 = (state_18867[(1)]);
if((state_val_18868 === (7))){
var inst_18863 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18869_18920 = state_18867__$1;
(statearr_18869_18920[(2)] = inst_18863);

(statearr_18869_18920[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (20))){
var state_18867__$1 = state_18867;
var statearr_18870_18921 = state_18867__$1;
(statearr_18870_18921[(2)] = null);

(statearr_18870_18921[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (1))){
var state_18867__$1 = state_18867;
var statearr_18871_18922 = state_18867__$1;
(statearr_18871_18922[(2)] = null);

(statearr_18871_18922[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (24))){
var inst_18846 = (state_18867[(7)]);
var inst_18855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18846);
var state_18867__$1 = state_18867;
var statearr_18872_18923 = state_18867__$1;
(statearr_18872_18923[(2)] = inst_18855);

(statearr_18872_18923[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (4))){
var inst_18798 = (state_18867[(8)]);
var inst_18798__$1 = (state_18867[(2)]);
var inst_18799 = (inst_18798__$1 == null);
var state_18867__$1 = (function (){var statearr_18873 = state_18867;
(statearr_18873[(8)] = inst_18798__$1);

return statearr_18873;
})();
if(cljs.core.truth_(inst_18799)){
var statearr_18874_18924 = state_18867__$1;
(statearr_18874_18924[(1)] = (5));

} else {
var statearr_18875_18925 = state_18867__$1;
(statearr_18875_18925[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (15))){
var inst_18840 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18876_18926 = state_18867__$1;
(statearr_18876_18926[(2)] = inst_18840);

(statearr_18876_18926[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (21))){
var inst_18860 = (state_18867[(2)]);
var state_18867__$1 = (function (){var statearr_18877 = state_18867;
(statearr_18877[(9)] = inst_18860);

return statearr_18877;
})();
var statearr_18878_18927 = state_18867__$1;
(statearr_18878_18927[(2)] = null);

(statearr_18878_18927[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (13))){
var inst_18822 = (state_18867[(10)]);
var inst_18824 = cljs.core.chunked_seq_QMARK_(inst_18822);
var state_18867__$1 = state_18867;
if(inst_18824){
var statearr_18879_18928 = state_18867__$1;
(statearr_18879_18928[(1)] = (16));

} else {
var statearr_18880_18929 = state_18867__$1;
(statearr_18880_18929[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (22))){
var inst_18852 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
if(cljs.core.truth_(inst_18852)){
var statearr_18881_18930 = state_18867__$1;
(statearr_18881_18930[(1)] = (23));

} else {
var statearr_18882_18931 = state_18867__$1;
(statearr_18882_18931[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (6))){
var inst_18846 = (state_18867[(7)]);
var inst_18798 = (state_18867[(8)]);
var inst_18848 = (state_18867[(11)]);
var inst_18846__$1 = (function (){var G__18883 = inst_18798;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__18883) : topic_fn.call(null,G__18883));
})();
var inst_18847 = (function (){var G__18884 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18884) : cljs.core.deref.call(null,G__18884));
})();
var inst_18848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18847,inst_18846__$1);
var state_18867__$1 = (function (){var statearr_18885 = state_18867;
(statearr_18885[(7)] = inst_18846__$1);

(statearr_18885[(11)] = inst_18848__$1);

return statearr_18885;
})();
if(cljs.core.truth_(inst_18848__$1)){
var statearr_18886_18932 = state_18867__$1;
(statearr_18886_18932[(1)] = (19));

} else {
var statearr_18887_18933 = state_18867__$1;
(statearr_18887_18933[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (25))){
var inst_18857 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18888_18934 = state_18867__$1;
(statearr_18888_18934[(2)] = inst_18857);

(statearr_18888_18934[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (17))){
var inst_18822 = (state_18867[(10)]);
var inst_18831 = cljs.core.first(inst_18822);
var inst_18832 = cljs.core.async.muxch_STAR_(inst_18831);
var inst_18833 = cljs.core.async.close_BANG_(inst_18832);
var inst_18834 = cljs.core.next(inst_18822);
var inst_18808 = inst_18834;
var inst_18809 = null;
var inst_18810 = (0);
var inst_18811 = (0);
var state_18867__$1 = (function (){var statearr_18889 = state_18867;
(statearr_18889[(12)] = inst_18811);

(statearr_18889[(13)] = inst_18833);

(statearr_18889[(14)] = inst_18809);

(statearr_18889[(15)] = inst_18808);

(statearr_18889[(16)] = inst_18810);

return statearr_18889;
})();
var statearr_18890_18935 = state_18867__$1;
(statearr_18890_18935[(2)] = null);

(statearr_18890_18935[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (3))){
var inst_18865 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18867__$1,inst_18865);
} else {
if((state_val_18868 === (12))){
var inst_18842 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18891_18936 = state_18867__$1;
(statearr_18891_18936[(2)] = inst_18842);

(statearr_18891_18936[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (2))){
var state_18867__$1 = state_18867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18867__$1,(4),ch);
} else {
if((state_val_18868 === (23))){
var state_18867__$1 = state_18867;
var statearr_18892_18937 = state_18867__$1;
(statearr_18892_18937[(2)] = null);

(statearr_18892_18937[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (19))){
var inst_18798 = (state_18867[(8)]);
var inst_18848 = (state_18867[(11)]);
var inst_18850 = cljs.core.async.muxch_STAR_(inst_18848);
var state_18867__$1 = state_18867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18867__$1,(22),inst_18850,inst_18798);
} else {
if((state_val_18868 === (11))){
var inst_18822 = (state_18867[(10)]);
var inst_18808 = (state_18867[(15)]);
var inst_18822__$1 = cljs.core.seq(inst_18808);
var state_18867__$1 = (function (){var statearr_18893 = state_18867;
(statearr_18893[(10)] = inst_18822__$1);

return statearr_18893;
})();
if(inst_18822__$1){
var statearr_18894_18938 = state_18867__$1;
(statearr_18894_18938[(1)] = (13));

} else {
var statearr_18895_18939 = state_18867__$1;
(statearr_18895_18939[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (9))){
var inst_18844 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18896_18940 = state_18867__$1;
(statearr_18896_18940[(2)] = inst_18844);

(statearr_18896_18940[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (5))){
var inst_18805 = (function (){var G__18897 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18897) : cljs.core.deref.call(null,G__18897));
})();
var inst_18806 = cljs.core.vals(inst_18805);
var inst_18807 = cljs.core.seq(inst_18806);
var inst_18808 = inst_18807;
var inst_18809 = null;
var inst_18810 = (0);
var inst_18811 = (0);
var state_18867__$1 = (function (){var statearr_18898 = state_18867;
(statearr_18898[(12)] = inst_18811);

(statearr_18898[(14)] = inst_18809);

(statearr_18898[(15)] = inst_18808);

(statearr_18898[(16)] = inst_18810);

return statearr_18898;
})();
var statearr_18899_18941 = state_18867__$1;
(statearr_18899_18941[(2)] = null);

(statearr_18899_18941[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (14))){
var state_18867__$1 = state_18867;
var statearr_18903_18942 = state_18867__$1;
(statearr_18903_18942[(2)] = null);

(statearr_18903_18942[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (16))){
var inst_18822 = (state_18867[(10)]);
var inst_18826 = cljs.core.chunk_first(inst_18822);
var inst_18827 = cljs.core.chunk_rest(inst_18822);
var inst_18828 = cljs.core.count(inst_18826);
var inst_18808 = inst_18827;
var inst_18809 = inst_18826;
var inst_18810 = inst_18828;
var inst_18811 = (0);
var state_18867__$1 = (function (){var statearr_18904 = state_18867;
(statearr_18904[(12)] = inst_18811);

(statearr_18904[(14)] = inst_18809);

(statearr_18904[(15)] = inst_18808);

(statearr_18904[(16)] = inst_18810);

return statearr_18904;
})();
var statearr_18905_18943 = state_18867__$1;
(statearr_18905_18943[(2)] = null);

(statearr_18905_18943[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (10))){
var inst_18811 = (state_18867[(12)]);
var inst_18809 = (state_18867[(14)]);
var inst_18808 = (state_18867[(15)]);
var inst_18810 = (state_18867[(16)]);
var inst_18816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18809,inst_18811);
var inst_18817 = cljs.core.async.muxch_STAR_(inst_18816);
var inst_18818 = cljs.core.async.close_BANG_(inst_18817);
var inst_18819 = (inst_18811 + (1));
var tmp18900 = inst_18809;
var tmp18901 = inst_18808;
var tmp18902 = inst_18810;
var inst_18808__$1 = tmp18901;
var inst_18809__$1 = tmp18900;
var inst_18810__$1 = tmp18902;
var inst_18811__$1 = inst_18819;
var state_18867__$1 = (function (){var statearr_18906 = state_18867;
(statearr_18906[(17)] = inst_18818);

(statearr_18906[(12)] = inst_18811__$1);

(statearr_18906[(14)] = inst_18809__$1);

(statearr_18906[(15)] = inst_18808__$1);

(statearr_18906[(16)] = inst_18810__$1);

return statearr_18906;
})();
var statearr_18907_18944 = state_18867__$1;
(statearr_18907_18944[(2)] = null);

(statearr_18907_18944[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (18))){
var inst_18837 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18908_18945 = state_18867__$1;
(statearr_18908_18945[(2)] = inst_18837);

(statearr_18908_18945[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18868 === (8))){
var inst_18811 = (state_18867[(12)]);
var inst_18810 = (state_18867[(16)]);
var inst_18813 = (inst_18811 < inst_18810);
var inst_18814 = inst_18813;
var state_18867__$1 = state_18867;
if(cljs.core.truth_(inst_18814)){
var statearr_18909_18946 = state_18867__$1;
(statearr_18909_18946[(1)] = (10));

} else {
var statearr_18910_18947 = state_18867__$1;
(statearr_18910_18947[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___18919,mults,ensure_mult,p))
;
return ((function (switch__11530__auto__,c__11621__auto___18919,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_18867){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_18867);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__11534__auto__ = e18915;
var statearr_18916_18948 = state_18867;
(statearr_18916_18948[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18867);

return cljs.core.constant$keyword$recur;
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__18949 = state_18867;
state_18867 = G__18949;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_18867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_18867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___18919,mults,ensure_mult,p))
})();
var state__11623__auto__ = (function (){var statearr_18917 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___18919);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___18919,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__18951 = arguments.length;
switch (G__18951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__18954 = arguments.length;
switch (G__18954) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__18957 = arguments.length;
switch (G__18957) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18958 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18958) : cljs.core.atom.call(null,G__18958));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11621__auto___19032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18997){
var state_val_18998 = (state_18997[(1)]);
if((state_val_18998 === (7))){
var state_18997__$1 = state_18997;
var statearr_18999_19033 = state_18997__$1;
(statearr_18999_19033[(2)] = null);

(statearr_18999_19033[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (1))){
var state_18997__$1 = state_18997;
var statearr_19000_19034 = state_18997__$1;
(statearr_19000_19034[(2)] = null);

(statearr_19000_19034[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (4))){
var inst_18961 = (state_18997[(7)]);
var inst_18963 = (inst_18961 < cnt);
var state_18997__$1 = state_18997;
if(cljs.core.truth_(inst_18963)){
var statearr_19001_19035 = state_18997__$1;
(statearr_19001_19035[(1)] = (6));

} else {
var statearr_19002_19036 = state_18997__$1;
(statearr_19002_19036[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (15))){
var inst_18993 = (state_18997[(2)]);
var state_18997__$1 = state_18997;
var statearr_19003_19037 = state_18997__$1;
(statearr_19003_19037[(2)] = inst_18993);

(statearr_19003_19037[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (13))){
var inst_18986 = cljs.core.async.close_BANG_(out);
var state_18997__$1 = state_18997;
var statearr_19004_19038 = state_18997__$1;
(statearr_19004_19038[(2)] = inst_18986);

(statearr_19004_19038[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (6))){
var state_18997__$1 = state_18997;
var statearr_19005_19039 = state_18997__$1;
(statearr_19005_19039[(2)] = null);

(statearr_19005_19039[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (3))){
var inst_18995 = (state_18997[(2)]);
var state_18997__$1 = state_18997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18997__$1,inst_18995);
} else {
if((state_val_18998 === (12))){
var inst_18983 = (state_18997[(8)]);
var inst_18983__$1 = (state_18997[(2)]);
var inst_18984 = cljs.core.some(cljs.core.nil_QMARK_,inst_18983__$1);
var state_18997__$1 = (function (){var statearr_19006 = state_18997;
(statearr_19006[(8)] = inst_18983__$1);

return statearr_19006;
})();
if(cljs.core.truth_(inst_18984)){
var statearr_19007_19040 = state_18997__$1;
(statearr_19007_19040[(1)] = (13));

} else {
var statearr_19008_19041 = state_18997__$1;
(statearr_19008_19041[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (2))){
var inst_18960 = (function (){var G__19009 = dctr;
var G__19010 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19009,G__19010) : cljs.core.reset_BANG_.call(null,G__19009,G__19010));
})();
var inst_18961 = (0);
var state_18997__$1 = (function (){var statearr_19011 = state_18997;
(statearr_19011[(9)] = inst_18960);

(statearr_19011[(7)] = inst_18961);

return statearr_19011;
})();
var statearr_19012_19042 = state_18997__$1;
(statearr_19012_19042[(2)] = null);

(statearr_19012_19042[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (11))){
var inst_18961 = (state_18997[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18997,(10),Object,null,(9));
var inst_18970 = (function (){var G__19013 = inst_18961;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__19013) : chs__$1.call(null,G__19013));
})();
var inst_18971 = (function (){var G__19014 = inst_18961;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__19014) : done.call(null,G__19014));
})();
var inst_18972 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18970,inst_18971);
var state_18997__$1 = state_18997;
var statearr_19015_19043 = state_18997__$1;
(statearr_19015_19043[(2)] = inst_18972);


cljs.core.async.impl.ioc_helpers.process_exception(state_18997__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (9))){
var inst_18961 = (state_18997[(7)]);
var inst_18974 = (state_18997[(2)]);
var inst_18975 = (inst_18961 + (1));
var inst_18961__$1 = inst_18975;
var state_18997__$1 = (function (){var statearr_19016 = state_18997;
(statearr_19016[(10)] = inst_18974);

(statearr_19016[(7)] = inst_18961__$1);

return statearr_19016;
})();
var statearr_19017_19044 = state_18997__$1;
(statearr_19017_19044[(2)] = null);

(statearr_19017_19044[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (5))){
var inst_18981 = (state_18997[(2)]);
var state_18997__$1 = (function (){var statearr_19018 = state_18997;
(statearr_19018[(11)] = inst_18981);

return statearr_19018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18997__$1,(12),dchan);
} else {
if((state_val_18998 === (14))){
var inst_18983 = (state_18997[(8)]);
var inst_18988 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18983);
var state_18997__$1 = state_18997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18997__$1,(16),out,inst_18988);
} else {
if((state_val_18998 === (16))){
var inst_18990 = (state_18997[(2)]);
var state_18997__$1 = (function (){var statearr_19019 = state_18997;
(statearr_19019[(12)] = inst_18990);

return statearr_19019;
})();
var statearr_19020_19045 = state_18997__$1;
(statearr_19020_19045[(2)] = null);

(statearr_19020_19045[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (10))){
var inst_18965 = (state_18997[(2)]);
var inst_18966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18997__$1 = (function (){var statearr_19021 = state_18997;
(statearr_19021[(13)] = inst_18965);

return statearr_19021;
})();
var statearr_19022_19046 = state_18997__$1;
(statearr_19022_19046[(2)] = inst_18966);


cljs.core.async.impl.ioc_helpers.process_exception(state_18997__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18998 === (8))){
var inst_18979 = (state_18997[(2)]);
var state_18997__$1 = state_18997;
var statearr_19023_19047 = state_18997__$1;
(statearr_19023_19047[(2)] = inst_18979);

(statearr_19023_19047[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11530__auto__,c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19027[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19027[(1)] = (1));

return statearr_19027;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_18997){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_18997);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19028){if((e19028 instanceof Object)){
var ex__11534__auto__ = e19028;
var statearr_19029_19048 = state_18997;
(statearr_19029_19048[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18997);

return cljs.core.constant$keyword$recur;
} else {
throw e19028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19049 = state_18997;
state_18997 = G__19049;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_18997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_18997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11623__auto__ = (function (){var statearr_19030 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19032);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19032,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__19052 = arguments.length;
switch (G__19052) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___19107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19107,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19107,out){
return (function (state_19082){
var state_val_19083 = (state_19082[(1)]);
if((state_val_19083 === (7))){
var inst_19061 = (state_19082[(7)]);
var inst_19062 = (state_19082[(8)]);
var inst_19061__$1 = (state_19082[(2)]);
var inst_19062__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19061__$1,(0),null);
var inst_19063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19061__$1,(1),null);
var inst_19064 = (inst_19062__$1 == null);
var state_19082__$1 = (function (){var statearr_19084 = state_19082;
(statearr_19084[(9)] = inst_19063);

(statearr_19084[(7)] = inst_19061__$1);

(statearr_19084[(8)] = inst_19062__$1);

return statearr_19084;
})();
if(cljs.core.truth_(inst_19064)){
var statearr_19085_19108 = state_19082__$1;
(statearr_19085_19108[(1)] = (8));

} else {
var statearr_19086_19109 = state_19082__$1;
(statearr_19086_19109[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (1))){
var inst_19053 = cljs.core.vec(chs);
var inst_19054 = inst_19053;
var state_19082__$1 = (function (){var statearr_19087 = state_19082;
(statearr_19087[(10)] = inst_19054);

return statearr_19087;
})();
var statearr_19088_19110 = state_19082__$1;
(statearr_19088_19110[(2)] = null);

(statearr_19088_19110[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (4))){
var inst_19054 = (state_19082[(10)]);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_19082__$1,(7),inst_19054);
} else {
if((state_val_19083 === (6))){
var inst_19078 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19089_19111 = state_19082__$1;
(statearr_19089_19111[(2)] = inst_19078);

(statearr_19089_19111[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (3))){
var inst_19080 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19082__$1,inst_19080);
} else {
if((state_val_19083 === (2))){
var inst_19054 = (state_19082[(10)]);
var inst_19056 = cljs.core.count(inst_19054);
var inst_19057 = (inst_19056 > (0));
var state_19082__$1 = state_19082;
if(cljs.core.truth_(inst_19057)){
var statearr_19091_19112 = state_19082__$1;
(statearr_19091_19112[(1)] = (4));

} else {
var statearr_19092_19113 = state_19082__$1;
(statearr_19092_19113[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (11))){
var inst_19054 = (state_19082[(10)]);
var inst_19071 = (state_19082[(2)]);
var tmp19090 = inst_19054;
var inst_19054__$1 = tmp19090;
var state_19082__$1 = (function (){var statearr_19093 = state_19082;
(statearr_19093[(11)] = inst_19071);

(statearr_19093[(10)] = inst_19054__$1);

return statearr_19093;
})();
var statearr_19094_19114 = state_19082__$1;
(statearr_19094_19114[(2)] = null);

(statearr_19094_19114[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (9))){
var inst_19062 = (state_19082[(8)]);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19082__$1,(11),out,inst_19062);
} else {
if((state_val_19083 === (5))){
var inst_19076 = cljs.core.async.close_BANG_(out);
var state_19082__$1 = state_19082;
var statearr_19095_19115 = state_19082__$1;
(statearr_19095_19115[(2)] = inst_19076);

(statearr_19095_19115[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (10))){
var inst_19074 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19096_19116 = state_19082__$1;
(statearr_19096_19116[(2)] = inst_19074);

(statearr_19096_19116[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19083 === (8))){
var inst_19054 = (state_19082[(10)]);
var inst_19063 = (state_19082[(9)]);
var inst_19061 = (state_19082[(7)]);
var inst_19062 = (state_19082[(8)]);
var inst_19066 = (function (){var c = inst_19063;
var v = inst_19062;
var vec__19059 = inst_19061;
var cs = inst_19054;
return ((function (c,v,vec__19059,cs,inst_19054,inst_19063,inst_19061,inst_19062,state_val_19083,c__11621__auto___19107,out){
return (function (p1__19050_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19050_SHARP_);
});
;})(c,v,vec__19059,cs,inst_19054,inst_19063,inst_19061,inst_19062,state_val_19083,c__11621__auto___19107,out))
})();
var inst_19067 = cljs.core.filterv(inst_19066,inst_19054);
var inst_19054__$1 = inst_19067;
var state_19082__$1 = (function (){var statearr_19097 = state_19082;
(statearr_19097[(10)] = inst_19054__$1);

return statearr_19097;
})();
var statearr_19098_19117 = state_19082__$1;
(statearr_19098_19117[(2)] = null);

(statearr_19098_19117[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19107,out))
;
return ((function (switch__11530__auto__,c__11621__auto___19107,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19102[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19102[(1)] = (1));

return statearr_19102;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_19082){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_19082);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19103){if((e19103 instanceof Object)){
var ex__11534__auto__ = e19103;
var statearr_19104_19118 = state_19082;
(statearr_19104_19118[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19082);

return cljs.core.constant$keyword$recur;
} else {
throw e19103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19119 = state_19082;
state_19082 = G__19119;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_19082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_19082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19107,out))
})();
var state__11623__auto__ = (function (){var statearr_19105 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19107);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19107,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__19121 = arguments.length;
switch (G__19121) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___19169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19169,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19169,out){
return (function (state_19145){
var state_val_19146 = (state_19145[(1)]);
if((state_val_19146 === (7))){
var inst_19127 = (state_19145[(7)]);
var inst_19127__$1 = (state_19145[(2)]);
var inst_19128 = (inst_19127__$1 == null);
var inst_19129 = cljs.core.not(inst_19128);
var state_19145__$1 = (function (){var statearr_19147 = state_19145;
(statearr_19147[(7)] = inst_19127__$1);

return statearr_19147;
})();
if(inst_19129){
var statearr_19148_19170 = state_19145__$1;
(statearr_19148_19170[(1)] = (8));

} else {
var statearr_19149_19171 = state_19145__$1;
(statearr_19149_19171[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (1))){
var inst_19122 = (0);
var state_19145__$1 = (function (){var statearr_19150 = state_19145;
(statearr_19150[(8)] = inst_19122);

return statearr_19150;
})();
var statearr_19151_19172 = state_19145__$1;
(statearr_19151_19172[(2)] = null);

(statearr_19151_19172[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (4))){
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19145__$1,(7),ch);
} else {
if((state_val_19146 === (6))){
var inst_19140 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19152_19173 = state_19145__$1;
(statearr_19152_19173[(2)] = inst_19140);

(statearr_19152_19173[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (3))){
var inst_19142 = (state_19145[(2)]);
var inst_19143 = cljs.core.async.close_BANG_(out);
var state_19145__$1 = (function (){var statearr_19153 = state_19145;
(statearr_19153[(9)] = inst_19142);

return statearr_19153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19145__$1,inst_19143);
} else {
if((state_val_19146 === (2))){
var inst_19122 = (state_19145[(8)]);
var inst_19124 = (inst_19122 < n);
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19124)){
var statearr_19154_19174 = state_19145__$1;
(statearr_19154_19174[(1)] = (4));

} else {
var statearr_19155_19175 = state_19145__$1;
(statearr_19155_19175[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (11))){
var inst_19122 = (state_19145[(8)]);
var inst_19132 = (state_19145[(2)]);
var inst_19133 = (inst_19122 + (1));
var inst_19122__$1 = inst_19133;
var state_19145__$1 = (function (){var statearr_19156 = state_19145;
(statearr_19156[(10)] = inst_19132);

(statearr_19156[(8)] = inst_19122__$1);

return statearr_19156;
})();
var statearr_19157_19176 = state_19145__$1;
(statearr_19157_19176[(2)] = null);

(statearr_19157_19176[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (9))){
var state_19145__$1 = state_19145;
var statearr_19158_19177 = state_19145__$1;
(statearr_19158_19177[(2)] = null);

(statearr_19158_19177[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (5))){
var state_19145__$1 = state_19145;
var statearr_19159_19178 = state_19145__$1;
(statearr_19159_19178[(2)] = null);

(statearr_19159_19178[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (10))){
var inst_19137 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19160_19179 = state_19145__$1;
(statearr_19160_19179[(2)] = inst_19137);

(statearr_19160_19179[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19146 === (8))){
var inst_19127 = (state_19145[(7)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19145__$1,(11),out,inst_19127);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19169,out))
;
return ((function (switch__11530__auto__,c__11621__auto___19169,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19164[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19164[(1)] = (1));

return statearr_19164;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_19145){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_19145);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19165){if((e19165 instanceof Object)){
var ex__11534__auto__ = e19165;
var statearr_19166_19180 = state_19145;
(statearr_19166_19180[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19145);

return cljs.core.constant$keyword$recur;
} else {
throw e19165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19181 = state_19145;
state_19145 = G__19181;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_19145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_19145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19169,out))
})();
var state__11623__auto__ = (function (){var statearr_19167 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19169);

return statearr_19167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19169,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain values from ch. Consecutive duplicate
 * values will be dropped.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__19183 = arguments.length;
switch (G__19183) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___19233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19233,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19233,out){
return (function (state_19207){
var state_val_19208 = (state_19207[(1)]);
if((state_val_19208 === (7))){
var inst_19202 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19209_19234 = state_19207__$1;
(statearr_19209_19234[(2)] = inst_19202);

(statearr_19209_19234[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (1))){
var inst_19184 = null;
var state_19207__$1 = (function (){var statearr_19210 = state_19207;
(statearr_19210[(7)] = inst_19184);

return statearr_19210;
})();
var statearr_19211_19235 = state_19207__$1;
(statearr_19211_19235[(2)] = null);

(statearr_19211_19235[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (4))){
var inst_19187 = (state_19207[(8)]);
var inst_19187__$1 = (state_19207[(2)]);
var inst_19188 = (inst_19187__$1 == null);
var inst_19189 = cljs.core.not(inst_19188);
var state_19207__$1 = (function (){var statearr_19212 = state_19207;
(statearr_19212[(8)] = inst_19187__$1);

return statearr_19212;
})();
if(inst_19189){
var statearr_19213_19236 = state_19207__$1;
(statearr_19213_19236[(1)] = (5));

} else {
var statearr_19214_19237 = state_19207__$1;
(statearr_19214_19237[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (6))){
var state_19207__$1 = state_19207;
var statearr_19215_19238 = state_19207__$1;
(statearr_19215_19238[(2)] = null);

(statearr_19215_19238[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (3))){
var inst_19204 = (state_19207[(2)]);
var inst_19205 = cljs.core.async.close_BANG_(out);
var state_19207__$1 = (function (){var statearr_19216 = state_19207;
(statearr_19216[(9)] = inst_19204);

return statearr_19216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19207__$1,inst_19205);
} else {
if((state_val_19208 === (2))){
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19207__$1,(4),ch);
} else {
if((state_val_19208 === (11))){
var inst_19187 = (state_19207[(8)]);
var inst_19196 = (state_19207[(2)]);
var inst_19184 = inst_19187;
var state_19207__$1 = (function (){var statearr_19217 = state_19207;
(statearr_19217[(7)] = inst_19184);

(statearr_19217[(10)] = inst_19196);

return statearr_19217;
})();
var statearr_19218_19239 = state_19207__$1;
(statearr_19218_19239[(2)] = null);

(statearr_19218_19239[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (9))){
var inst_19187 = (state_19207[(8)]);
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19207__$1,(11),out,inst_19187);
} else {
if((state_val_19208 === (5))){
var inst_19184 = (state_19207[(7)]);
var inst_19187 = (state_19207[(8)]);
var inst_19191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19187,inst_19184);
var state_19207__$1 = state_19207;
if(inst_19191){
var statearr_19220_19240 = state_19207__$1;
(statearr_19220_19240[(1)] = (8));

} else {
var statearr_19221_19241 = state_19207__$1;
(statearr_19221_19241[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (10))){
var inst_19199 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19222_19242 = state_19207__$1;
(statearr_19222_19242[(2)] = inst_19199);

(statearr_19222_19242[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19208 === (8))){
var inst_19184 = (state_19207[(7)]);
var tmp19219 = inst_19184;
var inst_19184__$1 = tmp19219;
var state_19207__$1 = (function (){var statearr_19223 = state_19207;
(statearr_19223[(7)] = inst_19184__$1);

return statearr_19223;
})();
var statearr_19224_19243 = state_19207__$1;
(statearr_19224_19243[(2)] = null);

(statearr_19224_19243[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19233,out))
;
return ((function (switch__11530__auto__,c__11621__auto___19233,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19228[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19228[(1)] = (1));

return statearr_19228;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_19207){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_19207);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19229){if((e19229 instanceof Object)){
var ex__11534__auto__ = e19229;
var statearr_19230_19244 = state_19207;
(statearr_19230_19244[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19207);

return cljs.core.constant$keyword$recur;
} else {
throw e19229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19245 = state_19207;
state_19207 = G__19245;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_19207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_19207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19233,out))
})();
var state__11623__auto__ = (function (){var statearr_19231 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19233);

return statearr_19231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19233,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will contain vectors of n items taken from ch. The
 * final vector in the return channel may be smaller than n if ch closed before
 * the vector could be completely filled.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__19247 = arguments.length;
switch (G__19247) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___19316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19316,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19316,out){
return (function (state_19285){
var state_val_19286 = (state_19285[(1)]);
if((state_val_19286 === (7))){
var inst_19281 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19287_19317 = state_19285__$1;
(statearr_19287_19317[(2)] = inst_19281);

(statearr_19287_19317[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (1))){
var inst_19248 = (new Array(n));
var inst_19249 = inst_19248;
var inst_19250 = (0);
var state_19285__$1 = (function (){var statearr_19288 = state_19285;
(statearr_19288[(7)] = inst_19250);

(statearr_19288[(8)] = inst_19249);

return statearr_19288;
})();
var statearr_19289_19318 = state_19285__$1;
(statearr_19289_19318[(2)] = null);

(statearr_19289_19318[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (4))){
var inst_19253 = (state_19285[(9)]);
var inst_19253__$1 = (state_19285[(2)]);
var inst_19254 = (inst_19253__$1 == null);
var inst_19255 = cljs.core.not(inst_19254);
var state_19285__$1 = (function (){var statearr_19290 = state_19285;
(statearr_19290[(9)] = inst_19253__$1);

return statearr_19290;
})();
if(inst_19255){
var statearr_19291_19319 = state_19285__$1;
(statearr_19291_19319[(1)] = (5));

} else {
var statearr_19292_19320 = state_19285__$1;
(statearr_19292_19320[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (15))){
var inst_19275 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19293_19321 = state_19285__$1;
(statearr_19293_19321[(2)] = inst_19275);

(statearr_19293_19321[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (13))){
var state_19285__$1 = state_19285;
var statearr_19294_19322 = state_19285__$1;
(statearr_19294_19322[(2)] = null);

(statearr_19294_19322[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (6))){
var inst_19250 = (state_19285[(7)]);
var inst_19271 = (inst_19250 > (0));
var state_19285__$1 = state_19285;
if(cljs.core.truth_(inst_19271)){
var statearr_19295_19323 = state_19285__$1;
(statearr_19295_19323[(1)] = (12));

} else {
var statearr_19296_19324 = state_19285__$1;
(statearr_19296_19324[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (3))){
var inst_19283 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19285__$1,inst_19283);
} else {
if((state_val_19286 === (12))){
var inst_19249 = (state_19285[(8)]);
var inst_19273 = cljs.core.vec(inst_19249);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19285__$1,(15),out,inst_19273);
} else {
if((state_val_19286 === (2))){
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19285__$1,(4),ch);
} else {
if((state_val_19286 === (11))){
var inst_19265 = (state_19285[(2)]);
var inst_19266 = (new Array(n));
var inst_19249 = inst_19266;
var inst_19250 = (0);
var state_19285__$1 = (function (){var statearr_19297 = state_19285;
(statearr_19297[(7)] = inst_19250);

(statearr_19297[(8)] = inst_19249);

(statearr_19297[(10)] = inst_19265);

return statearr_19297;
})();
var statearr_19298_19325 = state_19285__$1;
(statearr_19298_19325[(2)] = null);

(statearr_19298_19325[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (9))){
var inst_19249 = (state_19285[(8)]);
var inst_19263 = cljs.core.vec(inst_19249);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19285__$1,(11),out,inst_19263);
} else {
if((state_val_19286 === (5))){
var inst_19250 = (state_19285[(7)]);
var inst_19253 = (state_19285[(9)]);
var inst_19258 = (state_19285[(11)]);
var inst_19249 = (state_19285[(8)]);
var inst_19257 = (inst_19249[inst_19250] = inst_19253);
var inst_19258__$1 = (inst_19250 + (1));
var inst_19259 = (inst_19258__$1 < n);
var state_19285__$1 = (function (){var statearr_19299 = state_19285;
(statearr_19299[(12)] = inst_19257);

(statearr_19299[(11)] = inst_19258__$1);

return statearr_19299;
})();
if(cljs.core.truth_(inst_19259)){
var statearr_19300_19326 = state_19285__$1;
(statearr_19300_19326[(1)] = (8));

} else {
var statearr_19301_19327 = state_19285__$1;
(statearr_19301_19327[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (14))){
var inst_19278 = (state_19285[(2)]);
var inst_19279 = cljs.core.async.close_BANG_(out);
var state_19285__$1 = (function (){var statearr_19303 = state_19285;
(statearr_19303[(13)] = inst_19278);

return statearr_19303;
})();
var statearr_19304_19328 = state_19285__$1;
(statearr_19304_19328[(2)] = inst_19279);

(statearr_19304_19328[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (10))){
var inst_19269 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19305_19329 = state_19285__$1;
(statearr_19305_19329[(2)] = inst_19269);

(statearr_19305_19329[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19286 === (8))){
var inst_19258 = (state_19285[(11)]);
var inst_19249 = (state_19285[(8)]);
var tmp19302 = inst_19249;
var inst_19249__$1 = tmp19302;
var inst_19250 = inst_19258;
var state_19285__$1 = (function (){var statearr_19306 = state_19285;
(statearr_19306[(7)] = inst_19250);

(statearr_19306[(8)] = inst_19249__$1);

return statearr_19306;
})();
var statearr_19307_19330 = state_19285__$1;
(statearr_19307_19330[(2)] = null);

(statearr_19307_19330[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19316,out))
;
return ((function (switch__11530__auto__,c__11621__auto___19316,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19311[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19311[(1)] = (1));

return statearr_19311;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_19285){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_19285);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19312){if((e19312 instanceof Object)){
var ex__11534__auto__ = e19312;
var statearr_19313_19331 = state_19285;
(statearr_19313_19331[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19285);

return cljs.core.constant$keyword$recur;
} else {
throw e19312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19332 = state_19285;
state_19285 = G__19332;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19316,out))
})();
var state__11623__auto__ = (function (){var statearr_19314 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19316);

return statearr_19314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19316,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain vectors of items taken from ch. New
 * vectors will be created whenever (f itm) returns a value that differs from
 * the previous item's (f itm).
 * 
 * The output channel is unbuffered, unless buf-or-n is given
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__19334 = arguments.length;
switch (G__19334) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11621__auto___19408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___19408,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto___19408,out){
return (function (state_19376){
var state_val_19377 = (state_19376[(1)]);
if((state_val_19377 === (7))){
var inst_19372 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
var statearr_19378_19409 = state_19376__$1;
(statearr_19378_19409[(2)] = inst_19372);

(statearr_19378_19409[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (1))){
var inst_19335 = [];
var inst_19336 = inst_19335;
var inst_19337 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_19376__$1 = (function (){var statearr_19379 = state_19376;
(statearr_19379[(7)] = inst_19336);

(statearr_19379[(8)] = inst_19337);

return statearr_19379;
})();
var statearr_19380_19410 = state_19376__$1;
(statearr_19380_19410[(2)] = null);

(statearr_19380_19410[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (4))){
var inst_19340 = (state_19376[(9)]);
var inst_19340__$1 = (state_19376[(2)]);
var inst_19341 = (inst_19340__$1 == null);
var inst_19342 = cljs.core.not(inst_19341);
var state_19376__$1 = (function (){var statearr_19381 = state_19376;
(statearr_19381[(9)] = inst_19340__$1);

return statearr_19381;
})();
if(inst_19342){
var statearr_19382_19411 = state_19376__$1;
(statearr_19382_19411[(1)] = (5));

} else {
var statearr_19383_19412 = state_19376__$1;
(statearr_19383_19412[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (15))){
var inst_19366 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
var statearr_19384_19413 = state_19376__$1;
(statearr_19384_19413[(2)] = inst_19366);

(statearr_19384_19413[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (13))){
var state_19376__$1 = state_19376;
var statearr_19385_19414 = state_19376__$1;
(statearr_19385_19414[(2)] = null);

(statearr_19385_19414[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (6))){
var inst_19336 = (state_19376[(7)]);
var inst_19361 = inst_19336.length;
var inst_19362 = (inst_19361 > (0));
var state_19376__$1 = state_19376;
if(cljs.core.truth_(inst_19362)){
var statearr_19386_19415 = state_19376__$1;
(statearr_19386_19415[(1)] = (12));

} else {
var statearr_19387_19416 = state_19376__$1;
(statearr_19387_19416[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (3))){
var inst_19374 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19376__$1,inst_19374);
} else {
if((state_val_19377 === (12))){
var inst_19336 = (state_19376[(7)]);
var inst_19364 = cljs.core.vec(inst_19336);
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19376__$1,(15),out,inst_19364);
} else {
if((state_val_19377 === (2))){
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19376__$1,(4),ch);
} else {
if((state_val_19377 === (11))){
var inst_19340 = (state_19376[(9)]);
var inst_19344 = (state_19376[(10)]);
var inst_19354 = (state_19376[(2)]);
var inst_19355 = [];
var inst_19356 = inst_19355.push(inst_19340);
var inst_19336 = inst_19355;
var inst_19337 = inst_19344;
var state_19376__$1 = (function (){var statearr_19388 = state_19376;
(statearr_19388[(7)] = inst_19336);

(statearr_19388[(11)] = inst_19354);

(statearr_19388[(12)] = inst_19356);

(statearr_19388[(8)] = inst_19337);

return statearr_19388;
})();
var statearr_19389_19417 = state_19376__$1;
(statearr_19389_19417[(2)] = null);

(statearr_19389_19417[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (9))){
var inst_19336 = (state_19376[(7)]);
var inst_19352 = cljs.core.vec(inst_19336);
var state_19376__$1 = state_19376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19376__$1,(11),out,inst_19352);
} else {
if((state_val_19377 === (5))){
var inst_19340 = (state_19376[(9)]);
var inst_19337 = (state_19376[(8)]);
var inst_19344 = (state_19376[(10)]);
var inst_19344__$1 = (function (){var G__19390 = inst_19340;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19390) : f.call(null,G__19390));
})();
var inst_19345 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19344__$1,inst_19337);
var inst_19346 = cljs.core.keyword_identical_QMARK_(inst_19337,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_19347 = (inst_19345) || (inst_19346);
var state_19376__$1 = (function (){var statearr_19391 = state_19376;
(statearr_19391[(10)] = inst_19344__$1);

return statearr_19391;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19392_19418 = state_19376__$1;
(statearr_19392_19418[(1)] = (8));

} else {
var statearr_19393_19419 = state_19376__$1;
(statearr_19393_19419[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (14))){
var inst_19369 = (state_19376[(2)]);
var inst_19370 = cljs.core.async.close_BANG_(out);
var state_19376__$1 = (function (){var statearr_19395 = state_19376;
(statearr_19395[(13)] = inst_19369);

return statearr_19395;
})();
var statearr_19396_19420 = state_19376__$1;
(statearr_19396_19420[(2)] = inst_19370);

(statearr_19396_19420[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (10))){
var inst_19359 = (state_19376[(2)]);
var state_19376__$1 = state_19376;
var statearr_19397_19421 = state_19376__$1;
(statearr_19397_19421[(2)] = inst_19359);

(statearr_19397_19421[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19377 === (8))){
var inst_19336 = (state_19376[(7)]);
var inst_19340 = (state_19376[(9)]);
var inst_19344 = (state_19376[(10)]);
var inst_19349 = inst_19336.push(inst_19340);
var tmp19394 = inst_19336;
var inst_19336__$1 = tmp19394;
var inst_19337 = inst_19344;
var state_19376__$1 = (function (){var statearr_19398 = state_19376;
(statearr_19398[(7)] = inst_19336__$1);

(statearr_19398[(14)] = inst_19349);

(statearr_19398[(8)] = inst_19337);

return statearr_19398;
})();
var statearr_19399_19422 = state_19376__$1;
(statearr_19399_19422[(2)] = null);

(statearr_19399_19422[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11621__auto___19408,out))
;
return ((function (switch__11530__auto__,c__11621__auto___19408,out){
return (function() {
var cljs$core$async$state_machine__11531__auto__ = null;
var cljs$core$async$state_machine__11531__auto____0 = (function (){
var statearr_19403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19403[(0)] = cljs$core$async$state_machine__11531__auto__);

(statearr_19403[(1)] = (1));

return statearr_19403;
});
var cljs$core$async$state_machine__11531__auto____1 = (function (state_19376){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_19376);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e19404){if((e19404 instanceof Object)){
var ex__11534__auto__ = e19404;
var statearr_19405_19423 = state_19376;
(statearr_19405_19423[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19376);

return cljs.core.constant$keyword$recur;
} else {
throw e19404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__19424 = state_19376;
state_19376 = G__19424;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs$core$async$state_machine__11531__auto__ = function(state_19376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11531__auto____1.call(this,state_19376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11531__auto____0;
cljs$core$async$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11531__auto____1;
return cljs$core$async$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto___19408,out))
})();
var state__11623__auto__ = (function (){var statearr_19406 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_19406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___19408);

return statearr_19406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___19408,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
