export default function CellProtagonists() {
  return (
    <div className="two-column">
      <div className="concept-card">
        <div className="cell-placeholder t-cell">T</div>
        <h3>TCR-transduced T cell</h3>
        <p>
          Healthy donor T cells are transduced to express selected VHIO136-derived
          TCRs.
        </p>
      </div>

      <div className="concept-card">
        <div className="cell-placeholder b-cell">B</div>
        <h3>Immortalised B-cell APC</h3>
        <p>
          VHIO136 B cells act as antigen-presenting target cells for library
          screening and individual validation.
        </p>
      </div>
    </div>
  );
}
