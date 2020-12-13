let instance = null

/**
 * Singleton class example.
 */
class Singleton {

  constructor() {
    this.value = new Date().getTime();
  }

  getValue() {
    return this.value;
  }

  static getInstance() {
    if (!instance) {
      instance = new Singleton();
    }
  }
}
