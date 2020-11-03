import React from "react";
import useFetchCost from "../hooks/useFetchCost";
import CenterPaper from "../components/CenterPaper";
import Loading from "../components/Loading";
import ErrorText from "../components/ErrorText";
import CartTable from "../section/CartTable";

export default function DisplayAddOrder({ cart, address_id }) {
  const { err, loading, result } = useFetchCost({ cart, address_id });

  return (
    <CenterPaper>
      {loading && <Loading loading={true} center={true} />}
      {err && <ErrorText> {err}</ErrorText>}
      <CartTable orders={result.cart_orders} />
      <b> Total: {result.total}</b>
      <b>
        {" "}
        Delivery Charge: {result.deliveryCharge} from {result.suppliers}{" "}
        supplier(s)
      </b>
      <text>
        Delivery Charge cost Extra for items ordered from different city
      </text>
    </CenterPaper>
  );
}
