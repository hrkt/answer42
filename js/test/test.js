const assert = require('assert')
const answer = require("../answer")
describe('The answer', function() {
  describe('#answer42()', function() {
    it('should return 42', function() {
      assert.equal(answer.answer42(), 42n)
    })
  })
})