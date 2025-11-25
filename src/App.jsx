import { useState } from "react";
import movies from "./data/movies.json";
import "./App.css";
import portada from "./assets/banner.jpg";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

function App() {
  const [rating, setRating] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    return movie.vote_average >= rating * 2 - 1;
  });
  const hideNavbar = selectedMovie !== null;

  return (
    <div>
      <div className="navbar">
        {!hideNavbar && (
          <nav className="w-full text-white flex justify-between items-center h-10 px-3">
            <button className="text-sm">Home</button>
            <button className="text-sm">Buscar</button>
          </nav>
        )}
      </div>

      <div className="portada-container">
        <img src={portada} alt="Portada" className="portada" />
        <h2 className="subtitulo">Tus películas favoritas</h2>
        <h1 className="titulo">HACKFLIX</h1>
      </div>

      <div className="star-filter">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "estrella activa" : "estrella"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="grid">
        {filteredMovies.map((movie) => (
          <div
            className="card"
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster_path} alt="" />
            <p>
              <strong>Descripción:</strong> {selectedMovie.overview}
            </p>
            <p>
              <strong>Fecha:</strong> {selectedMovie.release_date}
            </p>
            <p>
              <strong>Puntaje:</strong> ⭐ {selectedMovie.vote_average}
            </p>

            <button className="cerrar" onClick={() => setSelectedMovie(null)}>
              Cerrar
            </button>
          </div>
          <Router path="/buscar" element={<Buscar />} />
        </div>
      )}
    </div>
  );
}

export default App;
