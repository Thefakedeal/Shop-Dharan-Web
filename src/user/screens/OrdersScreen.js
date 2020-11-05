import React, { useState } from "react";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import OrderStatusSelect from "../components/OrderStatusSelect";
import useFetchOrders from "../hooks/useFetchOrders";
import Errors from "../components/Errors";
import Loading from "../components/Loading";
import DisplayOrders from "../section/DisplayOrders";
import CustomButton from '../components/CustomButton'

export default function OrdersScreen() {
  const [orderStatus, setOrderStatus] = useState("");
  const { err, loading, result, reloadResources } = useFetchOrders({order_status: orderStatus});
  return (
    <LightScreen>
      <NavBar title="Orders" />
      <CustomButton
        variant={"text"}
        onClick={reloadResources}
      >
          Reload
      </CustomButton>
      <OrderStatusSelect
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
        />
        {err && <Errors errors={[err]} />}
        {loading && <Loading loading={loading} />}
        {result.length >= 0 && <DisplayOrders orders={result}/>}
    </LightScreen>
  );
}
