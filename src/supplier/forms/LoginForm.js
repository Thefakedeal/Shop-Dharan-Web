import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import { Formik, Field} from "formik";
import {useRefreshToken, useAccessToken} from '../contexts/LoginInfo'

import Loading from '../components/Loading'
import Errors from '../components/Errors'
import CustomText from "../components/CustomText";
import CenterPaper from "../components/CenterPaper";
import CustomButton from '../components/CustomButton';
import authnav from '../defaults/authlinks.json'
import RedText from '../components/RedText'

async function fetchTokens(data) {
  const response = await fetch("/api/supplier/login", {
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
  const [err, setErr] = useState('')
  const {setRefreshToken} = useRefreshToken()
  const {setAccessToken} = useAccessToken()
  const history = useHistory()
  return (
    <CenterPaper>
      <Formik
        initialValues={{ email_id: "", password: "" }}
        onSubmit={async (data, { setSubmitting }) => {
          try{
            setSubmitting(true)
            const { accessToken, refreshToken }= await fetchTokens(data)
            setAccessToken(accessToken)
            setRefreshToken(refreshToken)
          }catch(err){
            setErr(err)
          }finally{
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting, handleSubmit}) => (
           <> 
           <Loading loading={isSubmitting}/>
           <Errors errors={[err]}/>
           <Field
              name="email_id"
              type="text"
              label="Email"
              required
              as={CustomText}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              required
              as={CustomText}
            />
            <CustomButton type="submit" onClick={handleSubmit}>
                Login
            </CustomButton>
            <RedText
              onClick={()=>{
                history.push(authnav.RequestPin)
              }}
            >
              Forgot Password?
            </RedText>
            </>
        )}
      </Formik>
    </CenterPaper>
  );
}
