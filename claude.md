# Korax Systems — Claude Code Instructions
<!-- Generated: persona-generator v4 -->

## Project Overview
Korax Systems is a solo software development business serving UK small businesses. koraxsystems.co.uk is a static single-page marketing site that presents the company, its services, and its process, and converts visitors into enquiries via a Formspree contact form. There is no backend, no CMS, no login — the entire site is index.html, css/styles.css, and js/main.js.

## Global Rules
This project follows the Prompt Architect workflow defined in the global `~/.claude/CLAUDE.md`. All session workflow, task triage, agent invocation, handoff protocol, cleanup protocol, and "when done" behaviour are governed by that file.

## Team
Subagents are in `.claude/agents/`. Invoke with @mention. Claude Code invokes relevant agents automatically — you can always call them directly too.

| @mention | Role | Invoke when |
|---|---|---|
| @frontend | Frontend | Any change to index.html, css/styles.css, or js/main.js; new sections; layout or breakpoint changes; font loading |
| @seo | SEO | Any change to meta tags, JSON-LD schema, heading hierarchy, alt text, sitemap.xml, or running claude-seo/ audits |
| @conversion | Conversion | Any change to the contact form, CTA text or placement, section order, hero messaging, or service dropdown |
| @content-creator | Content Creator | Any copy written or rewritten — headlines, service descriptions, process steps, about text, button labels, future case studies or blog posts |
| @qa | QA | The relevant agent for any change touching site files; mandatory before every git push to main |
| @project-manager | Project Manager | Start every session; before any multi-step task; when a locked decision changes |

## Locked Decisions
These decisions are final. Do not change without explicit user instruction. If any decision changes, flag every file that needs updating before continuing.

```
App name: Korax Systems — koraxsystems.co.uk
Platform: Web (desktop, tablet, mobile — no native iOS, Android).
Responsive breakpoints at 768px, 800px, 500px.
App type: Static browser website — plain HTML/CSS/JS, no framework,
no PWA, no build step.
Stack: HTML / CSS / JS (vanilla)
       Google Fonts — Fraunces, IBM Plex Mono, Inter (CDN)
       Formspree — form backend (formspree.io/f/xdawepge)
       GitHub Pages — hosting, auto-deploys on push to main
       Cloudflare — DNS only, not proxying (no CDN/security headers active; no injected scripts)
       Python — SEO toolchain in claude-seo/ (DataForSEO, GSC, GA4, Moz)
Offline: No. Requires internet — fonts on CDN, form posts to Formspree.
Hardware: None.
Data: No local storage on the live site. Form submissions handled by
      Formspree. SEO baselines/audit reports stored locally in
      claude-seo/ (developer tooling only, not part of the live site).
Menu/modifiers: Nav — 4 anchor links: Services, Process, Why Us,
                Get in Touch. (Pricing and FAQ sections exist but
                are not in the nav.)
                Page sections in DOM order: Hero, Services, Pricing,
                Process, Why Us, Contact, FAQ (10 questions), About.
                Pricing — published fixed-price tiers:
                  The Quick Win — £1,500–£2,500, 6–8 weeks
                  The Workflow Bridge — £2,500–£4,000, 10–14 weeks
                  Beyond £5,000 — open-ended, tailored proposal
                  The Korax Guarantee — fixed price, no paid
                  discovery, no scope-creep billing, no mandatory
                  retainers
                Contact form (Formspree POST): fname*, company,
                email*, phone*, manual_task*, hours_wasted* (1–40),
                budget* radio (under-2000 / 2000-4000 / 4000-5000 /
                over-5000 / not-sure), service select (Desktop
                Automation Tool / Workflow / Task Automation /
                Ongoing Support & Maintenance / Not sure yet, let's
                talk), message*. Asterisk = required.
                No catalogue, no product listings.
Devices: Unlimited — static CDN. No session state, no server-side processing.
Updates: Git push to main → GitHub Pages auto-deploys. Workflow already live.
Constraints: Zero running cost (GitHub Pages free tier, Formspree free tier).
             Solo developer — Matthew. No CMS; content edits require HTML changes.
             UK-only scope (schema: areaServed GB, copy UK-targeted).
             No testimonials on the site yet — add real client testimonials
             when available.
Knowledge graph: Graphify — active via Cursor skill and .cursor/rules/graphify.mdc.
                 Cadence and query rules per global CLAUDE.md.
```

## Project Structure

```
.claude/
  agents/
    frontend.md
    seo.md
    conversion.md
    content-creator.md
    qa.md
    project-manager.md

.cursor/
  rules/
    no-bloat.mdc — code quality rules, always applied
    graphify.mdc — Graphify knowledge graph rule, always applied
  cleanup-prompt-template.md
  handoff.md — max 3 entries; Cursor prunes oldest after adding

graphify-out/ — knowledge graph output, commit this folder
  graph.html — visual map, open in any browser
  GRAPH_REPORT.md — architecture summary and key connections
  graph.json — queryable graph used by Claude Code and Cursor

claude-seo/ — Python SEO monitoring toolchain (dev only, not deployed)

css/
  styles.css — all styles; CSS custom properties defined here

js/
  main.js — all client-side behaviour

index.html — entire site; single page
sitemap.xml — keep current after any structural change
PROGRESS.md — persistent feature checklist, never truncated
learn.md — staging area for Project Structure corrections
```

## Commands
No build step. No package manager. Plain static site.

- **Deploy:** `git push origin main` — GitHub Pages deploys automatically
- **Local preview:** Open `index.html` directly in browser, or use any static file server (e.g. `python -m http.server 8080`)
- **SEO audit:** Run Python scripts in `claude-seo/` per that directory's own instructions
- **Validate HTML:** Use validator.w3.org or a local HTML validator on index.html
- **Graphify:** `/graphify .` (first run) — `graphify update .` (after any task that changes files)

## Progress Tracking
PROGRESS.md in the project root is the persistent feature checklist. Cursor ticks items off as features are completed. Never truncated. Check it at the start of every session.

learn.md is the staging area for corrections to the Project Structure section above. It is written to ONLY when an agent searched in the wrong place because this documentation was inaccurate or missing — and only after the same friction recurs; a single misread does not warrant an entry. Cursor writes entries; subagents never do. Corrections are folded back into claude.md via the "done" workflow, then removed. The file trends toward empty.
