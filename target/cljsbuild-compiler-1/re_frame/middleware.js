// Compiled by ClojureScript 0.0-3211 {:optimize-constants true, :static-fns true}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('re_frame.utils');
goog.require('re_frame.undo');
goog.require('reagent.ratom');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 * The re-frame router passes the `app-db` atom as the first parameter to any handler.
 * This middleware adapts that atom to be the value within the atom.
 * If you strip away the error/efficiency checks, this middleware is doing:
 * (reset! app-db (handler @app-db event-vec))
 * You don't have to use this middleware directly. It is automatically applied to
 * your handler's middleware when you use "register-handler".
 * In fact, the only way to by-pass automatic use of "pure" in your middleware
 * is to use the low level registration function "re-frame.handlers/register-handler-base"
 */
re_frame.middleware.pure = (function re_frame$middleware$pure(handler){
return (function re_frame$middleware$pure_$_pure_handler(app_db,event_vec){
if(!((function (){var G__16636 = app_db;
if(G__16636){
var bit__5009__auto__ = null;
if(cljs.core.truth_((function (){var or__4335__auto__ = bit__5009__auto__;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return G__16636.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__16636.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__16636);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__16636);
}
})())){
if(cljs.core.map_QMARK_(app_db)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring."], 0));
} else {
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db], 0));
}

return handler;
} else {
var db = (function (){var G__16637 = app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16637) : cljs.core.deref.call(null,G__16637));
})();
var new_db = (function (){var G__16638 = db;
var G__16639 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16638,G__16639) : handler.call(null,G__16638,G__16639));
})();
if((new_db == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: your pure handler returned nil. It should return the new db state."], 0));
} else {
if(!((db === new_db))){
var G__16640 = app_db;
var G__16641 = new_db;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16640,G__16641) : cljs.core.reset_BANG_.call(null,G__16640,G__16641));
} else {
return null;
}
}
}
});
});
/**
 * Middleware which catches and prints any handler-generated exceptions to console.
 * Handlers are called from within a core.async go-loop, and core.async produces
 * a special kind of hell when in comes to stacktraces. By the time an exception
 * has passed through a go-loop its stack is mangled beyond repair and you'll
 * have no idea where the exception was thrown.
 * So this middleware catches and prints to stacktrace before the core.async sausage
 * machine has done its work.
 * 
 */
re_frame.middleware.log_ex = (function re_frame$middleware$log_ex(handler){
return (function re_frame$middleware$log_ex_$_log_ex_handler(db,v){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: use of \"log-ex\" is deprecated. You don't need it any more IF YOU ARE USING CHROME 44. Chrome now seems to now produce good stack traces."], 0));

try{var G__16652 = db;
var G__16653 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16652,G__16653) : handler.call(null,G__16652,G__16653));
}catch (e16651){var e = e16651;
console.error(e.stack);

throw e;
}});
});
/**
 * Middleware which logs debug information to js/console for each event.
 * Includes a clojure.data/diff of the db, before vs after, showing the changes
 * caused by the event.
 */
re_frame.middleware.debug = (function re_frame$middleware$debug(handler){
return (function re_frame$middleware$debug_$_debug_handler(db,v){
re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-- New Event ----------------------------------------------------"], 0));

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame event: ",v], 0));

var new_db = (function (){var G__16660 = db;
var G__16661 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16660,G__16661) : handler.call(null,G__16660,G__16661));
})();
var diff = clojure.data.diff(db,new_db);
re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only before: ",cljs.core.first(diff)], 0));

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only after : ",cljs.core.second(diff)], 0));

re_frame.utils.groupEnd();

return new_db;
});
});
/**
 * Middleware which removes the first element of v, allowing you to write
 * more aesthetically pleasing handlers. No leading underscore on the event-v!
 * Your handlers will look like this:
 * (defn my-handler
 * [db [x y z]]    ;; <-- instead of [_ x y z]
 * ....)
 * 
 */
