/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var Float64Array = require( '@stdlib/array-float64' );
var minmaxabsn = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxabsn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum absolute value if provided a `NaN`', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( NaN, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( NaN, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, 4.2, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( NaN, 4.2, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( NaN, NaN, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `Infinity` as the maximum value if provided `-Infinity`', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( NINF, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, NINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( NINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, 4.2, NINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns exected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( PINF, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns +infinity' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, 4.2, PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( +0.0, -0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( -0.0, +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( -0.0, -0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( +0.0, +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( -0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( +0.0, -0.0, +0.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum absolute values', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], PINF, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( -4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], PINF, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, -1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, -1.0, -6.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 6.14, 'returns max value' );

	t.end();
});

tape( 'the function supports providing an output object (array)', function test( t ) {
	var out;
	var v;

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( 4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( -4.2, -3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns max value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], PINF, 'returns max value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( 4.2, 3.14, -1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = [ 0.0, 0.0 ];
	v = minmaxabsn( 4.2, 3.14, -1.0, -6.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 6.14, 'returns max value' );

	t.end();
});

tape( 'the function supports providing an output object (typed array)', function test( t ) {
	var out;
	var v;

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( -4.2, 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 3.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( PINF, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], PINF, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, -1.0, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	out = new Float64Array( 2 );
	v = minmaxabsn( 4.2, 3.14, -1.0, -6.14, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( v[ 0 ], 1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 6.14, 'returns max value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = minmaxabsn( -4.2, 3.14, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 4.2, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = minmaxabsn( -4.2, 3.14, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 3.14, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], 4.2, 'returns expected value' );

	t.end();
});
