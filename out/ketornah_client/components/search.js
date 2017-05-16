// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.components.search');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('cuerdas.core');
goog.require('ketornah_client.sql');
goog.require('ketornah_client.food');
goog.require('ketornah_client.search');
ketornah_client.components.search.bar_height = (20);
ketornah_client.components.search.bar_excess_color = "#64b5f6";
ketornah_client.components.search.bar_carbs_color = "#ff8a65";
ketornah_client.components.search.bar_protein_color = "#dce775";
ketornah_client.components.search.bar_fat_color = "#fff176";
ketornah_client.components.search.mixin_render_result_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_42460 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42461 = ReactDOM.findDOMNode(comp_42460);
var bar_element_42462 = dom_node_42461.querySelector(".search-result-bar");
var data_unparsed_42463 = bar_element_42462.getAttribute("data-nutr-values");
var vec__42457_42464 = cuerdas.core.split.call(null,data_unparsed_42463,",");
var carbs_42465 = cljs.core.nth.call(null,vec__42457_42464,(0),null);
var protein_42466 = cljs.core.nth.call(null,vec__42457_42464,(1),null);
var fat_42467 = cljs.core.nth.call(null,vec__42457_42464,(2),null);
var svg_element_42468 = d3.select(bar_element_42462).append("svg");
svg_element_42468.style("background-color",ketornah_client.components.search.bar_excess_color).style("border-radius","5px").style("border","3px solid #1d1d1d").attr("width","100%").attr("height",ketornah_client.components.search.bar_height);

svg_element_42468.append("rect").attr("x",(0)).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42465),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_carbs_color);

svg_element_42468.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42465),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42466),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_protein_color);

svg_element_42468.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((window.parseFloat(carbs_42465) + window.parseFloat(protein_42466))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42467),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_fat_color);

