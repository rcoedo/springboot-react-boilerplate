import React from "react";
import ReactDOM, { render } from "react-dom";
import ReactDOMServer from "../../../node_modules/react-dom/server";
import Redux, { createStore } from "redux";
import ReactRedux, { Provider } from "react-redux";
import Immutable, { fromJS } from "immutable";
import mockApp from "src/mock/reducers";
import Library from "src/library";

window.App = function(data) {
  Object.keys(data).map(function(value) {
    data[value] = fromJS(data[value])
  });
  const store = createStore(mockApp, data);

  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <Library/>
    </Provider>
  );
};
