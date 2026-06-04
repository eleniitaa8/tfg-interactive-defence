import { useState } from "react";
import { workflowNodes } from "./data/workflowNodes";
import GlobalMap from "./components/GlobalMap";
import DetailPanel from "./components/DetailPanel";
import AntigenProcessing from "./components/AntigenProcessing";
import CellProtagonists from "./components/CellProtagonists";
import SharedLibrary from "./components/SharedLibrary";
import UpscaleScreen from "./components/UpscaleScreen";
import FilterSlider from "./components/FilterSlider";
import ValidationExplorer from "./components/ValidationExplorer";
import FinalFindings from "./components/FinalFindings";

const componentMap = {
  antigen_processing: AntigenProcessing,
  cell_protagonists: CellProtagonists,
  shared_library: SharedLibrary,
  upscale_screen: UpscaleScreen,
  candidate_filters: FilterSlider,
  validation: ValidationExplorer,
  final_findings: FinalFindings,
};

export default function App() {
  const [selectedNodeId, setSelectedNodeId] = useState("antigen_processing");

  const selectedNode = workflowNodes.find((node) => node.id === selectedNodeId);
  const ActiveComponent = componentMap[selectedNodeId] || AntigenProcessing;

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">TFG Interactive Defence</p>
          <h1>VHIO136 antigen-recognition map</h1>
          <p className="subtitle">
            From antigen-source tiles to Upscale screening, individual validation,
            and candidate-tile-level TYR-associated recognition.
          </p>
        </div>
      </section>

      <section className="workspace">
        <GlobalMap
          nodes={workflowNodes}
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
        />

        <DetailPanel node={selectedNode}>
          <ActiveComponent />
        </DetailPanel>
      </section>
    </main>
  );
}
