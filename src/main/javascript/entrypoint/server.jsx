import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Root, immutabilifyState } from "entrypoint/utils";
import reducers from "app/reducers";

window.App = function(state) {
  const store = createStore(reducers, immutabilifyState(state));
  return ReactDOMServer.renderToString(<Root store={store}/>);
};
