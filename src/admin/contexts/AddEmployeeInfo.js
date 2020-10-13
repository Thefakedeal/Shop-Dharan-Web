import React, { useState, useReducer, useContext } from "react";

const EmployeeContext = React.createContext();
const ErrorsContext = React.createContext();
const LoadingContext = React.createContext();

export const ACTIONS = {
  SETEMPLOYEENAME: "setemployeename",
  TOGGLEISADMIN: "toggleisadmin",
  SETUSERNAME: "setusername",
  SETPASSWORD: "setpassword",
  SETREPASSWORD: "setrepassword",
  SETEMAIL: "setemail",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETEMPLOYEENAME:
      return { ...state, employee_name: action.payload };
    case ACTIONS.TOGGLEISADMIN:
      return { ...state, is_admin: !state.is_admin };
    case ACTIONS.SETEMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.SETUSERNAME:
      return { ...state, username: action.payload };
    case ACTIONS.SETPASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SETREPASSWORD:
      return { ...state, repassword: action.payload };
    default:
      return state;
  }
}

export function useEmployeeContext() {
  const [state, dispatch] = useContext(EmployeeContext);
  return { state, dispatch };
}

export function useLoadingContext() {
  const [loading, setLoading] = useContext(LoadingContext);
  return { loading, setLoading };
}

export function useErrorsContext() {
  const [err, setErr] = useContext(ErrorsContext);
  return { err, setErr };
}

export function EmployeeInfo({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    employee_name: "",
    is_admin: false,
    username: "",
    password: "",
    repassword: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState([]);

  return (
    <EmployeeContext.Provider value={[state, dispatch]}>
      <ErrorsContext.Provider value={[err, setErr]}>
        <LoadingContext.Provider value={[loading, setLoading]}>
          {children}
        </LoadingContext.Provider>
      </ErrorsContext.Provider>
    </EmployeeContext.Provider>
  );
}
