import React, { Component } from 'react';
import ArticuleItems from './ArticuleItems';
import axios from 'axios';

class Articules extends Component {
    constructor(){
    super()
    this.state = {
        books: [],
        isLoaded: false
    }
    }

    componentDidMount(){
        axios.get('/wp-json/wp/v2/articules')
            .then(res => this.setState({
                books: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
        
    }

    render(){
       const { books, isLoaded } = this.state;
       if(isLoaded) {
        return (
            <div>
                { books.map(book => (
                    <ArticuleItems  key={ book.id} book={book} />
                )) }
            </div>
        )
       }
        
       return <h3>Loading..</h3>
    }
}

export default Articules