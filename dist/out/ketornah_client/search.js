// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.search');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('clojure.string');
ketornah_client.search.init_food_cost = (function ketornah_client$search$init_food_cost(food){
return cljs.core.assoc.call(null,food,new cljs.core.Keyword(null,"cost","cost",-1094861735),1.0);
});
ketornah_client.search.search_terms = (function ketornah_client$search$search_terms(search_text){
var cleaned_text = cuerdas.core.strip.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,search_text,/'/,""),/\s+|[^a-zA-Z]+/," "));
return cljs.core.set.call(null,cljs.core.conj.call(null,cuerdas.core.split.call(null,cleaned_text),cleaned_text));
});
ketornah_client.search._STAR__cost = (function ketornah_client$search$_STAR__cost(food,ratio){
return cljs.core.update_in.call(null,food,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cost","cost",-1094861735)], null),cljs.core._STAR_,ratio);
});
ketornah_client.search.modifier_starts_with = (function ketornah_client$search$modifier_starts_with(p__37820,search_term){
var map__37823 = p__37820;
var map__37823__$1 = ((((!((map__37823 == null)))?((((map__37823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37823):map__37823);
var food = map__37823__$1;
var name = cljs.core.get.call(null,map__37823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,cuerdas.core.lower.call(null,name),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.lower.call(null,search_term)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(",")].join('')))){
return ketornah_client.search._STAR__cost.call(null,food,1.5);
} else {
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,cuerdas.core.lower.call(null,name),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.lower.call(null,search_term))].join('')))){
return ketornah_client.search._STAR__cost.call(null,food,1.3);
} else {
return ketornah_client.search._STAR__cost.call(null,food,1.0);

}
}
});
ketornah_client.search.modifier_index_of = (function ketornah_client$search$modifier_index_of(p__37825,search_term){
var map__37828 = p__37825;
var map__37828__$1 = ((((!((map__37828 == null)))?((((map__37828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37828):map__37828);
var food = map__37828__$1;
var name = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temp__4655__auto__ = clojure.string.index_of.call(null,name,search_term,(1));
if(cljs.core.truth_(temp__4655__auto__)){
var idx = temp__4655__auto__;
return ketornah_client.search._STAR__cost.call(null,food,(1.0 + (0.2 * ((cljs.core.count.call(null,name) - idx) / cljs.core.count.call(null,name)))));
} else {
return ketornah_client.search._STAR__cost.call(null,food,1.0);
}
});
ketornah_client.search.apply_modifiers = (function ketornah_client$search$apply_modifiers(food,search_term){
return ketornah_client.search.modifier_index_of.call(null,ketornah_client.search.modifier_starts_with.call(null,food,search_term),search_term);
});
ketornah_client.search.search_text_cost = (function ketornah_client$search$search_text_cost(food,search_text){
var search_terms = ketornah_client.search.search_terms.call(null,search_text);
var new_cost = cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.map.call(null,((function (search_terms){
return (function (p1__37830_SHARP_){
return ketornah_client.search.apply_modifiers.call(null,food,p1__37830_SHARP_);
});})(search_terms))
,search_terms,search_terms)));
return cljs.core.assoc.call(null,food,new cljs.core.Keyword(null,"cost","cost",-1094861735),new_cost);
});
ketornah_client.search.sort_search_items = (function ketornah_client$search$sort_search_items(search_items){
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735),search_items));
});
ketornah_client.search.process_costs = (function ketornah_client$search$process_costs(search_items,search_text){
return ketornah_client.search.sort_search_items.call(null,cljs.core.map.call(null,(function (p1__37831_SHARP_){
return ketornah_client.search.search_text_cost.call(null,p1__37831_SHARP_,search_text);
}),cljs.core.map.call(null,ketornah_client.search.init_food_cost,search_items)));
});
