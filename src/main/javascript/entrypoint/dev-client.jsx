import React, { Component } from "react";
import { createStore, compose } from "redux";
import { devTools, persistState } from "redux-devtools";
import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib/react";
import { Root, loadInitialStateFromWindow, renderApp } from "entrypoint/utils";
import reducers from "app/reducers";

const store = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducers, loadInitialStateFromWindow());

renderApp(
  <div>
    <Root store={store}/>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  </div>
);
