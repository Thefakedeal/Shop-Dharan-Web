import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NAVLINKS from "../defaults/navlinks.json";

import HomeScreen from "../screens/HomeScreen";
import SupplierScreen from '../screens/SupplierScreen'
import NavScreen from '../screens/NavScreen';

export default function Home() {
  return (

        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={NavScreen} />
            <Route exact path={NAVLINKS.Home} component={HomeScreen} />
            <Route exact path={`/suppliers/:id`} component={SupplierScreen} />
          </Switch>
        </BrowserRouter>

  );
}
