import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Root, immutabilifyState } from "src/build/utils";
import reducers from "src/reducers";

window.App = function(state) {
  const store = createStore(reducers, immutabilifyState(state));
  return ReactDOMServer.renderToString(<Root store={store}/>);
};
