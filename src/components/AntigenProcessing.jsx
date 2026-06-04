export default function AntigenProcessing() {
  return (
    <div className="concept-card">
      <div className="flow-mini">
        <span>Antigen source</span>
        <span>Tile</span>
        <span>Peptide</span>
        <span>HLA</span>
        <span>TCR</span>
        <span>Activation</span>
      </div>

      <p className="important-note">
        The TCR does not recognise the full tile. The tile is the source
        sequence from which candidate peptides may be generated and presented by
        HLA molecules.
      </p>
    </div>
  );
}
