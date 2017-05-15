// Compiled by ClojureScript 1.9.495 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__42241_SHARP_,p2__42240_SHARP_){
return p2__42240_SHARP_.call(null,p1__42241_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42243_SHARP_,p2__42242_SHARP_){
return p2__42242_SHARP_.call(null,old_state,p1__42243_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35250__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42244_SHARP_){
return p1__42244_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__42249 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__42249,(0),null);
var next_state = cljs.core.nth.call(null,vec__42249,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42245_SHARP_){
return p1__42245_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__42252__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__42252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42253__i = 0, G__42253__a = new Array(arguments.length -  0);
while (G__42253__i < G__42253__a.length) {G__42253__a[G__42253__i] = arguments[G__42253__i + 0]; ++G__42253__i;}
  args = new cljs.core.IndexedSeq(G__42253__a,0);
} 
return G__42252__delegate.call(this,args);};
G__42252.cljs$lang$maxFixedArity = 0;
G__42252.cljs$lang$applyTo = (function (arglist__42254){
var args = cljs.core.seq(arglist__42254);
return G__42252__delegate(args);
});
G__42252.cljs$core$IFn$_invoke$arity$variadic = G__42252__delegate;
return G__42252;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__42255__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__42255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42256__i = 0, G__42256__a = new Array(arguments.length -  0);
while (G__42256__i < G__42256__a.length) {G__42256__a[G__42256__i] = arguments[G__42256__i + 0]; ++G__42256__i;}
  args = new cljs.core.IndexedSeq(G__42256__a,0);
} 
return G__42255__delegate.call(this,args);};
G__42255.cljs$lang$maxFixedArity = 0;
G__42255.cljs$lang$applyTo = (function (arglist__42257){
var args = cljs.core.seq(arglist__42257);
return G__42255__delegate(args);
});
G__42255.cljs$core$IFn$_invoke$arity$variadic = G__42255__delegate;
return G__42255;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__42258__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__42258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42259__i = 0, G__42259__a = new Array(arguments.length -  0);
while (G__42259__i < G__42259__a.length) {G__42259__a[G__42259__i] = arguments[G__42259__i + 0]; ++G__42259__i;}
  args = new cljs.core.IndexedSeq(G__42259__a,0);
} 
return G__42258__delegate.call(this,args);};
G__42258.cljs$lang$maxFixedArity = 0;
G__42258.cljs$lang$applyTo = (function (arglist__42260){
var args = cljs.core.seq(arglist__42260);
return G__42258__delegate(args);
});
G__42258.cljs$core$IFn$_invoke$arity$variadic = G__42258__delegate;
return G__42258;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__35250__auto__ = (function (){var and__35238__auto__ = typeof window !== 'undefined';
if(and__35238__auto__){
var or__35250__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
var or__35250__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35250__auto____$1)){
return or__35250__auto____$1;
} else {
var or__35250__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35250__auto____$2)){
return or__35250__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35238__auto__;
}
})();
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return ((function (or__35250__auto__){
return (function (p1__42261_SHARP_){
return setTimeout(p1__42261_SHARP_,(16));
});
;})(or__35250__auto__))
}
})();
rum.core.batch = (function (){var or__35250__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
var or__35250__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35250__auto____$1)){
return or__35250__auto____$1;
} else {
return ((function (or__35250__auto____$1,or__35250__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35250__auto____$1,or__35250__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__42268 = cljs.core.seq.call(null,queue);
var chunk__42270 = null;
var count__42271 = (0);
var i__42272 = (0);
while(true){
if((i__42272 < count__42271)){
var comp = cljs.core._nth.call(null,chunk__42270,i__42272);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42274 = seq__42268;
var G__42275 = chunk__42270;
var G__42276 = count__42271;
var G__42277 = (i__42272 + (1));
seq__42268 = G__42274;
chunk__42270 = G__42275;
count__42271 = G__42276;
i__42272 = G__42277;
continue;
} else {
var G__42278 = seq__42268;
var G__42279 = chunk__42270;
var G__42280 = count__42271;
var G__42281 = (i__42272 + (1));
seq__42268 = G__42278;
chunk__42270 = G__42279;
count__42271 = G__42280;
i__42272 = G__42281;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42268);
if(temp__4657__auto__){
var seq__42268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42268__$1)){
var c__36069__auto__ = cljs.core.chunk_first.call(null,seq__42268__$1);
var G__42282 = cljs.core.chunk_rest.call(null,seq__42268__$1);
var G__42283 = c__36069__auto__;
var G__42284 = cljs.core.count.call(null,c__36069__auto__);
var G__42285 = (0);
seq__42268 = G__42282;
chunk__42270 = G__42283;
count__42271 = G__42284;
i__42272 = G__42285;
continue;
} else {
var comp = cljs.core.first.call(null,seq__42268__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42286 = cljs.core.next.call(null,seq__42268__$1);
var G__42287 = null;
var G__42288 = (0);
var G__42289 = (0);
seq__42268 = G__42286;
chunk__42270 = G__42287;
count__42271 = G__42288;
i__42272 = G__42289;
continue;
} else {
var G__42290 = cljs.core.next.call(null,seq__42268__$1);
var G__42291 = null;
var G__42292 = (0);
var G__42293 = (0);
seq__42268 = G__42290;
chunk__42270 = G__42291;
count__42271 = G__42292;
i__42272 = G__42293;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args42294 = [];
var len__36363__auto___42297 = arguments.length;
var i__36364__auto___42298 = (0);
while(true){
if((i__36364__auto___42298 < len__36363__auto___42297)){
args42294.push((arguments[i__36364__auto___42298]));

var G__42299 = (i__36364__auto___42298 + (1));
i__36364__auto___42298 = G__42299;
continue;
} else {
}
break;
}

var G__42296 = args42294.length;
switch (G__42296) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42294.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_42301 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42302 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42302,(0),null);
var next_state = cljs.core.nth.call(null,vec__42302,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42305_42317 = cljs.core.seq.call(null,old_reactions);
var chunk__42306_42318 = null;
var count__42307_42319 = (0);
var i__42308_42320 = (0);
while(true){
if((i__42308_42320 < count__42307_42319)){
var ref_42321 = cljs.core._nth.call(null,chunk__42306_42318,i__42308_42320);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42321)){
} else {
cljs.core.remove_watch.call(null,ref_42321,key);
}

var G__42322 = seq__42305_42317;
var G__42323 = chunk__42306_42318;
var G__42324 = count__42307_42319;
var G__42325 = (i__42308_42320 + (1));
seq__42305_42317 = G__42322;
chunk__42306_42318 = G__42323;
count__42307_42319 = G__42324;
i__42308_42320 = G__42325;
continue;
} else {
var temp__4657__auto___42326 = cljs.core.seq.call(null,seq__42305_42317);
if(temp__4657__auto___42326){
var seq__42305_42327__$1 = temp__4657__auto___42326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42305_42327__$1)){
var c__36069__auto___42328 = cljs.core.chunk_first.call(null,seq__42305_42327__$1);
var G__42329 = cljs.core.chunk_rest.call(null,seq__42305_42327__$1);
var G__42330 = c__36069__auto___42328;
var G__42331 = cljs.core.count.call(null,c__36069__auto___42328);
var G__42332 = (0);
seq__42305_42317 = G__42329;
chunk__42306_42318 = G__42330;
count__42307_42319 = G__42331;
i__42308_42320 = G__42332;
continue;
} else {
var ref_42333 = cljs.core.first.call(null,seq__42305_42327__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42333)){
} else {
cljs.core.remove_watch.call(null,ref_42333,key);
}

var G__42334 = cljs.core.next.call(null,seq__42305_42327__$1);
var G__42335 = null;
var G__42336 = (0);
var G__42337 = (0);
seq__42305_42317 = G__42334;
chunk__42306_42318 = G__42335;
count__42307_42319 = G__42336;
i__42308_42320 = G__42337;
continue;
}
} else {
}
}
break;
}

var seq__42309_42338 = cljs.core.seq.call(null,new_reactions);
var chunk__42310_42339 = null;
var count__42311_42340 = (0);
var i__42312_42341 = (0);
while(true){
if((i__42312_42341 < count__42311_42340)){
var ref_42342 = cljs.core._nth.call(null,chunk__42310_42339,i__42312_42341);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42342)){
} else {
cljs.core.add_watch.call(null,ref_42342,key,((function (seq__42309_42338,chunk__42310_42339,count__42311_42340,i__42312_42341,ref_42342,comp,old_reactions,vec__42302,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42301){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42309_42338,chunk__42310_42339,count__42311_42340,i__42312_42341,ref_42342,comp,old_reactions,vec__42302,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42301))
);
}

var G__42343 = seq__42309_42338;
var G__42344 = chunk__42310_42339;
var G__42345 = count__42311_42340;
var G__42346 = (i__42312_42341 + (1));
seq__42309_42338 = G__42343;
chunk__42310_42339 = G__42344;
count__42311_42340 = G__42345;
i__42312_42341 = G__42346;
continue;
} else {
var temp__4657__auto___42347 = cljs.core.seq.call(null,seq__42309_42338);
if(temp__4657__auto___42347){
var seq__42309_42348__$1 = temp__4657__auto___42347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42309_42348__$1)){
var c__36069__auto___42349 = cljs.core.chunk_first.call(null,seq__42309_42348__$1);
var G__42350 = cljs.core.chunk_rest.call(null,seq__42309_42348__$1);
var G__42351 = c__36069__auto___42349;
var G__42352 = cljs.core.count.call(null,c__36069__auto___42349);
var G__42353 = (0);
seq__42309_42338 = G__42350;
chunk__42310_42339 = G__42351;
count__42311_42340 = G__42352;
i__42312_42341 = G__42353;
continue;
} else {
var ref_42354 = cljs.core.first.call(null,seq__42309_42348__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42354)){
} else {
cljs.core.add_watch.call(null,ref_42354,key,((function (seq__42309_42338,chunk__42310_42339,count__42311_42340,i__42312_42341,ref_42354,seq__42309_42348__$1,temp__4657__auto___42347,comp,old_reactions,vec__42302,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42301){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42309_42338,chunk__42310_42339,count__42311_42340,i__42312_42341,ref_42354,seq__42309_42348__$1,temp__4657__auto___42347,comp,old_reactions,vec__42302,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42301))
);
}

var G__42355 = cljs.core.next.call(null,seq__42309_42348__$1);
var G__42356 = null;
var G__42357 = (0);
var G__42358 = (0);
seq__42309_42338 = G__42355;
chunk__42310_42339 = G__42356;
count__42311_42340 = G__42357;
i__42312_42341 = G__42358;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42301;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42359 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42313_42360 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42314_42361 = null;
var count__42315_42362 = (0);
var i__42316_42363 = (0);
while(true){
if((i__42316_42363 < count__42315_42362)){
var ref_42364 = cljs.core._nth.call(null,chunk__42314_42361,i__42316_42363);
cljs.core.remove_watch.call(null,ref_42364,key_42359);

var G__42365 = seq__42313_42360;
var G__42366 = chunk__42314_42361;
var G__42367 = count__42315_42362;
var G__42368 = (i__42316_42363 + (1));
seq__42313_42360 = G__42365;
chunk__42314_42361 = G__42366;
count__42315_42362 = G__42367;
i__42316_42363 = G__42368;
continue;
} else {
var temp__4657__auto___42369 = cljs.core.seq.call(null,seq__42313_42360);
if(temp__4657__auto___42369){
var seq__42313_42370__$1 = temp__4657__auto___42369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42313_42370__$1)){
var c__36069__auto___42371 = cljs.core.chunk_first.call(null,seq__42313_42370__$1);
var G__42372 = cljs.core.chunk_rest.call(null,seq__42313_42370__$1);
var G__42373 = c__36069__auto___42371;
var G__42374 = cljs.core.count.call(null,c__36069__auto___42371);
var G__42375 = (0);
seq__42313_42360 = G__42372;
chunk__42314_42361 = G__42373;
count__42315_42362 = G__42374;
i__42316_42363 = G__42375;
continue;
} else {
var ref_42376 = cljs.core.first.call(null,seq__42313_42370__$1);
cljs.core.remove_watch.call(null,ref_42376,key_42359);

var G__42377 = cljs.core.next.call(null,seq__42313_42370__$1);
var G__42378 = null;
var G__42379 = (0);
var G__42380 = (0);
seq__42313_42360 = G__42377;
chunk__42314_42361 = G__42378;
count__42315_42362 = G__42379;
i__42316_42363 = G__42380;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42387 = arguments.length;
var i__36364__auto___42388 = (0);
while(true){
if((i__36364__auto___42388 < len__36363__auto___42387)){
args__36370__auto__.push((arguments[i__36364__auto___42388]));

var G__42389 = (i__36364__auto___42388 + (1));
i__36364__auto___42388 = G__42389;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((2) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36371__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42384){
var map__42385 = p__42384;
var map__42385__$1 = ((((!((map__42385 == null)))?((((map__42385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42385):map__42385);
var options = map__42385__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42381){
var G__42382 = cljs.core.first.call(null,seq42381);
var seq42381__$1 = cljs.core.next.call(null,seq42381);
var G__42383 = cljs.core.first.call(null,seq42381__$1);
var seq42381__$2 = cljs.core.next.call(null,seq42381__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42382,G__42383,seq42381__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42393 = arguments.length;
var i__36364__auto___42394 = (0);
while(true){
if((i__36364__auto___42394 < len__36363__auto___42393)){
args__36370__auto__.push((arguments[i__36364__auto___42394]));

var G__42395 = (i__36364__auto___42394 + (1));
i__36364__auto___42394 = G__42395;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((2) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36371__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42390){
var G__42391 = cljs.core.first.call(null,seq42390);
var seq42390__$1 = cljs.core.next.call(null,seq42390);
var G__42392 = cljs.core.first.call(null,seq42390__$1);
var seq42390__$2 = cljs.core.next.call(null,seq42390__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42391,G__42392,seq42390__$2);
});

