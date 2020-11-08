import React  from 'react'
import { Formik } from 'formik'
import { validatePassword } from "../validations";
import Loading from '../components/DisplayLoading'
import CustomText from '../components/CustomText'
import CenterPaper from '../components/CenterPaper'
import CustomButton from "../components/CustomButton";

import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";


async function changePassword(old_password, new_password) {
    const url = `/api/admin/changepassword`
    const method = 'PUT'
    const response = await fetchWithCredentials(method, url, { old_password, new_password })
    if (!response.ok) throw await response.text() || "Failed To Update"
    return response.ok
}

export default function ChangePasswordForm() {
    return (
        <Formik
            initialValues={{
                oldpassword: '',
                newpassword: '',
                renewpassword: '',
            }}
            validate={
                (data) => {
                    const errors = {}
                    if (!validatePassword(data.newpassword)) errors.newpassword = "Invalid Password"
                    if (data.newpassword.length === 0) errors.newpassword = "Password Cant be Empty"
                    if (data.renewpassword !== data.newpassword) errors.renewpassword = "Passwords Donot Match"
                    return errors
                }
            }
            onSubmit={async (data, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                try {
                    if (await changePassword(data.oldpassword, data.newpassword)) {
                        alert("Password Changed")
                        resetForm()
                    }
                } catch (err) {
                    alert(err)
                } finally {
                    setSubmitting(false)
                }
            }}
        >
            {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                isSubmitting,
                errors,
            }) => (
                    <CenterPaper>
                        {isSubmitting && <Loading loading={isSubmitting}/>}
                        <CustomText
                            label={"Old Password"}
                            value={values.oldpassword}
                            type="password"
                            error={errors.oldpassword ? true : false}
                            helperText={errors.oldpassword}
                            onChange={handleChange("oldpassword")}
                            onBlur={handleBlur("oldpassword")}
                        />
                        <CustomText
                            label={"New Password"}
                            value={values.newpassword}
                            type="password"
                            error={errors.newpassword ? true : false}
                            helperText={errors.newpassword}
                            onChange={handleChange("newpassword")}
                            onBlur={handleBlur("newpassword")}
                        />

                        <CustomText
                            label={"Retype Password"}
                            value={values.renewpassword}
                            type="password"
                            error={errors.renewpassword ? true : false}
                            helperText={errors.renewpassword}
                            onChange={handleChange("renewpassword")}
                            onBlur={handleBlur("renewpassword")}
                        />
                        <CustomButton
                            onClick={handleSubmit}
                        >
                            Change Password
                        </CustomButton>
                    </CenterPaper>
                )}
        </Formik>
    )
}
