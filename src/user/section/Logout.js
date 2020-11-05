import React from "react";
import logout from '../helperFunctions/logout'
import CustomButtom from "../components/CustomButton";
import { useRefreshToken } from "../contexts/LoginInfo";

export default function DisplayLogout() {
  const { refreshToken, setRefreshToken } = useRefreshToken();

  const logoutStart = async () => {
    try {
      const confirm = window.confirm("Are You Sure?")
      if(!confirm) return;
      const loggedout = await logout(refreshToken);
      if (loggedout) {
        setRefreshToken("");
        alert("Logged Out!!!")
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