var assert = require('assert');

const DaysBetweenTwoDates = require('../../../../Functions/DateTime/DaysBetweenTwoDates/DaysBetweenTwoDates.js');

const obj = new DaysBetweenTwoDates();

let d1 = new Date(2020,12,13);
let d2 = new Date(2020,12,15);

let d3 = new Date(1970,12,13);
let d4 = new Date(2051,12,15);

describe('DaysBetweenTwoDates class', function () {
  describe('test two dates', function () {
    it('calculate number of days between two real dates. it should be 2 days.', function () {
      assert.equal(obj.calculate(d1, d2), 2);
    });
  });

  describe('test two null value', function () {
    it('calculate number of days between two null value. it should be 0.', function () {
      assert.equal(obj.calculate(null, null), 0);
    });
  });

  describe('test two real date', function () {
    it('calculate number of days between two real dates. it should be 29587 days.', function () {
      assert.equal(obj.calculate(d3, d4), 29587);
    });
  });

});
