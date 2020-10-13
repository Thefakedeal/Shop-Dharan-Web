import React, { useContext, useState, useReducer, useEffect } from "react";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";


const SupplierContext = React.createContext();
const LoadingContext = React.createContext();
const ErrorContext = React.createContext();


export const ACTIONS = {
  SETALL: "setall",
  SETSUPPLIER: "setsupplier",
  SETCITY: "setcity",
  SETEMAIL: "setemail",
  TOGGLEVISIBILITY: "togglevisible",
  SETCATAGORY: "setcatagory",
  SETCONTACT: "setcontact",
  SETDESCRIPTION: "setdescription"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETALL:
      return { ...action.payload };
    case ACTIONS.SETSUPPLIER:
        return {...state, supplier_name: action.payload}
    case ACTIONS.SETCITY:
        return {...state,city_id: action.payload}
    case ACTIONS.SETEMAIL:
        return {...state, email_id: action.payload}
    case ACTIONS.TOGGLEVISIBILITY:
        return {...state, visible: !state.visible}
    case ACTIONS.SETDESCRIPTION:
        return{...state, supplier_description: action.payload}
    case ACTIONS.SETCATAGORY:
        return {...state, catagory_id: action.payload}
    case ACTIONS.SETCONTACT:
        return {...state, contact_number: action.payload}
    default:
        return state
  }
}

export function useSupplier(){
    const [state, dispatch] = useContext(SupplierContext)
    return {state, dispatch}
}

export function useLoading(){
    const [loading, setLoading] = useContext(LoadingContext)
    return { loading, setLoading}
}

export function useError(){
    const [err, setErr] = useContext(ErrorContext)
    return {err, setErr}
}

export function SupplierInfo({ supplier_id, children }) {
  const url = `/api/suppliers/get?supplier_id=${supplier_id}`;
  const [state, dispatch] = useReducer(reducer, {
    supplier_name: "",
    image_id: "",
    city_id: "",
    email_id: "",
    supplier_description: "",
    visible: true,
    catagory_id: "",
    contact_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetchWithCredentials("GET", url);
      if(!response.ok) throw response.statusText;
      const data = await response.json();
      dispatch({ type: ACTIONS.SETALL, payload: data });
      setLoading(false);
    };

    getData().catch((err) => {
      setLoading(false);
      setErr(err);
    });
  },[supplier_id]);

  return(
      <SupplierContext.Provider value={[state,dispatch]}>
        <LoadingContext.Provider value={[loading,setLoading]}>
            <ErrorContext.Provider value={[err,setErr]}>
                {children}
            </ErrorContext.Provider>
        </LoadingContext.Provider>
      </SupplierContext.Provider>
  );
}
