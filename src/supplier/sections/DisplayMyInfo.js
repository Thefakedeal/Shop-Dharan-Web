import React from 'react'

import Loading from '../components/Loading'
import Errors from '../components/Errors'
import SupplierForm from '../forms/SupplierForm'

import useFetchWithAuth from '../hooks/useFetchWithAuth'

export default function DisplayMyInfo() {
    const url = `/api/supplier/info/get`
    const {err,loading,result} = useFetchWithAuth(url)
    if(loading) return <Loading loading={loading}/>
    if(err) return <Errors errors={[err]}/>
    return <SupplierForm supplier_info={result}/>
}
