import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginScreen from './LoginScreen'
import ResetPassword from './ResetPassword'
import RequestPin from './RequestPin'
import authlinks from '../defaults/authlinks.json'

export default function AuthScreen() {
  return (
        <BrowserRouter>
          <Switch>
            <Route path={authlinks.ResetPassword} component={ResetPassword} />
            <Route path={authlinks.RequestPin} component={RequestPin} />
            <Route path={authlinks.Login} component={LoginScreen} />
          </Switch>
        </BrowserRouter>
  );
}
