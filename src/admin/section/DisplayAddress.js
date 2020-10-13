import React from "react";
import CustomText from "../components/CustomText";

export default function DisplayAddress({ address }) {
  return (
    <>
      <h3> Address </h3>
      <CustomText
        defaultValue={address.city_name}
        label="City"
        InputProps={{
          readOnly: true,
        }}
      />
      <CustomText
        defaultValue={address.street_name}
        label="Street"
        InputProps={{
          readOnly: true,
        }}
      />
      <CustomText
        defaultValue={address.details}
        label="Details"
        multiline
        rowsMax={4}
        InputProps={{
          readOnly: true,
        }}
      />
    </>
  );
}
