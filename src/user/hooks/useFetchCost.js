import { useState, useEffect } from "react";


export default function useFetchCost({ cart = [], address_id}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    cart_orders: [],
    deliveryCharge: 0,
    suppliers: 0,
    total: 0,
  });
  const [err, setErr] = useState();

  useEffect(() => {
  
    if (cart.length === 0 || !address_id) {
      setResult({
        cart_orders: [],
        deliveryCharge: 0,
        suppliers: 0,
        total: 0,
      });
      return;
    }
    setLoading(true);
    fetch(`/api/user/orders/getcost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orders: cart,
        address_id: address_id
      }),
    })
      .then(async (response) => {
        if (!response.ok)
          throw (await response.text()) || "Something Went Wrong";
        return response.json();
      })
      .then((res) => {
        setResult(res);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cart,address_id]);

  return { err, loading, result };
}