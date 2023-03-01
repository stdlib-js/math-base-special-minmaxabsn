<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# minmaxabsn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the minimum and maximum absolute values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import minmaxabsn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minmaxabsn@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minmaxabsn@deno/mod.js';
```

#### minmaxabsn( \[x\[, y\[, ...args]]] )

Returns the minimum and maximum absolute values in a single pass.

```javascript
var v = minmaxabsn( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxabsn( +0.0, -0.0 );
// returns [ 0.0, 0.0 ]

v = minmaxabsn( 4.2, 3.14, -1.0, -6.8 );
// returns [ 1.0, 6.8 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxabsn( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxabsn( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxabsn.assign( \[x\[, y\[, ...args]]], out, stride, offset )

Returns the minimum and maximum absolute values in a single pass and assigns results to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );

var v = minmaxabsn.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound and negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum and negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns positive infinity for both the minimum and maximum absolute values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import minmaxabsn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-minmaxabsn@deno/mod.js';

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*100.0 ) - 50.0;
    y = ( randu()*100.0 ) - 50.0;
    v = minmaxabsn( x, y );
    console.log( 'minmaxabs(%d,%d) = [%d, %d]', x, y, v[0], v[1] );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/maxabs`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minmax`][@stdlib/math/base/special/minmax]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-minmaxabsn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-minmaxabsn

[test-image]: https://github.com/stdlib-js/math-base-special-minmaxabsn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-minmaxabsn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-minmaxabsn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-minmaxabsn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-minmaxabsn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-minmaxabsn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-minmaxabsn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-minmaxabsn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-minmaxabsn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-minmaxabsn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-minmaxabsn/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math-base-special-maxabs/tree/deno

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math-base-special-minabs/tree/deno

[@stdlib/math/base/special/minmax]: https://github.com/stdlib-js/math-base-special-minmax/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
