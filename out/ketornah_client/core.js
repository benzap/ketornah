// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.core');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('ketornah_client.sql');
goog.require('ketornah_client.search');
goog.require('ketornah_client.utils');
goog.require('ketornah_client.components.search');
goog.require('ketornah_client.components.result');
goog.require('ketornah_client.components.loading');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ketornah_client.core.app_state !== 'undefined'){
} else {
ketornah_client.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"querying?","querying?",1078116512),false,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051),null,new cljs.core.Keyword(null,"worker-channel","worker-channel",1297094356),null], null));
}
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__42518__auto___42710 = (function (params__42519__auto__){
if(cljs.core.map_QMARK_.call(null,params__42519__auto__)){
var map__42704 = params__42519__auto__;
var map__42704__$1 = ((((!((map__42704 == null)))?((((map__42704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42704):map__42704);
var query = cljs.core.get.call(null,map__42704__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_params = cljs.core.get.call(null,map__42704__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return ketornah_client.search.update_food_search.call(null,ketornah_client.core.app_state,window.decodeURIComponent(query));
} else {
if(cljs.core.vector_QMARK_.call(null,params__42519__auto__)){
var vec__42706 = params__42519__auto__;
var query = cljs.core.nth.call(null,vec__42706,(0),null);
var query_params = cljs.core.nth.call(null,vec__42706,(1),null);
return ketornah_client.search.update_food_search.call(null,ketornah_client.core.app_state,window.decodeURIComponent(query));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/search/:query",action__42518__auto___42710);

ketornah_client.core.search_query = ((function (action__42518__auto___42710){
return (function ketornah_client$core$search_query(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42711 = arguments.length;
var i__36364__auto___42712 = (0);
while(true){
if((i__36364__auto___42712 < len__36363__auto___42711)){
args__36370__auto__.push((arguments[i__36364__auto___42712]));

var G__42713 = (i__36364__auto___42712 + (1));
i__36364__auto___42712 = G__42713;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((0) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((0)),(0),null)):null);
return ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic(argseq__36371__auto__);
});})(action__42518__auto___42710))
;

ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic = ((function (action__42518__auto___42710){
return (function (args__42517__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/search/:query",args__42517__auto__);
});})(action__42518__auto___42710))
;

ketornah_client.core.search_query.cljs$lang$maxFixedArity = (0);

ketornah_client.core.search_query.cljs$lang$applyTo = ((function (action__42518__auto___42710){
return (function (seq42709){
return ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42709));
});})(action__42518__auto___42710))
;

var action__42518__auto___42720 = (function (params__42519__auto__){
if(cljs.core.map_QMARK_.call(null,params__42519__auto__)){
var map__42714 = params__42519__auto__;
var map__42714__$1 = ((((!((map__42714 == null)))?((((map__42714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42714):map__42714);
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,params__42519__auto__)){
var vec__42716 = params__42519__auto__;
return null;
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__42518__auto___42720);

ketornah_client.core.default_route = ((function (action__42518__auto___42720){
return (function ketornah_client$core$default_route(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42721 = arguments.length;
var i__36364__auto___42722 = (0);
while(true){
if((i__36364__auto___42722 < len__36363__auto___42721)){
args__36370__auto__.push((arguments[i__36364__auto___42722]));

var G__42723 = (i__36364__auto___42722 + (1));
i__36364__auto___42722 = G__42723;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((0) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((0)),(0),null)):null);
return ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic(argseq__36371__auto__);
});})(action__42518__auto___42720))
;

ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__42518__auto___42720){
return (function (args__42517__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__42517__auto__);
});})(action__42518__auto___42720))
;

ketornah_client.core.default_route.cljs$lang$maxFixedArity = (0);

ketornah_client.core.default_route.cljs$lang$applyTo = ((function (action__42518__auto___42720){
return (function (seq42719){
return ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42719));
});})(action__42518__auto___42720))
;

var h_42726 = (new goog.History());
goog.events.listen(h_42726,goog.history.EventType.NAVIGATE,((function (h_42726){
return (function (p1__42724_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__42724_SHARP_.token);
});})(h_42726))
);

var G__42725_42727 = h_42726;
G__42725_42727.setEnabled(true);

ketornah_client.core.mixin_load_database = (function ketornah_client$core$mixin_load_database(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var db_channel = ketornah_client.sql.open_database.call(null,ketornah_client.sql.default_db_url);
var c__38797__auto___42760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38797__auto___42760,db_channel){
return (function (){
var f__38798__auto__ = (function (){var switch__38741__auto__ = ((function (c__38797__auto___42760,db_channel){
return (function (state_42751){
var state_val_42752 = (state_42751[(1)]);
if((state_val_42752 === (1))){
var state_42751__$1 = state_42751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42751__$1,(2),db_channel);
} else {
if((state_val_42752 === (2))){
var inst_42745 = (state_42751[(2)]);
var inst_42746 = [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"loading?","loading?",1905707049)];
var inst_42747 = [inst_42745,false];
var inst_42748 = cljs.core.PersistentHashMap.fromArrays(inst_42746,inst_42747);
var inst_42749 = cljs.core.swap_BANG_.call(null,ketornah_client.core.app_state,cljs.core.merge,inst_42748);
var state_42751__$1 = state_42751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42751__$1,inst_42749);
} else {
return null;
}
}
});})(c__38797__auto___42760,db_channel))
;
return ((function (switch__38741__auto__,c__38797__auto___42760,db_channel){
return (function() {
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__ = null;
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0 = (function (){
var statearr_42756 = [null,null,null,null,null,null,null];
(statearr_42756[(0)] = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__);

(statearr_42756[(1)] = (1));

return statearr_42756;
});
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1 = (function (state_42751){
while(true){
var ret_value__38743__auto__ = (function (){try{while(true){
var result__38744__auto__ = switch__38741__auto__.call(null,state_42751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38744__auto__;
}
break;
}
}catch (e42757){if((e42757 instanceof Object)){
var ex__38745__auto__ = e42757;
var statearr_42758_42761 = state_42751;
(statearr_42758_42761[(5)] = ex__38745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42762 = state_42751;
state_42751 = G__42762;
continue;
} else {
return ret_value__38743__auto__;
}
break;
}
});
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__ = function(state_42751){
switch(arguments.length){
case 0:
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0.call(this);
case 1:
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1.call(this,state_42751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0;
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1;
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__;
})()
;})(switch__38741__auto__,c__38797__auto___42760,db_channel))
})();
var state__38799__auto__ = (function (){var statearr_42759 = f__38798__auto__.call(null);
(statearr_42759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38797__auto___42760);

return statearr_42759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38799__auto__);
});})(c__38797__auto___42760,db_channel))
);


return state;
})], null);
});
ketornah_client.core.main_app = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42763 = rum.core.react.call(null,app_state);
var map__42763__$1 = ((((!((map__42763 == null)))?((((map__42763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42763):map__42763);
var loading_QMARK_ = cljs.core.get.call(null,map__42763__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var search_selected = cljs.core.get.call(null,map__42763__$1,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051));
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(loading_QMARK_)?ketornah_client.components.loading.c_loading.call(null,app_state):((cljs.core.not.call(null,search_selected))?ketornah_client.components.search.c_search.call(null,app_state):ketornah_client.components.result.c_result.call(null,app_state)
)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,ketornah_client.core.mixin_load_database.call(null)], null),"main-app");
rum.core.mount.call(null,ketornah_client.core.main_app.call(null,ketornah_client.core.app_state),document.getElementById("app"));
