# Navigation Bar Logo Preview

## Current Layout (After Update)

```
┌─────────────────────────────────────────────────────────────────┐
│  NAVIGATION BAR (Height: 64px)                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────┐                                                       │
│  │      │  M Mani & Co                                         │
│  │  CA  │  CHARTERED ACCOUNTANTS                               │
│  │ Logo │                                                       │
│  │      │                                                       │
│  └──────┘                                                       │
│   48px   14px gap   18px + 12px                                │
│                                                                  │
│                    [Home] [About] [Services] [Resources] ...    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Visual Breakdown

### Desktop View (≥768px)
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [CA]  M Mani & Co          Home  About  Services ...       │
│  48px  CHARTERED ACCOUNTANTS                               │
│        18px + 12px                                          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Mobile View (<768px)
```
┌────────────────────────────────────────────┐
│                                            │
│  [CA]  M Mani & Co                    [☰] │
│  40px  CHARTERED ACCOUNTANTS              │
│        18px + 10px                         │
│                                            │
└────────────────────────────────────────────┘
```

## Specifications Summary

### CA Logo
- **Size**: 40px × 40px (mobile) / 48px × 48px (desktop)
- **Position**: Left side
- **Spacing**: 12-16px gap to text

### Firm Name: "M Mani & Co"
- **Font**: Source Serif 4 Bold
- **Size**: 18px
- **Color**: #004992 (Institutional Blue)
- **Letter Spacing**: -0.02em (tight)
- **Line Height**: 1.2
- **Position**: Right of CA logo, top line

### Subtitle: "CHARTERED ACCOUNTANTS"
- **Font**: Inter (Sans-serif)
- **Size**: 10px (mobile) / 12px (desktop)
- **Weight**: 600 (Semibold)
- **Color**: #334e68 (Primary-700)
- **Letter Spacing**: 0.16em (wide)
- **Text Transform**: UPPERCASE
- **Position**: Below "M Mani & Co"

## Spacing Details

```
[CA Logo] ←→ [M Mani & Co]
  48px        14px gap    18px text
```

**Total Logo Width**: ~80px (48px logo + 14px gap + 18px text width)

## Color Reference

- **Background**: White (#FFFFFF)
- **Firm Name**: #004992 (Dark Blue)
- **Navigation Links**: #004992 (hover: Gold accent)

## Alignment

- **Vertical**: All elements center-aligned in 64px height navbar
- **Horizontal**: CA logo and text aligned to left
- **Baseline**: Text baseline aligned with CA logo center

---

## What It Will Look Like

The navigation bar will display:
1. **CA India logo** (48px square) on the left
2. **"M Mani & Co"** text (18px, Source Serif 4 Bold) next to it
3. **14px spacing** between logo and text
4. **Navigation menu items** on the right (desktop) or hamburger menu (mobile)

The logo and text are horizontally aligned and vertically centered within the navigation bar.
