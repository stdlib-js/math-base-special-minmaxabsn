// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";function r(s,r,i,a,d){var l,m,o,p,f,h,u,j;if(i=arguments[(l=arguments.length)-3],a=arguments[l-2],d=arguments[l-1],3===l)return i[d]=n,i[d+a]=n,i;if(4===l)return p=e(s),i[d]=p,i[d+a]=p,i;if(5===l)return t(s)||t(r)?(i[d]=NaN,i[d+a]=NaN,i):(p=e(s))<(f=e(r))?(i[d]=p,i[d+a]=f,i):(i[d]=f,i[d+a]=p,i);for(m=n,o=0,j=0;j<l-3;j++){if(t(u=arguments[j]))return i[d]=NaN,i[d+a]=NaN,i;(h=e(u))<m&&(m=h),h>o&&(o=h)}return i[d]=m,i[d+a]=o,i}function i(){var s,t;for(s=[],t=0;t<arguments.length;t++)s.push(arguments[t]);return s.push([0,0],1,0),r.apply(null,s)}s(i,"assign",r);export{r as assign,i as default};
//# sourceMappingURL=index.mjs.map
