import React from "react";

import CustomText from "../components/CustomText";

export default function DisplayUserInfo({ user }) {
  return (
    <>
      <h3> User </h3>
      <CustomText
        label="Name"
        defaultValue={user.user_name}
        InputProps={{
          readOnly: true,
        }}
      />
      <CustomText
        label="Mobile No."
        defaultValue={user.mobile_number}
        InputProps={{
          readOnly: true,
        }}
      />
      <CustomText
        label="Email"
        defaultValue={user.email_id}
        InputProps={{
          readOnly: true,
        }}
      />
    </>
  );
}
