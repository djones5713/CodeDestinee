import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects(props) {
    return (
        <div>
            <h2 className="Project-title">Personal Projects</h2>
            <div className="Project-container">
                <div className="Project-box">
                    <Link className="Project-subtitle">TravelBook</Link>
                </div>
                <div className="Project-box">
                    <Link className="Project-subtitle">Yelp</Link>
                </div>
                <div className="Project-box">
                    <Link className="Project-subtitle">Vitamin Water</Link>
                </div>
            </div>
        </div>
    )
}

export default Projects 