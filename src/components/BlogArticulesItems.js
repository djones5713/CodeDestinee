import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './BlogArticulesItems.css';

class BlogArticulesItems extends Component {
    state = {
        imageURL: '',
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
                isLoading: true
            })
        })
    }

    render(){
        const { id, title, excerpt } = this.props.book
        const {imageURL, isLoading } = this.state
        if(isLoading){
            return (
               
                <div className="ArticuleBlog-itemstyle">
                    <img className="ArticuleBlog-img" src={ imageURL } alt={title.rendered} />
                    <p className="ArticuleBlog-tag-description">Guide</p>
                    <h2 className="ArticuleBlog-title">{ title.rendered }</h2>
                    
                </div>
             
            )

        } 
            return null;
     
    }


}

export default BlogArticulesItems