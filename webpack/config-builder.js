import Webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

const basedir = path.resolve(__dirname, "../");

function resolve(pth) {
  return path.resolve(basedir, pth);
}

function base() {
  return {
    resolve: {
      extensions: ["", ".scss", ".js", ".jsx"],
      alias: {
        "app": resolve("src/main/javascript/app/"),
        "entrypoint": resolve("src/main/javascript/entrypoint/")
      }
    },

    entry: [
      resolve("src/main/javascript/entrypoint/entry.js")
    ],

    output: {
      path: resolve("src/main/resources/static/"),
      filename: "bundle.js"
    },

    module: {
      loaders: []
    },

    plugins: []
  };
}

function enableHotReload(config) {
  config.output.publicPath = "http://localhost:4000/";

  config.entry.unshift("webpack/hot/dev-server");
  config.entry.unshift("webpack-dev-server/client?" + config.output.publicPath);

  config.plugins.push(new Webpack.NoErrorsPlugin());
  config.plugins.push(new Webpack.HotModuleReplacementPlugin());

  config.module.loaders.push({test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass-loader"});
  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015,presets[]=stage-3"], exclude: /(node_modules|bower_components)/}
  );
}

function enableUglify(config) {
  config.plugins.push(new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
}

function enableExtractText(config) {
  config.module.loaders.push(
    {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")}
  );
  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
  );
  config.plugins.push(new ExtractTextPlugin("application.css"));
}

function getProcessPlugin(env) {
  return new Webpack.DefinePlugin({
    "process.env": env
  });
}

export function webpackConfig(options) {
  let config = base();

  if (options.hotReload) {
    enableHotReload(config);
  } else {
    enableExtractText(config);
  }

  if (options.uglify) {
    enableUglify(config);
  }

  config.plugins.push(getProcessPlugin(options.env));

  return config;
}
