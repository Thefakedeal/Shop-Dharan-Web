import React from "react";
import { useHistory } from "react-router-dom";
import CustomText from "../components/CustomText";
import DisplayError from "../components/DisplayErrors";
import DisplayLoading from "../components/DisplayLoading";
import useFetchProduct from "../hooks/useFetchProduct";
import CustomButton from "../components/CustomButton";

export default function DisplayProduct({ product_id }) {
  const { err, loading, result } = useFetchProduct({ product_id });
  const history = useHistory();
  if (err) return <DisplayError errors={[err]} />;
  if (loading) return <DisplayLoading loading={loading} />;

  return (
    <>
      <img
        src={`/images/${result.image_id}`}
        style={{ height: 200, width: 300, objectFit: "contain" }}
        alt={result.product_name}
      />
      <div>
        <h3>Available: {result.available ? "Yes" : "No"} </h3>
      </div>
      <CustomText value={result.product_name} label="Name" />
      <CustomText
        value={result.product_name}
        label="Description"
        multiline
        rows={5}
      />
      <CustomText value={result.price} label="Price" />
      <CustomButton
        onClick={() => {
          history.push(`/admin/suppliers/${result.supplier_id}`);
        }}
      >
        Go To Supplier
      </CustomButton>
    </>
  );
}
