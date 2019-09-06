import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Images/Search.png';
import Logo from './Images/Icon.png';
import './NavBar.css';
import bars from './Images/bars.png';

function Navbar(){
    return (
        <div>
        <div id="Navigation">
            <div id="NavLogo">
                <Link to='/'><img id="CodeDestinee" src={Logo} alt="Logo" /></Link>
                    <h3 id="LogoName">Code <br/> Destinee</h3>
            </div>
            
            <div id="Navbar">
                <Link className="NavLink" to='/'>Home</Link>
                <Link className="NavLink" to='/CodeDestinee/About'>About</Link>
                <Link className="NavLink" to='/CodeDestinee/Blog'>Blog</Link>
                <Link className="NavLink" to='/CodeDestinee/Contact'>Contact</Link>
                <img className="NavLink" id="SearchIcon" src={Search} alt="Search-Icon" />
            </div>
        </div>
        <div id="Navigation-mini"> 
            <img className="Mini-nav" src={bars} alt="nav-icon"/>
        </div>
        </div>
    )
}

export default Navbar