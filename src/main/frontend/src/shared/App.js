import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CreateLink } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/CreateLink" component={CreateLink} />
        {/* Switch : component의 중복 출력 방지 */}
        {/*
        <Switch>
          <Route path="/Main/:groupName" component={Main} />
          <Route path="/Main" component={Main} />
        </Switch>
        */}
        {/* Redirect : Redirect 할 path */}
        {/* <Redirect from='/' to='/' /> */}
      </div>
    );
  }
}

export default App;
