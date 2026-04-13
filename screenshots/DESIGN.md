# Design System: Replit
**Source:** https://replit.com + screenshot analysis

---

## 1. Visual Theme & Atmosphere

Replit's design language is **boldly modern and kinetically energetic** — a developer tool that refuses to look like one. The overall feel is **warm, confident, and inviting**, deliberately distancing itself from the cold sterility of typical dev tooling. Large organic blob shapes in a vivid terracotta-orange act as the signature motif, injecting personality and movement into what could otherwise be a utilitarian layout.

The atmosphere is **generously spacious yet assertive** — wide breathing room between sections, but every section makes a confident visual statement. The palette leans heavily on an off-white cream canvas contrasted with a singular, dominant brand orange. Everything else steps back so that orange can command full attention.

**Key Characteristics:**
- Signature large pill/blob shapes in brand orange create organic visual anchors throughout the page
- Alternating dark charcoal and warm cream sections establish a strong rhythmic scroll experience
- Typography is the hero — oversized, bold display fonts carry most of the visual weight
- UI components are minimal and deliberately understated to keep focus on content
- Developer credibility maintained through precise, clean type; warmth injected through organic shapes and color

---

## 2. Color Palette & Roles

### Primary Foundation
- **Warm Off-White Canvas** (`#FCFCFC`) – Primary page background. Not pure white — has an almost imperceptible warmth that softens the experience.
- **Cool Light Gray Surface** (`#F0F1F2`) – Secondary surface color for cards, containers, and elevated UI elements.
- **Pale Mist Gray** (`#EBECED`) – Root/base background, used for the outermost page shell.
- **Soft Divider Gray** (`#E4E5E6`) – Highest elevation background, used for subtle section differentiation.

### Accent & Interactive
- **Replit Brand Orange** (`#EC4E02`) – The single most important color in the system. Used for the logo mark, accent text highlights (e.g. "Agent 4"), CTA buttons, blob shapes, and any element that demands immediate attention. Never used decoratively — always purposeful.
- **Vivid Alert Red** (`#FF3C00`) – Close sibling to brand orange, used for urgent states and errors.
- **Signal Blue** (`#0F87FF`) – Primary system accent for links, focus states, and interactive highlights within the product UI (less visible on marketing pages).
- **Affirmative Green** (`#00A11B`) – Success and positive confirmation states.
- **Warning Red** (`#FA4B4B`) – Error and negative feedback states.

### Typography & Text Hierarchy
- **Deep Charcoal Black** (`#07080A`) – Primary text. Near-black with a very subtle warm undertone — softer than pure #000000.
- **Muted Graphite** (`#3D4047`) – Secondary text, supporting copy, and dimmed UI labels.
- **Soft Slate Gray** (`#5C5F66`) – Tertiary text, captions, metadata, and placeholder text.

### Structural
- **Whisper Border** (`#D2D4D6`) – Subtlest dividers and borders.
- **Gentle Outline** (`#AFB1B3`) – Default border weight for inputs and containers.

---

## 3. Typography Rules

**Display Font:** ABC Diatype (marketing headlines and hero text)
**UI Font:** IBM Plex Sans (navigation, body, labels, product UI)
**Code Font:** ReplitHack (monospace, code contexts)

**Character:** ABC Diatype is a wide, confident grotesque with strong geometric construction — it reads as modern and authoritative without feeling corporate. IBM Plex Sans brings a geometric but humanist warmth to body copy, keeping reading comfortable. Together they create a hierarchy that feels designed, not default.

### Hierarchy & Weights
- **Hero Display / H1:** ABC Diatype, bold (700), very large (42px+), tight line-height (1.0–1.25). Used for hero statements like "What will you build?" — maximum visual impact, minimal words.
- **Section Header / H2:** ABC Diatype, bold (700), 32–42px, line-height 1.25. Section intros like "Meet Agent 4" and "Start Small. Scale Fast."
- **Feature Header / H3:** ABC Diatype, semi-bold (600), 24–32px. Card and feature titles like "Design Freely," "Move faster."
- **Body Text:** IBM Plex Sans, regular (400), 16px, line-height 1.6. Comfortable, unhurried reading for descriptions and feature copy.
- **Labels / Nav / Meta:** IBM Plex Sans, medium (500), 12–14px, slightly expanded letter-spacing. Navigation items, pricing labels, tier names.
- **Code / Monospace:** ReplitHack, regular, used sparingly for product UI mockups and developer-context elements.

### Typographic Personality
Text alignment is predominantly **center-aligned for hero and section headers**, shifting to **left-aligned for feature cards and body content**. The contrast between massive display type and restrained body copy creates a dramatic editorial rhythm.

---

## 4. Component Stylings

### Buttons
- **Shape:** Fully pill-shaped — dramatically rounded ends (border-radius: 1028px). No ambiguity — these are capsules, not rectangles with rounded corners.
- **Primary CTA:** Replit Brand Orange (`#EC4E02`) fill, white text, generous horizontal padding (~32px), medium height (~48px). Examples: "Get started free," "Create account."
- **Primary Dark CTA:** Deep Charcoal Black (`#07080A`) fill, white text, same pill shape. Used for pricing tier buttons like "Sign up," "Join Replit Core."
- **Secondary/Ghost:** Outlined in Gentle Outline Gray, transparent fill, dark text. Used for secondary actions.
- **Hover State:** Subtle darkening — orange deepens slightly toward `#D44600`, black lightens toward `#3D4047`. Smooth 150ms ease-out transition.

