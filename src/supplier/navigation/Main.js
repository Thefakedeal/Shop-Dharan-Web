import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavScreen from "../screens/NavScreen";
import InfoScreen from "../screens/InfoScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductScreen from "../screens/ProductScreen";
import NewOrdersScreen from "../screens/NewOrdersScreen";
import OldOrdersScreen from "../screens/OldOrdersScreen";

import NavLinks from "../defaults/navlinks.json";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/supplier/"} component={NavScreen} />
        <Route exact path={`${NavLinks["About Me"]}`} component={InfoScreen} />
        <Route exact path={`${NavLinks.Products}`} component={ProductsScreen} />
        <Route
          exact
          path={`${NavLinks.Products}/:id`}
          component={ProductScreen}
        />
        <Route exact path={`${NavLinks.Orders}`} component={NewOrdersScreen} />
        <Route
          exact
          path={`${NavLinks.Orders}/old`}
          component={OldOrdersScreen}
        />
        <Route
          exact
          path={NavLinks["Change Password"]}
          component={ChangePasswordScreen}
        />
      </Switch>
    </Router>
  );
}
