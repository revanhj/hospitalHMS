import React, { Component } from 'react';
import './App.css';
import Views from './components'
import {Get} from './http/httprequest' 

class App extends Component {
  render() {
    Get('todos').then((res)=>console.log(res.data));
    return (

      <Views/>
    );
  }
}

export default App;
