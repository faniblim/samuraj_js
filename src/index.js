import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntiereTree = (state) => {
  ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      {/* // </React.StrictMode>, */}
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntiereTree(store.getState());

store.subscribe(rerenderEntiereTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
