import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import useFetchAddress from "../hooks/useFetchAddress";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddressSelect({ value, setValue }) {
  const styles = useStyles();
  const { err, loading, result=[] } = useFetchAddress();
  if (loading) return <Loading loading={true} />;
  if (err) return <Errors errors={[err, "Can't Display Catagories"]} />;

  if(!value && result.length>0) setValue(result[0].address_id)
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">{"city"}</InputLabel>
      <Select labelId={"city"} value={value} onChange={(event)=>{
        setValue(event.target.value)
      }}>
        {result.map((address) => (
          <MenuItem key={address.address_id} value={address.address_id}>
            {`${address.street_name}, ${address.city_name}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}