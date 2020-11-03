import React from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import CenterPaper from '../components/CenterPaper'
import DisplayCartOrder from '../section/DisplayCartOrder'
import {useCart} from '../contexts/Cart'
import CustomButton from '../components/CustomButton'

export default function CartScreen() {
    const {cart,clearCart} = useCart()
    return (
        <LightScreen>
            <NavBar title={"Cart"}/>
            <CenterPaper>
            <DisplayCartOrder cart={cart}/>
            <CustomButton
                variant="text"
                onClick={()=>{
                    const confirm = window.confirm("Are You Sure?")
                    if(!confirm) return;
                    clearCart()
                }}
            >
                Clear Cart
            </CustomButton>
            <CustomButton>
                Add Order
            </CustomButton>
            </CenterPaper>
        </LightScreen>
    )
}
