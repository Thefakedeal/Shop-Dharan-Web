import React from 'react'
import {useHistory} from 'react-router-dom'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import CenterPaper from '../components/CenterPaper'
import DisplayCartOrder from '../section/DisplayCartOrder'
import {useCart} from '../contexts/Cart'
import CustomButton from '../components/CustomButton'
import NAVLINKS from '../defaults/navlinks.json'

export default function CartScreen() {
    const history = useHistory()
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
            <CustomButton
                onClick={()=>{
                    history.push(`${NAVLINKS.Cart}/order`)
                }}
            >
                Add Order
            </CustomButton>
            </CenterPaper>
        </LightScreen>
    )
}
