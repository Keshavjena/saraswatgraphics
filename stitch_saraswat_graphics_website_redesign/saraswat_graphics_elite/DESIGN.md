---
name: Saraswat Graphics Elite
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#42474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#532800'
  on-tertiary: '#ffffff'
  tertiary-container: '#743b00'
  on-tertiary-container: '#f9a767'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  deep-navy: '#0F172A'
  surface-light: '#F8FAFC'
  cta-accent: '#F59E0B'
  border-subtle: '#E2E8F0'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
  component-gap: 12px
---

## Brand & Style

The design system embodies a **Modern Corporate** aesthetic, prioritizing clarity, prestige, and effortless navigation. It transforms the traditionally dense printing catalog into a premium e-commerce experience that feels curated rather than cluttered.

The target audience ranges from small business owners to corporate marketing managers who value reliability and high-end results. The UI evokes a sense of **trustworthy innovation** through:
- **Spaciousness:** Generous use of white space to let product high-fidelity photography breathe.
- **Precision:** Sharp grid alignment and refined typography that mirror the accuracy of professional printing.
- **Subtlety:** A shift from loud, promotional banners to sophisticated, tonal layering and soft shadows.

## Colors

The palette is anchored by **Classic Navy (#0F4C81)**, a sophisticated primary that signals heritage and professionalism. This is balanced by **Emerald Green (#10B981)** for secondary actions and success states, providing a modern, vibrant edge.

- **Primary:** Used for navigation, headers, and core brand elements.
- **Secondary:** Applied to positive reinforcement UI like "Added to Cart" or "Quality Guaranteed" badges.
- **CTA Accent:** **Amber Gold (#F59E0B)** is reserved strictly for primary conversion points (Buy Now, Checkout) to ensure high visibility against the professional blue.
- **Backgrounds:** Use `surface-light` for secondary sections to create a clear visual distinction from the pure white (`#FFFFFF`) primary content areas.

## Typography

This design system utilizes a dual-font strategy to balance authority with approachability. **Inter** provides a disciplined, geometric foundation for headings and functional labels. **Plus Jakarta Sans** is used for body copy, offering softer terminals and a friendlier reading experience for long-form product descriptions.

Hierarchy is maintained through tight letter-spacing on large headlines to create a "locked-in" premium feel. Prices are treated as a distinct typographic role (`price-display`), emphasizing the premium value proposition.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1280px container on desktop, utilizing a 12-column grid. 

- **Section Gaps:** A significant 80px vertical gap separates major product categories to prevent the "wall of products" effect.
- **Rhythm:** An 8px base unit governs all internal spacing.
- **Mobile Adaptation:** On mobile devices, the grid collapses to 2 columns for product lists, with margins reducing to 16px to maximize screen real estate for product imagery.
- **Safe Zones:** High-priority CTAs and pricing must maintain at least `component-gap` (12px) from the edges of their parent containers.

## Elevation & Depth

To maintain a premium feel, the design system avoids heavy shadows in favor of **Tonal Layers** and **Subtle Ambient Shadows**.

- **Level 0 (Base):** Pure white or `surface-light` backgrounds.
- **Level 1 (Cards):** Uses a 1px border of `border-subtle` and a very soft shadow (0px 4px 20px rgba(0, 0, 0, 0.04)).
- **Level 2 (Hover/Active):** The shadow deepens slightly (0px 10px 30px rgba(0, 0, 0, 0.08)) and the card lifts 2px.
- **Floating Elements:** Modals and navigation drawers use a soft backdrop blur (8px) to maintain context while focusing the user's attention.

## Shapes

The shape language is **Rounded**, moving away from the sharp, industrial corners of traditional print catalogs. 

- **Standard Elements:** 0.5rem (8px) radius for buttons and input fields.
- **Container Elements:** 1rem (16px) for product cards and main banners to create a softer, more modern framing for images.
- **Chips/Badges:** Use the `rounded-xl` (1.5rem) setting to create pill-shaped indicators for "New" or "Best Seller" tags, distinguishing them from interactive buttons.

## Components

### Buttons
- **Primary:** `cta-accent` background with white text. High-contrast, bold, and center-aligned.
- **Secondary:** `primary_color` ghost buttons (outline only) for secondary actions like "View Details."

### Product Cards
Cards are the core of the system. They feature a full-width image area at the top (aspect ratio 1:1), followed by a 16px padded content area. The product title uses `body-md` bold, with the price prominently displayed using `price-display`.

### Input Fields
Inputs use a white background with a `border-subtle` outline. On focus, the border transitions to the `primary_color` with a 2px outer glow.

### Chips & Badges
Small, high-contrast labels used to denote product attributes (e.g., "Eco-friendly," "Bulk Savings"). They use `label-md` at a reduced size (12px) with increased letter spacing.

### Navigation
A "Mega-Menu" approach is simplified into a clean, horizontal bar with dropdowns that utilize the same elevation and roundedness as cards. Typography in the nav uses `label-md` for a crisp, organized appearance.