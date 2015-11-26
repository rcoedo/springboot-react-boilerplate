var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.MIX_ENV || "dev";
var isProduction = (env === "prod");

var plugins = [new ExtractTextPlugin("app.css")];
var jsxLoaders = ["babel?presets[]=react,presets[]=es2015"];
var entries = [path.resolve(__dirname, "web/static/js/index.js")];
var publicPath = "http://localhost:4001/";

// This is necessary to get the sass @import"s working
var stylePathResolves = (
  "includePaths[]=" + path.resolve("./") + "&" + "includePaths[]=" + path.resolve("./node_modules")
);

if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}
else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  jsxLoaders.unshift("react-hot");
  entries.unshift("webpack/hot/only-dev-server");
  entries.unshift("webpack-dev-server/client?" + publicPath);
}

module.exports = {
  devtool: isProduction ? null : "eval-sourcemaps",

  entry: entries,

  resolve: {
    extensions: ["", ".scss", ".js", ".jsx"],
    alias: {
      "js": path.resolve(__dirname, "web/static/js/")
    }
  },

  output: {
    path: path.resolve(__dirname, "src/main/resources/frontend/dist"),
    filename: "app.js",
    publicPath: publicPath
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: jsxLoaders, exclude: /(node_modules|bower_components)/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css" + "!sass?outputStyle=expanded&" + stylePathResolves)}
    ]
  },
  plugins: plugins
};
