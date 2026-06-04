import { useState } from "react";
import { candidateFilters } from "../data/candidateFilters";

const filterOrder = ["strict", "adjacent", "relaxed", "finalPanel"];

export default function FilterSlider() {
  const [activeFilter, setActiveFilter] = useState("strict");
  const filter = candidateFilters[activeFilter];

  return (
    <div className="concept-card">
      <div className="button-row">
        {filterOrder.map((key) => (
          <button
            key={key}
            className={activeFilter === key ? "pill active" : "pill"}
            onClick={() => setActiveFilter(key)}
          >
            {candidateFilters[key].label}
          </button>
        ))}
      </div>

      <p>{filter.explanation}</p>

      <div className="candidate-cloud">
        {filter.candidates.length === 0 ? (
          <span className="empty-state">No collapsed candidate tile retained</span>
        ) : (
          filter.candidates.map((candidate) => (
            <span className="candidate-chip" key={candidate}>
              {candidate}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
