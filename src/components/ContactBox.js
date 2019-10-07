import React, { Component } from 'react';
import './ContactBox.css';

class ContactBox extends Component {
    constructor(props){
    super(props)
    this.state = {
        name: '',
        email: '',
        message: '',
        messageSent: false,
        error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit( event ) {
        event.preventDefault();
            console.log(this.state);
    }

    render(){
        return (
            <form className="Contact-Box" action="/action_page.php">
                <div className="Contact-Top-Input">
                    <div className="Left">
                        <h3 className="Contact-Input-subtitle">Name</h3>
                        <input className="Contact-Input" 
                            type="text" 
                            id="name" 
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div>
                        <h3 className="Contact-Input-subtitle">Email</h3>
                        <input className="Contact-Input"
                            type="email"
                            id="email"
                            value={this.state.email} 
                            onChange={e => this.setState({ email: e.target.value })}/>
                    </div>
                </div>
                    <div className="Contact-Bottom-Input">
                        <h3 className="Contact-Input-subtitle-message">Message</h3>
                        <textarea className="Contact-Input-Message" 
                            id="message"
                            value={this.state.message}
                            onChange={e => this.setState({ message : e.target.value })}> 
                        </textarea>
                        <button  className="Contact-Button" 
                            type="submit" 
                            value="Submit"
                            onClick={e => this.handleFormSubmit(e)}>
                            Submit
                        </button>
                    </div>
            </form>
        )
    }
}

export default ContactBox