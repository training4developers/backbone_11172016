'use strict';

function doIt(x,y,z) {
	console.log(this);
}

doIt();

window.doIt();

var o = {
	id: 2,
	doIt: doIt
};

o.doIt();

console.log(doIt === o.doIt);

o.doIt.call({ id: 4, message: 'Canada Rocks!'}, 1, 2, 3);
o.doIt.apply({ id: 4, message: 'Canada Rocks!'}, [1, 2, 3]);


