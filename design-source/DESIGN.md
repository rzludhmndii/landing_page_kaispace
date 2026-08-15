---
name: KaiSpace Brand Identity
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad7f3'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e8e5ff'
  surface-container-highest: '#e2e0fc'
  on-surface: '#1a1a2e'
  on-surface-variant: '#4a4455'
  inverse-surface: '#2f2e43'
  inverse-on-surface: '#f2efff'
  outline: '#7b7487'
  outline-variant: '#ccc3d8'
  surface-tint: '#732ee4'
  primary: '#630ed4'
  on-primary: '#ffffff'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#d2bbff'
  secondary: '#831ada'
  on-secondary: '#ffffff'
  secondary-container: '#9e41f5'
  on-secondary-container: '#fffbff'
  tertiary: '#730bc1'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d36db'
  on-tertiary-container: '#f2dfff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6800b4'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#fcf8ff'
  on-background: '#1a1a2e'
  surface-variant: '#e2e0fc'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system focuses on the intersection of professional productivity and human connection. It targets remote-first teams and hybrid organizations that value presence and spontaneous collaboration.

The visual style is **Corporate Modern with a Soft Touch**. It utilizes ample whitespace and a clean, systematic layout to communicate reliability, while employing soft rounded corners and a vibrant purple palette to evoke the warmth of a shared physical office. The interface remains unobtrusive, acting as a high-quality frame for the 2D avatar-based workspace it promotes.

## Colors
The palette is centered around a spectrum of Purple to represent creativity and the "virtual" nature of the product.

- **Primary (#7C3AED):** Used for main actions, brand identity, and active states.
- **Secondary/Tertiary:** Used for gradients, hover states, and highlighting diverse team interactions.
- **Neutral (#1A1A2E):** A deep, ink-like navy used for high-contrast typography to ensure readability.
- **Surface (#FAFAFB):** A very light grey used for subtle section backgrounds to break up long scrolling pages without losing the "clean" aesthetic.

## Typography
The system uses **Inter** exclusively to maintain a functional, systematic, and modern appearance. 

The hierarchy is built on extreme contrast between weights:
- **Headings:** Use Bold or ExtraBold (700-800) weights to anchor the page. This creates a strong professional "voice."
- **Body Text:** Use Light (300) weight for long-form Indonesian copy to maintain an airy, sophisticated feel.
- **Labels:** Use SemiBold (600) for small UI elements like buttons or navigation links to ensure they remain legible despite their size.

## Layout & Spacing
This design system uses a **Fixed Grid** approach for the marketing site to ensure the high-fidelity illustrations and product shots are framed perfectly.

- **Desktop (1280px):** 12-column grid with 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters.
- **Mobile (<768px):** 4-column grid with 16px margins.

Vertical rhythm follows a 8px base unit. Section transitions should utilize significant padding (120px+) to allow the "virtual office" narrative to breathe.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. 

The background is predominantly `#FFFFFF`, with `#FAFAFB` used for "container" elements or secondary sections. Shadows should be extremely soft and diffused (e.g., `box-shadow: 0 10px 40px rgba(26, 26, 46, 0.05)`). This creates a sense of "objects resting on a surface" rather than aggressive floating layers, reinforcing the "office" metaphor. Interactive cards should slightly increase their shadow spread on hover to provide tactile feedback.

## Shapes
The shape language is consistently **Rounded** (0.5rem base). 

This level of corner radius strikes a balance between professional software and approachable social space. 
- **Small elements (Buttons, Inputs):** 0.5rem (8px).
- **Medium elements (Cards, Feature boxes):** 1rem (16px).
- **Large elements (Product demos, Modals):** 1.5rem (24px).

## Components

### Buttons
- **Primary:** Solid `#7C3AED` with white text. No border. SemiBold text.
- **Secondary:** Ghost style with `#7C3AED` border and text.
- **States:** Hover should brighten the purple slightly (`#9333EA`); active/pressed should deepen it.

### Navigation Header
- **Structure:** Logo on left, center-aligned navigation links (Beranda, Fitur, Harga), and right-aligned "Masuk" (Ghost) and "Mulai Gratis" (Solid Purple).
- **Behavior:** Fixed position with a backdrop-blur (Glassmorphism) effect once the user scrolls past the hero section.

### Cards
- Used for "Fitur Utama" or "Testimoni." 
- Style: Background `#FFFFFF`, 1px border `#F1F5F9`, and a subtle ambient shadow.

### Input Fields
- Background `#FAFAFB`, border `1px solid #E2E8F0`, 8px roundedness.
- Active focus state: `1px solid #7C3AED` with a soft purple outer glow.

### Footer
- High-contrast background using Neutral `#1A1A2E`.
- Typography in white or light grey.
- Standard column layout: Brand info, Sitemap, Resources, and Social Media icons.