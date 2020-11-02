import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import CenterPaper from "../components/CenterPaper";
import ImageComponent from "../components/ImageComponent";
import { useCart } from "../contexts/Cart";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles({
  quantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const styles = useStyles();
  return (
    <CenterPaper>
      <h2> {product.product_name} </h2>
      <b>Price: Rs.{product.price}</b>
      <ImageComponent src={`/images/${product.image_id}`} />
      <p> {product.product_description} </p>
      <div className={styles.quantity}>
        <CustomButton onClick={decreaseQuantity}> - </CustomButton>
        <b> {quantity}</b>
        <CustomButton onClick={increaseQuantity}> + </CustomButton>
      </div>
      <CustomButton
        onClick={()=>{
            addToCart(product, quantity)
        }}
      >Add To Cart </CustomButton>
    </CenterPaper>
  );
}
