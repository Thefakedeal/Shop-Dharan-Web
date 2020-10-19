import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CustomSwitch({ checked, onChange, label }) {
  return (
    <FormGroup>
      <FormControlLabel
        checked={checked}
        onChange={onChange}
        control={<Switch color="primary" />}
        label={label}
      />
    </FormGroup>
  );
}
