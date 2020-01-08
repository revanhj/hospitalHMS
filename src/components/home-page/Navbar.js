
import React from 'react';
import {Link} from 'react-router-dom'; 
const navitems=[{
  link:'home',
  name:'Home'
},
{
  link:'about',
  name:'About Hospital'
},
{
  link:'department',
  name:'Departments'
},
{
  link:'docter',
  name:'Doctors'
},
{
  link:'service',
  name:'Services'
},
{
  link:'contact',
  name:'Contact'
}
];
export default () => 
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-primary p-0 w-100" >
<div className='container'>
  <Link className="navbar-brand text-white" to="/">Hospital Management</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto p-0">
      {navitems.map((item,index) => <li key={index}className="nav-item active ml-4">
        <Link className="nav-link text-white" to={'/'+item.link}>{item.name}
        <span className="sr-only">(current)</span></Link>
      </li>)}
    </ul>
    </div>
  </div>
</nav>
</React.Fragment>