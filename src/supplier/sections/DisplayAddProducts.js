import React from 'react'
import { Paper, Backdrop, makeStyles} from '@material-ui/core'

import {Close} from '@material-ui/icons'
import AddProductForm from '../forms/AddProductForm'
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    height: "80%",
    alignItems: "center",
    overflowY: "scroll",
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    margin: "0.5em",
    alignItems: "center",
    padding: "0.5em",
  },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));


export default function DisplayAddProducts({open, handleClose}) {
    const styles = useStyles()
    return (
        <Backdrop open={open} className={styles.backdrop} >
            <Paper className={styles.wrapper}>
              <div className={styles.inside}>
                <Close style={{marginLeft: "auto", marginRight:0}} onClick={handleClose}/>
                <AddProductForm onSuccess={handleClose}/>
              </div>
            </Paper>
        </Backdrop>
    )
}
