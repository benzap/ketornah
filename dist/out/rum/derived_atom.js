// Compiled by ClojureScript 1.9.495 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args40970 = [];
var len__36363__auto___40990 = arguments.length;
var i__36364__auto___40991 = (0);
while(true){
if((i__36364__auto___40991 < len__36363__auto___40990)){
args40970.push((arguments[i__36364__auto___40991]));

var G__40992 = (i__36364__auto___40991 + (1));
i__36364__auto___40991 = G__40992;
continue;
} else {
}
break;
}

var G__40972 = args40970.length;
switch (G__40972) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40970.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__40973 = opts;
var map__40973__$1 = ((((!((map__40973 == null)))?((((map__40973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40973):map__40973);
var ref = cljs.core.get.call(null,map__40973__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__40973__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__40975 = cljs.core.count.call(null,refs);
switch (G__40975) {
case (1):
var vec__40976 = refs;
var a = cljs.core.nth.call(null,vec__40976,(0),null);
return ((function (vec__40976,a,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__40976,a,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__40979 = refs;
var a = cljs.core.nth.call(null,vec__40979,(0),null);
var b = cljs.core.nth.call(null,vec__40979,(1),null);
return ((function (vec__40979,a,b,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__40979,a,b,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__40982 = refs;
var a = cljs.core.nth.call(null,vec__40982,(0),null);
var b = cljs.core.nth.call(null,vec__40982,(1),null);
var c = cljs.core.nth.call(null,vec__40982,(2),null);
return ((function (vec__40982,a,b,c,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__40982,a,b,c,G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__40975,map__40973,map__40973__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__40985 = ref;
cljs.core.reset_BANG_.call(null,G__40985,recalc.call(null));

return G__40985;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__40973,map__40973__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__40973,map__40973__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__40973,map__40973__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__40973,map__40973__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__40986_40995 = cljs.core.seq.call(null,refs);
var chunk__40987_40996 = null;
var count__40988_40997 = (0);
var i__40989_40998 = (0);
while(true){
if((i__40989_40998 < count__40988_40997)){
var ref_40999__$1 = cljs.core._nth.call(null,chunk__40987_40996,i__40989_40998);
cljs.core.add_watch.call(null,ref_40999__$1,key,watch);

var G__41000 = seq__40986_40995;
var G__41001 = chunk__40987_40996;
var G__41002 = count__40988_40997;
var G__41003 = (i__40989_40998 + (1));
seq__40986_40995 = G__41000;
chunk__40987_40996 = G__41001;
count__40988_40997 = G__41002;
i__40989_40998 = G__41003;
continue;
} else {
var temp__4657__auto___41004 = cljs.core.seq.call(null,seq__40986_40995);
if(temp__4657__auto___41004){
var seq__40986_41005__$1 = temp__4657__auto___41004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40986_41005__$1)){
var c__36069__auto___41006 = cljs.core.chunk_first.call(null,seq__40986_41005__$1);
var G__41007 = cljs.core.chunk_rest.call(null,seq__40986_41005__$1);
var G__41008 = c__36069__auto___41006;
var G__41009 = cljs.core.count.call(null,c__36069__auto___41006);
var G__41010 = (0);
seq__40986_40995 = G__41007;
chunk__40987_40996 = G__41008;
count__40988_40997 = G__41009;
i__40989_40998 = G__41010;
continue;
} else {
var ref_41011__$1 = cljs.core.first.call(null,seq__40986_41005__$1);
cljs.core.add_watch.call(null,ref_41011__$1,key,watch);

var G__41012 = cljs.core.next.call(null,seq__40986_41005__$1);
var G__41013 = null;
var G__41014 = (0);
var G__41015 = (0);
seq__40986_40995 = G__41012;
chunk__40987_40996 = G__41013;
count__40988_40997 = G__41014;
i__40989_40998 = G__41015;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

