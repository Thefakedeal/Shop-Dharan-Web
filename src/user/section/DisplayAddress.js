import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../components/CustomButton";
import deleteAddress from "../helperFunctions/deleteAddress";
import Address from "./Address";

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
      <Address address={address}/>
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
