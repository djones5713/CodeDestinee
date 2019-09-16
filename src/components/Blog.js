import React, { Component } from 'react';
import NavBar from './NavBar';
import Articules from './Articules';

class Blog extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
}

render(){
    return(
        <div>
            <NavBar />
            <Articules />
        </div>
    )
}
}

export default Blog