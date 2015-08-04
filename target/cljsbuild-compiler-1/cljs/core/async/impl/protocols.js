// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj19536 = {};
return obj19536;
})();

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__4323__auto__ = port;
if(and__4323__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4971__auto__ = (((port == null))?null:port);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__19540 = x__4971__auto__;
return goog.typeOf(G__19540);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj19542 = {};
return obj19542;
})();

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__4323__auto__ = port;
if(and__4323__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__4323__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4971__auto__ = (((port == null))?null:port);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__19546 = x__4971__auto__;
return goog.typeOf(G__19546);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj19548 = {};
return obj19548;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__4323__auto__ = chan;
if(and__4323__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4971__auto__ = (((chan == null))?null:chan);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__19552 = x__4971__auto__;
return goog.typeOf(G__19552);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__4323__auto__ = chan;
if(and__4323__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4971__auto__ = (((chan == null))?null:chan);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__19556 = x__4971__auto__;
return goog.typeOf(G__19556);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj19558 = {};
return obj19558;
})();

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__4323__auto__ = h;
if(and__4323__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4971__auto__ = (((h == null))?null:h);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__19562 = x__4971__auto__;
return goog.typeOf(G__19562);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__4323__auto__ = h;
if(and__4323__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__4323__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4971__auto__ = (((h == null))?null:h);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__19566 = x__4971__auto__;
return goog.typeOf(G__19566);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj19568 = {};
return obj19568;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__4323__auto__ = b;
if(and__4323__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4971__auto__ = (((b == null))?null:b);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__19572 = x__4971__auto__;
return goog.typeOf(G__19572);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__4323__auto__ = b;
if(and__4323__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__4323__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4971__auto__ = (((b == null))?null:b);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__19576 = x__4971__auto__;
return goog.typeOf(G__19576);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(b,itm){
if((function (){var and__4323__auto__ = b;
if(and__4323__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else {
return and__4323__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else {
var x__4971__auto__ = (((b == null))?null:b);
return (function (){var or__4335__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__19580 = x__4971__auto__;
return goog.typeOf(G__19580);
})()]);
if(or__4335__auto__){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);
if(or__4335__auto____$1){
return or__4335__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});


cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj19582 = {};
return obj19582;
})();

