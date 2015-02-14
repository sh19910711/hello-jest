jest.dontMock("../hello")
jest.dontMock("mock-fs")

describe("hello()", function() {
  it("should return hello", function() {
    var hello = require("../hello")
    expect(hello()).toBe("hello")
  })
})
