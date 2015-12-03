import * as Utils from "./utils";

function configBuilder(env) {
  let config = Utils.base();

  config.plugins.push(Utils.getEnvPlugin(env));

  if (env === "watch") {
    Utils.enableHotReload(config);
  }

  if (env === "dev") {
    Utils.enableExtractText(config);
    Utils.compileServer(config);
  }

  if (env === "prod") {
    Utils.enableExtractText(config);
    Utils.compileServer(config);
    Utils.enableUglify(config);
  }

  return config;
};

export default configBuilder(process.env.ENV);