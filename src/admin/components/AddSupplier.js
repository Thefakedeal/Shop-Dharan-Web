import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

import {
  SupplierInfo,
  useLoading,
  useErrors,
  useSupplier,
  useFile
} from "../contexts/AddSupplierInfo";

import uploadFilesWithCredentials from '../helperFunctions/uploadFilesWithCredentials'
import {
  validateEmail,
  validatePassword,
} from "../helperFunctions/inputValidations";

import CancelAndOk from "../components/CancelAndOkButton";
import DisplayLoading from "./DisplayLoading";
import DisplayErrors from "./DisplayErrors";
import AddSupplierForm from "./AddSupplierForm";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    height: "80%",
    alignItems: "center",
    overflowY: "scroll",
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    margin: "0.5em",
    alignItems: "center",
    padding: "0.5em",
  },
});

async function addSupplier(state) {
  const url = `/api/suppliers/add`;
  const body = { ...state };
  // const response = await fetchWithCredentials("POST", url, body);
  const response = await uploadFilesWithCredentials("POST",url,body)
  if (response.ok) {
    return response.ok;
  }
  throw await response.text();
}

function validations(supplier_data) {
  let errors = [];
  if (!validateEmail(supplier_data.email_id))
    errors = [...errors, "Invalid Email"];
  if (!validatePassword(supplier_data.password))
    errors = [...errors, "Password should Be Atleast 6 digit long"];
  if (supplier_data.password !== supplier_data.repassword)
    errors = [...errors, "Passwords Don't Match"];
  return errors;
}

export default function AddSupplier({ handleClose }) {
  return (
    <SupplierInfo>
      <Wrapper handleClose={handleClose} />
    </SupplierInfo>
  );
}

function Wrapper({ handleClose }) {
  const styles = useStyles();
  const { state } = useSupplier();
  const { loading, setLoading } = useLoading();
  const { err, setErr } = useErrors();
  const {file} = useFile()
  const handleAddSupplier = async () => {
    setErr([]);
    const errors = validations(state);
    if (errors.length > 0) {
      setErr([...errors]);
      return;
    }
    try {
      setLoading(true);
      const supplier_added = await addSupplier({...state,file});
      setLoading(false);
      if (supplier_added) {
        handleClose();
        return alert("Suppliers Added");
      }
      throw "Failed To Add Suppliers";
    } catch (err) {
      setLoading(false);
      setErr([String(err)]);
    }
  };

  return (
    <Paper className={styles.wrapper}>
      <div className={styles.inside}>
        <DisplayLoading loading={loading} />
        <DisplayErrors errors={err} />
        <AddSupplierForm />
        <CancelAndOk
          okLabel={"Add Supplier"}
          onClickOk={handleAddSupplier}
          cancelLabel={"Cancel"}
          onClickCancel={handleClose}
        />
      </div>
    </Paper>
  );
}
