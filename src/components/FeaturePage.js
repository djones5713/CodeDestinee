import React, { Component} from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import './FeaturePage.css';

class FeaturePage extends Component {
    state = {
        book: {},
        isLoading: false,
        imageURL: ''
    }
    


    componentDidMount(){
        axios.get(`/wp-json/wp/v2/feature/${this.props.match.params.id}`)
            .then( res => {
                this.setState({
                book: res.data,
                isLoading: true
            })
            console.log(this.props)
        })
            .catch(err => console.log(err))
}
   


    render(){
        const { book, isLoading } = this.state;


        if(isLoading){
            return(
                
                <div>
                    <NavBar />
                    <div className='FeaturePage-blurb' dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
                   
                </div>
            )
        }

        return <h3>Loading...</h3>
       
    }
}

export default FeaturePage