function Modal({ movie, close }) {
  if (!movie) return null;

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={close}
    >
      <div 
        style={{
          background: "white",
          padding: "20px",
          width: "400px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{movie.title}</h2>
        <p><strong>Fecha:</strong> {movie.release_date}</p>
        <p><strong>Resumen:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>

        <button onClick={close} style={{ marginTop: "10px" }}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
