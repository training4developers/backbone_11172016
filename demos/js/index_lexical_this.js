'use strict';

function outer() {

	console.log(this);

	// var that = this;

	// function inner() {
	// 	console.log(that);
	// }

	const inner = () => {
		console.log(this);
	};

	inner();
}

var o = {
	id: 2,
	outer: outer
};

o.outer();

