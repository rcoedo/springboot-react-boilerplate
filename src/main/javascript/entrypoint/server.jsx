import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Root } from "entrypoint/utils";
import reducers from "app/reducers";

window.App = function(state) {
  const store = createStore(reducers, state);
  return ReactDOMServer.renderToString(<Root store={store}/>);
};
