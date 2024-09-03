import React from 'react';
import { Helmet } from 'react-helmet-async';

const Donate: React.FC = () => {
  return (
    <div className="donate-page container fade-in">
      <Helmet>
        <title>Donate - TEACcH</title>
        <meta name="description" content="Support TEACcH's mission by donating. Your goodwill could be the bridge between potential and legacy." />
      </Helmet>
      
      <h1>Donate to TEACcH</h1>
      
      <section className="donate-intro">
        <h2>Your Goodwill could be the bridge between Potential and Legacy</h2>
        <p>
          Support a dream or one of our projects. We are deeply aware of the impact we're making, 
          and we know that it takes a community to nurture a dream. Every project creates a ripple effect, 
          touching lives and transforming generations. Your donation can give life to a vision and make a lasting difference.
        </p>
      </section>
      
      <section className="donate-cta">
        <button className="button">Donate Now</button>
      </section>
      
      <section className="donate-impact">
        <h3>The Impact of Your Donation</h3>
        <ul>
          <li>Support innovative social projects</li>
          <li>Empower future social innovators</li>
          <li>Contribute to sustainable community development</li>
          <li>Help bridge gaps in the social innovation ecosystem</li>
        </ul>
      </section>
      
      <section className="donate-options">
        <h3>Ways to Donate</h3>
        <div className="donate-methods">
          <div className="donate-method">
            <h4>One-time Donation</h4>
            <p>Make a single contribution to support our current projects.</p>
            <button className="button">Donate Once</button>
          </div>
          <div className="donate-method">
            <h4>Monthly Giving</h4>
            <p>Become a sustaining supporter with a recurring monthly donation.</p>
            <button className="button">Donate Monthly</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;