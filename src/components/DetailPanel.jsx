export default function DetailPanel({ node, children }) {
  return (
    <aside className="detail-panel">
      <div className="panel-header">
        <p className="panel-number">{node?.number}</p>
        <h2>{node?.title}</h2>
        <p>{node?.description}</p>
      </div>

      <div className="panel-content">{children}</div>
    </aside>
  );
}
