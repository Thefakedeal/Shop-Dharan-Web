import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import CitiesScreen from '../screens/CitiesScreen'
import CityScreen from '../screens/CityScreen'

export default function City({match}) {
    return (
        <BrowserRouter>
        <Switch>
           <Route exact path={`${match.url}/`} component={CitiesScreen}/>
           <Route exact path={`${match.url}/:id`} component={CityScreen}/>
        </Switch>
        </BrowserRouter>
    )
}
