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

export default function EmployeesTable({employees = []}) {
  const styles = useStyles();
  const history = useHistory();

  if (employees.length > 0)
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="employee table" className={styles.table}>
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell align="center" className={styles.head}>
                Name
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Admin
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Username
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow
                key={employee.employee_id}
                onClick={() => {
                  history.push(`employees/${employee.employee_id}`);
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {employee.employee_name}
                </TableCell>
                <TableCell align="center">
                  {employee.is_admin ? "True" : "False"}
                </TableCell>
                <TableCell align="center">{employee.username}</TableCell>
                <TableCell align="center">{employee.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

  return null;
}
