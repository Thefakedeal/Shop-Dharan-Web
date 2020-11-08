import React from "react";
import Logo from "../components/Logo";
import LightScreen from "../components/LightScreen";

import Center from "../components/Center";
import ResetPasswordForm from '../forms/ResetPasswordForm'

export default function LoginScreen() {
  return (
    <LightScreen>
      <Center>
        <Logo variant="red" />
        <ResetPasswordForm />
      </Center>
    </LightScreen>
  );
}
