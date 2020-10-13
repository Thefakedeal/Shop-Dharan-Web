import React from "react";
import {
  makeStyles,
  Paper,
} from "@material-ui/core";

import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";
import {
  validateEmail,
  validatePassword,
} from "../helperFunctions/inputValidations";
import CancelAndOkButton from './CancelAndOkButton'
import DisplayLoading from "../components/DisplayLoading";
import DisplayErrors from "../components/DisplayErrors";
import AddEmployeeForm from '../components/AddEmployeeForm';
import { EmployeeInfo, useLoadingContext, useErrorsContext,useEmployeeContext } from "../contexts/AddEmployeeInfo";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    alignItems: "center",
  },
});

async function addEmployee(state) {
  const url = `/api/employees/add`;
  const body = { ...state };
  const response = await fetchWithCredentials("POST", url, body);
  if (response.ok) {
    return response.ok;
  }
  throw await response.text();
}

function validations(employee_data) {
  let errors = [];
  if (!validateEmail(employee_data.email))
    errors = [...errors, "Invalid Email"];
  if (!validatePassword(employee_data.password))
    errors = [...errors, "Password should Be Atleast 6 digit long"];
  if (employee_data.password !== employee_data.repassword)
    errors = [...errors, "Passwords Don't Match"];
  return errors;
}


export default function AddEmployees({ handleClose }) {
  return (
    
      <EmployeeInfo>
        <Wrapper handleClose={handleClose}/>
      </EmployeeInfo>
  
  );
}

function Wrapper({handleClose}) {
  const {loading, setLoading} = useLoadingContext();
  const {err,setErr} = useErrorsContext();
  const {state} = useEmployeeContext();
  const styles = useStyles();

  async function handleAddEmployee(){
      setErr([]);
      const errors = validations(state);
      if (errors.length > 0) {
        setErr([...errors]);
        return;
      }
      try {
        setLoading(true)
        const employee_added = await addEmployee(state);
        setLoading(false)
        if (employee_added) {
          handleClose();
          return alert("Employees Added");
        }
        throw "Failed To Add Employees";
      } catch (err) {
        setLoading(false)
        setErr([String(err)]);
      }
  }

  return (
    <Paper className={styles.wrapper}>
      <DisplayLoading loading={loading} />
      <DisplayErrors errors={err} />
      <AddEmployeeForm />
      <CancelAndOkButton okLabel={"Add Employee"}
       onClickOk={handleAddEmployee}
       cancelLabel={"Cancel"}
       onClickCancel={handleClose}
      />
    </Paper>
  );
}

