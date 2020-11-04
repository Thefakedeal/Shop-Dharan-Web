import React from "react";
import { makeStyles } from "@material-ui/core";
import HeadingText from "../components/HeadingText";
import CustomButton from "../components/CustomButton";
import deleteAddress from "../helperFunctions/deleteAddress";

const useStyles = makeStyles({
  container: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});

export default function DisplayAddress({ address, onDelete }) {
  const style = useStyles();
  return (
    <div className={style.container}>
      <HeadingText>
        {`${address.street_name}, ${address.city_name}`}
      </HeadingText>
      {address.details && (
        <text style={{ textAlign: "center" }}>{address.details}</text>
      )}
      <CustomButton
        variant="text"
        onClick={async () => {
          try {
            const confirm = window.confirm("Are You Sure You Want To Delete?");
            if (!confirm) return;
            const success = await deleteAddress(address.address_id);
            if (success) {
              alert("Address Deleted");
              if (onDelete) return onDelete();
            }
            return alert("Failed To Delete");
          } catch (err) {
            alert("Failed To Delete");
          }
        }}
      > Delete Address </CustomButton>
    </div>
  );
}
