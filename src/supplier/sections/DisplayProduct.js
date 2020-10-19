import React from 'react'
import {useHistory} from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Errors from '../components/Errors'
import ProductForm from '../forms/ProductForm'
import CustomButton from '../components/CustomButton'
import CenterPaper from '../components/CenterPaper'

import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'

async function deleteProduct(product_id){
    const url= `/api/products/delete`
    const method = 'DELETE'
    const sure = window.confirm("Are You Sure  You Want to Delete")
    if(!sure) return;
    const response = await fetchWithCredentials(method, url, {product_id})
    if(!response.ok) throw await response.text()||"Failed To Delete"
    return response.ok
}

export default function DisplayProduct({product_id}) {
    const url = `/api/products/get?product_id=${product_id}`
    const {err, loading, result} = useFetch(url)
    const history = useHistory()

    const handleDelete = async ()=>{
        try{
            if(await deleteProduct(product_id)){
                alert("Product Deleted")
                history.goBack()
            }
        }catch(err){
            alert(err)
        }
    }

    if(loading) return <Loading loading={loading}/>
    if(err) return <Errors errors={[err]}/>
    return(
        <CenterPaper>
            <ProductForm product_info={result}/>
            <CustomButton onClick={handleDelete}>Delete Product</CustomButton>
        </CenterPaper>
    )    
}
