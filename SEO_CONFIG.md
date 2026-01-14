# SEO Configuration Guide

## ⚙️ Environment Variables

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Your canonical website URL (e.g., `https://manicoca.com`)

**Optional (for schema updates):**
- Update address in `src/app/layout.tsx` JSON-LD schema if needed
- Update phone number in schema if different from current

## 📝 Where to Update

### 1. Site URL
- **Location**: `.env.local` or Vercel environment variables
- **Variable**: `NEXT_PUBLIC_SITE_URL`
- **Example**: `NEXT_PUBLIC_SITE_URL=https://manicoca.com`
- **Used in**: `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/robots.txt`

### 2. Business Address (JSON-LD Schema)
- **Location**: `src/app/layout.tsx` - JSON-LD structured data
- **Current**: Muji Square, 5th Floor, No. 164, 9th Main Road, HSR Layout, Bengaluru - 560102
- **Update if**: Address changes or needs refinement

### 3. Phone Number (JSON-LD Schema)
- **Location**: `src/app/layout.tsx` - JSON-LD structured data
- **Current**: +919632818089
- **Update if**: Phone number changes

### 4. Google Search Console Verification
- **Location**: `src/app/layout.tsx` - metadata.verification.google
- **Update when**: You receive verification code from Google Search Console

## 🔍 SEO Implementation Summary

### Backend-Only Changes (No UI Impact)
- ✅ Title template: "%s | M Mani & Co"
- ✅ Environment-based site URL
- ✅ Enhanced metadata for all pages
- ✅ JSON-LD structured data (Organization, AccountingService, WebSite, BreadcrumbList)
- ✅ Canonical URLs for all pages
- ✅ Redirects for common service routes
- ✅ Optimized robots.txt and sitemap.xml

### Location Strategy
- **Primary**: Bengaluru (canonical)
- **Synonym**: Bangalore (in metadata only, not visible content)
- **No doorway pages**: Single canonical location per page

---

**Last Updated**: [Current Date]
**Status**: Production Ready
