# Slice DLS 2.0 — Design System

> Working title from the Figma cover: **slice.paw · DLS (Design Language System) 2.0**
> Maintained by Ajas A. and Ritik Raj (Slice design team).

## What is Slice?

Slice is an Indian consumer fintech — credit card, UPI, monies/deposits, rewards (Sparks), and social "slice in 3" payments. The DLS 2.0 is the mobile product's design language: tokens, components, patterns, copy rules, illustrations.

The north-star descriptor, from the internal design brief:
> Quiet, confident, content-first fintech. References are Cash App and Wise — not dashboards, not SaaS.

The interface is the stage; the number, the stash, the action is the performance. Subtractive design — the default state of any element is "not there."

---

## Sources

- **Figma — DLS 2.0** (mounted virtual FS): pages incl. `Overview`, `Colors`, `Typography`, `Spacing`, `Radius`, `Elevation`, all components (`Button`, `App-bar`, `Bottom-nav`, `Cards`, `Input-fields`, `Chip`, `List-items`, …), `L0`/`L1` screens, `Transaction`, `Illustrations`, `Iconography`, `Principles`, `Rules/slice-writing-guidelines`.
- **Internal design brief**: `uploads/design.md` — "How Slice thinks." The decision-making principles below are distilled from it.
- **Font file**: `uploads/Rubik-VariableFont_wght.ttf` (copied to `fonts/`).
- Figma MCP file key (per brief): `ncGqxiE6wUOqgOURwHx6Hp`; L0 root node `885:19528`.

---

## Index (manifest of this folder)

```
README.md                     ← you are here
SKILL.md                      ← invocation manifest for Claude Skills
colors_and_type.css           ← tokens: colors, type, spacing, radii, elevation
fonts/
  Rubik-VariableFont_wght.ttf
assets/
  icons/                      ← SVG icons lifted from Figma
  illustrations/              ← PNG gradient blobs (signature illustration style)
preview/                      ← HTML cards shown in the Design System tab
ui_kits/
  mobile-app/                 ← React/JSX recreation of the Slice app
slides/                       ← (not applicable — no deck template provided)
uploads/                      ← original attachments (design.md, Rubik ttf)
```

---

## Content fundamentals

**Voice is lowercase, casual, direct, second-person.** The brand literally writes `slice` lowercase. Product names follow suit: `slice in 3`, `slice CC`, `spark`.

Distilled from `/Rules/slice-writing-guidelines` in the Figma:

- **Tense.** Present tense and present perfect continuous. "Fetching your investments" — not "Your investments are being fetched." Don't narrate, do.
- **Clarity.** "There are four attempts left." Never "you may have remaining attempts." Say the number.
- **Conciseness.** Kill every word that isn't carrying information. No "please," no "kindly," no "we apologize for the inconvenience."
- **Person.** "You" for the user. "We" only when the company is acting (support, policy). Never "the user."
- **Casing.** Sentence case everywhere — buttons, titles, chips. `Send money`, not `Send Money`. The word `slice` is always lowercase mid-sentence.
- **Em dashes.** Avoid. Use commas, periods, or short sentences.
- **Numerals.** Always digits, never spelled out. Indian comma format for rupees: `₹2,50,000`. Currency symbol tight, no space: `₹299`. "@%" for percentages: `5% cashback`.
- **Emoji.** Not in UI chrome. Occasionally in illustrations or marketing copy, never in system strings.
- **Product terminology** (use exactly these forms):
  - `slice CC` / `slice credit card` · `slice in 3` · `spark` (reward) · `monies` (deposit balance) · `remaining monies` · `reward rate` · `total earned`
- **Examples of good copy** (pulled from Figma Principles):
  - "There are four attempts left" — not "You have some attempts remaining"
  - "Fetching your investments · We're using your mobile number to gather the details. Thank you for your patience." — clear status, concrete detail, kind
  - "Enter the registered email and try again" — direct, one action
  - "Changes saved" — present perfect, no filler

**Vibe:** grown-up, un-gamified, financially literate. No exclamation marks, no "🎉", no "Oops!". Trust is built by being quietly correct.

