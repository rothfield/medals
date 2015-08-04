// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
var G__16170 = x;
return reagent.impl.template.as_element(G__16170);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_16185 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__16186 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16186) : f.call(null,G__16186));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__16187 = n;
switch (G__16187) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16188) : f.call(null,G__16188));

break;
case (3):
var G__16189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16189,G__16190) : f.call(null,G__16189,G__16190));

break;
case (4):
var G__16191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16191,G__16192,G__16193) : f.call(null,G__16191,G__16192,G__16193));

break;
case (5):
var G__16194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__16197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16194,G__16195,G__16196,G__16197) : f.call(null,G__16194,G__16195,G__16196,G__16197));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return reagent$impl$component$do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_16185;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__16214 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16214) {
case "componentWillUnmount":
return ((function (G__16214){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__16215 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16215) : f.call(null,G__16215));
}
});
;})(G__16214))

break;
case "componentWillMount":
return ((function (G__16214){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__16216 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16216) : f.call(null,G__16216));
}
});
;})(G__16214))

break;
case "componentDidUpdate":
return ((function (G__16214){
return (function (oldprops){
var c = this;
var G__16217 = c;
var G__16218 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16217,G__16218) : f.call(null,G__16217,G__16218));
});
;})(G__16214))

break;
case "componentWillUpdate":
return ((function (G__16214){
return (function (nextprops){
var c = this;
var G__16219 = c;
var G__16220 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16219,G__16220) : f.call(null,G__16219,G__16220));
});
;})(G__16214))

break;
case "shouldComponentUpdate":
return ((function (G__16214){
return (function (nextprops,nextstate){
var or__4335__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__16221 = c;
var G__16222 = old_argv;
var G__16223 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16221,G__16222,G__16223) : f.call(null,G__16221,G__16222,G__16223));
}
}
});
;})(G__16214))

break;
case "componentWillReceiveProps":
return ((function (G__16214){
return (function (props){
var c = this;
var G__16224 = c;
var G__16225 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16224,G__16225) : f.call(null,G__16224,G__16225));
});
;})(G__16214))

break;
case "getInitialState":
return ((function (G__16214){
return (function (){
var c = this;
var G__16226 = reagent.impl.component.state_atom(c);
var G__16227 = (function (){var G__16228 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16228) : f.call(null,G__16228));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16226,G__16227) : cljs.core.reset_BANG_.call(null,G__16226,G__16227));
});
;})(G__16214))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__16230__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__16230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16231__i = 0, G__16231__a = new Array(arguments.length -  0);
while (G__16231__i < G__16231__a.length) {G__16231__a[G__16231__i] = arguments[G__16231__i + 0]; ++G__16231__i;}
  args = new cljs.core.IndexedSeq(G__16231__a,0);
} 
return G__16230__delegate.call(this,args);};
G__16230.cljs$lang$maxFixedArity = 0;
G__16230.cljs$lang$applyTo = (function (arglist__16232){
var args = cljs.core.seq(arglist__16232);
return G__16230__delegate(args);
});
G__16230.cljs$core$IFn$_invoke$arity$variadic = G__16230__delegate;
return G__16230;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$cljsRender,null,cljs.core.constant$keyword$reagentRender,null,cljs.core.constant$keyword$render,null,cljs.core.constant$keyword$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__16234 = f;
(G__16234["__reactDontBind"] = true);

return G__16234;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__16236 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__16236) : reagent.impl.component.dont_wrap.call(null,G__16236));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4323__auto__ = wrap;
if(cljs.core.truth_(and__4323__auto__)){
return f;
} else {
return and__4323__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__4335__auto__ = wrap;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$shouldComponentUpdate,null,cljs.core.constant$keyword$componentWillMount,null,cljs.core.constant$keyword$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__16238 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__16238) : reagent.impl.component.dash_to_camel.call(null,G__16238));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$cljsRender,render_f,cljs.core.array_seq([cljs.core.constant$keyword$render,cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.constant$keyword$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4335__auto__ = (function (){var and__4323__auto__ = cljs.core.fn_QMARK_(f);
if(and__4323__auto__){
var or__4335__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return (f["name"]);
}
} else {
return and__4323__auto__;
}
})();
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
var or__4335__auto____$1 = (function (){var and__4323__auto__ = (function (){var G__16246 = f;
if(G__16246){
var bit__5002__auto__ = (G__16246.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__5002__auto__) || (G__16246.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__4323__auto__){
return cljs.core.name(f);
} else {
return and__4323__auto__;
}
})();
if(cljs.core.truth_(or__4335__auto____$1)){
return or__4335__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$reagentRender,cf),cljs.core.constant$keyword$componentFunction);
}
})();
var render_fun = (function (){var or__4335__auto__ = cljs.core.constant$keyword$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__4335__auto__ = cljs.core.constant$keyword$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__16248 = o;
(G__16248[cljs.core.name(k)] = v);

return G__16248;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__16249__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__16249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16250__i = 0, G__16250__a = new Array(arguments.length -  0);
while (G__16250__i < G__16250__a.length) {G__16250__a[G__16250__i] = arguments[G__16250__i + 0]; ++G__16250__i;}
  args = new cljs.core.IndexedSeq(G__16250__a,0);
} 
return G__16249__delegate.call(this,args);};
G__16249.cljs$lang$maxFixedArity = 0;
G__16249.cljs$lang$applyTo = (function (arglist__16251){
var args = cljs.core.seq(arglist__16251);
return G__16249__delegate(args);
});
G__16249.cljs$core$IFn$_invoke$arity$variadic = G__16249__delegate;
return G__16249;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__16253 = reagent.impl.component._STAR_current_component_STAR_;
var G__16253__$1 = (((G__16253 == null))?null:(G__16253["cljsName"])());
return G__16253__$1;
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5089__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__16260(s__16261){
return (new cljs.core.LazySeq(null,(function (){
var s__16261__$1 = s__16261;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16261__$1);
if(temp__4126__auto__){
var s__16261__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16261__$2)){
var c__5087__auto__ = cljs.core.chunk_first(s__16261__$2);
var size__5088__auto__ = cljs.core.count(c__5087__auto__);
var b__16263 = cljs.core.chunk_buffer(size__5088__auto__);
if((function (){var i__16262 = (0);
while(true){
if((i__16262 < size__5088__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5087__auto__,i__16262);
cljs.core.chunk_append(b__16263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__16266 = (i__16262 + (1));
i__16262 = G__16266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16263),reagent$impl$component$shallow_obj_to_map_$_iter__16260(cljs.core.chunk_rest(s__16261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16263),null);
}
} else {
var k = cljs.core.first(s__16261__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__16260(cljs.core.rest(s__16261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
