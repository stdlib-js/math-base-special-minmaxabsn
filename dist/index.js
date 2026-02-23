"use strict";var h=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var b=h(function(A,y){
var c=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist'),x=require('@stdlib/constants-float64-pinf/dist');function P(i,n,r,e,a){var v,u,N,m,p,g,q,s;if(v=arguments.length,r=arguments[v-3],e=arguments[v-2],a=arguments[v-1],v===3)return r[a]=x,r[a+e]=x,r;if(v===4)return m=l(i),r[a]=m,r[a+e]=m,r;if(v===5)return c(i)||c(n)?(r[a]=NaN,r[a+e]=NaN,r):(m=l(i),p=l(n),m<p?(r[a]=m,r[a+e]=p,r):(r[a]=p,r[a+e]=m,r));for(u=x,N=0,s=0;s<v-3;s++){if(q=arguments[s],c(q))return r[a]=NaN,r[a+e]=NaN,r;g=l(q),g<u&&(u=g),g>N&&(N=g)}return r[a]=u,r[a+e]=N,r}y.exports=P
});var I=h(function(B,F){
var R=b();function j(){var i,n;for(i=[],n=0;n<arguments.length;n++)i.push(arguments[n]);return i.push([0,0],1,0),R.apply(null,i)}F.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=b(),O=I();k(O,"assign",w);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
