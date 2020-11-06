import React from "react";
import { useHistory } from "react-router-dom";

import DisplayLoading from "../components/DisplayLoading";
import DisplayErrors from "../components/DisplayErrors";
import CustomText from "../components/CustomText";

import UpdateOrderStatus from "./UpdateOrderStatus";
import useFetchOrder from "../hooks/useFetchOrder";
import OrderedItemsTable from "../tables/OrderedItemsTable";
import DisplayUserInfo from "./DisplayUserInfo";
import DisplayAddress from "./DisplayAddress";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";
import CustomButton from "../components/CustomButton";
import DisplayCost from "./DisplayCost";

function ReturnDateTime(dateString) {
  function addZero(i) {
    if (i < 10) return `0${i}`;
    return `${i}`;
  }
  const date = new Date(dateString);
  let hourTime = date.getHours();
  const ampm = hourTime < 12 ? "AM" : "PM";
  hourTime = hourTime % 12;
  hourTime += hourTime === 0 ? 12 : 0;
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hour = addZero(hourTime);
  const minutes = addZero(date.getMinutes());

  return `${hour}:${minutes} ${ampm} ${day}/${month}`;
}

function GetTotal(ordered_items = []) {
  const total = ordered_items.reduce((total, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    const cost = price * quantity;
    const currentTotal = Number(total);
    return currentTotal + cost;
  }, 0);
  return Number(total);
}

export default function DisplayOrder({ order_id }) {
  const { err, loading, result } = useFetchOrder({ order_id });
  const history = useHistory();

  async function DeleteOrder({ order_id }) {
    const sure = window.confirm("Are You Sure You Want To Delete Order?");
    if (!sure) return;
    const url = "/api/admin/orders/delete";
    const method = "DELETE";
    const request = await fetchWithCredentials(method, url, { order_id });
    if (request.ok) {
      alert("Order Deleted");
      return history.goBack();
    }
    alert("Failed To Delete");
  }

  if (loading) return <DisplayLoading loading={loading} />;
  if (err) return <DisplayErrors errors={[err]} />;

  return (
    <>
      <UpdateOrderStatus
        order_status={result.order.order_status}
        order_id={result.order.order_id}
      />
      <CustomButton
        onClick={() => {
          DeleteOrder({ order_id: result.order.order_id });
        }}
      >
        Delete Order
      </CustomButton>
      <DisplayUserInfo user={result.user} />
      <CustomText
        value={ReturnDateTime(result.order.ordered_time)}
        label="Ordered Time"
      />
      <OrderedItemsTable ordered_items={result.ordered_items} />
      <DisplayCost
        total={GetTotal(result.ordered_items) + parseInt(result.deliveryCharge)}
        deliveryCharge= {result.deliveryCharge}
        numOFSuppliers={result.numOfSuppliers}
      />
      <DisplayAddress address={result.address} />
    </>
  );
}
