import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

import CustomSwitch from "./CustomSwitch";

import { ACTIONS, useEmployeeContext } from "../contexts/AddEmployeeInfo";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    alignItems: "center",
  },
});

export default function EmployeeForm() {
  const styles = useStyles();
  const { state, dispatch } = useEmployeeContext();
  return (
    <>
      <CustomSwitch
        checked={state.is_admin}
        onChange={(e) => dispatch({ type: ACTIONS.TOGGLEISADMIN })}
        label="Admin"
      />

      <TextField
        label="Name"
        variant="outlined"
        className={styles.button}
        value={state.employee_name}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETEMPLOYEENAME, payload: e.target.value })
        }
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        className={styles.button}
        value={state.email}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SETEMAIL, payload: e.target.value })
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
    </>
  );
}
