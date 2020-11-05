import useFetchWithAuth from "./useFetchWithAuth";


export default function useFetchOrders({ order_status }) {
  const searchParams = new URLSearchParams();
  if (order_status) searchParams.append("order_status", order_status);
  const url = `/api/user/orders/getall?${searchParams}`;

  const { err, loading, result=[], reloadResources } = useFetchWithAuth(url);

  return { err, loading, result, reloadResources };
}