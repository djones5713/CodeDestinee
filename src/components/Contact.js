import React, { Component } from 'react';
import NavBar from './NavBar';
import ContactBox from './ContactBox';
import './Contact.css'


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
                <ContactBox />
            </div>
        </div>
    )
}
}

export default Contact