import React from "react";
import Logo from "../components/Logo";
import LightScreen from "../components/LightScreen";

import Center from "../components/Center";
import RequestPinForm from '../forms/RequestPinForm'


export default function LoginScreen() {
  return (
    <LightScreen>
      <Center>
        <Logo variant="red" />
        <RequestPinForm />
      </Center>
    </LightScreen>
  );
}
