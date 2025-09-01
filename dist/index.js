"use strict";var i=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var s=i(function(f,S){
var l={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};S.exports=l
});var a=i(function(C,I){
var n=require('@stdlib/ndarray-base-bytes-per-element/dist'),E=s();function L(u,r,B){var e,t,_;return e=n(u),t=n(r),_=n(B),e===null||t===null||_===null?E.BLOCK_SIZE_IN_ELEMENTS:e>t&&e>_?E.BLOCK_SIZE_IN_BYTES/e|0:t>_?E.BLOCK_SIZE_IN_BYTES/t|0:E.BLOCK_SIZE_IN_BYTES/_|0}I.exports=L
});var N=a();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
