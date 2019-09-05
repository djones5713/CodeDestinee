import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArticulePage extends Component {
    state = {
        book: {},
          // author: '',
        isLoading: false
    }

    componentDidMount(){
        axios.get(`/wp-json/wp/v2/articules/${this.props.match.params.id}`)
            .then( res => {
                this.setState({
                book: res.data,
                isLoading: true
                 // author: res[1].data.name,
            })
        })
            .catch(err => console.log(err)) 
    }


    render(){
        const { author, book, isLoading } = this.state;
        if(isLoading){
            return(
                <Fragment>
                    <Link to="/">Go Back</Link>
                    <hr />
                    <h1>{book.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
                     {/* <small>Review by <strong> {author}</strong></small> */}
                    <h4> Publisher: {book.acf.publisher}</h4>
                </Fragment>
            )
        }

        return <h3>Loading...</h3>
       
    }
}

export default ArticulePage