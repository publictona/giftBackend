const chai = require('chai');
const expect = chai.expect; // Use 'expect' style assertions

// A simple function to test
function add(a, b) {
  return a + b;
}

// Mocha test suite
describe('Addition Function', function() {

  // Mocha test case 1
  it('should return 4 when adding 2 and 2', function() {
    const result = add(2, 2);
    expect(result).to.equal(4); // Chai assertion
  });

  // Mocha test case 2
  it('should return -1 when adding -2 and 1', function() {
    const result = add(-2, 1);
    expect(result).to.equal(-1); // Chai assertion
  });

});
