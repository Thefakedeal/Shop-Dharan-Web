import React from "react";
import logout from '../helperFunctions/logout'
import CustomButtom from "../components/CustomButton";
import { useRefreshToken, useAccessToken } from "../contexts/LoginInfo";

export default function DisplayLogout() {
  const { refreshToken, setRefreshToken } = useRefreshToken();
  const {setAccessToken} = useAccessToken()
  const logoutStart = async () => {
    try {
      const confirm = window.confirm("Are You Sure?")
      if(!confirm) return;
      const loggedout = await logout(refreshToken);
      if (loggedout) {
        setRefreshToken("");
        setAccessToken('')
        return;
      }
      alert("Failed To LogOut")
    } catch (err) {
        alert(err)
    }
  };

  return (
    <CustomButtom
        variant="text"
        onClick={logoutStart}
    >
        Logout
    </CustomButtom>
  );
}