import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class ArticuleItems extends Component {
    state = {
        imageURL: '',
        author: '',
        isLoading: false
    }
    static propTypes = {
        book: PropTypes.object.isRequired
    }
  
    componentDidMount(){
        const { featured_media, author } = this.props.book;
        const getImageURL = axios.get(`/wp-json/wp/v2/media/${featured_media}`)
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

        Promise.all([getImageURL, getAuthor]).then(res => {
          
            this.setState({
                imageURL: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoading: true
            })
        })
    }

    render(){
        const { id, title, excerpt } = this.props.book
        const { author, imageURL, isLoading } = this.state
        if(isLoading){
            return (
                <div>
                    <h2 style={{ marginBottom: '0' }}>{ title.rendered }</h2>
                    <small>Review by <strong> {author}</strong></small>
                    <img style={{ width: '100%' }} src={ imageURL } alt={title.rendered} />
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered}} />
                    <Link to={`/book/${id}`}>Read Review</Link>
                    <hr/>
                </div>
            )

        } 
            return null;
     
    }


}

export default ArticuleItems 