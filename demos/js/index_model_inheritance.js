'use strict';

const Person = Backbone.Model.extend({

	getFullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

});

const person = new Person({
	firstName: 'Bob',
	lastName: 'Smith'
});

const person2 = new Person({
	firstName: 'Jane',
	lastName: 'Thomas'
});

console.log(person.getFullName === person2.getFullName);
console.log(person.hasOwnProperty('getFullName'));
console.log(person2.hasOwnProperty('getFullName'));
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(person2));

Object.getPrototypeOf(person).getFullName = function() {
	console.log("you've been hacked");
}

console.log(person.getFullName());

person.on('change', function() {
	console.dir(arguments);
});

person.set('firstName', 'Jill');

console.dir(person);