import React from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import useFetchOrderStatus from "../hooks/useFetchOrderStatus";
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

export default function OrderStatusSelect({ orderStatus, setOrderStatus }) {
  const { err, loading, result } = useFetchOrderStatus();

  const styles = useStyles();

  if (loading) return <Loading loading={true} />;
  if (err) return <Errors errors={[err, "Can't Display Order Types"]} />;

  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">{"Order Status"}</InputLabel>
      <Select
        labelId={"Order Status"}
        value={orderStatus}
        onChange={(event) => {
          setOrderStatus(event.target.value);
        }}
      >
        <MenuItem key="All" value="">
          {"All"}
        </MenuItem>
        {result.map((status) => (
          <MenuItem key={status} value={status}>
            {String(status)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
