import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavScreen from "../screens/NavScreen";
// import Employee from './Employee';
// import City from './City';
// import Catagory from './Catagory';
// import Suppliers from './Supplier'
// import Orders from './Order'

import EmployeesScreen from "../screens/EmployeesScreen";
import EmployeeScreen from "../screens/EmployeeScreen";
import CitiesScreen from "../screens/CitiesScreen";
import CityScreen from "../screens/CityScreen";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryScreen from "../screens/CatagoryScreen";
import SuppliersScreen from "../screens/SuppliersScreen";
import SupplierScreen from "../screens/SupplierScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import ProductScreen from "../screens/ProductScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/" component={NavScreen} />
        <Route exact path={`/admin/employees`} component={EmployeesScreen} />
        <Route exact path={`/admin/employees/:id`} component={EmployeeScreen} />
        <Route exact path={`/admin/cities/`} component={CitiesScreen} />
        <Route exact path={`/admin/cities/:id`} component={CityScreen} />
        <Route exact path={`/admin/catagories/`} component={CatagoriesScreen} />
        <Route
          exact
          path={`/admin/catagories/:id`}
          component={CatagoryScreen}
        />
        <Route
          exact
          path={`/admin/changepassword`}
          component={ChangePasswordScreen}
        />
        <Route exact path={`/admin/suppliers/`} component={SuppliersScreen} />
        <Route exact path={`/admin/suppliers/:id`} component={SupplierScreen} />
        <Route exact path={`/admin/orders/`} component={OrdersScreen} />
        <Route exact path={`/admin/orders/:id`} component={OrderScreen} />
        <Route exact path={`/admin/products/:id`} component={ProductScreen} />
      </Switch>
    </Router>
  );
}
