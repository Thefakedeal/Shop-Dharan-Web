import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

import { useEmployeeContext, ACTIONS } from "../contexts/EmployeeInfo";
import CustomSwitch from "./CustomSwitch";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
});

export default function EmployeeForm() {
  const styles = useStyles();
  const { state, dispatch } = useEmployeeContext();
  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        className={styles.button}
        value={state.employee_name}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETNAME, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Username"
        variant="outlined"
        className={styles.button}
        value={state.username}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETUSERNAME, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        type="Email"
        className={styles.button}
        value={state.email}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETEMAIL, payload: e.target.value })
        }
        required
      />

      <CustomSwitch
        label="Admin"
        checked={state.is_admin}
        onChange={(e) => dispatch({ type: ACTIONS.TOGGLEADMIN })}
      />
    </>
  );
}
