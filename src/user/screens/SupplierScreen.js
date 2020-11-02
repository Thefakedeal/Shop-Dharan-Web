import React from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading'
import Errors from '../components/Errors'
import useFetchSupplier from '../hooks/useFetchSupplier'
import LightScreen from '../components/LightScreen'
import DisplaySupplier from '../section/DisplaySupplier'
import DisplayProducts from '../section/DisplayProducts'
import useFetchProducts from '../hooks/useFetchProducts'
import NavBar from '../components/NavBar'

export default function SupplierScreen() {
    const { id } = useParams();
    const { err, loading, result } = useFetchSupplier({ supplier_id: id });
    const {err: producterr, loading: productLoad, result: products} = useFetchProducts({supplier_id: id, visible: true})
    if (loading || productLoad) return <Loading loading={true} />;
    if (err || producterr) return <Errors errors={[err, producterr]} />;
    console.log(result)
    return (
        <LightScreen>
            <NavBar title={result.supplier_name || "Supplier"} />
            <DisplaySupplier supplier={result} />
            <DisplayProducts products={products}/>
        </LightScreen>
    )
}
