import React,{useState} from 'react'
import {Paper, makeStyles} from '@material-ui/core'

import Loading from '../../components/Loading'
import Errors from '../../components/Errors'
import CustomText from '../../components/CustomText'
import UpdatePhoto from '../../components/UpdatePhoto'
import CustomSwitch from '../../components/CustomSwitch'
import CustomSelect from '../../components/CustomSelect'

const useStyles = makeStyles({
    container:{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    fullcontainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      },
})

import useFetchCities from '../../hooks/useFetchCities'
import useFetchCatagories from '../../hooks/useFetchCatagories'
import {useFormik} from 'formik'

export default function SupplierForm({supplier}) {
    const styles = useStyles()
    const supplierDetails = useFormik({
        initialValues:{
            supplier_id: supplier.supplier_id,
            supplier_name: supplier.supplier_name,
            image_id: supplier.supplier.image_id,
            city_id: supplier.city_id,
            email_id: supplier.email_id,
            supplier_description: supplier.supplier_description,
            visible: supplier.visible,
            catagory_id: supplier.catagory_id,
            contact_number: supplier.contact_number,
        }
    })

    const [open, setOpen] = useState(false);

    const {
      loading: catagoryloading,
      result: catagories,
      err: catagorieserr,
    } = useFetchCatagories();
  
    const {
      loading: citiesloading,
      result: cities,
      err: citiesserr,
    } = useFetchCities();

    if(citiesloading || catagoryloading) return <Loading loading="true"/>
    if(citiesserr || catagorieserr) return <Errors errors={[citiesserr,catagorieserr]}/>

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    <Paper
    className={styles.container}
    >
      <img src={`/images/${supplierDetails.values.image_id}`} style={{height:200,width:300, objectFit:"contain"}}/>

      <Button color="primary" onClick={handleOpen}>
        Update Photo
      </Button>
 
      <UpdatePhoto open={open} handleClose={handleClose}
        url={'/api/suppliers/update/photo'}
        object_info={{supplier_id: supplierDetails.values.supplier_id}}
        image_id={supplierDetails.values.image_id}/>
      
      <CustomText
        label="Name"
        id="supplier_name"
        name="supplier_name"
        value={supplierDetails.values.supplier_name}
        onChange={supplierDetails.handleChange}
        required
      />

        <CustomText
        label="Email"
        id="email_id"
        name="email_id"
        value={supplierDetails.values.email_id}
        onChange={supplierDetails.handleChange}
        required
      />

      <CustomSwitch
        checked={supplierDetails.values.visible}
        onChange={supplierDetails.handleChange}
        id="visible"
        name="visible"
        label="Visible"
      />

        <CustomText
        label="Description"
        id="supplier_description"
        name="supplier_description"
        value={supplierDetails.values.supplier_description}
        onChange={supplierDetails.handleChange}
        multiline
        rows={5}
      />

    
      <CustomText
        label="Contact Number"
        name="contact_number"
        id="contact_number"
        type="tel"
        value={supplierDetails.values.contact_number}
        onChange={supplierDetails.handleChange}
        required
      />

      <div className={styles.fullcontainer}>
        {/* <CustomSelect
          label={"City"}
          setSelection={(value) => {
            dispatch({ type: ACTIONS.SETCITY, payload: value });
          }}
          options={cities.map((city) => ({
            id: city.city_id,
            value: city.city_name,
          }))}
          selection={{ id: state.city_id }}
        />

        <CustomSelect
          label={"Catagory"}
          setSelection={}
          options={catagories.map((catagory) => ({
            id: catagory.catagory_id,
            value: catagory.catagory_name,
          }))}
          selection={{
            id: state.catagory_id,
          }}
        /> */}
      </div>
    </Paper>
  );
}
