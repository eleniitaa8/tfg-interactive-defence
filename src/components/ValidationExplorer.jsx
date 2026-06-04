import { useState } from "react";
import { validationResults } from "../data/validationResults";

const tcrs = Object.keys(validationResults);

export default function ValidationExplorer() {
  const [selectedTcr, setSelectedTcr] = useState("TCR60");
  const result = validationResults[selectedTcr];

  return (
    <div className="concept-card">
      <div className="button-row">
        {tcrs.map((tcr) => (
          <button
            key={tcr}
            className={selectedTcr === tcr ? "pill active" : "pill"}
            onClick={() => setSelectedTcr(tcr)}
          >
            {tcr}
          </button>
        ))}
      </div>

      <h3>{selectedTcr}</h3>
      <p>{result.summary}</p>

      <div className="result-grid">
        {Object.entries(result.conditions).map(([condition, status]) => (
          <div className={`result-card ${status.replace("/", "-")}`} key={condition}>
            <span>{condition}</span>
            <strong>{status}</strong>
          </div>
        ))}
      </div>

      <div className="readout-row">
        <span>4-1BB/CD137 primary readout</span>
        <span>IFN-γ ELISpot complementary readout</span>
      </div>
    </div>
  );
}
