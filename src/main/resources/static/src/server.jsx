import React from "react";
import ReactDOM, { render } from "react-dom";
import ReactDOMServer from "../../../../../node_modules/react-dom/server";
import Redux, { createStore } from "redux";
import ReactRedux, { Provider } from "react-redux";
import Immutable, { fromJS } from "immutable";
import mockApp from "src/mock/reducers";
import Library from "src/library";

window.App = function(data) {
  Object.keys(data).map(function(value, index) {
    data[value] = fromJS(data[value])
  });

  const store = createStore(mockApp, data);

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Library/>
    </Provider>
  );

  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">
<head lang="en">
  <meta charset="UTF-8" />
  <title>boilerplate</title>
</head>
<body>
<h1>boilerpleit!</h1>
<div id="app">${html}</div>
<script>
window.__INITIAL_STATE__ = ${JSON.stringify(data)}
</script>
<script src="/client.js"></script>
</body>
</html>
`;
};
