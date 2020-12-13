var assert = require('assert');

const CarFactory = require('../../../../DesignPatterns/Creational/Factory/SimpleFactory.js');

let car = {};

let carProperties = {
    CountOfPistons: 6,
    windowWidth: 75,
    wheelHub: 1
  };

//Car gets its own engine, window and wheel by parameters
car.engine = new CarFactory("engine", carProperties);
car.window = new CarFactory("window", carProperties);
car.wheel = new CarFactory("wheel", carProperties);

describe('SimpleFactory class', function () {
  describe('engine property should equal with given CountOfPistons', function () {
    it('CountOfPistons in engine', function () {
      assert.equal(car.engine.CountOfPistons, carProperties.CountOfPistons);
    });
  });

  describe('window property should equal with given CountOfPistons', function () {
    it('windowWidth in window', function () {
      assert.equal(car.window.windowWidth, carProperties.windowWidth);
    });
  });

  describe('wheelHub property should equal with given wheelHub', function () {
    it('wheelHub in wheel', function () {
      assert.equal(car.wheel.wheelHub, carProperties.wheelHub);
    });
  });
});
