'use strict';

const Car = Backbone.Model.extend({
	defaults: {
		make: '',
		model: '',
		year: 1970
	}
});

const Cars = Backbone.Collection.extend({
	model: Car
});

const car = new Car({
	id: 1,
	make: 'Ford',
	model: 'Mustang',
	year: 2008
});

const car2 = new Car({
	id: 2,
	make: 'Chevy',
	model: 'Impala',
	year: 2010
});

const car3 = new Car({
	id: 3,
	make: 'Canada Cars',
	model: 'Frost',
	year: 2017
});

console.dir(car3);

car.get('make');
car.id


const cars = new Cars();
cars.add(car);
cars.add(car2);
cars.add(car3);

//cars.remove(car);

// const carToRemove = cars.find(function(car) {
// 	if (car.get('make') === 'Ford') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// cars.remove(carToRemove);

cars.remove(cars.find(car => car.get('make') === 'Ford'));


cars.each(function(model, index, collection) {
	console.log(model.get('make'));
});

console.log(cars.pluck('year'));

console.log(cars.map(car => car.get('make').toUpperCase()));

