var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var basedir = path.resolve(__dirname, "../");

var enableHotReload = function(config) {
  config.output.publicPath = "http://localhost:4001/";

  config.entry = [
    "webpack-dev-server/client?" + config.output.publicPath,
    "webpack/hot/dev-server",
    path.resolve(basedir, "src/main/javascript/entrypoint/dev-client.jsx")
  ];

  config.output.filename = "client.js";

  config.plugins.push(new Webpack.NoErrorsPlugin());
  config.plugins.push(new Webpack.HotModuleReplacementPlugin());

  config.module.loaders.push(
    {test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass-loader"}
  );

  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
  );

  return config;
};

var enableUglify = function(config) {
  config.plugins.push(
    new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  );

  return config;
};

var enableExtractText = function(config) {
  config.module.loaders.push(
    {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")}
  );

  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
  );

  config.plugins.push(
    new ExtractTextPlugin("application.css")
  );

  return config;
};

var config = {
  resolve: {
    extensions: ["", ".scss", ".js", ".jsx"],
    alias: {
      "app": path.resolve(basedir, "src/main/javascript/app/"),
      "entrypoint": path.resolve(basedir, "src/main/javascript/entrypoint/")
    }
  },

  entry: {
    client: path.resolve(basedir, "src/main/javascript/entrypoint/client.jsx")
  },

  output: {
    path: path.resolve(basedir, "src/main/resources/static/"),
    filename: "[name].js"
  },

  module: {
    loaders: []
  },

  plugins: []
};

module.exports = function(env) {
  var options = {
    uglify: false,
    hotReload: false,
    server: false
  };

  var hotReload = function() {
    options.hotReload = true;
    return this;
  };

  var uglify = function() {
    options.uglify = true;
    return this;
  };

  var compileServer = function() {
    options.server = true;
    return this;
  };

  var build = function() {
    config.plugins.push(
      new Webpack.DefinePlugin({
        "process.env": {
          "APP_ENV": "'" + env + "'",
          "NODE_ENV": JSON.stringify(env)
        }
      })
    );

    if (options.uglify) {
      config = enableUglify(config);
    }

    if (options.hotReload) {
      config = enableHotReload(config);
    } else {
      config = enableExtractText(config);
    }

    if (options.server) {
      config.entry.server = path.resolve(basedir, "src/main/javascript/entrypoint/server.jsx");
    }

    return config;
  };

  return {
    build: build,
    hotReload: hotReload,
    compileServer: compileServer,
    uglify: uglify
  };
};
