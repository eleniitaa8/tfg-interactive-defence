export default function UpscaleScreen() {
  return (
    <div className="concept-card">
      <div className="screening-flow">
        <span>B-cell antigen library</span>
        <span>+</span>
        <span>Pooled TCR T cells</span>
        <span>→</span>
        <span>GranToxiLux signal</span>
        <span>→</span>
        <span>GTL+ / GTL− sorting</span>
        <span>→</span>
        <span>NGS candidate hits</span>
      </div>

      <div className="sort-boxes">
        <div className="sort-box positive">GTL+</div>
        <div className="sort-box negative">GTL−</div>
      </div>
    </div>
  );
}
