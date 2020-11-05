import React  from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import useFetchCities from "../hooks/useFetchCities";
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

export default function CitySelect({ value, setValue }) {
  const styles = useStyles();
  const { err, loading, result=[] } = useFetchCities();
  if (loading) return <Loading loading={true} />;
  if (err) return <Errors errors={[err, "Can't Display Catagories"]} />;

  if(!value && result.length>0) setValue(result[0].city_id)
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">{"city"}</InputLabel>
      <Select labelId={"city"} value={value} onChange={(event)=>{
        setValue(event.target.value)
      }}>
        {result.map((city) => (
          <MenuItem key={city.city_id} value={city.city_id}>
            {String(city.city_name)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}