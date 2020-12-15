var assert = require('assert');

const classD = require('../../../Principles/LawOfDemeter/LawOfDemeter.js');

const objD = new classD();

describe('Test of Law of demeter', function () {
  describe('#Equality of two Class A value', function () {
    it('Class A value must be "Hello from A."', function () {
      assert.equal(objD.getAValue(), 'Hello from A.');
    });
  });
});
