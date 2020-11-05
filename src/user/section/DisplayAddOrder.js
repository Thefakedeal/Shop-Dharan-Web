import React from "react";
import useFetchCost from "../hooks/useFetchCost";
import CenterPaper from "../components/CenterPaper";
import Loading from "../components/Loading";
import ErrorText from "../components/ErrorText";
import CartTable from "../section/CartTable";
import DisplayCost from "../section/DisplayCost";

export default function DisplayAddOrder({ cart, address_id }) {
  const { err, loading, result } = useFetchCost({ cart, address_id });

  return (
    <CenterPaper>
      {loading && <Loading loading={true} center={true} />}
      {err && <ErrorText> {err}</ErrorText>}
      <CartTable orders={result.cart_orders} />
      <DisplayCost
        total={result.total}
        deliveryCharge={result.deliveryCharge}
        suppliers={result.suppliers}
      />
    </CenterPaper>
  );
}
