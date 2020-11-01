import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Admin from './Admin'
import Supplier from './Supplier'
import User from './User'

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/supplier" component={Supplier} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={User} />
      </Switch>
    </Router>
  );
}
