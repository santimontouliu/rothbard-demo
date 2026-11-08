                                                       
                           
                
                        
             
               
  
const disclaimer =
  "Synthetic demonstration for discussion only. Not legal, tax, immigration or investment advice. No scenario is a recommendation. Qualified advisers must validate facts, applicable rules and effective dates before any action.";
const cases = [
  {
    id: "northstar",
    name: "Northstar Software",
    sector: "SaaS · Founder-led",
    narrative:
      "A Canadian founder exploring a US contracting entity and a potential Panama operating base.",
    home: true,
    transactions: true,
    team: "Canada"        ,
  },
  {
    id: "atlas",
    name: "Atlas Design Partners",
    sector: "Services · Distributed team",
    narrative:
      "A fictional design consultancy exploring how a Panama operating base could fit a distributed team.",
    home: false,
    transactions: true,
    team: "Distributed"        ,
  },
  {
    id: "meridian",
    name: "Meridian Family Ventures",
    sector: "Family enterprise · Governance",
    narrative:
      "A fictional Canadian family enterprise comparing governance arrangements while retaining Canadian connections.",
    home: true,
    transactions: false,
    team: "Canada"        ,
  },
];
const scenarios = [
  {
    id: "current",
    title: "Current structure",
    subtitle: "Establish the baseline",
    jurisdictions: ["Canada"],
    entities: ["Canadian company"],
    question: "Review current residence and management facts",
  },
  {
    id: "crossborder",
    title: "Cross-border operations",
    subtitle: "Explore a new operating footprint",
    jurisdictions: ["Canada", "United States", "Panama"],
    entities: ["US entity", "Panama operating company"],
    question: "Review residence, classification and operational substance",
  },
  {
    id: "holding",
    title: "Alternative ownership",
    subtitle: "Explore a governance layer",
    jurisdictions: ["Canada", "United States"],
    entities: ["Canadian holding company", "US entity"],
    question: "Review ownership, control and related-party arrangements",
  },
];
                                                  
const sources = [
  {
    id: "cra",
    title: "Leaving Canada (emigrants)",
    publisher: "Canada Revenue Agency",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/leaving-canada-emigrants.html",
    edition: "Live guidance; edition not established",
    retrievedAt: "2026-11-08",
    effectiveFrom: null,
    effectiveTo: null,
    status: "Professional review required",
    limitation:
      "General reference for residency/departure questions; does not determine the status of a fictional client.",
  },
  {
    id: "irs",
    title: "Instructions for Form 5472",
    publisher: "Internal Revenue Service",
    url: "https://www.irs.gov/instructions/i5472",
    edition: "December 2024 edition surfaced at retrieval",
    retrievedAt: "2026-11-08",
    effectiveFrom: null,
    effectiveTo: null,
    status: "Professional review required",
    limitation:
      "Reference for entity and related-party reporting questions. Applicability and current edition must be confirmed.",
  },
];
function validDate(value        ) {
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  );
}
function questions(s          , a             ) {
  const result = [
    {
      id: "ownership",
      title: "Confirm ownership & control",
      detail: `Validate the assumed ${s.entities.join(" → ")} arrangement with the client.`,
      sourceId: undefined                      ,
    },
    {
      id: "operations",
      title: "Map actual operations",
      detail: `Where are decisions, people and services located? Team assumption: ${a.team}.`,
      sourceId: undefined                      ,
    },
  ];
  if (a.home)
    result.push({
      id: "ties",
      title: "Assess Canadian residential ties",
      detail:
        "A retained home is a fact for review, not a residency determination.",
      sourceId: "cra",
    });
  if (s.jurisdictions.includes("United States") && a.transactions)
    result.push({
      id: "reporting",
      title: "Review US related-party reporting",
      detail:
        "Confirm entity classification, ownership and transaction facts before assessing any filing obligation.",
      sourceId: "irs",
    });
  if (s.jurisdictions.includes("Panama") || a.team === "Panama")
    result.push({
      id: "panama",
      title: "Validate Panama operating requirements",
      detail:
        "No Panama legal source is validated in this demo. Local counsel review is required.",
      sourceId: undefined,
    });
  return result;
}
function toggleScenario(ids          , id        ) {
  return ids.includes(id)
    ? ids.length > 2
      ? ids.filter((x) => x !== id)
      : ids
    : [...ids, id];
}
function coverage(asOf        ) {
  return validDate(asOf)
    ? `Effective-date coverage unconfirmed for ${asOf}. Retrieval dates do not establish legal validity.`
    : "Enter a valid planning date to continue.";
}
function brief(
  client                        ,
  a             ,
  ids          ,
  brand        ,
) {
  if (!validDate(a.asOf)) throw new Error("Invalid planning date");
  return `# ${brand} — Strategy discussion brief\n\nSYNTHETIC DATA · ${client.name}\nPlanning date: ${a.asOf}\n\n${disclaimer}\n\n## Assumptions\nRetained Canadian home: ${a.home}\nUS related-party transactions: ${a.transactions}\nTeam: ${a.team}\n\n${scenarios
    .filter((s) => ids.includes(s.id))
    .map(
      (s) =>
        `## ${s.title}\nJurisdictions: ${s.jurisdictions.join(", ")}\nAssumed entities: ${s.entities.join(", ")}\n${questions(
          s,
          a,
        )
          .map((q) => `- ${q.title}: ${q.detail}`)
          .join("\n")}`,
    )
    .join(
      "\n\n",
    )}\n\n## Evidence and limitations\n${coverage(a.asOf)}\n${sources.map((s) => `- ${s.publisher}: ${s.title}\n  ${s.url}\n  Edition: ${s.edition}; retrieved ${s.retrievedAt}; effective bounds unknown; ${s.status}. ${s.limitation}`).join("\n")}\n- Panama: missing validated source; local review required.\n- Structures, counts and growth data: synthetic design assumptions, not legal evidence.\n`;
}
