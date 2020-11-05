import React from "react";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import DisplayOrder from "../section/DisplayOrder";

export default function OrderScreen() {
  return (
    <LightScreen>
      <NavBar title="Order" />
      <DisplayOrder />
    </LightScreen>
  );
}