re_frame.middleware.trim_v = (function re_frame$middleware$trim_v(handler){
return (function re_frame$middleware$trim_v_$_trim_v_handler(db,v){
var G__16668 = db;
var G__16669 = cljs.core.vec(cljs.core.rest(v));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16668,G__16669) : handler.call(null,G__16668,G__16669));
});
});
/**
 * A middleware factory which supplies a sub-tree of `db` to the handler.
 * Works a bit like update-in. Supplies a narrowed data structure for the handler.
 * Afterwards, grafts the result of the handler back into db.
 * Usage:
 * (path :some :path)
 * (path [:some :path])
 * (path [:some :path] :to :here)
 * (path [:some :path] [:to] :here)
 * 
 */
re_frame.middleware.path = cljs.core.with_meta((function() { 
var re_frame$middleware$path__delegate = function (args){
var path__$1 = cljs.core.flatten(args);
var _ = ((cljs.core.empty_QMARK_(path__$1))?re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"path\" middleware given no params."], 0)):null);
return ((function (path__$1,_){
return (function re_frame$middleware$path_$_path_middleware(handler){
return ((function (path__$1,_){
return (function re_frame$middleware$path_$_path_middleware_$_path_handler(db,v){
return cljs.core.assoc_in(db,path__$1,(function (){var G__16684 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path__$1);
var G__16685 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16684,G__16685) : handler.call(null,G__16684,G__16685));
})());
});
;})(path__$1,_))
});
;})(path__$1,_))
};
var re_frame$middleware$path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16686__i = 0, G__16686__a = new Array(arguments.length -  0);
while (G__16686__i < G__16686__a.length) {G__16686__a[G__16686__i] = arguments[G__16686__i + 0]; ++G__16686__i;}
  args = new cljs.core.IndexedSeq(G__16686__a,0);
} 
return re_frame$middleware$path__delegate.call(this,args);};
re_frame$middleware$path.cljs$lang$maxFixedArity = 0;
re_frame$middleware$path.cljs$lang$applyTo = (function (arglist__16687){
var args = cljs.core.seq(arglist__16687);
return re_frame$middleware$path__delegate(args);
});
re_frame$middleware$path.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$path__delegate;
return re_frame$middleware$path;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name,"path"], null));
/**
 * A Middleware factory which stores an undo checkpoint.
 * "explanation" can be either a string or a function. If it is a
 * function then must be:  (db event-vec) -> string.
 * "explanation" can be nil. in which case "" is recorded.
 * 
 */
re_frame.middleware.undoable = cljs.core.with_meta((function re_frame$middleware$undoable(explanation){
return (function re_frame$middleware$undoable_$_undoable_middleware(handler){
return (function re_frame$middleware$undoable_$_undoable_middleware_$_undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_(explanation))?(function (){var G__16716 = db;
var G__16717 = event_vec;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__16716,G__16717) : explanation.call(null,G__16716,G__16717));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"undoable\" middleware given a bad parameter. Got: ",explanation], 0))
)));
re_frame.undo.store_now_BANG_(explanation__$1);

var G__16718 = db;
var G__16719 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16718,G__16719) : handler.call(null,G__16718,G__16719));
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name,"undoable"], null));
/**
 * Middleware factory which runs a given function "f" in the after position.
 * "f" is (db v) -> db
 * Unlike "after" which is about side effects, "enrich" expects f to process and alter
 * db in some useful way, contributing to the derived data, flowing vibe.
 * Imagine that todomvc needed to do duplicate detection - if any two todos had
 * the same text, then highlight their background, and report them in a warning
 * down the bottom.
 * Almost any action (edit text, add new todo, remove a todo) requires a
 * complete reassesment of duplication errors and warnings. Eg: that edit
 * update might have introduced a new duplicate or removed one. Same with a
 * todo removal.
 * And to perform this enrichment, a function has to inspect all the todos,
 * possibly set flags on each, and set some overall list of duplicates.
 * And this duplication check might just be one check amoung many.
 * "f" would need to be both adding and removing the duplicate warnings.
 * By applying "f" in middleware, we keep the handlers simple and yet we
 * ensure this important step is not missed.
 */
