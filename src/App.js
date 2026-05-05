function App() {
  const [filters, setFilters] = React.useState({
    name: "",
    status: "",
    species: ""
  });

  const [characters, setCharacters] = React.useState([]);
  const [favorites, setFavorites] = useLocalStorage("reactRickMortyFavorites", []);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [message, setMessage] = React.useState("Cargando personajes...");
  const [loading, setLoading] = React.useState(false);

  function loadCharacters(newPage = 1) {
    setLoading(true);
    setMessage("Cargando personajes...");

    getCharacters({
      page: newPage,
      name: filters.name,
      status: filters.status,
      species: filters.species
    })
      .then((data) => {
        setCharacters(data.results);
        setPage(newPage);
        setTotalPages(data.info.pages);
        setMessage(`Se han encontrado ${data.info.count} personajes.`);
      })
      .catch((error) => {
        setCharacters([]);
        setPage(1);
        setTotalPages(1);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }

  React.useEffect(() => {
    loadCharacters(1);
  }, []);

  function resetFilters() {
    setFilters({
      name: "",
      status: "",
      species: ""
    });

    setLoading(true);
    setMessage("Cargando personajes...");

    getCharacters({
      page: 1,
      name: "",
      status: "",
      species: ""
    })
      .then((data) => {
        setCharacters(data.results);
        setPage(1);
        setTotalPages(data.info.pages);
        setMessage(`Se han encontrado ${data.info.count} personajes.`);
      })
      .catch((error) => {
        setCharacters([]);
        setMessage(error.message);
      })
      .finally(() => setLoading(false));
  }

  function isFavorite(characterId) {
    return favorites.some((character) => character.id === characterId);
  }

  function toggleFavorite(character) {
    if (isFavorite(character.id)) {
      setFavorites(favorites.filter((item) => item.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  }

  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="section" id="personajes">
          <div className="section-title">
            <p className="tag">Búsqueda y filtrado</p>
            <h2>Listado de personajes</h2>
          </div>

          <Filters
            filters={filters}
            onChange={setFilters}
            onSearch={() => loadCharacters(1)}
            onReset={resetFilters}
          />

          <div className="state-message">
            {loading ? "Cargando personajes..." : message}
          </div>

          <div className="cards-grid">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={isFavorite(character.id)}
                onToggleFavorite={toggleFavorite}
                onShowDetail={setSelectedCharacter}
              />
            ))}
          </div>

          {characters.length > 0 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPrevious={() => loadCharacters(page - 1)}
              onNext={() => loadCharacters(page + 1)}
            />
          )}
        </section>

        <Favorites
          favorites={favorites}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onShowDetail={setSelectedCharacter}
        />
      </main>

      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />

      <footer className="footer">
        <p>Proyecto ReactJS creado con componentes, API REST, estado, efectos y LocalStorage.</p>
      </footer>
    </div>
  );
}
