import React from "react";
import { TextField, makeStyles, FormControl } from "@material-ui/core";

const useStyles = makeStyles({
  input: { margin: "1rem", width: "80vmin" },
});

export default function CustomText({
  label,
  type,
  value,
  onChange,
  required,
  ...props
}) {
  const styles = useStyles();

  return (
    <FormControl>
      <TextField
        label={label}
        variant="outlined"
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </FormControl>
  );
}