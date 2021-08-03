import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import views from "./views";

const Router = () => {
  return (
    <BrowserRouter>
      {/* Redirect : Redirect 할 path */}
      {/* <Redirect from="/" to="/" /> */}
      <Switch>
        <Route exact path="/createLink" component={views.CreateLink} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
