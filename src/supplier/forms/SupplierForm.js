import React, { useState } from "react";
import { Formik, Field } from "formik";

import CitySelect from "../components/CitySelect";
import CatagorySelect from "../components/CatagorySelect";
import UpdatePhoto from "../components/UpdatePhoto";
import CustomText from "../components/CustomText";
import CenterPaper from "../components/CenterPaper";
import CustomSwitch from "../components/CustomSwitch";
import CustomButton from "../components/CustomButton";
import Loading from "../components/Loading";
import Errors from "../components/Errors";

import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";

async function updateMyInfo(infoObj) {
  const method = "PUT";
  const url = "/api/supplier/info/update";
  const request = await fetchWithCredentials(method, url, infoObj);
  if (!request.ok) throw await request.text();
  return request.ok;
}

// supplier_id,
//   supplier_name,
//   image_id,
//   city_id,
//   email_id,
//   supplier_description,
//   visible,
//   catagory_id,
//   contact_number;

export default function SupplierForm({ supplier_info }) {
  const [err, setErr] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CenterPaper>
      <Formik
        initialValues={supplier_info}
        onSubmit={async (data, { setSubmitting }) => {
          try {
            setSubmitting(true);
            if (await updateMyInfo(data)) alert("Info Updated");
          } catch (err) {
            setErr(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          handleChange,
          values,
          setFieldValue,
        }) => (
          <>
            <Loading loading={isSubmitting} />
            <Errors errors={[err]} />
            <UpdatePhoto
              open={open}
              handleClose={handleClose}
              image_id={values.image_id}
              setImageId={(value) => setFieldValue("image_id", value)}
              url={"/api/supplier/photo/update"}
            />
            <img
              src={`/images/${values.image_id}`}
              style={{ height: 200, width: 300 }}
            />
            <CustomButton onClick={handleOpen}> Update Photo </CustomButton>
            <Field label="Name" name="supplier_name" required as={CustomText} />
            <Field label="Email" name="email_id" required as={CustomText} />
            <Field
              label="Description"
              name="supplier_description"
              multiline
              rowsMax={5}
              required
              as={CustomText}
            />
            <Field
              name="city_id"
              value={values.city_id}
              setValue={handleChange("city_id")}
              as={CitySelect}
            />
            <Field
              name="catagory_id"
              value={values.catagory_id}
              setValue={handleChange("catagory_id")}
              as={CatagorySelect}
            />
            <Field
              label="Visible"
              name="visible"
              checked={values.visible}
              onChange={handleChange("visible")}
              as={CustomSwitch}
            />
            <Field
              label="Contact"
              name="contact_number"
              type="tel"
              required
              as={CustomText}
            />
            <CustomButton onClick={handleSubmit}> Update </CustomButton>
          </>
        )}
      </Formik>
    </CenterPaper>
  );
}
