import React from 'react';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <h2 className="hero-title">Your One-Stop Destination for Entertainment</h2>
        <p className="hero-description">Book tickets for movies, events, and more!</p>
        <Button variant="light" size="lg" className="hero-button">
          Explore Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
