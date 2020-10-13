import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Admin from './Admin'

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/supplier" component={LoadingScreen} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={LoadingScreen} />
      </Switch>
    </Router>
  );
}
