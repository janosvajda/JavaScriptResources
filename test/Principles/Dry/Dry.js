var assert = require('assert');

const classMessage = require('../../../Principles/Dry/Dry.js');

const obj = new classMessage();

describe('Test of Dry principle', function () {
  describe('Test of Dry principle', function () {
    it('Message class create method should return by "\Hello world!\" string."', function () {
      assert.equal(obj.create('Hello', 'world!'), 'Hello world!');
    });
  });
});
