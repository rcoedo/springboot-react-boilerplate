import { createStore } from "redux";
import { Root, loadInitialStateFromWindow, renderApp } from "entrypoint/utils";
import reducers from "app/reducers";

const store = createStore(reducers, loadInitialStateFromWindow());
renderApp(<Root store={store}/>);
