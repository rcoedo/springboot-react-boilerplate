import React, { Component } from "react";
import { render } from "react-dom";
import { fromJS } from "immutable";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "src/app";

export function immutabilifyState(state) {
  let newState = {};
  Object.keys(state).map(function(key) {
    newState[key] = fromJS(state[key]);
  });
  return newState;
}

export function loadInitialStateFromWindow() {
  return immutabilifyState(window.__INITIAL_STATE__);
}

export function renderApp(component) {
  render(component, document.getElementById("app"));
}

export class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <App/>
      </Provider>
    );
  }
}