---

## Visual foundations

### Color
- **Brand:** Valentino magenta `#D30AD7` (`--brand`). Used **only** for primary actions and active states. Never decorative. A 10-step ramp exists (50–900) but 500 is the only one used in product; the rest live for states (pressed `600`, subtle bg `rgba(211,10,215,0.08)`).
- **Neutrals:** Slate scale (`--slate-30` … `--slate-950`) replaces any hint of pure black/gray. Text is `rgba` black, never `#000` — `text-1` = `rgba(0,0,0,0.9)`, `text-2` = `0.7`, `text-3` = `0.5`.
- **Semantic:** Green `#00A63E` (positive), Red `#CE1D26` (negative), Orange `#FF8100` (warning), Blue `#2B6ACF` (info). Each ramp has 10 steps. State is **never** communicated through color alone — always paired with an icon or label.
- **Backgrounds:** White is default. `#F6F9FC` (bg-secondary) for grouped/nested sections. `#F0F4F7` (bg-tertiary) is the L0 canvas.
- **Avatars:** rotation of 6 decorative pairs — do not invent a 7th.
- **Dark mode** exists but is secondary — design light-first.

### Type
- **Rubik only.** 400 (Regular) and 500 (Medium). No other weights, no other fonts in the product. IBM Plex Mono appears only in Figma annotations / token tables — not in shipped UI.
- **Max 4 text roles per screen.** If you need a 5th, the hierarchy is broken.
- **Scale in use:** Display 48/500 (hero numbers) · H1 32 · H2 24 · H3 20 · body 16/400 · label 14/500 · caption 12/400 · micro 10/400 uppercase.
- Letter-spacing tightens on display (`-0.02em`), opens on micro caps (`+0.04em`).

### Spacing
- Padding scale uses a named ladder: `2XS(4) · XS(8) · S(12) · M(16) · L(24) · XL(32) · 2XL(40) · 3XL(48) · 4XL(64)`. Never invent a 20 or a 36.

### Radii
- `4 · 8 · 12 · 16 · 24 · 999`. Default card is `16`. Hero image tile / creation-flow anchor is `24`. Pills are `999`. Never > `24` except pills.

### Elevation
- Shadows are **barely visible**. The signature card shadow is `0 2px 32px rgba(0,0,0,0.05)` — wide, soft, low-opacity. No shadow deeper than 4px blur in UI chrome. Borders are `rgba(0,0,0,0.05)`.
- Nav "pods" use `0 4px 16px rgba(0,0,0,0.06)` because they float over a tinted canvas.

### Backgrounds & imagery
- **Solid white canvas** is the default. No gradient backgrounds anywhere except the bottom-nav fade and the Payments-pod brand fill.
- **Illustrations are noisy gradient blobs** — soft organic shapes, airbrushed, with visible film-grain noise. See `assets/illustrations/`. Colors are brand-adjacent (magenta/pink + warm yellow/orange, or green+blue). They sit on white, never cropped into cards.
- **No stock photography, no decorative padding.** An image must identify something specific (a stash, a partner).
- **Partner logos** are square with the merchant brand color (Nykaa, Nike, Starbucks, Flipkart, Homecenter appear in examples).

### Motion
- Functional, never decorative. 200ms default, 300ms for sheets. Emphasized ease-out. No bounce, no spring, no particles. If motion isn't communicating a state change, skip it.

### States
- **Hover** (web): not a primary Slice concern (mobile-first) — use a subtle opacity shift or `--bg-secondary` fill.
- **Press:** brand button → `--brand-pressed` (`#A008A3`). Cards → slight scale (`0.98`) + `--slate-30` tint. Never color shift alone.
- **Disabled:** text → `--text-disabled`, bg → `--slate-30`. Never just lower opacity.
- **Focus:** 2px `--brand` outline with 2px offset (accessibility; not visually loud).

### Borders & cards
- 1px `var(--border-subtle)` — barely visible. Cards share one surface spec (`white · 1px subtle · radius-l · shadow-card`) but **structure changes by state** — a stash-with-goal card ≠ a stash-without-goal card. Never mix structures.

