import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: { margin: "1rem", width: "80vmin" },
});

export default function CustomText({
  label,
  type,
  value,
  onChange,
  onBlur,
  required,
  multiline,
  rowsMax,
  ...props
}) {
  const styles = useStyles();

  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      className={styles.input}
      value={value}
      multiline={multiline}
      rowsMax={rowsMax}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      {...props}
    />
  );
}
