import React,{useState, useEffect} from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CustomSelect({
  label,
  options = [],
  selection = {value: "All"},
  setSelection,
}) {
  const styles = useStyles();
  const [currentValue, setCurrentValue] = useState(selection.id)
  useEffect(()=>{
    setSelection(selection.id)
  },[])
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={label}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value)
          setSelection(e.target.value)}}
      >
        
        {selection.id?null:<MenuItem value={selection.id}>{String(selection.value)}</MenuItem>}
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>{String(option.value)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
