function Pagination({ page, totalPages, onPrevious, onNext }) {
  return (
    <div className="pagination">
      <button className="btn btn-secondary" onClick={onPrevious} disabled={page <= 1}>
        Anterior
      </button>

      <span>Página {page} de {totalPages}</span>

      <button className="btn btn-secondary" onClick={onNext} disabled={page >= totalPages}>
        Siguiente
      </button>
    </div>
  );
}
