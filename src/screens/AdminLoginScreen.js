import React, { useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";

import {  useRefreshToken, useAccessToken } from "../contexts/LoginInfo";
import LightScreen from "../components/LightScreen";
import Logo from "../components/Logo";


import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import Loading from '../components/Loading'
import Errors from '../components/Errors'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
});

async function fetchTokens(username, password) {
  const data = {
    username: username,
    password: password,
  };

  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text();
  }
  return await response.json();
}

export default function LoginScreen() {
  const styles = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const {setRefreshToken} = useRefreshToken();
  const { setAccessToken} = useAccessToken();

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setErr("");
      setLoading(true);
      const { accessToken, refreshToken } = await fetchTokens(
        username,
        password
      );
      setLoading(false);
      setRefreshToken(refreshToken);
      setAccessToken(accessToken);
 
    } catch (err) {
      setLoading(false);
      setErr(err);
    }
  };

  
  return (
    <LightScreen>
      <Logo variant="red" />
      <Paper className={styles.container}>
        <Loading loading={loading} />
        <Errors errors={[err]}/>
        <CustomText
          label="Username"
          value={username}
          onChange={handleUsernameInput}
          required
        />
        <CustomText
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
          required
        />
        <CustomButton
        onClick={handleLogin}
        >
          Login
        </CustomButton>
      </Paper>
    </LightScreen>
  );
}
