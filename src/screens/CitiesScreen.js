import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  CircularProgress,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import colors from "../defaults/colors.json";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import useFetchCities from "../hooks/useFetchCities";
import ErrorText from "../components/ErrorText";
import addCity from '../helperFunctions/addCity'

import CitiesTable from '../tables/CitiesTable'
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

export default function CitiesScreen({match}) {
  const { loading, result, err } = useFetchCities();
  const styles = useStyles();
  const history = useHistory();

  const handleAddCity = async () =>{
    const city_name = window.prompt("City Name");
    if(!city_name) return;
    const success = await addCity(city_name)
    if(success){
      alert("City Added")
      return;
    }
    alert("Failed To Add City")
  }

  const CityTable = () => {
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
            {result.map((city, index) => (
              <TableRow
                key={city.city_id}
                onClick={() => {
                  history.push(`${match.url}/${city.city_id}`);
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {index+1}
                </TableCell>
                <TableCell align="center">{city.city_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const Display = () => {
    if (loading) return <CircularProgress color="primary" />;
    if (err) return <ErrorText> {err} </ErrorText>;
    return <CitiesTable cities={result} />;
  };
  return (
    <LightScreen>
      <NavBar title="Cities" />
      <Button color="primary"
        onClick={handleAddCity}
      > Add City </Button>
      <Display />
    </LightScreen>
  );
}