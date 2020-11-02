import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: { margin: 20, padding: 5 },
});

export default function CustomButton({ children, onClick, variant="contained", ...props }) {
  const styles = useStyles();
  return (
    <Button
      className={styles.button}
      variant={variant}
      color="primary"
      onClick={onClick}
      {...props}
    >
      <b>
      {children}
      </b>
    </Button>
  );
}
