import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  updateNewPostText,
  updateNewMessageText,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntiereTree = (state) => {
  ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        // newMessageText={newMessageText}
      />
      {/* // </React.StrictMode>, */}
    </BrowserRouter>,
    document.getElementById("root")
  );
};
