var assert = require('assert');

const Employe = require('../../../../DesignPatterns/Creational/Prototype/Prototype.js');

const obj = new Employe('John', 'Doe');

describe('Employe class', function () {
  describe('test name of created empoye', function () {
    it('It must be John.', function () {
      assert.equal(obj.firstName, 'John');
    });
    it('It must be Doe.', function () {
      assert.equal(obj.lastName, 'Doe');
    });
  });
});
