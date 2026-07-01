# Graph Report - Korax website  (2026-06-29)

## Corpus Check
- 3 files · ~15,625 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 37 nodes · 43 edges · 7 communities (6 shown, 1 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `562123fa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]

## God Nodes (most connected - your core abstractions)
1. `index.html Page` - 18 edges
2. `Korax Systems — Build Progress` - 8 edges
3. `Site Navigation` - 5 edges
4. `Contact Section` - 4 edges
5. `JSON-LD Organization Schema` - 4 edges
6. `Hero Section` - 3 edges
7. `Services Section` - 3 edges
8. `How It Works Section` - 2 edges
9. `Why Korax Section` - 2 edges
10. `Contact Form` - 2 edges

## Surprising Connections (you probably didn't know these)
- `index.html Page` --references--> `main.js Client Script`  [EXTRACTED]
  index.html → js/main.js
- `index.html Page` --references--> `styles.css Stylesheet`  [EXTRACTED]
  index.html → css/styles.css

## Import Cycles
- None detected.

## Communities (7 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): Accessibility & Performance, Conversion, Core Site — Existing Sections, Foundation, Future Content (Not Yet Exists), Korax Systems — Build Progress, Release Checks (Before Every Push to Main), SEO

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (8): Contact Section, Contact Form, Formspree Form Backend, Hero Section, How It Works Section, Site Navigation, Services Section, Why Korax Section

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (7): About Section, Cloudflare Email Decode Script, Google Fonts CDN, Google Analytics (gtag), index.html Page, main.js Client Script, styles.css Stylesheet

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (4): navLinks, navToggle, observer, yearEl

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): Asset: korax_square_black_transparent, JSON-LD Organization Schema, JSON-LD ProfessionalService Schema, JSON-LD WebSite Schema

## Knowledge Gaps
- **18 isolated node(s):** `navToggle`, `navLinks`, `observer`, `yearEl`, `Foundation` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `index.html Page` connect `Community 2` to `Community 1`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **Why does `Contact Section` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `JSON-LD Organization Schema` (e.g. with `JSON-LD ProfessionalService Schema` and `JSON-LD WebSite Schema`) actually correct?**
  _`JSON-LD Organization Schema` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `navToggle`, `navLinks`, `observer` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._