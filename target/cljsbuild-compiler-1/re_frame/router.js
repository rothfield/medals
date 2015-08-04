// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11530__auto__ = ((function (c__11621__auto__){
return (function (state_17167){
var state_val_17168 = (state_17167[(1)]);
if((state_val_17168 === (7))){
var inst_17152 = (state_17167[(2)]);
var state_17167__$1 = (function (){var statearr_17169 = state_17167;
(statearr_17169[(7)] = inst_17152);

return statearr_17169;
})();
var statearr_17170_17190 = state_17167__$1;
(statearr_17170_17190[(2)] = null);

(statearr_17170_17190[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (1))){
var state_17167__$1 = state_17167;
var statearr_17171_17191 = state_17167__$1;
(statearr_17171_17191[(2)] = null);

(statearr_17171_17191[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (4))){
var inst_17139 = (state_17167[(8)]);
var inst_17139__$1 = (state_17167[(2)]);
var inst_17140 = cljs.core.meta(inst_17139__$1);
var inst_17141 = cljs.core.constant$keyword$flush_DASH_dom.cljs$core$IFn$_invoke$arity$1(inst_17140);
var state_17167__$1 = (function (){var statearr_17172 = state_17167;
(statearr_17172[(8)] = inst_17139__$1);

return statearr_17172;
})();
if(cljs.core.truth_(inst_17141)){
var statearr_17173_17192 = state_17167__$1;
(statearr_17173_17192[(1)] = (5));

} else {
var statearr_17174_17193 = state_17167__$1;
(statearr_17174_17193[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (6))){
var inst_17148 = cljs.core.async.timeout((0));
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17167__$1,(9),inst_17148);
} else {
if((state_val_17168 === (3))){
var inst_17165 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17167__$1,inst_17165);
} else {
if((state_val_17168 === (12))){
var inst_17139 = (state_17167[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17167,(11),Object,null,(10));
var inst_17160 = re_frame.handlers.handle(inst_17139);
var state_17167__$1 = state_17167;
var statearr_17175_17194 = state_17167__$1;
(statearr_17175_17194[(2)] = inst_17160);


cljs.core.async.impl.ioc_helpers.process_exception(state_17167__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (2))){
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17167__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_17168 === (11))){
var inst_17153 = (state_17167[(2)]);
var inst_17154 = re_frame.router.purge_chan();
var inst_17155 = re_frame$router$router_loop();
var inst_17156 = (function(){throw inst_17153})();
var state_17167__$1 = (function (){var statearr_17176 = state_17167;
(statearr_17176[(9)] = inst_17154);

(statearr_17176[(10)] = inst_17155);

return statearr_17176;
})();
var statearr_17177_17195 = state_17167__$1;
(statearr_17177_17195[(2)] = inst_17156);


cljs.core.async.impl.ioc_helpers.process_exception(state_17167__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (9))){
var inst_17150 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17178_17196 = state_17167__$1;
(statearr_17178_17196[(2)] = inst_17150);

(statearr_17178_17196[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (5))){
var inst_17143 = reagent.core.flush();
var inst_17144 = cljs.core.async.timeout((20));
var state_17167__$1 = (function (){var statearr_17179 = state_17167;
(statearr_17179[(11)] = inst_17143);

return statearr_17179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17167__$1,(8),inst_17144);
} else {
if((state_val_17168 === (10))){
var inst_17162 = (state_17167[(2)]);
var state_17167__$1 = (function (){var statearr_17180 = state_17167;
(statearr_17180[(12)] = inst_17162);

return statearr_17180;
})();
var statearr_17181_17197 = state_17167__$1;
(statearr_17181_17197[(2)] = null);

(statearr_17181_17197[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17168 === (8))){
var inst_17146 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17182_17198 = state_17167__$1;
(statearr_17182_17198[(2)] = inst_17146);

(statearr_17182_17198[(1)] = (7));


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
});})(c__11621__auto__))
;
return ((function (switch__11530__auto__,c__11621__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__11531__auto__ = null;
var re_frame$router$router_loop_$_state_machine__11531__auto____0 = (function (){
var statearr_17186 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17186[(0)] = re_frame$router$router_loop_$_state_machine__11531__auto__);

(statearr_17186[(1)] = (1));

return statearr_17186;
});
var re_frame$router$router_loop_$_state_machine__11531__auto____1 = (function (state_17167){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__(state_17167);
if(cljs.core.keyword_identical_QMARK_(result__11533__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e17187){if((e17187 instanceof Object)){
var ex__11534__auto__ = e17187;
var statearr_17188_17199 = state_17167;
(statearr_17188_17199[(5)] = ex__11534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17167);

return cljs.core.constant$keyword$recur;
} else {
throw e17187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11532__auto__,cljs.core.constant$keyword$recur)){
var G__17200 = state_17167;
state_17167 = G__17200;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__11531__auto__ = function(state_17167){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__11531__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__11531__auto____1.call(this,state_17167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__11531__auto____0;
re_frame$router$router_loop_$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__11531__auto____1;
return re_frame$router$router_loop_$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_17189 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_17189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_17189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});
re_frame.router.router_loop();
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"dispatch\" is ignoring a nil event."], 0));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle(event_v);

return null;
});
