import React from 'react';
import './Projects.css';

function Projects(props) {
    return (
        <div>
            <h2 className="Project-title">Personal Projects</h2>
            <div className="Project-container">
                <div className="Project-box">
                    <h3>TravelBook</h3>
                </div>
                <div className="Project-box">
                    <h3>Yelp</h3>
                </div>
                <div className="Project-box">
                    <h3>Vitamin Water</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects 