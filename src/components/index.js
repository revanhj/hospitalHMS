import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from './home-page'
import DashBoard from './dashboard'
const Views=()=>
<BrowserRouter>
<Switch>
<Route path='/' exact component={HomePage}/>
<Route path='/dashboard' exact component={DashBoard}/>
</Switch>
</BrowserRouter>
export default Views;