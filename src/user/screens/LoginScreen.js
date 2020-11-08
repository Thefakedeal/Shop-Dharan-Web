import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "../components/Logo";
import LightScreen from "../components/LightScreen";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import Center from "../components/Center";
import authlinks from '../defaults/authlinks.json'

export default function LoginScreen() {
  return (
    <LightScreen>
      <Center>
        <Logo variant="red" />
        <BrowserRouter>
          <Switch>
            <Route path={authlinks.SignUp} component={SignupForm} />
            <Route path={authlinks.Login} component={LoginForm} />
          </Switch>
        </BrowserRouter>
      </Center>
    </LightScreen>
  );
}
