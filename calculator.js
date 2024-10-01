function isValid(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Please, Give a valid number');
  }

  if (
    num1 === Infinity ||
    num2 === Infinity ||
    num1 === -Infinity ||
    num2 === -Infinity
  ) {
    throw new Error('Please, Give a number between Infinity and -Infinity');
  }

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Please, Give a valid number');
  }
}

class Calculator {
  constructor(num1, num2, validateFn) {
    this.num1 = num1;
    this.num2 = num2;
    this.validateFn = validateFn;
    this.validateFn(this.num1, this.num2);
  }

  set setX(value) {
    this.num1 = value;
    this.validateFn(this.num1, this.num2);
  }

  set setY(value) {
    this.num2 = value;
    this.validateFn(this.num1, this.num2);
  }

  logSum = () => {
    return this.num1 + this.num2;
  };

  logMul = () => {
    return this.num1 * this.num2;
  };

  logSub = () => {
    return this.num1 - this.num2;
  };

  logDiv = () => {
    if (this.num2 === 0) {
      throw new Error('Divider should be greater than zero');
    }
    return this.num1 / this.num2;
  };
}

const calculator = new Calculator(12, 0, isValid);
calculator.setX = 20;
calculator.setY = 5;
const logSumRef = calculator.logSum;
// console.log(logSumRef());
