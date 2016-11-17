'use strict';

var car = {
	currentSpeed: 0,
	changeSpeed: function(newSpeed) {
		this.currentSpeed = newSpeed;
		this.trigger('new-speed', { speed: newSpeed });
	}
};

var policeOfficer = {
	writeTicket: function(speed) {
		console.log('wrote a ticket for speeding: ' + speed);
	}
};

_.extend(car, Backbone.Events);
_.extend(policeOfficer, Backbone.Events);

policeOfficer.listenTo(car, 'new-speed', function(eventData) {

	if (eventData.speed > 110) {
		policeOfficer.writeTicket(eventData.speed);
	}

});

car.changeSpeed(100);
car.changeSpeed(120);