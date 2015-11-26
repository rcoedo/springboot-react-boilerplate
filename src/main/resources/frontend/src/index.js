import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { fromJS, List } from "immutable";
import mockApp from "src/mock/reducers";
import Library from "src/library";

window.AppData = {
  texts: new List()
};

const store = createStore(mockApp, window.AppData);

render(<Provider store={store}>
         <Library/>
       </Provider>,
       document.getElementById("app"));
