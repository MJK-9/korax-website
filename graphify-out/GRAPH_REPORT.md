# Graph Report - Korax website  (2026-07-01)

## Corpus Check
- 13 files · ~90,848 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 137 nodes · 136 edges · 12 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `da56caa9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `index.html Page` - 18 edges
2. `Technical SEO Audit — koraxsystems.co.uk` - 14 edges
3. `Full SEO Audit — koraxsystems.co.uk` - 13 edges
4. `GEO (Generative Engine Optimization) Audit — koraxsystems.co.uk` - 10 edges
5. `Findings` - 9 edges
6. `Korax Systems — Build Progress` - 8 edges
7. `Content Quality / E-E-A-T Audit — koraxsystems.co.uk` - 8 edges
8. `Schema / Structured Data Audit — koraxsystems.co.uk` - 8 edges
9. `SXO Findings — koraxsystems.co.uk` - 8 edges
10. `Action Plan — koraxsystems.co.uk` - 6 edges

## Surprising Connections (you probably didn't know these)
- `index.html Page` --references--> `main.js Client Script`  [EXTRACTED]
  index.html → js/main.js
- `index.html Page` --references--> `styles.css Stylesheet`  [EXTRACTED]
  index.html → css/styles.css

## Import Cycles
- None detected.

## Communities (12 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): Accessibility & Performance, Conversion, Core Site — Existing Sections, Foundation, Future Content (Not Yet Exists), Korax Systems — Build Progress, Release Checks (Before Every Push to Main), SEO

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (21): About Section, Asset: korax_square_black_transparent, Asset: korax_circle_transparent_white, Cloudflare Email Decode Script, Contact Section, Contact Form, Site Footer, Formspree Form Backend (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (16): AI Citation Readiness: 62/100, Category Score: 58 / 100, Content Quality / E-E-A-T Audit — koraxsystems.co.uk, E-E-A-T Breakdown, Findings, HIGH — No case studies, portfolio, or outcome evidence anywhere, HIGH — No named founder or "about the person" signal, Keyword / Topic Coverage (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.33
Nodes (4): navLinks, navToggle, observer, yearEl

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (16): AI Search Readiness (GEO) — 64/100, Artifacts, Business type detected, Content Quality (E-E-A-T) — 58/100, Executive Summary, Full SEO Audit — koraxsystems.co.uk, Images — 85/100 (derived), On-Page SEO — 75/100 (derived) (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (15): 1. Detection Results, 2. Validation Results (pass/fail per block), 3. Structural Issue — No Entity Linking via `@id`, 4. Missing Schema Opportunities & Recommended JSON-LD, 5. Content-Accuracy Cross-Check (schema vs. visible page copy), 6. Findings Summary (severity-tagged), A. Replace the 3-object array with a linked, corrected version, B. `sameAs` — only if real profiles exist (+7 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (14): 1. Crawlability — PASS, 2. Indexability — PASS, 3. Security — NEEDS WORK, 4. URL Structure — PASS, 5. Mobile-Friendliness — PASS, 6. Core Web Vitals (source-inspection only — not measured) — LIKELY GOOD, minor flags, 7. Structured Data — PASS (validated), 8. JavaScript Rendering — PASS (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (11): 1. Target Page Classification, 2. SERP Analysis — Target Queries, 3. Page-Type Mismatch — PRIMARY FINDING, 4. User Stories (cite SERP signals), 5. Persona Scoring, 6. Limitations, Cross-Skill Recommendations, Priority Actions (+3 more)

### Community 9 - "Community 9"
Cohesion: 0.18
Nodes (10): 1. AI Crawler Access (robots.txt), 2. llms.txt, 3. Passage-Level Citability, 4. Authority & Brand Signals, 5. Structural Readability & Schema, 6. Technical Accessibility for AI Crawlers, GEO (Generative Engine Optimization) Audit — koraxsystems.co.uk, GEO Score: 64 / 100 (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.29
Nodes (6): Action Plan — koraxsystems.co.uk, Critical (fix immediately — none found), High (fix this week), Low (backlog), Medium (fix within 1 month), Roadmap (not urgent, track for later)

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (5): Phase 1: Critical Fixes (this week), Phase 2: High-Impact Improvements (next 2-3 weeks), Phase 3: Content & Authority (month 2), Phase 4: Monitoring & Iteration (ongoing), Prioritized Action Plan

## Knowledge Gaps
- **98 isolated node(s):** `navToggle`, `navLinks`, `observer`, `yearEl`, `Foundation` (+93 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Full SEO Audit — koraxsystems.co.uk` connect `Community 4` to `Community 11`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `navToggle`, `navLinks`, `observer` to the rest of the system?**
  _98 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._