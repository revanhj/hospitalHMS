import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from './home-page'
import DashBoard from './dashboard'
const Views=(props)=>
<BrowserRouter>
<Switch>
<Route path='/dashboard' exact component={DashBoard}/>
<Route path='/:path' exact component={HomePage}/>
</Switch>
</BrowserRouter>
export default Views;