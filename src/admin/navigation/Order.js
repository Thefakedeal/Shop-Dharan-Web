import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import OrdersScreen from '../screens/OrdersScreen'
import OrderScreen from '../screens/OrderScreen'

export default function Catagory({match}) {
    return (
        <BrowserRouter>
        <Switch>
           <Route exact path={`${match.url}/`} component={OrdersScreen}/>
           <Route exact path={`${match.url}/:id`} component={OrderScreen}/>
        </Switch>
        </BrowserRouter>
    )
}
