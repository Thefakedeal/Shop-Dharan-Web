import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";

import CitySelect from "../components/CitySelect";
import CenterPaper from "../components/CenterPaper";
import addAddress from "../helperFunctions/addAddress";
import Loading from "../components/Loading";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import Errors from "../components/Errors";

export default function AddAddressForm() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        city_id: "",
        street_name: "",
        details: "",
      }}
      validate={(data) => {
        const errors = {};
        if (!data.city_id) errors.city_id = "Select A City";
        if (!data.street_name)
          errors.street_name = "Streen Name Must Be Provided";
        return errors;
      }}
      onSubmit={async (data, { setSubmitting }) => {
        try {
          setSubmitting(true);
          const success = await addAddress(data);
          if (success) {
            alert("Address Added");
            history.goBack();
          }
        } catch (err) {
          alert(err);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, errors }) => (
        <CenterPaper>
          <Loading loading={isSubmitting} />
          {errors.city_id && <Errors errors={[errors.city_id]} />}
          <CitySelect
            value={values.city_id}
            setValue={handleChange("city_id")}
            error={errors.city_id ? true : false}
            errorText={errors.city_id}
          />
          <Field
            name={"street_name"}
            type="text"
            label="Street Name"
            error={errors.street_name ? true : false}
            helperText={errors.street_name}
            as={CustomText}
          />
          <CustomText
            label="Details"
            type="text"
            onChange={handleChange("details")}
            multiline={true}
            error={errors.details ? true : false}
            helperText={errors.details}
            rowsMax={5}
          />
          <CustomButton onClick={handleSubmit}>Add Address</CustomButton>
        </CenterPaper>
      )}
    </Formik>
  );
}
