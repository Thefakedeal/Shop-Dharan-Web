import React, {useState, useContext, useReducer} from "react";

const SupplierContext = React.createContext();
const FileContext = React.createContext()
const LoadingContext = React.createContext();
const ErrorContext = React.createContext()

export const ACTIONS = {
  SETSUPPLIER: "supplier",
  SETCITY: "city",
  SETEMAIL: "email",
  SETDESCRIPTION: "description",
  TOGGLEVISIBLITY: "togglevisibility",
  SETPASSWORD: "password",
  SETREPASSWORD: "repassword",
  SETCATAGORY: "catagory",
  SETCONTACTNUM: "contact",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETSUPPLIER:
      return { ...state, supplier_name: action.payload };
    case ACTIONS.SETCITY:
      return { ...state, city_id: action.payload };
    case ACTIONS.SETEMAIL:
      return { ...state, email_id: action.payload };
    case ACTIONS.TOGGLEVISIBLITY:
      return { ...state, visible: !state.visible };
    case ACTIONS.SETPASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SETDESCRIPTION:
      return { ...state, supplier_description: action.payload };
    case ACTIONS.SETREPASSWORD:
      return { ...state, repassword: action.payload };
    case ACTIONS.SETCATAGORY:
      return { ...state, catagory_id: action.payload };
    case ACTIONS.SETCONTACTNUM:
      return { ...state, contact_number: action.payload };
    default:
      return state;
  }
}


export function useSupplier(){
    const [state,dispatch] = useContext(SupplierContext)
    return {state,dispatch}
}

export function useErrors(){
    const [err, setErr] = useContext(ErrorContext)
    return {err, setErr};
}

export function  useLoading(){
    const [loading, setLoading] = useContext(LoadingContext)
    return {loading,setLoading}
}

export function useFile(){
  const [file,setFile] = useContext(FileContext)
  return {file, setFile}
}

export function SupplierInfo({children}) {
  const [state, dispatch] = useReducer(reducer, {
    supplier_name: "",
    city_id: "",
    email_id: "",
    supplier_description: "",
    visible: false,
    password: "",
    repassword: "",
    catagory_id: "",
    contact_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState([]);
  const [file,setFile] = useState()
  return(
      <SupplierContext.Provider value={[state,dispatch]}>
        <ErrorContext.Provider value={[err,setErr]}>
            <LoadingContext.Provider value={[loading,setLoading]}>
              <FileContext.Provider value={[file,setFile]}>
                {children}
              </FileContext.Provider>
            </LoadingContext.Provider>
        </ErrorContext.Provider>
      </SupplierContext.Provider>
  );
}
