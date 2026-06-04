export default function SharedLibrary() {
  return (
    <div className="concept-card">
      <h3>Tile logic</h3>

      <div className="protein-line">
        <div className="tile tile-a">TYR_21_26</div>
        <div className="tile tile-b">TYR_22_26</div>
      </div>

      <p>
        Adjacent TYR tiles can share candidate peptide windows, but may also
        contain tile-specific peptide candidates.
      </p>

      <div className="peptide-row">
        <span>8mer</span>
        <span>9mer</span>
        <span>10mer</span>
        <span>11mer</span>
      </div>
    </div>
  );
}
