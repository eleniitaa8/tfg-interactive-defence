export default function FinalFindings() {
  return (
    <div className="final-grid">
      <div className="finding-card">
        <span>01</span>
        <h3>TYR</h3>
        <p>Main functionally supported antigen-source gene.</p>
      </div>

      <div className="finding-card">
        <span>02</span>
        <h3>TCR60</h3>
        <p>Strongest candidate-level evidence for TYR-associated recognition.</p>
      </div>

      <div className="finding-card">
        <span>03</span>
        <h3>Still unresolved</h3>
        <p>Minimal peptide epitope, HLA restriction and endogenous contribution.</p>
      </div>

      <div className="concept-card full-width">
        <h3>NetMHCpan interpretation</h3>
        <p>
          Predicted TYR-derived peptide–HLA candidates help prioritise possible
          epitopes, but remain exploratory and require experimental validation.
        </p>
      </div>
    </div>
  );
}
