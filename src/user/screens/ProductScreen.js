import React from 'react'
import {useParams} from 'react-router-dom'
import useFetchProduct from '../hooks/useFetchProduct'
import LightScreen from '../components/LightScreen'
import Loading from '../components/Loading'
import Errors from '../components/Errors'
import ProductDetails from '../section/ProductDetails'
import NavBar from '../components/NavBar'

export default function ProductScreen() {
    const {id} = useParams()
    const {loading, err, result} = useFetchProduct({product_id: id})
    return (
        <LightScreen>
            <NavBar title={"Product"} />
            <Loading loading={loading}/>
            {err && <Errors errors={[err]}/>}
            {result && <ProductDetails product={result}/>}
        </LightScreen>
    )
}
