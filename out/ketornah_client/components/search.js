// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.components.search');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('cuerdas.core');
goog.require('ketornah_client.sql');
goog.require('ketornah_client.food');
ketornah_client.components.search.update_food_search = (function ketornah_client$components$search$update_food_search(app_state){
var map__42449 = cljs.core.deref.call(null,app_state);
var map__42449__$1 = ((((!((map__42449 == null)))?((((map__42449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42449):map__42449);
var database = cljs.core.get.call(null,map__42449__$1,new cljs.core.Keyword(null,"database","database",1849087575));
var search_text = cljs.core.get.call(null,map__42449__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"querying?","querying?",1078116512),true,new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY], null));

return window.setTimeout(((function (map__42449,map__42449__$1,database,search_text){
return (function (){
console.time("Search Query");

cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-items","search-items",731653300),ketornah_client.sql.search_food.call(null,database,search_text),new cljs.core.Keyword(null,"querying?","querying?",1078116512),false], null));

return console.timeEnd("Search Query");
});})(map__42449,map__42449__$1,database,search_text))
,(500));
});
ketornah_client.components.search.c_search_result = rum.core.build_defcs.call(null,(function (state,p__42451){
var map__42452 = p__42451;
var map__42452__$1 = ((((!((map__42452 == null)))?((((map__42452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42452):map__42452);
var food = map__42452__$1;
var name = cljs.core.get.call(null,map__42452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var carbs = cljs.core.get.call(null,map__42452__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein = cljs.core.get.call(null,map__42452__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__42452__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__42452__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var map__42454 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__42454__$1 = ((((!((map__42454 == null)))?((((map__42454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42454):map__42454);
var carbs__$1 = cljs.core.get.call(null,map__42454__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein__$1 = cljs.core.get.call(null,map__42454__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__42454__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result",cuerdas.core.kebab.call(null,ketornah_client.food.process_keto_index.call(null,food))], null))}),(function (){var attrs42456 = name;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42456))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-title"], null)], null),attrs42456)):({"className": "search-result-title"})),((cljs.core.map_QMARK_.call(null,attrs42456))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42456)], null)));
})(),React.createElement("div",({"className": "search-result-values"}),(function (){var attrs42457 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42457))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-carbs"], null)], null),attrs42457)):({"className": "search-result-carbs"})),((cljs.core.map_QMARK_.call(null,attrs42457))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42457)], null)));
})(),(function (){var attrs42458 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42458))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-protein"], null)], null),attrs42458)):({"className": "search-result-protein"})),((cljs.core.map_QMARK_.call(null,attrs42458))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42458)], null)));
})(),(function (){var attrs42459 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42459))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-fat"], null)], null),attrs42459)):({"className": "search-result-fat"})),((cljs.core.map_QMARK_.call(null,attrs42459))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42459)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (food){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(food))].join('');
})], null)], null),"c-search-result");
ketornah_client.components.search.c_search = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42460 = rum.core.react.call(null,app_state);
var map__42460__$1 = ((((!((map__42460 == null)))?((((map__42460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42460):map__42460);
var search_text = cljs.core.get.call(null,map__42460__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259));
var search_items = cljs.core.get.call(null,map__42460__$1,new cljs.core.Keyword(null,"search-items","search-items",731653300));
var querying_QMARK_ = cljs.core.get.call(null,map__42460__$1,new cljs.core.Keyword(null,"querying?","querying?",1078116512));
return React.createElement("div",({"className": "search-container"}),React.createElement("div",({"className": "search-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Search Food", "value": search_text, "disabled": querying_QMARK_, "onChange": ((function (map__42460,map__42460__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var text = e.target.value;
var text__$1 = ((cljs.core.not.call(null,cuerdas.core.ends_with_QMARK_.call(null,text," ")))?cuerdas.core.title.call(null,text):text);
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text__$1);
});})(map__42460,map__42460__$1,search_text,search_items,querying_QMARK_))
, "onKeyDown": ((function (map__42460,map__42460__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"Enter")){
return ketornah_client.components.search.update_food_search.call(null,app_state);
} else {
return null;
}
});})(map__42460,map__42460__$1,search_text,search_items,querying_QMARK_))
}))),(function (){var attrs42462 = (cljs.core.truth_(querying_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-querying",".search-querying",-1337715254),"Querying..."], null):((!(cljs.core.empty_QMARK_.call(null,search_items)))?(function (){var iter__36038__auto__ = ((function (map__42460,map__42460__$1,search_text,search_items,querying_QMARK_){
return (function ketornah_client$components$search$iter__42463(s__42464){
return (new cljs.core.LazySeq(null,((function (map__42460,map__42460__$1,search_text,search_items,querying_QMARK_){
return (function (){
var s__42464__$1 = s__42464;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42464__$1);
if(temp__4657__auto__){
var s__42464__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42464__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__42464__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__42466 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__42465 = (0);
while(true){
if((i__42465 < size__36037__auto__)){
var item = cljs.core._nth.call(null,c__36036__auto__,i__42465);
cljs.core.chunk_append.call(null,b__42466,ketornah_client.components.search.c_search_result.call(null,item));

var G__42467 = (i__42465 + (1));
i__42465 = G__42467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42466),ketornah_client$components$search$iter__42463.call(null,cljs.core.chunk_rest.call(null,s__42464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42466),null);
}
} else {
var item = cljs.core.first.call(null,s__42464__$2);
return cljs.core.cons.call(null,ketornah_client.components.search.c_search_result.call(null,item),ketornah_client$components$search$iter__42463.call(null,cljs.core.rest.call(null,s__42464__$2)));
}
} else {
return null;
}
break;
}
});})(map__42460,map__42460__$1,search_text,search_items,querying_QMARK_))
,null,null));
});})(map__42460,map__42460__$1,search_text,search_items,querying_QMARK_))
;
return iter__36038__auto__.call(null,search_items);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-no-results",".search-no-results",181752958),"No Search Results"], null)
));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42462))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results"], null)], null),attrs42462)):({"className": "search-results"})),((cljs.core.map_QMARK_.call(null,attrs42462))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42462)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-search");
