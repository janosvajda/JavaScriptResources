let instance = null

/**
 * Singleton class example.
 */
class Singleton {

  constructor() {
    if (this.value === null) {
      this.value = new Date().getTime(); //This is the same in each instance.
    }
  }

  getValue() {
    return this.value;
  }

  static getInstance() {
    if (!instance) {
      instance = new Singleton(); //It creates a new instance if it does not exists.
    }
    return instance;
  }
}

module.exports = Singleton;
