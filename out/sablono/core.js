// Compiled by ClojureScript 1.9.495 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41569__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41566 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41567 = cljs.core.seq.call(null,vec__41566);
var first__41568 = cljs.core.first.call(null,seq__41567);
var seq__41567__$1 = cljs.core.next.call(null,seq__41567);
var tag = first__41568;
var body = seq__41567__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41570__i = 0, G__41570__a = new Array(arguments.length -  0);
while (G__41570__i < G__41570__a.length) {G__41570__a[G__41570__i] = arguments[G__41570__i + 0]; ++G__41570__i;}
  args = new cljs.core.IndexedSeq(G__41570__a,0);
} 
return G__41569__delegate.call(this,args);};
G__41569.cljs$lang$maxFixedArity = 0;
G__41569.cljs$lang$applyTo = (function (arglist__41571){
var args = cljs.core.seq(arglist__41571);
return G__41569__delegate(args);
});
G__41569.cljs$core$IFn$_invoke$arity$variadic = G__41569__delegate;
return G__41569;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36038__auto__ = (function sablono$core$update_arglists_$_iter__41576(s__41577){
return (new cljs.core.LazySeq(null,(function (){
var s__41577__$1 = s__41577;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41577__$1);
if(temp__4657__auto__){
var s__41577__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41577__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__41577__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__41579 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__41578 = (0);
while(true){
if((i__41578 < size__36037__auto__)){
var args = cljs.core._nth.call(null,c__36036__auto__,i__41578);
cljs.core.chunk_append.call(null,b__41579,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41580 = (i__41578 + (1));
i__41578 = G__41580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41579),sablono$core$update_arglists_$_iter__41576.call(null,cljs.core.chunk_rest.call(null,s__41577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41579),null);
}
} else {
var args = cljs.core.first.call(null,s__41577__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41576.call(null,cljs.core.rest.call(null,s__41577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36038__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36370__auto__ = [];
var len__36363__auto___41586 = arguments.length;
var i__36364__auto___41587 = (0);
while(true){
if((i__36364__auto___41587 < len__36363__auto___41586)){
args__36370__auto__.push((arguments[i__36364__auto___41587]));

var G__41588 = (i__36364__auto___41587 + (1));
i__36364__auto___41587 = G__41588;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((0) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36371__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36038__auto__ = (function sablono$core$iter__41582(s__41583){
return (new cljs.core.LazySeq(null,(function (){
var s__41583__$1 = s__41583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41583__$1);
if(temp__4657__auto__){
var s__41583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41583__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__41583__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__41585 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__41584 = (0);
while(true){
if((i__41584 < size__36037__auto__)){
var style = cljs.core._nth.call(null,c__36036__auto__,i__41584);
cljs.core.chunk_append.call(null,b__41585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41589 = (i__41584 + (1));
i__41584 = G__41589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41585),sablono$core$iter__41582.call(null,cljs.core.chunk_rest.call(null,s__41583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41585),null);
}
} else {
var style = cljs.core.first.call(null,s__41583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41582.call(null,cljs.core.rest.call(null,s__41583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36038__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41581){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41581));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to41590 = (function sablono$core$link_to41590(var_args){
var args__36370__auto__ = [];
var len__36363__auto___41593 = arguments.length;
var i__36364__auto___41594 = (0);
while(true){
if((i__36364__auto___41594 < len__36363__auto___41593)){
args__36370__auto__.push((arguments[i__36364__auto___41594]));

var G__41595 = (i__36364__auto___41594 + (1));
i__36364__auto___41594 = G__41595;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((1) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41590.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36371__auto__);
});

sablono.core.link_to41590.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41590.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41590.cljs$lang$applyTo = (function (seq41591){
var G__41592 = cljs.core.first.call(null,seq41591);
var seq41591__$1 = cljs.core.next.call(null,seq41591);
return sablono.core.link_to41590.cljs$core$IFn$_invoke$arity$variadic(G__41592,seq41591__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41590);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41596 = (function sablono$core$mail_to41596(var_args){
var args__36370__auto__ = [];
var len__36363__auto___41603 = arguments.length;
var i__36364__auto___41604 = (0);
while(true){
if((i__36364__auto___41604 < len__36363__auto___41603)){
args__36370__auto__.push((arguments[i__36364__auto___41604]));

var G__41605 = (i__36364__auto___41604 + (1));
i__36364__auto___41604 = G__41605;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((1) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41596.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36371__auto__);
});

sablono.core.mail_to41596.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41599){
var vec__41600 = p__41599;
var content = cljs.core.nth.call(null,vec__41600,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35250__auto__ = content;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41596.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41596.cljs$lang$applyTo = (function (seq41597){
var G__41598 = cljs.core.first.call(null,seq41597);
var seq41597__$1 = cljs.core.next.call(null,seq41597);
return sablono.core.mail_to41596.cljs$core$IFn$_invoke$arity$variadic(G__41598,seq41597__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41596);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41606 = (function sablono$core$unordered_list41606(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36038__auto__ = (function sablono$core$unordered_list41606_$_iter__41611(s__41612){
return (new cljs.core.LazySeq(null,(function (){
var s__41612__$1 = s__41612;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41612__$1);
if(temp__4657__auto__){
var s__41612__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41612__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__41612__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__41614 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__41613 = (0);
while(true){
if((i__41613 < size__36037__auto__)){
var x = cljs.core._nth.call(null,c__36036__auto__,i__41613);
cljs.core.chunk_append.call(null,b__41614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41615 = (i__41613 + (1));
i__41613 = G__41615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41614),sablono$core$unordered_list41606_$_iter__41611.call(null,cljs.core.chunk_rest.call(null,s__41612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41614),null);
}
} else {
var x = cljs.core.first.call(null,s__41612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41606_$_iter__41611.call(null,cljs.core.rest.call(null,s__41612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36038__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41606);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41616 = (function sablono$core$ordered_list41616(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36038__auto__ = (function sablono$core$ordered_list41616_$_iter__41621(s__41622){
return (new cljs.core.LazySeq(null,(function (){
var s__41622__$1 = s__41622;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41622__$1);
if(temp__4657__auto__){
var s__41622__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41622__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__41622__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__41624 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__41623 = (0);
while(true){
if((i__41623 < size__36037__auto__)){
var x = cljs.core._nth.call(null,c__36036__auto__,i__41623);
cljs.core.chunk_append.call(null,b__41624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41625 = (i__41623 + (1));
i__41623 = G__41625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41624),sablono$core$ordered_list41616_$_iter__41621.call(null,cljs.core.chunk_rest.call(null,s__41622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41624),null);
}
} else {
var x = cljs.core.first.call(null,s__41622__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41616_$_iter__41621.call(null,cljs.core.rest.call(null,s__41622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36038__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41616);
/**
 * Create an image element.
 */
sablono.core.image41626 = (function sablono$core$image41626(var_args){
var args41627 = [];
var len__36363__auto___41630 = arguments.length;
var i__36364__auto___41631 = (0);
while(true){
if((i__36364__auto___41631 < len__36363__auto___41630)){
args41627.push((arguments[i__36364__auto___41631]));

var G__41632 = (i__36364__auto___41631 + (1));
i__36364__auto___41631 = G__41632;
continue;
} else {
}
break;
}

var G__41629 = args41627.length;
switch (G__41629) {
case 1:
return sablono.core.image41626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41627.length)].join('')));

}
});

sablono.core.image41626.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41626.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41626.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41626);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41634_SHARP_,p2__41635_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41634_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41635_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41636_SHARP_,p2__41637_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41636_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41637_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35250__auto__ = value;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41638 = (function sablono$core$color_field41638(var_args){
var args41639 = [];
var len__36363__auto___41706 = arguments.length;
var i__36364__auto___41707 = (0);
while(true){
if((i__36364__auto___41707 < len__36363__auto___41706)){
args41639.push((arguments[i__36364__auto___41707]));

var G__41708 = (i__36364__auto___41707 + (1));
i__36364__auto___41707 = G__41708;
continue;
} else {
}
break;
}

var G__41641 = args41639.length;
switch (G__41641) {
case 1:
return sablono.core.color_field41638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41639.length)].join('')));

}
});

sablono.core.color_field41638.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.color_field41638.call(null,name__41553__auto__,null);
});

sablono.core.color_field41638.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.color_field41638.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41638);

/**
 * Creates a date input field.
 */
sablono.core.date_field41642 = (function sablono$core$date_field41642(var_args){
var args41643 = [];
var len__36363__auto___41710 = arguments.length;
var i__36364__auto___41711 = (0);
while(true){
if((i__36364__auto___41711 < len__36363__auto___41710)){
args41643.push((arguments[i__36364__auto___41711]));

var G__41712 = (i__36364__auto___41711 + (1));
i__36364__auto___41711 = G__41712;
continue;
} else {
}
break;
}

var G__41645 = args41643.length;
switch (G__41645) {
case 1:
return sablono.core.date_field41642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41643.length)].join('')));

}
});

sablono.core.date_field41642.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.date_field41642.call(null,name__41553__auto__,null);
});

sablono.core.date_field41642.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.date_field41642.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41642);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41646 = (function sablono$core$datetime_field41646(var_args){
var args41647 = [];
var len__36363__auto___41714 = arguments.length;
var i__36364__auto___41715 = (0);
while(true){
if((i__36364__auto___41715 < len__36363__auto___41714)){
args41647.push((arguments[i__36364__auto___41715]));

var G__41716 = (i__36364__auto___41715 + (1));
i__36364__auto___41715 = G__41716;
continue;
} else {
}
break;
}

var G__41649 = args41647.length;
switch (G__41649) {
case 1:
return sablono.core.datetime_field41646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41647.length)].join('')));

}
});

sablono.core.datetime_field41646.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.datetime_field41646.call(null,name__41553__auto__,null);
});

sablono.core.datetime_field41646.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.datetime_field41646.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41646);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41650 = (function sablono$core$datetime_local_field41650(var_args){
var args41651 = [];
var len__36363__auto___41718 = arguments.length;
var i__36364__auto___41719 = (0);
while(true){
if((i__36364__auto___41719 < len__36363__auto___41718)){
args41651.push((arguments[i__36364__auto___41719]));

var G__41720 = (i__36364__auto___41719 + (1));
i__36364__auto___41719 = G__41720;
continue;
} else {
}
break;
}

var G__41653 = args41651.length;
switch (G__41653) {
case 1:
return sablono.core.datetime_local_field41650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41651.length)].join('')));

}
});

sablono.core.datetime_local_field41650.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.datetime_local_field41650.call(null,name__41553__auto__,null);
});

sablono.core.datetime_local_field41650.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.datetime_local_field41650.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41650);

/**
 * Creates a email input field.
 */
sablono.core.email_field41654 = (function sablono$core$email_field41654(var_args){
var args41655 = [];
var len__36363__auto___41722 = arguments.length;
var i__36364__auto___41723 = (0);
while(true){
if((i__36364__auto___41723 < len__36363__auto___41722)){
args41655.push((arguments[i__36364__auto___41723]));

var G__41724 = (i__36364__auto___41723 + (1));
i__36364__auto___41723 = G__41724;
continue;
} else {
}
break;
}

var G__41657 = args41655.length;
switch (G__41657) {
case 1:
return sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41655.length)].join('')));

}
});

sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.email_field41654.call(null,name__41553__auto__,null);
});

sablono.core.email_field41654.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.email_field41654.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41654);

/**
 * Creates a file input field.
 */
sablono.core.file_field41658 = (function sablono$core$file_field41658(var_args){
var args41659 = [];
var len__36363__auto___41726 = arguments.length;
var i__36364__auto___41727 = (0);
while(true){
if((i__36364__auto___41727 < len__36363__auto___41726)){
args41659.push((arguments[i__36364__auto___41727]));

var G__41728 = (i__36364__auto___41727 + (1));
i__36364__auto___41727 = G__41728;
continue;
} else {
}
break;
}

var G__41661 = args41659.length;
switch (G__41661) {
case 1:
return sablono.core.file_field41658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41659.length)].join('')));

}
});

sablono.core.file_field41658.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.file_field41658.call(null,name__41553__auto__,null);
});

sablono.core.file_field41658.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.file_field41658.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41658);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41662 = (function sablono$core$hidden_field41662(var_args){
var args41663 = [];
var len__36363__auto___41730 = arguments.length;
var i__36364__auto___41731 = (0);
while(true){
if((i__36364__auto___41731 < len__36363__auto___41730)){
args41663.push((arguments[i__36364__auto___41731]));

var G__41732 = (i__36364__auto___41731 + (1));
i__36364__auto___41731 = G__41732;
continue;
} else {
}
break;
}

var G__41665 = args41663.length;
switch (G__41665) {
case 1:
return sablono.core.hidden_field41662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41663.length)].join('')));

}
});

sablono.core.hidden_field41662.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.hidden_field41662.call(null,name__41553__auto__,null);
});

