// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.sql');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('cljs.core.async');
goog.require('cuerdas.core');
ketornah_client.sql.default_db_url = "db/foodsr28.sqlite";
ketornah_client.sql.get_database = (function ketornah_client$sql$get_database(url){
var req = (new XMLHttpRequest());
var data_channel = cljs.core.async.chan.call(null);
req.open("GET",url,true);

(req["responseType"] = "arraybuffer");

(req["onload"] = ((function (req,data_channel){
return (function (e){
var response = req.response;
return cljs.core.async.put_BANG_.call(null,data_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"data","data",-232669377),(new Uint8Array(response))], null));
});})(req,data_channel))
);

(req["onerror"] = ((function (req,data_channel){
return (function (e){
console.error("Failed Response:",e);

return cljs.core.async.put_BANG_.call(null,data_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),e], null));
});})(req,data_channel))
);

req.send();

return data_channel;
});
ketornah_client.sql.create_database = (function ketornah_client$sql$create_database(data){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),(new SQL.Database(data))], null);
});
ketornah_client.sql.open_database = (function ketornah_client$sql$open_database(url){
var data_channel = ketornah_client.sql.get_database.call(null,url);
var db_channel = cljs.core.async.chan.call(null);
var c__38518__auto___41230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38518__auto___41230,data_channel,db_channel){
return (function (){
var f__38519__auto__ = (function (){var switch__38462__auto__ = ((function (c__38518__auto___41230,data_channel,db_channel){
return (function (state_41203){
var state_val_41204 = (state_41203[(1)]);
if((state_val_41204 === (7))){
var state_41203__$1 = state_41203;
var statearr_41205_41231 = state_41203__$1;
(statearr_41205_41231[(2)] = false);

(statearr_41205_41231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (1))){
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41203__$1,(2),data_channel);
} else {
if((state_val_41204 === (4))){
var state_41203__$1 = state_41203;
var statearr_41206_41232 = state_41203__$1;
(statearr_41206_41232[(2)] = false);

(statearr_41206_41232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (13))){
var inst_41190 = (state_41203[(7)]);
var inst_41198 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41190);
var inst_41199 = console.error("Error: ",inst_41198);
var state_41203__$1 = state_41203;
var statearr_41207_41233 = state_41203__$1;
(statearr_41207_41233[(2)] = inst_41199);

(statearr_41207_41233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (6))){
var state_41203__$1 = state_41203;
var statearr_41208_41234 = state_41203__$1;
(statearr_41208_41234[(2)] = true);

(statearr_41208_41234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (3))){
var inst_41169 = (state_41203[(8)]);
var inst_41174 = inst_41169.cljs$lang$protocol_mask$partition0$;
var inst_41175 = (inst_41174 & (64));
var inst_41176 = inst_41169.cljs$core$ISeq$;
var inst_41177 = (cljs.core.PROTOCOL_SENTINEL === inst_41176);
var inst_41178 = (inst_41175) || (inst_41177);
var state_41203__$1 = state_41203;
if(cljs.core.truth_(inst_41178)){
var statearr_41209_41235 = state_41203__$1;
(statearr_41209_41235[(1)] = (6));

} else {
var statearr_41210_41236 = state_41203__$1;
(statearr_41210_41236[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (12))){
var inst_41190 = (state_41203[(7)]);
var inst_41194 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_41190);
var inst_41195 = ketornah_client.sql.create_database.call(null,inst_41194);
var inst_41196 = cljs.core.async.put_BANG_.call(null,db_channel,inst_41195);
var state_41203__$1 = state_41203;
var statearr_41211_41237 = state_41203__$1;
(statearr_41211_41237[(2)] = inst_41196);

(statearr_41211_41237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (2))){
var inst_41169 = (state_41203[(8)]);
var inst_41169__$1 = (state_41203[(2)]);
var inst_41171 = (inst_41169__$1 == null);
var inst_41172 = cljs.core.not.call(null,inst_41171);
var state_41203__$1 = (function (){var statearr_41212 = state_41203;
(statearr_41212[(8)] = inst_41169__$1);

return statearr_41212;
})();
if(inst_41172){
var statearr_41213_41238 = state_41203__$1;
(statearr_41213_41238[(1)] = (3));

} else {
var statearr_41214_41239 = state_41203__$1;
(statearr_41214_41239[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (11))){
var inst_41190 = (state_41203[(7)]);
var inst_41190__$1 = (state_41203[(2)]);
var inst_41191 = cljs.core.get.call(null,inst_41190__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_41192 = cljs.core._EQ_.call(null,inst_41191,new cljs.core.Keyword(null,"ok","ok",967785236));
var state_41203__$1 = (function (){var statearr_41215 = state_41203;
(statearr_41215[(7)] = inst_41190__$1);

return statearr_41215;
})();
if(inst_41192){
var statearr_41216_41240 = state_41203__$1;
(statearr_41216_41240[(1)] = (12));

} else {
var statearr_41217_41241 = state_41203__$1;
(statearr_41217_41241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (9))){
var inst_41169 = (state_41203[(8)]);
var inst_41187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41169);
var state_41203__$1 = state_41203;
var statearr_41218_41242 = state_41203__$1;
(statearr_41218_41242[(2)] = inst_41187);

(statearr_41218_41242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (5))){
var inst_41185 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
if(cljs.core.truth_(inst_41185)){
var statearr_41219_41243 = state_41203__$1;
(statearr_41219_41243[(1)] = (9));

} else {
var statearr_41220_41244 = state_41203__$1;
(statearr_41220_41244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (14))){
var inst_41201 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41203__$1,inst_41201);
} else {
if((state_val_41204 === (10))){
var inst_41169 = (state_41203[(8)]);
var state_41203__$1 = state_41203;
var statearr_41221_41245 = state_41203__$1;
(statearr_41221_41245[(2)] = inst_41169);

(statearr_41221_41245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (8))){
var inst_41182 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41222_41246 = state_41203__$1;
(statearr_41222_41246[(2)] = inst_41182);

(statearr_41222_41246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__38518__auto___41230,data_channel,db_channel))
;
return ((function (switch__38462__auto__,c__38518__auto___41230,data_channel,db_channel){
return (function() {
var ketornah_client$sql$open_database_$_state_machine__38463__auto__ = null;
var ketornah_client$sql$open_database_$_state_machine__38463__auto____0 = (function (){
var statearr_41226 = [null,null,null,null,null,null,null,null,null];
(statearr_41226[(0)] = ketornah_client$sql$open_database_$_state_machine__38463__auto__);

(statearr_41226[(1)] = (1));

return statearr_41226;
});
var ketornah_client$sql$open_database_$_state_machine__38463__auto____1 = (function (state_41203){
while(true){
var ret_value__38464__auto__ = (function (){try{while(true){
var result__38465__auto__ = switch__38462__auto__.call(null,state_41203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38465__auto__;
}
break;
}
}catch (e41227){if((e41227 instanceof Object)){
var ex__38466__auto__ = e41227;
var statearr_41228_41247 = state_41203;
(statearr_41228_41247[(5)] = ex__38466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41248 = state_41203;
state_41203 = G__41248;
continue;
} else {
return ret_value__38464__auto__;
}
break;
}
});
ketornah_client$sql$open_database_$_state_machine__38463__auto__ = function(state_41203){
switch(arguments.length){
case 0:
return ketornah_client$sql$open_database_$_state_machine__38463__auto____0.call(this);
case 1:
return ketornah_client$sql$open_database_$_state_machine__38463__auto____1.call(this,state_41203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$sql$open_database_$_state_machine__38463__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$sql$open_database_$_state_machine__38463__auto____0;
ketornah_client$sql$open_database_$_state_machine__38463__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$sql$open_database_$_state_machine__38463__auto____1;
return ketornah_client$sql$open_database_$_state_machine__38463__auto__;
})()
;})(switch__38462__auto__,c__38518__auto___41230,data_channel,db_channel))
})();
var state__38520__auto__ = (function (){var statearr_41229 = f__38519__auto__.call(null);
(statearr_41229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38518__auto___41230);

return statearr_41229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38520__auto__);
});})(c__38518__auto___41230,data_channel,db_channel))
);


return db_channel;
});
ketornah_client.sql.result_vector__GT_result_map = (function ketornah_client$sql$result_vector__GT_result_map(columns,value){
var columns__$1 = cljs.core.map.call(null,cuerdas.core.keyword,columns);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (columns__$1){
return (function (p1__41249_SHARP_,p2__41250_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41249_SHARP_,p2__41250_SHARP_], null));
});})(columns__$1))
,columns__$1,value)));
});
ketornah_client.sql.execute_query = (function ketornah_client$sql$execute_query(p__41252,query){
var map__41257 = p__41252;
var map__41257__$1 = ((((!((map__41257 == null)))?((((map__41257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41257):map__41257);
var db = map__41257__$1;
var context = cljs.core.get.call(null,map__41257__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var result = context.exec(query);
var data = cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__41259 = data;
var map__41259__$1 = ((((!((map__41259 == null)))?((((map__41259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41259):map__41259);
var columns = cljs.core.get.call(null,map__41259__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var values = cljs.core.get.call(null,map__41259__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.mapv.call(null,((function (result,data,map__41259,map__41259__$1,columns,values,map__41257,map__41257__$1,db,context){
return (function (p1__41251_SHARP_){
return ketornah_client.sql.result_vector__GT_result_map.call(null,columns,p1__41251_SHARP_);
});})(result,data,map__41259,map__41259__$1,columns,values,map__41257,map__41257__$1,db,context))
,values);
});
ketornah_client.sql.food_query = "SELECT * FROM food_summary WHERE name LIKE '%s' ORDER BY name";
ketornah_client.sql.search_food = (function ketornah_client$sql$search_food(db,search){
var search__$1 = cuerdas.core.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(search),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join(''),/\s+|[^a-zA-Z]+/,"%");
var query = cuerdas.core.format.call(null,ketornah_client.sql.food_query,search__$1);
return ketornah_client.sql.execute_query.call(null,db,query);
});
