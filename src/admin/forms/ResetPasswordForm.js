import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";

import { validateEmail, validatePassword } from "../validations";
import RedText from "../components/RedText";
import Loading from "../components/DisplayLoading";
import Errors from "../components/DisplayErrors";
import CustomText from "../components/CustomText";
import CenterPaper from "../components/CenterPaper";
import CustomButton from "../components/CustomButton";
import authlinks from "../defaults/authlinks.json";

async function resetPassword(data) {
  const response = await fetch("/api/admin/resetpassword", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text();
  }
  return response.ok;
}

export default function ResetForm() {
  const history = useHistory();
  const [err, setErr] = useState("");

  return (
    <CenterPaper>
      <Formik
        initialValues={{ username: "", new_password: "", renew_password:"", pin:""}}
        validate={(data)=>{
            const errors = {};
          if (!validatePassword(data.new_password))
            errors.new_password = "Password Must Be Atleast 6 characters";
          if (data.new_password !== data.renew_password)
            errors.renew_password = "Passwords Donot Match";
            return errors
        }}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const success = await resetPassword(data)
            if(success) history.push(authlinks.Login)
          } catch (err) {
            setErr(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, errors}) => (
          <>
            <Loading loading={isSubmitting} />
            <Errors errors={[err]} />
            <Field
              name="username"
              type="text"
              label="Username"
              required
              as={CustomText}
            />
            <Field
              name="new_password"
              type="password"
              label="New Password"
              error={errors.new_password ? true : false}
              helperText={errors.new_password}
              required
              as={CustomText}
            />
            <Field
              name="renew_password"
              type="password"
              label="Retype Password"
              error={errors.renew_password ? true : false}
              helperText={errors.renew_password}
              required
              as={CustomText}
            />
            <Field
              name="pin"
              type="text"
              label="Pin"
              required
              as={CustomText}
            />
            <CustomButton type="submit" onClick={handleSubmit}>
              Reset Password
            </CustomButton>
            <RedText
              onClick={() => {
                history.push(authlinks.RequestPin)
              }}
            >
              Didn't Recieve Pin?
            </RedText>

            <RedText
              onClick={() => {
                history.push(authlinks.Login);
              }}
            >
                Back To Login
            </RedText>
          </>
        )}
      </Formik>
    </CenterPaper>
  );
}
