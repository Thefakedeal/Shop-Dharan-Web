import React, { useReducer, useState } from "react";

import {
  CircularProgress,
  TextField,
  Button,
  makeStyles,
  Backdrop,
} from "@material-ui/core";

import CustomSelect from "../components/CustomSelect";
import ErrorText from "../components/ErrorText";
import NavigationBar from "../components/NavigationBar";
import LightScreen from "../components/LightScreen";
import DisplaySuppliers from "../components/DisplaySuppliers";
import useFetchCatagories from "../hooks/useFetchCatagories";
import useFetchCities from "../hooks/useFetchCities";
import AddSupplier from "../components/AddSupplier";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
 
function AddSuppliers({ open, handleClose }) {
  const styles = useStyles();
  return (
    <Backdrop open={open} className={styles.backdrop}>
      <AddSupplier handleClose={handleClose} />
    </Backdrop>
  );
}

const ACTION = {
  SETVISIBILITY: "setvisibility",
  SETSUPPLIERNAME: "setsuppliername",
  SETCATAGORY: "setcatagory",
  SETCITY: "setcity",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.SETVISIBILITY:
      return { ...state, visible: action.payload };
    case ACTION.SETSUPPLIERNAME:
      return { ...state, supplier_name: action.payload };
    case ACTION.SETCATAGORY:
      return { ...state, catagory_id: action.payload };
    case ACTION.SETCITY:
      return { ...state, city_id: action.payload };
    default:
      return state;
  }
}

function SelectOptions({ state, dispatch }) {
  const styles = useStyles();
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
    return <ErrorText> Something Went Wrong </ErrorText>;

  return (
    <div className={styles.wrapper}>
      <CustomSelect
        label="City"
        options={{value: "All"},cities.map((city) => ({
          id: city.city_id,
          value: city.city_name,
        }))}
        setSelection={(value) =>
          dispatch({ type: ACTION.SETCITY, payload: value })
        }
      />
      <CustomSelect
        label="Catagory"
        options={{value: "All"},catagories.map((catagory) => ({
          id: catagory.catagory_id,
          value: catagory.catagory_name,
        }))}
        setSelection={(value) =>
          dispatch({ type: ACTION.SETCATAGORY, payload: value })
        }
      />
      <CustomSelect
        label="Visible"
        options={[
          { id: true, value: "True" },
          { id: false, value: "False" },
        ]}
        setSelection={(value) =>
          dispatch({ type: ACTION.SETVISIBILITY, payload: value })
        }
      />
      <div className={styles.wrapper}>
        <TextField
          variant="outlined"
          value={search}
          label="Name"
          onChange={(e) =>

            setSearch(e.target.value)
          }
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
    </div>
  );
}

export default function SuppliersScreen() {
  const [state, dispatch] = useReducer(reducer, {
    visible: null,
    supplier_name: "",
    catagory_id: "",
    city_id: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LightScreen>
      <NavigationBar title="Suppliers" />
      <SelectOptions state={state} dispatch={dispatch} />
      <AddSuppliers open={open} handleClose={handleClose} />
      <Button color="primary" onClick={handleOpen}>
        Add New
      </Button>
      <DisplaySuppliers
        visible={state.visible}
        supplier_name={state.supplier_name}
        catagory_id={state.catagory_id}
        city_id={state.city_id}
      />
    </LightScreen>
  );
}
