import React from 'react'
import {useParams} from 'react-router-dom'

import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import DisplayProduct from '../sections/DisplayProduct'

export default function ProductScreen() {
    const {id} = useParams()
    return (
        <LightScreen>
            <NavBar title="Product"/>
            <DisplayProduct product_id={id}/>
        </LightScreen>
    )
}
