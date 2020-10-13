import React from 'react'
import useFetchWithAuth from './useFetchWithAuth'
export default function useFetchOrderStatus() {
    const url = '/api/admin/orders/getorderstatus'
    const {err,loading,result} = useFetchWithAuth("GET",url)
    return {err,loading,result}
}
