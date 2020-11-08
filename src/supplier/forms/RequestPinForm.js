import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";
import { validateEmail } from "../validations";
import RedText from "../components/RedText";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import CustomText from "../components/CustomText";
import CenterPaper from "../components/CenterPaper";
import CustomButton from "../components/CustomButton";
import authlinks from "../defaults/authlinks.json";

async function requestPin(data) {
  const response = await fetch("/api/supplier/requestpin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}

export default function RequestPinForm() {
  const history = useHistory();
  const [err, setErr] = useState("");

  return (
    <CenterPaper>
      <Formik
        initialValues={{ email_id: "" }}
        validate={(data) => {
          const errors = {};
          if (!validateEmail(data.email_id)) errors.email_id = "Invalid Email";
          return errors;
        }}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            const success = await requestPin(data);
            if (success) {
              return history.push(authlinks.ResetPassword);
            }
            alert("Failed To Send Email Please Try Again");
          } catch (err) {
            setErr(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, handleSubmit,errors }) => (
          <>
            <Loading loading={isSubmitting} />
            <Errors errors={[err]} />
            <Field
              name="email_id"
              type="text"
              label="Email"
              error={errors.email_id ? true : false}
              helperText={errors.email_id}
              required
              as={CustomText}
            />

            <CustomButton type="submit" onClick={handleSubmit}>
              Request Reset Pin From Email
            </CustomButton>
            <RedText
              onClick={() => {
                history.push(authlinks.ResetPassword);
              }}
            >
              {" "}
              Already Have A Pin?{" "}
            </RedText>

            <RedText
              onClick={() => {
                history.push(authlinks.Login);
              }}
            >
              {" "}
              Back To Login{" "}
            </RedText>
          </>
        )}
      </Formik>
    </CenterPaper>
  );
}
