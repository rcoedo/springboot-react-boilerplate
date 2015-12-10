import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOMServer from "react-dom/server";
import { createStore as _createStore, compose, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import { Router } from "react-router";
import { syncReduxAndRouter, routeReducer } from "redux-simple-router";
import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib/react";
import { devTools, persistState } from "redux-devtools";
import createHistory from "history/lib/createBrowserHistory";
import createMemoryHistory from "history/lib/createMemoryHistory";
import routes from "app/routes";
import _reducers from "app/reducers";

const reducers = combineReducers({..._reducers, routing: routeReducer});

function shouldRenderDevTools() {
  return (process.env.__DEV_TOOLS__ && !window.__SSR__);
}

class Root extends Component {
  debugPanel() {
    return (
      <DebugPanel top right bottom>
        <DevTools store={this.props.store} monitor={LogMonitor}/>
      </DebugPanel>
    );
  }

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <Router history={this.props.history}>
            {routes}
          </Router>
        </Provider>
        {shouldRenderDevTools() ? this.debugPanel() : null}
      </div>
    );
  }
}

function createStore(reducers, state) {
  let enhancers = [];
  if (shouldRenderDevTools()) {
    enhancers.unshift(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));
    enhancers.unshift(devTools());
  }
  return compose(...enhancers)(_createStore)(reducers, state);
}

export function serverSideRender(url, state) {
  const store = createStore(reducers, state);
  const history = createMemoryHistory(url);
  syncReduxAndRouter(history, store);
  return ReactDOMServer.renderToString(<Root store={store} history={history}/>);
}

export function clientSideRender() {
  const store = createStore(reducers, window.__INITIAL_STATE__);
  const history = createHistory();
  syncReduxAndRouter(history, store);
  render(<Root store={store} history={history}/>, document.getElementById("app"));
}

//function mapProps(state) {
//  return state
//}

//export default connect(mapProps)(Root);
