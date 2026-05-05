function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="logo" href="index.html">React Rick and Morty Explorer</a>
        <ul className="nav-links">
          <li><a href="#personajes">Personajes</a></li>
          <li><a href="#favoritos">Favoritos</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tag">Proyecto ReactJS con API REST</p>
          <h1>Explora personajes de Rick and Morty</h1>
          <p>
            Aplicación creada con React, componentes reutilizables, consumo de API, búsqueda, filtros,
            detalle de personaje, paginación y favoritos persistentes con LocalStorage.
          </p>
          <a className="btn btn-primary" href="#personajes">Empezar</a>
        </div>
      </section>
    </header>
  );
}