### Cards & Containers
- **Feature Cards:** Gently rounded corners (12–16px radius), Cool Light Gray (`#F0F1F2`) background, flat (no shadow on default state). Clean, minimal internal padding (~24–32px).
- **Pricing Cards:** Same gently rounded treatment, slightly elevated with a whisper-soft shadow (`0px 4px 8px 0px rgba(2,2,3,0.07)`) to establish tier differentiation.
- **Blob/Organic Shapes:** The signature Replit visual element — large pill shapes with fully rounded ends used as section backgrounds and image containers. Filled with Brand Orange (`#EC4E02`) or a warm coral tint. Not actual UI components — decorative structural shapes.
- **Dialog/Modal:** More generously rounded corners (16px), elevated with a stronger diffused shadow.

### Navigation
- **Layout:** Clean horizontal bar, left-anchored logo mark + wordmark, centered nav links, right-anchored utility actions (Contact sales, Log In, Create account CTA).
- **Typography:** IBM Plex Sans, medium weight (500), 14px, standard casing (not uppercase).
- **CTA in Nav:** "Create account" uses Brand Orange outline button — pill-shaped, orange text and border, transparent fill.
- **Active/Hover State:** Subtle color shift to Deep Charcoal Black, no underline indicator — relies purely on weight and color.

### Inputs & Forms
- **Stroke Style:** Refined 1px border in Gentle Outline Gray (`#AFB1B3`), elevating to Signal Blue (`#0F87FF`) on focus.
- **Background:** Warm Off-White Canvas (`#FCFCFC`) at rest, no fill change on focus — border does the work.
- **Corner Style:** Subtly rounded corners (6–8px) — more restrained than buttons, functional rather than playful.
- **Hero Prompt Input:** Wider, more prominent — full-width pill-ish container with an internal submit affordance (orange circle button on right). This is the primary conversion surface on the homepage.
- **Placeholder Text:** Soft Slate Gray (`#5C5F66`), lightweight, unobtrusive.

---

## 5. Layout Principles

### Grid & Structure
- **Max Content Width:** ~1200–1280px, generously centered with large lateral margins.
- **Grid:** Flexible column grid — feature sections use 2-column, 4-column, and single-column layouts contextually. No rigid 12-column visible — layout feels compositional, not gridded.
- **Breakpoints:** Standard responsive — mobile collapses to single column, tablet stacks to 2-column, desktop expands to full multi-column layouts.

### Whitespace Strategy
- **Base Unit:** 8px spatial scale (8, 16, 24, 32, 48, 64, 128px)
- **Section Padding:** Extremely generous — 80–128px vertical padding between major sections. The scroll experience is slow and deliberate by design.
- **Density:** Intentionally low density on the marketing page. Information is rationed, not packed. Each section communicates one idea at a time.
- **Intra-component Spacing:** Comfortable 24–32px internal padding in cards and containers.

### Alignment & Visual Balance
- **Hero:** Center-aligned text with center-aligned input — full attention funnel to the prompt box.
- **Feature Sections:** Left-aligned within cards and feature blocks for readability.
- **Visual Hierarchy:** Established almost entirely through type scale — massive display text anchors sections, everything else is supporting cast. Color (orange) is the secondary hierarchy signal, used as a spotlight rather than a paintbrush.
- **Image/Content Balance:** Product UI mockups displayed inside the organic blob shapes — a clever device that makes demos feel part of the design rather than inserted screenshots.

---

## 6. Design System Notes

### Atmosphere in One Line
*"Energetically warm developer canvas — bold organic shapes and a singular brand orange cut through an airy off-white space with confident, editorial typography."*

### Color References
- **Primary CTA:** "Replit Brand Orange (`#EC4E02`)"
- **Background:** "Warm Off-White Canvas (`#FCFCFC`)"
- **Primary Text:** "Deep Charcoal Black (`#07080A`)"
- **Secondary Text:** "Muted Graphite (`#3D4047`)"
- **Cards/Surfaces:** "Cool Light Gray Surface (`#F0F1F2`)"

### Component Prompts
- "Design a fully pill-shaped CTA button in Replit Brand Orange (#EC4E02) with white text, generous horizontal padding, and a subtle darkening hover state"
- "Create a feature card with gently rounded 12px corners, Cool Light Gray (#F0F1F2) background, flat default state, and left-aligned ABC Diatype header with IBM Plex Sans body copy"
- "Add a large organic blob/pill shape in Replit Brand Orange (#EC4E02) as a section background container — fully rounded ends, used to frame product UI mockups"
- "Design a hero section with center-aligned ABC Diatype display text at 42px+, an off-white (#FCFCFC) background, and a full-width pill-shaped prompt input with an orange circle submit button on the right"
- "Create a pricing table with 4 tiers, pill-shaped black CTA buttons, Brand Orange tier label text, and whisper-soft shadow elevation on each card"
- "Design a top navigation bar with a left-anchored logo, centered nav links in IBM Plex Sans medium 14px, and a right-anchored outlined pill CTA in Brand Orange"
