// test.js
Math.pythag = undefined;

var pythag = require('./index');
var test = require('ava');

test(function(t) {

	t.assert(pythag(5, 2) === 29);
	t.assert(pythag(2, 10) === 104);

	t.end();
})