import React from "react";
import logout from "../helperFunctions/logout";
import { useRefreshToken,useAccessToken } from "../contexts/LoginInfo";

export default function Logout({ className }) {
  const { refreshToken, setRefreshToken } = useRefreshToken();
  const {setAccessToken} = useAccessToken()
  return (
    <text
      className={className}
      onClick={async () => {
        try {
          const confirm = window.confirm("Do You Want To Logout?");
          if (!confirm) return;
          const success = await logout(refreshToken);
          if (!success) return alert("Failed To Logout");
          setRefreshToken('')
          setAccessToken('')
        } catch (err) {
          alert(err);
        }
      }}
    >
      Logout
    </text>
  );
}