import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles({
  quantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default function Quantity({ quantity, setQuantity, min = 1, max = 99 }) {
  const styles = useStyles();

  const decreaseQuantity = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };
  return (
    <div className={styles.quantity}>
      <CustomButton onClick={decreaseQuantity}> - </CustomButton>
      <b> {quantity}</b>
      <CustomButton onClick={increaseQuantity}> + </CustomButton>
    </div>
  );
}
