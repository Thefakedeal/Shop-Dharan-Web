import { useSupplier, ACTIONS, useFile } from "../contexts/AddSupplierInfo";

import React from "react";
import { TextField, makeStyles, Input } from "@material-ui/core";

import useFetchCities from "../hooks/useFetchCities";
import useFetchCatagories from "../hooks/useFetchCatagories";
import CustomSelect from "./CustomSelect";
import CustomSwitch from "./CustomSwitch";
import DisplayLoading from './DisplayLoading'
import AddImage from '../components/AddImage'
import DisplayErrors from "./DisplayErrors";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    paddingBottom: "1em",
    height: "80%",
    alignItems: "center",
    overflowY: "scroll",
  },
  fullcontainer:{
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly"
  }
});

export default function SupplierForm() {
  const styles = useStyles();
  const { state, dispatch } = useSupplier();
  const {file,setFile} = useFile() 
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

  if (citiesloading || catagoryloading) return <DisplayLoading loading={true}/>
  if(citiesserr || catagorieserr) return <DisplayErrors errors={[citiesserr,catagorieserr]}/>
  return (
    <>
      <CustomSwitch
        checked={state.visible}
        onChange={(e) => dispatch({ type: ACTIONS.TOGGLEVISIBLITY })}
        label="Visible"
      />
      <AddImage 
        file= {file}
        setFile={setFile}
      />
      <TextField
        label="Name"
        variant="outlined"
        className={styles.button}
        value={state.supplier_name}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETSUPPLIER, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        className={styles.button}
        value={state.email_id}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETEMAIL, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={5}
        className={styles.button}
        value={state.supplier_description}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETDESCRIPTION, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        className={styles.button}
        value={state.password}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETPASSWORD, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Retype Password"
        variant="outlined"
        type="password"
        className={styles.button}
        value={state.repassword}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETREPASSWORD, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Contact Number"
        variant="outlined"
        type="tel"
        className={styles.button}
        value={state.contact_number}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETCONTACTNUM, payload: e.target.value })
        }
        required
      />

    <div className={styles.fullcontainer}>
      <CustomSelect
        label={"City"}
        setSelection={(value) => {
          dispatch({ type: ACTIONS.SETCITY, payload: value });
        }}
        options={cities.map((city) => ({
          id: city.city_id,
          value: city.city_name,
        }))}
        selection={{ id: cities[0].city_id, value: cities[0].city_name }}
      />

      <CustomSelect
        label={"Catagory"}
        setSelection={(value) => {
          dispatch({ type: ACTIONS.SETCATAGORY, payload: value });
        }}
        options={catagories.map((catagory) => ({
          id: catagory.catagory_id,
          value: catagory.catagory_name,
        }))}
        selection={{
          id: catagories[0].catagory_id,
          value: catagories[0].catagory_name,
        }}
      />
    </div>
    </>
  );
}
