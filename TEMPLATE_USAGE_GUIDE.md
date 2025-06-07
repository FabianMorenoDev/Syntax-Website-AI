# Syntax Brand System Template - Usage Guide

## 📖 Overview

This template provides a complete implementation of the Syntax brand system using Next.js 15, TypeScript, and Tailwind CSS v4. It includes all brand colors, custom typography, optimized images, and ready-to-use components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🎨 Brand System Components

### Color Palette

The template includes all Syntax brand colors as Tailwind CSS utilities:

#### Deep Purple (Primary)
```css
bg-syntax-primary-900  /* #060f38 - Dark headers, main text */
bg-syntax-primary-700  /* #383f60 - Secondary text */
bg-syntax-primary-500  /* #6a6f88 - Muted text */
bg-syntax-primary-300  /* #9b9faf - Light text */
bg-syntax-primary-100  /* #cdcfd7 - Backgrounds */
```

#### Purple (Secondary)
```css
bg-syntax-purple-900   /* #7656fd - Primary buttons */
bg-syntax-purple-700   /* #9178fd - Hover states */
bg-syntax-purple-500   /* #ad9afe - Active states */
bg-syntax-purple-300   /* #c8bcfe - Light accents */
bg-syntax-purple-100   /* #e4ddff - Backgrounds */
```

#### Yellow (CTA/Attention)
```css
bg-syntax-yellow-900   /* #fff351 - Primary CTA buttons */
bg-syntax-yellow-700   /* #fff573 - CTA hover states */
bg-syntax-yellow-500   /* #fff796 - Active states */
bg-syntax-yellow-300   /* #fffab9 - Light highlights */
bg-syntax-yellow-100   /* #fffcdc - Backgrounds */
```

#### Pink (Accent/Playful)
```css
bg-syntax-pink-900     /* #e834b6 - Accent buttons */
bg-syntax-pink-700     /* #ed5dc4 - Hover states */
bg-syntax-pink-500     /* #f284d3 - Active states */
bg-syntax-pink-300     /* #f6ade1 - Light accents */
bg-syntax-pink-100     /* #fad6f0 - Backgrounds */
```

#### Green (Success/Trust)
```css
bg-syntax-green-900    /* #56e57d - Success buttons */
bg-syntax-green-700    /* #7aea98 - Success hover */
bg-syntax-green-500    /* #9aefb1 - Active states */
bg-syntax-green-300    /* #bcf5cb - Light success */
bg-syntax-green-100    /* #dcfae4 - Backgrounds */
```

#### Blue (Neutral/Backgrounds)
```css
bg-syntax-blue-900     /* #c8ddf2 - Cards, containers */
bg-syntax-blue-700     /* #d3e4f5 - Light containers */
bg-syntax-blue-500     /* #ddebf7 - Subtle backgrounds */
bg-syntax-blue-300     /* #e8f1fa - Very light backgrounds */
bg-syntax-blue-100     /* #f4f8fc - Page backgrounds */
```

### Typography

#### ClashDisplay (Headlines & Titles)
```jsx
<h1 className="font-clash-display text-4xl font-bold text-syntax-primary-900">
  Your Headline
</h1>
```

**Available Weights:**
- `font-light` (300)
- `font-normal` (400) 
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

#### ClashGrotesk (Body Text)
```jsx
<p className="font-clash-grotesk text-lg text-syntax-primary-700">
  Your body text content
</p>
```

**Best Practices:**
- Use ClashDisplay for headlines, section titles, and display text
- Use ClashGrotesk for body text, navigation, and UI elements
- The body element already has `font-clash-grotesk` applied by default

## 🖼️ Images

### Team Photos
Located in `/public/images/company/`

```jsx
import Image from 'next/image'

<Image 
  src="/images/company/felix_ceo.webp" 
  alt="Felix, CEO"
  width={200}
  height={200}
  className="rounded-full"
/>
```

**Available Team Members:**
- `felix_ceo.webp` - Felix (CEO)
- `basti_sales.png` - Basti (Sales)
- `dusko_sales.jpg` - Dusko (Sales)
- `julie_sales.jpg` - Julie (Sales)
- `sema_sales.png` - Sema (Sales)
- `sousan_sales.jpeg` - Sousan (Sales)

### Brand Icons
Located in `/public/images/icons/`

```jsx
// For light backgrounds
<Image 
  src="/images/icons/syntax_monogramm_dark_RGB.png" 
  alt="Syntax Logo"
  width={120}
  height={40}
/>

// For dark backgrounds
<Image 
  src="/images/icons/syntax_monogramm_white.png" 
  alt="Syntax Logo"
  width={120}
  height={40}
/>
```

**Available Icons:**
- `syntax_monogramm_dark_RGB.png` - Logo for light backgrounds
- `syntax_monogramm_white.png` - Logo for dark backgrounds
- `azav-logo-navy.png` - AZAV certification (dark)
- `azav-logo-white.png` - AZAV certification (light)
- `Bundesagentur_für_Arbeit_logo.svg` - Federal Employment Agency logo

### Stock Images
Located in `/public/images/stock/`

```jsx
<Image 
  src="/images/stock/co-working-people-working-together.jpg" 
  alt="Collaboration"
  width={400}
  height={300}
  className="object-cover rounded-lg"
/>
```

**Available Stock Photos:**
- `co-working-people-working-together.jpg` - Tech courses, community
- `colleagues-discussing-new-ideas-business-meeting.jpg` - UX/UI, project-based
- `menschen-die-spass-ihrer-pause-haben.jpg` - Campus culture, social

