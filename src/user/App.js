import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import {
  LoginInfo,
  useLoading,
  useIsLoggedIn,
  useRole,
  useContinueWithoutLogin,
} from "./contexts/LoginInfo";
import { Cart } from "./contexts/Cart";
import { Settings } from "./contexts/Settings";
import ROLES from "../defaults/roles.json";
import LoginScreen from "./screens/LoginScreen";
import Main from "./navigation/Main";
import { Card } from "@material-ui/core";

function Wrapper() {
  const loading = useLoading();
  const isLoggedIn = useIsLoggedIn();
  const role = useRole();
  const { continueWithoutLogin } = useContinueWithoutLogin();
  if (loading) return <LoadingScreen />;
  if ((isLoggedIn && role === ROLES.USER) || continueWithoutLogin)
    return <Main />;
  return <LoginScreen />;
}

function App() {
  return (
    <Settings>
      <LoginInfo>
        <Cart>
          <Wrapper />
        </Cart>
      </LoginInfo>
    </Settings>
  );
}

export default App;
