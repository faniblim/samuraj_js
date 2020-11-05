import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state, {
  addMessage,
  addPost,
  subscribe,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntiereTree = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        // newMessageText={newMessageText}
      />
      {/* // </React.StrictMode>, */}
    </BrowserRouter>, document.getElementById("root")
  );
};

rerenderEntiereTree(state);

subscribe(rerenderEntiereTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
