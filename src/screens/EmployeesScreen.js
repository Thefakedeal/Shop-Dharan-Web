import React from "react";

import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";

import DisplayEmployees from "../sections/DisplayEmployees";

export default function EmployeesScreen() {
  return (
    <LightScreen>
      <NavBar title="Employees" />
      <DisplayEmployees />
    </LightScreen>
  );
}
