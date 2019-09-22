import React, { Component } from 'react';
import NavBar from './NavBar';
import ContactBox from './ContactBox';
import Destiny3 from './Images/Destiny3.png';
import './Contact.css';


class Contact extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
}

render(){
    return(
        <div>
            <NavBar />
            <div  className="Contact-Header">
                <div className="Contact-Content">
                        <ContactBox />
                    <div className="Contact-Img-Box">
                        <h2 className="Contact-Img-Box-Title">Let's Talk Code</h2>
                        <img className="Contact-img" src={Destiny3} alt="Destiny Jones" />
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Contact