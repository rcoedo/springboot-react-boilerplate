import React from "react";
import { Route } from "react-router";
import App from "app/app";
import TodoList from "app/todo-list";
import About from "app/about";

const routes = (
  <Route component={App}>
    <Route path="/" component={TodoList}/>
    <Route path="about" component={About}/>
  </Route>
);

export default routes;
