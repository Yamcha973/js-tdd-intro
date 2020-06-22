const assert = require('assert');
const rectangle = require('../rectangle');

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it
  it('says that is a square', () => {
    let rectangle1 = new rectangle(5, 5);
    assert.strictEqual(rectangle1.isSquare(5, 5), true);
  });

  it('says that isn\'t a square', () => {
    let rectangle2 = new rectangle(13, 7);
    assert.strictEqual(rectangle2.isSquare(13, 7), false);
  });

  it('return correct area', () => {
    let rectangle2 = new rectangle(13, 7);
    assert.strictEqual(rectangle2.getArea(13, 7), 91);
  });

  it('return correct perimeter', () => {
    let rectangle2 = new rectangle(13, 7);
    assert.strictEqual(rectangle2.getPerimeter(13, 7), 40);
  });
});

