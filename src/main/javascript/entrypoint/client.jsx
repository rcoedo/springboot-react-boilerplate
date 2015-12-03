import React from "react";
import { createStore } from "redux";
import { Root, getInitialState, renderApp } from "entrypoint/utils";
import reducers from "app/reducers";

const store = createStore(reducers, getInitialState());
renderApp(<Root store={store}/>);
