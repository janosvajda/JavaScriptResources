var assert = require('assert');

const classD = require('../../../Principles/LawOfDemeter/BreakLawOfDemeter.js');

const objD = new classD('Hello');

describe('Test of break of Demeter of law', function () {
  describe('#Equality of two Class A value', function () {
    it('Class A value must be "Hello from A."', function () {
      assert.equal(objD.getC().getB().getA().getValue(), 'Hello from A.');
    });
  });
});
