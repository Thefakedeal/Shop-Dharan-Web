import React from "react";

import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";

import { SupplierSearchParams } from "../contexts/SupplierSearchParams";

import DisplaySupplierSelection from "../sections/DisplaySupplierSelections";
import DisplaySuppliers from "../sections/DisplaySuppliers";

export default function SuppliersScreen() {
  return (
    <LightScreen>
      <NavBar title={"Suppliers"} />
      <SupplierSearchParams>
        <DisplaySupplierSelection />
        <DisplaySuppliers />
      </SupplierSearchParams>
    </LightScreen>
  );
}
