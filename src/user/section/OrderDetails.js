import React from "react";
import { msToTime } from "../helperFunctions/msToTime";

export default function OrderDetails({ order }) {
  const orderedTime = Date.parse(order.ordered_time);
  const currentTime = Date.now();
  const timePassed = currentTime - orderedTime;
  const display = msToTime(timePassed);
  return (
    <>
      <b>{order.order_id}</b>
      <text>{display}</text>
      <text>{order.order_status}</text>
    </>
  );
}
