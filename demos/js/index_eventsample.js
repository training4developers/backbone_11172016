'use strict';

var events = {};

function on(eventName, eventHandler) {

	if (!events[eventName]) {
		events[eventName] = [];
	}

	events[eventName].push(eventHandler);

}

function trigger(eventName, eventData) {

	if (events[eventName]) {

		events[eventName].forEach(function(eventHandler) {
			eventHandler(eventData);
		});

	}

}