sablono.core.hidden_field41662.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.hidden_field41662.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41662);

/**
 * Creates a month input field.
 */
sablono.core.month_field41666 = (function sablono$core$month_field41666(var_args){
var args41667 = [];
var len__36363__auto___41734 = arguments.length;
var i__36364__auto___41735 = (0);
while(true){
if((i__36364__auto___41735 < len__36363__auto___41734)){
args41667.push((arguments[i__36364__auto___41735]));

var G__41736 = (i__36364__auto___41735 + (1));
i__36364__auto___41735 = G__41736;
continue;
} else {
}
break;
}

var G__41669 = args41667.length;
switch (G__41669) {
case 1:
return sablono.core.month_field41666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41667.length)].join('')));

}
});

sablono.core.month_field41666.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.month_field41666.call(null,name__41553__auto__,null);
});

sablono.core.month_field41666.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.month_field41666.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41666);

/**
 * Creates a number input field.
 */
sablono.core.number_field41670 = (function sablono$core$number_field41670(var_args){
var args41671 = [];
var len__36363__auto___41738 = arguments.length;
var i__36364__auto___41739 = (0);
while(true){
if((i__36364__auto___41739 < len__36363__auto___41738)){
args41671.push((arguments[i__36364__auto___41739]));

var G__41740 = (i__36364__auto___41739 + (1));
i__36364__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var G__41673 = args41671.length;
switch (G__41673) {
case 1:
return sablono.core.number_field41670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41671.length)].join('')));

}
});

