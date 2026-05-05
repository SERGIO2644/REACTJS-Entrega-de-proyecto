function Favorites({ favorites, isFavorite, onToggleFavorite, onShowDetail }) {
  return (
    <section className="section" id="favoritos">
      <div className="section-title">
        <p className="tag">LocalStorage</p>
        <h2>Personajes favoritos</h2>
        <p>Los favoritos permanecen guardados aunque recargues la página.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty">Todavía no has guardado ningún personaje favorito.</div>
      ) : (
        <div className="cards-grid">
          {favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite(character.id)}
              onToggleFavorite={onToggleFavorite}
              onShowDetail={onShowDetail}
            />
          ))}
        </div>
      )}
    </section>
  );
}