re_frame.middleware.enrich = cljs.core.with_meta((function re_frame$middleware$enrich(f){
return (function re_frame$middleware$enrich_$_enrich_middleware(handler){
return (function re_frame$middleware$enrich_$_enrich_middleware_$_enrich_handler(db,v){
var G__16748 = (function (){var G__16750 = db;
var G__16751 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16750,G__16751) : handler.call(null,G__16750,G__16751));
})();
var G__16749 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16748,G__16749) : f.call(null,G__16748,G__16749));
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name,"enrich"], null));
/**
 * Middleware factory which runs a function "f" in the "after handler"
 * position presumably for side effects.
 * "f" is given the new value of "db". It's return value is ignored.
 * Examples: "f" can run schema validation. Or write current state to localstorage. etc.
 * In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
 * (if you need that.)
 */
re_frame.middleware.after = cljs.core.with_meta((function re_frame$middleware$after(f){
return (function re_frame$middleware$after_$_after_middleware(handler){
return (function re_frame$middleware$after_$_after_middleware_$_after_handler(db,v){
var new_db = (function (){var G__16780 = db;
var G__16781 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16780,G__16781) : handler.call(null,G__16780,G__16781));
})();
var G__16782_16784 = new_db;
var G__16783_16785 = v;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16782_16784,G__16783_16785) : f.call(null,G__16782_16784,G__16783_16785));

return new_db;
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name,"after"], null));
/**
 * Middleware factory which acts a bit like "reaction"  (but it flows into db , rather than out)
 * It observes N  inputs (paths into db) and if any of them change (as a result of the
 * handler being run) then it runs 'f' to compute a new value, which is
 * then assoced into the given out-path within app-db.
 * 
 * Usage:
 * 
 * (defn my-f
 * [a-val b-val]
 * ... some computation on a and b in here)
 * 
 * (on-changes my-f [:c]  [:a] [:b])
 * 
 * Put the middlware above on the right handlers (ones which might change :a or :b).
 * It will:
 * - call 'f' each time the value at path [:a] or [:b] changes
 * - call 'f' with the values extracted from [:a] [:b]
 * - assoc the return value from 'f' into the path  [:c]
 * 
 */
re_frame.middleware.on_changes = cljs.core.with_meta((function() { 
var re_frame$middleware$on_changes__delegate = function (f,out_path,in_paths){
return (function re_frame$middleware$on_changes_$_on_changed_middleware(handler){
return (function re_frame$middleware$on_changes_$_on_changed_middleware_$_on_changed_handler(db,v){
var new_db = (function (){var G__16802 = db;
var G__16803 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__16802,G__16803) : handler.call(null,G__16802,G__16803));
})();
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db){
return (function (p1__16786_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__16786_SHARP_);
});})(new_db))
,in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,new_ins){
return (function (p1__16787_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,p1__16787_SHARP_);
});})(new_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins));
} else {
return new_db;
}
});
});
};
var re_frame$middleware$on_changes = function (f,out_path,var_args){
var in_paths = null;
if (arguments.length > 2) {
var G__16804__i = 0, G__16804__a = new Array(arguments.length -  2);
while (G__16804__i < G__16804__a.length) {G__16804__a[G__16804__i] = arguments[G__16804__i + 2]; ++G__16804__i;}
  in_paths = new cljs.core.IndexedSeq(G__16804__a,0);
} 
return re_frame$middleware$on_changes__delegate.call(this,f,out_path,in_paths);};
re_frame$middleware$on_changes.cljs$lang$maxFixedArity = 2;
re_frame$middleware$on_changes.cljs$lang$applyTo = (function (arglist__16805){
var f = cljs.core.first(arglist__16805);
arglist__16805 = cljs.core.next(arglist__16805);
var out_path = cljs.core.first(arglist__16805);
var in_paths = cljs.core.rest(arglist__16805);
return re_frame$middleware$on_changes__delegate(f,out_path,in_paths);
});
re_frame$middleware$on_changes.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$on_changes__delegate;
return re_frame$middleware$on_changes;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$re_DASH_frame_DASH_factory_DASH_name,"on-changes"], null));
