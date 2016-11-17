'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

describe('Array', function() {

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {
			expect(-1).to.equal([1,2,3].indexOf(4));
    });
  
	});

	describe('spy-demo', function() {

		it('test spy', function() {

			var callback = sinon.spy();

			//callback();

			expect(callback.called).to.be.true;


		});

	});


});