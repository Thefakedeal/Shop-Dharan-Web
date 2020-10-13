import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import CatagoriesScreen from '../screens/CatagoriesScreen'
import CatagoryScreen from '../screens/CatagoryScreen'

export default function Catagory({match}) {
    console.log(match)
    return (
        <BrowserRouter>
        <Switch>
           <Route exact path={`${match.url}/`} component={CatagoriesScreen}/>
           <Route exact path={`${match.url}/:id`} component={CatagoryScreen}/>
        </Switch>
        </BrowserRouter>
    )
}
