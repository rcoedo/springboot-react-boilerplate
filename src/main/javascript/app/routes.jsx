import React from "react";
import { Route } from "react-router";
import App from "components/app";
import Counter from "components/counter";
import About from "components/about";

const routes = (
  <Route component={App}>
    <Route path="/" component={Counter}/>
    <Route path="about" component={About}/>
  </Route>
);

export default routes;
