import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import {} from 'formik'
const useStyles = makeStyles({
  input: { margin: "1rem", width: "80vmin" },
});

export default function CustomText({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  required,
  ...props
}) {
  const styles = useStyles();

  return (
    <TextField
      label={label}
      name={name}
      onBlur={onBlur}
      variant="outlined"
      type={type}
      className={styles.input}
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  );
}
