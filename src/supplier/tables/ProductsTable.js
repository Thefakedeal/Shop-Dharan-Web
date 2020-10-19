import React from 'react'
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
import useFetchMyProducts from '../hooks/useFetchMyProducts'

import Loading from '../components/Loading'
import Errors from '../components/Errors'

import COLORS from '../defaults/colors.json'

const useStyles = makeStyles({
    container: {
      maxWidth: 1000,
      width: "90%",
      margin: 10,
    },
    table: {
      width: "100%",
      overflow: "scroll"
    },
    head: {
      backgroundColor: COLORS.PRIMARY_RED,
      color: COLORS.PRIMARY_WHITE,
      fontWeight: "bolder",
    },
  });

export default function ProductsTable() {
    const {err,loading,result} = useFetchMyProducts()
    const styles = useStyles()
    const history = useHistory()

    if(loading) return <Loading loading={loading}/>
    if(err) return <Errors errors={[err]} />
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
            {result.map((product) => (
              <TableRow key={product.product_id} 
                onClick ={()=>{
                  history.push(`/supplier/products/${product.product_id}`)
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {product.product_name}
                </TableCell>
                <TableCell align="center">{product.product_description}</TableCell>
                <TableCell align="center">{product.available?"Yes":"No"}</TableCell>
                <TableCell align="center">
                  {product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}