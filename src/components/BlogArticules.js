import React, { Component } from 'react';
import BlogArticulesItems from './BlogArticulesItems';
import axios from 'axios';
import './Articules.css';

class BlogArticules extends Component {
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
            <div className="Articule-container">
                { books.map(book => (
                    <BlogArticulesItems  key={ book.id} book={book} />
                )) }
            </div>
        )
       }
        
       return null
    }
}

export default BlogArticules