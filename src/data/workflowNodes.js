export const workflowNodes = [
  {
    id: "antigen_processing",
    number: "01",
    title: "Antigen source → peptide–HLA",
    shortTitle: "Antigen processing",
    description:
      "TCRs recognise peptide–HLA complexes, not full antigen tiles. Tiles are source sequences that may generate candidate peptides.",
  },
  {
    id: "cell_protagonists",
    number: "02",
    title: "Cellular protagonists",
    shortTitle: "B cell + T cell",
    description:
      "Immortalised VHIO136 B cells act as antigen-presenting target cells, while TCR-transduced T cells provide defined receptors.",
  },
  {
    id: "shared_library",
    number: "03",
    title: "Shared antigen library",
    shortTitle: "Antigen tiles",
    description:
      "Candidate antigen-source regions are represented as tiles. A tile may encode several possible peptide candidates.",
  },
  {
    id: "upscale_screen",
    number: "04",
    title: "Upscale screening",
    shortTitle: "GTL+ / GTL−",
    description:
      "B cells carrying antigen-library constructs are cocultured with pooled TCR-transduced T cells and sorted by GranToxiLux signal.",
  },
  {
    id: "candidate_filters",
    number: "05",
    title: "Candidate prioritisation",
    shortTitle: "Filters",
    description:
      "Screening data are interpreted through strict, adjacent-tile and relaxed filtering strategies to recover exploratory candidates.",
  },
  {
    id: "validation",
    number: "06",
    title: "Individual validation",
    shortTitle: "TCR × antigen",
    description:
      "Selected candidate RNAs are tested individually in VHIO136 B cells against individual TCR-transduced T-cell populations.",
  },
  {
    id: "final_findings",
    number: "07",
    title: "Main finding",
    shortTitle: "TYR result",
    description:
      "The strongest supported conclusion is candidate-tile-level TYR-associated recognition, especially for TCR60.",
  },
];
