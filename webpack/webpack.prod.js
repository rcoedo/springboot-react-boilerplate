var config = require("./webpack.base.config");

module.exports = config("prod")
  .compileServer()
  .uglify()
  .build();
