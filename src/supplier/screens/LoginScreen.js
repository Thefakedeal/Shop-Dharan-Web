import React from "react";
import Logo from "../components/Logo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LightScreen from "../components/LightScreen";
import LoginForm from "../forms/LoginForm";
import authlinks from '../defaults/authlinks.json'
import ResetPasswordForm from '../forms/ResetPasswordForm'
import RequestPinForm from '../forms/RequestPinForm'

export default function LoginScreen() {
  return (
    <LightScreen>
      <Logo variant="red" />
      <BrowserRouter>
        <Switch>
          <Route path={authlinks.RequestPin} component={RequestPinForm} />
          <Route path={authlinks.ResetPassword} component={ResetPasswordForm} />
          <Route path={authlinks.Login} component={LoginForm} />
        </Switch>
      </BrowserRouter>
    </LightScreen>
  );
}
