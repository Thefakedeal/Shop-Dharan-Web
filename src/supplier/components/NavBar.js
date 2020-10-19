import React from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import COLORS from '../defaults/colors.json'

const useStyles = makeStyles({
  nav:{
    display: "flex",
    minHeight: "3em",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1em",
    backgroundColor: COLORS.PRIMARY_RED,
    width: "100%"
  },
  title:{
    marginLeft: "auto",
    marginRight: "auto",
    color: COLORS.PRIMARY_WHITE,
    fontSize: "25px",
    fontWeight: "bold",
  }
})
export default function Navigation({ title="Shop Dharan" }) {
    const history = useHistory()
    const styles = useStyles()
    return (
    <nav className={styles.nav}>
     <ArrowBack  color="secondary" fontSize="large" onClick={history.goBack}/>
      <div className={styles.title}>
          {title}
      </div>
    </nav>
  );
}
