var config = require("./webpack.base.config");

module.exports = config("dev")
  .compileServer()
  .build();
