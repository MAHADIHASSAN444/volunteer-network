import React from 'react';
import './Header.css';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}

            <a className="navbar-brand" href="/home">
                <img src={logo} alt="" />
            </a>
            {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                {/* <ul className="navbar-nav ml-auto"> */}
                    {/* <li className="nav-item"> */}
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        {/* <a className="nav-link" href="/home">Home</a> */}
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <a className="nav-link" href="/">Donation</a>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        {/* <Link to="/selectedEvent"><a className="nav-link" href="#">Events</a></Link> */}
                        <a className="nav-link" href="/addSector">Events</a>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <a className="nav-link" href="#">Blog</a>
                    {/* </li> */}
{/* 
                </ul> */}
                <Link to="/registration"><button type="button" className="btn btn-primary mr-2">Register</button></Link>
                <br />
                <Link to="/admin"><button type="button" className="btn btn-dark">Admin</button></Link>
            {/* </div> */}
        </nav>
    </div>







/* <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand ml-4" href="#"><img src={logo} alt="" /></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">
<li class="nav-item active">
<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
<a class="nav-link" href="/">Donation</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/">Evants</a>
<a class="nav-link" href="/events">Evants</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/">Blog</a>
</li>
<li class="nav-item">
<a class="nav-link btn btn-primary text-white " href="/login">Login</a>
</li>
<li class="nav-item">
<a class="nav-link btn btn-dark text-white ml-3" href="/">Admin</a>
</li>y

</ul>

</div>
</nav>
</div> */

    );
};

export default Header;