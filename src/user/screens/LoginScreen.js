import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "../components/Logo";
import LightScreen from "../components/LightScreen";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import Center from "../components/Center";
export default function LoginScreen() {
  return (
    <LightScreen>
      <Center>
        <Logo variant="red" />
        <BrowserRouter>
          <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </BrowserRouter>
      </Center>
    </LightScreen>
  );
}
