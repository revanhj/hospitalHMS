import React from 'react';
import {Route} from 'react-router-dom'
import BookMyAppointment from './BookMyAppointment';
import Login from './Login';
import Navbar from './Navbar';
import Carosal from './Carosal';
import About from './About'
import Services from './Services';
import Department from './Department';
import Doctors from './Doctors';
import Contact from './Contact';
import Footer from './footer';

const HomePage=(props)=>
<React.Fragment>
<div className="position-fixed d-flex flex-column vw-100 bg-dark p-0 m-0 " style={{zIndex:1,minWidth:100+'vw'}}>
<div className='container d-md-flex  ml-auto justify-content-end'>
<button type="button" className="btn btn-outline-light btn-sm mr-2 " data-toggle="modal" data-target="#bookappointment">
 Book Appointment </button>
<button type="button" className="btn btn-outline-light btn-sm " data-toggle="modal" data-target="#login">
 Login
</button>
</div>


<Navbar />
</div>
<BookMyAppointment />
<Login />

<Route path='/home' exact component={Carosal}/>
<Route path='/about' exact component={About} />
<Route path='/service' exact component={Services} />
<Route path='/department' exact component={Department} />
<Route path='/docter' exact component={Doctors} />
<Route path='/contact' exact component={Contact} />
<Footer />
</React.Fragment>
export default HomePage