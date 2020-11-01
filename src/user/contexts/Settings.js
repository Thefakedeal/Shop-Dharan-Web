import React, { useContext, useEffect, useReducer } from "react";

const settingsContext = React.createContext();

export const ACTIONS = {
  SETALL: "setall",
  SETCITY: "setcity",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SETALL:
      return { ...action.payload };
    case ACTIONS.SETCITY:
      return { ...state, city_id: action.payload };
    default:
      return state;
  }
}

export function useSettings() {
  const [settings, dispatch] = useContext(settingsContext);
  return { settings, dispatch };
}

export function Settings({ children }) {
  const [settings, dispatch] = useReducer(reducer, {
    city_id: "",
  });

  useEffect(() => {
    dispatch({
      type: ACTIONS.SETALL,
      payload: JSON.parse(localStorage.getItem("settings")),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <settingsContext.Provider value={[settings, dispatch]}>
      {children}
    </settingsContext.Provider>
  );
}
