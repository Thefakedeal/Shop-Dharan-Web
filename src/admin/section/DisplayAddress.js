import React from "react";


export default function DisplayAddress({ address }) {
  return (
    <>
      <h3> Address: {`${address.street_name}, ${address.city_name}`} </h3>
      {address.details && (
        <text style={{ textAlign: "center" }}>Details: {address.details}</text>
      )}
    </>
  );
}
