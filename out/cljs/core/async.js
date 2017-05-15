// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args43435 = [];
var len__36363__auto___43441 = arguments.length;
var i__36364__auto___43442 = (0);
while(true){
if((i__36364__auto___43442 < len__36363__auto___43441)){
args43435.push((arguments[i__36364__auto___43442]));

var G__43443 = (i__36364__auto___43442 + (1));
i__36364__auto___43442 = G__43443;
continue;
} else {
}
break;
}

var G__43437 = args43435.length;
switch (G__43437) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43435.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43438 = (function (f,blockable,meta43439){
this.f = f;
this.blockable = blockable;
this.meta43439 = meta43439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43440,meta43439__$1){
var self__ = this;
var _43440__$1 = this;
return (new cljs.core.async.t_cljs$core$async43438(self__.f,self__.blockable,meta43439__$1));
});

cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43440){
var self__ = this;
var _43440__$1 = this;
return self__.meta43439;
});

cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43439","meta43439",1183397402,null)], null);
});

cljs.core.async.t_cljs$core$async43438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43438";

cljs.core.async.t_cljs$core$async43438.cljs$lang$ctorPrWriter = (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async43438");
});

cljs.core.async.__GT_t_cljs$core$async43438 = (function cljs$core$async$__GT_t_cljs$core$async43438(f__$1,blockable__$1,meta43439){
return (new cljs.core.async.t_cljs$core$async43438(f__$1,blockable__$1,meta43439));
});

}

