import React, { Component } from 'react';
import './Youtube.css';

class Youtube extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
    }

    render(){
        return(
            <div className="Youtube-Container">
                <div className="Youtube-Header">
                    <h1  className="Youtube-Title">Youtube</h1>
                    <h2 className="Youtube-Subtitle">Channel</h2>
                </div>
                <div className="Youtube-Box">

                </div>
            </div>
        )
    }
}

export default Youtube