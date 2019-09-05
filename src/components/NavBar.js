import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Images/Search.png';
import Logo from './Images/Icon.png';
import './NavBar.css';

function Navbar(){
    return (
        <div id="Navigation">
            <div id="NavLogo">
                <Link to='/'><img id="CodeDestinee" src={Logo} alt="Logo" /></Link>
                    <h3 id="LogoName">Code <br/> Destinee</h3>
                
            </div>
            
            <div>
                <Link className="NavLink" to='/'>Home</Link>
                <Link className="NavLink" to='/CodeDestinee/About'>About</Link>
                <Link className="NavLink" to='/CodeDestinee/Blog'>Blog</Link>
                <Link className="NavLink" to='/CodeDestinee/Contact'>Contact</Link>
                <img className="NavLink" id="SearchIcon" src={Search} alt="Search-Icon" />
            </div>
        </div>
    )
}

export default Navbar