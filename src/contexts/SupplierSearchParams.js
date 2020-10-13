import React, { useReducer, useContext } from "react";

const SupplierParamsContext = React.createContext()

export const ACTION = {
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

export function useSupplierParams(){
    const [state, dispatch] = useContext(SupplierParamsContext)
    return {state, dispatch}
}

export function SupplierSearchParams({children}) {
  const [state, dispatch] = useReducer(reducer, {
    visible: null,
    supplier_name: "",
    catagory_id: "",
    city_id: "",
  });
  return(
      <SupplierParamsContext.Provider value={[state,dispatch]}>
          {children}
      </SupplierParamsContext.Provider>
  );
}
