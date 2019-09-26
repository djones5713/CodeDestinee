import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


class ArticulesPage extends Component {
    constructor(props){
    super(props) 
        this.state = {
            book: {},
            isLoaded: false
        }
    }

    componentDidMount(){
        axios.get(`/wp-json/wp/v2/books/${this.props.match.params.id}`)
        .then(res => this.setState({
            book: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render(){
        const { book, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <Fragment>
                    <Link to='/'>Back</Link>
                    <hr />
                    <h1>{book.title.render}</h1>
                    <div dangerouslySetInnerHTML={{__html:book.content.render}}></div>
                    <h4>Publisher: {book.acf.publisher}</h4>
                </Fragment>
            )
        }
        return <h3>Loading..</h3>
    }
   

}

export default ArticulesPage