sablono.core.number_field41670.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.number_field41670.call(null,name__41553__auto__,null);
});

sablono.core.number_field41670.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.number_field41670.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41670);

/**
 * Creates a password input field.
 */
sablono.core.password_field41674 = (function sablono$core$password_field41674(var_args){
var args41675 = [];
var len__36363__auto___41742 = arguments.length;
var i__36364__auto___41743 = (0);
while(true){
if((i__36364__auto___41743 < len__36363__auto___41742)){
args41675.push((arguments[i__36364__auto___41743]));

var G__41744 = (i__36364__auto___41743 + (1));
i__36364__auto___41743 = G__41744;
continue;
} else {
}
break;
}

var G__41677 = args41675.length;
switch (G__41677) {
case 1:
return sablono.core.password_field41674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41675.length)].join('')));

}
});

sablono.core.password_field41674.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.password_field41674.call(null,name__41553__auto__,null);
});

sablono.core.password_field41674.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.password_field41674.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41674);

/**
 * Creates a range input field.
 */
sablono.core.range_field41678 = (function sablono$core$range_field41678(var_args){
var args41679 = [];
var len__36363__auto___41746 = arguments.length;
var i__36364__auto___41747 = (0);
while(true){
if((i__36364__auto___41747 < len__36363__auto___41746)){
args41679.push((arguments[i__36364__auto___41747]));

var G__41748 = (i__36364__auto___41747 + (1));
i__36364__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var G__41681 = args41679.length;
switch (G__41681) {
case 1:
return sablono.core.range_field41678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41679.length)].join('')));

}
});