### Transparency & blur
- Sheets and toasts use a solid white with a soft shadow, not backdrop blur.
- Transparency is used for text (`rgba`-based text colors) and barely-visible borders — not for "frosted glass" panels.

### Layout rules
- **Fixed elements:** top app bar (108 tall on L0), bottom nav (120 tall). Content scrolls between.
- **Gutter:** 24px canvas padding on mobile. Cards hug the gutter.
- **One primary CTA per screen.** Full-width pill in footers, 312px centered in focus layouts.
- **FAB:** 56px brand circle, bottom-right, creation flows only — never as a persistent screen control.

---

## Iconography

**The icon system is a custom Slice set, not a third-party pack.** Icons are flat SVG, stroke-based, ~1.5–2px weight, 24×24 on a 24 grid, centered. Fills are rare and reserved for filled/active variants (e.g. `spark-fill`, `camera-fill`, `self-transfer-fill`). Colors are inherited via `currentColor` or `fill="rgba(0,0,0,0.9)"`.

**Variants** observed in Figma: `Type=Outline` (default), `Type=Filled` (active/selected), `Stroke=Regular / Thin`.

**Categories** (see Figma `/Iconography/Icons`): Messaging (Message, Mail, WhatsApp), Status (Ban, Tick), Documents, Devices (Mobile-prepaid, Camera, Gear, About), Buildings (Domestic, Bank-transfer), Cashback (Monies), Products (Slice `&`, Spark, Fire, UPI), Profile (Verify-selfie, Profile, Self-transfer), Shopping (Wallet).

**Copied set** is in `assets/icons/`. When a Figma icon was unavailable via `fig_copy_files`, a placeholder is flagged.

**Unicode / emoji:** not used as icons. Rupee glyph `₹` is the only currency-ish character, typeset in Rubik.

**For new icons:** first check `assets/icons/`. If missing and the need is generic (arrow, chevron, settings), use Lucide at the same 24/1.75 stroke spec and flag as a substitution.

---

## Core patterns

**The centered-focus pattern** (Slice signature):
```
label (micro, tertiary)
THE NUMBER (display/500, centered, -0.02em)
insight (caption, positive/brand)

[ primary CTA, 312px pill ]

...supporting cards below...
```

The hero number lives on the white canvas — never in a card. One CTA, centered. Support goes below as cards/lists.

**Other patterns:** see Figma `/Patterns`, `/Core-PDP`, `/Feature-PDP`, `/Primary-heading`, `/Templates`, `/L0`, `/L1`, `/Transaction`, `/Empty-state`.

---

## Before you ship a screen

1. One primary action?
2. One centered, uncluttered hero?
3. Four or fewer text roles?
4. Does every element carry information or enable action?
5. Am I showing one state, not two overlapping ones?
6. Are the colors doing semantic work, not decorative work?

If any answer is no, the screen isn't done.

---

## Known caveats / flags for the user

- **Font:** you provided `Rubik-VariableFont_wght.ttf` — excellent, that's what the design uses. No substitution needed.
- **Color/Theme/Spacing zip uploads** (`Colors1.zip`, `Theme1.zip`, `Spacing.zip`) referenced in the brief were **not present** in the `uploads/` folder when I looked. I built the tokens from the Figma's `/Colors`, `/Spacing`, `/Radius`, `/Elevation` pages instead — that's the source of truth anyway. If those zips contain web-ready tokens you want me to reconcile against, please re-attach.
- **Icons:** a first-cut lift of ~20 SVGs from `/Iconography/Icons` is in `assets/icons/`. The full set is larger (the Figma has many icon-set frames not yet unpacked); tell me which categories you need prioritized and I'll pull more.
- **Illustrations:** 5 "blob" PNGs copied. Many more exist across `/Illustrations/Borrow-PDP`, `/FD-PDP`, `/Credit-Card-PDP`, `/Empty`, `/Error`, `/Explore` — ask and I'll copy what you need.
- **Dark mode** tokens exist in Figma but I didn't split them into a separate stylesheet — light-first. Say the word and I'll add a `[data-theme=dark]` block.
