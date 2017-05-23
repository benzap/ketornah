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
ketornah_client.components.search.append_tooltip_BANG_ = (function ketornah_client$components$search$append_tooltip_BANG_(classname,text){
return d3.select("body").append("div").attr("class",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("search-result-tooltip "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('')).style("position","absolute").style("z-index",(10)).style("visibility","hidden").text(text);
});
ketornah_client.components.search.attach_tooltip_BANG_ = (function ketornah_client$components$search$attach_tooltip_BANG_(root,tooltip){
root.on("mouseover",(function (){
return tooltip.style("visibility","visible");
})).on("mousemove",(function (){
var page_x = (d3["event"]["pageX"]);
var page_y = (d3["event"]["pageY"]);
var left = (page_x + (10));
var top = (page_y - (10));
return tooltip.style("top",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('')).style("left",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''));
})).on("mouseout",(function (){
return tooltip.style("visibility","hidden");
}));

return root;
});
ketornah_client.components.search.remove_tooltips_from_body = (function ketornah_client$components$search$remove_tooltips_from_body(){
var tooltip_elems = document.querySelectorAll(".search-result-tooltip");
return tooltip_elems.forEach(((function (tooltip_elems){
return (function (elem){
return elem.remove();
});})(tooltip_elems))
);
});
ketornah_client.components.search.mixin_render_result_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_42476 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42477 = ReactDOM.findDOMNode(comp_42476);
var bar_element_42478 = dom_node_42477.querySelector(".search-result-bar");
var data_unparsed_42479 = bar_element_42478.getAttribute("data-nutr-values");
var vec__42473_42480 = cuerdas.core.split.call(null,data_unparsed_42479,",");
var carbs_42481 = cljs.core.nth.call(null,vec__42473_42480,(0),null);
var protein_42482 = cljs.core.nth.call(null,vec__42473_42480,(1),null);
var fat_42483 = cljs.core.nth.call(null,vec__42473_42480,(2),null);
var carbs_42484__$1 = window.parseFloat(carbs_42481);
var protein_42485__$1 = window.parseFloat(protein_42482);
var fat_42486__$1 = window.parseFloat(fat_42483);
var svg_element_42487 = d3.select(bar_element_42478).append("svg");
var carb_tooltip_42488 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-carbs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42484__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join(''));
var protein_tooltip_42489 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-protein",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42485__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join(''));
var fat_tooltip_42490 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-fat",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42486__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join(''));
svg_element_42487.style("background-color",ketornah_client.components.search.bar_excess_color).style("border-radius","5px").style("border","2px solid #1d1d1d").attr("width","100%").attr("height",ketornah_client.components.search.bar_height);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42487.append("rect").attr("x",(0)).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42484__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_carbs_color),carb_tooltip_42488);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42487.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42484__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42485__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_protein_color),protein_tooltip_42489);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42487.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((carbs_42484__$1 + protein_42485__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42486__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_fat_color),fat_tooltip_42490);

