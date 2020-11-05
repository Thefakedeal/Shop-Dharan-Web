import React from "react";

export default function DisplayCost({ total, deliveryCharge, suppliers }) {
  return (
    <>
      <b> Total: {total}</b>
      <b>
        {" "}
        Delivery Charge: {deliveryCharge} from {suppliers} supplier(s)
      </b>
      <text>
        Delivery Charge cost Extra for items ordered from different city
      </text>
    </>
  );
}
