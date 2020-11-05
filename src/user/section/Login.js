import React from "react";
import CustomButtom from "../components/CustomButton";
import { useContinueWithoutLogin } from "../contexts/LoginInfo";

export default function DisplayLogin() {
  const { setContinueWithoutLogin } = useContinueWithoutLogin();
  return (
    <CustomButtom
      variant="text"
      onClick={() => {
        setContinueWithoutLogin(false);
      }}
    >
      Log In
    </CustomButtom>
  );
}
