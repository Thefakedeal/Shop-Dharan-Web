import React from "react";
import { useHistory } from "react-router-dom";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import DisplayNewOrders from "../sections/DisplayNewOrders";
import CustomButton from "../components/CustomButton";
import NavLinks from "../defaults/navlinks.json";

export default function NewOrdersScreen() {
  const history = useHistory();
  return (
    <LightScreen>
      <NavBar title="Undelivered Orders" />
      <CustomButton onClick={() => history.push(`${NavLinks.Orders}/old`)}>
        Display Old Orders
      </CustomButton>
      <DisplayNewOrders />
    </LightScreen>
  );
}
