import React, { useState } from "react";
import { Formik, Field } from "formik";

import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import CustomImageInput from "../components/CustomImageInput";
import CustomSwitch from "../components/CustomSwitch";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";

async function addProduct({ ...productdetails }) {
  const url = "/api/products/add";
  const method = "POST";
  const response = await fetchWithCredentials(method, url, productdetails);
  if (!response.ok) throw (await response.text()) || "Failed To Add Product";
  return response.ok;
}

export default function AddProductForm({onSuccess}) {
  const [file, setFile] = useState();
  const [err, setErr] = useState("");
  return (
    <Formik
      initialValues={{
        product_name: "",
        product_description: "",
        available: false,
        price: 0,
      }}
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setSubmitting(true);
          if (await addProduct({ ...data, file }))
          {
            alert("Product Added");
            if(typeof onSuccess === "function") onSuccess()
          }
        } catch (err) {
          setErr(err);
        } finally {
          setSubmitting(false);
        }
      }}
      validate={(data) => {
        const errors = {};
        if (typeof data.price !== "number")
          errors.price = "Price Must Be Number";
        if (data.price < 0) errors.price = "Price Can't Be Negative";
        if (data.product_name.length <= 0)
          errors.product_name = "Product Must Have A name";
        return errors;
      }}
    >
      {({ isSubmitting, handleSubmit, handleChange, values, errors }) => (
        <>
          <Errors errors={[err]} />
          <Loading loading={isSubmitting} />
          <CustomImageInput setFile={setFile} />
          <Field
            label="Name"
            name="product_name"
            type="text"
            required
            error={errors.product_name ? true : false}
            helperText={errors.product_name}
            as={CustomText}
          />

          <Field
            label="Description"
            name="product_description"
            multiline
            rowsMax={5}
            required
            as={CustomText}
          />

          <Field
            label="Available"
            name="available"
            checked={values.available}
            onChange={handleChange("available")}
            as={CustomSwitch}
          />

          <Field
            label="Price"
            name="price"
            type="number"
            error={errors.price ? true : false}
            helperText={errors.price}
            required
            as={CustomText}
          />

          <CustomButton onClick={handleSubmit}>Add Product</CustomButton>
        </>
      )}
    </Formik>
  );
}
