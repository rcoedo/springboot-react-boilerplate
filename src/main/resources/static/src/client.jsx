import React from "react";
import ReactDOM, { render } from "react-dom";
import Redux, { createStore } from "redux";
import ReactRedux, { Provider } from "react-redux";
import Immutable, { fromJS, List } from "immutable";
import mockApp from "src/mock/reducers";
import Library from "src/library";

const initialState = window.__INITIAL_STATE__

Object.keys(initialState).map(function(value, index) {
  initialState[value] = fromJS(initialState[value])
});

const store = createStore(mockApp, initialState);

render(
  <Provider store={store}>
    <Library/>
  </Provider>,
  document.getElementById("app")
);
