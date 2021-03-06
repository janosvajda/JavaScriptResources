class A {
  constructor(parameterA) {
    this.value = parameterA;
  }

  getValue() {
    return this.value;
  }
}

class B {
  constructor(parameterB) {
    this.value = parameterB;
    this.A = new A('Hello from A.');
  }

  getValue() {
    return this.value;
  }

  getA() {
    return this.A;
  }
}

class C {
  constructor(parameterC) {
    this.value = parameterC;
    this.B = new B('Hello from B.');
  }

  getValue() {
    return this.value;
  }

  getB() {
    return this.B;
  }
}

/**
 * Break Demeter of law example.
 *
 * Class D needs to get values from the class A.
 * In this case, we break the Demeter of law as we can retrieve in this way only:
 * const objD = new classD('Hello');
 * console.log("Value of class A: ", objD.getC().getB().getA().getValue());
 *
 * You can find the fix in the file: LawOfDemeter.js
 *
 * Unit tests still will pass, of course as it works. But it needs to be change.
 */
class D {
  constructor() {
    this.C = new C('Hello from C.');
  }

  getC() {
    return this.C;
  }
}

module.exports = D;
