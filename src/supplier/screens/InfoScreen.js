import React from "react";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import DispayMyInfo from "../sections/DisplayMyInfo";

export default function InfoScreen() {
  return (
    <LightScreen>
      <NavBar title={"About Me"} />
      <DispayMyInfo />
    </LightScreen>
  );
}