return state;
})], null);
ketornah_client.components.search.c_search_result = rum.core.build_defcs.call(null,(function (state,p__42491){
var map__42492 = p__42491;
var map__42492__$1 = ((((!((map__42492 == null)))?((((map__42492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42492):map__42492);
var food = map__42492__$1;
var name = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var carbs = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var category = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var map__42494 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__42494__$1 = ((((!((map__42494 == null)))?((((map__42494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42494):map__42494);
var carbs__$1 = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein__$1 = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result","animated","fadeInUp",cuerdas.core.kebab.call(null,ketornah_client.food.process_keto_index.call(null,food))], null))}),(function (){var attrs42496 = name;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42496))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-title"], null)], null),attrs42496)):({"className": "search-result-title"})),((cljs.core.map_QMARK_.call(null,attrs42496))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42496)], null)));
})(),(function (){var attrs42497 = category;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42497))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-category"], null)], null),attrs42497)):({"className": "search-result-category"})),((cljs.core.map_QMARK_.call(null,attrs42497))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42497)], null)));
})(),React.createElement("div",({"className": "search-result-values"}),(function (){var attrs42498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42498))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-carbs"], null)], null),attrs42498)):({"className": "search-result-carbs"})),((cljs.core.map_QMARK_.call(null,attrs42498))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42498)], null)));
})(),(function (){var attrs42499 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42499))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-protein"], null)], null),attrs42499)):({"className": "search-result-protein"})),((cljs.core.map_QMARK_.call(null,attrs42499))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42499)], null)));
})(),(function (){var attrs42500 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42500))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-fat"], null)], null),attrs42500)):({"className": "search-result-fat"})),((cljs.core.map_QMARK_.call(null,attrs42500))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42500)], null)));
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
var map__42501 = rum.core.react.call(null,app_state);
var map__42501__$1 = ((((!((map__42501 == null)))?((((map__42501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42501):map__42501);
var search_text = cljs.core.get.call(null,map__42501__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259));
var search_items = cljs.core.get.call(null,map__42501__$1,new cljs.core.Keyword(null,"search-items","search-items",731653300));
var querying_QMARK_ = cljs.core.get.call(null,map__42501__$1,new cljs.core.Keyword(null,"querying?","querying?",1078116512));
return React.createElement("div",({"className": "search-container"}),React.createElement("div",({"className": "search-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Search Food \u21B5", "value": search_text, "disabled": querying_QMARK_, "onChange": ((function (map__42501,map__42501__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var text = e.target.value;
var text__$1 = ((cljs.core.not.call(null,cuerdas.core.ends_with_QMARK_.call(null,text," ")))?cuerdas.core.title.call(null,text):text);
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text__$1);
});})(map__42501,map__42501__$1,search_text,search_items,querying_QMARK_))
, "onKeyDown": ((function (map__42501,map__42501__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var key = e.key;
var target = e.target;
if(cljs.core._EQ_.call(null,key,"Enter")){
ketornah_client.utils.set_hash_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/search/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(search_text))].join(''));

target.setSelectionRange((0),target.value.length);

return ketornah_client.components.search.remove_tooltips_from_body.call(null);
} else {
return null;
}
});})(map__42501,map__42501__$1,search_text,search_items,querying_QMARK_))
, "onClick": ((function (map__42501,map__42501__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var target = e.target;
return target.setSelectionRange((0),target.value.length);
});})(map__42501,map__42501__$1,search_text,search_items,querying_QMARK_))
}))),(function (){var attrs42503 = (cljs.core.truth_(querying_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-querying.animated.pulse",".search-querying.animated.pulse",417438425),"Querying..."], null):((!(cljs.core.empty_QMARK_.call(null,search_items)))?(function (){var iter__36038__auto__ = ((function (map__42501,map__42501__$1,search_text,search_items,querying_QMARK_){
return (function ketornah_client$components$search$iter__42504(s__42505){
return (new cljs.core.LazySeq(null,((function (map__42501,map__42501__$1,search_text,search_items,querying_QMARK_){
return (function (){
var s__42505__$1 = s__42505;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42505__$1);
if(temp__4657__auto__){
var s__42505__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42505__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__42505__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__42507 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__42506 = (0);
while(true){
if((i__42506 < size__36037__auto__)){
var item = cljs.core._nth.call(null,c__36036__auto__,i__42506);
cljs.core.chunk_append.call(null,b__42507,ketornah_client.components.search.c_search_result.call(null,item));

var G__42508 = (i__42506 + (1));
i__42506 = G__42508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42507),ketornah_client$components$search$iter__42504.call(null,cljs.core.chunk_rest.call(null,s__42505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42507),null);
}
} else {
var item = cljs.core.first.call(null,s__42505__$2);
return cljs.core.cons.call(null,ketornah_client.components.search.c_search_result.call(null,item),ketornah_client$components$search$iter__42504.call(null,cljs.core.rest.call(null,s__42505__$2)));
}
} else {
return null;
}
break;
}
});})(map__42501,map__42501__$1,search_text,search_items,querying_QMARK_))
,null,null));
});})(map__42501,map__42501__$1,search_text,search_items,querying_QMARK_))
;
return iter__36038__auto__.call(null,search_items);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-no-results",".search-no-results",181752958),"No Search Results"], null)
));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42503))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results"], null)], null),attrs42503)):({"className": "search-results"})),((cljs.core.map_QMARK_.call(null,attrs42503))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42503)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ketornah_client.components.search.mixin_fix_focus,rum.core.reactive], null),"c-search");
