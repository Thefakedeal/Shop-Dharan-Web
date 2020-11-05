import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import NavLinks from "../defaults/navlinks.json";
import Logout from "../components/Logout";

const useStyles = makeStyles({
  links: {
    color: " #f2f2f2",
    textDecoration: "solid",
    fontSize: "2em",
    fontWeight: "bold",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
  },
});

export default function DisplayLinks() {
  const styles = useStyles();
  //Converts To Array with array of key and value
  // {key1: value1, key2:value2} => [[key1,value1],[key2,value2]]
  const NavArray = Object.entries(NavLinks);
  return (
    <Container className={styles.container}>
      {NavArray.map(([label, link]) => (
        <Link to={link} className={styles.links}>
          {label}
        </Link>
      ))}
      <Logout className={styles.links}/>
    </Container>
  );
}
