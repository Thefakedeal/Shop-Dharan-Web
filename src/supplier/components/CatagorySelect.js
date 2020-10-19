import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import useFetchCatagories from "../hooks/useFetchCatagories";
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

export default function CatagorySelect({ value, setValue }) {
  const styles = useStyles();
  const { err, loading, result } = useFetchCatagories();
  if (loading) return <Loading loading={true} />;
  if (err) return <Errors errors={[err, "Can't Display Catagories"]} />;

  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">{"catagory"}</InputLabel>
      <Select labelId={"catagory"} value={value} onChange={setValue}>
        {result.map((catagory) => (
          <MenuItem key={catagory.catagory_id} value={catagory.catagory_id}>
            {String(catagory.catagory_name)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
