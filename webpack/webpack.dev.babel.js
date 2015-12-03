var config = require("./webpack.base.config.babel");

module.exports = config("dev")
.compileServer()
.build();
