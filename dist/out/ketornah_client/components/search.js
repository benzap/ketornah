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
goog.require('ketornah_client.utils');
ketornah_client.components.search.bar_height = (20);
ketornah_client.components.search.bar_excess_color = "#64b5f6";
ketornah_client.components.search.bar_carbs_color = "#ff8a65";
ketornah_client.components.search.bar_protein_color = "#dce775";
ketornah_client.components.search.bar_fat_color = "#fff176";
ketornah_client.components.search.mixin_render_result_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_42480 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42481 = ReactDOM.findDOMNode(comp_42480);
var bar_element_42482 = dom_node_42481.querySelector(".search-result-bar");
var data_unparsed_42483 = bar_element_42482.getAttribute("data-nutr-values");
var vec__42477_42484 = cuerdas.core.split.call(null,data_unparsed_42483,",");
var carbs_42485 = cljs.core.nth.call(null,vec__42477_42484,(0),null);
var protein_42486 = cljs.core.nth.call(null,vec__42477_42484,(1),null);
var fat_42487 = cljs.core.nth.call(null,vec__42477_42484,(2),null);
var svg_element_42488 = d3.select(bar_element_42482).append("svg");
svg_element_42488.style("background-color",ketornah_client.components.search.bar_excess_color).style("border-radius","5px").style("border","3px solid #1d1d1d").attr("width","100%").attr("height",ketornah_client.components.search.bar_height);

svg_element_42488.append("rect").attr("x",(0)).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42485),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_carbs_color);

svg_element_42488.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42485),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42486),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_protein_color);

svg_element_42488.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((window.parseFloat(carbs_42485) + window.parseFloat(protein_42486))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42487),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_fat_color);

return state;
})], null);
ketornah_client.components.search.c_search_result = rum.core.build_defcs.call(null,(function (state,p__42489){
var map__42490 = p__42489;
var map__42490__$1 = ((((!((map__42490 == null)))?((((map__42490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42490):map__42490);
var food = map__42490__$1;
var name = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var carbs = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var category = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var map__42492 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__42492__$1 = ((((!((map__42492 == null)))?((((map__42492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42492):map__42492);
var carbs__$1 = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein__$1 = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result",cuerdas.core.kebab.call(null,ketornah_client.food.process_keto_index.call(null,food))], null))}),(function (){var attrs42494 = name;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42494))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-title"], null)], null),attrs42494)):({"className": "search-result-title"})),((cljs.core.map_QMARK_.call(null,attrs42494))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42494)], null)));
})(),(function (){var attrs42495 = category;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42495))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-category"], null)], null),attrs42495)):({"className": "search-result-category"})),((cljs.core.map_QMARK_.call(null,attrs42495))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42495)], null)));
})(),React.createElement("div",({"className": "search-result-values"}),(function (){var attrs42496 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42496))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-carbs"], null)], null),attrs42496)):({"className": "search-result-carbs"})),((cljs.core.map_QMARK_.call(null,attrs42496))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42496)], null)));
})(),(function (){var attrs42497 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42497))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-protein"], null)], null),attrs42497)):({"className": "search-result-protein"})),((cljs.core.map_QMARK_.call(null,attrs42497))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42497)], null)));
})(),(function (){var attrs42498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42498))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-fat"], null)], null),attrs42498)):({"className": "search-result-fat"})),((cljs.core.map_QMARK_.call(null,attrs42498))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42498)], null)));
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
var map__42499 = rum.core.react.call(null,app_state);
var map__42499__$1 = ((((!((map__42499 == null)))?((((map__42499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42499):map__42499);
var search_text = cljs.core.get.call(null,map__42499__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259));
var search_items = cljs.core.get.call(null,map__42499__$1,new cljs.core.Keyword(null,"search-items","search-items",731653300));
var querying_QMARK_ = cljs.core.get.call(null,map__42499__$1,new cljs.core.Keyword(null,"querying?","querying?",1078116512));
return React.createElement("div",({"className": "search-container"}),React.createElement("div",({"className": "search-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Search Food", "value": search_text, "disabled": querying_QMARK_, "onChange": ((function (map__42499,map__42499__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var text = e.target.value;
var text__$1 = ((cljs.core.not.call(null,cuerdas.core.ends_with_QMARK_.call(null,text," ")))?cuerdas.core.title.call(null,text):text);
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text__$1);
});})(map__42499,map__42499__$1,search_text,search_items,querying_QMARK_))
, "onKeyDown": ((function (map__42499,map__42499__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"Enter")){
return ketornah_client.utils.set_hash_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/search/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(search_text))].join(''));
} else {
return null;
}
});})(map__42499,map__42499__$1,search_text,search_items,querying_QMARK_))
}))),(function (){var attrs42501 = (cljs.core.truth_(querying_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-querying",".search-querying",-1337715254),"Querying..."], null):((!(cljs.core.empty_QMARK_.call(null,search_items)))?(function (){var iter__36038__auto__ = ((function (map__42499,map__42499__$1,search_text,search_items,querying_QMARK_){
return (function ketornah_client$components$search$iter__42502(s__42503){
return (new cljs.core.LazySeq(null,((function (map__42499,map__42499__$1,search_text,search_items,querying_QMARK_){
return (function (){
var s__42503__$1 = s__42503;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42503__$1);
if(temp__4657__auto__){
var s__42503__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42503__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__42503__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__42505 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__42504 = (0);
while(true){
if((i__42504 < size__36037__auto__)){
var item = cljs.core._nth.call(null,c__36036__auto__,i__42504);
cljs.core.chunk_append.call(null,b__42505,ketornah_client.components.search.c_search_result.call(null,item));

var G__42506 = (i__42504 + (1));
i__42504 = G__42506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42505),ketornah_client$components$search$iter__42502.call(null,cljs.core.chunk_rest.call(null,s__42503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42505),null);
}
} else {
var item = cljs.core.first.call(null,s__42503__$2);
return cljs.core.cons.call(null,ketornah_client.components.search.c_search_result.call(null,item),ketornah_client$components$search$iter__42502.call(null,cljs.core.rest.call(null,s__42503__$2)));
}
} else {
return null;
}
break;
}
});})(map__42499,map__42499__$1,search_text,search_items,querying_QMARK_))
,null,null));
});})(map__42499,map__42499__$1,search_text,search_items,querying_QMARK_))
;
return iter__36038__auto__.call(null,search_items);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-no-results",".search-no-results",181752958),"No Search Results"], null)
));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42501))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results"], null)], null),attrs42501)):({"className": "search-results"})),((cljs.core.map_QMARK_.call(null,attrs42501))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42501)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ketornah_client.components.search.mixin_fix_focus,rum.core.reactive], null),"c-search");
