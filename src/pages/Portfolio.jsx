import React from 'react';
import placeholderImage from '../assets/placeholder.jpg';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <h1>Our Portfolio</h1>
        <div className="project-grid">
          {/* Add projects here, using data from text.txt */}
          <div className="project-item">
            <img src={placeholderImage} alt="Project 1" />
            <h3>Project Title</h3>
            <p>Brief project description</p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;