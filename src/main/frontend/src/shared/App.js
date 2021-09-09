import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  CreateLink,
  CreatedLink,
  SelectProfile,
  CreateProfile,
  Main,
  TestCreate,
} from "../pages";

const App = () => {
  return (
    <>
      <Route path="/TestCreate" component={TestCreate} />
      <Route path="/createLink" component={CreateLink} />
      <Route path="/createdLink" component={CreatedLink} />
      <Route path="/:groupLink/user/login" component={SelectProfile} />
      <Route path="/:groupLink/user/signup" component={CreateProfile} />
      <Route path="/:groupLink/main" component={Main} />
      {/* Redirect : Redirect 할 path */}
      {/* <Redirect from='/' to='/' /> */}
    </>
  );
};

export default App;
