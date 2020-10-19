import React, { useState, useEffect } from "react";
import useFetchOrder from "../hooks/useFetchOrders";
import CustomPagination from "../components/CustomPagination";
import DisplayLoading from "../components/DisplayLoading";
import DisplayErrors from "../components/DisplayErrors";
import CustomSwitch from '../components/CustomSwitch'
import useFetchOrderStatus from "../hooks/useFetchOrderStatus";

import OrdersTable from "../tables/OrdersTable";
import OrderTabs from "./OrderTabs";

export default function DisplayOrders() {
  const [page, setPage] = useState(0);
  const [orderStatus, setOrderStatus] = useState('');
  const [showOldest, setShowOldest] = useState(false);
  const { err, loading, result = [] } = useFetchOrder({
    page_number: page,
    order_status: orderStatus,
    order: showOldest?'asc':'desc'
  });

  const {
    err: ordererr,
    loading: orderloading,
    result: orderresult,
  } = useFetchOrderStatus();

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (result.length < 10) return setHasMore(false);
    setHasMore(true);
  }, [result]);

  useEffect(() => {
    setPage(0);
  }, [orderStatus,showOldest]);

  const DisplayOrderTabs = ()=>{
    if(orderloading) return <DisplayLoading loading={orderloading} />
    if (ordererr) return <DisplayErrors errors={[ordererr]} />;
    return <OrderTabs setOrderType={setOrderStatus} orderType={orderStatus} orderTypes={orderresult} />
  }

  const DisplayOrderTable = ()=>{
    if (loading) return <DisplayLoading loading={loading} />;
    if (err) return <DisplayErrors errors={[err]} />;
    return <OrdersTable orders={result} />
  }
  return (
    <>
      <DisplayOrderTabs/>
      <CustomSwitch  label="Show Oldest First" checked={showOldest} onChange={(e)=>{
        setShowOldest(show=> (!show))
      }}/>
      <CustomPagination page={page} setPage={setPage} hasMore={hasMore} />
      <DisplayOrderTable/>
    </>
  );
}
