var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("should add 2 numbers together", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("13")
  });

  it("should  subtract a number from another", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("5")
  });

  it("should  multiply 2 numbers", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("36")
  });

  it("should  divide a number by another", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number3")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("3")
  });

  it("should chain multiple operations", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number3")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("6")
  });

  it("should chain multiple operations", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number3")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("14")
  });

  it("should return negative numbers where appropriate", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-7")
  });

  it("should work with decimals", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("4.5")
  });

  it("should work with very large numbers", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number2")).click();
    element(by.css("#number2")).click();
    element(by.css("#number2")).click();
    element(by.css("#number2")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("22199778")
  });

  it("should handle dividing by zero - return error", function() {
    running_total = element(by.css("#running_total"))
    element(by.css("#number9")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("error")
  });

});
