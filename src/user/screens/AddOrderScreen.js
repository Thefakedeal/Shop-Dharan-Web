import React, { useState } from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import { useCart} from '../contexts/Cart'
import DisplayAddOrder from '../section/DisplayAddOrder'
import AddressSelect from '../components/AddressSelect'
import CustomButton from '../components/CustomButton'
import addOrder from '../helperFunctions/addOrder'


export default function AddOrderScreen() {
    const {cart} = useCart()
    const [address, setAddress] = useState('')
    return (
        <LightScreen>
            <NavBar title="Add Order"/>
            <AddressSelect value={address} setValue={setAddress}/>
            <DisplayAddOrder cart={cart} address_id={address}/>
            <CustomButton
                onClick={async ()=>{
                    try{
                        const confirm = window.confirm("Do You Want To Order?")
                        if(!confirm) return;
                        const resp = await addOrder(cart,address)
                        if(resp) window.alert("Order Sucessful")
                    }catch(err){
                        window.alert("Failed To Add Order")
                    }
                }}
            >
                Order
            </CustomButton>
        </LightScreen>
    )
}
