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
ketornah_client.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"querying?","querying?",1078116512),false,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"Peanut Butter",new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051),null,new cljs.core.Keyword(null,"worker-channel","worker-channel",1297094356),null], null));
}
ketornah_client.core.mixin_load_database = (function ketornah_client$core$mixin_load_database(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var db_channel = ketornah_client.sql.open_database.call(null,ketornah_client.sql.default_db_url);
var c__39794__auto___42506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39794__auto___42506,db_channel){
return (function (){
var f__39795__auto__ = (function (){var switch__39738__auto__ = ((function (c__39794__auto___42506,db_channel){
return (function (state_42497){
var state_val_42498 = (state_42497[(1)]);
if((state_val_42498 === (1))){
var state_42497__$1 = state_42497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42497__$1,(2),db_channel);
} else {
if((state_val_42498 === (2))){
var inst_42491 = (state_42497[(2)]);
var inst_42492 = [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"loading?","loading?",1905707049)];
var inst_42493 = [inst_42491,false];
var inst_42494 = cljs.core.PersistentHashMap.fromArrays(inst_42492,inst_42493);
var inst_42495 = cljs.core.swap_BANG_.call(null,ketornah_client.core.app_state,cljs.core.merge,inst_42494);
var state_42497__$1 = state_42497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42497__$1,inst_42495);
} else {
return null;
}
}
});})(c__39794__auto___42506,db_channel))
;
return ((function (switch__39738__auto__,c__39794__auto___42506,db_channel){
return (function() {
var ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__ = null;
var ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____0 = (function (){
var statearr_42502 = [null,null,null,null,null,null,null];
(statearr_42502[(0)] = ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__);

(statearr_42502[(1)] = (1));

return statearr_42502;
});
var ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____1 = (function (state_42497){
while(true){
var ret_value__39740__auto__ = (function (){try{while(true){
var result__39741__auto__ = switch__39738__auto__.call(null,state_42497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39741__auto__;
}
break;
}
}catch (e42503){if((e42503 instanceof Object)){
var ex__39742__auto__ = e42503;
var statearr_42504_42507 = state_42497;
(statearr_42504_42507[(5)] = ex__39742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42508 = state_42497;
state_42497 = G__42508;
continue;
} else {
return ret_value__39740__auto__;
}
break;
}
});
ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__ = function(state_42497){
switch(arguments.length){
case 0:
return ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____0.call(this);
case 1:
return ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____1.call(this,state_42497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____0;
ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$core$mixin_load_database_$_state_machine__39739__auto____1;
return ketornah_client$core$mixin_load_database_$_state_machine__39739__auto__;
})()
;})(switch__39738__auto__,c__39794__auto___42506,db_channel))
})();
var state__39796__auto__ = (function (){var statearr_42505 = f__39795__auto__.call(null);
(statearr_42505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39794__auto___42506);

return statearr_42505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39796__auto__);
});})(c__39794__auto___42506,db_channel))
);


return state;
})], null);
});
ketornah_client.core.main_app = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42509 = rum.core.react.call(null,app_state);
var map__42509__$1 = ((((!((map__42509 == null)))?((((map__42509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42509):map__42509);
var loading_QMARK_ = cljs.core.get.call(null,map__42509__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var search_selected = cljs.core.get.call(null,map__42509__$1,new cljs.core.Keyword(null,"search-selected","search-selected",1767675051));
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(loading_QMARK_)?ketornah_client.components.loading.c_loading.call(null,app_state):((cljs.core.not.call(null,search_selected))?ketornah_client.components.search.c_search.call(null,app_state):ketornah_client.components.result.c_result.call(null,app_state)
)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,ketornah_client.core.mixin_load_database.call(null)], null),"main-app");
rum.core.mount.call(null,ketornah_client.core.main_app.call(null,ketornah_client.core.app_state),document.getElementById("app"));
