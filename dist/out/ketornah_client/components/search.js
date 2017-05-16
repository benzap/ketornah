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
ketornah_client.components.search.mixin_render_result_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp_42480 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42481 = ReactDOM.findDOMNode(comp_42480);
var bar_element_42482 = dom_node_42481.querySelector(".search-result-bar");
var data_unparsed_42483 = bar_element_42482.getAttribute("data-nutr-values");
var vec__42477_42484 = cuerdas.core.split.call(null,data_unparsed_42483,",");
var carbs_42485 = cljs.core.nth.call(null,vec__42477_42484,(0),null);
var protein_42486 = cljs.core.nth.call(null,vec__42477_42484,(1),null);
var fat_42487 = cljs.core.nth.call(null,vec__42477_42484,(2),null);
var carbs_42488__$1 = window.parseFloat(carbs_42485);
var protein_42489__$1 = window.parseFloat(protein_42486);
var fat_42490__$1 = window.parseFloat(fat_42487);
var svg_element_42491 = d3.select(bar_element_42482).append("svg");
var carb_tooltip_42492 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-carbs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42488__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join(''));
var protein_tooltip_42493 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-protein",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42489__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join(''));
var fat_tooltip_42494 = ketornah_client.components.search.append_tooltip_BANG_.call(null,"search-result-tooltip-fat",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42490__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join(''));
svg_element_42491.style("background-color",ketornah_client.components.search.bar_excess_color).style("border-radius","5px").style("border","2px solid #1d1d1d").attr("width","100%").attr("height",ketornah_client.components.search.bar_height);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42491.append("rect").attr("x",(0)).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42488__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_carbs_color),carb_tooltip_42492);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42491.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs_42488__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein_42489__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_protein_color),protein_tooltip_42493);

ketornah_client.components.search.attach_tooltip_BANG_.call(null,svg_element_42491.append("rect").attr("x",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((carbs_42488__$1 + protein_42489__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("y",(0)).attr("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat_42490__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')).attr("height",ketornah_client.components.search.bar_height).attr("fill",ketornah_client.components.search.bar_fat_color),fat_tooltip_42494);

return state;
})], null);
ketornah_client.components.search.c_search_result = rum.core.build_defcs.call(null,(function (state,p__42495){
var map__42496 = p__42495;
var map__42496__$1 = ((((!((map__42496 == null)))?((((map__42496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42496):map__42496);
var food = map__42496__$1;
var name = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var carbs = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var category = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var map__42498 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__42498__$1 = ((((!((map__42498 == null)))?((((map__42498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42498):map__42498);
var carbs__$1 = cljs.core.get.call(null,map__42498__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var protein__$1 = cljs.core.get.call(null,map__42498__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__42498__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result",cuerdas.core.kebab.call(null,ketornah_client.food.process_keto_index.call(null,food))], null))}),(function (){var attrs42500 = name;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42500))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-title"], null)], null),attrs42500)):({"className": "search-result-title"})),((cljs.core.map_QMARK_.call(null,attrs42500))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42500)], null)));
})(),(function (){var attrs42501 = category;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42501))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-category"], null)], null),attrs42501)):({"className": "search-result-category"})),((cljs.core.map_QMARK_.call(null,attrs42501))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42501)], null)));
})(),React.createElement("div",({"className": "search-result-values"}),(function (){var attrs42502 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(carbs__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Carbs")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42502))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-carbs"], null)], null),attrs42502)):({"className": "search-result-carbs"})),((cljs.core.map_QMARK_.call(null,attrs42502))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42502)], null)));
})(),(function (){var attrs42503 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protein__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Protein")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42503))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-protein"], null)], null),attrs42503)):({"className": "search-result-protein"})),((cljs.core.map_QMARK_.call(null,attrs42503))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42503)], null)));
})(),(function (){var attrs42504 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fat__$1.toFixed((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("% Fat")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42504))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-result-fat"], null)], null),attrs42504)):({"className": "search-result-fat"})),((cljs.core.map_QMARK_.call(null,attrs42504))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42504)], null)));
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
var map__42505 = rum.core.react.call(null,app_state);
var map__42505__$1 = ((((!((map__42505 == null)))?((((map__42505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42505):map__42505);
var search_text = cljs.core.get.call(null,map__42505__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259));
var search_items = cljs.core.get.call(null,map__42505__$1,new cljs.core.Keyword(null,"search-items","search-items",731653300));
var querying_QMARK_ = cljs.core.get.call(null,map__42505__$1,new cljs.core.Keyword(null,"querying?","querying?",1078116512));
return React.createElement("div",({"className": "search-container"}),React.createElement("div",({"className": "search-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Search Food \u21B5", "value": search_text, "disabled": querying_QMARK_, "onChange": ((function (map__42505,map__42505__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var text = e.target.value;
var text__$1 = ((cljs.core.not.call(null,cuerdas.core.ends_with_QMARK_.call(null,text," ")))?cuerdas.core.title.call(null,text):text);
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text__$1);
});})(map__42505,map__42505__$1,search_text,search_items,querying_QMARK_))
, "onKeyDown": ((function (map__42505,map__42505__$1,search_text,search_items,querying_QMARK_){
return (function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"Enter")){
return ketornah_client.utils.set_hash_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/search/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURIComponent(search_text))].join(''));
} else {
return null;
}
});})(map__42505,map__42505__$1,search_text,search_items,querying_QMARK_))
}))),(function (){var attrs42507 = (cljs.core.truth_(querying_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-querying",".search-querying",-1337715254),"Querying..."], null):((!(cljs.core.empty_QMARK_.call(null,search_items)))?(function (){var iter__36038__auto__ = ((function (map__42505,map__42505__$1,search_text,search_items,querying_QMARK_){
return (function ketornah_client$components$search$iter__42508(s__42509){
return (new cljs.core.LazySeq(null,((function (map__42505,map__42505__$1,search_text,search_items,querying_QMARK_){
return (function (){
var s__42509__$1 = s__42509;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42509__$1);
if(temp__4657__auto__){
var s__42509__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42509__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__42509__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__42511 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__42510 = (0);
while(true){
if((i__42510 < size__36037__auto__)){
var item = cljs.core._nth.call(null,c__36036__auto__,i__42510);
cljs.core.chunk_append.call(null,b__42511,ketornah_client.components.search.c_search_result.call(null,item));

var G__42512 = (i__42510 + (1));
i__42510 = G__42512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42511),ketornah_client$components$search$iter__42508.call(null,cljs.core.chunk_rest.call(null,s__42509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42511),null);
}
} else {
var item = cljs.core.first.call(null,s__42509__$2);
return cljs.core.cons.call(null,ketornah_client.components.search.c_search_result.call(null,item),ketornah_client$components$search$iter__42508.call(null,cljs.core.rest.call(null,s__42509__$2)));
}
} else {
return null;
}
break;
}
});})(map__42505,map__42505__$1,search_text,search_items,querying_QMARK_))
,null,null));
});})(map__42505,map__42505__$1,search_text,search_items,querying_QMARK_))
;
return iter__36038__auto__.call(null,search_items);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search-no-results",".search-no-results",181752958),"No Search Results"], null)
));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42507))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results"], null)], null),attrs42507)):({"className": "search-results"})),((cljs.core.map_QMARK_.call(null,attrs42507))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42507)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ketornah_client.components.search.mixin_fix_focus,rum.core.reactive], null),"c-search");
