'use strict';

const jQuery = require('jquery');
const $ = jQuery;
const _ = require('underscore');
const Backbone = require('backbone');

const DemoView = Backbone.View.extend({

	tagName: 'form',

	events: {
		'click #send-button': 'send'
	},

	initialize(options) {
		if (options) {
			this.sendEmail = options.sendEmail;
		}
	},

	send: function() {
		this.sendEmail({
			firstName: document.querySelector('#first-name').value,
			lastName: document.querySelector('#last-name').value
		});
	},

	render: function() {

		const compile = _.template(`<div>
			<label>First Name:</label>
			<input type="text" id="first-name" name="first-name" value="">
		</div>
		<div>
			<label>Last Name:</label>
			<input type="text" id="last-name" name="last-name" value="">
		</div>
		<button id="send-button">Send</button>`);

		this.$el.append(compile());
		return this;
	}

});

module.exports = {
	DemoView
};