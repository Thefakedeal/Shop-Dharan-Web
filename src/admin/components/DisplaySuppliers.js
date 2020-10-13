import React from 'react'
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
  } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import useFetchSuppliers from '../hooks/useFetchSuppliers'
import ErrorText from './ErrorText'
import colors from '../defaults/colors.json'

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

export default function DisplaySuppliers({visible,supplier_name, catagory_id,city_id}) {
    const {err,loading,result} = useFetchSuppliers({visible,supplier_name,catagory_id,city_id})
    const styles = useStyles()
    const history = useHistory()

    if(loading) return <CircularProgress color="primary" />
    if(err) return <ErrorText> {err} </ErrorText>
    return (
        <TableContainer component={Paper} className={styles.container}>
        <Table aria-label="employee table" className={styles.table}>
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
            {result.map((supplier) => (
              <TableRow key={supplier.supplier_id} 
                onClick ={()=>{
                  history.push(`/admin/suppliers/${supplier.supplier_id}`)
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {supplier.supplier_name}
                </TableCell>
                <TableCell align="center">{supplier.supplier_description}</TableCell>
                <TableCell align="center">{supplier.contact_number}</TableCell>
                <TableCell align="center">
                  {supplier.visible ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
