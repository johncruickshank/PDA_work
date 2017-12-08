var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
    var number2 = 2;
    var number5 = 5;
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("should be able to add 2 numbers", function() {
    calculator.numberClick(7);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 10);
  });

  it("should be able to subtract a number from the total", function() {
    calculator.numberClick(10);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 7);
  });

  it("should be able to multiply 2 numbers", function() {
    calculator.numberClick(10);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 30);
  });

  it("should be able to divide 2 numbers", function() {
    calculator.numberClick(10);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 5);
  });

  it("should be able to click a number", function() {
    calculator.numberClick(10);
    assert.equal(calculator.runningTotal, 10);
    assert.equal(calculator.newTotal, false);
  });

  it("should be able to click an operator", function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-");
    assert.equal(calculator.runningTotal, 3);
    assert.equal(calculator.previousOperator, "-");
  });

  it("should be able to click an operator when equals", function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 3);
    assert.equal(calculator.previousOperator, null);
  });

  it("should be able to click clear when total is 0", function() {
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
  });

  it("should be able to click clear when total is not 0", function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousOperator, "+");
    assert.equal(calculator.previousTotal, 1);
  });

});
