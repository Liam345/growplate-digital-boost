# GrowPlate Design System & Styling Guide

This document outlines the design system, styling patterns, and consistency guidelines for the GrowPlate landing page. Follow these guidelines when adding new components or modifying existing ones.

## 🎨 Color System

### Primary Brand Colors
```css
--primary: hsl(214 84% 56%)           /* Professional blue */
--primary-foreground: hsl(0 0% 100%)  /* White */
--primary-light: hsl(214 100% 97%)    /* Very light blue backgrounds */
```

### Semantic Colors
```css
--success: hsl(142 71% 45%)           /* Green for positive metrics */
--success-light: hsl(142 71% 97%)     /* Light green backgrounds */
--warning: hsl(38 92% 50%)            /* Orange for attention */
--warning-light: hsl(38 92% 97%)      /* Light orange backgrounds */
--destructive: hsl(0 84% 60%)         /* Red for errors */
--muted: hsl(210 17% 95%)             /* Light gray backgrounds */
--muted-foreground: hsl(215 16% 47%)  /* Gray text */
```

### Special Use Cases
- **Risk-Free Banners**: `bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300`
- **Card Gradients**: `bg-gradient-to-br from-blue-500 to-blue-600`
- **Phone Mockups**: `bg-gray-900` with `shadow-2xl`

## 📝 Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Heading Hierarchy
```css
/* H1 - Hero Titles */
.heading-1 { @apply text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight; }

/* H2 - Section Headers */
.heading-2 { @apply text-3xl md:text-4xl font-bold text-gray-900; }

/* H3 - Card/Component Titles */
.heading-3 { @apply text-2xl font-bold; }

/* H4 - Subsection Headers */
.heading-4 { @apply text-xl font-semibold; }
```

### Body Text Patterns
```css
/* Large body text - Hero descriptions */
.text-large { @apply text-xl text-muted-foreground leading-relaxed; }

/* Standard body text */
.text-body { @apply text-muted-foreground leading-relaxed; }

/* Small text - Captions, disclaimers */
.text-small { @apply text-sm text-muted-foreground; }
```

## 📏 Spacing & Layout

### Container System
```css
/* Main page container */
.container-main { @apply container mx-auto px-4; }

/* Section padding */
.section-padding { @apply py-20 px-4; }

/* Hero section padding (accounts for fixed header) */
.hero-padding { @apply pt-32 pb-20 px-4; }
```

### Grid Patterns
```css
/* Feature grid */
.grid-features { @apply grid md:grid-cols-2 lg:grid-cols-3 gap-8; }

/* Two-column layout (Hero, testimonials) */
.grid-two-col { @apply grid lg:grid-cols-2 gap-12 items-center; }

/* Statistics grid */
.grid-stats { @apply grid md:grid-cols-3 gap-8; }
```

### Spacing Scale
- **Small**: `gap-4`, `space-y-4`
- **Medium**: `gap-8`, `space-y-8`
- **Large**: `gap-12`, `space-y-12`

## 🔲 Button System

### Button Variants
```css
/* Primary CTA Button */
.btn-hero {
  @apply bg-gradient-to-r from-primary to-primary-dark text-primary-foreground;
  @apply px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl;
  @apply transform hover:scale-105 transition-all duration-200;
}

/* Secondary Button */
.btn-secondary {
  @apply px-8 py-6 text-lg font-semibold border-2;
  @apply hover:bg-primary hover:text-primary-foreground transition-all duration-200;
}

/* Standard Button */
.btn-standard {
  @apply bg-primary text-primary-foreground font-semibold;
  @apply py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200;
}
```

### Button Sizes
- **Hero**: `px-12 py-6 text-xl`
- **Large**: `px-8 py-6 text-lg`
- **Standard**: `px-6 py-4 text-base`
- **Small**: `px-4 py-2 text-sm`

## 🃏 Card Components

### Feature Cards
```css
.card-feature {
  @apply bg-card border rounded-2xl p-6 shadow-lg;
  @apply hover:shadow-xl hover:-translate-y-1 transition-all duration-200;
}
```

### Standard Cards
```css
.card-standard {
  @apply bg-card border rounded-lg p-6 shadow-sm;
  @apply hover:shadow-md transition-shadow duration-200;
}
```

### Risk-Free Guarantee Banner
```css
.banner-guarantee {
  @apply bg-gradient-to-r from-red-50 to-rose-50;
  @apply border-2 border-red-300 rounded-xl p-8 shadow-lg;
}
```

