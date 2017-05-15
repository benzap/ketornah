// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.core');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('ketornah_client.sql');
goog.require('ketornah_client.components.search');
goog.require('ketornah_client.components.result');
goog.require('ketornah_client.components.loading');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ketornah_client.core.app_state !== 'undefined'){
} else {
ketornah_client.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"querying?","querying?",1078116512),false,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051),null,new cljs.core.Keyword(null,"worker-channel","worker-channel",1297094356),null], null));
}
ketornah_client.core.mixin_load_database = (function ketornah_client$core$mixin_load_database(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var db_channel = ketornah_client.sql.open_database.call(null,ketornah_client.sql.default_db_url);
var c__38518__auto___42526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38518__auto___42526,db_channel){
return (function (){
var f__38519__auto__ = (function (){var switch__38462__auto__ = ((function (c__38518__auto___42526,db_channel){
return (function (state_42517){
var state_val_42518 = (state_42517[(1)]);
if((state_val_42518 === (1))){
var state_42517__$1 = state_42517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42517__$1,(2),db_channel);
} else {
if((state_val_42518 === (2))){
var inst_42511 = (state_42517[(2)]);
var inst_42512 = [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"loading?","loading?",1905707049)];
var inst_42513 = [inst_42511,false];
var inst_42514 = cljs.core.PersistentHashMap.fromArrays(inst_42512,inst_42513);
var inst_42515 = cljs.core.swap_BANG_.call(null,ketornah_client.core.app_state,cljs.core.merge,inst_42514);
var state_42517__$1 = state_42517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42517__$1,inst_42515);
} else {
return null;
}
}
});})(c__38518__auto___42526,db_channel))
;
return ((function (switch__38462__auto__,c__38518__auto___42526,db_channel){
return (function() {
var ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__ = null;
var ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____0 = (function (){
var statearr_42522 = [null,null,null,null,null,null,null];
(statearr_42522[(0)] = ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__);

(statearr_42522[(1)] = (1));

return statearr_42522;
});
var ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____1 = (function (state_42517){
while(true){
var ret_value__38464__auto__ = (function (){try{while(true){
var result__38465__auto__ = switch__38462__auto__.call(null,state_42517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38465__auto__;
}
break;
}
}catch (e42523){if((e42523 instanceof Object)){
var ex__38466__auto__ = e42523;
var statearr_42524_42527 = state_42517;
(statearr_42524_42527[(5)] = ex__38466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42528 = state_42517;
state_42517 = G__42528;
continue;
} else {
return ret_value__38464__auto__;
}
break;
}
});
ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__ = function(state_42517){
switch(arguments.length){
case 0:
return ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____0.call(this);
case 1:
return ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____1.call(this,state_42517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____0;
ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$core$mixin_load_database_$_state_machine__38463__auto____1;
return ketornah_client$core$mixin_load_database_$_state_machine__38463__auto__;
})()
;})(switch__38462__auto__,c__38518__auto___42526,db_channel))
})();
var state__38520__auto__ = (function (){var statearr_42525 = f__38519__auto__.call(null);
(statearr_42525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38518__auto___42526);

return statearr_42525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38520__auto__);
});})(c__38518__auto___42526,db_channel))
);


return state;
})], null);
});
ketornah_client.core.main_app = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42529 = rum.core.react.call(null,app_state);
var map__42529__$1 = ((((!((map__42529 == null)))?((((map__42529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42529):map__42529);
var loading_QMARK_ = cljs.core.get.call(null,map__42529__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var search_selected = cljs.core.get.call(null,map__42529__$1,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051));
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(loading_QMARK_)?ketornah_client.components.loading.c_loading.call(null,app_state):((cljs.core.not.call(null,search_selected))?ketornah_client.components.search.c_search.call(null,app_state):ketornah_client.components.result.c_result.call(null,app_state)
)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,ketornah_client.core.mixin_load_database.call(null)], null),"main-app");
rum.core.mount.call(null,ketornah_client.core.main_app.call(null,ketornah_client.core.app_state),document.getElementById("app"));
