import React from "react";
import PropTypes from 'prop-types'
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
    backgroundColor: colors.PRIMARY_RED,
    color: colors.PRIMARY_WHITE,
    fontWeight: "bolder",
  },
});

CitiesTable.PropTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city_id: PropTypes.string.isRequired,
        city_name: PropTypes.string.isRequired
    }))
}

export default function CitiesTable({cities}) {
  const styles = useStyles();
  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table aria-label="employee table" className={styles.table}>
        <TableHead className={styles.head}>
          <TableRow>
            <TableCell align="center" className={styles.head}>
              No.
            </TableCell>
            <TableCell align="center" className={styles.head}>
              City Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((city, index) => (
            <TableRow
              key={city.city_id}
              onClick={() => {
                history.push(`${match.url}/${city.city_id}`);
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{city.city_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

