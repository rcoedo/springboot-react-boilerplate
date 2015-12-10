import React from "react";
import { Route } from "react-router";
import App from "app/app";
import Tontuna from "app/testing";
import Fuck from "app/testing2";

const routes = (
  <Route component={App}>
    <Route path="/" component={Tontuna}/>
    <Route path="/testing" component={Fuck}/>
  </Route>
);

export default routes;
