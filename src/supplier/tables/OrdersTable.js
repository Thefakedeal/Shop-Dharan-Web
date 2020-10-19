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


export default function OrdersTable({ ordered_items = [] }) {
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
              Name
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Price
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Quantity
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Status
            </TableCell>
            <TableCell align="center" className={styles.head}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordered_items.map((ordered_item, index) => (
            <TableRow
              key={ordered_item.ordered_item_id}
              onClick={() => {
                history.push(`/supplier/products/${ordered_item.product_id}`);
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{ordered_item.product_name}</TableCell>
              <TableCell align="center">{ordered_item.price}</TableCell>
              <TableCell align="center">
                {ordered_item.quantity}
              </TableCell>
              <TableCell align="center">
                {ordered_item.order_status}
              </TableCell>
              <TableCell align="center">
                {Number(ordered_item.quantity) * Number(ordered_item.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}