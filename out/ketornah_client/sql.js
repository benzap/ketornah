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
var c__43390__auto___46693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___46693,data_channel,db_channel){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___46693,data_channel,db_channel){
return (function (state_46666){
var state_val_46667 = (state_46666[(1)]);
if((state_val_46667 === (7))){
var state_46666__$1 = state_46666;
var statearr_46668_46694 = state_46666__$1;
(statearr_46668_46694[(2)] = false);

(statearr_46668_46694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (1))){
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46666__$1,(2),data_channel);
} else {
if((state_val_46667 === (4))){
var state_46666__$1 = state_46666;
var statearr_46669_46695 = state_46666__$1;
(statearr_46669_46695[(2)] = false);

(statearr_46669_46695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (13))){
var inst_46653 = (state_46666[(7)]);
var inst_46661 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46653);
var inst_46662 = console.error("Error: ",inst_46661);
var state_46666__$1 = state_46666;
var statearr_46670_46696 = state_46666__$1;
(statearr_46670_46696[(2)] = inst_46662);

(statearr_46670_46696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (6))){
var state_46666__$1 = state_46666;
var statearr_46671_46697 = state_46666__$1;
(statearr_46671_46697[(2)] = true);

(statearr_46671_46697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (3))){
var inst_46632 = (state_46666[(8)]);
var inst_46637 = inst_46632.cljs$lang$protocol_mask$partition0$;
var inst_46638 = (inst_46637 & (64));
var inst_46639 = inst_46632.cljs$core$ISeq$;
var inst_46640 = (cljs.core.PROTOCOL_SENTINEL === inst_46639);
var inst_46641 = (inst_46638) || (inst_46640);
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46641)){
var statearr_46672_46698 = state_46666__$1;
(statearr_46672_46698[(1)] = (6));

} else {
var statearr_46673_46699 = state_46666__$1;
(statearr_46673_46699[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (12))){
var inst_46653 = (state_46666[(7)]);
var inst_46657 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_46653);
var inst_46658 = ketornah_client.sql.create_database.call(null,inst_46657);
var inst_46659 = cljs.core.async.put_BANG_.call(null,db_channel,inst_46658);
var state_46666__$1 = state_46666;
var statearr_46674_46700 = state_46666__$1;
(statearr_46674_46700[(2)] = inst_46659);

(statearr_46674_46700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (2))){
var inst_46632 = (state_46666[(8)]);
var inst_46632__$1 = (state_46666[(2)]);
var inst_46634 = (inst_46632__$1 == null);
var inst_46635 = cljs.core.not.call(null,inst_46634);
var state_46666__$1 = (function (){var statearr_46675 = state_46666;
(statearr_46675[(8)] = inst_46632__$1);

return statearr_46675;
})();
if(inst_46635){
var statearr_46676_46701 = state_46666__$1;
(statearr_46676_46701[(1)] = (3));

} else {
var statearr_46677_46702 = state_46666__$1;
(statearr_46677_46702[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (11))){
var inst_46653 = (state_46666[(7)]);
var inst_46653__$1 = (state_46666[(2)]);
var inst_46654 = cljs.core.get.call(null,inst_46653__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_46655 = cljs.core._EQ_.call(null,inst_46654,new cljs.core.Keyword(null,"ok","ok",967785236));
var state_46666__$1 = (function (){var statearr_46678 = state_46666;
(statearr_46678[(7)] = inst_46653__$1);

return statearr_46678;
})();
if(inst_46655){
var statearr_46679_46703 = state_46666__$1;
(statearr_46679_46703[(1)] = (12));

} else {
var statearr_46680_46704 = state_46666__$1;
(statearr_46680_46704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (9))){
var inst_46632 = (state_46666[(8)]);
var inst_46650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46632);
var state_46666__$1 = state_46666;
var statearr_46681_46705 = state_46666__$1;
(statearr_46681_46705[(2)] = inst_46650);

(statearr_46681_46705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (5))){
var inst_46648 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46648)){
var statearr_46682_46706 = state_46666__$1;
(statearr_46682_46706[(1)] = (9));

} else {
var statearr_46683_46707 = state_46666__$1;
(statearr_46683_46707[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (14))){
var inst_46664 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46666__$1,inst_46664);
} else {
if((state_val_46667 === (10))){
var inst_46632 = (state_46666[(8)]);
var state_46666__$1 = state_46666;
var statearr_46684_46708 = state_46666__$1;
(statearr_46684_46708[(2)] = inst_46632);

(statearr_46684_46708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (8))){
var inst_46645 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46685_46709 = state_46666__$1;
(statearr_46685_46709[(2)] = inst_46645);

(statearr_46685_46709[(1)] = (5));


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
});})(c__43390__auto___46693,data_channel,db_channel))
;
return ((function (switch__43278__auto__,c__43390__auto___46693,data_channel,db_channel){
return (function() {
var ketornah_client$sql$open_database_$_state_machine__43279__auto__ = null;
var ketornah_client$sql$open_database_$_state_machine__43279__auto____0 = (function (){
var statearr_46689 = [null,null,null,null,null,null,null,null,null];
(statearr_46689[(0)] = ketornah_client$sql$open_database_$_state_machine__43279__auto__);

(statearr_46689[(1)] = (1));

return statearr_46689;
});
var ketornah_client$sql$open_database_$_state_machine__43279__auto____1 = (function (state_46666){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_46666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e46690){if((e46690 instanceof Object)){
var ex__43282__auto__ = e46690;
var statearr_46691_46710 = state_46666;
(statearr_46691_46710[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46711 = state_46666;
state_46666 = G__46711;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
ketornah_client$sql$open_database_$_state_machine__43279__auto__ = function(state_46666){
switch(arguments.length){
case 0:
return ketornah_client$sql$open_database_$_state_machine__43279__auto____0.call(this);
case 1:
return ketornah_client$sql$open_database_$_state_machine__43279__auto____1.call(this,state_46666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ketornah_client$sql$open_database_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = ketornah_client$sql$open_database_$_state_machine__43279__auto____0;
ketornah_client$sql$open_database_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = ketornah_client$sql$open_database_$_state_machine__43279__auto____1;
return ketornah_client$sql$open_database_$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___46693,data_channel,db_channel))
})();
var state__43392__auto__ = (function (){var statearr_46692 = f__43391__auto__.call(null);
(statearr_46692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___46693);

return statearr_46692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___46693,data_channel,db_channel))
);


return db_channel;
});
ketornah_client.sql.result_vector__GT_result_map = (function ketornah_client$sql$result_vector__GT_result_map(columns,value){
var columns__$1 = cljs.core.map.call(null,cuerdas.core.keyword,columns);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (columns__$1){
return (function (p1__46712_SHARP_,p2__46713_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46712_SHARP_,p2__46713_SHARP_], null));
});})(columns__$1))
,columns__$1,value)));
});
ketornah_client.sql.execute_query = (function ketornah_client$sql$execute_query(p__46715,query){
var map__46720 = p__46715;
var map__46720__$1 = ((((!((map__46720 == null)))?((((map__46720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46720):map__46720);
var db = map__46720__$1;
var context = cljs.core.get.call(null,map__46720__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var result = context.exec(query);
var data = cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__46722 = data;
var map__46722__$1 = ((((!((map__46722 == null)))?((((map__46722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46722):map__46722);
var columns = cljs.core.get.call(null,map__46722__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var values = cljs.core.get.call(null,map__46722__$1,new cljs.core.Keyword(null,"values","values",372645556));
return cljs.core.mapv.call(null,((function (result,data,map__46722,map__46722__$1,columns,values,map__46720,map__46720__$1,db,context){
return (function (p1__46714_SHARP_){
return ketornah_client.sql.result_vector__GT_result_map.call(null,columns,p1__46714_SHARP_);
});})(result,data,map__46722,map__46722__$1,columns,values,map__46720,map__46720__$1,db,context))
,values);
});
ketornah_client.sql.food_query = "SELECT * FROM food_summary WHERE name LIKE '%s'";
ketornah_client.sql.food_query_perf = "SELECT long_description AS name FROM food_description WHERE name LIKE '%s'";
ketornah_client.sql.search_food = (function ketornah_client$sql$search_food(db,search){
console.log("Loading search",search);

var search__$1 = cuerdas.core.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(search),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join(''),/\s+|[^a-zA-Z]+/,"%");
var query = cuerdas.core.format.call(null,ketornah_client.sql.food_query,search__$1);
console.log(query);

return ketornah_client.sql.execute_query.call(null,db,query);
});
