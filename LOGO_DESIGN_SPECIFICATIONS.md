# Logo Design Specifications
## M MANI & CO - Merged with CA Logo

### Font Specifications for Firm Name

#### Primary Font: Source Serif 4
- **Font Family**: Source Serif 4 (Google Fonts)
- **Font Weight**: 700 (Bold)
- **Font Style**: Regular (not italic)
- **Font Source**: [Google Fonts - Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4)

#### Typography Details

**Main Firm Name: "M MANI & CO"**
- **Font Size**: 
  - Recommended for logo: **24px - 32px** (depending on logo size)
  - For header use: 16px (mobile) / 18px (desktop)
  - For large displays: 32px - 48px
- **Letter Spacing**: -0.02em to -0.03em (tight tracking)
- **Line Height**: 1.1 (tight, single line)
- **Color**: 
  - Primary: `#004992` (Institutional Blue - RGB: 0, 73, 146)
  - Alternative: `#003366` (Deeper blue for contrast)
- **Text Transform**: Uppercase (optional, but current design uses mixed case)

**Subtitle: "Chartered Accountants"**
- **Font Family**: Inter (Sans-serif) or Source Serif 4 (lighter weight)
- **Font Weight**: 600 (Semibold)
- **Font Size**: 
  - Recommended for logo: **10px - 12px**
  - For header use: 10px (mobile) / 12px (desktop)
- **Letter Spacing**: 0.16em (wide tracking)
- **Text Transform**: UPPERCASE
- **Color**: `#334e68` (Primary-700 - lighter blue)

---

### Logo Layout Recommendations

#### Option 1: Horizontal Layout
```
[CA Logo]  M MANI & CO
           CHARTERED ACCOUNTANTS
```

**Spacing:**
- Gap between CA logo and text: 12px - 16px
- Gap between firm name and subtitle: 4px - 6px
- Logo height: Match text height (approximately 32px - 40px)

#### Option 2: Vertical Layout
```
[CA Logo]
M MANI & CO
CHARTERED ACCOUNTANTS
```

**Spacing:**
- Gap between CA logo and text: 8px - 12px
- Gap between firm name and subtitle: 4px - 6px
- Logo width: Match text width or slightly smaller

---

### Color Specifications

#### Primary Colors
- **Firm Name**: `#004992` (Institutional Blue)
  - RGB: R:0, G:73, B:146
  - CMYK: C:100, M:50, Y:0, K:43
  - Hex: #004992

- **Subtitle**: `#334e68` (Primary-700)
  - RGB: R:51, G:78, B:104
  - Hex: #334e68

#### Alternative Colors (for different backgrounds)
- **White Background**: Use primary colors above
- **Dark Background**: Use white (#FFFFFF) or light blue (#E0E7EF)
- **Blue Background**: Use white (#FFFFFF) or gold accent (#d4af37)

---

### Font Files & Download

**Source Serif 4 Bold (700)**
- Download from: https://fonts.google.com/specimen/Source+Serif+4
- Select weight: 700 (Bold)
- Download format: TTF or OTF (for design software)

**Direct Google Fonts Link:**
```
https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@700&display=swap
```

---

### Design Software Settings

#### Adobe Illustrator / Photoshop
```
Font: Source Serif 4
Weight: Bold (700)
Size: 28px (adjust based on CA logo size)
Tracking: -20 to -30 (tight)
Color: #004992
```

#### Canva / Figma
```
Font: Source Serif 4
Weight: Bold
Size: 28px
Letter Spacing: -2% to -3%
Color: #004992
```

---

### Logo Size Recommendations

#### For Website Header
- **Height**: 40px - 48px total (including CA logo)
- **Firm Name**: 18px - 20px
- **Subtitle**: 10px - 12px

#### For Print Materials
- **Height**: 60px - 80px total
- **Firm Name**: 28px - 32px
- **Subtitle**: 14px - 16px

#### For Business Cards
- **Height**: 30px - 35px total
- **Firm Name**: 14px - 16px
- **Subtitle**: 8px - 10px

---

### Typography Hierarchy

```
M MANI & CO          ← Source Serif 4, Bold (700), 28px, #004992
CHARTERED ACCOUNTANTS ← Inter/Source Serif 4, Semibold (600), 12px, #334e68
```

---

### Current Website Implementation

The website currently uses:
- **Font Variable**: `var(--font-serif-pro)` which maps to Source Serif 4
- **CSS Class**: `font-bold` (700 weight)
- **Size**: `text-base md:text-lg` (16px mobile, 18px desktop)
- **Color**: `text-primary-900` (#004992)

---

### Notes for Logo Creation

1. **Maintain Proportions**: Ensure CA logo and text are visually balanced
2. **Spacing**: Keep consistent spacing between logo and text
3. **Alignment**: Align CA logo with the baseline of the firm name
4. **Scalability**: Create vector format (SVG, AI, EPS) for best quality
5. **Versions**: Create versions for:
   - Light backgrounds (use primary blue)
   - Dark backgrounds (use white)
   - Single color (black/blue for print)

---

### Example CSS (for reference)

```css
.firm-name {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #004992;
  line-height: 1.1;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.16em;
  color: #334e68;
  text-transform: uppercase;
}
```

---

### Quick Reference

| Element | Font | Weight | Size | Color | Tracking |
|---------|------|--------|------|-------|----------|
| M MANI & CO | Source Serif 4 | 700 (Bold) | 28px | #004992 | -0.02em |
| Chartered Accountants | Inter / Source Serif 4 | 600 (Semibold) | 12px | #334e68 | 0.16em |

---

**Ready to merge!** Use these specifications to create a professional logo that matches the website design perfectly.
