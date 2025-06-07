# Syntax Brand Images - Usage Guide

This directory contains all brand images and their usage guidelines for the Syntax project. All images are organized by category and optimized for web use.

## Image Structure

```
public/images/
├── company/          # Team member photos
├── icons/           # Brand logos and certification badges
├── stock/           # Stock photos for website content
└── graphics/        # (Reserved for future graphics)
```

## Quick Reference

### Company Images (Team Photos)

**Location**: `/public/images/company/`

| Image | Role | Usage | Size Recommendation |
|-------|------|-------|-------------------|
| `felix_ceo.webp` | CEO | About pages, leadership sections | 200x200px |
| `basti_sales.png` | Sales | Consultation CTAs, team sections | 200x200px |
| `dusko_sales.jpg` | Sales | Consultation CTAs, team sections | 200x200px |
| `julie_sales.jpg` | Sales | Consultation CTAs, team sections | 200x200px |
| `sousan_sales.jpeg` | Sales | Consultation CTAs, team sections | 200x200px |
| `sema_sales.png` | Sales | Consultation CTAs, team sections | 200x200px |

**Best for**: Trust-building, consultation booking pages, team introductions

### Brand Icons & Logos

**Location**: `/public/images/icons/`

#### Syntax Monogram
- `syntax_monogramm_dark_RGB.png` - Use on light backgrounds, min height 32px
- `syntax_monogramm_white.png` - Use on dark backgrounds (e.g., #060f38)

#### Certification Badges
- `azav-logo-navy.png` - AZAV certification for light backgrounds
- `azav-logo-white.png` - AZAV certification for dark backgrounds
- `Bundesagentur_für_Arbeit_logo.svg` - Only for government funding contexts

### Stock Images

**Location**: `/public/images/stock/`

| Image | Theme | Best Used For |
|-------|-------|---------------|
| `co-working-people-working-together.jpg` | Collaboration, Community | Tech courses, app development, testimonials |
| `colleagues-discussing-new-ideas-business-meeting.jpg` | Professional, Creative | Project-based learning, UX/UI design, agile topics |
| `menschen-die-spass-ihrer-pause-haben.jpg` | Casual, Social | Campus culture, team culture, social media |

## Usage in Next.js

### Using Images in Components

```tsx
import Image from 'next/image'

// Company team member
<Image 
  src="/images/company/felix_ceo.webp" 
  alt="Felix, CEO of Syntax"
  width={200}
  height={200}
  className="rounded-lg"
/>

// Brand logo
<Image 
  src="/images/icons/syntax_monogramm_dark_RGB.png" 
  alt="Syntax Logo"
  width={120}
  height={40}
  priority
/>

// Stock image
<Image 
  src="/images/stock/co-working-people-working-together.jpg" 
  alt="People collaborating on a project"
  fill
  className="object-cover"
/>
```

### Responsive Design Recommendations

- **Mobile**: 1-2 team photos per row
- **Desktop**: 3-4 team photos per row
- **Logo**: Maintain minimum 32px height
- **Stock images**: Use `object-cover` for hero sections

## Brand Guidelines

### Do's
- ✅ Use team photos with names and roles
- ✅ Maintain sufficient white space around logos
- ✅ Use AZAV badges with explanatory text
- ✅ Keep original aspect ratios

### Don'ts
- ❌ Apply heavy filters to team photos
- ❌ Use logos smaller than 32px height
- ❌ Distort or recolor certification badges
- ❌ Use images without proper context

## File Formats & Optimization

- **WebP**: Preferred for modern browsers (best compression)
- **PNG**: For logos and images requiring transparency
- **JPG**: For photographs without transparency
- **SVG**: For vector graphics (scalable)

All images are optimized for web use and ready for production deployment.

## Related Documentation

- [`company - usage description.md`](./company%20-%20usage%20description.md) - Detailed team photo guidelines
- [`icons - usage description.md`](./icons%20-%20usage%20description.md) - Logo and certification usage rules
- [`stock - usage description.md`](./stock%20-%20usage%20description.md) - Stock photo usage guidelines 