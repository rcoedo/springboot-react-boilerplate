var config = require("./webpack.base.config");

module.exports = config("local")
  .compileServer()
  .build();
