import React from "react";
import { Carousel } from "react-bootstrap";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";
import movie5 from "../images/movie5.jpg";
import movie6 from "../images/movie6.jpg";
import movie7 from "../images/movie7.jpg";
import movie8 from "../images/movie8.jpeg";
//import "./MovieCarousel.css";

const movies = [
  { id: 1, title: "The Archer", genre: "Action | Adventure", image: movie1, time: "7:30 PM", price: "₹450" },
  { id: 2, title: "Titanic", genre: "Drama | Romance", image: movie2, time: "9:00 PM", price: "₹350" },
  { id: 3, title: "Kungfu Panda 3", genre: "Comedy | Family", image: movie3, time: "6:00 PM", price: "₹400" },
  { id: 4, title: "Invaded", genre: "Sci-Fi | Thriller", image: movie4, time: "8:00 PM", price: "₹500" },
  { id: 5, title: "The Hobbit", genre: "Fantasy | Adventure", image: movie5, time: "5:30 PM", price: "₹300" },
  { id: 6, title: "The Ruins", genre: "Horror | Mystery", image: movie6, time: "10:00 PM", price: "₹550" },
  { id: 7, title: "Sin City", genre: "Thriller | Crime", image: movie7, time: "4:00 PM", price: "₹200" },
  { id: 8, title: "The Incredibles", genre: "Animation | Family", image: movie8, time: "3:30 PM", price: "₹150" },
];

const MovieCarousel = () => {
  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += 4) {
    groupedMovies.push(movies.slice(i, i + 4));
  }

  return (
    <section className="py-5">
      <div className="container movie-carousel-container">
        <h3 className="mb-4 text-center">Now Showing</h3>
        <Carousel interval={null}>
          {groupedMovies.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {group.map((movie) => (
                  <div key={movie.id} className="movie-card text-center">
                    <div className="movie-card-content">
                      <img
                        className="card-img"
                        src={movie.image}
                        alt={movie.title}
                      />
                      <div className="movie-details">
                        <h5 className="movie-title">{movie.title}</h5>
                        <p className="movie-genre">{movie.genre}</p>
                        <p className="movie-time"><strong>Time:</strong> {movie.time}</p>
                        <p className="movie-price"><strong>Price:</strong> {movie.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MovieCarousel;