return state;
})], null);
ketornah_client.components.search.update_food_search = (function ketornah_client$components$search$update_food_search(app_state,text){
var map__42471 = cljs.core.deref.call(null,app_state);
var map__42471__$1 = ((((!((map__42471 == null)))?((((map__42471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42471):map__42471);
var database = cljs.core.get.call(null,map__42471__$1,new cljs.core.Keyword(null,"database","database",1849087575));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"querying?","querying?",1078116512),true,new cljs.core.Keyword(null,"search-items","search-items",731653300),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text], null));

return window.setTimeout(((function (map__42471,map__42471__$1,database){
return (function (){
console.time("Search Query");

cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-items","search-items",731653300),ketornah_client.search.process_costs.call(null,ketornah_client.sql.search_food.call(null,database,text),text),new cljs.core.Keyword(null,"querying?","querying?",1078116512),false], null));

return console.timeEnd("Search Query");
});})(map__42471,map__42471__$1,database))
,(500));
});
ketornah_client.components.search.c_search_result = rum.core.build_defcs.call(null,(function (state,p__42473){
var map__42474 = p__42473;
var map__42474__$1 = ((((!((map__42474 == null)))?((((map__42474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42474):map__42474);
var food = map__42474__$1;
var name = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var carbs = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var category = cljs.core.get.call(null,map__42474__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var map__42476 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__42476__$1 = ((((!((map__42476 == null)))?((((map__42476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42476):map__42476);
var carbs__$1 = cljs.core.get.call(null,map__42476__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein__$1 = cljs.core.get.call(null,map__42476__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__42476__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result",cuerdas.core.kebab.call(null,ketornah_client.food.process_keto_index.call(null,food))], null))}),(function (){var attrs42478 = name;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42478))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-title"], null)], null),attrs42478)):({"className": "search-result-title"})),((cljs.core.map_QMARK_.call(null,attrs42478))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42478)], null)));
})(),(function (){var attrs42479 = category;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42479))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-category"], null)], null),attrs42479)):({"className": "search-result-category"})),((cljs.core.map_QMARK_.call(null,attrs42479))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42479)], null)));
})(),React.createElement("div",({"className": "search-result-values"}),(function (){var attrs42480 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42480))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-carbs"], null)], null),attrs42480)):({"className": "search-result-carbs"})),((cljs.core.map_QMARK_.call(null,attrs42480))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42480)], null)));
})(),(function (){var attrs42481 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42481))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-protein"], null)], null),attrs42481)):({"className": "search-result-protein"})),((cljs.core.map_QMARK_.call(null,attrs42481))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42481)], null)));
})(),(function (){var attrs42482 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42482))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-fat"], null)], null),attrs42482)):({"className": "search-result-fat"})),((cljs.core.map_QMARK_.call(null,attrs42482))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42482)], null)));
})(),React.createElement("div",({"data-nutr-values": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1)].join(''), "className": "search-result-bar"}))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (food){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(food))].join('');
})], null),ketornah_client.components.search.mixin_render_result_bar], null),"c-search-result");
ketornah_client.components.search.mixin_fix_focus = (function (){var focus_input = (function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
var input_element = dom_node.querySelector(".search-input>input");
input_element.focus();

return state;
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),focus_input,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),focus_input], null);
})();
ketornah_client.components.search.c_search = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42483 = rum.core.react.call(null,app_state);
var map__42483__$1 = ((((!((map__42483 == null)))?((((map__42483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42483):map__42483);
var search_items = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"search-items","search-items",731653300));
var querying_QMARK_ = cljs.core.get.call(null,map__42483__$1,new cljs.core.Keyword(null,"querying?","querying?",1078116512));
var a_search_text = new cljs.core.Keyword("ketornah-client.components.search","search-text","ketornah-client.components.search/search-text",-1712949107).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",({"className": "search-container"}),React.createElement("div",({"className": "search-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Search Food", "value": cljs.core.deref.call(null,a_search_text), "disabled": querying_QMARK_, "onChange": ((function (map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text){
return (function (e){
var text = e.target.value;
var text__$1 = ((cljs.core.not.call(null,cuerdas.core.ends_with_QMARK_.call(null,text," ")))?cuerdas.core.title.call(null,text):text);
return cljs.core.reset_BANG_.call(null,a_search_text,text__$1);
});})(map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text))
, "onKeyDown": ((function (map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text){
return (function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"Enter")){
return ketornah_client.components.search.update_food_search.call(null,app_state,cljs.core.deref.call(null,a_search_text));
} else {
return null;
}
});})(map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text))
}))),(function (){var attrs42485 = (cljs.core.truth_(querying_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-querying",".search-querying",-1337715254),"Querying..."], null):((!(cljs.core.empty_QMARK_.call(null,search_items)))?(function (){var iter__36038__auto__ = ((function (map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text){
return (function ketornah_client$components$search$iter__42486(s__42487){
return (new cljs.core.LazySeq(null,((function (map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text){
return (function (){
var s__42487__$1 = s__42487;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42487__$1);
if(temp__4657__auto__){
var s__42487__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42487__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__42487__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__42489 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__42488 = (0);
while(true){
if((i__42488 < size__36037__auto__)){
var item = cljs.core._nth.call(null,c__36036__auto__,i__42488);
cljs.core.chunk_append.call(null,b__42489,ketornah_client.components.search.c_search_result.call(null,item));

var G__42490 = (i__42488 + (1));
i__42488 = G__42490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42489),ketornah_client$components$search$iter__42486.call(null,cljs.core.chunk_rest.call(null,s__42487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42489),null);
}
} else {
var item = cljs.core.first.call(null,s__42487__$2);
return cljs.core.cons.call(null,ketornah_client.components.search.c_search_result.call(null,item),ketornah_client$components$search$iter__42486.call(null,cljs.core.rest.call(null,s__42487__$2)));
}
} else {
return null;
}
break;
}
});})(map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text))
,null,null));
});})(map__42483,map__42483__$1,search_items,querying_QMARK_,a_search_text))
;
return iter__36038__auto__.call(null,search_items);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-no-results",".search-no-results",181752958),"No Search Results"], null)
));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42485))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results"], null)], null),attrs42485)):({"className": "search-results"})),((cljs.core.map_QMARK_.call(null,attrs42485))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42485)], null)));
})());
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,"",new cljs.core.Keyword("ketornah-client.components.search","search-text","ketornah-client.components.search/search-text",-1712949107)),ketornah_client.components.search.mixin_fix_focus,rum.core.reactive], null),"c-search");
