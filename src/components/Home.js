import React, { Component } from 'react';
import NavBar from './NavBar';
import Articules from './Articules';
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
                    <div className="Home-HeaderContent">
                         <h1 className='Home-title'>Its About Code </h1>
                         <h6 className='Home-subtitle'><strong>Code Everything</strong></h6>
                    </div>
                    <img id='DestinyJ' src={Destiny1} alt='Destiny Jones' />
                </div>
            </div>
            <div className='Home-BottomContent'>
                <Articules/>
            </div>
            
           

        </div>
    )
}
}

export default Home