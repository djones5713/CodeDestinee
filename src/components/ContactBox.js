import React, { Component } from 'react';
import './ContactBox.css';

class ContactBox extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
    }
    render(){
        return (
            <div className="Contact-Box">
                <div className="Contact-Top-Input">
                    <div className="Left">
                        <h3 className="Contact-Input-subtitle">Name</h3>
                        <input className="Contact-Input" />
                    </div>
                    <div>
                    <h3 className="Contact-Input-subtitle">Email</h3>
                        <input className="Contact-Input" />
                    </div>
                </div>
                <div className="Contact-Bottom-Input">
                    <h3 className="Contact-Input-subtitle-message">Message</h3>
                    <input className="Contact-Input-Message" />
                    <button  className="Contact-Button">Submit</button>
                </div>
            </div>
        )
    }
}

export default ContactBox