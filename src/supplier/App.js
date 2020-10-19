import React from "react";
import LoadingScreen from '../components/LoadingScreen'
import { LoginInfo,useLoading, useIsLoggedIn, useRole } from "./contexts/LoginInfo";
import ROLES from '../defaults/roles.json'
import LoginScreen from './screens/LoginScreen'
import Main from './navigation/Main'

function Wrapper(){
  const loading = useLoading();
  const isLoggedIn =  useIsLoggedIn();
  const role = useRole();
  if(loading) return <LoadingScreen />;
  if(!(isLoggedIn && role === ROLES.SUPPLIER)) return <LoginScreen />;
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
