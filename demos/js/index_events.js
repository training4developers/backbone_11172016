'use strict';

var person = {

	firstName: 'Bob',
	lastName: 'Smith',

	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	},

	setFirstName: function(fName) {

		var eventData = { 
			oldFirstName: this.firstName,
			newFirstName: fName
		};

		this.firstName = fName;
		this.trigger('firstNameChange', eventData);
	}

};

_.extend(person, Backbone.Events);

function firstNameChangeHandler(eventData) {
	console.dir(eventData);
}

person.once('firstNameChange', firstNameChangeHandler);

console.log(person.getFullName());
person.setFirstName('Jill');
console.log(person.getFullName());

//person.off('firstNameChange', firstNameChangeHandler);

person.setFirstName('Steve');
console.log(person.getFullName());
