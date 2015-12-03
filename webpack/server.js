#!/usr/bin/env babel-node
import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "./config.babel";

new WebpackDevServer(Webpack(config), {
  contentBase: "http://localhost:4000",
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false
  }})
  .listen(4000, "0.0.0.0", function (err, result) {
    if (err){
      console.error(err);
    }
    console.log("webpack-dev-server running on port 4000");
  });

process.stdin.resume();
process.stdin.on("end", function () {
  process.exit(0);
});
