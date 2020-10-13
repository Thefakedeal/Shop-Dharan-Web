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

export default function DisplaySuppliers({ suppliers = [] }) {
  const styles = useStyles();
  const history = useHistory();

  if (suppliers.length > 0)
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="supplier table" className={styles.table}>
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell align="center" className={styles.head}>
                Name
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Description
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Number
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Visible
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow
                key={supplier.supplier_id}
                onClick={() => {
                  history.push(`/suppliers/${supplier.supplier_id}`);
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {supplier.supplier_name}
                </TableCell>
                <TableCell align="center">
                  {supplier.supplier_description}
                </TableCell>
                <TableCell align="center">{supplier.contact_number}</TableCell>
                <TableCell align="center">
                  {supplier.visible ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

  return null;
}
