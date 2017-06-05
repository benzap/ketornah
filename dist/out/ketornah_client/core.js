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
var action__42524__auto___42699 = (function (params__42525__auto__){
if(cljs.core.map_QMARK_.call(null,params__42525__auto__)){
var map__42693 = params__42525__auto__;
var map__42693__$1 = ((((!((map__42693 == null)))?((((map__42693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42693):map__42693);
var query = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_params = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return ketornah_client.search.update_food_search.call(null,ketornah_client.core.app_state,window.decodeURIComponent(query));
} else {
if(cljs.core.vector_QMARK_.call(null,params__42525__auto__)){
var vec__42695 = params__42525__auto__;
var query = cljs.core.nth.call(null,vec__42695,(0),null);
var query_params = cljs.core.nth.call(null,vec__42695,(1),null);
return ketornah_client.search.update_food_search.call(null,ketornah_client.core.app_state,window.decodeURIComponent(query));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/search/:query",action__42524__auto___42699);

ketornah_client.core.search_query = ((function (action__42524__auto___42699){
return (function ketornah_client$core$search_query(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42700 = arguments.length;
var i__36364__auto___42701 = (0);
while(true){
if((i__36364__auto___42701 < len__36363__auto___42700)){
args__36370__auto__.push((arguments[i__36364__auto___42701]));

var G__42702 = (i__36364__auto___42701 + (1));
i__36364__auto___42701 = G__42702;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((0) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((0)),(0),null)):null);
return ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic(argseq__36371__auto__);
});})(action__42524__auto___42699))
;

ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic = ((function (action__42524__auto___42699){
return (function (args__42523__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/search/:query",args__42523__auto__);
});})(action__42524__auto___42699))
;

ketornah_client.core.search_query.cljs$lang$maxFixedArity = (0);

ketornah_client.core.search_query.cljs$lang$applyTo = ((function (action__42524__auto___42699){
return (function (seq42698){
return ketornah_client.core.search_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42698));
});})(action__42524__auto___42699))
;

var action__42524__auto___42709 = (function (params__42525__auto__){
if(cljs.core.map_QMARK_.call(null,params__42525__auto__)){
var map__42703 = params__42525__auto__;
var map__42703__$1 = ((((!((map__42703 == null)))?((((map__42703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42703):map__42703);
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,params__42525__auto__)){
var vec__42705 = params__42525__auto__;
return null;
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__42524__auto___42709);

ketornah_client.core.default_route = ((function (action__42524__auto___42709){
return (function ketornah_client$core$default_route(var_args){
var args__36370__auto__ = [];
var len__36363__auto___42710 = arguments.length;
var i__36364__auto___42711 = (0);
while(true){
if((i__36364__auto___42711 < len__36363__auto___42710)){
args__36370__auto__.push((arguments[i__36364__auto___42711]));

var G__42712 = (i__36364__auto___42711 + (1));
i__36364__auto___42711 = G__42712;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((0) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((0)),(0),null)):null);
return ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic(argseq__36371__auto__);
});})(action__42524__auto___42709))
;

ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__42524__auto___42709){
return (function (args__42523__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__42523__auto__);
});})(action__42524__auto___42709))
;

ketornah_client.core.default_route.cljs$lang$maxFixedArity = (0);

ketornah_client.core.default_route.cljs$lang$applyTo = ((function (action__42524__auto___42709){
return (function (seq42708){
return ketornah_client.core.default_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42708));
});})(action__42524__auto___42709))
;

var h_42715 = (new goog.History());
goog.events.listen(h_42715,goog.history.EventType.NAVIGATE,((function (h_42715){
return (function (p1__42713_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__42713_SHARP_.token);
});})(h_42715))
);

var G__42714_42716 = h_42715;
G__42714_42716.setEnabled(true);

ketornah_client.core.mixin_load_database = (function ketornah_client$core$mixin_load_database(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var db_channel = ketornah_client.sql.open_database.call(null,ketornah_client.sql.default_db_url);
var c__38797__auto___42749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38797__auto___42749,db_channel){
return (function (){
var f__38798__auto__ = (function (){var switch__38741__auto__ = ((function (c__38797__auto___42749,db_channel){
return (function (state_42740){
var state_val_42741 = (state_42740[(1)]);
if((state_val_42741 === (1))){
var state_42740__$1 = state_42740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42740__$1,(2),db_channel);
} else {
if((state_val_42741 === (2))){
var inst_42734 = (state_42740[(2)]);
var inst_42735 = [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"loading?","loading?",1905707049)];
var inst_42736 = [inst_42734,false];
var inst_42737 = cljs.core.PersistentHashMap.fromArrays(inst_42735,inst_42736);
var inst_42738 = cljs.core.swap_BANG_.call(null,ketornah_client.core.app_state,cljs.core.merge,inst_42737);
var state_42740__$1 = state_42740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42740__$1,inst_42738);
} else {
return null;
}
}
});})(c__38797__auto___42749,db_channel))
;
return ((function (switch__38741__auto__,c__38797__auto___42749,db_channel){
return (function() {
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__ = null;
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0 = (function (){
var statearr_42745 = [null,null,null,null,null,null,null];
(statearr_42745[(0)] = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__);

(statearr_42745[(1)] = (1));

return statearr_42745;
});
var ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1 = (function (state_42740){
while(true){
var ret_value__38743__auto__ = (function (){try{while(true){
var result__38744__auto__ = switch__38741__auto__.call(null,state_42740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38744__auto__;
}
break;
}
}catch (e42746){if((e42746 instanceof Object)){
var ex__38745__auto__ = e42746;
var statearr_42747_42750 = state_42740;
(statearr_42747_42750[(5)] = ex__38745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42751 = state_42740;
state_42740 = G__42751;
continue;
} else {
return ret_value__38743__auto__;
}
break;
}
});
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__ = function(state_42740){
switch(arguments.length){
case 0:
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0.call(this);
case 1:
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1.call(this,state_42740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____0;
ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$core$mixin_load_database_$_state_machine__38742__auto____1;
return ketornah_client$core$mixin_load_database_$_state_machine__38742__auto__;
})()
;})(switch__38741__auto__,c__38797__auto___42749,db_channel))
})();
var state__38799__auto__ = (function (){var statearr_42748 = f__38798__auto__.call(null);
(statearr_42748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38797__auto___42749);

return statearr_42748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38799__auto__);
});})(c__38797__auto___42749,db_channel))
);


return state;
})], null);
});
ketornah_client.core.main_app = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42752 = rum.core.react.call(null,app_state);
var map__42752__$1 = ((((!((map__42752 == null)))?((((map__42752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42752):map__42752);
var loading_QMARK_ = cljs.core.get.call(null,map__42752__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var search_selected = cljs.core.get.call(null,map__42752__$1,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051));
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(loading_QMARK_)?ketornah_client.components.loading.c_loading.call(null,app_state):((cljs.core.not.call(null,search_selected))?ketornah_client.components.search.c_search.call(null,app_state):ketornah_client.components.result.c_result.call(null,app_state)
)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,ketornah_client.core.mixin_load_database.call(null)], null),"main-app");
rum.core.mount.call(null,ketornah_client.core.main_app.call(null,ketornah_client.core.app_state),document.getElementById("app"));
var temp__4657__auto___42754 = document.querySelector("#ketornah-main-logo-scroll");
if(cljs.core.truth_(temp__4657__auto___42754)){
var main_logo_42755 = temp__4657__auto___42754;
main_logo_42755.addEventListener("click",((function (main_logo_42755,temp__4657__auto___42754){
return (function (e){
var elem = document.querySelector("body");
var input = document.querySelector(".search-input>input");
(elem["scrollTop"] = (0));

cljs.core.swap_BANG_.call(null,ketornah_client.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051),null);

ketornah_client.utils.remove_tooltips_from_body.call(null);

return input.focus();
});})(main_logo_42755,temp__4657__auto___42754))
);
} else {
}
