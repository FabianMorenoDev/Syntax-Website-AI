# Color Palette – Syntax Brand Design

This color palette defines the visual identity of the **Syntax** brand. It provides a flexible and consistent foundation for UI designs in web and app applications, optimized for readability, clear visual hierarchy, and strong conversion.

---

## Usage Guidelines

| Color Group               | Purpose                                                                        |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Deep Purple (Primary)** | Main brand color for navigation, headlines, buttons, high-contrast cards       |
| **Purple (Secondary)**    | Accent color for sections, secondary buttons, info boxes, illustrations        |
| **Yellow**                | Highlights & Call-to-Actions: buttons, warning boxes, visual markers           |
| **Pink**                  | Emotional branding, illustrations, creative topic areas                        |
| **Green**                 | Positive status messages (Success), fresh modules, trustworthy content         |
| **Blue**                  | Structured backgrounds, neutral areas, sections with calm and informative tone |

---

## Syntax Deep Purple (Primary)

| Level | HEX       | Usage                                  |
| ----- | --------- | -------------------------------------- |
| 1     | `#060f38` | Primary headlines, CTA buttons         |
| 2     | `#383f60` | Navigation bars, card backgrounds      |
| 3     | `#6a6f88` | Subheadlines, hover states             |
| 4     | `#9b9faf` | Disabled states, borders               |
| 5     | `#cdcfd7` | Section backgrounds, contrast elements |

---

## Syntax Purple (Secondary)

| Level | HEX       | Usage                           |
| ----- | --------- | ------------------------------- |
| 1     | `#7656fd` | Illustrations, hover highlights |
| 2     | `#9178fd` | Secondary buttons               |
| 3     | `#ad9afe` | Sections with creative focus    |
| 4     | `#c8bcfe` | Card backgrounds                |
| 5     | `#e4ddff` | Very light UI areas             |

---

## Syntax Yellow

| Level | HEX       | Usage                                |
| ----- | --------- | ------------------------------------ |
| 1     | `#fff351` | Primary CTA button (e.g. “Book now”) |
| 2     | `#fff573` | Secondary warning messages           |
| 3     | `#fff796` | Background highlights                |
| 4     | `#fffab9` | Tooltip / card backgrounds           |
| 5     | `#fffcdc` | Subtle color accents in layout       |

---

## Syntax Pink

| Level | HEX       | Usage                              |
| ----- | --------- | ---------------------------------- |
| 1     | `#e834b6` | Accent color in infographics       |
| 2     | `#ed5dc4` | CTA alternatives                   |
| 3     | `#f284d3` | Illustrations and visuals          |
| 4     | `#f6ade1` | Themed blocks with creative effect |
| 5     | `#fad6f0` | Very soft design accents           |

---

## Syntax Green

| Level | HEX       | Usage                                            |
| ----- | --------- | ------------------------------------------------ |
| 1     | `#56e57d` | Positive messages ("Success", "Congratulations") |
| 2     | `#7aea98` | Subtle CTAs, card areas                          |
| 3     | `#9aefb1` | Status indicators                                |
| 4     | `#bcf5cb` | Illustrations                                    |
| 5     | `#dcfae4` | Very light, calming areas                        |

---

## Syntax Blue

| Level | HEX       | Usage                               |
| ----- | --------- | ----------------------------------- |
| 1     | `#c8ddf2` | Standard section backgrounds        |
| 2     | `#d3e4f5` | Cards with informative tone         |
| 3     | `#ddebf7` | Text box backgrounds                |
| 4     | `#e8f1fa` | Input fields, tabs                  |
| 5     | `#f4f8fc` | Very light layout areas, whitespace |

---

## Example Applications (UI Cards)

* **Dark Card (Deep Purple + Yellow):** Ideal for maximum conversion (hero card with CTA).
* **Light Variants (Green, Purple, Blue):** To structure content, e.g. different topic sections.
* **Secondary Call-to-Actions:** As outline buttons or on pastel-colored backgrounds.

---

> This system enables scalable, brand-consistent, and accessible UI design. It's ideal for digital platforms that aim to convey clarity, trust, and energy.

---

## Tailwind Config

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        syntax: {
          // Deep Purple (Primary)
          primary: {
            900: '#060f38',
            700: '#383f60',
            500: '#6a6f88',
            300: '#9b9faf',
            100: '#cdcfd7',
          },
          // Purple (Secondary)
          purple: {
            900: '#7656fd',
            700: '#9178fd',
            500: '#ad9afe',
            300: '#c8bcfe',
            100: '#e4ddff',
          },
          // Yellow (CTA / Attention)
          yellow: {
            900: '#fff351',
            700: '#fff573',
            500: '#fff796',
            300: '#fffab9',
            100: '#fffcdc',
          },
          // Pink (Accent / Playful)
          pink: {
            900: '#e834b6',
            700: '#ed5dc4',
            500: '#f284d3',
            300: '#f6ade1',
            100: '#fad6f0',
          },
          // Green (Success / Trust)
          green: {
            900: '#56e57d',
            700: '#7aea98',
            500: '#9aefb1',
            300: '#bcf5cb',
            100: '#dcfae4',
          },
          // Blue (Neutral / Backgrounds)
          blue: {
            900: '#c8ddf2',
            700: '#d3e4f5',
            500: '#ddebf7',
            300: '#e8f1fa',
            100: '#f4f8fc',
          },
        },
      },
    },
  },
};
```
