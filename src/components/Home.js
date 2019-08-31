import React, { Component } from 'react';
import NavBar from './NavBar';
import Destiny1 from './Images/Destiny1.png';
import './Home.css';



class Home extends Component {
    constructor(props){
    super(props)
    this.state = {

    }
}

render(){
    return(
        <div>
            <NavBar />
            <div className='Header'>
                <div className='HomeContent'>
                    <div>
                         <h1 className='Home-title'>Its About Code </h1>
                         <h6 className='Home-subtitle'>Code Everything</h6>
                    </div>
                    <img id='DestinyJ' src={Destiny1} alt='Destiny Jones' />
                </div>
            </div>

        </div>
    )
}
}

export default Home