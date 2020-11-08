import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default function Center({ children }) {
  const styles = useStyles();
  return <Container className={styles.container}>{children}</Container>;
}
