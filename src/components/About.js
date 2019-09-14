import React, { Component } from 'react';
import Navbar from './NavBar';
import Destiny2 from './Images/Destiny2.png';
import Logo from './Images/Icon.png';

class About extends Component{
    constructor(props){
    super(props) 
    this.state = {
        title: "Destiny Jones",
        subtitle: "Full Stack Developer"
    }
}

render(){
    return (
        <div>
            <Navbar />
            <div className='Header'>
                <div className='HomeContent'>
                        <div className="Home-HeaderContent">
                            <div id="NavLogo-mini">
                                <img id="CodeDestinee-mini" src={Logo} alt="Logo" />
                                <h3 id="LogoName-mini">Code <br/> Destinee</h3>
                            </div>
                            <h1 className='Home-title'>{this.state.title}</h1>
                            <h6 className='Home-subtitle' style={{"width": "250px"}}><strong>{this.state.subtitle}</strong></h6>
                        </div>
                        <img id='DestinyJ' style={{"margin-top": "0px", "width": 500, "height":"400px"}} src={Destiny2} alt='Destiny Jones' />
                </div>
            </div>
        </div>
    )
}
}

export default About