import React from 'react';
import { Carousel } from 'react-bootstrap';
import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';
import movie7 from '../images/movie7.jpg';
import movie8 from '../images/movie8.jpeg';

const movies = [
  { id: 1, title: "Movie 1", genre: "Action | Adventure", image: movie1 },
  { id: 2, title: "Movie 2", genre: "Drama | Romance", image: movie2 },
  { id: 3, title: "Movie 3", genre: "Comedy | Family", image: movie3 },
  { id: 4, title: "Movie 4", genre: "Sci-Fi | Thriller", image: movie4 },
  { id: 5, title: "Movie 5", genre: "Fantasy | Adventure", image: movie5 },
  { id: 6, title: "Movie 6", genre: "Horror | Mystery", image: movie6 },
  { id: 7, title: "Movie 7", genre: "Thriller | Crime", image: movie7 },
  { id: 8, title: "Movie 8", genre: "Animation | Family", image: movie8 },
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
                  <div key={movie.id} className="text-center">
                    <img
                      className="card-img"
                      src={movie.image}
                      alt={movie.title}
                    />
                    <h5 className="mt-2">{movie.title}</h5>
                    <p>{movie.genre}</p>
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
