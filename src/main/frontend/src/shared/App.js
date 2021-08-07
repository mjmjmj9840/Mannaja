import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  CreateLink,
  CreatedLink,
  SelectProfile,
  CreateProfile,
} from "../pages";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/createLink" component={CreateLink} />
        <Route path="/createdLink" component={CreatedLink} />
        <Route path="/:group_link/user/login" component={SelectProfile} />
        <Route path="/:group_link/user/signup" component={CreateProfile} />

        {/* Switch : component의 중복 출력 방지 */}
        {/*
        <Switch>
          <Route path="/:group_link/user/login" component={SelectProfile} />
          <Route path="/user/login" component={SelectProfile} />
        </Switch>
        */}
        {/* Redirect : Redirect 할 path */}
        {/* <Redirect from='/' to='/' /> */}
      </>
    );
  }
}

export default App;
