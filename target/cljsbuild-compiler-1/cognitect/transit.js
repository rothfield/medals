// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__15919 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__15919) : com.cognitect.transit.eq.hashCode.call(null,G__15919));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__15920 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__15920) : com.cognitect.transit.eq.hashCode.call(null,G__15920));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__15921 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__15921) : com.cognitect.transit.eq.hashCode.call(null,G__15921));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__15926_15930 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__15927_15931 = null;
var count__15928_15932 = (0);
var i__15929_15933 = (0);
while(true){
if((i__15929_15933 < count__15928_15932)){
var k_15934 = chunk__15927_15931.cljs$core$IIndexed$_nth$arity$2(null,i__15929_15933);
var v_15935 = (b[k_15934]);
(a[k_15934] = v_15935);

var G__15936 = seq__15926_15930;
var G__15937 = chunk__15927_15931;
var G__15938 = count__15928_15932;
var G__15939 = (i__15929_15933 + (1));
seq__15926_15930 = G__15936;
chunk__15927_15931 = G__15937;
count__15928_15932 = G__15938;
i__15929_15933 = G__15939;
continue;
} else {
var temp__4126__auto___15940 = cljs.core.seq(seq__15926_15930);
if(temp__4126__auto___15940){
var seq__15926_15941__$1 = temp__4126__auto___15940;
if(cljs.core.chunked_seq_QMARK_(seq__15926_15941__$1)){
var c__5120__auto___15942 = cljs.core.chunk_first(seq__15926_15941__$1);
var G__15943 = cljs.core.chunk_rest(seq__15926_15941__$1);
var G__15944 = c__5120__auto___15942;
var G__15945 = cljs.core.count(c__5120__auto___15942);
var G__15946 = (0);
seq__15926_15930 = G__15943;
chunk__15927_15931 = G__15944;
count__15928_15932 = G__15945;
i__15929_15933 = G__15946;
continue;
} else {
var k_15947 = cljs.core.first(seq__15926_15941__$1);
var v_15948 = (b[k_15947]);
(a[k_15947] = v_15948);

var G__15949 = cljs.core.next(seq__15926_15941__$1);
var G__15950 = null;
var G__15951 = (0);
var G__15952 = (0);
seq__15926_15930 = G__15949;
chunk__15927_15931 = G__15950;
count__15928_15932 = G__15951;
i__15929_15933 = G__15952;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__15953 = arr;
var G__15954 = true;
var G__15955 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__15953,G__15954,G__15955) : cljs.core.PersistentArrayMap.fromArray.call(null,G__15953,G__15954,G__15955));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__15956 = arr;
var G__15957 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__15956,G__15957) : cljs.core.PersistentVector.fromArray.call(null,G__15956,G__15957));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__15959 = arguments.length;
switch (G__15959) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__15960 = cljs.core.name(type);
var G__15961 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__15960){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__15960))
,":",((function (G__15960){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__15960))
,"set",((function (G__15960){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__15960))
,"list",((function (G__15960){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__15960))
,"cmap",((function (G__15960){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__15963 = (i + (2));
var G__15964 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__15963;
ret = G__15964;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__15960))
], null),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__15960,G__15961) : com.cognitect.transit.reader.call(null,G__15960,G__15961));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__15965_15971 = cljs.core.seq(v);
var chunk__15966_15972 = null;
var count__15967_15973 = (0);
var i__15968_15974 = (0);
while(true){
if((i__15968_15974 < count__15967_15973)){
var x_15975 = chunk__15966_15972.cljs$core$IIndexed$_nth$arity$2(null,i__15968_15974);
ret.push(x_15975);

var G__15976 = seq__15965_15971;
var G__15977 = chunk__15966_15972;
var G__15978 = count__15967_15973;
var G__15979 = (i__15968_15974 + (1));
seq__15965_15971 = G__15976;
chunk__15966_15972 = G__15977;
count__15967_15973 = G__15978;
i__15968_15974 = G__15979;
continue;
} else {
var temp__4126__auto___15980 = cljs.core.seq(seq__15965_15971);
if(temp__4126__auto___15980){
var seq__15965_15981__$1 = temp__4126__auto___15980;
if(cljs.core.chunked_seq_QMARK_(seq__15965_15981__$1)){
var c__5120__auto___15982 = cljs.core.chunk_first(seq__15965_15981__$1);
var G__15983 = cljs.core.chunk_rest(seq__15965_15981__$1);
var G__15984 = c__5120__auto___15982;
var G__15985 = cljs.core.count(c__5120__auto___15982);
var G__15986 = (0);
seq__15965_15971 = G__15983;
chunk__15966_15972 = G__15984;
count__15967_15973 = G__15985;
i__15968_15974 = G__15986;
continue;
} else {
var x_15987 = cljs.core.first(seq__15965_15981__$1);
ret.push(x_15987);

var G__15988 = cljs.core.next(seq__15965_15981__$1);
var G__15989 = null;
var G__15990 = (0);
var G__15991 = (0);
seq__15965_15971 = G__15988;
chunk__15966_15972 = G__15989;
count__15967_15973 = G__15990;
i__15968_15974 = G__15991;
continue;
}
} else {
}
}
break;
}

