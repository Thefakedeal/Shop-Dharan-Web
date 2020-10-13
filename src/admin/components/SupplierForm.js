import { ACTIONS, useSupplier } from "../contexts/SupplierInfo";

import React, { useState } from "react";
import { TextField, makeStyles, Button, Backdrop } from "@material-ui/core";

import useFetchCities from "../hooks/useFetchCities";
import useFetchCatagories from "../hooks/useFetchCatagories";
import CustomSelect from "./CustomSelect";
import CustomSwitch from "./CustomSwitch";
import DisplayLoading from "./DisplayLoading";
import UpdatePhoto from "./UpdatePhoto";

const useStyles = makeStyles((theme) => ( {
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
  fullcontainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function UpdatePhotoContainer({ open, handleClose, supplier_id, image_id, ...props }) {
  const styles = useStyles();
  return (
    <Backdrop open={open} className={styles.backdrop} {...props} >
      <UpdatePhoto handleClose={handleClose}
      url={'/api/suppliers/update/photo'}
      object_info={{supplier_id}} image_id={image_id}/>
    </Backdrop>
  );
}

export default function SupplierForm({supplier_id}) {
  const styles = useStyles();
  const { state, dispatch } = useSupplier();

  const [open, setOpen] = useState(false);

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

  if (citiesloading || catagoryloading)
    return <DisplayLoading loading={true} />;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={`/images/${state.image_id}`} style={{height:200,width:300, objectFit:"contain"}}/>

      <Button color="primary" onClick={handleOpen}>
        Update Photo
      </Button>

      <UpdatePhotoContainer open={open} handleClose={handleClose}
        supplier_id={supplier_id} image_id={state.image_id}
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

      <CustomSwitch
        checked={state.visible}
        onChange={(e) => dispatch({ type: ACTIONS.TOGGLEVISIBILITY })}
        label="Visible"
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
          selection={{ id: state.city_id }}
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
            id: state.catagory_id,
          }}
        />
      </div>
    </div>
  );
}
