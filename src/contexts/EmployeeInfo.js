import React, { useState, useReducer, useContext, useEffect } from "react";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";

const EmployeeContext = React.createContext()
const LoadingContext = React.createContext()
const ErrorContext = React.createContext()

export const ACTIONS = {
    SETALL: "setall",
    SETNAME: "setname",
    SETUSERNAME: "setusername",
    SETEMAIL: "setemail",
    TOGGLEADMIN: "toggleadmin",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SETALL:
            return { ...action.payload };
        case ACTIONS.SETNAME:
            return { ...state, employee_name: action.payload };
        case ACTIONS.SETUSERNAME:
            return { ...state, username: action.payload };
        case ACTIONS.SETEMAIL:
            return { ...state, email: action.payload };
        case ACTIONS.TOGGLEADMIN:
            return { ...state, is_admin: !state.is_admin };
        default:
            return state;
    }
}

export function useEmployeeContext(){
    const [state,dispatch] = useContext(EmployeeContext)
    return {state, dispatch}
}

export function useLoadingContext(){
    const [loading, setLoading] = useContext(LoadingContext)
    return {loading, setLoading}
}

export function useErrorContext(){
    const [err,setErr] = useContext(ErrorContext)
    return {err,setErr}
}

export  function EmployeeInfo({ employee_id, children }) {
    const url = `/api/employees/get?employee_id=${employee_id}`;
    const [state, dispatch] = useReducer(reducer, {
        employee_name: "",
        is_admin: false,
        username: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const response = await fetchWithCredentials("GET", url);
            if (!response.ok) throw response.statusText;
            const data = await response.json();
            dispatch({ type: ACTIONS.SETALL, payload: data });
            setLoading(false);
        };

        getData().catch((err) => {
            setLoading(false);
            setErr(err);
        });
    }, [url]);


    return(
        <EmployeeContext.Provider value={[state,dispatch]}>
            <LoadingContext.Provider value={[loading,setLoading]}>
                <ErrorContext.Provider value={[err,setErr]}>
                    {children}
                </ErrorContext.Provider>
            </LoadingContext.Provider>
        </EmployeeContext.Provider>
    );
}
