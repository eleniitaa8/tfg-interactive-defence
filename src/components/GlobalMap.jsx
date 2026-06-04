const pathwayNodes = [
  {
    key: "source",
    id: "antigen_processing",
    icon: "Ag",
    label: "Tumour source",
  },
  {
    key: "library",
    id: "shared_library",
    icon: "Lib",
    label: "Shared library",
  },
  {
    key: "apc",
    id: "cell_protagonists",
    icon: "B",
    label: "B-cell APC",
  },
  {
    key: "coculture",
    id: "upscale_screen",
    icon: "Mix",
    label: "Upscale coculture",
  },
  {
    key: "sorting",
    id: "upscale_screen",
    icon: "GTL",
    label: "GTL+ / GTL-",
  },
  {
    key: "filtering",
    id: "candidate_filters",
    icon: "NGS",
    label: "NGS + filters",
  },
  {
    key: "validation",
    id: "validation",
    icon: "Val",
    label: "Validation",
  },
  {
    key: "result",
    id: "final_findings",
    icon: "TYR",
    label: "TYR result",
  },
];

const branchNodes = [
  {
    key: "tcr-source",
    id: "cell_protagonists",
    icon: "TCR",
    label: "TCR T cells",
  },
];

export default function GlobalMap({ nodes, selectedNodeId, onSelectNode }) {
  const getNodeNumber = (nodeId) =>
    nodes.find((node) => node.id === nodeId)?.number;

  return (
    <section className="global-map" aria-label="Interactive TFG workflow map">
      <div className="map-header">
        <p>Scientific workflow</p>
        <span>Tap a node to inspect the corresponding stage.</span>
      </div>

      <div className="map-track">
        {pathwayNodes.map((node, index) => (
          <div className="map-step-wrapper" key={node.key}>
            <button
              className={
                selectedNodeId === node.id ? "map-step active" : "map-step"
              }
              type="button"
              aria-pressed={selectedNodeId === node.id}
              onClick={() => onSelectNode(node.id)}
            >
              <span className="step-icon" aria-hidden="true">
                {node.icon}
              </span>
              <span className="step-number">{getNodeNumber(node.id)}</span>
              <span className="step-title">{node.label}</span>
            </button>

            {index < pathwayNodes.length - 1 && (
              <div className="map-arrow" aria-hidden="true">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="map-branch" aria-label="TCR-transduced T-cell branch">
        <div className="branch-line branch-line-coculture" aria-hidden="true" />
        <div className="branch-line branch-line-validation" aria-hidden="true" />

        {branchNodes.map((node) => (
          <button
            key={node.key}
            className={
              selectedNodeId === node.id
                ? "map-step branch-step active"
                : "map-step branch-step"
            }
            type="button"
            aria-pressed={selectedNodeId === node.id}
            onClick={() => onSelectNode(node.id)}
          >
            <span className="step-icon" aria-hidden="true">
              {node.icon}
            </span>
            <span className="step-number">{getNodeNumber(node.id)}</span>
            <span className="step-title">{node.label}</span>
          </button>
        ))}

        <span className="branch-target branch-target-coculture">Upscale</span>
        <span className="branch-target branch-target-validation">Validation</span>
      </div>
    </section>
  );
}
