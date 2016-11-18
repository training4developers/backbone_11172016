'use strict';

const jsdom = require('mocha-jsdom');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Backbone View Examples', function() {

	let jQuery, $, _, Backbone;

	jsdom({ useEach: true });

	beforeEach(function() {
		jQuery = $ = require('jquery');
		_ = require('underscore');
		Backbone = require('backbone');
	});

	it('empty view', function() {
		const view = new Backbone.View();
		document.body.appendChild(view.el);
		expect(document.body.innerHTML).to.equal('<div></div>');
	});

	it('view with tag name', function() {
		const view = new Backbone.View({ tagName: 'section' });
		document.body.appendChild(view.el);
		expect(document.body.innerHTML).to.equal('<section></section>');
	});

	it('view with id', function() {
		const view = new Backbone.View({ id: 'demo-view' });
		document.body.appendChild(view.el);
		expect(document.body.innerHTML).to.equal('<div id="demo-view"></div>');
	});

	it('view with class', function() {
		const view = new Backbone.View({ className: 'critical' });
		document.body.appendChild(view.el);
		expect(document.body.innerHTML).to.equal('<div class="critical"></div>');
	});

	it('demo view with tag name', function() {
		const DemoView = require('./app/demo-view').DemoView;
		const demoView = new DemoView();
		document.body.appendChild(demoView.el);
		expect(document.body.innerHTML).to.equal('<form></form>');
	});

	it('demo view calling render', function() {
		
		const { DemoView } = require('./app/demo-view');

		const callback = sinon.spy();
		
		const demoView = new DemoView({
			sendEmail: function(data) {
				callback(data);
			}
		});
		
		document.body.appendChild(demoView.render().el);
		document.querySelector('#first-name').value = 'Bob';
		document.querySelector('#last-name').value = 'Smith';
		document.querySelector('#send-button').click();

		expect(callback.calledOnce).to.be.true;
		expect(callback.args[0][0]).to.deep.equal({ firstName: 'Bob', lastName: 'Smith' })
	});

});