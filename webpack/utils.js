import Webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

const basedir = path.resolve(__dirname, "../");

export function resolve(pth) {
  return path.resolve(basedir, pth);
}

export function base() {
  return {
    resolve: {
      extensions: ["", ".scss", ".js", ".jsx"],
      alias: {
        "app": resolve("src/main/javascript/app/"),
        "entrypoint": resolve("src/main/javascript/entrypoint/")
      }
    },

    entry: {
      client: resolve("src/main/javascript/entrypoint/client.jsx")
    },

    output: {
      path: resolve("src/main/resources/static/"),
      filename: "[name].js"
    },

    module: {
      loaders: []
    },

    plugins: []
  };
}

export function enableHotReload(config) {
  config.entry = [
    "webpack-dev-server/client?" + config.output.publicPath,
    "webpack/hot/dev-server",
    resolve("src/main/javascript/entrypoint/dev-client.jsx")
  ];
  config.output.filename = "client.js";
  config.output.publicPath = "http://localhost:4000/";
  config.plugins.push(new Webpack.NoErrorsPlugin());
  config.plugins.push(new Webpack.HotModuleReplacementPlugin());
  config.module.loaders.push({test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass-loader"});
  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
  );
}

export function enableUglify(config) {
  config.plugins.push(new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
}

export function enableExtractText(config) {
  config.module.loaders.push(
    {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")}
  );
  config.module.loaders.push(
    {test: /\.jsx?$/, loaders: ["babel?presets[]=react,presets[]=es2015"], exclude: /(node_modules|bower_components)/}
  );
  config.plugins.push(new ExtractTextPlugin("application.css"));
}

export function compileServer(config) {
  config.entry.server = resolve("src/main/javascript/entrypoint/server.jsx");
}

export function getEnvPlugin(env) {
  return new Webpack.DefinePlugin({
    "process.env": {
      "APP_ENV": "'" + env + "'",
      "NODE_ENV": JSON.stringify(env)
    }
  });
}
