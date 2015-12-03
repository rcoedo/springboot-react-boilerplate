import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "app/app";

export function getInitialState() {
  return window.__INITIAL_STATE__;
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
