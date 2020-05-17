import React from "react";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import CreateGroup from "./Components/CreateGroup";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dash_board" component={Dashboard} />
      <Route path="/create_group" component={CreateGroup} />
    </Switch>
  );
}

export default App;
