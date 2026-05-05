function CharacterModal({ character, onClose }) {
  const [episodes, setEpisodes] = React.useState([]);
  const [loadingEpisodes, setLoadingEpisodes] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!character) return;

    setLoadingEpisodes(true);
    setError("");

    getEpisodes(character.episode)
      .then((data) => setEpisodes(data))
      .catch(() => setError("No se pudieron cargar los episodios."))
      .finally(() => setLoadingEpisodes(false));
  }, [character]);

  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!character) return null;

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar detalle">×</button>

        <div className="modal-layout">
          <img src={character.image} alt={character.name} />

          <div>
            <p className="tag">Detalle del personaje</p>
            <h2>{character.name}</h2>

            <div className="info-row">
              <span>Estado</span>
              <strong className={`status ${character.status.toLowerCase()}`}>{character.status}</strong>
            </div>

            <div className="info-row">
              <span>Especie</span>
              <strong>{character.species}</strong>
            </div>

            <div className="info-row">
              <span>Tipo</span>
              <strong>{character.type || "No especificado"}</strong>
            </div>

            <div className="info-row">
              <span>Género</span>
              <strong>{character.gender}</strong>
            </div>

            <div className="info-row">
              <span>Origen</span>
              <strong>{character.origin.name}</strong>
            </div>

            <div className="info-row">
              <span>Localización</span>
              <strong>{character.location.name}</strong>
            </div>

            <h3>Episodios donde aparece</h3>

            <div className="episodes-list">
              {loadingEpisodes && <span className="episode-pill">Cargando episodios...</span>}
              {error && <span className="episode-pill">{error}</span>}

              {!loadingEpisodes && !error && episodes.map((episode) => (
                <span className="episode-pill" key={episode.id}>
                  {episode.episode} - {episode.name}
                </span>
              ))}

              {!loadingEpisodes && !error && character.episode.length > 8 && (
                <span className="episode-pill">+{character.episode.length - 8} episodios más</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
