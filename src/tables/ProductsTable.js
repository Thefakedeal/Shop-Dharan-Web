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

export default function ProductsTable({ products = [] }) {
  const styles = useStyles();
  const history = useHistory();

  if (products.length > 0)
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="products table" className={styles.table}>
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell align="center" className={styles.head}>
                Name
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Description
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Available
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.product_id}
                onClick={() => {
                  history.push(`/products/${product.product_id}`);
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {product.product_name}
                </TableCell>
                <TableCell align="center">
                  {product.product_description}
                </TableCell>
                <TableCell align="center">
                  {product.available ? "Yes" : "No"}
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

  return null;
}