## 🎭 Animation & Transitions

### Standard Transitions
```css
/* Default transition for interactive elements */
.transition-standard { @apply transition-all duration-200; }

/* Hover scale effect */
.hover-scale { @apply hover:scale-105 transform transition-transform duration-200; }

/* Hover lift effect */
.hover-lift { @apply hover:shadow-xl hover:-translate-y-1 transition-all duration-200; }
```

### Icon Animations
```css
/* Arrow icon slide */
.icon-slide { @apply group-hover:translate-x-2 transition-transform duration-200; }

/* Icon scale */
.icon-scale { @apply group-hover:scale-110 transition-transform duration-200; }
```

### Special Effects
- **Pulse animation**: `animate-pulse` for attention-grabbing elements
- **Floating elements**: Absolute positioning with animation for phone mockup badges

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile-first approach** - Start with mobile styles, enhance for larger screens
- **Common responsive pattern**: `text-4xl md:text-5xl lg:text-6xl`
- **Grid responsiveness**: `grid md:grid-cols-2 lg:grid-cols-3`
- **Flex responsiveness**: `flex-col sm:flex-row`

### Mobile Navigation
```css
.nav-mobile {
  @apply fixed top-0 left-0 right-0 z-50;
  @apply bg-background/95 backdrop-blur-sm border-b;
}
```

## 🔧 Icon System

### Icon Containers
```css
/* Feature icons */
.icon-feature { @apply w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center; }

/* Step process icons */
.icon-step { @apply w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center; }

/* Inline icons */
.icon-inline { @apply w-5 h-5 inline-block; }
```

### Icon Guidelines
- Use **Lucide React** icons consistently
- **Size**: `w-4 h-4` for small, `w-5 h-5` for standard, `w-6 h-6` for large
- **Color**: Match surrounding text color or use semantic colors

## 🏷️ Badge & Status Components

### Success/ROI Badges
```css
.badge-success {
  @apply bg-success/10 text-success px-3 py-2 rounded-full text-sm font-semibold;
}

.badge-warning {
  @apply bg-warning/10 text-warning px-3 py-2 rounded-full text-sm font-semibold;
}
```

### Floating Status Indicators
```css
.status-float {
  @apply absolute px-3 py-2 rounded-full text-sm font-semibold animate-pulse;
}
```

## 🎯 Component-Specific Guidelines

### Hero Section
- **Background**: Clean white/light background
- **CTA Hierarchy**: Primary button (Get Started) + secondary button (See Features)
- **Trust indicators**: Statistics in horizontal layout with separators
- **Risk-free banner**: Prominent red-accented guarantee section

### Feature Cards
- **Layout**: 3-column grid on desktop, stacked on mobile
- **Icons**: Consistent size and container styling
- **Hover effects**: Subtle lift and shadow enhancement

### Pricing Section
- **Background**: Light gradient `from-blue-50 to-white`
- **Card style**: Bold gradient background for primary pricing card
- **Features list**: Checkmark icons with consistent spacing

### Phone Mockup
- **Frame**: Dark realistic phone frame with multiple shadow layers
- **Content**: App screenshot with subtle overlay gradient
- **Floating elements**: Animated status badges positioned absolutely

## ✅ Consistency Checklist

When adding new components, ensure:

- [ ] Colors match the defined color system
- [ ] Typography follows the heading hierarchy
- [ ] Spacing uses the consistent scale (4, 8, 12, 16, 20, 24)
- [ ] Buttons follow established variants and sizing
- [ ] Hover states are included for interactive elements
- [ ] Responsive breakpoints are properly implemented
- [ ] Icons are from the Lucide React library
- [ ] Animations use the standard duration (200ms)
- [ ] Cards follow the established shadow and border patterns
- [ ] Accessibility considerations (contrast, focus states)

## 🔍 Development Guidelines

### Class Naming
- Use Tailwind utility classes for consistency
- Create component-specific classes only when necessary
- Follow the `component-modifier` pattern for custom classes

### Performance
- Minimize custom CSS in favor of Tailwind utilities
- Use CSS-in-JS only when absolutely necessary
- Optimize images and use appropriate formats

### Accessibility
- Maintain color contrast ratios (4.5:1 minimum)
- Include focus states for all interactive elements
- Use semantic HTML elements
- Provide alt text for images and icons

---

## 📚 Resources

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/
- **Radix UI Primitives**: https://www.radix-ui.com/primitives

---

*This document should be updated when new design patterns are established or existing ones are modified.*