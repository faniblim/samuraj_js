import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={ () => (
              <Dialogs
              store={props.store}              
                // dialogsPage={props.state.dialogsPage}
                // dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          {/* <Route path="/sidebar" render={() =>  <Friends />} /> */}
          <Route
            path="/sidebar"
            render={() => <Friends 
              store={props.store}
              // state={props.state.sidebar}
               />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