sablono.core.range_field41678.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.range_field41678.call(null,name__41553__auto__,null);
});

sablono.core.range_field41678.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.range_field41678.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41678);

/**
 * Creates a search input field.
 */
sablono.core.search_field41682 = (function sablono$core$search_field41682(var_args){
var args41683 = [];
var len__36363__auto___41750 = arguments.length;
var i__36364__auto___41751 = (0);
while(true){
if((i__36364__auto___41751 < len__36363__auto___41750)){
args41683.push((arguments[i__36364__auto___41751]));

var G__41752 = (i__36364__auto___41751 + (1));
i__36364__auto___41751 = G__41752;
continue;
} else {
}
break;
}

var G__41685 = args41683.length;
switch (G__41685) {
case 1:
return sablono.core.search_field41682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41683.length)].join('')));

}
});

sablono.core.search_field41682.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.search_field41682.call(null,name__41553__auto__,null);
});

sablono.core.search_field41682.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.search_field41682.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41682);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41686 = (function sablono$core$tel_field41686(var_args){
var args41687 = [];
var len__36363__auto___41754 = arguments.length;
var i__36364__auto___41755 = (0);
while(true){
if((i__36364__auto___41755 < len__36363__auto___41754)){
args41687.push((arguments[i__36364__auto___41755]));

var G__41756 = (i__36364__auto___41755 + (1));
i__36364__auto___41755 = G__41756;
continue;
} else {
}
break;
}

var G__41689 = args41687.length;
switch (G__41689) {
case 1:
return sablono.core.tel_field41686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41687.length)].join('')));

}
});

