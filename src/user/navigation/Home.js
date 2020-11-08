import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NAVLINKS from "../defaults/navlinks.json";

import HomeScreen from "../screens/HomeScreen";
import SupplierScreen from "../screens/SupplierScreen";
import SearchScreen from "../screens/SearchScreen";
import NavScreen from "../screens/NavScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import CartProductScreen from "../screens/CartProductScreen";
import AddOrderScreen from "../screens/AddOrderScreen";
import AddressScreen from "../screens/AddressScreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

export default function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={NavScreen} />
        <Route exact path={NAVLINKS.Home} component={HomeScreen} />
        <Route exact path={NAVLINKS.Search} component={SearchScreen} />
        <Route exact path={NAVLINKS.Cart} component={CartScreen} />
        <Route
          exact
          path={`${NAVLINKS.Cart}/order`}
          component={AddOrderScreen}
        />
        <Route
          exact
          path={`${NAVLINKS.Cart}/:id`}
          component={CartProductScreen}
        />
        <Route exact path={NAVLINKS.Address} component={AddressScreen} />
        <Route
          exact
          path={`${NAVLINKS.Address}/add`}
          component={AddAddressScreen}
        />
        <Route exact path={NAVLINKS.Orders} component={OrdersScreen} />
        <Route exact path={`${NAVLINKS.Orders}/:id`} component={OrderScreen} />
        <Route exact path={NAVLINKS.User} component={UserScreen} />
        <Route exact path={`${NAVLINKS.User}/changepassword`} component={ChangePasswordScreen} />
        <Route exact path={`/suppliers/:id`} component={SupplierScreen} />
        <Route exact path={`/products/:id`} component={ProductScreen} />
      </Switch>
    </BrowserRouter>
  );
}
