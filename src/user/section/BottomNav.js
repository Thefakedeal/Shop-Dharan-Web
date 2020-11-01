import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import NAVLINKS from "../defaults/navlinks.json";
import { BottomNavigation, BottomNavigationAction, useRadioGroup } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "auto",
    position: "-webkit-sticky"
  },
});
export default function BottomNav() {
  const history = useHistory()
  const styles = useStyles();
  const handleChange = (event, newValue) => {
    history.push(newValue)
    // setNav(newValue);
  };

  return (
    <BottomNavigation
      value={history.location.pathname}
      onChange={handleChange}
      className={styles.root}
    >
      <BottomNavigationAction
        label="Home"
        value={NAVLINKS.Home}
        icon={<Home />}
      />
    </BottomNavigation>
  );
}
