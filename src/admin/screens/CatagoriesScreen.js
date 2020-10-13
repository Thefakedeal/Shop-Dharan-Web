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
import NavigationBar from "../components/NavigationBar";
import useFetchCatagories from "../hooks/useFetchCatagories";
import ErrorText from "../components/ErrorText";
import addCatagory from '../helperFunctions/addCatagory'

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
  const { loading, result, err } = useFetchCatagories();
  const styles = useStyles();
  const history = useHistory();

  const handleAddCatagory = async () =>{
    const catagory_name = window.prompt("Catagory Name");
    if(!catagory_name) return;
    const success = await addCatagory(catagory_name)
    if(success){
      alert("Catagory Added")
      return;
    }
    alert("Failed To Add Catagory")
  }

  const Catagory = () => {
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="employee table" className={styles.table}>
          <TableHead className={styles.head}>
            <TableRow>
              <TableCell align="center" className={styles.head}>
                No.
              </TableCell>
              <TableCell align="center" className={styles.head}>
                Catagory Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((catagory, index) => (
              <TableRow
                key={catagory.catagory_id}
                onClick={() => {
                  history.push(`${match.url}/${catagory.catagory_id}`);
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {index+1}
                </TableCell>
                <TableCell align="center">{catagory.catagory_name}</TableCell>
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
    return <Catagory />;
  };
  return (
    <LightScreen>
      <NavigationBar title="Catagories" />
      <Button color="primary"
        onClick={handleAddCatagory}
      > Add Catagory </Button>
      <Display />
    </LightScreen>
  );
}
