import { webpackConfig } from "./config-builder";

function configBuilder(env) {
  if (env === "watch") {
    return webpackConfig({
      hotReload: true,
      env: {
        __LOCAL__: true,
        __DEV_TOOLS__: true,
        __SSR_ENABLED__: false
      }});
  }

  if (env === "local") {
    return webpackConfig({
      env: {
        __LOCAL__: true,
        __DEV_TOOLS__: true,
        __SSR_ENABLED__: false
      }});
  }

  if (env === "development") {
    return webpackConfig({
      env: {
        __DEVELOPMENT__: true,
        __SSR_ENABLED__: true
      }});
  }

  if (env === "production") {
    return webpackConfig({
      uglify: true,
      env: {
        __PRODUCTION__: true,
        __SSR_ENABLED__: true
      }});
  }
  throw "Could not find configuration for env " + env;
};

export default configBuilder(process.env.ENV);