return (new cljs.core.async.t_cljs$core$async43438(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args43447 = [];
var len__36363__auto___43450 = arguments.length;
var i__36364__auto___43451 = (0);
while(true){
if((i__36364__auto___43451 < len__36363__auto___43450)){
args43447.push((arguments[i__36364__auto___43451]));

var G__43452 = (i__36364__auto___43451 + (1));
i__36364__auto___43451 = G__43452;
continue;
} else {
}
break;
}

var G__43449 = args43447.length;
switch (G__43449) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43447.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args43454 = [];
var len__36363__auto___43457 = arguments.length;
var i__36364__auto___43458 = (0);
while(true){
if((i__36364__auto___43458 < len__36363__auto___43457)){
args43454.push((arguments[i__36364__auto___43458]));

var G__43459 = (i__36364__auto___43458 + (1));
i__36364__auto___43458 = G__43459;
continue;
} else {
}
break;
}

var G__43456 = args43454.length;
switch (G__43456) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43454.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args43461 = [];
var len__36363__auto___43464 = arguments.length;
var i__36364__auto___43465 = (0);
while(true){
if((i__36364__auto___43465 < len__36363__auto___43464)){
args43461.push((arguments[i__36364__auto___43465]));

var G__43466 = (i__36364__auto___43465 + (1));
i__36364__auto___43465 = G__43466;
continue;
} else {
}
break;
}

var G__43463 = args43461.length;
switch (G__43463) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43461.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43468 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43468);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43468,ret){
return (function (){
return fn1.call(null,val_43468);
});})(val_43468,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args43469 = [];
var len__36363__auto___43472 = arguments.length;
var i__36364__auto___43473 = (0);
while(true){
if((i__36364__auto___43473 < len__36363__auto___43472)){
args43469.push((arguments[i__36364__auto___43473]));

var G__43474 = (i__36364__auto___43473 + (1));
i__36364__auto___43473 = G__43474;
continue;
} else {
}
break;
}

var G__43471 = args43469.length;
switch (G__43471) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43469.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36173__auto___43476 = n;
var x_43477 = (0);
while(true){
if((x_43477 < n__36173__auto___43476)){
(a[x_43477] = (0));

var G__43478 = (x_43477 + (1));
x_43477 = G__43478;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__43479 = (i + (1));
i = G__43479;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43483 = (function (flag,meta43484){
this.flag = flag;
this.meta43484 = meta43484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43485,meta43484__$1){
var self__ = this;
var _43485__$1 = this;
return (new cljs.core.async.t_cljs$core$async43483(self__.flag,meta43484__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43485){
var self__ = this;
var _43485__$1 = this;
return self__.meta43484;
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43484","meta43484",-912005983,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43483";

cljs.core.async.t_cljs$core$async43483.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async43483");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43483 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43483(flag__$1,meta43484){
return (new cljs.core.async.t_cljs$core$async43483(flag__$1,meta43484));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43483(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43489 = (function (flag,cb,meta43490){
this.flag = flag;
this.cb = cb;
this.meta43490 = meta43490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43491,meta43490__$1){
var self__ = this;
var _43491__$1 = this;
return (new cljs.core.async.t_cljs$core$async43489(self__.flag,self__.cb,meta43490__$1));
});

cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43491){
var self__ = this;
var _43491__$1 = this;
return self__.meta43490;
});

cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43490","meta43490",-1163727604,null)], null);
});

cljs.core.async.t_cljs$core$async43489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43489";

cljs.core.async.t_cljs$core$async43489.cljs$lang$ctorPrWriter = (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async43489");
});

cljs.core.async.__GT_t_cljs$core$async43489 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43489(flag__$1,cb__$1,meta43490){
return (new cljs.core.async.t_cljs$core$async43489(flag__$1,cb__$1,meta43490));
});

}

return (new cljs.core.async.t_cljs$core$async43489(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43492_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43492_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43493_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43493_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35250__auto__ = wport;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43494 = (i + (1));
i = G__43494;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35250__auto__ = ret;
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35238__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35238__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35238__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__36370__auto__ = [];
var len__36363__auto___43500 = arguments.length;
var i__36364__auto___43501 = (0);
while(true){
if((i__36364__auto___43501 < len__36363__auto___43500)){
args__36370__auto__.push((arguments[i__36364__auto___43501]));

var G__43502 = (i__36364__auto___43501 + (1));
i__36364__auto___43501 = G__43502;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((1) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36371__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43497){
var map__43498 = p__43497;
var map__43498__$1 = ((((!((map__43498 == null)))?((((map__43498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43498):map__43498);
var opts = map__43498__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43495){
var G__43496 = cljs.core.first.call(null,seq43495);
var seq43495__$1 = cljs.core.next.call(null,seq43495);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43496,seq43495__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args43503 = [];
var len__36363__auto___43553 = arguments.length;
var i__36364__auto___43554 = (0);
while(true){
if((i__36364__auto___43554 < len__36363__auto___43553)){
args43503.push((arguments[i__36364__auto___43554]));

var G__43555 = (i__36364__auto___43554 + (1));
i__36364__auto___43554 = G__43555;
continue;
} else {
}
break;
}

var G__43505 = args43503.length;
switch (G__43505) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43503.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43390__auto___43557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___43557){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___43557){
return (function (state_43529){
var state_val_43530 = (state_43529[(1)]);
if((state_val_43530 === (7))){
var inst_43525 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
var statearr_43531_43558 = state_43529__$1;
(statearr_43531_43558[(2)] = inst_43525);

(statearr_43531_43558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (1))){
var state_43529__$1 = state_43529;
var statearr_43532_43559 = state_43529__$1;
(statearr_43532_43559[(2)] = null);

(statearr_43532_43559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (4))){
var inst_43508 = (state_43529[(7)]);
var inst_43508__$1 = (state_43529[(2)]);
var inst_43509 = (inst_43508__$1 == null);
var state_43529__$1 = (function (){var statearr_43533 = state_43529;
(statearr_43533[(7)] = inst_43508__$1);

return statearr_43533;
})();
if(cljs.core.truth_(inst_43509)){
var statearr_43534_43560 = state_43529__$1;
(statearr_43534_43560[(1)] = (5));

} else {
var statearr_43535_43561 = state_43529__$1;
(statearr_43535_43561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (13))){
var state_43529__$1 = state_43529;
var statearr_43536_43562 = state_43529__$1;
(statearr_43536_43562[(2)] = null);

(statearr_43536_43562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (6))){
var inst_43508 = (state_43529[(7)]);
var state_43529__$1 = state_43529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43529__$1,(11),to,inst_43508);
} else {
if((state_val_43530 === (3))){
var inst_43527 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43529__$1,inst_43527);
} else {
if((state_val_43530 === (12))){
var state_43529__$1 = state_43529;
var statearr_43537_43563 = state_43529__$1;
(statearr_43537_43563[(2)] = null);

(statearr_43537_43563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (2))){
var state_43529__$1 = state_43529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43529__$1,(4),from);
} else {
if((state_val_43530 === (11))){
var inst_43518 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
if(cljs.core.truth_(inst_43518)){
var statearr_43538_43564 = state_43529__$1;
(statearr_43538_43564[(1)] = (12));

} else {
var statearr_43539_43565 = state_43529__$1;
(statearr_43539_43565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (9))){
var state_43529__$1 = state_43529;
var statearr_43540_43566 = state_43529__$1;
(statearr_43540_43566[(2)] = null);

(statearr_43540_43566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (5))){
var state_43529__$1 = state_43529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43541_43567 = state_43529__$1;
(statearr_43541_43567[(1)] = (8));

} else {
var statearr_43542_43568 = state_43529__$1;
(statearr_43542_43568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (14))){
var inst_43523 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
var statearr_43543_43569 = state_43529__$1;
(statearr_43543_43569[(2)] = inst_43523);

(statearr_43543_43569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (10))){
var inst_43515 = (state_43529[(2)]);
var state_43529__$1 = state_43529;
var statearr_43544_43570 = state_43529__$1;
(statearr_43544_43570[(2)] = inst_43515);

(statearr_43544_43570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43530 === (8))){
var inst_43512 = cljs.core.async.close_BANG_.call(null,to);
var state_43529__$1 = state_43529;
var statearr_43545_43571 = state_43529__$1;
(statearr_43545_43571[(2)] = inst_43512);

(statearr_43545_43571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___43557))
;
return ((function (switch__43278__auto__,c__43390__auto___43557){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_43549 = [null,null,null,null,null,null,null,null];
(statearr_43549[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_43549[(1)] = (1));

return statearr_43549;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_43529){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43550){if((e43550 instanceof Object)){
var ex__43282__auto__ = e43550;
var statearr_43551_43572 = state_43529;
(statearr_43551_43572[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43573 = state_43529;
state_43529 = G__43573;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_43529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_43529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___43557))
})();
var state__43392__auto__ = (function (){var statearr_43552 = f__43391__auto__.call(null);
(statearr_43552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___43557);

return statearr_43552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___43557))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__43761){
var vec__43762 = p__43761;
var v = cljs.core.nth.call(null,vec__43762,(0),null);
var p = cljs.core.nth.call(null,vec__43762,(1),null);
var job = vec__43762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43390__auto___43948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results){
return (function (state_43769){
var state_val_43770 = (state_43769[(1)]);
if((state_val_43770 === (1))){
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43769__$1,(2),res,v);
} else {
if((state_val_43770 === (2))){
var inst_43766 = (state_43769[(2)]);
var inst_43767 = cljs.core.async.close_BANG_.call(null,res);
var state_43769__$1 = (function (){var statearr_43771 = state_43769;
(statearr_43771[(7)] = inst_43766);

return statearr_43771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43769__$1,inst_43767);
} else {
return null;
}
}
});})(c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results))
;
return ((function (switch__43278__auto__,c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_43775 = [null,null,null,null,null,null,null,null];
(statearr_43775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__);

(statearr_43775[(1)] = (1));

return statearr_43775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1 = (function (state_43769){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43776){if((e43776 instanceof Object)){
var ex__43282__auto__ = e43776;
var statearr_43777_43949 = state_43769;
(statearr_43777_43949[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43950 = state_43769;
state_43769 = G__43950;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = function(state_43769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1.call(this,state_43769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results))
})();
var state__43392__auto__ = (function (){var statearr_43778 = f__43391__auto__.call(null);
(statearr_43778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___43948);

return statearr_43778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___43948,res,vec__43762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43779){
var vec__43780 = p__43779;
var v = cljs.core.nth.call(null,vec__43780,(0),null);
var p = cljs.core.nth.call(null,vec__43780,(1),null);
var job = vec__43780;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36173__auto___43951 = n;
var __43952 = (0);
while(true){
if((__43952 < n__36173__auto___43951)){
var G__43783_43953 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43783_43953) {
case "compute":
var c__43390__auto___43955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43952,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (__43952,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function (state_43796){
var state_val_43797 = (state_43796[(1)]);
if((state_val_43797 === (1))){
var state_43796__$1 = state_43796;
var statearr_43798_43956 = state_43796__$1;
(statearr_43798_43956[(2)] = null);

(statearr_43798_43956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (2))){
var state_43796__$1 = state_43796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43796__$1,(4),jobs);
} else {
if((state_val_43797 === (3))){
var inst_43794 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43796__$1,inst_43794);
} else {
if((state_val_43797 === (4))){
var inst_43786 = (state_43796[(2)]);
var inst_43787 = process.call(null,inst_43786);
var state_43796__$1 = state_43796;
if(cljs.core.truth_(inst_43787)){
var statearr_43799_43957 = state_43796__$1;
(statearr_43799_43957[(1)] = (5));

} else {
var statearr_43800_43958 = state_43796__$1;
(statearr_43800_43958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (5))){
var state_43796__$1 = state_43796;
var statearr_43801_43959 = state_43796__$1;
(statearr_43801_43959[(2)] = null);

(statearr_43801_43959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (6))){
var state_43796__$1 = state_43796;
var statearr_43802_43960 = state_43796__$1;
(statearr_43802_43960[(2)] = null);

(statearr_43802_43960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43797 === (7))){
var inst_43792 = (state_43796[(2)]);
var state_43796__$1 = state_43796;
var statearr_43803_43961 = state_43796__$1;
(statearr_43803_43961[(2)] = inst_43792);

(statearr_43803_43961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43952,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
;
return ((function (__43952,switch__43278__auto__,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_43807 = [null,null,null,null,null,null,null];
(statearr_43807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__);

(statearr_43807[(1)] = (1));

return statearr_43807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1 = (function (state_43796){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43808){if((e43808 instanceof Object)){
var ex__43282__auto__ = e43808;
var statearr_43809_43962 = state_43796;
(statearr_43809_43962[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43963 = state_43796;
state_43796 = G__43963;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = function(state_43796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1.call(this,state_43796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__;
})()
;})(__43952,switch__43278__auto__,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
})();
var state__43392__auto__ = (function (){var statearr_43810 = f__43391__auto__.call(null);
(statearr_43810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___43955);

return statearr_43810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(__43952,c__43390__auto___43955,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
);


break;
case "async":
var c__43390__auto___43964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43952,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (__43952,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function (state_43823){
var state_val_43824 = (state_43823[(1)]);
if((state_val_43824 === (1))){
var state_43823__$1 = state_43823;
var statearr_43825_43965 = state_43823__$1;
(statearr_43825_43965[(2)] = null);

(statearr_43825_43965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (2))){
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43823__$1,(4),jobs);
} else {
if((state_val_43824 === (3))){
var inst_43821 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43823__$1,inst_43821);
} else {
if((state_val_43824 === (4))){
var inst_43813 = (state_43823[(2)]);
var inst_43814 = async.call(null,inst_43813);
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43814)){
var statearr_43826_43966 = state_43823__$1;
(statearr_43826_43966[(1)] = (5));

} else {
var statearr_43827_43967 = state_43823__$1;
(statearr_43827_43967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (5))){
var state_43823__$1 = state_43823;
var statearr_43828_43968 = state_43823__$1;
(statearr_43828_43968[(2)] = null);

(statearr_43828_43968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (6))){
var state_43823__$1 = state_43823;
var statearr_43829_43969 = state_43823__$1;
(statearr_43829_43969[(2)] = null);

(statearr_43829_43969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (7))){
var inst_43819 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43830_43970 = state_43823__$1;
(statearr_43830_43970[(2)] = inst_43819);

(statearr_43830_43970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43952,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
;
return ((function (__43952,switch__43278__auto__,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_43834 = [null,null,null,null,null,null,null];
(statearr_43834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__);

(statearr_43834[(1)] = (1));

return statearr_43834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1 = (function (state_43823){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43835){if((e43835 instanceof Object)){
var ex__43282__auto__ = e43835;
var statearr_43836_43971 = state_43823;
(statearr_43836_43971[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43972 = state_43823;
state_43823 = G__43972;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = function(state_43823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1.call(this,state_43823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__;
})()
;})(__43952,switch__43278__auto__,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
})();
var state__43392__auto__ = (function (){var statearr_43837 = f__43391__auto__.call(null);
(statearr_43837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___43964);

return statearr_43837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(__43952,c__43390__auto___43964,G__43783_43953,n__36173__auto___43951,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__43973 = (__43952 + (1));
__43952 = G__43973;
continue;
} else {
}
break;
}

var c__43390__auto___43974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___43974,jobs,results,process,async){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___43974,jobs,results,process,async){
return (function (state_43859){
var state_val_43860 = (state_43859[(1)]);
if((state_val_43860 === (1))){
var state_43859__$1 = state_43859;
var statearr_43861_43975 = state_43859__$1;
(statearr_43861_43975[(2)] = null);

(statearr_43861_43975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (2))){
var state_43859__$1 = state_43859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43859__$1,(4),from);
} else {
if((state_val_43860 === (3))){
var inst_43857 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43859__$1,inst_43857);
} else {
if((state_val_43860 === (4))){
var inst_43840 = (state_43859[(7)]);
var inst_43840__$1 = (state_43859[(2)]);
var inst_43841 = (inst_43840__$1 == null);
var state_43859__$1 = (function (){var statearr_43862 = state_43859;
(statearr_43862[(7)] = inst_43840__$1);

return statearr_43862;
})();
if(cljs.core.truth_(inst_43841)){
var statearr_43863_43976 = state_43859__$1;
(statearr_43863_43976[(1)] = (5));

} else {
var statearr_43864_43977 = state_43859__$1;
(statearr_43864_43977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (5))){
var inst_43843 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43859__$1 = state_43859;
var statearr_43865_43978 = state_43859__$1;
(statearr_43865_43978[(2)] = inst_43843);

(statearr_43865_43978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (6))){
var inst_43845 = (state_43859[(8)]);
var inst_43840 = (state_43859[(7)]);
var inst_43845__$1 = cljs.core.async.chan.call(null,(1));
var inst_43846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43847 = [inst_43840,inst_43845__$1];
var inst_43848 = (new cljs.core.PersistentVector(null,2,(5),inst_43846,inst_43847,null));
var state_43859__$1 = (function (){var statearr_43866 = state_43859;
(statearr_43866[(8)] = inst_43845__$1);

return statearr_43866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43859__$1,(8),jobs,inst_43848);
} else {
if((state_val_43860 === (7))){
var inst_43855 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
var statearr_43867_43979 = state_43859__$1;
(statearr_43867_43979[(2)] = inst_43855);

(statearr_43867_43979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (8))){
var inst_43845 = (state_43859[(8)]);
var inst_43850 = (state_43859[(2)]);
var state_43859__$1 = (function (){var statearr_43868 = state_43859;
(statearr_43868[(9)] = inst_43850);

return statearr_43868;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43859__$1,(9),results,inst_43845);
} else {
if((state_val_43860 === (9))){
var inst_43852 = (state_43859[(2)]);
var state_43859__$1 = (function (){var statearr_43869 = state_43859;
(statearr_43869[(10)] = inst_43852);

return statearr_43869;
})();
var statearr_43870_43980 = state_43859__$1;
(statearr_43870_43980[(2)] = null);

(statearr_43870_43980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___43974,jobs,results,process,async))
;
return ((function (switch__43278__auto__,c__43390__auto___43974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_43874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__);

(statearr_43874[(1)] = (1));

return statearr_43874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1 = (function (state_43859){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43875){if((e43875 instanceof Object)){
var ex__43282__auto__ = e43875;
var statearr_43876_43981 = state_43859;
(statearr_43876_43981[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43982 = state_43859;
state_43859 = G__43982;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = function(state_43859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1.call(this,state_43859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___43974,jobs,results,process,async))
})();
var state__43392__auto__ = (function (){var statearr_43877 = f__43391__auto__.call(null);
(statearr_43877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___43974);

return statearr_43877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___43974,jobs,results,process,async))
);


var c__43390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto__,jobs,results,process,async){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto__,jobs,results,process,async){
return (function (state_43915){
var state_val_43916 = (state_43915[(1)]);
if((state_val_43916 === (7))){
var inst_43911 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43917_43983 = state_43915__$1;
(statearr_43917_43983[(2)] = inst_43911);

(statearr_43917_43983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (20))){
var state_43915__$1 = state_43915;
var statearr_43918_43984 = state_43915__$1;
(statearr_43918_43984[(2)] = null);

(statearr_43918_43984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (1))){
var state_43915__$1 = state_43915;
var statearr_43919_43985 = state_43915__$1;
(statearr_43919_43985[(2)] = null);

(statearr_43919_43985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (4))){
var inst_43880 = (state_43915[(7)]);
var inst_43880__$1 = (state_43915[(2)]);
var inst_43881 = (inst_43880__$1 == null);
var state_43915__$1 = (function (){var statearr_43920 = state_43915;
(statearr_43920[(7)] = inst_43880__$1);

return statearr_43920;
})();
if(cljs.core.truth_(inst_43881)){
var statearr_43921_43986 = state_43915__$1;
(statearr_43921_43986[(1)] = (5));

} else {
var statearr_43922_43987 = state_43915__$1;
(statearr_43922_43987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (15))){
var inst_43893 = (state_43915[(8)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43915__$1,(18),to,inst_43893);
} else {
if((state_val_43916 === (21))){
var inst_43906 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43923_43988 = state_43915__$1;
(statearr_43923_43988[(2)] = inst_43906);

(statearr_43923_43988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (13))){
var inst_43908 = (state_43915[(2)]);
var state_43915__$1 = (function (){var statearr_43924 = state_43915;
(statearr_43924[(9)] = inst_43908);

return statearr_43924;
})();
var statearr_43925_43989 = state_43915__$1;
(statearr_43925_43989[(2)] = null);

(statearr_43925_43989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (6))){
var inst_43880 = (state_43915[(7)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43915__$1,(11),inst_43880);
} else {
if((state_val_43916 === (17))){
var inst_43901 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
if(cljs.core.truth_(inst_43901)){
var statearr_43926_43990 = state_43915__$1;
(statearr_43926_43990[(1)] = (19));

} else {
var statearr_43927_43991 = state_43915__$1;
(statearr_43927_43991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (3))){
var inst_43913 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43915__$1,inst_43913);
} else {
if((state_val_43916 === (12))){
var inst_43890 = (state_43915[(10)]);
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43915__$1,(14),inst_43890);
} else {
if((state_val_43916 === (2))){
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43915__$1,(4),results);
} else {
if((state_val_43916 === (19))){
var state_43915__$1 = state_43915;
var statearr_43928_43992 = state_43915__$1;
(statearr_43928_43992[(2)] = null);

(statearr_43928_43992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (11))){
var inst_43890 = (state_43915[(2)]);
var state_43915__$1 = (function (){var statearr_43929 = state_43915;
(statearr_43929[(10)] = inst_43890);

return statearr_43929;
})();
var statearr_43930_43993 = state_43915__$1;
(statearr_43930_43993[(2)] = null);

(statearr_43930_43993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (9))){
var state_43915__$1 = state_43915;
var statearr_43931_43994 = state_43915__$1;
(statearr_43931_43994[(2)] = null);

(statearr_43931_43994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (5))){
var state_43915__$1 = state_43915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43932_43995 = state_43915__$1;
(statearr_43932_43995[(1)] = (8));

} else {
var statearr_43933_43996 = state_43915__$1;
(statearr_43933_43996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (14))){
var inst_43895 = (state_43915[(11)]);
var inst_43893 = (state_43915[(8)]);
var inst_43893__$1 = (state_43915[(2)]);
var inst_43894 = (inst_43893__$1 == null);
var inst_43895__$1 = cljs.core.not.call(null,inst_43894);
var state_43915__$1 = (function (){var statearr_43934 = state_43915;
(statearr_43934[(11)] = inst_43895__$1);

(statearr_43934[(8)] = inst_43893__$1);

return statearr_43934;
})();
if(inst_43895__$1){
var statearr_43935_43997 = state_43915__$1;
(statearr_43935_43997[(1)] = (15));

} else {
var statearr_43936_43998 = state_43915__$1;
(statearr_43936_43998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (16))){
var inst_43895 = (state_43915[(11)]);
var state_43915__$1 = state_43915;
var statearr_43937_43999 = state_43915__$1;
(statearr_43937_43999[(2)] = inst_43895);

(statearr_43937_43999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (10))){
var inst_43887 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43938_44000 = state_43915__$1;
(statearr_43938_44000[(2)] = inst_43887);

(statearr_43938_44000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (18))){
var inst_43898 = (state_43915[(2)]);
var state_43915__$1 = state_43915;
var statearr_43939_44001 = state_43915__$1;
(statearr_43939_44001[(2)] = inst_43898);

(statearr_43939_44001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43916 === (8))){
var inst_43884 = cljs.core.async.close_BANG_.call(null,to);
var state_43915__$1 = state_43915;
var statearr_43940_44002 = state_43915__$1;
(statearr_43940_44002[(2)] = inst_43884);

(statearr_43940_44002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto__,jobs,results,process,async))
;
return ((function (switch__43278__auto__,c__43390__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_43944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__);

(statearr_43944[(1)] = (1));

return statearr_43944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1 = (function (state_43915){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_43915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e43945){if((e43945 instanceof Object)){
var ex__43282__auto__ = e43945;
var statearr_43946_44003 = state_43915;
(statearr_43946_44003[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44004 = state_43915;
state_43915 = G__44004;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__ = function(state_43915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1.call(this,state_43915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto__,jobs,results,process,async))
})();
var state__43392__auto__ = (function (){var statearr_43947 = f__43391__auto__.call(null);
(statearr_43947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto__);

return statearr_43947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto__,jobs,results,process,async))
);

return c__43390__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args44005 = [];
var len__36363__auto___44008 = arguments.length;
var i__36364__auto___44009 = (0);
while(true){
if((i__36364__auto___44009 < len__36363__auto___44008)){
args44005.push((arguments[i__36364__auto___44009]));

var G__44010 = (i__36364__auto___44009 + (1));
i__36364__auto___44009 = G__44010;
continue;
} else {
}
break;
}

var G__44007 = args44005.length;
switch (G__44007) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44005.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args44012 = [];
var len__36363__auto___44015 = arguments.length;
var i__36364__auto___44016 = (0);
while(true){
if((i__36364__auto___44016 < len__36363__auto___44015)){
args44012.push((arguments[i__36364__auto___44016]));

var G__44017 = (i__36364__auto___44016 + (1));
i__36364__auto___44016 = G__44017;
continue;
} else {
}
break;
}

var G__44014 = args44012.length;
switch (G__44014) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44012.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args44019 = [];
var len__36363__auto___44072 = arguments.length;
var i__36364__auto___44073 = (0);
while(true){
if((i__36364__auto___44073 < len__36363__auto___44072)){
args44019.push((arguments[i__36364__auto___44073]));

var G__44074 = (i__36364__auto___44073 + (1));
i__36364__auto___44073 = G__44074;
continue;
} else {
}
break;
}

var G__44021 = args44019.length;
switch (G__44021) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44019.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43390__auto___44076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___44076,tc,fc){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___44076,tc,fc){
return (function (state_44047){
var state_val_44048 = (state_44047[(1)]);
if((state_val_44048 === (7))){
var inst_44043 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
var statearr_44049_44077 = state_44047__$1;
(statearr_44049_44077[(2)] = inst_44043);

(statearr_44049_44077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (1))){
var state_44047__$1 = state_44047;
var statearr_44050_44078 = state_44047__$1;
(statearr_44050_44078[(2)] = null);

(statearr_44050_44078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (4))){
var inst_44024 = (state_44047[(7)]);
var inst_44024__$1 = (state_44047[(2)]);
var inst_44025 = (inst_44024__$1 == null);
var state_44047__$1 = (function (){var statearr_44051 = state_44047;
(statearr_44051[(7)] = inst_44024__$1);

return statearr_44051;
})();
if(cljs.core.truth_(inst_44025)){
var statearr_44052_44079 = state_44047__$1;
(statearr_44052_44079[(1)] = (5));

} else {
var statearr_44053_44080 = state_44047__$1;
(statearr_44053_44080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (13))){
var state_44047__$1 = state_44047;
var statearr_44054_44081 = state_44047__$1;
(statearr_44054_44081[(2)] = null);

(statearr_44054_44081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (6))){
var inst_44024 = (state_44047[(7)]);
var inst_44030 = p.call(null,inst_44024);
var state_44047__$1 = state_44047;
if(cljs.core.truth_(inst_44030)){
var statearr_44055_44082 = state_44047__$1;
(statearr_44055_44082[(1)] = (9));

} else {
var statearr_44056_44083 = state_44047__$1;
(statearr_44056_44083[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (3))){
var inst_44045 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44047__$1,inst_44045);
} else {
if((state_val_44048 === (12))){
var state_44047__$1 = state_44047;
var statearr_44057_44084 = state_44047__$1;
(statearr_44057_44084[(2)] = null);

(statearr_44057_44084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (2))){
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44047__$1,(4),ch);
} else {
if((state_val_44048 === (11))){
var inst_44024 = (state_44047[(7)]);
var inst_44034 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44047__$1,(8),inst_44034,inst_44024);
} else {
if((state_val_44048 === (9))){
var state_44047__$1 = state_44047;
var statearr_44058_44085 = state_44047__$1;
(statearr_44058_44085[(2)] = tc);

(statearr_44058_44085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (5))){
var inst_44027 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44028 = cljs.core.async.close_BANG_.call(null,fc);
var state_44047__$1 = (function (){var statearr_44059 = state_44047;
(statearr_44059[(8)] = inst_44027);

return statearr_44059;
})();
var statearr_44060_44086 = state_44047__$1;
(statearr_44060_44086[(2)] = inst_44028);

(statearr_44060_44086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (14))){
var inst_44041 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
var statearr_44061_44087 = state_44047__$1;
(statearr_44061_44087[(2)] = inst_44041);

(statearr_44061_44087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (10))){
var state_44047__$1 = state_44047;
var statearr_44062_44088 = state_44047__$1;
(statearr_44062_44088[(2)] = fc);

(statearr_44062_44088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (8))){
var inst_44036 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
if(cljs.core.truth_(inst_44036)){
var statearr_44063_44089 = state_44047__$1;
(statearr_44063_44089[(1)] = (12));

} else {
var statearr_44064_44090 = state_44047__$1;
(statearr_44064_44090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___44076,tc,fc))
;
return ((function (switch__43278__auto__,c__43390__auto___44076,tc,fc){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_44068 = [null,null,null,null,null,null,null,null,null];
(statearr_44068[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_44068[(1)] = (1));

return statearr_44068;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_44047){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_44047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e44069){if((e44069 instanceof Object)){
var ex__43282__auto__ = e44069;
var statearr_44070_44091 = state_44047;
(statearr_44070_44091[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44092 = state_44047;
state_44047 = G__44092;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_44047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_44047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___44076,tc,fc))
})();
var state__43392__auto__ = (function (){var statearr_44071 = f__43391__auto__.call(null);
(statearr_44071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___44076);

return statearr_44071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___44076,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto__){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto__){
return (function (state_44156){
var state_val_44157 = (state_44156[(1)]);
if((state_val_44157 === (7))){
var inst_44152 = (state_44156[(2)]);
var state_44156__$1 = state_44156;
var statearr_44158_44179 = state_44156__$1;
(statearr_44158_44179[(2)] = inst_44152);

(statearr_44158_44179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (1))){
var inst_44136 = init;
var state_44156__$1 = (function (){var statearr_44159 = state_44156;
(statearr_44159[(7)] = inst_44136);

return statearr_44159;
})();
var statearr_44160_44180 = state_44156__$1;
(statearr_44160_44180[(2)] = null);

(statearr_44160_44180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (4))){
var inst_44139 = (state_44156[(8)]);
var inst_44139__$1 = (state_44156[(2)]);
var inst_44140 = (inst_44139__$1 == null);
var state_44156__$1 = (function (){var statearr_44161 = state_44156;
(statearr_44161[(8)] = inst_44139__$1);

return statearr_44161;
})();
if(cljs.core.truth_(inst_44140)){
var statearr_44162_44181 = state_44156__$1;
(statearr_44162_44181[(1)] = (5));

} else {
var statearr_44163_44182 = state_44156__$1;
(statearr_44163_44182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (6))){
var inst_44139 = (state_44156[(8)]);
var inst_44136 = (state_44156[(7)]);
var inst_44143 = (state_44156[(9)]);
var inst_44143__$1 = f.call(null,inst_44136,inst_44139);
var inst_44144 = cljs.core.reduced_QMARK_.call(null,inst_44143__$1);
var state_44156__$1 = (function (){var statearr_44164 = state_44156;
(statearr_44164[(9)] = inst_44143__$1);

return statearr_44164;
})();
if(inst_44144){
var statearr_44165_44183 = state_44156__$1;
(statearr_44165_44183[(1)] = (8));

} else {
var statearr_44166_44184 = state_44156__$1;
(statearr_44166_44184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (3))){
var inst_44154 = (state_44156[(2)]);
var state_44156__$1 = state_44156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44156__$1,inst_44154);
} else {
if((state_val_44157 === (2))){
var state_44156__$1 = state_44156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44156__$1,(4),ch);
} else {
if((state_val_44157 === (9))){
var inst_44143 = (state_44156[(9)]);
var inst_44136 = inst_44143;
var state_44156__$1 = (function (){var statearr_44167 = state_44156;
(statearr_44167[(7)] = inst_44136);

return statearr_44167;
})();
var statearr_44168_44185 = state_44156__$1;
(statearr_44168_44185[(2)] = null);

(statearr_44168_44185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (5))){
var inst_44136 = (state_44156[(7)]);
var state_44156__$1 = state_44156;
var statearr_44169_44186 = state_44156__$1;
(statearr_44169_44186[(2)] = inst_44136);

(statearr_44169_44186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (10))){
var inst_44150 = (state_44156[(2)]);
var state_44156__$1 = state_44156;
var statearr_44170_44187 = state_44156__$1;
(statearr_44170_44187[(2)] = inst_44150);

(statearr_44170_44187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44157 === (8))){
var inst_44143 = (state_44156[(9)]);
var inst_44146 = cljs.core.deref.call(null,inst_44143);
var state_44156__$1 = state_44156;
var statearr_44171_44188 = state_44156__$1;
(statearr_44171_44188[(2)] = inst_44146);

(statearr_44171_44188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto__))
;
return ((function (switch__43278__auto__,c__43390__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43279__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43279__auto____0 = (function (){
var statearr_44175 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44175[(0)] = cljs$core$async$reduce_$_state_machine__43279__auto__);

(statearr_44175[(1)] = (1));

return statearr_44175;
});
var cljs$core$async$reduce_$_state_machine__43279__auto____1 = (function (state_44156){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_44156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e44176){if((e44176 instanceof Object)){
var ex__43282__auto__ = e44176;
var statearr_44177_44189 = state_44156;
(statearr_44177_44189[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44190 = state_44156;
state_44156 = G__44190;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43279__auto__ = function(state_44156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43279__auto____1.call(this,state_44156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43279__auto____0;
cljs$core$async$reduce_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43279__auto____1;
return cljs$core$async$reduce_$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto__))
})();
var state__43392__auto__ = (function (){var statearr_44178 = f__43391__auto__.call(null);
(statearr_44178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto__);

return statearr_44178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto__))
);

return c__43390__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto__,f__$1){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto__,f__$1){
return (function (state_44210){
var state_val_44211 = (state_44210[(1)]);
if((state_val_44211 === (1))){
var inst_44205 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44210__$1 = state_44210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44210__$1,(2),inst_44205);
} else {
if((state_val_44211 === (2))){
var inst_44207 = (state_44210[(2)]);
var inst_44208 = f__$1.call(null,inst_44207);
var state_44210__$1 = state_44210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44210__$1,inst_44208);
} else {
return null;
}
}
});})(c__43390__auto__,f__$1))
;
return ((function (switch__43278__auto__,c__43390__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43279__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43279__auto____0 = (function (){
var statearr_44215 = [null,null,null,null,null,null,null];
(statearr_44215[(0)] = cljs$core$async$transduce_$_state_machine__43279__auto__);

(statearr_44215[(1)] = (1));

return statearr_44215;
});
var cljs$core$async$transduce_$_state_machine__43279__auto____1 = (function (state_44210){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_44210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e44216){if((e44216 instanceof Object)){
var ex__43282__auto__ = e44216;
var statearr_44217_44219 = state_44210;
(statearr_44217_44219[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44220 = state_44210;
state_44210 = G__44220;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43279__auto__ = function(state_44210){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43279__auto____1.call(this,state_44210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43279__auto____0;
cljs$core$async$transduce_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43279__auto____1;
return cljs$core$async$transduce_$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto__,f__$1))
})();
var state__43392__auto__ = (function (){var statearr_44218 = f__43391__auto__.call(null);
(statearr_44218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto__);

return statearr_44218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto__,f__$1))
);

return c__43390__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args44221 = [];
var len__36363__auto___44273 = arguments.length;
var i__36364__auto___44274 = (0);
while(true){
if((i__36364__auto___44274 < len__36363__auto___44273)){
args44221.push((arguments[i__36364__auto___44274]));

var G__44275 = (i__36364__auto___44274 + (1));
i__36364__auto___44274 = G__44275;
continue;
} else {
}
break;
}

var G__44223 = args44221.length;
switch (G__44223) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44221.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto__){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto__){
return (function (state_44248){
var state_val_44249 = (state_44248[(1)]);
if((state_val_44249 === (7))){
var inst_44230 = (state_44248[(2)]);
var state_44248__$1 = state_44248;
var statearr_44250_44277 = state_44248__$1;
(statearr_44250_44277[(2)] = inst_44230);

(statearr_44250_44277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (1))){
var inst_44224 = cljs.core.seq.call(null,coll);
var inst_44225 = inst_44224;
var state_44248__$1 = (function (){var statearr_44251 = state_44248;
(statearr_44251[(7)] = inst_44225);

return statearr_44251;
})();
var statearr_44252_44278 = state_44248__$1;
(statearr_44252_44278[(2)] = null);

(statearr_44252_44278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (4))){
var inst_44225 = (state_44248[(7)]);
var inst_44228 = cljs.core.first.call(null,inst_44225);
var state_44248__$1 = state_44248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44248__$1,(7),ch,inst_44228);
} else {
if((state_val_44249 === (13))){
var inst_44242 = (state_44248[(2)]);
var state_44248__$1 = state_44248;
var statearr_44253_44279 = state_44248__$1;
(statearr_44253_44279[(2)] = inst_44242);

(statearr_44253_44279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (6))){
var inst_44233 = (state_44248[(2)]);
var state_44248__$1 = state_44248;
if(cljs.core.truth_(inst_44233)){
var statearr_44254_44280 = state_44248__$1;
(statearr_44254_44280[(1)] = (8));

} else {
var statearr_44255_44281 = state_44248__$1;
(statearr_44255_44281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (3))){
var inst_44246 = (state_44248[(2)]);
var state_44248__$1 = state_44248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44248__$1,inst_44246);
} else {
if((state_val_44249 === (12))){
var state_44248__$1 = state_44248;
var statearr_44256_44282 = state_44248__$1;
(statearr_44256_44282[(2)] = null);

(statearr_44256_44282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (2))){
var inst_44225 = (state_44248[(7)]);
var state_44248__$1 = state_44248;
if(cljs.core.truth_(inst_44225)){
var statearr_44257_44283 = state_44248__$1;
(statearr_44257_44283[(1)] = (4));

} else {
var statearr_44258_44284 = state_44248__$1;
(statearr_44258_44284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (11))){
var inst_44239 = cljs.core.async.close_BANG_.call(null,ch);
var state_44248__$1 = state_44248;
var statearr_44259_44285 = state_44248__$1;
(statearr_44259_44285[(2)] = inst_44239);

(statearr_44259_44285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (9))){
var state_44248__$1 = state_44248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44260_44286 = state_44248__$1;
(statearr_44260_44286[(1)] = (11));

} else {
var statearr_44261_44287 = state_44248__$1;
(statearr_44261_44287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (5))){
var inst_44225 = (state_44248[(7)]);
var state_44248__$1 = state_44248;
var statearr_44262_44288 = state_44248__$1;
(statearr_44262_44288[(2)] = inst_44225);

(statearr_44262_44288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (10))){
var inst_44244 = (state_44248[(2)]);
var state_44248__$1 = state_44248;
var statearr_44263_44289 = state_44248__$1;
(statearr_44263_44289[(2)] = inst_44244);

(statearr_44263_44289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44249 === (8))){
var inst_44225 = (state_44248[(7)]);
var inst_44235 = cljs.core.next.call(null,inst_44225);
var inst_44225__$1 = inst_44235;
var state_44248__$1 = (function (){var statearr_44264 = state_44248;
(statearr_44264[(7)] = inst_44225__$1);

return statearr_44264;
})();
var statearr_44265_44290 = state_44248__$1;
(statearr_44265_44290[(2)] = null);

(statearr_44265_44290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto__))
;
return ((function (switch__43278__auto__,c__43390__auto__){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_44269 = [null,null,null,null,null,null,null,null];
(statearr_44269[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_44269[(1)] = (1));

return statearr_44269;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_44248){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_44248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e44270){if((e44270 instanceof Object)){
var ex__43282__auto__ = e44270;
var statearr_44271_44291 = state_44248;
(statearr_44271_44291[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44292 = state_44248;
state_44248 = G__44292;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_44248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_44248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto__))
})();
var state__43392__auto__ = (function (){var statearr_44272 = f__43391__auto__.call(null);
(statearr_44272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto__);

return statearr_44272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto__))
);

return c__43390__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__35918__auto__ = (((_ == null))?null:_);
var m__35919__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,_);
} else {
var m__35919__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35919__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,ch);
} else {
var m__35919__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m);
} else {
var m__35919__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44518 = (function (ch,cs,meta44519){
this.ch = ch;
this.cs = cs;
this.meta44519 = meta44519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44520,meta44519__$1){
var self__ = this;
var _44520__$1 = this;
return (new cljs.core.async.t_cljs$core$async44518(self__.ch,self__.cs,meta44519__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44520){
var self__ = this;
var _44520__$1 = this;
return self__.meta44519;
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44519","meta44519",-607325343,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44518";

cljs.core.async.t_cljs$core$async44518.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async44518");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44518 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44518(ch__$1,cs__$1,meta44519){
return (new cljs.core.async.t_cljs$core$async44518(ch__$1,cs__$1,meta44519));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44518(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43390__auto___44743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___44743,cs,m,dchan,dctr,done){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___44743,cs,m,dchan,dctr,done){
return (function (state_44655){
var state_val_44656 = (state_44655[(1)]);
if((state_val_44656 === (7))){
var inst_44651 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44657_44744 = state_44655__$1;
(statearr_44657_44744[(2)] = inst_44651);

(statearr_44657_44744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (20))){
var inst_44554 = (state_44655[(7)]);
var inst_44566 = cljs.core.first.call(null,inst_44554);
var inst_44567 = cljs.core.nth.call(null,inst_44566,(0),null);
var inst_44568 = cljs.core.nth.call(null,inst_44566,(1),null);
var state_44655__$1 = (function (){var statearr_44658 = state_44655;
(statearr_44658[(8)] = inst_44567);

return statearr_44658;
})();
if(cljs.core.truth_(inst_44568)){
var statearr_44659_44745 = state_44655__$1;
(statearr_44659_44745[(1)] = (22));

} else {
var statearr_44660_44746 = state_44655__$1;
(statearr_44660_44746[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (27))){
var inst_44598 = (state_44655[(9)]);
var inst_44596 = (state_44655[(10)]);
var inst_44523 = (state_44655[(11)]);
var inst_44603 = (state_44655[(12)]);
var inst_44603__$1 = cljs.core._nth.call(null,inst_44596,inst_44598);
var inst_44604 = cljs.core.async.put_BANG_.call(null,inst_44603__$1,inst_44523,done);
var state_44655__$1 = (function (){var statearr_44661 = state_44655;
(statearr_44661[(12)] = inst_44603__$1);

return statearr_44661;
})();
if(cljs.core.truth_(inst_44604)){
var statearr_44662_44747 = state_44655__$1;
(statearr_44662_44747[(1)] = (30));

} else {
var statearr_44663_44748 = state_44655__$1;
(statearr_44663_44748[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (1))){
var state_44655__$1 = state_44655;
var statearr_44664_44749 = state_44655__$1;
(statearr_44664_44749[(2)] = null);

(statearr_44664_44749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (24))){
var inst_44554 = (state_44655[(7)]);
var inst_44573 = (state_44655[(2)]);
var inst_44574 = cljs.core.next.call(null,inst_44554);
var inst_44532 = inst_44574;
var inst_44533 = null;
var inst_44534 = (0);
var inst_44535 = (0);
var state_44655__$1 = (function (){var statearr_44665 = state_44655;
(statearr_44665[(13)] = inst_44535);

(statearr_44665[(14)] = inst_44534);

(statearr_44665[(15)] = inst_44532);

(statearr_44665[(16)] = inst_44533);

(statearr_44665[(17)] = inst_44573);

return statearr_44665;
})();
var statearr_44666_44750 = state_44655__$1;
(statearr_44666_44750[(2)] = null);

(statearr_44666_44750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (39))){
var state_44655__$1 = state_44655;
var statearr_44670_44751 = state_44655__$1;
(statearr_44670_44751[(2)] = null);

(statearr_44670_44751[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (4))){
var inst_44523 = (state_44655[(11)]);
var inst_44523__$1 = (state_44655[(2)]);
var inst_44524 = (inst_44523__$1 == null);
var state_44655__$1 = (function (){var statearr_44671 = state_44655;
(statearr_44671[(11)] = inst_44523__$1);

return statearr_44671;
})();
if(cljs.core.truth_(inst_44524)){
var statearr_44672_44752 = state_44655__$1;
(statearr_44672_44752[(1)] = (5));

} else {
var statearr_44673_44753 = state_44655__$1;
(statearr_44673_44753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (15))){
var inst_44535 = (state_44655[(13)]);
var inst_44534 = (state_44655[(14)]);
var inst_44532 = (state_44655[(15)]);
var inst_44533 = (state_44655[(16)]);
var inst_44550 = (state_44655[(2)]);
var inst_44551 = (inst_44535 + (1));
var tmp44667 = inst_44534;
var tmp44668 = inst_44532;
var tmp44669 = inst_44533;
var inst_44532__$1 = tmp44668;
var inst_44533__$1 = tmp44669;
var inst_44534__$1 = tmp44667;
var inst_44535__$1 = inst_44551;
var state_44655__$1 = (function (){var statearr_44674 = state_44655;
(statearr_44674[(13)] = inst_44535__$1);

(statearr_44674[(14)] = inst_44534__$1);

(statearr_44674[(15)] = inst_44532__$1);

(statearr_44674[(18)] = inst_44550);

(statearr_44674[(16)] = inst_44533__$1);

return statearr_44674;
})();
var statearr_44675_44754 = state_44655__$1;
(statearr_44675_44754[(2)] = null);

(statearr_44675_44754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (21))){
var inst_44577 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44679_44755 = state_44655__$1;
(statearr_44679_44755[(2)] = inst_44577);

(statearr_44679_44755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (31))){
var inst_44603 = (state_44655[(12)]);
var inst_44607 = done.call(null,null);
var inst_44608 = cljs.core.async.untap_STAR_.call(null,m,inst_44603);
var state_44655__$1 = (function (){var statearr_44680 = state_44655;
(statearr_44680[(19)] = inst_44607);

return statearr_44680;
})();
var statearr_44681_44756 = state_44655__$1;
(statearr_44681_44756[(2)] = inst_44608);

(statearr_44681_44756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (32))){
var inst_44598 = (state_44655[(9)]);
var inst_44596 = (state_44655[(10)]);
var inst_44597 = (state_44655[(20)]);
var inst_44595 = (state_44655[(21)]);
var inst_44610 = (state_44655[(2)]);
var inst_44611 = (inst_44598 + (1));
var tmp44676 = inst_44596;
var tmp44677 = inst_44597;
var tmp44678 = inst_44595;
var inst_44595__$1 = tmp44678;
var inst_44596__$1 = tmp44676;
var inst_44597__$1 = tmp44677;
var inst_44598__$1 = inst_44611;
var state_44655__$1 = (function (){var statearr_44682 = state_44655;
(statearr_44682[(9)] = inst_44598__$1);

(statearr_44682[(22)] = inst_44610);

(statearr_44682[(10)] = inst_44596__$1);

(statearr_44682[(20)] = inst_44597__$1);

(statearr_44682[(21)] = inst_44595__$1);

return statearr_44682;
})();
var statearr_44683_44757 = state_44655__$1;
(statearr_44683_44757[(2)] = null);

(statearr_44683_44757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (40))){
var inst_44623 = (state_44655[(23)]);
var inst_44627 = done.call(null,null);
var inst_44628 = cljs.core.async.untap_STAR_.call(null,m,inst_44623);
var state_44655__$1 = (function (){var statearr_44684 = state_44655;
(statearr_44684[(24)] = inst_44627);

return statearr_44684;
})();
var statearr_44685_44758 = state_44655__$1;
(statearr_44685_44758[(2)] = inst_44628);

(statearr_44685_44758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (33))){
var inst_44614 = (state_44655[(25)]);
var inst_44616 = cljs.core.chunked_seq_QMARK_.call(null,inst_44614);
var state_44655__$1 = state_44655;
if(inst_44616){
var statearr_44686_44759 = state_44655__$1;
(statearr_44686_44759[(1)] = (36));

} else {
var statearr_44687_44760 = state_44655__$1;
(statearr_44687_44760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (13))){
var inst_44544 = (state_44655[(26)]);
var inst_44547 = cljs.core.async.close_BANG_.call(null,inst_44544);
var state_44655__$1 = state_44655;
var statearr_44688_44761 = state_44655__$1;
(statearr_44688_44761[(2)] = inst_44547);

(statearr_44688_44761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (22))){
var inst_44567 = (state_44655[(8)]);
var inst_44570 = cljs.core.async.close_BANG_.call(null,inst_44567);
var state_44655__$1 = state_44655;
var statearr_44689_44762 = state_44655__$1;
(statearr_44689_44762[(2)] = inst_44570);

(statearr_44689_44762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (36))){
var inst_44614 = (state_44655[(25)]);
var inst_44618 = cljs.core.chunk_first.call(null,inst_44614);
var inst_44619 = cljs.core.chunk_rest.call(null,inst_44614);
var inst_44620 = cljs.core.count.call(null,inst_44618);
var inst_44595 = inst_44619;
var inst_44596 = inst_44618;
var inst_44597 = inst_44620;
var inst_44598 = (0);
var state_44655__$1 = (function (){var statearr_44690 = state_44655;
(statearr_44690[(9)] = inst_44598);

(statearr_44690[(10)] = inst_44596);

(statearr_44690[(20)] = inst_44597);

(statearr_44690[(21)] = inst_44595);

return statearr_44690;
})();
var statearr_44691_44763 = state_44655__$1;
(statearr_44691_44763[(2)] = null);

(statearr_44691_44763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (41))){
var inst_44614 = (state_44655[(25)]);
var inst_44630 = (state_44655[(2)]);
var inst_44631 = cljs.core.next.call(null,inst_44614);
var inst_44595 = inst_44631;
var inst_44596 = null;
var inst_44597 = (0);
var inst_44598 = (0);
var state_44655__$1 = (function (){var statearr_44692 = state_44655;
(statearr_44692[(9)] = inst_44598);

(statearr_44692[(27)] = inst_44630);

(statearr_44692[(10)] = inst_44596);

(statearr_44692[(20)] = inst_44597);

(statearr_44692[(21)] = inst_44595);

return statearr_44692;
})();
var statearr_44693_44764 = state_44655__$1;
(statearr_44693_44764[(2)] = null);

(statearr_44693_44764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (43))){
var state_44655__$1 = state_44655;
var statearr_44694_44765 = state_44655__$1;
(statearr_44694_44765[(2)] = null);

(statearr_44694_44765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (29))){
var inst_44639 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44695_44766 = state_44655__$1;
(statearr_44695_44766[(2)] = inst_44639);

(statearr_44695_44766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (44))){
var inst_44648 = (state_44655[(2)]);
var state_44655__$1 = (function (){var statearr_44696 = state_44655;
(statearr_44696[(28)] = inst_44648);

return statearr_44696;
})();
var statearr_44697_44767 = state_44655__$1;
(statearr_44697_44767[(2)] = null);

(statearr_44697_44767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (6))){
var inst_44587 = (state_44655[(29)]);
var inst_44586 = cljs.core.deref.call(null,cs);
var inst_44587__$1 = cljs.core.keys.call(null,inst_44586);
var inst_44588 = cljs.core.count.call(null,inst_44587__$1);
var inst_44589 = cljs.core.reset_BANG_.call(null,dctr,inst_44588);
var inst_44594 = cljs.core.seq.call(null,inst_44587__$1);
var inst_44595 = inst_44594;
var inst_44596 = null;
var inst_44597 = (0);
var inst_44598 = (0);
var state_44655__$1 = (function (){var statearr_44698 = state_44655;
(statearr_44698[(30)] = inst_44589);

(statearr_44698[(9)] = inst_44598);

(statearr_44698[(29)] = inst_44587__$1);

(statearr_44698[(10)] = inst_44596);

(statearr_44698[(20)] = inst_44597);

(statearr_44698[(21)] = inst_44595);

return statearr_44698;
})();
var statearr_44699_44768 = state_44655__$1;
(statearr_44699_44768[(2)] = null);

(statearr_44699_44768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (28))){
var inst_44614 = (state_44655[(25)]);
var inst_44595 = (state_44655[(21)]);
var inst_44614__$1 = cljs.core.seq.call(null,inst_44595);
var state_44655__$1 = (function (){var statearr_44700 = state_44655;
(statearr_44700[(25)] = inst_44614__$1);

return statearr_44700;
})();
if(inst_44614__$1){
var statearr_44701_44769 = state_44655__$1;
(statearr_44701_44769[(1)] = (33));

} else {
var statearr_44702_44770 = state_44655__$1;
(statearr_44702_44770[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (25))){
var inst_44598 = (state_44655[(9)]);
var inst_44597 = (state_44655[(20)]);
var inst_44600 = (inst_44598 < inst_44597);
var inst_44601 = inst_44600;
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44601)){
var statearr_44703_44771 = state_44655__$1;
(statearr_44703_44771[(1)] = (27));

} else {
var statearr_44704_44772 = state_44655__$1;
(statearr_44704_44772[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (34))){
var state_44655__$1 = state_44655;
var statearr_44705_44773 = state_44655__$1;
(statearr_44705_44773[(2)] = null);

(statearr_44705_44773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (17))){
var state_44655__$1 = state_44655;
var statearr_44706_44774 = state_44655__$1;
(statearr_44706_44774[(2)] = null);

(statearr_44706_44774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (3))){
var inst_44653 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44655__$1,inst_44653);
} else {
if((state_val_44656 === (12))){
var inst_44582 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44707_44775 = state_44655__$1;
(statearr_44707_44775[(2)] = inst_44582);

(statearr_44707_44775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (2))){
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44655__$1,(4),ch);
} else {
if((state_val_44656 === (23))){
var state_44655__$1 = state_44655;
var statearr_44708_44776 = state_44655__$1;
(statearr_44708_44776[(2)] = null);

(statearr_44708_44776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (35))){
var inst_44637 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44709_44777 = state_44655__$1;
(statearr_44709_44777[(2)] = inst_44637);

(statearr_44709_44777[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (19))){
var inst_44554 = (state_44655[(7)]);
var inst_44558 = cljs.core.chunk_first.call(null,inst_44554);
var inst_44559 = cljs.core.chunk_rest.call(null,inst_44554);
var inst_44560 = cljs.core.count.call(null,inst_44558);
var inst_44532 = inst_44559;
var inst_44533 = inst_44558;
var inst_44534 = inst_44560;
var inst_44535 = (0);
var state_44655__$1 = (function (){var statearr_44710 = state_44655;
(statearr_44710[(13)] = inst_44535);

(statearr_44710[(14)] = inst_44534);

(statearr_44710[(15)] = inst_44532);

(statearr_44710[(16)] = inst_44533);

return statearr_44710;
})();
var statearr_44711_44778 = state_44655__$1;
(statearr_44711_44778[(2)] = null);

(statearr_44711_44778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (11))){
var inst_44554 = (state_44655[(7)]);
var inst_44532 = (state_44655[(15)]);
var inst_44554__$1 = cljs.core.seq.call(null,inst_44532);
var state_44655__$1 = (function (){var statearr_44712 = state_44655;
(statearr_44712[(7)] = inst_44554__$1);

return statearr_44712;
})();
if(inst_44554__$1){
var statearr_44713_44779 = state_44655__$1;
(statearr_44713_44779[(1)] = (16));

} else {
var statearr_44714_44780 = state_44655__$1;
(statearr_44714_44780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (9))){
var inst_44584 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44715_44781 = state_44655__$1;
(statearr_44715_44781[(2)] = inst_44584);

(statearr_44715_44781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (5))){
var inst_44530 = cljs.core.deref.call(null,cs);
var inst_44531 = cljs.core.seq.call(null,inst_44530);
var inst_44532 = inst_44531;
var inst_44533 = null;
var inst_44534 = (0);
var inst_44535 = (0);
var state_44655__$1 = (function (){var statearr_44716 = state_44655;
(statearr_44716[(13)] = inst_44535);

(statearr_44716[(14)] = inst_44534);

(statearr_44716[(15)] = inst_44532);

(statearr_44716[(16)] = inst_44533);

return statearr_44716;
})();
var statearr_44717_44782 = state_44655__$1;
(statearr_44717_44782[(2)] = null);

(statearr_44717_44782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (14))){
var state_44655__$1 = state_44655;
var statearr_44718_44783 = state_44655__$1;
(statearr_44718_44783[(2)] = null);

(statearr_44718_44783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (45))){
var inst_44645 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44719_44784 = state_44655__$1;
(statearr_44719_44784[(2)] = inst_44645);

(statearr_44719_44784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (26))){
var inst_44587 = (state_44655[(29)]);
var inst_44641 = (state_44655[(2)]);
var inst_44642 = cljs.core.seq.call(null,inst_44587);
var state_44655__$1 = (function (){var statearr_44720 = state_44655;
(statearr_44720[(31)] = inst_44641);

return statearr_44720;
})();
if(inst_44642){
var statearr_44721_44785 = state_44655__$1;
(statearr_44721_44785[(1)] = (42));

} else {
var statearr_44722_44786 = state_44655__$1;
(statearr_44722_44786[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (16))){
var inst_44554 = (state_44655[(7)]);
var inst_44556 = cljs.core.chunked_seq_QMARK_.call(null,inst_44554);
var state_44655__$1 = state_44655;
if(inst_44556){
var statearr_44723_44787 = state_44655__$1;
(statearr_44723_44787[(1)] = (19));

} else {
var statearr_44724_44788 = state_44655__$1;
(statearr_44724_44788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (38))){
var inst_44634 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44725_44789 = state_44655__$1;
(statearr_44725_44789[(2)] = inst_44634);

(statearr_44725_44789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (30))){
var state_44655__$1 = state_44655;
var statearr_44726_44790 = state_44655__$1;
(statearr_44726_44790[(2)] = null);

(statearr_44726_44790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (10))){
var inst_44535 = (state_44655[(13)]);
var inst_44533 = (state_44655[(16)]);
var inst_44543 = cljs.core._nth.call(null,inst_44533,inst_44535);
var inst_44544 = cljs.core.nth.call(null,inst_44543,(0),null);
var inst_44545 = cljs.core.nth.call(null,inst_44543,(1),null);
var state_44655__$1 = (function (){var statearr_44727 = state_44655;
(statearr_44727[(26)] = inst_44544);

return statearr_44727;
})();
if(cljs.core.truth_(inst_44545)){
var statearr_44728_44791 = state_44655__$1;
(statearr_44728_44791[(1)] = (13));

} else {
var statearr_44729_44792 = state_44655__$1;
(statearr_44729_44792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (18))){
var inst_44580 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44730_44793 = state_44655__$1;
(statearr_44730_44793[(2)] = inst_44580);

(statearr_44730_44793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (42))){
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44655__$1,(45),dchan);
} else {
if((state_val_44656 === (37))){
var inst_44614 = (state_44655[(25)]);
var inst_44623 = (state_44655[(23)]);
var inst_44523 = (state_44655[(11)]);
var inst_44623__$1 = cljs.core.first.call(null,inst_44614);
var inst_44624 = cljs.core.async.put_BANG_.call(null,inst_44623__$1,inst_44523,done);
var state_44655__$1 = (function (){var statearr_44731 = state_44655;
(statearr_44731[(23)] = inst_44623__$1);

return statearr_44731;
})();
if(cljs.core.truth_(inst_44624)){
var statearr_44732_44794 = state_44655__$1;
(statearr_44732_44794[(1)] = (39));

} else {
var statearr_44733_44795 = state_44655__$1;
(statearr_44733_44795[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (8))){
var inst_44535 = (state_44655[(13)]);
var inst_44534 = (state_44655[(14)]);
var inst_44537 = (inst_44535 < inst_44534);
var inst_44538 = inst_44537;
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44538)){
var statearr_44734_44796 = state_44655__$1;
(statearr_44734_44796[(1)] = (10));

} else {
var statearr_44735_44797 = state_44655__$1;
(statearr_44735_44797[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___44743,cs,m,dchan,dctr,done))
;
return ((function (switch__43278__auto__,c__43390__auto___44743,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43279__auto__ = null;
var cljs$core$async$mult_$_state_machine__43279__auto____0 = (function (){
var statearr_44739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44739[(0)] = cljs$core$async$mult_$_state_machine__43279__auto__);

(statearr_44739[(1)] = (1));

return statearr_44739;
});
var cljs$core$async$mult_$_state_machine__43279__auto____1 = (function (state_44655){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_44655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e44740){if((e44740 instanceof Object)){
var ex__43282__auto__ = e44740;
var statearr_44741_44798 = state_44655;
(statearr_44741_44798[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44799 = state_44655;
state_44655 = G__44799;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43279__auto__ = function(state_44655){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43279__auto____1.call(this,state_44655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43279__auto____0;
cljs$core$async$mult_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43279__auto____1;
return cljs$core$async$mult_$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___44743,cs,m,dchan,dctr,done))
})();
var state__43392__auto__ = (function (){var statearr_44742 = f__43391__auto__.call(null);
(statearr_44742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___44743);

return statearr_44742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___44743,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args44800 = [];
var len__36363__auto___44803 = arguments.length;
var i__36364__auto___44804 = (0);
while(true){
if((i__36364__auto___44804 < len__36363__auto___44803)){
args44800.push((arguments[i__36364__auto___44804]));

var G__44805 = (i__36364__auto___44804 + (1));
i__36364__auto___44804 = G__44805;
continue;
} else {
}
break;
}

var G__44802 = args44800.length;
switch (G__44802) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44800.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,ch);
} else {
var m__35919__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,ch);
} else {
var m__35919__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m);
} else {
var m__35919__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,state_map);
} else {
var m__35919__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__35918__auto__ = (((m == null))?null:m);
var m__35919__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,m,mode);
} else {
var m__35919__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36370__auto__ = [];
var len__36363__auto___44817 = arguments.length;
var i__36364__auto___44818 = (0);
while(true){
if((i__36364__auto___44818 < len__36363__auto___44817)){
args__36370__auto__.push((arguments[i__36364__auto___44818]));

var G__44819 = (i__36364__auto___44818 + (1));
i__36364__auto___44818 = G__44819;
continue;
} else {
}
break;
}

var argseq__36371__auto__ = ((((3) < args__36370__auto__.length))?(new cljs.core.IndexedSeq(args__36370__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36371__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44811){
var map__44812 = p__44811;
var map__44812__$1 = ((((!((map__44812 == null)))?((((map__44812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44812):map__44812);
var opts = map__44812__$1;
var statearr_44814_44820 = state;
(statearr_44814_44820[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44812,map__44812__$1,opts){
return (function (val){
var statearr_44815_44821 = state;
(statearr_44815_44821[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44812,map__44812__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44816_44822 = state;
(statearr_44816_44822[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44807){
var G__44808 = cljs.core.first.call(null,seq44807);
var seq44807__$1 = cljs.core.next.call(null,seq44807);
var G__44809 = cljs.core.first.call(null,seq44807__$1);
var seq44807__$2 = cljs.core.next.call(null,seq44807__$1);
var G__44810 = cljs.core.first.call(null,seq44807__$2);
var seq44807__$3 = cljs.core.next.call(null,seq44807__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44808,G__44809,G__44810,seq44807__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44990 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44991){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44991 = meta44991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44992,meta44991__$1){
var self__ = this;
var _44992__$1 = this;
return (new cljs.core.async.t_cljs$core$async44990(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44991__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44992){
var self__ = this;
var _44992__$1 = this;
return self__.meta44991;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44991","meta44991",-109345035,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44990";

cljs.core.async.t_cljs$core$async44990.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async44990");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44990 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44990(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44991){
return (new cljs.core.async.t_cljs$core$async44990(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44991));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44990(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43390__auto___45157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45094){
var state_val_45095 = (state_45094[(1)]);
if((state_val_45095 === (7))){
var inst_45009 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45096_45158 = state_45094__$1;
(statearr_45096_45158[(2)] = inst_45009);

(statearr_45096_45158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (20))){
var inst_45021 = (state_45094[(7)]);
var state_45094__$1 = state_45094;
var statearr_45097_45159 = state_45094__$1;
(statearr_45097_45159[(2)] = inst_45021);

(statearr_45097_45159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (27))){
var state_45094__$1 = state_45094;
var statearr_45098_45160 = state_45094__$1;
(statearr_45098_45160[(2)] = null);

(statearr_45098_45160[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (1))){
var inst_44996 = (state_45094[(8)]);
var inst_44996__$1 = calc_state.call(null);
var inst_44998 = (inst_44996__$1 == null);
var inst_44999 = cljs.core.not.call(null,inst_44998);
var state_45094__$1 = (function (){var statearr_45099 = state_45094;
(statearr_45099[(8)] = inst_44996__$1);

return statearr_45099;
})();
if(inst_44999){
var statearr_45100_45161 = state_45094__$1;
(statearr_45100_45161[(1)] = (2));

} else {
var statearr_45101_45162 = state_45094__$1;
(statearr_45101_45162[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (24))){
var inst_45045 = (state_45094[(9)]);
var inst_45054 = (state_45094[(10)]);
var inst_45068 = (state_45094[(11)]);
var inst_45068__$1 = inst_45045.call(null,inst_45054);
var state_45094__$1 = (function (){var statearr_45102 = state_45094;
(statearr_45102[(11)] = inst_45068__$1);

return statearr_45102;
})();
if(cljs.core.truth_(inst_45068__$1)){
var statearr_45103_45163 = state_45094__$1;
(statearr_45103_45163[(1)] = (29));

} else {
var statearr_45104_45164 = state_45094__$1;
(statearr_45104_45164[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (4))){
var inst_45012 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45012)){
var statearr_45105_45165 = state_45094__$1;
(statearr_45105_45165[(1)] = (8));

} else {
var statearr_45106_45166 = state_45094__$1;
(statearr_45106_45166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (15))){
var inst_45039 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45039)){
var statearr_45107_45167 = state_45094__$1;
(statearr_45107_45167[(1)] = (19));

} else {
var statearr_45108_45168 = state_45094__$1;
(statearr_45108_45168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (21))){
var inst_45044 = (state_45094[(12)]);
var inst_45044__$1 = (state_45094[(2)]);
var inst_45045 = cljs.core.get.call(null,inst_45044__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45046 = cljs.core.get.call(null,inst_45044__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45047 = cljs.core.get.call(null,inst_45044__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45094__$1 = (function (){var statearr_45109 = state_45094;
(statearr_45109[(13)] = inst_45046);

(statearr_45109[(9)] = inst_45045);

(statearr_45109[(12)] = inst_45044__$1);

return statearr_45109;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45094__$1,(22),inst_45047);
} else {
if((state_val_45095 === (31))){
var inst_45076 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45076)){
var statearr_45110_45169 = state_45094__$1;
(statearr_45110_45169[(1)] = (32));

} else {
var statearr_45111_45170 = state_45094__$1;
(statearr_45111_45170[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (32))){
var inst_45053 = (state_45094[(14)]);
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45094__$1,(35),out,inst_45053);
} else {
if((state_val_45095 === (33))){
var inst_45044 = (state_45094[(12)]);
var inst_45021 = inst_45044;
var state_45094__$1 = (function (){var statearr_45112 = state_45094;
(statearr_45112[(7)] = inst_45021);

return statearr_45112;
})();
var statearr_45113_45171 = state_45094__$1;
(statearr_45113_45171[(2)] = null);

(statearr_45113_45171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (13))){
var inst_45021 = (state_45094[(7)]);
var inst_45028 = inst_45021.cljs$lang$protocol_mask$partition0$;
var inst_45029 = (inst_45028 & (64));
var inst_45030 = inst_45021.cljs$core$ISeq$;
var inst_45031 = (cljs.core.PROTOCOL_SENTINEL === inst_45030);
var inst_45032 = (inst_45029) || (inst_45031);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45032)){
var statearr_45114_45172 = state_45094__$1;
(statearr_45114_45172[(1)] = (16));

} else {
var statearr_45115_45173 = state_45094__$1;
(statearr_45115_45173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (22))){
var inst_45053 = (state_45094[(14)]);
var inst_45054 = (state_45094[(10)]);
var inst_45052 = (state_45094[(2)]);
var inst_45053__$1 = cljs.core.nth.call(null,inst_45052,(0),null);
var inst_45054__$1 = cljs.core.nth.call(null,inst_45052,(1),null);
var inst_45055 = (inst_45053__$1 == null);
var inst_45056 = cljs.core._EQ_.call(null,inst_45054__$1,change);
var inst_45057 = (inst_45055) || (inst_45056);
var state_45094__$1 = (function (){var statearr_45116 = state_45094;
(statearr_45116[(14)] = inst_45053__$1);

(statearr_45116[(10)] = inst_45054__$1);

return statearr_45116;
})();
if(cljs.core.truth_(inst_45057)){
var statearr_45117_45174 = state_45094__$1;
(statearr_45117_45174[(1)] = (23));

} else {
var statearr_45118_45175 = state_45094__$1;
(statearr_45118_45175[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (36))){
var inst_45044 = (state_45094[(12)]);
var inst_45021 = inst_45044;
var state_45094__$1 = (function (){var statearr_45119 = state_45094;
(statearr_45119[(7)] = inst_45021);

return statearr_45119;
})();
var statearr_45120_45176 = state_45094__$1;
(statearr_45120_45176[(2)] = null);

(statearr_45120_45176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (29))){
var inst_45068 = (state_45094[(11)]);
var state_45094__$1 = state_45094;
var statearr_45121_45177 = state_45094__$1;
(statearr_45121_45177[(2)] = inst_45068);

(statearr_45121_45177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (6))){
var state_45094__$1 = state_45094;
var statearr_45122_45178 = state_45094__$1;
(statearr_45122_45178[(2)] = false);

(statearr_45122_45178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (28))){
var inst_45064 = (state_45094[(2)]);
var inst_45065 = calc_state.call(null);
var inst_45021 = inst_45065;
var state_45094__$1 = (function (){var statearr_45123 = state_45094;
(statearr_45123[(15)] = inst_45064);

(statearr_45123[(7)] = inst_45021);

return statearr_45123;
})();
var statearr_45124_45179 = state_45094__$1;
(statearr_45124_45179[(2)] = null);

(statearr_45124_45179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (25))){
var inst_45090 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45125_45180 = state_45094__$1;
(statearr_45125_45180[(2)] = inst_45090);

(statearr_45125_45180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (34))){
var inst_45088 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45126_45181 = state_45094__$1;
(statearr_45126_45181[(2)] = inst_45088);

(statearr_45126_45181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (17))){
var state_45094__$1 = state_45094;
var statearr_45127_45182 = state_45094__$1;
(statearr_45127_45182[(2)] = false);

(statearr_45127_45182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (3))){
var state_45094__$1 = state_45094;
var statearr_45128_45183 = state_45094__$1;
(statearr_45128_45183[(2)] = false);

(statearr_45128_45183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (12))){
var inst_45092 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45094__$1,inst_45092);
} else {
if((state_val_45095 === (2))){
var inst_44996 = (state_45094[(8)]);
var inst_45001 = inst_44996.cljs$lang$protocol_mask$partition0$;
var inst_45002 = (inst_45001 & (64));
var inst_45003 = inst_44996.cljs$core$ISeq$;
var inst_45004 = (cljs.core.PROTOCOL_SENTINEL === inst_45003);
var inst_45005 = (inst_45002) || (inst_45004);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45005)){
var statearr_45129_45184 = state_45094__$1;
(statearr_45129_45184[(1)] = (5));

} else {
var statearr_45130_45185 = state_45094__$1;
(statearr_45130_45185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (23))){
var inst_45053 = (state_45094[(14)]);
var inst_45059 = (inst_45053 == null);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45059)){
var statearr_45131_45186 = state_45094__$1;
(statearr_45131_45186[(1)] = (26));

} else {
var statearr_45132_45187 = state_45094__$1;
(statearr_45132_45187[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (35))){
var inst_45079 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
if(cljs.core.truth_(inst_45079)){
var statearr_45133_45188 = state_45094__$1;
(statearr_45133_45188[(1)] = (36));

} else {
var statearr_45134_45189 = state_45094__$1;
(statearr_45134_45189[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (19))){
var inst_45021 = (state_45094[(7)]);
var inst_45041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45021);
var state_45094__$1 = state_45094;
var statearr_45135_45190 = state_45094__$1;
(statearr_45135_45190[(2)] = inst_45041);

(statearr_45135_45190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (11))){
var inst_45021 = (state_45094[(7)]);
var inst_45025 = (inst_45021 == null);
var inst_45026 = cljs.core.not.call(null,inst_45025);
var state_45094__$1 = state_45094;
if(inst_45026){
var statearr_45136_45191 = state_45094__$1;
(statearr_45136_45191[(1)] = (13));

} else {
var statearr_45137_45192 = state_45094__$1;
(statearr_45137_45192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (9))){
var inst_44996 = (state_45094[(8)]);
var state_45094__$1 = state_45094;
var statearr_45138_45193 = state_45094__$1;
(statearr_45138_45193[(2)] = inst_44996);

(statearr_45138_45193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (5))){
var state_45094__$1 = state_45094;
var statearr_45139_45194 = state_45094__$1;
(statearr_45139_45194[(2)] = true);

(statearr_45139_45194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (14))){
var state_45094__$1 = state_45094;
var statearr_45140_45195 = state_45094__$1;
(statearr_45140_45195[(2)] = false);

(statearr_45140_45195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (26))){
var inst_45054 = (state_45094[(10)]);
var inst_45061 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45054);
var state_45094__$1 = state_45094;
var statearr_45141_45196 = state_45094__$1;
(statearr_45141_45196[(2)] = inst_45061);

(statearr_45141_45196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (16))){
var state_45094__$1 = state_45094;
var statearr_45142_45197 = state_45094__$1;
(statearr_45142_45197[(2)] = true);

(statearr_45142_45197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (38))){
var inst_45084 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45143_45198 = state_45094__$1;
(statearr_45143_45198[(2)] = inst_45084);

(statearr_45143_45198[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (30))){
var inst_45046 = (state_45094[(13)]);
var inst_45045 = (state_45094[(9)]);
var inst_45054 = (state_45094[(10)]);
var inst_45071 = cljs.core.empty_QMARK_.call(null,inst_45045);
var inst_45072 = inst_45046.call(null,inst_45054);
var inst_45073 = cljs.core.not.call(null,inst_45072);
var inst_45074 = (inst_45071) && (inst_45073);
var state_45094__$1 = state_45094;
var statearr_45144_45199 = state_45094__$1;
(statearr_45144_45199[(2)] = inst_45074);

(statearr_45144_45199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (10))){
var inst_44996 = (state_45094[(8)]);
var inst_45017 = (state_45094[(2)]);
var inst_45018 = cljs.core.get.call(null,inst_45017,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45019 = cljs.core.get.call(null,inst_45017,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45020 = cljs.core.get.call(null,inst_45017,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45021 = inst_44996;
var state_45094__$1 = (function (){var statearr_45145 = state_45094;
(statearr_45145[(16)] = inst_45020);

(statearr_45145[(17)] = inst_45019);

(statearr_45145[(7)] = inst_45021);

(statearr_45145[(18)] = inst_45018);

return statearr_45145;
})();
var statearr_45146_45200 = state_45094__$1;
(statearr_45146_45200[(2)] = null);

(statearr_45146_45200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (18))){
var inst_45036 = (state_45094[(2)]);
var state_45094__$1 = state_45094;
var statearr_45147_45201 = state_45094__$1;
(statearr_45147_45201[(2)] = inst_45036);

(statearr_45147_45201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (37))){
var state_45094__$1 = state_45094;
var statearr_45148_45202 = state_45094__$1;
(statearr_45148_45202[(2)] = null);

(statearr_45148_45202[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45095 === (8))){
var inst_44996 = (state_45094[(8)]);
var inst_45014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44996);
var state_45094__$1 = state_45094;
var statearr_45149_45203 = state_45094__$1;
(statearr_45149_45203[(2)] = inst_45014);

(statearr_45149_45203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43278__auto__,c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43279__auto__ = null;
var cljs$core$async$mix_$_state_machine__43279__auto____0 = (function (){
var statearr_45153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45153[(0)] = cljs$core$async$mix_$_state_machine__43279__auto__);

(statearr_45153[(1)] = (1));

return statearr_45153;
});
var cljs$core$async$mix_$_state_machine__43279__auto____1 = (function (state_45094){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45154){if((e45154 instanceof Object)){
var ex__43282__auto__ = e45154;
var statearr_45155_45204 = state_45094;
(statearr_45155_45204[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45205 = state_45094;
state_45094 = G__45205;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43279__auto__ = function(state_45094){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43279__auto____1.call(this,state_45094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43279__auto____0;
cljs$core$async$mix_$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43279__auto____1;
return cljs$core$async$mix_$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43392__auto__ = (function (){var statearr_45156 = f__43391__auto__.call(null);
(statearr_45156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45157);

return statearr_45156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45157,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__35918__auto__ = (((p == null))?null:p);
var m__35919__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35919__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__35918__auto__ = (((p == null))?null:p);
var m__35919__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,p,v,ch);
} else {
var m__35919__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args45206 = [];
var len__36363__auto___45209 = arguments.length;
var i__36364__auto___45210 = (0);
while(true){
if((i__36364__auto___45210 < len__36363__auto___45209)){
args45206.push((arguments[i__36364__auto___45210]));

var G__45211 = (i__36364__auto___45210 + (1));
i__36364__auto___45210 = G__45211;
continue;
} else {
}
break;
}

var G__45208 = args45206.length;
switch (G__45208) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45206.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35918__auto__ = (((p == null))?null:p);
var m__35919__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,p);
} else {
var m__35919__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__35918__auto__ = (((p == null))?null:p);
var m__35919__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35918__auto__)]);
if(!((m__35919__auto__ == null))){
return m__35919__auto__.call(null,p,v);
} else {
var m__35919__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35919__auto____$1 == null))){
return m__35919__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args45214 = [];
var len__36363__auto___45339 = arguments.length;
var i__36364__auto___45340 = (0);
while(true){
if((i__36364__auto___45340 < len__36363__auto___45339)){
args45214.push((arguments[i__36364__auto___45340]));

var G__45341 = (i__36364__auto___45340 + (1));
i__36364__auto___45340 = G__45341;
continue;
} else {
}
break;
}

var G__45216 = args45214.length;
switch (G__45216) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45214.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35250__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35250__auto__)){
return or__35250__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35250__auto__,mults){
return (function (p1__45213_SHARP_){
if(cljs.core.truth_(p1__45213_SHARP_.call(null,topic))){
return p1__45213_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45213_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35250__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45217 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45218){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45218 = meta45218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45219,meta45218__$1){
var self__ = this;
var _45219__$1 = this;
return (new cljs.core.async.t_cljs$core$async45217(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45218__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45219){
var self__ = this;
var _45219__$1 = this;
return self__.meta45218;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45218","meta45218",-236284373,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45217";

cljs.core.async.t_cljs$core$async45217.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async45217");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45217 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45217(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45218){
return (new cljs.core.async.t_cljs$core$async45217(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45218));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45217(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43390__auto___45343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45343,mults,ensure_mult,p){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45343,mults,ensure_mult,p){
return (function (state_45291){
var state_val_45292 = (state_45291[(1)]);
if((state_val_45292 === (7))){
var inst_45287 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45293_45344 = state_45291__$1;
(statearr_45293_45344[(2)] = inst_45287);

(statearr_45293_45344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (20))){
var state_45291__$1 = state_45291;
var statearr_45294_45345 = state_45291__$1;
(statearr_45294_45345[(2)] = null);

(statearr_45294_45345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (1))){
var state_45291__$1 = state_45291;
var statearr_45295_45346 = state_45291__$1;
(statearr_45295_45346[(2)] = null);

(statearr_45295_45346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (24))){
var inst_45270 = (state_45291[(7)]);
var inst_45279 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45270);
var state_45291__$1 = state_45291;
var statearr_45296_45347 = state_45291__$1;
(statearr_45296_45347[(2)] = inst_45279);

(statearr_45296_45347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (4))){
var inst_45222 = (state_45291[(8)]);
var inst_45222__$1 = (state_45291[(2)]);
var inst_45223 = (inst_45222__$1 == null);
var state_45291__$1 = (function (){var statearr_45297 = state_45291;
(statearr_45297[(8)] = inst_45222__$1);

return statearr_45297;
})();
if(cljs.core.truth_(inst_45223)){
var statearr_45298_45348 = state_45291__$1;
(statearr_45298_45348[(1)] = (5));

} else {
var statearr_45299_45349 = state_45291__$1;
(statearr_45299_45349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (15))){
var inst_45264 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45300_45350 = state_45291__$1;
(statearr_45300_45350[(2)] = inst_45264);

(statearr_45300_45350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (21))){
var inst_45284 = (state_45291[(2)]);
var state_45291__$1 = (function (){var statearr_45301 = state_45291;
(statearr_45301[(9)] = inst_45284);

return statearr_45301;
})();
var statearr_45302_45351 = state_45291__$1;
(statearr_45302_45351[(2)] = null);

(statearr_45302_45351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (13))){
var inst_45246 = (state_45291[(10)]);
var inst_45248 = cljs.core.chunked_seq_QMARK_.call(null,inst_45246);
var state_45291__$1 = state_45291;
if(inst_45248){
var statearr_45303_45352 = state_45291__$1;
(statearr_45303_45352[(1)] = (16));

} else {
var statearr_45304_45353 = state_45291__$1;
(statearr_45304_45353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (22))){
var inst_45276 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
if(cljs.core.truth_(inst_45276)){
var statearr_45305_45354 = state_45291__$1;
(statearr_45305_45354[(1)] = (23));

} else {
var statearr_45306_45355 = state_45291__$1;
(statearr_45306_45355[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (6))){
var inst_45270 = (state_45291[(7)]);
var inst_45222 = (state_45291[(8)]);
var inst_45272 = (state_45291[(11)]);
var inst_45270__$1 = topic_fn.call(null,inst_45222);
var inst_45271 = cljs.core.deref.call(null,mults);
var inst_45272__$1 = cljs.core.get.call(null,inst_45271,inst_45270__$1);
var state_45291__$1 = (function (){var statearr_45307 = state_45291;
(statearr_45307[(7)] = inst_45270__$1);

(statearr_45307[(11)] = inst_45272__$1);

return statearr_45307;
})();
if(cljs.core.truth_(inst_45272__$1)){
var statearr_45308_45356 = state_45291__$1;
(statearr_45308_45356[(1)] = (19));

} else {
var statearr_45309_45357 = state_45291__$1;
(statearr_45309_45357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (25))){
var inst_45281 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45310_45358 = state_45291__$1;
(statearr_45310_45358[(2)] = inst_45281);

(statearr_45310_45358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (17))){
var inst_45246 = (state_45291[(10)]);
var inst_45255 = cljs.core.first.call(null,inst_45246);
var inst_45256 = cljs.core.async.muxch_STAR_.call(null,inst_45255);
var inst_45257 = cljs.core.async.close_BANG_.call(null,inst_45256);
var inst_45258 = cljs.core.next.call(null,inst_45246);
var inst_45232 = inst_45258;
var inst_45233 = null;
var inst_45234 = (0);
var inst_45235 = (0);
var state_45291__$1 = (function (){var statearr_45311 = state_45291;
(statearr_45311[(12)] = inst_45233);

(statearr_45311[(13)] = inst_45234);

(statearr_45311[(14)] = inst_45257);

(statearr_45311[(15)] = inst_45235);

(statearr_45311[(16)] = inst_45232);

return statearr_45311;
})();
var statearr_45312_45359 = state_45291__$1;
(statearr_45312_45359[(2)] = null);

(statearr_45312_45359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (3))){
var inst_45289 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45291__$1,inst_45289);
} else {
if((state_val_45292 === (12))){
var inst_45266 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45313_45360 = state_45291__$1;
(statearr_45313_45360[(2)] = inst_45266);

(statearr_45313_45360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (2))){
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45291__$1,(4),ch);
} else {
if((state_val_45292 === (23))){
var state_45291__$1 = state_45291;
var statearr_45314_45361 = state_45291__$1;
(statearr_45314_45361[(2)] = null);

(statearr_45314_45361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (19))){
var inst_45222 = (state_45291[(8)]);
var inst_45272 = (state_45291[(11)]);
var inst_45274 = cljs.core.async.muxch_STAR_.call(null,inst_45272);
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45291__$1,(22),inst_45274,inst_45222);
} else {
if((state_val_45292 === (11))){
var inst_45246 = (state_45291[(10)]);
var inst_45232 = (state_45291[(16)]);
var inst_45246__$1 = cljs.core.seq.call(null,inst_45232);
var state_45291__$1 = (function (){var statearr_45315 = state_45291;
(statearr_45315[(10)] = inst_45246__$1);

return statearr_45315;
})();
if(inst_45246__$1){
var statearr_45316_45362 = state_45291__$1;
(statearr_45316_45362[(1)] = (13));

} else {
var statearr_45317_45363 = state_45291__$1;
(statearr_45317_45363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (9))){
var inst_45268 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45318_45364 = state_45291__$1;
(statearr_45318_45364[(2)] = inst_45268);

(statearr_45318_45364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (5))){
var inst_45229 = cljs.core.deref.call(null,mults);
var inst_45230 = cljs.core.vals.call(null,inst_45229);
var inst_45231 = cljs.core.seq.call(null,inst_45230);
var inst_45232 = inst_45231;
var inst_45233 = null;
var inst_45234 = (0);
var inst_45235 = (0);
var state_45291__$1 = (function (){var statearr_45319 = state_45291;
(statearr_45319[(12)] = inst_45233);

(statearr_45319[(13)] = inst_45234);

(statearr_45319[(15)] = inst_45235);

(statearr_45319[(16)] = inst_45232);

return statearr_45319;
})();
var statearr_45320_45365 = state_45291__$1;
(statearr_45320_45365[(2)] = null);

(statearr_45320_45365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (14))){
var state_45291__$1 = state_45291;
var statearr_45324_45366 = state_45291__$1;
(statearr_45324_45366[(2)] = null);

(statearr_45324_45366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (16))){
var inst_45246 = (state_45291[(10)]);
var inst_45250 = cljs.core.chunk_first.call(null,inst_45246);
var inst_45251 = cljs.core.chunk_rest.call(null,inst_45246);
var inst_45252 = cljs.core.count.call(null,inst_45250);
var inst_45232 = inst_45251;
var inst_45233 = inst_45250;
var inst_45234 = inst_45252;
var inst_45235 = (0);
var state_45291__$1 = (function (){var statearr_45325 = state_45291;
(statearr_45325[(12)] = inst_45233);

(statearr_45325[(13)] = inst_45234);

(statearr_45325[(15)] = inst_45235);

(statearr_45325[(16)] = inst_45232);

return statearr_45325;
})();
var statearr_45326_45367 = state_45291__$1;
(statearr_45326_45367[(2)] = null);

(statearr_45326_45367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (10))){
var inst_45233 = (state_45291[(12)]);
var inst_45234 = (state_45291[(13)]);
var inst_45235 = (state_45291[(15)]);
var inst_45232 = (state_45291[(16)]);
var inst_45240 = cljs.core._nth.call(null,inst_45233,inst_45235);
var inst_45241 = cljs.core.async.muxch_STAR_.call(null,inst_45240);
var inst_45242 = cljs.core.async.close_BANG_.call(null,inst_45241);
var inst_45243 = (inst_45235 + (1));
var tmp45321 = inst_45233;
var tmp45322 = inst_45234;
var tmp45323 = inst_45232;
var inst_45232__$1 = tmp45323;
var inst_45233__$1 = tmp45321;
var inst_45234__$1 = tmp45322;
var inst_45235__$1 = inst_45243;
var state_45291__$1 = (function (){var statearr_45327 = state_45291;
(statearr_45327[(12)] = inst_45233__$1);

(statearr_45327[(13)] = inst_45234__$1);

(statearr_45327[(17)] = inst_45242);

(statearr_45327[(15)] = inst_45235__$1);

(statearr_45327[(16)] = inst_45232__$1);

return statearr_45327;
})();
var statearr_45328_45368 = state_45291__$1;
(statearr_45328_45368[(2)] = null);

(statearr_45328_45368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (18))){
var inst_45261 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45329_45369 = state_45291__$1;
(statearr_45329_45369[(2)] = inst_45261);

(statearr_45329_45369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (8))){
var inst_45234 = (state_45291[(13)]);
var inst_45235 = (state_45291[(15)]);
var inst_45237 = (inst_45235 < inst_45234);
var inst_45238 = inst_45237;
var state_45291__$1 = state_45291;
if(cljs.core.truth_(inst_45238)){
var statearr_45330_45370 = state_45291__$1;
(statearr_45330_45370[(1)] = (10));

} else {
var statearr_45331_45371 = state_45291__$1;
(statearr_45331_45371[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45343,mults,ensure_mult,p))
;
return ((function (switch__43278__auto__,c__43390__auto___45343,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_45335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45335[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_45335[(1)] = (1));

return statearr_45335;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45291){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45336){if((e45336 instanceof Object)){
var ex__43282__auto__ = e45336;
var statearr_45337_45372 = state_45291;
(statearr_45337_45372[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45373 = state_45291;
state_45291 = G__45373;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45343,mults,ensure_mult,p))
})();
var state__43392__auto__ = (function (){var statearr_45338 = f__43391__auto__.call(null);
(statearr_45338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45343);

return statearr_45338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45343,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args45374 = [];
var len__36363__auto___45377 = arguments.length;
var i__36364__auto___45378 = (0);
while(true){
if((i__36364__auto___45378 < len__36363__auto___45377)){
args45374.push((arguments[i__36364__auto___45378]));

var G__45379 = (i__36364__auto___45378 + (1));
i__36364__auto___45378 = G__45379;
continue;
} else {
}
break;
}

var G__45376 = args45374.length;
switch (G__45376) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45374.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args45381 = [];
var len__36363__auto___45384 = arguments.length;
var i__36364__auto___45385 = (0);
while(true){
if((i__36364__auto___45385 < len__36363__auto___45384)){
args45381.push((arguments[i__36364__auto___45385]));

var G__45386 = (i__36364__auto___45385 + (1));
i__36364__auto___45385 = G__45386;
continue;
} else {
}
break;
}

var G__45383 = args45381.length;
switch (G__45383) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45381.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args45388 = [];
var len__36363__auto___45459 = arguments.length;
var i__36364__auto___45460 = (0);
while(true){
if((i__36364__auto___45460 < len__36363__auto___45459)){
args45388.push((arguments[i__36364__auto___45460]));

var G__45461 = (i__36364__auto___45460 + (1));
i__36364__auto___45460 = G__45461;
continue;
} else {
}
break;
}

var G__45390 = args45388.length;
switch (G__45390) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45388.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__43390__auto___45463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45429){
var state_val_45430 = (state_45429[(1)]);
if((state_val_45430 === (7))){
var state_45429__$1 = state_45429;
var statearr_45431_45464 = state_45429__$1;
(statearr_45431_45464[(2)] = null);

(statearr_45431_45464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (1))){
var state_45429__$1 = state_45429;
var statearr_45432_45465 = state_45429__$1;
(statearr_45432_45465[(2)] = null);

(statearr_45432_45465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (4))){
var inst_45393 = (state_45429[(7)]);
var inst_45395 = (inst_45393 < cnt);
var state_45429__$1 = state_45429;
if(cljs.core.truth_(inst_45395)){
var statearr_45433_45466 = state_45429__$1;
(statearr_45433_45466[(1)] = (6));

} else {
var statearr_45434_45467 = state_45429__$1;
(statearr_45434_45467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (15))){
var inst_45425 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
var statearr_45435_45468 = state_45429__$1;
(statearr_45435_45468[(2)] = inst_45425);

(statearr_45435_45468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (13))){
var inst_45418 = cljs.core.async.close_BANG_.call(null,out);
var state_45429__$1 = state_45429;
var statearr_45436_45469 = state_45429__$1;
(statearr_45436_45469[(2)] = inst_45418);

(statearr_45436_45469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (6))){
var state_45429__$1 = state_45429;
var statearr_45437_45470 = state_45429__$1;
(statearr_45437_45470[(2)] = null);

(statearr_45437_45470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (3))){
var inst_45427 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45429__$1,inst_45427);
} else {
if((state_val_45430 === (12))){
var inst_45415 = (state_45429[(8)]);
var inst_45415__$1 = (state_45429[(2)]);
var inst_45416 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45415__$1);
var state_45429__$1 = (function (){var statearr_45438 = state_45429;
(statearr_45438[(8)] = inst_45415__$1);

return statearr_45438;
})();
if(cljs.core.truth_(inst_45416)){
var statearr_45439_45471 = state_45429__$1;
(statearr_45439_45471[(1)] = (13));

} else {
var statearr_45440_45472 = state_45429__$1;
(statearr_45440_45472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (2))){
var inst_45392 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45393 = (0);
var state_45429__$1 = (function (){var statearr_45441 = state_45429;
(statearr_45441[(7)] = inst_45393);

(statearr_45441[(9)] = inst_45392);

return statearr_45441;
})();
var statearr_45442_45473 = state_45429__$1;
(statearr_45442_45473[(2)] = null);

(statearr_45442_45473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (11))){
var inst_45393 = (state_45429[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45429,(10),Object,null,(9));
var inst_45402 = chs__$1.call(null,inst_45393);
var inst_45403 = done.call(null,inst_45393);
var inst_45404 = cljs.core.async.take_BANG_.call(null,inst_45402,inst_45403);
var state_45429__$1 = state_45429;
var statearr_45443_45474 = state_45429__$1;
(statearr_45443_45474[(2)] = inst_45404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (9))){
var inst_45393 = (state_45429[(7)]);
var inst_45406 = (state_45429[(2)]);
var inst_45407 = (inst_45393 + (1));
var inst_45393__$1 = inst_45407;
var state_45429__$1 = (function (){var statearr_45444 = state_45429;
(statearr_45444[(7)] = inst_45393__$1);

(statearr_45444[(10)] = inst_45406);

return statearr_45444;
})();
var statearr_45445_45475 = state_45429__$1;
(statearr_45445_45475[(2)] = null);

(statearr_45445_45475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (5))){
var inst_45413 = (state_45429[(2)]);
var state_45429__$1 = (function (){var statearr_45446 = state_45429;
(statearr_45446[(11)] = inst_45413);

return statearr_45446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45429__$1,(12),dchan);
} else {
if((state_val_45430 === (14))){
var inst_45415 = (state_45429[(8)]);
var inst_45420 = cljs.core.apply.call(null,f,inst_45415);
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45429__$1,(16),out,inst_45420);
} else {
if((state_val_45430 === (16))){
var inst_45422 = (state_45429[(2)]);
var state_45429__$1 = (function (){var statearr_45447 = state_45429;
(statearr_45447[(12)] = inst_45422);

return statearr_45447;
})();
var statearr_45448_45476 = state_45429__$1;
(statearr_45448_45476[(2)] = null);

(statearr_45448_45476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (10))){
var inst_45397 = (state_45429[(2)]);
var inst_45398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45429__$1 = (function (){var statearr_45449 = state_45429;
(statearr_45449[(13)] = inst_45397);

return statearr_45449;
})();
var statearr_45450_45477 = state_45429__$1;
(statearr_45450_45477[(2)] = inst_45398);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (8))){
var inst_45411 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
var statearr_45451_45478 = state_45429__$1;
(statearr_45451_45478[(2)] = inst_45411);

(statearr_45451_45478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43278__auto__,c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_45455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45455[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_45455[(1)] = (1));

return statearr_45455;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45429){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45456){if((e45456 instanceof Object)){
var ex__43282__auto__ = e45456;
var statearr_45457_45479 = state_45429;
(statearr_45457_45479[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45480 = state_45429;
state_45429 = G__45480;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43392__auto__ = (function (){var statearr_45458 = f__43391__auto__.call(null);
(statearr_45458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45463);

return statearr_45458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45463,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args45482 = [];
var len__36363__auto___45540 = arguments.length;
var i__36364__auto___45541 = (0);
while(true){
if((i__36364__auto___45541 < len__36363__auto___45540)){
args45482.push((arguments[i__36364__auto___45541]));

var G__45542 = (i__36364__auto___45541 + (1));
i__36364__auto___45541 = G__45542;
continue;
} else {
}
break;
}

var G__45484 = args45482.length;
switch (G__45484) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45482.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___45544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45544,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45544,out){
return (function (state_45516){
var state_val_45517 = (state_45516[(1)]);
if((state_val_45517 === (7))){
var inst_45495 = (state_45516[(7)]);
var inst_45496 = (state_45516[(8)]);
var inst_45495__$1 = (state_45516[(2)]);
var inst_45496__$1 = cljs.core.nth.call(null,inst_45495__$1,(0),null);
var inst_45497 = cljs.core.nth.call(null,inst_45495__$1,(1),null);
var inst_45498 = (inst_45496__$1 == null);
var state_45516__$1 = (function (){var statearr_45518 = state_45516;
(statearr_45518[(7)] = inst_45495__$1);

(statearr_45518[(8)] = inst_45496__$1);

(statearr_45518[(9)] = inst_45497);

return statearr_45518;
})();
if(cljs.core.truth_(inst_45498)){
var statearr_45519_45545 = state_45516__$1;
(statearr_45519_45545[(1)] = (8));

} else {
var statearr_45520_45546 = state_45516__$1;
(statearr_45520_45546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (1))){
var inst_45485 = cljs.core.vec.call(null,chs);
var inst_45486 = inst_45485;
var state_45516__$1 = (function (){var statearr_45521 = state_45516;
(statearr_45521[(10)] = inst_45486);

return statearr_45521;
})();
var statearr_45522_45547 = state_45516__$1;
(statearr_45522_45547[(2)] = null);

(statearr_45522_45547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (4))){
var inst_45486 = (state_45516[(10)]);
var state_45516__$1 = state_45516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45516__$1,(7),inst_45486);
} else {
if((state_val_45517 === (6))){
var inst_45512 = (state_45516[(2)]);
var state_45516__$1 = state_45516;
var statearr_45523_45548 = state_45516__$1;
(statearr_45523_45548[(2)] = inst_45512);

(statearr_45523_45548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (3))){
var inst_45514 = (state_45516[(2)]);
var state_45516__$1 = state_45516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45516__$1,inst_45514);
} else {
if((state_val_45517 === (2))){
var inst_45486 = (state_45516[(10)]);
var inst_45488 = cljs.core.count.call(null,inst_45486);
var inst_45489 = (inst_45488 > (0));
var state_45516__$1 = state_45516;
if(cljs.core.truth_(inst_45489)){
var statearr_45525_45549 = state_45516__$1;
(statearr_45525_45549[(1)] = (4));

} else {
var statearr_45526_45550 = state_45516__$1;
(statearr_45526_45550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (11))){
var inst_45486 = (state_45516[(10)]);
var inst_45505 = (state_45516[(2)]);
var tmp45524 = inst_45486;
var inst_45486__$1 = tmp45524;
var state_45516__$1 = (function (){var statearr_45527 = state_45516;
(statearr_45527[(11)] = inst_45505);

(statearr_45527[(10)] = inst_45486__$1);

return statearr_45527;
})();
var statearr_45528_45551 = state_45516__$1;
(statearr_45528_45551[(2)] = null);

(statearr_45528_45551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (9))){
var inst_45496 = (state_45516[(8)]);
var state_45516__$1 = state_45516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45516__$1,(11),out,inst_45496);
} else {
if((state_val_45517 === (5))){
var inst_45510 = cljs.core.async.close_BANG_.call(null,out);
var state_45516__$1 = state_45516;
var statearr_45529_45552 = state_45516__$1;
(statearr_45529_45552[(2)] = inst_45510);

(statearr_45529_45552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (10))){
var inst_45508 = (state_45516[(2)]);
var state_45516__$1 = state_45516;
var statearr_45530_45553 = state_45516__$1;
(statearr_45530_45553[(2)] = inst_45508);

(statearr_45530_45553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45517 === (8))){
var inst_45495 = (state_45516[(7)]);
var inst_45486 = (state_45516[(10)]);
var inst_45496 = (state_45516[(8)]);
var inst_45497 = (state_45516[(9)]);
var inst_45500 = (function (){var cs = inst_45486;
var vec__45491 = inst_45495;
var v = inst_45496;
var c = inst_45497;
return ((function (cs,vec__45491,v,c,inst_45495,inst_45486,inst_45496,inst_45497,state_val_45517,c__43390__auto___45544,out){
return (function (p1__45481_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45481_SHARP_);
});
;})(cs,vec__45491,v,c,inst_45495,inst_45486,inst_45496,inst_45497,state_val_45517,c__43390__auto___45544,out))
})();
var inst_45501 = cljs.core.filterv.call(null,inst_45500,inst_45486);
var inst_45486__$1 = inst_45501;
var state_45516__$1 = (function (){var statearr_45531 = state_45516;
(statearr_45531[(10)] = inst_45486__$1);

return statearr_45531;
})();
var statearr_45532_45554 = state_45516__$1;
(statearr_45532_45554[(2)] = null);

(statearr_45532_45554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45544,out))
;
return ((function (switch__43278__auto__,c__43390__auto___45544,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_45536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45536[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_45536[(1)] = (1));

return statearr_45536;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45516){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45537){if((e45537 instanceof Object)){
var ex__43282__auto__ = e45537;
var statearr_45538_45555 = state_45516;
(statearr_45538_45555[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45556 = state_45516;
state_45516 = G__45556;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45544,out))
})();
var state__43392__auto__ = (function (){var statearr_45539 = f__43391__auto__.call(null);
(statearr_45539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45544);

return statearr_45539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45544,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args45557 = [];
var len__36363__auto___45606 = arguments.length;
var i__36364__auto___45607 = (0);
while(true){
if((i__36364__auto___45607 < len__36363__auto___45606)){
args45557.push((arguments[i__36364__auto___45607]));

var G__45608 = (i__36364__auto___45607 + (1));
i__36364__auto___45607 = G__45608;
continue;
} else {
}
break;
}

var G__45559 = args45557.length;
switch (G__45559) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45557.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___45610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45610,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45610,out){
return (function (state_45583){
var state_val_45584 = (state_45583[(1)]);
if((state_val_45584 === (7))){
var inst_45565 = (state_45583[(7)]);
var inst_45565__$1 = (state_45583[(2)]);
var inst_45566 = (inst_45565__$1 == null);
var inst_45567 = cljs.core.not.call(null,inst_45566);
var state_45583__$1 = (function (){var statearr_45585 = state_45583;
(statearr_45585[(7)] = inst_45565__$1);

return statearr_45585;
})();
if(inst_45567){
var statearr_45586_45611 = state_45583__$1;
(statearr_45586_45611[(1)] = (8));

} else {
var statearr_45587_45612 = state_45583__$1;
(statearr_45587_45612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (1))){
var inst_45560 = (0);
var state_45583__$1 = (function (){var statearr_45588 = state_45583;
(statearr_45588[(8)] = inst_45560);

return statearr_45588;
})();
var statearr_45589_45613 = state_45583__$1;
(statearr_45589_45613[(2)] = null);

(statearr_45589_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (4))){
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45583__$1,(7),ch);
} else {
if((state_val_45584 === (6))){
var inst_45578 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45590_45614 = state_45583__$1;
(statearr_45590_45614[(2)] = inst_45578);

(statearr_45590_45614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (3))){
var inst_45580 = (state_45583[(2)]);
var inst_45581 = cljs.core.async.close_BANG_.call(null,out);
var state_45583__$1 = (function (){var statearr_45591 = state_45583;
(statearr_45591[(9)] = inst_45580);

return statearr_45591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45583__$1,inst_45581);
} else {
if((state_val_45584 === (2))){
var inst_45560 = (state_45583[(8)]);
var inst_45562 = (inst_45560 < n);
var state_45583__$1 = state_45583;
if(cljs.core.truth_(inst_45562)){
var statearr_45592_45615 = state_45583__$1;
(statearr_45592_45615[(1)] = (4));

} else {
var statearr_45593_45616 = state_45583__$1;
(statearr_45593_45616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (11))){
var inst_45560 = (state_45583[(8)]);
var inst_45570 = (state_45583[(2)]);
var inst_45571 = (inst_45560 + (1));
var inst_45560__$1 = inst_45571;
var state_45583__$1 = (function (){var statearr_45594 = state_45583;
(statearr_45594[(10)] = inst_45570);

(statearr_45594[(8)] = inst_45560__$1);

return statearr_45594;
})();
var statearr_45595_45617 = state_45583__$1;
(statearr_45595_45617[(2)] = null);

(statearr_45595_45617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (9))){
var state_45583__$1 = state_45583;
var statearr_45596_45618 = state_45583__$1;
(statearr_45596_45618[(2)] = null);

(statearr_45596_45618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (5))){
var state_45583__$1 = state_45583;
var statearr_45597_45619 = state_45583__$1;
(statearr_45597_45619[(2)] = null);

(statearr_45597_45619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (10))){
var inst_45575 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45598_45620 = state_45583__$1;
(statearr_45598_45620[(2)] = inst_45575);

(statearr_45598_45620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (8))){
var inst_45565 = (state_45583[(7)]);
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45583__$1,(11),out,inst_45565);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45610,out))
;
return ((function (switch__43278__auto__,c__43390__auto___45610,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_45602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45602[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_45602[(1)] = (1));

return statearr_45602;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45583){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45603){if((e45603 instanceof Object)){
var ex__43282__auto__ = e45603;
var statearr_45604_45621 = state_45583;
(statearr_45604_45621[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45622 = state_45583;
state_45583 = G__45622;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45610,out))
})();
var state__43392__auto__ = (function (){var statearr_45605 = f__43391__auto__.call(null);
(statearr_45605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45610);

return statearr_45605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45610,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45630 = (function (f,ch,meta45631){
this.f = f;
this.ch = ch;
this.meta45631 = meta45631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45632,meta45631__$1){
var self__ = this;
var _45632__$1 = this;
return (new cljs.core.async.t_cljs$core$async45630(self__.f,self__.ch,meta45631__$1));
});

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45632){
var self__ = this;
var _45632__$1 = this;
return self__.meta45631;
});

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45633 = (function (f,ch,meta45631,_,fn1,meta45634){
this.f = f;
this.ch = ch;
this.meta45631 = meta45631;
this._ = _;
this.fn1 = fn1;
this.meta45634 = meta45634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45635,meta45634__$1){
var self__ = this;
var _45635__$1 = this;
return (new cljs.core.async.t_cljs$core$async45633(self__.f,self__.ch,self__.meta45631,self__._,self__.fn1,meta45634__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45635){
var self__ = this;
var _45635__$1 = this;
return self__.meta45634;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45623_SHARP_){
return f1.call(null,(((p1__45623_SHARP_ == null))?null:self__.f.call(null,p1__45623_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45631","meta45631",1572159135,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45630","cljs.core.async/t_cljs$core$async45630",-1671348730,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45634","meta45634",-1167793873,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45633";

cljs.core.async.t_cljs$core$async45633.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async45633");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45633 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45633(f__$1,ch__$1,meta45631__$1,___$2,fn1__$1,meta45634){
return (new cljs.core.async.t_cljs$core$async45633(f__$1,ch__$1,meta45631__$1,___$2,fn1__$1,meta45634));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45633(self__.f,self__.ch,self__.meta45631,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35238__auto__ = ret;
if(cljs.core.truth_(and__35238__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35238__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45631","meta45631",1572159135,null)], null);
});

cljs.core.async.t_cljs$core$async45630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45630";

cljs.core.async.t_cljs$core$async45630.cljs$lang$ctorPrWriter = (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async45630");
});

cljs.core.async.__GT_t_cljs$core$async45630 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45630(f__$1,ch__$1,meta45631){
return (new cljs.core.async.t_cljs$core$async45630(f__$1,ch__$1,meta45631));
});

}

return (new cljs.core.async.t_cljs$core$async45630(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45639 = (function (f,ch,meta45640){
this.f = f;
this.ch = ch;
this.meta45640 = meta45640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45641,meta45640__$1){
var self__ = this;
var _45641__$1 = this;
return (new cljs.core.async.t_cljs$core$async45639(self__.f,self__.ch,meta45640__$1));
});

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45641){
var self__ = this;
var _45641__$1 = this;
return self__.meta45640;
});

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45640","meta45640",-1355883641,null)], null);
});

cljs.core.async.t_cljs$core$async45639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45639";

cljs.core.async.t_cljs$core$async45639.cljs$lang$ctorPrWriter = (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async45639");
});

cljs.core.async.__GT_t_cljs$core$async45639 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45639(f__$1,ch__$1,meta45640){
return (new cljs.core.async.t_cljs$core$async45639(f__$1,ch__$1,meta45640));
});

}

return (new cljs.core.async.t_cljs$core$async45639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45645 = (function (p,ch,meta45646){
this.p = p;
this.ch = ch;
this.meta45646 = meta45646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45647,meta45646__$1){
var self__ = this;
var _45647__$1 = this;
return (new cljs.core.async.t_cljs$core$async45645(self__.p,self__.ch,meta45646__$1));
});

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45647){
var self__ = this;
var _45647__$1 = this;
return self__.meta45646;
});

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45646","meta45646",-459866692,null)], null);
});

cljs.core.async.t_cljs$core$async45645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45645";

cljs.core.async.t_cljs$core$async45645.cljs$lang$ctorPrWriter = (function (this__35861__auto__,writer__35862__auto__,opt__35863__auto__){
return cljs.core._write.call(null,writer__35862__auto__,"cljs.core.async/t_cljs$core$async45645");
});

cljs.core.async.__GT_t_cljs$core$async45645 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45645(p__$1,ch__$1,meta45646){
return (new cljs.core.async.t_cljs$core$async45645(p__$1,ch__$1,meta45646));
});

}

return (new cljs.core.async.t_cljs$core$async45645(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args45648 = [];
var len__36363__auto___45692 = arguments.length;
var i__36364__auto___45693 = (0);
while(true){
if((i__36364__auto___45693 < len__36363__auto___45692)){
args45648.push((arguments[i__36364__auto___45693]));

var G__45694 = (i__36364__auto___45693 + (1));
i__36364__auto___45693 = G__45694;
continue;
} else {
}
break;
}

var G__45650 = args45648.length;
switch (G__45650) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45648.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___45696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___45696,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___45696,out){
return (function (state_45671){
var state_val_45672 = (state_45671[(1)]);
if((state_val_45672 === (7))){
var inst_45667 = (state_45671[(2)]);
var state_45671__$1 = state_45671;
var statearr_45673_45697 = state_45671__$1;
(statearr_45673_45697[(2)] = inst_45667);

(statearr_45673_45697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (1))){
var state_45671__$1 = state_45671;
var statearr_45674_45698 = state_45671__$1;
(statearr_45674_45698[(2)] = null);

(statearr_45674_45698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (4))){
var inst_45653 = (state_45671[(7)]);
var inst_45653__$1 = (state_45671[(2)]);
var inst_45654 = (inst_45653__$1 == null);
var state_45671__$1 = (function (){var statearr_45675 = state_45671;
(statearr_45675[(7)] = inst_45653__$1);

return statearr_45675;
})();
if(cljs.core.truth_(inst_45654)){
var statearr_45676_45699 = state_45671__$1;
(statearr_45676_45699[(1)] = (5));

} else {
var statearr_45677_45700 = state_45671__$1;
(statearr_45677_45700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (6))){
var inst_45653 = (state_45671[(7)]);
var inst_45658 = p.call(null,inst_45653);
var state_45671__$1 = state_45671;
if(cljs.core.truth_(inst_45658)){
var statearr_45678_45701 = state_45671__$1;
(statearr_45678_45701[(1)] = (8));

} else {
var statearr_45679_45702 = state_45671__$1;
(statearr_45679_45702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (3))){
var inst_45669 = (state_45671[(2)]);
var state_45671__$1 = state_45671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45671__$1,inst_45669);
} else {
if((state_val_45672 === (2))){
var state_45671__$1 = state_45671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45671__$1,(4),ch);
} else {
if((state_val_45672 === (11))){
var inst_45661 = (state_45671[(2)]);
var state_45671__$1 = state_45671;
var statearr_45680_45703 = state_45671__$1;
(statearr_45680_45703[(2)] = inst_45661);

(statearr_45680_45703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (9))){
var state_45671__$1 = state_45671;
var statearr_45681_45704 = state_45671__$1;
(statearr_45681_45704[(2)] = null);

(statearr_45681_45704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (5))){
var inst_45656 = cljs.core.async.close_BANG_.call(null,out);
var state_45671__$1 = state_45671;
var statearr_45682_45705 = state_45671__$1;
(statearr_45682_45705[(2)] = inst_45656);

(statearr_45682_45705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (10))){
var inst_45664 = (state_45671[(2)]);
var state_45671__$1 = (function (){var statearr_45683 = state_45671;
(statearr_45683[(8)] = inst_45664);

return statearr_45683;
})();
var statearr_45684_45706 = state_45671__$1;
(statearr_45684_45706[(2)] = null);

(statearr_45684_45706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45672 === (8))){
var inst_45653 = (state_45671[(7)]);
var state_45671__$1 = state_45671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45671__$1,(11),out,inst_45653);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___45696,out))
;
return ((function (switch__43278__auto__,c__43390__auto___45696,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_45688 = [null,null,null,null,null,null,null,null,null];
(statearr_45688[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_45688[(1)] = (1));

return statearr_45688;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45671){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45689){if((e45689 instanceof Object)){
var ex__43282__auto__ = e45689;
var statearr_45690_45707 = state_45671;
(statearr_45690_45707[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45708 = state_45671;
state_45671 = G__45708;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___45696,out))
})();
var state__43392__auto__ = (function (){var statearr_45691 = f__43391__auto__.call(null);
(statearr_45691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___45696);

return statearr_45691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___45696,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args45709 = [];
var len__36363__auto___45712 = arguments.length;
var i__36364__auto___45713 = (0);
while(true){
if((i__36364__auto___45713 < len__36363__auto___45712)){
args45709.push((arguments[i__36364__auto___45713]));

var G__45714 = (i__36364__auto___45713 + (1));
i__36364__auto___45713 = G__45714;
continue;
} else {
}
break;
}

var G__45711 = args45709.length;
switch (G__45711) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45709.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto__){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto__){
return (function (state_45881){
var state_val_45882 = (state_45881[(1)]);
if((state_val_45882 === (7))){
var inst_45877 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
var statearr_45883_45924 = state_45881__$1;
(statearr_45883_45924[(2)] = inst_45877);

(statearr_45883_45924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (20))){
var inst_45847 = (state_45881[(7)]);
var inst_45858 = (state_45881[(2)]);
var inst_45859 = cljs.core.next.call(null,inst_45847);
var inst_45833 = inst_45859;
var inst_45834 = null;
var inst_45835 = (0);
var inst_45836 = (0);
var state_45881__$1 = (function (){var statearr_45884 = state_45881;
(statearr_45884[(8)] = inst_45858);

(statearr_45884[(9)] = inst_45835);

(statearr_45884[(10)] = inst_45834);

(statearr_45884[(11)] = inst_45836);

(statearr_45884[(12)] = inst_45833);

return statearr_45884;
})();
var statearr_45885_45925 = state_45881__$1;
(statearr_45885_45925[(2)] = null);

(statearr_45885_45925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (1))){
var state_45881__$1 = state_45881;
var statearr_45886_45926 = state_45881__$1;
(statearr_45886_45926[(2)] = null);

(statearr_45886_45926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (4))){
var inst_45822 = (state_45881[(13)]);
var inst_45822__$1 = (state_45881[(2)]);
var inst_45823 = (inst_45822__$1 == null);
var state_45881__$1 = (function (){var statearr_45887 = state_45881;
(statearr_45887[(13)] = inst_45822__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45823)){
var statearr_45888_45927 = state_45881__$1;
(statearr_45888_45927[(1)] = (5));

} else {
var statearr_45889_45928 = state_45881__$1;
(statearr_45889_45928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (15))){
var state_45881__$1 = state_45881;
var statearr_45893_45929 = state_45881__$1;
(statearr_45893_45929[(2)] = null);

(statearr_45893_45929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (21))){
var state_45881__$1 = state_45881;
var statearr_45894_45930 = state_45881__$1;
(statearr_45894_45930[(2)] = null);

(statearr_45894_45930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (13))){
var inst_45835 = (state_45881[(9)]);
var inst_45834 = (state_45881[(10)]);
var inst_45836 = (state_45881[(11)]);
var inst_45833 = (state_45881[(12)]);
var inst_45843 = (state_45881[(2)]);
var inst_45844 = (inst_45836 + (1));
var tmp45890 = inst_45835;
var tmp45891 = inst_45834;
var tmp45892 = inst_45833;
var inst_45833__$1 = tmp45892;
var inst_45834__$1 = tmp45891;
var inst_45835__$1 = tmp45890;
var inst_45836__$1 = inst_45844;
var state_45881__$1 = (function (){var statearr_45895 = state_45881;
(statearr_45895[(14)] = inst_45843);

(statearr_45895[(9)] = inst_45835__$1);

(statearr_45895[(10)] = inst_45834__$1);

(statearr_45895[(11)] = inst_45836__$1);

(statearr_45895[(12)] = inst_45833__$1);

return statearr_45895;
})();
var statearr_45896_45931 = state_45881__$1;
(statearr_45896_45931[(2)] = null);

(statearr_45896_45931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (22))){
var state_45881__$1 = state_45881;
var statearr_45897_45932 = state_45881__$1;
(statearr_45897_45932[(2)] = null);

(statearr_45897_45932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (6))){
var inst_45822 = (state_45881[(13)]);
var inst_45831 = f.call(null,inst_45822);
var inst_45832 = cljs.core.seq.call(null,inst_45831);
var inst_45833 = inst_45832;
var inst_45834 = null;
var inst_45835 = (0);
var inst_45836 = (0);
var state_45881__$1 = (function (){var statearr_45898 = state_45881;
(statearr_45898[(9)] = inst_45835);

(statearr_45898[(10)] = inst_45834);

(statearr_45898[(11)] = inst_45836);

(statearr_45898[(12)] = inst_45833);

return statearr_45898;
})();
var statearr_45899_45933 = state_45881__$1;
(statearr_45899_45933[(2)] = null);

(statearr_45899_45933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (17))){
var inst_45847 = (state_45881[(7)]);
var inst_45851 = cljs.core.chunk_first.call(null,inst_45847);
var inst_45852 = cljs.core.chunk_rest.call(null,inst_45847);
var inst_45853 = cljs.core.count.call(null,inst_45851);
var inst_45833 = inst_45852;
var inst_45834 = inst_45851;
var inst_45835 = inst_45853;
var inst_45836 = (0);
var state_45881__$1 = (function (){var statearr_45900 = state_45881;
(statearr_45900[(9)] = inst_45835);

(statearr_45900[(10)] = inst_45834);

(statearr_45900[(11)] = inst_45836);

(statearr_45900[(12)] = inst_45833);

return statearr_45900;
})();
var statearr_45901_45934 = state_45881__$1;
(statearr_45901_45934[(2)] = null);

(statearr_45901_45934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (3))){
var inst_45879 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45881__$1,inst_45879);
} else {
if((state_val_45882 === (12))){
var inst_45867 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
var statearr_45902_45935 = state_45881__$1;
(statearr_45902_45935[(2)] = inst_45867);

(statearr_45902_45935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (2))){
var state_45881__$1 = state_45881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45881__$1,(4),in$);
} else {
if((state_val_45882 === (23))){
var inst_45875 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
var statearr_45903_45936 = state_45881__$1;
(statearr_45903_45936[(2)] = inst_45875);

(statearr_45903_45936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (19))){
var inst_45862 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
var statearr_45904_45937 = state_45881__$1;
(statearr_45904_45937[(2)] = inst_45862);

(statearr_45904_45937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (11))){
var inst_45833 = (state_45881[(12)]);
var inst_45847 = (state_45881[(7)]);
var inst_45847__$1 = cljs.core.seq.call(null,inst_45833);
var state_45881__$1 = (function (){var statearr_45905 = state_45881;
(statearr_45905[(7)] = inst_45847__$1);

return statearr_45905;
})();
if(inst_45847__$1){
var statearr_45906_45938 = state_45881__$1;
(statearr_45906_45938[(1)] = (14));

} else {
var statearr_45907_45939 = state_45881__$1;
(statearr_45907_45939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (9))){
var inst_45869 = (state_45881[(2)]);
var inst_45870 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45881__$1 = (function (){var statearr_45908 = state_45881;
(statearr_45908[(15)] = inst_45869);

return statearr_45908;
})();
if(cljs.core.truth_(inst_45870)){
var statearr_45909_45940 = state_45881__$1;
(statearr_45909_45940[(1)] = (21));

} else {
var statearr_45910_45941 = state_45881__$1;
(statearr_45910_45941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (5))){
var inst_45825 = cljs.core.async.close_BANG_.call(null,out);
var state_45881__$1 = state_45881;
var statearr_45911_45942 = state_45881__$1;
(statearr_45911_45942[(2)] = inst_45825);

(statearr_45911_45942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (14))){
var inst_45847 = (state_45881[(7)]);
var inst_45849 = cljs.core.chunked_seq_QMARK_.call(null,inst_45847);
var state_45881__$1 = state_45881;
if(inst_45849){
var statearr_45912_45943 = state_45881__$1;
(statearr_45912_45943[(1)] = (17));

} else {
var statearr_45913_45944 = state_45881__$1;
(statearr_45913_45944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (16))){
var inst_45865 = (state_45881[(2)]);
var state_45881__$1 = state_45881;
var statearr_45914_45945 = state_45881__$1;
(statearr_45914_45945[(2)] = inst_45865);

(statearr_45914_45945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45882 === (10))){
var inst_45834 = (state_45881[(10)]);
var inst_45836 = (state_45881[(11)]);
var inst_45841 = cljs.core._nth.call(null,inst_45834,inst_45836);
var state_45881__$1 = state_45881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45881__$1,(13),out,inst_45841);
} else {
if((state_val_45882 === (18))){
var inst_45847 = (state_45881[(7)]);
var inst_45856 = cljs.core.first.call(null,inst_45847);
var state_45881__$1 = state_45881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45881__$1,(20),out,inst_45856);
} else {
if((state_val_45882 === (8))){
var inst_45835 = (state_45881[(9)]);
var inst_45836 = (state_45881[(11)]);
var inst_45838 = (inst_45836 < inst_45835);
var inst_45839 = inst_45838;
var state_45881__$1 = state_45881;
if(cljs.core.truth_(inst_45839)){
var statearr_45915_45946 = state_45881__$1;
(statearr_45915_45946[(1)] = (10));

} else {
var statearr_45916_45947 = state_45881__$1;
(statearr_45916_45947[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto__))
;
return ((function (switch__43278__auto__,c__43390__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____0 = (function (){
var statearr_45920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45920[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__);

(statearr_45920[(1)] = (1));

return statearr_45920;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____1 = (function (state_45881){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e45921){if((e45921 instanceof Object)){
var ex__43282__auto__ = e45921;
var statearr_45922_45948 = state_45881;
(statearr_45922_45948[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45949 = state_45881;
state_45881 = G__45949;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__ = function(state_45881){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____1.call(this,state_45881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43279__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto__))
})();
var state__43392__auto__ = (function (){var statearr_45923 = f__43391__auto__.call(null);
(statearr_45923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto__);

return statearr_45923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto__))
);

return c__43390__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args45950 = [];
var len__36363__auto___45953 = arguments.length;
var i__36364__auto___45954 = (0);
while(true){
if((i__36364__auto___45954 < len__36363__auto___45953)){
args45950.push((arguments[i__36364__auto___45954]));

var G__45955 = (i__36364__auto___45954 + (1));
i__36364__auto___45954 = G__45955;
continue;
} else {
}
break;
}

var G__45952 = args45950.length;
switch (G__45952) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45950.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args45957 = [];
var len__36363__auto___45960 = arguments.length;
var i__36364__auto___45961 = (0);
while(true){
if((i__36364__auto___45961 < len__36363__auto___45960)){
args45957.push((arguments[i__36364__auto___45961]));

var G__45962 = (i__36364__auto___45961 + (1));
i__36364__auto___45961 = G__45962;
continue;
} else {
}
break;
}

var G__45959 = args45957.length;
switch (G__45959) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45957.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args45964 = [];
var len__36363__auto___46015 = arguments.length;
var i__36364__auto___46016 = (0);
while(true){
if((i__36364__auto___46016 < len__36363__auto___46015)){
args45964.push((arguments[i__36364__auto___46016]));

var G__46017 = (i__36364__auto___46016 + (1));
i__36364__auto___46016 = G__46017;
continue;
} else {
}
break;
}

var G__45966 = args45964.length;
switch (G__45966) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45964.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___46019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___46019,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___46019,out){
return (function (state_45990){
var state_val_45991 = (state_45990[(1)]);
if((state_val_45991 === (7))){
var inst_45985 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
var statearr_45992_46020 = state_45990__$1;
(statearr_45992_46020[(2)] = inst_45985);

(statearr_45992_46020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (1))){
var inst_45967 = null;
var state_45990__$1 = (function (){var statearr_45993 = state_45990;
(statearr_45993[(7)] = inst_45967);

return statearr_45993;
})();
var statearr_45994_46021 = state_45990__$1;
(statearr_45994_46021[(2)] = null);

(statearr_45994_46021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (4))){
var inst_45970 = (state_45990[(8)]);
var inst_45970__$1 = (state_45990[(2)]);
var inst_45971 = (inst_45970__$1 == null);
var inst_45972 = cljs.core.not.call(null,inst_45971);
var state_45990__$1 = (function (){var statearr_45995 = state_45990;
(statearr_45995[(8)] = inst_45970__$1);

return statearr_45995;
})();
if(inst_45972){
var statearr_45996_46022 = state_45990__$1;
(statearr_45996_46022[(1)] = (5));

} else {
var statearr_45997_46023 = state_45990__$1;
(statearr_45997_46023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (6))){
var state_45990__$1 = state_45990;
var statearr_45998_46024 = state_45990__$1;
(statearr_45998_46024[(2)] = null);

(statearr_45998_46024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (3))){
var inst_45987 = (state_45990[(2)]);
var inst_45988 = cljs.core.async.close_BANG_.call(null,out);
var state_45990__$1 = (function (){var statearr_45999 = state_45990;
(statearr_45999[(9)] = inst_45987);

return statearr_45999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45990__$1,inst_45988);
} else {
if((state_val_45991 === (2))){
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45990__$1,(4),ch);
} else {
if((state_val_45991 === (11))){
var inst_45970 = (state_45990[(8)]);
var inst_45979 = (state_45990[(2)]);
var inst_45967 = inst_45970;
var state_45990__$1 = (function (){var statearr_46000 = state_45990;
(statearr_46000[(7)] = inst_45967);

(statearr_46000[(10)] = inst_45979);

return statearr_46000;
})();
var statearr_46001_46025 = state_45990__$1;
(statearr_46001_46025[(2)] = null);

(statearr_46001_46025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (9))){
var inst_45970 = (state_45990[(8)]);
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45990__$1,(11),out,inst_45970);
} else {
if((state_val_45991 === (5))){
var inst_45967 = (state_45990[(7)]);
var inst_45970 = (state_45990[(8)]);
var inst_45974 = cljs.core._EQ_.call(null,inst_45970,inst_45967);
var state_45990__$1 = state_45990;
if(inst_45974){
var statearr_46003_46026 = state_45990__$1;
(statearr_46003_46026[(1)] = (8));

} else {
var statearr_46004_46027 = state_45990__$1;
(statearr_46004_46027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (10))){
var inst_45982 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
var statearr_46005_46028 = state_45990__$1;
(statearr_46005_46028[(2)] = inst_45982);

(statearr_46005_46028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (8))){
var inst_45967 = (state_45990[(7)]);
var tmp46002 = inst_45967;
var inst_45967__$1 = tmp46002;
var state_45990__$1 = (function (){var statearr_46006 = state_45990;
(statearr_46006[(7)] = inst_45967__$1);

return statearr_46006;
})();
var statearr_46007_46029 = state_45990__$1;
(statearr_46007_46029[(2)] = null);

(statearr_46007_46029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___46019,out))
;
return ((function (switch__43278__auto__,c__43390__auto___46019,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_46011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46011[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_46011[(1)] = (1));

return statearr_46011;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_45990){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_45990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e46012){if((e46012 instanceof Object)){
var ex__43282__auto__ = e46012;
var statearr_46013_46030 = state_45990;
(statearr_46013_46030[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46031 = state_45990;
state_45990 = G__46031;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_45990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_45990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___46019,out))
})();
var state__43392__auto__ = (function (){var statearr_46014 = f__43391__auto__.call(null);
(statearr_46014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___46019);

return statearr_46014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___46019,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46032 = [];
var len__36363__auto___46102 = arguments.length;
var i__36364__auto___46103 = (0);
while(true){
if((i__36364__auto___46103 < len__36363__auto___46102)){
args46032.push((arguments[i__36364__auto___46103]));

var G__46104 = (i__36364__auto___46103 + (1));
i__36364__auto___46103 = G__46104;
continue;
} else {
}
break;
}

var G__46034 = args46032.length;
switch (G__46034) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46032.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___46106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___46106,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___46106,out){
return (function (state_46072){
var state_val_46073 = (state_46072[(1)]);
if((state_val_46073 === (7))){
var inst_46068 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
var statearr_46074_46107 = state_46072__$1;
(statearr_46074_46107[(2)] = inst_46068);

(statearr_46074_46107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (1))){
var inst_46035 = (new Array(n));
var inst_46036 = inst_46035;
var inst_46037 = (0);
var state_46072__$1 = (function (){var statearr_46075 = state_46072;
(statearr_46075[(7)] = inst_46037);

(statearr_46075[(8)] = inst_46036);

return statearr_46075;
})();
var statearr_46076_46108 = state_46072__$1;
(statearr_46076_46108[(2)] = null);

(statearr_46076_46108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (4))){
var inst_46040 = (state_46072[(9)]);
var inst_46040__$1 = (state_46072[(2)]);
var inst_46041 = (inst_46040__$1 == null);
var inst_46042 = cljs.core.not.call(null,inst_46041);
var state_46072__$1 = (function (){var statearr_46077 = state_46072;
(statearr_46077[(9)] = inst_46040__$1);

return statearr_46077;
})();
if(inst_46042){
var statearr_46078_46109 = state_46072__$1;
(statearr_46078_46109[(1)] = (5));

} else {
var statearr_46079_46110 = state_46072__$1;
(statearr_46079_46110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (15))){
var inst_46062 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
var statearr_46080_46111 = state_46072__$1;
(statearr_46080_46111[(2)] = inst_46062);

(statearr_46080_46111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (13))){
var state_46072__$1 = state_46072;
var statearr_46081_46112 = state_46072__$1;
(statearr_46081_46112[(2)] = null);

(statearr_46081_46112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (6))){
var inst_46037 = (state_46072[(7)]);
var inst_46058 = (inst_46037 > (0));
var state_46072__$1 = state_46072;
if(cljs.core.truth_(inst_46058)){
var statearr_46082_46113 = state_46072__$1;
(statearr_46082_46113[(1)] = (12));

} else {
var statearr_46083_46114 = state_46072__$1;
(statearr_46083_46114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (3))){
var inst_46070 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46072__$1,inst_46070);
} else {
if((state_val_46073 === (12))){
var inst_46036 = (state_46072[(8)]);
var inst_46060 = cljs.core.vec.call(null,inst_46036);
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46072__$1,(15),out,inst_46060);
} else {
if((state_val_46073 === (2))){
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46072__$1,(4),ch);
} else {
if((state_val_46073 === (11))){
var inst_46052 = (state_46072[(2)]);
var inst_46053 = (new Array(n));
var inst_46036 = inst_46053;
var inst_46037 = (0);
var state_46072__$1 = (function (){var statearr_46084 = state_46072;
(statearr_46084[(10)] = inst_46052);

(statearr_46084[(7)] = inst_46037);

(statearr_46084[(8)] = inst_46036);

return statearr_46084;
})();
var statearr_46085_46115 = state_46072__$1;
(statearr_46085_46115[(2)] = null);

(statearr_46085_46115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (9))){
var inst_46036 = (state_46072[(8)]);
var inst_46050 = cljs.core.vec.call(null,inst_46036);
var state_46072__$1 = state_46072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46072__$1,(11),out,inst_46050);
} else {
if((state_val_46073 === (5))){
var inst_46037 = (state_46072[(7)]);
var inst_46040 = (state_46072[(9)]);
var inst_46036 = (state_46072[(8)]);
var inst_46045 = (state_46072[(11)]);
var inst_46044 = (inst_46036[inst_46037] = inst_46040);
var inst_46045__$1 = (inst_46037 + (1));
var inst_46046 = (inst_46045__$1 < n);
var state_46072__$1 = (function (){var statearr_46086 = state_46072;
(statearr_46086[(12)] = inst_46044);

(statearr_46086[(11)] = inst_46045__$1);

return statearr_46086;
})();
if(cljs.core.truth_(inst_46046)){
var statearr_46087_46116 = state_46072__$1;
(statearr_46087_46116[(1)] = (8));

} else {
var statearr_46088_46117 = state_46072__$1;
(statearr_46088_46117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (14))){
var inst_46065 = (state_46072[(2)]);
var inst_46066 = cljs.core.async.close_BANG_.call(null,out);
var state_46072__$1 = (function (){var statearr_46090 = state_46072;
(statearr_46090[(13)] = inst_46065);

return statearr_46090;
})();
var statearr_46091_46118 = state_46072__$1;
(statearr_46091_46118[(2)] = inst_46066);

(statearr_46091_46118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (10))){
var inst_46056 = (state_46072[(2)]);
var state_46072__$1 = state_46072;
var statearr_46092_46119 = state_46072__$1;
(statearr_46092_46119[(2)] = inst_46056);

(statearr_46092_46119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46073 === (8))){
var inst_46036 = (state_46072[(8)]);
var inst_46045 = (state_46072[(11)]);
var tmp46089 = inst_46036;
var inst_46036__$1 = tmp46089;
var inst_46037 = inst_46045;
var state_46072__$1 = (function (){var statearr_46093 = state_46072;
(statearr_46093[(7)] = inst_46037);

(statearr_46093[(8)] = inst_46036__$1);

return statearr_46093;
})();
var statearr_46094_46120 = state_46072__$1;
(statearr_46094_46120[(2)] = null);

(statearr_46094_46120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___46106,out))
;
return ((function (switch__43278__auto__,c__43390__auto___46106,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_46098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46098[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_46098[(1)] = (1));

return statearr_46098;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_46072){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_46072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e46099){if((e46099 instanceof Object)){
var ex__43282__auto__ = e46099;
var statearr_46100_46121 = state_46072;
(statearr_46100_46121[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46122 = state_46072;
state_46072 = G__46122;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_46072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_46072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___46106,out))
})();
var state__43392__auto__ = (function (){var statearr_46101 = f__43391__auto__.call(null);
(statearr_46101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___46106);

return statearr_46101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___46106,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46123 = [];
var len__36363__auto___46197 = arguments.length;
var i__36364__auto___46198 = (0);
while(true){
if((i__36364__auto___46198 < len__36363__auto___46197)){
args46123.push((arguments[i__36364__auto___46198]));

var G__46199 = (i__36364__auto___46198 + (1));
i__36364__auto___46198 = G__46199;
continue;
} else {
}
break;
}

var G__46125 = args46123.length;
switch (G__46125) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46123.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43390__auto___46201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43390__auto___46201,out){
return (function (){
var f__43391__auto__ = (function (){var switch__43278__auto__ = ((function (c__43390__auto___46201,out){
return (function (state_46167){
var state_val_46168 = (state_46167[(1)]);
if((state_val_46168 === (7))){
var inst_46163 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46169_46202 = state_46167__$1;
(statearr_46169_46202[(2)] = inst_46163);

(statearr_46169_46202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (1))){
var inst_46126 = [];
var inst_46127 = inst_46126;
var inst_46128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46167__$1 = (function (){var statearr_46170 = state_46167;
(statearr_46170[(7)] = inst_46128);

(statearr_46170[(8)] = inst_46127);

return statearr_46170;
})();
var statearr_46171_46203 = state_46167__$1;
(statearr_46171_46203[(2)] = null);

(statearr_46171_46203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (4))){
var inst_46131 = (state_46167[(9)]);
var inst_46131__$1 = (state_46167[(2)]);
var inst_46132 = (inst_46131__$1 == null);
var inst_46133 = cljs.core.not.call(null,inst_46132);
var state_46167__$1 = (function (){var statearr_46172 = state_46167;
(statearr_46172[(9)] = inst_46131__$1);

return statearr_46172;
})();
if(inst_46133){
var statearr_46173_46204 = state_46167__$1;
(statearr_46173_46204[(1)] = (5));

} else {
var statearr_46174_46205 = state_46167__$1;
(statearr_46174_46205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (15))){
var inst_46157 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46175_46206 = state_46167__$1;
(statearr_46175_46206[(2)] = inst_46157);

(statearr_46175_46206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (13))){
var state_46167__$1 = state_46167;
var statearr_46176_46207 = state_46167__$1;
(statearr_46176_46207[(2)] = null);

(statearr_46176_46207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (6))){
var inst_46127 = (state_46167[(8)]);
var inst_46152 = inst_46127.length;
var inst_46153 = (inst_46152 > (0));
var state_46167__$1 = state_46167;
if(cljs.core.truth_(inst_46153)){
var statearr_46177_46208 = state_46167__$1;
(statearr_46177_46208[(1)] = (12));

} else {
var statearr_46178_46209 = state_46167__$1;
(statearr_46178_46209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (3))){
var inst_46165 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46167__$1,inst_46165);
} else {
if((state_val_46168 === (12))){
var inst_46127 = (state_46167[(8)]);
var inst_46155 = cljs.core.vec.call(null,inst_46127);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46167__$1,(15),out,inst_46155);
} else {
if((state_val_46168 === (2))){
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46167__$1,(4),ch);
} else {
if((state_val_46168 === (11))){
var inst_46131 = (state_46167[(9)]);
var inst_46135 = (state_46167[(10)]);
var inst_46145 = (state_46167[(2)]);
var inst_46146 = [];
var inst_46147 = inst_46146.push(inst_46131);
var inst_46127 = inst_46146;
var inst_46128 = inst_46135;
var state_46167__$1 = (function (){var statearr_46179 = state_46167;
(statearr_46179[(11)] = inst_46145);

(statearr_46179[(7)] = inst_46128);

(statearr_46179[(8)] = inst_46127);

(statearr_46179[(12)] = inst_46147);

return statearr_46179;
})();
var statearr_46180_46210 = state_46167__$1;
(statearr_46180_46210[(2)] = null);

(statearr_46180_46210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (9))){
var inst_46127 = (state_46167[(8)]);
var inst_46143 = cljs.core.vec.call(null,inst_46127);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46167__$1,(11),out,inst_46143);
} else {
if((state_val_46168 === (5))){
var inst_46131 = (state_46167[(9)]);
var inst_46128 = (state_46167[(7)]);
var inst_46135 = (state_46167[(10)]);
var inst_46135__$1 = f.call(null,inst_46131);
var inst_46136 = cljs.core._EQ_.call(null,inst_46135__$1,inst_46128);
var inst_46137 = cljs.core.keyword_identical_QMARK_.call(null,inst_46128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46138 = (inst_46136) || (inst_46137);
var state_46167__$1 = (function (){var statearr_46181 = state_46167;
(statearr_46181[(10)] = inst_46135__$1);

return statearr_46181;
})();
if(cljs.core.truth_(inst_46138)){
var statearr_46182_46211 = state_46167__$1;
(statearr_46182_46211[(1)] = (8));

} else {
var statearr_46183_46212 = state_46167__$1;
(statearr_46183_46212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (14))){
var inst_46160 = (state_46167[(2)]);
var inst_46161 = cljs.core.async.close_BANG_.call(null,out);
var state_46167__$1 = (function (){var statearr_46185 = state_46167;
(statearr_46185[(13)] = inst_46160);

return statearr_46185;
})();
var statearr_46186_46213 = state_46167__$1;
(statearr_46186_46213[(2)] = inst_46161);

(statearr_46186_46213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (10))){
var inst_46150 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46187_46214 = state_46167__$1;
(statearr_46187_46214[(2)] = inst_46150);

(statearr_46187_46214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (8))){
var inst_46131 = (state_46167[(9)]);
var inst_46127 = (state_46167[(8)]);
var inst_46135 = (state_46167[(10)]);
var inst_46140 = inst_46127.push(inst_46131);
var tmp46184 = inst_46127;
var inst_46127__$1 = tmp46184;
var inst_46128 = inst_46135;
var state_46167__$1 = (function (){var statearr_46188 = state_46167;
(statearr_46188[(14)] = inst_46140);

(statearr_46188[(7)] = inst_46128);

(statearr_46188[(8)] = inst_46127__$1);

return statearr_46188;
})();
var statearr_46189_46215 = state_46167__$1;
(statearr_46189_46215[(2)] = null);

(statearr_46189_46215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43390__auto___46201,out))
;
return ((function (switch__43278__auto__,c__43390__auto___46201,out){
return (function() {
var cljs$core$async$state_machine__43279__auto__ = null;
var cljs$core$async$state_machine__43279__auto____0 = (function (){
var statearr_46193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46193[(0)] = cljs$core$async$state_machine__43279__auto__);

(statearr_46193[(1)] = (1));

return statearr_46193;
});
var cljs$core$async$state_machine__43279__auto____1 = (function (state_46167){
while(true){
var ret_value__43280__auto__ = (function (){try{while(true){
var result__43281__auto__ = switch__43278__auto__.call(null,state_46167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43281__auto__;
}
break;
}
}catch (e46194){if((e46194 instanceof Object)){
var ex__43282__auto__ = e46194;
var statearr_46195_46216 = state_46167;
(statearr_46195_46216[(5)] = ex__43282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46217 = state_46167;
state_46167 = G__46217;
continue;
} else {
return ret_value__43280__auto__;
}
break;
}
});
cljs$core$async$state_machine__43279__auto__ = function(state_46167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43279__auto____1.call(this,state_46167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43279__auto____0;
cljs$core$async$state_machine__43279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43279__auto____1;
return cljs$core$async$state_machine__43279__auto__;
})()
;})(switch__43278__auto__,c__43390__auto___46201,out))
})();
var state__43392__auto__ = (function (){var statearr_46196 = f__43391__auto__.call(null);
(statearr_46196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43390__auto___46201);

return statearr_46196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43392__auto__);
});})(c__43390__auto___46201,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

