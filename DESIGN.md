---
name: Cyber-Editorial Modernism
colors:
  surface: '#fff8f0'
  surface-dim: '#e2d9c9'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf3e2'
  surface-container: '#f6eddc'
  surface-container-high: '#f0e7d6'
  surface-container-highest: '#eae2d1'
  on-surface: '#1f1b11'
  on-surface-variant: '#4d4633'
  inverse-surface: '#343025'
  inverse-on-surface: '#f9f0df'
  outline: '#7f7660'
  outline-variant: '#d1c6ac'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#ffd22d'
  on-primary-container: '#715a00'
  inverse-primary: '#edc217'
  secondary: '#665e46'
  on-secondary: '#ffffff'
  secondary-container: '#eee2c4'
  on-secondary-container: '#6d644c'
  tertiary: '#5a5f67'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2d7e1'
  on-tertiary-container: '#585d66'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe083'
  primary-fixed-dim: '#edc217'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#eee2c4'
  secondary-fixed-dim: '#d1c6a9'
  on-secondary-fixed: '#211b09'
  on-secondary-fixed-variant: '#4e4630'
  tertiary-fixed: '#dee2ed'
  tertiary-fixed-dim: '#c2c7d1'
  on-tertiary-fixed: '#171c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#fff8f0'
  on-background: '#1f1b11'
  surface-variant: '#eae2d1'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  metric-val:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid_unit: 44px
  gutter: 16px
  margin_desktop: 64px
  margin_mobile: 20px
  container_max: 1280px
---

## Brand & Style
The design system embodies a "Cyber-Editorial Modernism" aesthetic, blending the high-precision world of backend engineering with the sophisticated layout of modern print journals. It is designed for a software engineering portfolio that feels like a living technical document—authoritative, structured, and intentional.

The style leverages a **Flat Brutalist** approach tempered by an editorial grid. It prioritizes information density and typographic hierarchy over decorative flourishes. The visual language uses hard edges, high-velocity accent colors, and a rigid "Bento Box" card structure to organize complex data into digestible, high-impact modules. The result is a UI that evokes reliability, technical mastery, and a forward-thinking perspective on digital craft.

## Colors
The palette is rooted in a warm, archival "off-white" canvas that reduces eye strain while maintaining a premium, paper-like feel.

- **Canvas (#F7F6F2):** The foundation for the entire layout. It serves as the "ink-ready" background.
- **Surface (#FFFDF7):** Used for elevated cards and modules to create subtle separation from the canvas.
- **Cyber Yellow (#FFD22D):** The high-velocity accent. Use sparingly for call-to-actions, status indicators, and critical highlights.
- **Outlines (#D7CBAE):** Low-contrast borders that provide structure without visual noise.
- **Badges (#70757E):** A low-contrast slate-grey specifically for secondary metadata and technical tags.

## Typography
Typography follows a strict hierarchy to ensure readability and technical clarity.

- **Display Titles (Sora):** Used for section headers and major personal branding. Set in Bold or Extra Bold with tight tracking for a high-impact, geometric look.
- **Body Prose (Inter):** Used for descriptions, project summaries, and long-form writing. It provides a neutral, highly readable contrast to the bold display type.
- **Technical Metrics (JetBrains Mono):** Used for all code snippets, tech stacks, git hashes, and performance metrics. It reinforces the engineering-focused persona.

## Layout & Spacing
The layout is governed by a **Bento Grid** philosophy, organizing content into distinct rectangular modules.

- **Background Grid:** A light-gray dot-grid system (#000000 at 3.5% opacity) with a 44px step serves as the visual anchor for all elements.
- **Card Constraints:** Elements should snap to the grid. Cards utilize 16px (1rem) or 24px (1.5rem) internal padding depending on content density.
- **Responsiveness:** On mobile, the multi-column Bento layout collapses into a single-column stack, maintaining the 8px corner radius and consistent 16px gutters.

## Elevation & Depth
This design system rejects soft shadows in favor of **Hard-Offset Brutalism**. 

- **Cards:** Use a flat surface (#FFFDF7) with a 1px solid outline (#D7CBAE). There is no ambient shadow for cards; depth is achieved solely through color layering and borders.
- **Interactive Elements:** Buttons and clickable cards utilize a solid, 100% opaque black shadow with a 3px vertical and 3px horizontal offset.
- **State Change:** On hover, interactive elements should shift -2px on both axes, with the shadow expanding to 5px to simulate a "lifting" physical button.

## Shapes
The shape language is disciplined and consistent. All cards, buttons, and input fields must use a fixed **8px (0.5rem)** corner radius. 

Avoid circles or fully pill-shaped elements unless they are status indicators (e.g., "Available for Work" dots). The 8px radius provides enough softness to feel modern while maintaining the structural integrity of a technical document.

## Components

### Buttons
- **Primary:** Background Cyber Yellow (#FFD22D), Black text (Sora Bold), 1px black border, 3px hard black offset shadow.
- **Secondary:** Background Surface (#FFFDF7), 1px solid outline (#D7CBAE), no shadow unless hovered.

### Tags & Badges
- **Tech Tags:** Low-contrast slate-grey background (#70757E), White text (JetBrains Mono), 4px padding-x, uppercase.
- **Category Badges:** Subtle outline only (#D7CBAE), Sora Bold, 12px font size.

### Bento Cards
- **Construction:** Surface color (#FFFDF7), 1px outline (#D7CBAE), 8px corner radius.
- **Header:** Use Sora Bold for card titles, often accompanied by a JetBrains Mono "01", "02" index number in the top right.

### Input Fields
- **Styling:** Background Canvas (#F7F6F2), 1px solid outline (#D7CBAE), 8px corner radius. 
- **Focus State:** Outline shifts to Cyber Yellow (#FFD22D) with a 2px width.

### Lists
- Use JetBrains Mono for list markers (e.g., `[01]`, `[02]`) to maintain the terminal-inspired aesthetic. Line items are separated by a 1px dashed line (#D7CBAE).