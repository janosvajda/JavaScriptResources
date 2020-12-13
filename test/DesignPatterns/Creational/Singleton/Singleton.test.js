var assert = require('assert');

const SingletonInstance1 = require('../../../../DesignPatterns/Creational/Singleton/Singleton.js');
const SingletonInstance2 = require('../../../../DesignPatterns/Creational/Singleton/Singleton.js');


describe('Singleton class', function() {
  describe('#Equality of two Singleton instances()', function() {
    it('SingletonInstance1 and SingletonInstance2 must be equal', function() {
      assert.equal(SingletonInstance1, SingletonInstance2);
    });
  });
});
