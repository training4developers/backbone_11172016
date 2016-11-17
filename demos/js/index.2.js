'use strict';

class Person extends Backbone.Model {

	getFullName() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

}

var person = new Person({ firstName: 'Bob', lastName: 'Smith' });
var person2 = new Person({ firstName: 'Tim', lastName: 'Jones' });

console.log(person.getFullName());
console.log(person2.getFullName());

console.log(person.getFullName === person2.getFullName);
console.log(person.hasOwnProperty('getFullName'));
console.log(person2.hasOwnProperty('getFullName'));
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(person2));