sablono.core.tel_field41686.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.tel_field41686.call(null,name__41553__auto__,null);
});

sablono.core.tel_field41686.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.tel_field41686.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41686);

/**
 * Creates a text input field.
 */
sablono.core.text_field41690 = (function sablono$core$text_field41690(var_args){
var args41691 = [];
var len__36363__auto___41758 = arguments.length;
var i__36364__auto___41759 = (0);
while(true){
if((i__36364__auto___41759 < len__36363__auto___41758)){
args41691.push((arguments[i__36364__auto___41759]));

var G__41760 = (i__36364__auto___41759 + (1));
i__36364__auto___41759 = G__41760;
continue;
} else {
}
break;
}

var G__41693 = args41691.length;
switch (G__41693) {
case 1:
return sablono.core.text_field41690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41691.length)].join('')));

}
});

sablono.core.text_field41690.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.text_field41690.call(null,name__41553__auto__,null);
});

sablono.core.text_field41690.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.text_field41690.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41690);

/**
 * Creates a time input field.
 */
sablono.core.time_field41694 = (function sablono$core$time_field41694(var_args){
var args41695 = [];
var len__36363__auto___41762 = arguments.length;
var i__36364__auto___41763 = (0);
while(true){
if((i__36364__auto___41763 < len__36363__auto___41762)){
args41695.push((arguments[i__36364__auto___41763]));

var G__41764 = (i__36364__auto___41763 + (1));
i__36364__auto___41763 = G__41764;
continue;
} else {
}
break;
}

var G__41697 = args41695.length;
switch (G__41697) {
case 1:
return sablono.core.time_field41694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41695.length)].join('')));

}
});

