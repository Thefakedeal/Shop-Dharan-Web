import React from "react";
import { useParams } from "react-router-dom";

import LightScreen from "../components/LightScreen";
import NavigationBar from "../components/NavigationBar";
import DisplayProduct from "../section/DisplayProduct";

export default function ProductScreen() {
  const { id } = useParams();
  return (
    <LightScreen>
      <NavigationBar title={"Product"} />
      <DisplayProduct product_id={id} />
    </LightScreen>
  );
}
