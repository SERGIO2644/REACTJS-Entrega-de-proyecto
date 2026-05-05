function CharacterCard({ character, isFavorite, onToggleFavorite, onShowDetail }) {
  return (
    <article className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="card-body">
        <h3>{character.name}</h3>

        <div className="info-row">
          <span>Estado</span>
          <strong className={`status ${character.status.toLowerCase()}`}>{character.status}</strong>
        </div>

        <div className="info-row">
          <span>Especie</span>
          <strong>{character.species}</strong>
        </div>

        <div className="info-row">
          <span>Género</span>
          <strong>{character.gender}</strong>
        </div>

        <div className="card-actions">
          <button className="btn btn-secondary" onClick={() => onShowDetail(character)}>Detalle</button>
          <button className="btn btn-primary" onClick={() => onToggleFavorite(character)}>
            {isFavorite ? "Quitar" : "Favorito"}
          </button>
        </div>
      </div>
    </article>
  );
}
