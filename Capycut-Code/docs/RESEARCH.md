# Video Editing as a Productivity Bottleneck

**Empirical proof, automation imperatives, and pitch strategy for CapyCut**
*Prepared for Teens Hack Houston (Triple H) 2026 — theme: "A more efficient way to live."*

---

## How to read this document

Every number here carries a label saying how strong the evidence behind it is. Judges reward
honesty about limits more than they reward confident numbers, and a claim that survives
cross-examination is worth more than one that sounds impressive.

| Label | Meaning |
|---|---|
| **Verified** | Read from the primary source by us, on the date below. Quote and link given. |
| **Reported** | Stated by a named secondary source we could not independently confirm. |
| **Rule of thumb** | Industry heuristic with no peer-reviewed measurement behind it. Say so out loud. |
| **Vendor claim** | Comes from a company selling the automation being measured. Directionally useful, not neutral. |

Two figures in the common CapyCut pitch needed correction during this research. They are flagged
in place, in [Corrections](#corrections-to-earlier-claims), so nobody repeats them to a judge.

---

## The claim, in one paragraph

Video post-production is one of the heaviest time, skill, and cost bottlenecks in digital
communication. Business use of video is at an all-time high — **91% of businesses use video**, and
**59% produce it entirely in-house** — so the people doing the editing are increasingly *not*
editors. Meanwhile traditional timeline work costs roughly **30 minutes to 2 hours of manual labour
per finished minute**, or **8 to 12 hours to deliver a batch of 3 to 5 short-form clips**. That
labour is largely mechanical: **81.7% of professional film and television editors** name repetitive
"work around the edit" as the single task they would most want automated. Removing that mechanical
layer — while keeping a human in charge of story and taste — is worth roughly **80% of editing
time**, and that is the gap CapyCut is built to close.

---

## 1. Quantifying the time sink

### 1.1 The "80% of time is editing" claim

**Status: rule of thumb.** The familiar 20/80 split — 20% of effort to capture, 80% to log, assemble,
pace, clean audio, colour, and revise — is cited constantly in creator and agency commentary. No
peer-reviewed time-and-motion study establishes a universal 80/20 split across genres.

This matters for the pitch. If a judge asks "where does 80% come from?", the honest answer is: *it is
a practitioner heuristic, and three independent lines of 2025–2026 evidence show the same magnitude
from three different directions.* Then give them those three lines. That is a stronger answer than a
fake citation.

### 1.2 Evidence line 1 — what professional editors say they waste

**Reported, not verified.** Avid's 2026 survey of members of the American Cinema Editors (ACE) is
the most credible single data point available, because the respondents are elite Hollywood and
television editors with no incentive to exaggerate. Avid's pages were unreachable when this was
written, so these figures are attributed to the survey and should not be embellished. See §9.

- **81.7%** chose one of five repetitive "around the edit" tasks — audio cleanup, transcription and
  dialogue search, finding specific shots, metadata tagging, project organisation — as the single
  capability that would most improve their work.
- **75.8%** named compressing non-creative hours to reclaim time for storytelling as the best use of
  AI.

The lesson is not that editors dislike editing. It is that **the craft is not the bottleneck; the
clerical work around the craft is.**

### 1.3 Evidence line 2 — manual timeline vs. agentic loop

**Status: vendor claim.** Loopdesk's 2026 analysis of 250 creator and podcast channels compares
manual editing against an agentic workflow:

| | Manual timeline | Agentic workflow |
|---|---|---|
| Output | 3–5 short clips | 10–15 short clips |
| Time | 8–12 hours | 1–2 hours |
| Per clip | 1.6–4 hours | 4–12 minutes |

That is **3–5× more output in about one-fifth of the time**. The most useful finding for CapyCut is
the middle result: teams that merely bolt AI features onto a legacy manual workflow save only **28–30%**,
while teams that rebuild around an agentic *review-and-direct* loop capture the full **~80%**. The
architecture is the win, not the AI feature.

This comes from an AI editing vendor, so treat the magnitude as directional. Two independent
organisations report similar figures: South Korean broadcaster **KBS** reported cutting production
time by "about 80%" with its in-house VVERTIGO multi-camera system, and vendor **Peersuma** claims
an 80% editing-time reduction.

### 1.4 Evidence line 3 — agency turnaround and per-minute cost

**Reported.** Agency capacity benchmarks compiled by Increditors (September 2026):

| Deliverable | Hands-on editing | Total turnaround |
|---|---|---|
| 1-minute standard video, clean footage | 2–6 hours | 24–48 hours |
| 1-minute complex video (motion, colour, audio) | 8–12 hours | Multiple business days |
| 3–8 minute corporate interview | 30 min–2 hrs per finished minute | 7–14 business days |

**Reported.** A 2025 Cutjamm survey of 201 freelance editors reports **30 minutes to 2 hours of
editing per finished minute** — matching field videographer estimates of 30–60 minutes per raw minute.

**Reported.** Creator self-reports on forums commonly cite 14–16 hours for a 5–8 minute video and
24–50 hours for a 30-minute documentary.

### 1.5 The consolidated table

| Format / workflow | Hands-on editing | Turnaround | Primary bottleneck | Evidence |
|---|---|---|---|---|
| Short-form batch, manual (3–5 clips) | 8–12 hrs | 72 hrs–5 days | Culling, vertical reframing, captioning | Vendor claim |
| Short-form batch, agentic (10–15 clips) | 1–2 hrs | Same day | Human review, direction | Vendor claim |
| 1-min standard video | 2–6 hrs | 24–48 hrs | Cuts, pacing, titles, levels | Reported |
| 1-min complex video | 8–12 hrs | Days | Motion graphics, multi-aspect, noise | Reported |
| Corporate interview (3–8 min) | 30 min–2 hrs per finished min | 7–14 days | Selects, multicam sync, approvals | Reported |
| Long-form YouTube (10–30 min, solo) | 14–50 hrs | Days–weeks | Reviewing raw footage, B-roll search | Reported |
| Animated explainer (2–5 min) | Multi-week | 7–14 days to first draft | Building every scene by hand | Reported |

---

## 2. Where the hours actually go

Editing time scales with **raw footage volume, cut density, and communication friction** — not with
finished runtime. Four mechanical subtasks consume most of the labour before creative judgement
begins.

**Footage culling and selects.** Filtering 10 hours of raw footage to a 2-minute highlight means
scrubbing hours of takes before a single narrative cut. On agency shoots with 45+ minutes of raw
media, assembling a preliminary selects reel alone adds about half a business day.

**Audio sync and multi-platform adaptation.** Multicam interviews with external recorders add 4–8
hours of pure sync work before editorial assembly starts. Exporting transitions, lower thirds, and
four aspect ratios for four social channels adds another 4–8 hours per asset.

**Subtitling and the language tax.** Multilingual or code-switching creators spend **40% more time**
in post, mostly correcting automated captions line by line, because single-language speech models
break when speakers mix languages. *(Reported — Loopdesk.)*

**Revision loops.** Unclear briefs and fragmented timestamp feedback stretch a corporate testimonial
from 3–5 days for a rough cut to 7–14 business days for sign-off.

The human cost is real. Solo YouTubers report 50–70+ hour weeks and 12-hour editing days; veteran
commercial editors describe clients replacing 6–12 week broadcast campaigns with daily 30-second
edits at falling rates.

---

## 3. Why not everyone can edit

Video editing is not merely slow. It is **structurally inaccessible** to non-specialists.

### 3.1 The skill wall

| Tool | Time to basic competence | Source |
|---|---|---|
| Premiere Pro, full-time bootcamp | ~1 week for core navigation | Reported |
| Premiere Pro, part-time | ~3 months for cutting, colour, audio | Reported |
| After Effects, client-ready basics | 60–90 focused hours | Reported |
| After Effects, job-ready | 200–400 hours (6–12 months part-time) | Reported |
| After Effects, senior fluency | 1,500+ hours (2–4 years) | Reported |

The structural problem is that **motion graphics is a different paradigm from editing.** Premiere is
track-based; After Effects is layer-based compositing with keyframes, compositions, and expressions.
Learning one does not teach the other. In CapyCut both are the same thing — a web page with a
`frame(t)` function — so a title and an edit are authored in one language.

### 3.2 The money wall

**Verified** from the U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics,
**May 2025** estimates (via CareerOneStop, U.S. Department of Labor):

| Film and video editors, United States | Value |
|---|---|
| Median annual wage | **$75,420** |
| Median hourly wage | **$36.26** |
| 10th percentile hourly | $19.37 |
| 90th percentile hourly | $71.42 |
| 10th / 90th percentile annual | $40,280 / $148,550 |

Marketplace rates, **Reported**:

| Tier | Hourly | Short-form clip | Long-form (10+ min) | Corporate |
|---|---|---|---|---|
| Entry / marketplace | ~$10 | $5–$25 | $50–$150 | $400–$1,000 |
| Mid freelancer | ~$40 | $20–$80 | $300–$600 | $1,000–$2,000 |
| Senior / agency | $100–$250 | $80–$1,000+ | $400–$1,500+ | $1,500–$15,000+ |

Friction surcharges stack on top: manual captions $2–$5/min, an extra revision round $50–$200+, rush
delivery +25% to +100%.

### 3.3 The hardware wall

**Reported.** 4K camera files reach roughly **1 GB per minute** (60 GB per hour). Adobe's own
technical specifications and 2026 workstation guides converge on **32 GB RAM as the practical 4K
floor** (64 GB recommended; 16 GB forces disk swapping), an 8+ core CPU, a GPU with 8–16 GB VRAM,
and 1–2 TB+ of NVMe storage for OS, media, and scratch.

CapyCut removes the *duplication* half of this problem: media is **linked in place**, not copied into
project trees, so a 40 GB shoot is not 40 GB in the library plus 40 GB in the project cache.

---

## 4. Demand is saturated; throughput is not

**Verified** from Wyzowl's *State of Video Marketing 2026* (12th edition; 266 respondents, fieldwork
late 2025), read from the survey's
[own dataset](https://wyzowl.com/video-marketing-statistics/data.csv):

| Finding | Value |
|---|---|
| Businesses that use video | **91%** (all-time high) |
| Marketers who call video important to strategy | **93%** |
| Produce video entirely in-house | **59%** |
| Mix in-house and external | 32% |
| Fully outsourced | 10% |
| Consumers convinced to buy by a video | **85%** |
| Consumers who say video quality affects brand trust | **89%** |
| Marketers reporting good ROI from video | **82%** (down from 93% in 2025) |

Among the 9% who do not use video, the barriers are operational, not strategic: **24% say it is too
expensive, 19% lack time, 10% do not know where to start.** Every one of those three is a tooling
problem.

### 4.1 The quality penalty — the most important finding here

ROI satisfaction fell from **93% to 82%** in a single year, as output volume rose. Loopdesk's
250-channel study shows the mechanism: channels posting **3–5 automated clips per day** collapsed to
**0.01% per-video engagement**, while creators posting **1–3 well-crafted videos per week** sustained
**6–8%**.

This is the argument that separates CapyCut from one-shot AI video tools. **Automation only creates
real productivity if it removes mechanical drudgery while keeping human judgement in charge of story
and polish.** More output with less craft is not efficiency; it is churn. CapyCut is explicitly
designed around *review-and-direct*, not *generate-and-ship*.

**Reported, and dated:** Kaltura's *State of Video in Education* found 75% of educators consider
video more effective than text and 86% want more video in hybrid learning. That report is from 2022
and no equivalent 2026 benchmark was available — present it as background, not as current data.

---

## 5. Why existing AI video tools fail

**Reported.** 63% of video marketers and 77.5% of ACE editors already experiment with AI tools. The
tools still fail iterative work for four structural reasons.

### 5.1 One-shot generation prevents surgical revision

NotebookLM's video generator and diffusion models such as Seedance produce a video in one pass with
no post-generation editing. If one spoken line is wrong, or one slide mismatches the narration, the
creator regenerates the entire video. Diffusion generators also enforce tight clip limits — often
8–15 seconds, extendable to 60 — with fragile character-consistency workarounds.

**This is the core failure CapyCut fixes.** A CapyCut film is a folder of editable source, so a wrong
line is a text edit, not a re-roll.

### 5.2 Text-only prompting breaks on spatial and temporal precision

Language models do not inherently understand narrative pacing or visual subtext. "Make the intro
punchier" leaves the agent guessing across dozens of layers and timecodes. Worse, when a prompt-box
AI regenerates a scene it routinely wipes out prior manual tweaks.

CapyCut answers with two mechanisms: **point-at-anything targeting** (click a timecode, drag a range,
select a subtitle cue, circle a region of the frame — numbered marks remove the guesswork) and
**protected overrides** (hand edits are stored in the clip's `overrides`, so the agent can rewrite the
page and your changes still apply).

### 5.3 Flattened exports create lock-in

Professional turnover depends on open interchange — FCPXML, Premiere XML, CMX 3600 EDL, AAF, and
OpenTimelineIO. Tools that export only a flattened MP4 trap the project. **67.5% of ACE editors say
AI must live inside the tools they already use**, rising above 80% among frequent AI users, and
**86.7% insist AI is valuable only when enhancing, not replacing, creative intent.**

### 5.4 Cloud-only media triggers privacy resistance

**49.2% of ACE editors cite ethical use, copyright, or media security as their #1 barrier** to AI
adoption — far ahead of quality concerns. CapyCut keeps raw footage on local disk and shares only
lightweight frames or transcripts with the agent.

### 5.5 What HCI research says

Peer-reviewed work from 2024–2026 reaches the same conclusion from the academic side: **LAVE**
(Wang et al., 2024) pairs an LLM plan-and-execute agent with direct timeline trimming to preserve
agency; **VideoDiff** (ACM CHI 2025) studies human–AI co-creation with alternatives; **CineAssist**
(2026) maps communicative intent to editable shot parameters; **Precise Duration Control** (ACM UIST
2026) addresses temporal precision. All four require shared, inspectable timeline state and
bidirectional editing — not an isolated prompt box.

---

## 6. How CapyCut's architecture maps to each bottleneck

| Bottleneck | Manual NLE / one-shot AI | With CapyCut |
|---|---|---|
| **Rough cut and assembly** | 8–12 hrs for 3–5 clips; hours scrubbing and building selects | Describe the cut in plain language; the agent reads your local project and builds a live multi-track `film.html` in minutes while you watch and steer |
| **Requesting revisions** | 3–4 re-prompts on ambiguous chatbots, or 7–14 day email approval loops | Point at anything — timecode, range, subtitle cue, circled region — then speak. Numbered marks remove spatial and temporal guesswork |
| **Protecting hand edits** | Re-running a prompt overwrites your manual text, colour, or layout | Hand edits save into clip-level `overrides`; the agent rewrites the underlying page and your tweaks persist |
| **Motion graphics and titles** | 60–90 hrs for client-ready After Effects basics; 200–400 hrs for job-ready | Shots are HTML, CSS, SVG, Canvas, WebGL, three.js or GSAP driven by deterministic `frame(t)`; agents generate bespoke graphics natively |
| **Colour and preview accuracy** | Switch apps, discover gamma shifts after a slow render | Scopes, wheels, curves, camera log support and `.cube` LUTs, with preview that deterministically matches the export |
| **Storage and organisation** | ~1 GB/min; copying 40 GB trees exhausts NVMe and breaks links | Shared library links local folders in place, relocates moved files, keeps footage private |
| **Finishing and collaboration** | Flattened MP4 traps the project | Export video, or hand the structured timeline to Final Cut Pro, Premiere Pro, or DaVinci Resolve |
| **Extensibility** | Rigid SaaS menus and closed plugin silos | Open folder-based plugin standard; CapyCut's own four editors are plugins built the same way |

---

## 7. The theme: "A more efficient way to live"

The official theme, confirmed by organiser Steven Xu in the Discord, asks for a project that **saves
time, reduces friction, or eliminates frustration in everyday life.** It explicitly does not ask for
an enterprise tool. It asks you to take a task that makes people want to pull their hair out and make
it faster, easier, or more accessible.

CapyCut answers this at the level of a **single person with a laptop**, which is the level the theme
is pitched at:

| Theme word | What it means | How CapyCut delivers |
|---|---|---|
| **Saves time** | Less clock time for the same result | ~80% of editing time removed by shifting from manual timeline work to review-and-direct |
| **Reduces friction** | Fewer steps, fewer tools, fewer handoffs | One folder, one format, one agent; no render-farm round trip, no app switching for colour |
| **Eliminates frustration** | Removes the part that makes people quit | No 60–400 hour learning curve before your first title; no wiped-out work when the AI regenerates |
| **Everyday life** | Not enterprise, not Hollywood | Runs on a normal laptop; 4K files stay on your disk; the desktop app ships with a built-in agent |

The sharpest way to say it in one line: **CapyCut makes the computer do the editing, and the person
do the directing.** That is a more efficient way to live with video, not a more powerful way to
suffer through it.

---

## 8. Pitch strategy for Teens Hack Houston 2026

### 8.1 The rubric, and where to spend effort

| Criterion | Weight | What judges are actually asking |
|---|---|---|
| **Functionality / Build Quality** | **30%** | Is it a real MVP? Is it put together, or a mockup? |
| **Value & Impact** | **25%** | Does it narrow onto one real problem, and fit "productivity"? |
| **User Experience** | **20%** | Is it intuitive? Visual design, accessibility, polish. |
| **Creativity / Originality** | **15%** | Has this been done before? |
| **Presentation Quality** | **10%** | Is the video clear and well made? |
| **Secret: Capybara** | 0% | Free shout-out for hiding a capybara. |

**65% of the score is Functionality plus Value & Impact.** That is where the demo time goes. Note
also that Presentation is only 10% — a beautiful video of a broken build loses to a plain video of a
working one. Record the demo of the thing actually working.

Constraints: video pitch is **mandatory**, target **3–8 minutes**, hard cap 10, with crisp audio.

### 8.2 Timecoded blueprint

| Time | Segment | What you say | What is on screen |
|---|---|---|---|
| 0:00–0:45 | **The problem** (Value 25%) | "91% of businesses use video, and 59% make it in-house. But editing costs 8–12 hours per batch of short clips — and 60 to 400 hours just to learn the motion tools. Meanwhile one-shot AI hands you an uneditable MP4." | Kinetic stat cards; a dense NLE cockpit beside a failed prompt; a running timer |
| 0:45–1:30 | **The idea** (Creativity 15%) | "What if a film were a code repo? CapyCut stores the timeline as `film.html` and every shot as a deterministic `frame(t)` page — so any coding agent becomes a live co-editor." | CapyCut beside its `film.html`; linked local folder, zero media duplication |
| 1:30–3:00 | **Live co-editing** (Functionality 30%) | "The agent plans the cut, writes the shot code, and checks its own frames instead of guessing." | Run the trailer prompt; show the 3-track, 11-clip timeline building live |
| 3:00–4:15 | **Point, and protected edits** (UX 20%) | "Vague prompts fail. Here you point first, then speak — and your edits survive the next AI pass." | Circle a region to create mark ①; retype a title; run an agent revision; show the override still applied |
| 4:15–5:10 | **Canvas, colour, handoff** (Functionality + secret) | "Plan before pixels. Grade deterministically. And you are never locked in." | Pan Canvas — *with a capybara sticker on the board*; toggle a `.cube` LUT; open the Premiere/Final Cut/Resolve export |
| 5:10–6:00 | **Payoff and close** (Presentation 10%) | "Roughly 80% of the mechanical work gone, and the craft still yours. That is a more efficient way to live." | Repo card, install command, quick capybara wave |

### 8.3 The five things that win or lose this

1. **Show a real build.** 30% of the score is "is this an MVP". Run the software live, don't narrate
   screenshots. If something is flaky, record it working beforehand and cut to the recording.
2. **Say the theme sentence out loud, once, near the end.** Judges score against a rubric; make it
   effortless for them to tick "adheres to the productivity theme."
3. **Do not claim "80% is peer-reviewed."** Say "practitioner rule of thumb, corroborated by three
   independent lines of evidence" — then name them. That is more impressive, and it is true.
4. **Show the override surviving an agent pass.** This is the single most differentiating 15 seconds
   in the demo, because every competing AI video tool fails it.
5. **Hide the capybara, but keep it small.** A sticker on the Canvas board during the walkthrough
   earns the shout-out without derailing the pitch.

---

## 9. Corrections to earlier claims

Research changed three things that were previously written down. Do not repeat the old versions.

| Earlier claim | Status | Correct version |
|---|---|---|
| Median editor wage **$36.26/hr, $75,420/yr, May 2025** | **Confirmed** | Verified exactly, including 10th percentile $19.37 and 90th $71.42 |
| "**91%** of businesses use video, **59%** in-house" | **Confirmed** | Verified against Wyzowl 2026 primary source |
| "**84%** of consumers want more brand video" | **Unverified** | Wyzowl 2026 reports **96%** have watched an explainer and **85%** were convinced to buy. The 84% figure could not be located; use 85% or omit |
| "**82%** of global internet traffic is video" | **Unverified** | Widely attributed to Cisco, but the current Cisco forecast no longer publishes this. Present as "industry syntheses citing Cisco", or omit |
| "**81%** of short-form is watched vertically" | **Unverified** | Could not confirm a primary source. Omit or soften |
| "Video drives **17–18.6 hours** of weekly viewing per person" | **Unverified** | Could not confirm. Omit or soften |
| Avid/ACE figures (81.7%, 75.8%, 67.5%, 86.7%, 49.2%) | **Reported** | Page was unreachable at time of writing; figures are internally consistent and specific. Attribute to "Avid's 2026 ACE survey" and do not embellish |
| "**80%** of production time goes into editing" | **Rule of thumb** | Never cite as a measurement. Present the three corroborating evidence lines instead |
| `https://capycut.dev` as the product URL | **Does not resolve** | No DNS record. Do not print it on a slide or in the video until it is live |
| Desktop download link | **No releases on this repo** | This repository has zero published releases. Do not link a releases page that has no builds |

---

## 10. Sources

Primary sources read and verified for this document:

- **U.S. Bureau of Labor Statistics**, Occupational Employment and Wage Statistics, May 2025 —
  Film and Video Editors (SOC 27-4032), via the CareerOneStop occupation profile:
  <https://www.careeronestop.org/Toolkit/Wages/find-salary.aspx?keyword=27-4032.00>
  (the BLS page itself, <https://www.bls.gov/ooh/media-and-communication/film-and-video-editors.htm>,
  blocks automated requests).
- **Wyzowl**, *State of Video Marketing 2026* (12th edition), 266 respondents, fieldwork late 2025:
  <https://wyzowl.com/video-marketing-statistics/>. Every Wyzowl figure in this document was read
  from the survey's own dataset, <https://wyzowl.com/video-marketing-statistics/data.csv>, which
  gives each measure by year. That dataset is what confirms the ROI decline — `video-roi` is 93% in
  2025 and 82% in 2026 — rather than any summary page.

Secondary and reported sources:

- **Avid**, 2026 survey of American Cinema Editors members.
- **Loopdesk**, 2026 analysis of 250 creator and podcast channels (AI editing vendor — directional).
- **Increditors**, agency editing turnaround benchmarks, September 2026.
- **Cutjamm**, survey of 201 freelance editors, 2025; freelance rate data 2026.
- **Upwork**, video editor hourly rates.
- **Vidico**, HammadJ, Pixflow, Capture — freelance and agency pricing guides, 2026.
- **KBS**, VVERTIGO AI multi-camera production system report.
- **Peersuma** (Tezeract), automated editing vendor claims.
- **Kaltura**, *State of Video in Education* (2022 — dated, use as background only).
- **Mordor Intelligence**, video editing market report, 2026.
- **Adobe**, Premiere Pro official system requirements; 2026 4K workstation build guides.
- **ChatCut**, AI video editing product analysis, 2026.
- **X-Pilot**, NotebookLM video limitations for course creators, 2026.
- **Morphic**, Seedance 2.0 guide, 2026.
- **FCP Cafe**, post-production interchange format reference.
- Academic: **LAVE** (Wang et al., 2024, arXiv); **VideoDiff** (ACM CHI 2025); **CineAssist** (2026);
  **Precise Duration Control** (ACM UIST 2026); **Map2Video**; arXiv survey on what editors want
  from AI video tools.

---

<p align="center"><sub>Research compiled for Teens Hack Houston 2026. Figures verified 20 November 2026.<br>
Corrections and better sources are welcome — open an issue.</sub></p>
