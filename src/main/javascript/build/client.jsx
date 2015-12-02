import { createStore } from "redux";
import { Root, loadInitialStateFromWindow, renderApp } from "src/build/utils";
import reducers from "src/reducers";

const store = createStore(reducers, loadInitialStateFromWindow());
renderApp(<Root store={store}/>);
