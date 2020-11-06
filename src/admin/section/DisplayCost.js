import React from "react";

export default function DisplayCost({ total, deliveryCharge,numOFSuppliers }) {
  return (
    <>
      <b> Total: {total}</b>
      <b>
        Delivery Charge: {deliveryCharge} from {numOFSuppliers} supplier(s)
      </b>
    </>
  );
}