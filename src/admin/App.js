import React from "react";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from './navigation/Main'
import { LoginInfo,useLoading, useIsLoggedIn, useRole } from "./contexts/LoginInfo";
import ROLES from '../defaults/roles.json'

function Wrapper(){
  const loading = useLoading();
  const isLoggedIn =  useIsLoggedIn();
  const role = useRole();
  if(loading) return <LoadingScreen />;
  if(!(isLoggedIn && (role!==ROLES.ADMIN || role !== ROLES.EMPLOYEE)) ) return <LoginScreen />;
  return <Main />
}

function App() {
  return (
    <LoginInfo>
      <Wrapper />
    </LoginInfo>
  );
}


export default App;
