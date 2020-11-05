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
  },
  head: {
    backgroundColor: COLORS.PRIMARY_RED,
    color: COLORS.PRIMARY_WHITE,
    fontWeight: "bolder",
  },
});

export default function DisplayCartTable({ orders = [] }) {
  const styles = useStyles();
  const history = useHistory();

  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table aria-label="cart table" className={styles.table}>
        <TableHead className={styles.head}>
          <TableRow>
            <TableCell align="center" className={styles.head}>
              Name
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Price
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Quantity
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.product_id}
              onClick={() => {
                history.push(`/products/${order.product_id}`);
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {order.product_name}
              </TableCell>
              <TableCell align="center">{order.price}</TableCell>
              <TableCell align="center">{order.quantity}</TableCell>
              <TableCell align="center">
                {parseInt(order.price * order.quantity)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow key={"Total"}>
            <TableCell component="th" scope="row" align="center">
              {" "}
              Total{" "}
            </TableCell>
            <TableCell align="center"> </TableCell>
            <TableCell align="center"> </TableCell>
            <TableCell align="center">
              {orders.reduce((total, order) => {
                return parseInt(total) + parseInt(order.price * order.quantity);
              }, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
