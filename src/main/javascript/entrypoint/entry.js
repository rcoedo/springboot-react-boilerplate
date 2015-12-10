import { serverSideRender, clientSideRender } from "entrypoint/render";

if (window.__SSR__) {
  window.serverSideRender = serverSideRender;
  window.env = process.env;
} else {
  clientSideRender();
}
