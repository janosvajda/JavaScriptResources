class Engine {
  constructor(props) {
    this.CountOfPistons = props.CountOfPistons;
  }
};

class Window {
  constructor(props) {
    this.windowWidth = props.windowWidth;
  }
};

class Wheel {
  constructor(props) {
    this.wheelHub = props.wheelHub;
  }
};

/**
 * This create the car components by the parameters given.
 */
class CarFactory {
  constructor(type, props) {
    if (type === "engine")
      return new Engine(props);
    if (type === "window")
      return new Window(props);
    if (type === "wheel")
      return new Wheel(props);
  }
};

module.exports = CarFactory;
