import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";
import {
  useRefreshToken,
  useAccessToken,
} from "../contexts/LoginInfo";

import authlinks from '../defaults/authlinks.json'
import RedText from "../components/RedText";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import CustomText from "../components/CustomText";
import CenterPaper from "../components/CenterPaper";
import CustomButton from "../components/CustomButton";
import { validateEmail, validatePassword } from "../validations";

async function fetchTokens(data) {
  const response = await fetch("/api/user/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw await response.text();
  }
  return await response.json();
}

export default function LoginForm() {
  const history = useHistory();
  const [err, setErr] = useState("");
  const { setRefreshToken } = useRefreshToken();
  const { setAccessToken } = useAccessToken();
  return (
    <CenterPaper>
      <Formik
        initialValues={{
          user_name: "",
          email_id: "",
          password: "",
          repassword: "",
          mobile_number: "",
        }}
        validate={(data) => {
          const errors = {};
          if (!validateEmail(data.email_id)) errors.email_id = "Invalid Email";
          if (!validatePassword(data.password))
            errors.password = "Password Must Be Atleast 6 characters";
          if (data.password !== data.repassword)
            errors.repassword = "Passwords Donot Match";
          if (data.mobile_number.length !== 10)
            errors.mobile_number = "Mobile Number Must Be 10 digits long";
          if (data.mobile_number.length === 0)
            errors.mobile_number = "Mobile Number is Required";
          if (!/^\d+$/.test(data.mobile_number))
            errors.mobile_number = "Invalid Mobile number";
          if (data.user_name.length === 0)
            errors.user_name = "Name is Required";
          return errors;
        }}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const { accessToken, refreshToken } = await fetchTokens(data);
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            history.push("/");
          } catch (err) {
            setErr(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit, errors }) => (
          <>
            <Loading loading={isSubmitting} />
            <Errors errors={[err]} />
            <Field
              name="user_name"
              type="text"
              label="Name"
              error={errors.user_name ? true : false}
              helperText={errors.user_name}
              required
              as={CustomText}
            />
            <Field
              name="email_id"
              type="text"
              label="Email"
              error={errors.email_id ? true : false}
              helperText={errors.email_id}
              required
              as={CustomText}
            />
            <Field
              name="mobile_number"
              type="tel"
              label="Mobile No."
              error={errors.mobile_number ? true : false}
              helperText={errors.mobile_number}
              required
              as={CustomText}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              error={errors.password ? true : false}
              helperText={errors.password}
              required
              as={CustomText}
            />
            <Field
              name="repassword"
              type="password"
              label="Retype Password"
              error={errors.repassword ? true : false}
              helperText={errors.repassword}
              required
              as={CustomText}
            />
            <CustomButton type="submit" onClick={handleSubmit}>
              Sign Up
            </CustomButton>

            <RedText
              onClick={() => {
                history.push(authlinks.Login);
              }}
            >
              Already A User?
            </RedText>
          </>
        )}
      </Formik>
    </CenterPaper>
  );
}