var G__15969 = "array";
var G__15970 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__15969,G__15970) : com.cognitect.transit.tagged.call(null,G__15969,G__15970));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__15992_15998 = cljs.core.seq(v);
var chunk__15993_15999 = null;
var count__15994_16000 = (0);
var i__15995_16001 = (0);
while(true){
if((i__15995_16001 < count__15994_16000)){
var x_16002 = chunk__15993_15999.cljs$core$IIndexed$_nth$arity$2(null,i__15995_16001);
ret.push(x_16002);

var G__16003 = seq__15992_15998;
var G__16004 = chunk__15993_15999;
var G__16005 = count__15994_16000;
var G__16006 = (i__15995_16001 + (1));
seq__15992_15998 = G__16003;
chunk__15993_15999 = G__16004;
count__15994_16000 = G__16005;
i__15995_16001 = G__16006;
continue;
} else {
var temp__4126__auto___16007 = cljs.core.seq(seq__15992_15998);
if(temp__4126__auto___16007){
var seq__15992_16008__$1 = temp__4126__auto___16007;
if(cljs.core.chunked_seq_QMARK_(seq__15992_16008__$1)){
var c__5120__auto___16009 = cljs.core.chunk_first(seq__15992_16008__$1);
var G__16010 = cljs.core.chunk_rest(seq__15992_16008__$1);
var G__16011 = c__5120__auto___16009;
var G__16012 = cljs.core.count(c__5120__auto___16009);
var G__16013 = (0);
seq__15992_15998 = G__16010;
chunk__15993_15999 = G__16011;
count__15994_16000 = G__16012;
i__15995_16001 = G__16013;
continue;
} else {
var x_16014 = cljs.core.first(seq__15992_16008__$1);
ret.push(x_16014);

var G__16015 = cljs.core.next(seq__15992_16008__$1);
var G__16016 = null;
var G__16017 = (0);
var G__16018 = (0);
seq__15992_15998 = G__16015;
chunk__15993_15999 = G__16016;
count__15994_16000 = G__16017;
i__15995_16001 = G__16018;
continue;
}
} else {
}
}
break;
}

var G__15996 = "array";
var G__15997 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__15996,G__15997) : com.cognitect.transit.tagged.call(null,G__15996,G__15997));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16019_16023 = cljs.core.seq(v);
var chunk__16020_16024 = null;
var count__16021_16025 = (0);
var i__16022_16026 = (0);
while(true){
if((i__16022_16026 < count__16021_16025)){
var x_16027 = chunk__16020_16024.cljs$core$IIndexed$_nth$arity$2(null,i__16022_16026);
ret.push(x_16027);

var G__16028 = seq__16019_16023;
var G__16029 = chunk__16020_16024;
var G__16030 = count__16021_16025;
var G__16031 = (i__16022_16026 + (1));
seq__16019_16023 = G__16028;
chunk__16020_16024 = G__16029;
count__16021_16025 = G__16030;
i__16022_16026 = G__16031;
continue;
} else {
var temp__4126__auto___16032 = cljs.core.seq(seq__16019_16023);
if(temp__4126__auto___16032){
var seq__16019_16033__$1 = temp__4126__auto___16032;
if(cljs.core.chunked_seq_QMARK_(seq__16019_16033__$1)){
var c__5120__auto___16034 = cljs.core.chunk_first(seq__16019_16033__$1);
var G__16035 = cljs.core.chunk_rest(seq__16019_16033__$1);
var G__16036 = c__5120__auto___16034;
var G__16037 = cljs.core.count(c__5120__auto___16034);
var G__16038 = (0);
seq__16019_16023 = G__16035;
chunk__16020_16024 = G__16036;
count__16021_16025 = G__16037;
i__16022_16026 = G__16038;
continue;
} else {
var x_16039 = cljs.core.first(seq__16019_16033__$1);
ret.push(x_16039);

var G__16040 = cljs.core.next(seq__16019_16033__$1);
var G__16041 = null;
var G__16042 = (0);
var G__16043 = (0);
seq__16019_16023 = G__16040;
chunk__16020_16024 = G__16041;
count__16021_16025 = G__16042;
i__16022_16026 = G__16043;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__16045 = arguments.length;
switch (G__16045) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__16046 = cljs.core.name(type);
var G__16047 = cognitect.transit.opts_merge({"unpack": ((function (G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16051 = cljs.core.clone(handlers);
x16051.forEach = ((function (x16051,G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__16052 = cljs.core.seq(coll);
var chunk__16053 = null;
var count__16054 = (0);
var i__16055 = (0);
while(true){
if((i__16055 < count__16054)){
var vec__16056 = chunk__16053.cljs$core$IIndexed$_nth$arity$2(null,i__16055);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056,(1),null);
var G__16057_16063 = v;
var G__16058_16064 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16057_16063,G__16058_16064) : f.call(null,G__16057_16063,G__16058_16064));

var G__16065 = seq__16052;
var G__16066 = chunk__16053;
var G__16067 = count__16054;
var G__16068 = (i__16055 + (1));
seq__16052 = G__16065;
chunk__16053 = G__16066;
count__16054 = G__16067;
i__16055 = G__16068;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16052);
if(temp__4126__auto__){
var seq__16052__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16052__$1)){
var c__5120__auto__ = cljs.core.chunk_first(seq__16052__$1);
var G__16069 = cljs.core.chunk_rest(seq__16052__$1);
var G__16070 = c__5120__auto__;
var G__16071 = cljs.core.count(c__5120__auto__);
var G__16072 = (0);
seq__16052 = G__16069;
chunk__16053 = G__16070;
count__16054 = G__16071;
i__16055 = G__16072;
continue;
} else {
var vec__16059 = cljs.core.first(seq__16052__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059,(1),null);
var G__16060_16073 = v;
var G__16061_16074 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16060_16073,G__16061_16074) : f.call(null,G__16060_16073,G__16061_16074));

var G__16075 = cljs.core.next(seq__16052__$1);
var G__16076 = null;
var G__16077 = (0);
var G__16078 = (0);
seq__16052 = G__16075;
chunk__16053 = G__16076;
count__16054 = G__16077;
i__16055 = G__16078;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16051,G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x16051;
})(), "objectBuilder": ((function (G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__16048 = obj;
G__16048.push((function (){var G__16049 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__16049) : kfn.call(null,G__16049));
})(),(function (){var G__16050 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__16050) : vfn.call(null,G__16050));
})());

return G__16048;
});})(G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__16046,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__16046,G__16047) : com.cognitect.transit.writer.call(null,G__16046,G__16047));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__16080 = arguments.length;
switch (G__16080) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t16081 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t16081 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta16082){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta16082 = meta16082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t16081.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__16084 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__16084) : self__.tag_fn.call(null,G__16084));
});

