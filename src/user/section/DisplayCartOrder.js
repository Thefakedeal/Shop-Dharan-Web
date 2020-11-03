import React from 'react'
import useFetchCartOrder from '../hooks/useFetchCartOrder'
import Loading from '../components/Loading'
import Center from '../components/Center'
import Errors from '../components/Errors'
import CartTable from '../section/CartTable'

export default function DisplayCartOrder({cart}) {
    const {err,loading,result} = useFetchCartOrder({cart})
    if(loading) return <Loading loading={loading} center={true}/>
    if(err) return <Errors errors={[err]}/>
    return (
        <Center>
            <CartTable orders={result.cart_orders}/>            
        </Center>
    )
}
