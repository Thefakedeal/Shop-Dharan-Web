import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";

import fetchAccessToken from "../helperFunctions/fetchAccessToken";
const loadingContext = React.createContext();
const isLoggedInContext = React.createContext();
const roleContext = React.createContext();
const refreshTokenContext = React.createContext();
const accessTokenContext = React.createContext();

export function useLoading() {
  return useContext(loadingContext);
}

export function useRole() {
  return useContext(roleContext);
}

export function useAccessToken() {
  const [accessToken, setAccessToken] = useContext(accessTokenContext);
  return { accessToken, setAccessToken };
}

export function useRefreshToken() {
  const [refreshToken, setRefreshToken] = useContext(refreshTokenContext);
  return { refreshToken, setRefreshToken };
}

export function useIsLoggedIn() {
  return useContext(isLoggedInContext);
 
}

export function LoginInfo({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("accessToken")
  );

  useEffect(() => {
    localStorage.setItem("refreshToken", refreshToken);
  }, [refreshToken]);

  useEffect(() => {
    sessionStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!refreshToken) {
      setLoading(false);
      setIsLoggedIn(false);
      setRole("");
      return;
    }
    fetchAccessToken(refreshToken)
      .then((accessToken) => {
        const decoded = jwt_decode(accessToken);
        setRole(decoded.role);
        setLoading(false);
        setIsLoggedIn(true);
        setAccessToken(accessToken);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsLoggedIn(false);
      });
  }, [refreshToken]);

  return (
    <loadingContext.Provider value={loading}>
      <isLoggedInContext.Provider value={isLoggedIn}>
        <roleContext.Provider value={role}>
          <refreshTokenContext.Provider value={[refreshToken, setRefreshToken]}>
            <accessTokenContext.Provider value={[accessToken, setAccessToken]}>
              {children}
            </accessTokenContext.Provider>
          </refreshTokenContext.Provider>
        </roleContext.Provider>
      </isLoggedInContext.Provider>
    </loadingContext.Provider>
  );
}
