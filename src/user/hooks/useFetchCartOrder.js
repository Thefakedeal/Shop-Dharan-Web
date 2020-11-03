import { useState, useEffect } from "react";


export default function useFetchCost({ cart = []}) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    cart_orders: [],
  
  });
  const [err, setErr] = useState();

  useEffect(() => {
    if (cart.length === 0) {
      setResult({
        cart_orders: [],
      });
      return;
    }
    setLoading(true);
    fetch(`/api/user/orders/getproductcost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        orders: cart,
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
  }, [cart]);

  return { err, loading, result };
}