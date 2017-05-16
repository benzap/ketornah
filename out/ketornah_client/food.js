// Compiled by ClojureScript 1.9.495 {}
goog.provide('ketornah_client.food');
goog.require('cljs.core');
ketornah_client.food.process_percent_ratios = (function ketornah_client$food$process_percent_ratios(p__37834){
var map__37837 = p__37834;
var map__37837__$1 = ((((!((map__37837 == null)))?((((map__37837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37837):map__37837);
var food = map__37837__$1;
var protein = cljs.core.get.call(null,map__37837__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__37837__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__37837__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var carbs = cljs.core.get.call(null,map__37837__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var ncarbs = (carbs - fibre);
var total = ((protein + fat) + ncarbs);
var p_protein = (protein / total);
var p_fat = (fat / total);
var p_net_carbs = (ncarbs / total);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"protein-relative","protein-relative",-1435458836),Math.fround(((100) * p_protein)),new cljs.core.Keyword(null,"fat-relative","fat-relative",-1899244974),Math.fround(((100) * p_fat)),new cljs.core.Keyword(null,"carbs-relative","carbs-relative",-1084176450),Math.fround(((100) * p_net_carbs)),new cljs.core.Keyword(null,"protein","protein",184296952),Math.fround(protein),new cljs.core.Keyword(null,"fat","fat",-756798484),Math.fround(fat),new cljs.core.Keyword(null,"carbs","carbs",-1219608131),Math.fround(ncarbs)], null);
});
ketornah_client.food.process_keto_index = (function ketornah_client$food$process_keto_index(p__37839){
var map__37844 = p__37839;
var map__37844__$1 = ((((!((map__37844 == null)))?((((map__37844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37844):map__37844);
var food = map__37844__$1;
var protein = cljs.core.get.call(null,map__37844__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat = cljs.core.get.call(null,map__37844__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var fibre = cljs.core.get.call(null,map__37844__$1,new cljs.core.Keyword(null,"fibre","fibre",-1600136270));
var carbs = cljs.core.get.call(null,map__37844__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
var map__37846 = ketornah_client.food.process_percent_ratios.call(null,food);
var map__37846__$1 = ((((!((map__37846 == null)))?((((map__37846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37846):map__37846);
var protein_relative = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"protein-relative","protein-relative",-1435458836));
var fat_relative = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"fat-relative","fat-relative",-1899244974));
var carbs_relative = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"carbs-relative","carbs-relative",-1084176450));
var protein__$1 = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"protein","protein",184296952));
var fat__$1 = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"fat","fat",-756798484));
var carbs__$1 = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"carbs","carbs",-1219608131));
if((carbs__$1 <= (3))){
return new cljs.core.Keyword(null,"keto-index-fatbomb","keto-index-fatbomb",-1545597409);
} else {
if((carbs__$1 <= (7))){
return new cljs.core.Keyword(null,"keto-index-keto","keto-index-keto",1708948448);
} else {
if((carbs__$1 <= (15))){
return new cljs.core.Keyword(null,"keto-index-mild","keto-index-mild",-1888605686);
} else {
if((carbs__$1 <= (20))){
return new cljs.core.Keyword(null,"keto-index-danger","keto-index-danger",-924855759);
} else {
return new cljs.core.Keyword(null,"keto-index-not-keto","keto-index-not-keto",-1626731529);

}
}
}
}
});
