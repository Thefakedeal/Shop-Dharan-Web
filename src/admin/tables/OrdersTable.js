import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import COLORS from "../defaults/colors.json";

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    width: "90%",
    margin: 10,
  },
  table: {
    width: "100%",
    overflow: "scroll",
  },
  head: {
    backgroundColor: COLORS.PRIMARY_RED,
    color: COLORS.PRIMARY_WHITE,
    fontWeight: "bolder",
  },
});

function ReturnDateTime(dateString) {
  function addZero(i) {
    if (i < 10) return `0${i}`;
    return `${i}`;
  }
  const date = new Date(dateString);
  let hourTime = date.getHours()
  const ampm = hourTime<12?'AM':'PM';
  hourTime = hourTime %12;
  hourTime += hourTime===0?12:0;
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hour = addZero(hourTime);
  const minutes = addZero(date.getMinutes());

  return `${hour}:${minutes} ${ampm} ${day}/${month}`;
}

export default function OrdersTable({ orders = [] }) {
  const styles = useStyles();
  const history = useHistory();

  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table aria-label="products table" className={styles.table}>
        <TableHead className={styles.head}>
          <TableRow>
            <TableCell align="center" className={styles.head}>
              Index
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Status
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              key={order.order_id}
              onClick={() => {
                history.push(`/admin/orders/${order.order_id}`);
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{order.order_status}</TableCell>
              <TableCell align="center">
                {ReturnDateTime(order.ordered_time)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
