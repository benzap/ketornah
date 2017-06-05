// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.utils');
goog.require('cljs.core');
ketornah_client.utils.remove_empty_values = (function ketornah_client$utils$remove_empty_values(xs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__37563){
var vec__37564 = p__37563;
var _ = cljs.core.nth.call(null,vec__37564,(0),null);
var v = cljs.core.nth.call(null,vec__37564,(1),null);
return !((v == null));
}),xs));
});
ketornah_client.utils.gen_query_params = (function ketornah_client$utils$gen_query_params(params){
var query_string = cljs.core.apply.call(null,cljs.core.str,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__37571){
var vec__37572 = p__37571;
var k = cljs.core.nth.call(null,vec__37572,(0),null);
var v = cljs.core.nth.call(null,vec__37572,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),ketornah_client.utils.remove_empty_values.call(null,params))));
if(!(cljs.core._EQ_.call(null,query_string,"?"))){
return query_string;
} else {
return "";
}
});
ketornah_client.utils.set_hash_BANG_ = (function ketornah_client$utils$set_hash_BANG_(v){

return (window["location"]["hash"] = v);
});
ketornah_client.utils.set_title_BANG_ = (function ketornah_client$utils$set_title_BANG_(s){
return (document["title"] = s);
});
ketornah_client.utils.wait_for_database = (function ketornah_client$utils$wait_for_database(app_state){
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
continue;
} else {
return null;
}
break;
}
});
ketornah_client.utils.remove_tooltips_from_body = (function ketornah_client$utils$remove_tooltips_from_body(){
var tooltip_elems = document.querySelectorAll(".search-result-tooltip");
return tooltip_elems.forEach(((function (tooltip_elems){
return (function (elem){
return elem.remove();
});})(tooltip_elems))
);
});
