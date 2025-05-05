// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <section className="home-page">
      <div className="home-page-content">
        <img src="/assets/Magnifying-glass.svg/" alt="cartoon person with magnifying glass" className='home-page-image' 
        />
        <p className="home-page-text">There is no feedback yet.</p>
        <Link to='/add-feedback' className='add-feedback-btn'>
          + Add Feedback 
        </Link>
      </div>
    </section>
  );
}
export default Home;