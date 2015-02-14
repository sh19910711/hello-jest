var mock = require("mock-fs")
console.log("mock = ", mock.fs())
module.exports = mock.fs({
  "foo.txt": mock.file({
    content: "mocked"
  })
})
