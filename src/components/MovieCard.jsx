function MovieCard({ movie, openModal }) {
  return (
    <div
      onClick={() => openModal(movie)}
      style={{
        width: "180px",
        cursor: "pointer",
      }}
    >
      <img
        src={movie.poster_path}
        alt={movie.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
        }}
      />

      <p style={{ fontWeight: "bold", marginTop: "6px" }}>{movie.title}</p>
    </div>
  );
}

export default MovieCard;
