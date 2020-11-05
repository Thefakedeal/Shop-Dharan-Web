import React from "react";
import HeadingText from "../components/HeadingText";

export default function Address({ address }) {
  return (
    <>
      <HeadingText>
        {`${address.street_name}, ${address.city_name}`}
      </HeadingText>
      {address.details && (
        <text style={{ textAlign: "center" }}>{address.details}</text>
      )}
    </>
  );
}
