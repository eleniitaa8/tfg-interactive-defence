export default function GlobalMap({ nodes, selectedNodeId, onSelectNode }) {
  return (
    <section className="global-map" aria-label="Interactive TFG workflow map">
      <div className="map-track">
        {nodes.map((node, index) => (
          <div className="map-step-wrapper" key={node.id}>
            <button
              className={
                selectedNodeId === node.id ? "map-step active" : "map-step"
              }
              onClick={() => onSelectNode(node.id)}
            >
              <span className="step-number">{node.number}</span>
              <span className="step-title">{node.shortTitle}</span>
            </button>

            {index < nodes.length - 1 && <div className="map-arrow">→</div>}
          </div>
        ))}
      </div>

      <div className="map-note">
        Touch a step to explore the project workflow.
      </div>
    </section>
  );
}
