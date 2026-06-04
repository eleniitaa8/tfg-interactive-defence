export const candidateFilters = {
  strict: {
    label: "Strict synonymous filter",
    explanation:
      "No collapsed antigen tile passed the strict requirement that both synonymous versions should pass the sequence-level enrichment filter.",
    candidates: [],
  },
  adjacent: {
    label: "Adjacent-tile support",
    explanation:
      "Adjacent-tile support recovered exploratory candidate regions, including TYR_21_26 and TYR_22_26.",
    candidates: ["TYR_21_26", "TYR_22_26", "MET_95_120", "MET_96_120"],
  },
  relaxed: {
    label: "Relaxed synonymous rule",
    explanation:
      "The relaxed rule recovered additional lower-confidence candidates for exploratory validation.",
    candidates: [
      "TYR_21_26",
      "TYR_22_26",
      "MMP14_25_29",
      "SFMBT1_19_43",
      "TSPYL1_20_21",
    ],
  },
  finalPanel: {
    label: "Final sequence-verified validation panel",
    explanation:
      "The condition initially associated with MET_95_120 was reannotated as TYR_22_26.b. Confirmed MET_95_120 was not tested.",
    candidates: [
      "TYR_21_26.a",
      "TYR_22_26.a",
      "TYR_22_26.b",
      "MET_96_120.a",
      "MMP14_25_29.a",
      "SFMBT1_19_43.a",
      "TSPYL1_20_21.a",
    ],
  },
};
