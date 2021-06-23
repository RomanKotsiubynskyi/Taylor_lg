var assert = require('assert');

let func = require ('../Tailor.js')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(func.TaylorA(0.7).toPrecision(3), 0.535);
    });
  });
});