cognitect.transit.t16081.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__16085 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__16085) : self__.rep_fn.call(null,G__16085));
});

cognitect.transit.t16081.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__16086 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__16086) : self__.str_rep_fn.call(null,G__16086));
} else {
return null;
}
});

cognitect.transit.t16081.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t16081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16083){
var self__ = this;
var _16083__$1 = this;
return self__.meta16082;
});

cognitect.transit.t16081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16083,meta16082__$1){
var self__ = this;
var _16083__$1 = this;
return (new cognitect.transit.t16081(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta16082__$1));
});

cognitect.transit.t16081.cljs$lang$type = true;

cognitect.transit.t16081.cljs$lang$ctorStr = "cognitect.transit/t16081";

cognitect.transit.t16081.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write(writer__4915__auto__,"cognitect.transit/t16081");
});

cognitect.transit.__GT_t16081 = (function cognitect$transit$__GT_t16081(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta16082){
return (new cognitect.transit.t16081(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta16082));
});

}

return (new cognitect.transit.t16081(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
var G__16090 = tag;
var G__16091 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__16090,G__16091) : com.cognitect.transit.types.taggedValue.call(null,G__16090,G__16091));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
var G__16093 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__16093) : com.cognitect.transit.types.isTaggedValue.call(null,G__16093));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
var G__16095 = s;
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(G__16095) : com.cognitect.transit.types.intValue.call(null,G__16095));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
var G__16097 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__16097) : com.cognitect.transit.types.isInteger.call(null,G__16097));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
var G__16099 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__16099) : com.cognitect.transit.types.bigInteger.call(null,G__16099));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
var G__16101 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__16101) : com.cognitect.transit.types.isBigInteger.call(null,G__16101));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
var G__16103 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__16103) : com.cognitect.transit.types.bigDecimalValue.call(null,G__16103));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
var G__16105 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__16105) : com.cognitect.transit.types.isBigDecimal.call(null,G__16105));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
var G__16107 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__16107) : com.cognitect.transit.types.uri.call(null,G__16107));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
var G__16109 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__16109) : com.cognitect.transit.types.isURI.call(null,G__16109));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
var G__16111 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__16111) : com.cognitect.transit.types.uuid.call(null,G__16111));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var G__16113 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__16113) : com.cognitect.transit.types.isUUID.call(null,G__16113));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
var G__16115 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__16115) : com.cognitect.transit.types.binary.call(null,G__16115));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
var G__16117 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__16117) : com.cognitect.transit.types.isBinary.call(null,G__16117));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
var G__16119 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__16119) : com.cognitect.transit.types.quoted.call(null,G__16119));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
var G__16121 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__16121) : com.cognitect.transit.types.isQuoted.call(null,G__16121));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
var G__16123 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__16123) : com.cognitect.transit.types.link.call(null,G__16123));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
var G__16125 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__16125) : com.cognitect.transit.types.isLink.call(null,G__16125));
});
