var config = require("./webpack.base.config.babel");

module.exports = config("prod")
  .compileServer()
  .uglify()
  .build();
