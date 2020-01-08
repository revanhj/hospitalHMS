import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from './home-page'
import DashBoard from './dashboard'
import Services from './home-page/Services';
import Department from './home-page/Department';
import Doctors from './home-page/Doctors';
import Contact from './home-page/Contact';
const Views=(props)=>
<BrowserRouter>

<Route path='/:path' exact component={HomePage}/>

<Route path='/dashboard' exact component={DashBoard}/>

</BrowserRouter>
export default Views;