import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import SuppliersScreen from '../screens/SuppliersScreen'
import SupplierScreen from '../screens/SupplierScreen'

export default function Suppliers({match}) {
    return (
        <BrowserRouter>
        <Switch>
           <Route exact path={`${match.url}/`} component={SuppliersScreen}/>
           <Route exact path={`${match.url}/:id`} component={SupplierScreen}/>
        </Switch>
        </BrowserRouter>
    )
}
