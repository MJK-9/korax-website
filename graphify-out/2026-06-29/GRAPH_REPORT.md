# Graph Report - Korax website  (2026-06-29)

## Corpus Check
- 2 files · ~15,584 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 33 nodes · 38 edges · 6 communities (5 shown, 1 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.89)
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
1. `Korax Systems Homepage` - 16 edges
2. `Korax Systems — Build Progress` - 8 edges
3. `Build Progress Checklist` - 5 edges
4. `JSON-LD Organization Schema Block` - 3 edges
5. `Korax Systems Square Logo — Black Geometric Raven on Transparent Background (PNG)` - 3 edges
6. `LLMs.txt AI-Readable Site Description` - 2 edges
7. `Robots.txt Crawler Directives` - 2 edges
8. `Site Stylesheet` - 2 edges
9. `Site JavaScript` - 2 edges
10. `XML Sitemap` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Korax Systems Homepage` --references--> `Korax Systems Circular Logo — White Outline on Transparent Background (PNG)`  [EXTRACTED]
  index.html → assets/korax_circle_transparent_white.png
- `Korax Systems Homepage` --references--> `Korax Systems Circular Logo — White Outline on Transparent Background (WebP)`  [EXTRACTED]
  index.html → assets/korax_circle_transparent_white.webp
- `Korax Systems Homepage` --references--> `Korax Systems Square Logo — Black Geometric Raven on Transparent Background (WebP)`  [EXTRACTED]
  index.html → assets/korax_square_black_transparent.webp
- `Korax Systems Homepage` --references--> `Site JavaScript`  [EXTRACTED]
  index.html → js/main.js
- `Korax Systems Homepage` --references--> `Korax Systems Square Logo — Black Geometric Raven on Transparent Background (PNG)`  [EXTRACTED]
  index.html → assets/korax_square_black_transparent.png

## Import Cycles
- None detected.

## Communities (6 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): Accessibility & Performance, Conversion, Core Site — Existing Sections, Foundation, Future Content (Not Yet Exists), Korax Systems — Build Progress, Release Checks (Before Every Push to Main), SEO

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (6): Cloudflare Email Decode Script, Google Analytics gtag.js (G-VLLV9VKGM9), Google Fonts CDN (Fraunces, IBM Plex Mono, Inter), Korax Systems Homepage, JSON-LD ProfessionalService Schema Block, JSON-LD WebSite Schema Block

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (6): Formspree Contact Form Endpoint (xdawepge), Site JavaScript, Build Progress Checklist, Robots.txt Crawler Directives, XML Sitemap, Site Stylesheet

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (4): navLinks, navToggle, observer, yearEl

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): Korax Systems Square Logo — Black Geometric Raven on Transparent Background (PNG), Korax Systems Square Logo — Black Geometric Raven on Transparent Background (WebP), LLMs.txt AI-Readable Site Description, JSON-LD Organization Schema Block

## Knowledge Gaps
- **16 isolated node(s):** `navToggle`, `navLinks`, `observer`, `yearEl`, `Foundation` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Korax Systems Homepage` connect `Community 1` to `Community 2`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.244) - this node is a cross-community bridge._
- **Why does `Build Progress Checklist` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Korax Systems Homepage` (e.g. with `LLMs.txt AI-Readable Site Description` and `Robots.txt Crawler Directives`) actually correct?**
  _`Korax Systems Homepage` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `navToggle`, `navLinks`, `observer` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._