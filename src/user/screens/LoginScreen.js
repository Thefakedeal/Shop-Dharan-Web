import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "../components/Logo";
import LightScreen from "../components/LightScreen";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import Center from "../components/Center";
import RequestPinForm from '../forms/RequestPinForm'
import ResetPasswordForm from '../forms/ResetPasswordForm'
import authlinks from '../defaults/authlinks.json'

export default function LoginScreen() {
  return (
    <LightScreen>
      <Center>
        <Logo variant="red" />
        <BrowserRouter>
          <Switch>
            <Route path={authlinks.SignUp} component={SignupForm} />
            <Route path={authlinks.RequestPin} component={RequestPinForm} />
            <Route path={authlinks.ResetPassword} component={ResetPasswordForm} />
            <Route path={authlinks.Login} component={LoginForm} />
          </Switch>
        </BrowserRouter>
      </Center>
    </LightScreen>
  );
}
