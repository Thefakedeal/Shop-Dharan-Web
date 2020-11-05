import React from 'react'
import NavBar from "../components/NavBar";
import LightScreen from "../components/LightScreen";
import ErrorText from "../components/ErrorText";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import { useIsLoggedIn } from "../contexts/LoginInfo";

export default function ChangePasswordScreen() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <LightScreen>
      <NavBar title="Change Password" />
      {isLoggedIn ? (
        <ChangePasswordForm />
      ) : (
        <ErrorText>You're Not Logged In</ErrorText>
      )}
    </LightScreen>
  );
}
