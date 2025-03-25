import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <MovieCarousel />
      <Footer />
    </div>
  );
}

export default App;
