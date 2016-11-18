'use strict';

const expect = require('chai').expect;

describe('Expect Examples', function() {

	it('to be equal', function() {
		expect('test').to.be.a('string');
	});

	it('to be equal', function() {
		expect(1).to.equal(1);
	});

	it('to have length', function() {
		expect([1,2,3]).to.have.length(3);
	});

	it('to have property', function() {
		expect({
			id: 2
		}).to.have.property('id');
	});	

	it('to deep equal', function() {
		expect({
			name: 'demo'
		}).to.deep.equal({
			name: 'demo'
		});
	});

	it('to be true', function() {
		expect(true).to.true;
	});

});