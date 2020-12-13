var assert = require('assert');

const Singleton = require('../../../../DesignPatterns/Creational/Singleton/Singleton.js');

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

describe('Singleton class', function () {
  describe('#Equality of two Singleton instances()', function () {
    it('SingletonInstance1 and SingletonInstance2 must be equal.', function () {
      assert.equal(obj1, obj2);
    });
  });

  describe('#GetValue() should retutn by the same value.', function () {
    it('obj1.getValue() and obj2.getValue() must be equal.', function () {
      assert.equal(obj1.getValue(), obj2.getValue());
    });
  });
});
