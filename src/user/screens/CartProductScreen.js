import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import useFetchProduct from "../hooks/useFetchProduct";
import CenterPaper from "../components/CenterPaper";
import ProductDetails from "../section/ProductDetails";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import { useCart } from "../contexts/Cart";
import Quantity from "../section/Quantity";
import CustomButton from "../components/CustomButton";

export default function CartProductScreen() {
  const { id } = useParams();
  const history = useHistory()
  const { err, loading, result } = useFetchProduct({ product_id: id });
  const { cart = [], updateCartItemQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(
    parseInt(cart.find((item) => item.product_id === id)?.quantity) || 1
  );
  
  return (
    <LightScreen>
      <NavBar title={"Product"} />
      <Loading loading={loading} />
      {err && <Errors errors={[err]} />}
      {result && (
        <CenterPaper>
          <ProductDetails product={result} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <CustomButton
            onClick={() => {
              updateCartItemQuantity(id, quantity);
            }}
          >
            Update Cart
          </CustomButton>
          <CustomButton
            variant="text"
            onClick={() => {
              const confirm = window.confirm(
                "Are You Sure You Want To Remove?"
              );
              if (!confirm) return;
              removeFromCart(id);
              alert("Item Removed")
              history.goBack()
            }}
          >
            Remove From Cart
          </CustomButton>
        </CenterPaper>
      )}
    </LightScreen>
  );
}
