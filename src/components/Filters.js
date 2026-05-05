function Filters({ filters, onChange, onSearch, onReset }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Buscar por nombre</label>
        <input
          id="name"
          type="text"
          value={filters.name}
          placeholder="Ejemplo: Rick, Morty, Summer..."
          onChange={(event) => onChange({ ...filters, name: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Estado</label>
        <select
          id="status"
          value={filters.status}
          onChange={(event) => onChange({ ...filters, status: event.target.value })}
        >
          <option value="">Todos</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="species">Especie</label>
        <select
          id="species"
          value={filters.species}
          onChange={(event) => onChange({ ...filters, species: event.target.value })}
        >
          <option value="">Todas</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
          <option value="humanoid">Humanoid</option>
          <option value="animal">Animal</option>
        </select>
      </div>

      <div className="buttons-group">
        <button className="btn btn-primary" type="submit">Buscar</button>
        <button className="btn btn-secondary" type="button" onClick={onReset}>Limpiar</button>
      </div>
    </form>
  );
}
