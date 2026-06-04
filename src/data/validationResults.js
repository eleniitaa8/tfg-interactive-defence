export const validationResults = {
  TCR60: {
    summary:
      "Clearest and most consistent candidate-tile-level TYR-associated activation.",
    conditions: {
      "TYR_21_26.a": "strong",
      "TYR_22_26.a": "positive",
      "TYR_22_26.b": "positive",
      "MET_96_120.a": "negative",
      "Other candidates": "negative",
      "VHIO136 TCL": "not central",
    },
  },
  TCR572: {
    summary:
      "TYR-associated activation detected, with stronger activation against the VHIO136 tumour cell line.",
    conditions: {
      "TYR_21_26.a": "positive",
      "TYR_22_26.a": "positive",
      "TYR_22_26.b": "positive",
      "MET_96_120.a": "negative",
      "Other candidates": "negative",
      "VHIO136 TCL": "strong",
    },
  },
  TCR31: {
    summary:
      "More restricted pattern, with strongest response to TYR_21_26.a and weaker responses to TYR_22_26-derived conditions.",
    conditions: {
      "TYR_21_26.a": "strongest",
      "TYR_22_26.a": "weak/partial",
      "TYR_22_26.b": "weak/partial",
      "MET_96_120.a": "negative",
      "Other candidates": "negative",
      "VHIO136 TCL": "not central",
    },
  },
};
