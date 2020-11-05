import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import { useCart } from "../contexts/Cart";
import DisplayAddOrder from "../section/DisplayAddOrder";
import AddressSelect from "../components/AddressSelect";
import CustomButton from "../components/CustomButton";
import addOrder from "../helperFunctions/addOrder";
import NAVLINKS from "../defaults/navlinks.json";

export default function AddOrderScreen() {
  const { cart } = useCart();
  const [address, setAddress] = useState("");
  const history = useHistory();
  return (
    <LightScreen>
      <NavBar title="Add Order" />
      <AddressSelect value={address} setValue={setAddress} />
      <CustomButton
        variant="text"
        onClick={() => {
          history.push(`${NAVLINKS.Address}/add`);
        }}
      >
        Add Address
      </CustomButton>
      <DisplayAddOrder cart={cart} address_id={address} />
      <CustomButton
        onClick={async () => {
          try {
            const confirm = window.confirm("Do You Want To Order?");
            if (!confirm) return;
            const resp = await addOrder(cart, address);
            if (resp) window.alert("Order Sucessful");
          } catch (err) {
            window.alert("Failed To Add Order");
          }
        }}
      >
        Order
      </CustomButton>
    </LightScreen>
  );
}
