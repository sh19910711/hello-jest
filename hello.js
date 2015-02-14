module.exports = function() {
  var fs = require("fs")
  var res = fs.readFileSync("foo.txt")
  console.log("res = ", res)
  return res
}
