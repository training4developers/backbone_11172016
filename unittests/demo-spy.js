'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

describe('Spy Examples', function() {

	it('spy was called', function() {

		var callback = sinon.spy();

		callback();

		expect(callback.called).to.be.true;
	});

	it('spy was called once', function() {

		var callback = sinon.spy();

		callback();

		expect(callback.calledOnce).to.be.true;
	});

	it('spy was called on', function() {

		var callback = sinon.spy();
		var obj = { id: 2 };

		callback.call(obj);

		expect(callback.calledOn(obj)).to.be.true;
	});

	it('spy was called with', function() {

		var callback = sinon.spy();
		var obj = { id: 2 };

		callback.call(obj, 1, 2, 3);

		expect(callback.calledWith(1,2,3)).to.be.true;
	});

	it('stub returns value', function() {

		var callback = sinon.stub().returns(34);

		expect(callback()).to.equal(34);
	});

});