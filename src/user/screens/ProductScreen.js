import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useFetchProduct from "../hooks/useFetchProduct";
import LightScreen from "../components/LightScreen";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import ProductDetails from "../section/ProductDetails";
import NavBar from "../components/NavBar";
import CenterPaper from "../components/CenterPaper";

import { useCart } from "../contexts/Cart";
import CustomButton from "../components/CustomButton";
import Quantity from "../section/Quantity";



export default function ProductScreen() {
  const { id } = useParams();
  const { loading, err, result } = useFetchProduct({ product_id: id });
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);



 

  return (
    <LightScreen>
      <NavBar title={"Product"} />
      <Loading loading={loading} />
      {err && <Errors errors={[err]} />}
      {result && (
        <CenterPaper>
          <ProductDetails product={result} />
          <Quantity quantity={quantity} setQuantity={setQuantity}/>
          <CustomButton
            onClick={() => {
              addToCart({ product_id: id }, quantity);
            }}
          >
            Add To Cart{" "}
          </CustomButton>
        </CenterPaper>
      )}
    </LightScreen>
  );
}
