// "product_id": "f9cb5d72-60d8-44d9-860b-e2dc265cb298",
// "product_name":"Billyyy",
// "product_description":"Its... ya know.",
// "available":"false",
// "price":"60"

import React, { useState } from "react";
import { Formik, Field } from "formik";

import Loading from '../components/Loading'
import Errors from '../components/Errors'
import UpdatePhoto from "../components/UpdatePhoto";
import CustomText from "../components/CustomText";
import CustomSwitch from "../components/CustomSwitch";
import CustomButton from "../components/CustomButton";
import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'

async function updateProduct(infoObj) {
    const method = "PUT";
    const url = "/api/products/update";
    const request = await fetchWithCredentials(method, url, infoObj);
    if (!request.ok) throw await request.text() || "Failed To Update";
    return request.ok;
}

export default function ProductForm({ product_info }) {
    const [err, setErr] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {
        product_id,
        product_name,
        product_description,
        available,
        price,
        image_id,
    } = product_info;

    return (
        <Formik
            initialValues={{
                product_id,
                product_name,
                product_description,
                available,
                price,
                image_id,
            }}
            onSubmit={
                async (data, { setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        if (await updateProduct(data)) alert("Product Updated");
                    } catch (err) {
                        setErr(err);
                    } finally {
                        setSubmitting(false);
                    }
                }
            }
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
            {({ values, isSubmitting, handleChange, handleSubmit, errors, setFieldValue }) => (
                <>
                    <Loading loading={isSubmitting} />
                    <Errors errors={[err]} />
                    <UpdatePhoto
                        open={open}
                        handleClose={handleClose}
                        object_info={{product_id}}
                        image_id={values.image_id}
                        setImageId={(value) => setFieldValue("image_id", value)}
                        url={"/api/products/update/image"}
                    />
                    <img
                        src={`/images/${values.image_id}`}
                        style={{ height: 200, width: 300 }}
                    />
                    <CustomButton onClick={handleOpen}> Update Photo </CustomButton>
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
                    <CustomButton onClick={handleSubmit}> Update Product</CustomButton>
                </>
            )}
        </Formik>
    );
}
