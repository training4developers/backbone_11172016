'use strict';

const Person = Backbone.Model.extend({

	defaults: {
		firstName: '',
		lastName: '',
		age: 13
	},

	getFullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

});

var person = new Person({ firstName: 'Bob', lastName: 'Smith' });
var person2 = new Person();

Object.preventExtensions(person2.attributes);

person2.on('all', function() {
	console.log(arguments);
});

person2.set('age', 40);
person2.set('ages', 40);



person.set({
	firstName: 'Jimmy',
	lastName: 'Johns',
	age: 34
}, { silent: true });

person.on('change:firstName', function() {
	console.log('first name was changed');
});


console.log(person.getFullName());
console.log(person2.getFullName());

console.log(person.getFullName === person2.getFullName);
console.log(person.hasOwnProperty('getFullName'));
console.log(person2.hasOwnProperty('getFullName'));
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(person2));

console.dir(person2);