import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bridging Gaps in Social Innovation</h1>
            <p className="hero-subtitle">Where Ideas Become Impactful Realities</p>
            <Link to="/programs" className="btn btn-primary">Explore Our Programs</Link>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Social Innovation" />
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>About TEACcH</h2>
            <p>The Erioluwa Adeyinka Co-Creation Hub (TEACcH) is a social innovation hub dedicated to training and equipping talents to address gaps in the social innovation ecosystem. By nurturing skilled professionals, TEACcH ensures that emerging challenges are met with effective, specialized solutions.</p>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
          <div className="about-image">
            <img src={heroImage} alt="About TEACcH" />
          </div>
        </div>
      </section>

      <section className="featured-program">
        <div className="container">
          <h2>Featured Program: The Education Development Circle (TED Circle)</h2>
          <p>TED Circle is a cohort-based mentorship program designed to equip social innovators with the essential knowledge and advanced skills needed to create sustainable solutions in the social innovation space.</p>
          <Link to="/programs" className="btn btn-primary">View All Programs</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;