sablono.core.time_field41694.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.time_field41694.call(null,name__41553__auto__,null);
});

sablono.core.time_field41694.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.time_field41694.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41694);

/**
 * Creates a url input field.
 */
sablono.core.url_field41698 = (function sablono$core$url_field41698(var_args){
var args41699 = [];
var len__36363__auto___41766 = arguments.length;
var i__36364__auto___41767 = (0);
while(true){
if((i__36364__auto___41767 < len__36363__auto___41766)){
args41699.push((arguments[i__36364__auto___41767]));

var G__41768 = (i__36364__auto___41767 + (1));
i__36364__auto___41767 = G__41768;
continue;
} else {
}
break;
}

var G__41701 = args41699.length;
switch (G__41701) {
case 1:
return sablono.core.url_field41698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41699.length)].join('')));

}
});

sablono.core.url_field41698.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.url_field41698.call(null,name__41553__auto__,null);
});

sablono.core.url_field41698.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.url_field41698.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41698);

/**
 * Creates a week input field.
 */
sablono.core.week_field41702 = (function sablono$core$week_field41702(var_args){
var args41703 = [];
var len__36363__auto___41770 = arguments.length;
var i__36364__auto___41771 = (0);
while(true){
if((i__36364__auto___41771 < len__36363__auto___41770)){
args41703.push((arguments[i__36364__auto___41771]));

var G__41772 = (i__36364__auto___41771 + (1));
i__36364__auto___41771 = G__41772;
continue;
} else {
}
break;
}

var G__41705 = args41703.length;
switch (G__41705) {
case 1:
return sablono.core.week_field41702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41703.length)].join('')));

}
});

sablono.core.week_field41702.cljs$core$IFn$_invoke$arity$1 = (function (name__41553__auto__){
return sablono.core.week_field41702.call(null,name__41553__auto__,null);
});

sablono.core.week_field41702.cljs$core$IFn$_invoke$arity$2 = (function (name__41553__auto__,value__41554__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41553__auto__,value__41554__auto__);
});

sablono.core.week_field41702.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41702);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41774 = (function sablono$core$check_box41774(var_args){
var args41775 = [];
var len__36363__auto___41778 = arguments.length;
var i__36364__auto___41779 = (0);
while(true){
if((i__36364__auto___41779 < len__36363__auto___41778)){
args41775.push((arguments[i__36364__auto___41779]));

var G__41780 = (i__36364__auto___41779 + (1));
i__36364__auto___41779 = G__41780;
continue;
} else {
}
break;
}

var G__41777 = args41775.length;
switch (G__41777) {
case 1:
return sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41775.length)].join('')));

}
});

sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41774.call(null,name,null);
});

sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41774.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41774.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35250__auto__ = value;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41774.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41774);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41782 = (function sablono$core$radio_button41782(var_args){
var args41783 = [];
var len__36363__auto___41786 = arguments.length;
var i__36364__auto___41787 = (0);
while(true){
if((i__36364__auto___41787 < len__36363__auto___41786)){
args41783.push((arguments[i__36364__auto___41787]));

var G__41788 = (i__36364__auto___41787 + (1));
i__36364__auto___41787 = G__41788;
continue;
} else {
}
break;
}

var G__41785 = args41783.length;
switch (G__41785) {
case 1:
return sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41783.length)].join('')));

}
});

sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41782.call(null,group,null);
});

sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41782.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41782.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35250__auto__ = value;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41782.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41782);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41790 = (function sablono$core$select_options41790(coll){
var iter__36038__auto__ = (function sablono$core$select_options41790_$_iter__41807(s__41808){
return (new cljs.core.LazySeq(null,(function (){
var s__41808__$1 = s__41808;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41808__$1);
if(temp__4657__auto__){
var s__41808__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41808__$2)){
var c__36036__auto__ = cljs.core.chunk_first.call(null,s__41808__$2);
var size__36037__auto__ = cljs.core.count.call(null,c__36036__auto__);
var b__41810 = cljs.core.chunk_buffer.call(null,size__36037__auto__);
if((function (){var i__41809 = (0);
while(true){
if((i__41809 < size__36037__auto__)){
var x = cljs.core._nth.call(null,c__36036__auto__,i__41809);
cljs.core.chunk_append.call(null,b__41810,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41817 = x;
var text = cljs.core.nth.call(null,vec__41817,(0),null);
var val = cljs.core.nth.call(null,vec__41817,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41817,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41790.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41823 = (i__41809 + (1));
i__41809 = G__41823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41810),sablono$core$select_options41790_$_iter__41807.call(null,cljs.core.chunk_rest.call(null,s__41808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41810),null);
}
} else {
var x = cljs.core.first.call(null,s__41808__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41820 = x;
var text = cljs.core.nth.call(null,vec__41820,(0),null);
var val = cljs.core.nth.call(null,vec__41820,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41820,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41790.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41790_$_iter__41807.call(null,cljs.core.rest.call(null,s__41808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36038__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41790);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41824 = (function sablono$core$drop_down41824(var_args){
var args41825 = [];
var len__36363__auto___41828 = arguments.length;
var i__36364__auto___41829 = (0);
while(true){
if((i__36364__auto___41829 < len__36363__auto___41828)){
args41825.push((arguments[i__36364__auto___41829]));

var G__41830 = (i__36364__auto___41829 + (1));
i__36364__auto___41829 = G__41830;
continue;
} else {
}
break;
}

var G__41827 = args41825.length;
switch (G__41827) {
case 2:
return sablono.core.drop_down41824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41824.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41825.length)].join('')));

}
});

sablono.core.drop_down41824.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41824.call(null,name,options,null);
});

sablono.core.drop_down41824.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41824.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41824);
/**
 * Creates a text area element.
 */
sablono.core.text_area41832 = (function sablono$core$text_area41832(var_args){
var args41833 = [];
var len__36363__auto___41836 = arguments.length;
var i__36364__auto___41837 = (0);
while(true){
if((i__36364__auto___41837 < len__36363__auto___41836)){
args41833.push((arguments[i__36364__auto___41837]));

var G__41838 = (i__36364__auto___41837 + (1));
i__36364__auto___41837 = G__41838;
continue;
} else {
}
break;
}

var G__41835 = args41833.length;
switch (G__41835) {
case 1:
return sablono.core.text_area41832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41833.length)].join('')));

}
});

sablono.core.text_area41832.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41832.call(null,name,null);
});

sablono.core.text_area41832.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35250__auto__ = value;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41832.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41832);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41840 = (function sablono$core$label41840(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41840);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41841 = (function sablono$core$submit_button41841(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41841);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41842 = (function sablono$core$reset_button41842(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41842);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41843 = (function sablono$core$form_to41843(var_args){
var args__36370__auto__ = [];
var len__36363__auto___41850 = arguments.length;
var i__36364__auto___41851 = (0);
while(true){
if((i__36364__auto___41851 < len__36363__auto___41850)){
args__36370__auto__.push((arguments[i__36364__auto___41851]));

var G__41852 = (i__36364__auto___41851 + (1));
i__36364__auto___41851 = G__41852;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((1) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41843.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36371__auto__);
});

sablono.core.form_to41843.cljs$core$IFn$_invoke$arity$variadic = (function (p__41846,body){
var vec__41847 = p__41846;
var method = cljs.core.nth.call(null,vec__41847,(0),null);
var action = cljs.core.nth.call(null,vec__41847,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41843.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41843.cljs$lang$applyTo = (function (seq41844){
var G__41845 = cljs.core.first.call(null,seq41844);
var seq41844__$1 = cljs.core.next.call(null,seq41844);
return sablono.core.form_to41843.cljs$core$IFn$_invoke$arity$variadic(G__41845,seq41844__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41843);
