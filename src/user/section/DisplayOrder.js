import React from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading'
import Errors from '../components/Errors'
import CenterPaper from '../components/CenterPaper'
import useFetchOrder from '../hooks/useFetchOrder'
import OrderTable from './OrderTable'
import OrderDetails from './OrderDetails'
import Address from './Address'
import DisplayCost from './DisplayCost'
import CustomButton from '../components/CustomButton'
import cancelOrder from '../helperFunctions/cancelOrder'


export default function DisplayOrder() {
    const {id} = useParams()
    const {err, loading, result, reloadResources} = useFetchOrder({order_id: id})
    if(loading) return <Loading center={true} loading={true}/>
    if(err) return <Errors errors={[err]}/>
    return (
        <CenterPaper>
            <CustomButton
                onClick={reloadResources}
                variant="text"
            >
                Reload
            </CustomButton>
            <OrderDetails order={result.order}/>
            <Address address={result.address}/>
            <OrderTable orders={result.ordered_items}/>
            <DisplayCost 
                suppliers={result.numOfSuppliers}
                deliveryCharge={result.deliveryCharge}
                total={result.total}
            />
            <CustomButton
                variant="text"
                onClick={async()=>{
                    try{
                        const confirm = window.confirm("Are You Sure You Want To Cancel")
                        if(!confirm) return
                        const cancelled = await cancelOrder(id)
                        if(cancelled) {
                            alert("Order Cancelled")
                            return reloadResources()
                        }
                        alert("Faied To Cancel")
                    }catch(err){
                        alert(err)
                    }
                }}
            >
                Cancel Order
            </CustomButton>
        </CenterPaper>
    )
}
