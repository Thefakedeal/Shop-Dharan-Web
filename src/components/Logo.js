import React from "react";
import {makeStyles} from '@material-ui/core'
import logoRed from "../shopdharan.png";
import logoWhite from '../shopdharan-white.png'

const useStyles = makeStyles({
  logo:{
    width:"80vmin",
    padding: 50,
    objectFit: "contain"
  }
})

export default function Logo({variant="white", ...props}) {
  const styles = useStyles()
  const logo= (variant.toLowerCase())==="white"?logoWhite:logoRed;
  return <img src={logo} className={styles.logo} {...props} alt="Shop Dharan"/>;
}
