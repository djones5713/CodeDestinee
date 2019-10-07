import React from 'react';
import './Projects.css';

function Projects(props) {
    return (
        <div>
            <h2 className="Project-title">Personal Projects</h2>
            <div className="Project-container">
                <div className="Project-box">
                    <a href='http://www.theetravelbook.com/' rel="noopener noreferrer" target="_blank" className="Project-subtitle">TravelBook</a>
                </div>
                <div className="Project-box">
                    <a  href='http://www.google.com/' rel="noopener noreferrer" target="_blank" className="Project-subtitle">Yelp</a>
                </div>
                <div className="Project-box">
                    <a  href='http://www.google.com/' rel="noopener noreferrer" target="_blank" className="Project-subtitle">Vitamin Water</a>
                </div>
            </div>
        </div>
    )
}

export default Projects 