## 🔘 Button Examples

### Primary CTA (Yellow)
```jsx
<button className="bg-syntax-yellow-900 hover:bg-syntax-yellow-700 text-syntax-primary-900 font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
  Get Started
</button>
```

### Secondary (Purple)
```jsx
<button className="bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
  Learn More
</button>
```

### Success (Green)
```jsx
<button className="bg-syntax-green-900 hover:bg-syntax-green-700 text-syntax-primary-900 font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
  Success Action
</button>
```

### Outline
```jsx
<button className="border-2 border-syntax-primary-900 text-syntax-primary-900 hover:bg-syntax-primary-900 hover:text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
  Secondary Action
</button>
```

## 📁 Project Structure

```
├── src/
│   └── app/
│       ├── globals.css          # Brand system implementation
│       ├── layout.tsx           # Root layout with fonts
│       └── page.tsx             # Your main page
├── public/
│   ├── fonts/                   # Custom Syntax fonts
│   │   ├── clash-display/       # ClashDisplay font files
│   │   └── clash-grotesk/       # ClashGrotesk font files
│   └── images/                  # Brand images
│       ├── company/             # Team member photos
│       ├── icons/               # Brand logos & certifications
│       └── stock/               # Stock photography
└── docs/
    └── images/                  # Image usage documentation
```

## 🛠️ Development Guidelines

### Color Usage
- **Primary**: Use for main headings, important text, navigation
- **Secondary (Purple)**: Use for interactive elements, buttons
- **CTA (Yellow)**: Use sparingly for main call-to-action buttons
- **Accent (Pink)**: Use for highlights, special features
- **Success (Green)**: Use for positive feedback, success states
- **Neutral (Blue)**: Use for backgrounds, cards, containers

### Typography Hierarchy
```jsx
// Page title
<h1 className="font-clash-display text-5xl font-bold text-syntax-primary-900">

// Section headers
<h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900">

// Subsection headers
<h3 className="font-clash-display text-2xl font-bold text-syntax-primary-900">

// Body text
<p className="font-clash-grotesk text-lg text-syntax-primary-700">

// Small text
<p className="font-clash-grotesk text-sm text-syntax-primary-500">
```

### Responsive Design
```jsx
// Responsive grid example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Your content */}
</div>

// Responsive text sizes
<h1 className="font-clash-display text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Headline
</h1>
```

## 🎯 Example Components

### Hero Section
```jsx
<section className="bg-syntax-blue-100 py-16">
  <div className="max-w-6xl mx-auto px-8 text-center">
    <h1 className="font-clash-display text-5xl font-bold text-syntax-primary-900 mb-6">
      Welcome to Syntax
    </h1>
    <p className="font-clash-grotesk text-xl text-syntax-primary-700 mb-8">
      Transform your career with cutting-edge technology education
    </p>
    <button className="bg-syntax-yellow-900 hover:bg-syntax-yellow-700 text-syntax-primary-900 font-clash-grotesk font-semibold py-4 px-8 rounded-lg transition-colors">
      Start Learning Today
    </button>
  </div>
</section>
```

### Feature Card
```jsx
<div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="font-clash-display text-2xl font-bold text-syntax-primary-900 mb-4">
    Feature Title
  </h3>
  <p className="font-clash-grotesk text-syntax-primary-700 mb-6">
    Feature description text using the brand typography.
  </p>
  <button className="bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white font-clash-grotesk font-semibold py-2 px-4 rounded transition-colors">
    Learn More
  </button>
</div>
```

### Team Member Card
```jsx
<div className="text-center">
  <Image 
    src="/images/company/felix_ceo.webp" 
    alt="Felix, CEO"
    width={150}
    height={150}
    className="rounded-full mx-auto mb-4"
  />
  <h4 className="font-clash-grotesk font-semibold text-syntax-primary-900 text-lg">
    Felix
  </h4>
  <p className="font-clash-grotesk text-syntax-primary-500">
    CEO
  </p>
</div>
```

## 🔧 Customization

### Adding New Colors
Add custom colors to `src/app/globals.css`:

```css
@theme {
  /* Your custom colors */
  --color-custom-primary: #your-color;
  --color-custom-secondary: #your-color;
  
  /* ... existing Syntax colors ... */
}
```

### Custom Components
Create reusable components using the brand system:

```jsx
// components/SyntaxButton.tsx
interface SyntaxButtonProps {
  variant: 'primary' | 'secondary' | 'success'
  children: React.ReactNode
  onClick?: () => void
}

export function SyntaxButton({ variant, children, onClick }: SyntaxButtonProps) {
  const baseClasses = "font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors"
  
  const variantClasses = {
    primary: "bg-syntax-yellow-900 hover:bg-syntax-yellow-700 text-syntax-primary-900",
    secondary: "bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white",
    success: "bg-syntax-green-900 hover:bg-syntax-green-700 text-syntax-primary-900"
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

## 📚 Reference

### View Branding Showcase
To see all brand elements in action:
```bash
git checkout branding_showcase
npm run dev
```

Visit the branding showcase to see examples of all colors, typography, images, and components.

### Build Commands
```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint checking
```

### Documentation
- Color schemes: `docs/images/README.md`
- Image usage: Individual markdown files in `docs/images/`
- Font files: `public/fonts/clash-display/` and `public/fonts/clash-grotesk/`

## 🎉 You're Ready!

The template is now configured with the complete Syntax brand system. Use the colors, typography, and images as shown in the examples above to create consistent, on-brand web experiences.

For questions or additional examples, refer to the branding showcase branch or the documentation files included in the project. 