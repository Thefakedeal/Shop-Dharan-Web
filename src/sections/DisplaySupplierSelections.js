import React, { useState } from "react";

import {
  CircularProgress,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

import CustomSelect from "../components/CustomSelect";

import useFetchCatagories from '../hooks/useFetchCatagories'
import useFetchCities from '../hooks/useFetchCities'
import Errors from '../components/Errors'

import { useSupplierParams, ACTION } from "../contexts/SupplierSearchParams";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
  },
}));

export default function SelectOptions() {
  const styles = useStyles();
  const { dispatch } = useSupplierParams();
  const {
    loading: catagoryloading,
    result: catagories,
    err: catagorieserr,
  } = useFetchCatagories();

  const {
    loading: citiesloading,
    result: cities,
    err: citiesserr,
  } = useFetchCities();

  const [search, setSearch] = useState("");

  if (catagoryloading || citiesloading)
    return <CircularProgress color="primary" />;
  if (catagorieserr || citiesserr)
    return <Errors errors={[catagorieserr,citiesserr]}/>;

  return (
    <section className={styles.wrapper}>
      <CustomSelect
        label="City"
        options={
          ({ value: "All" },
          cities.map((city) => ({
            id: city.city_id,
            value: city.city_name,
          })))
        }
        setValue={(value) =>
          dispatch({ type: ACTION.SETCITY, payload: value })
        }
      />
      <CustomSelect
        label="Catagory"
        options={
          ({ value: "All" },
          catagories.map((catagory) => ({
            id: catagory.catagory_id,
            value: catagory.catagory_name,
          })))
        }
        setValue={(value) =>
          dispatch({ type: ACTION.SETCATAGORY, payload: value })
        }
      />
      <CustomSelect
        label="Visible"
        options={[
          { id: true, value: "True" },
          { id: false, value: "False" },
        ]}
        setValue={(value) =>
          dispatch({ type: ACTION.SETVISIBILITY, payload: value })
        }
      />
      <div className={styles.wrapper}>
        <TextField
          variant="outlined"
          value={search}
          label="Name"
          onChange={(e) => setSearch(e.target.value)}
          type="search"
        />
        <Button
          color="primary"
          onClick={() =>
            dispatch({ type: ACTION.SETSUPPLIERNAME, payload: search })
          }
        >
          Search
        </Button>
      </div>
    </section>
  );
}
