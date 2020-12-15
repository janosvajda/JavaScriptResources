var assert = require('assert');

const classMessage = require('../../../Principles/Dry/NonDry.js');

const obj = new classMessage();

const message = 'non DRY code still can be unit tested but it does not mean that it is correct!';

describe('Test of breaking DRY principle', function () {
  describe('Test of non DRY principle', function () {
    it('Message class create method should return by "\Hello world!\" string."', function () {
      assert.equal(obj.showWelcome('world!'), 'Hello world!');
    });

    it('Message class create method should return by "\Warning! Error!\" string."', function () {
      assert.equal(obj.showWarning('Error!'), 'Warning! Error!');
    });

    it('Message class create method should return by "\Info: '+message+'\" string."', function () {
      assert.equal(obj.showInfo(message), 'Info: ' + message);
    });

  });
});
