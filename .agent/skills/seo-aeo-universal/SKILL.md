---
name: seo-aeo-universal-agent
description: Universal SEO + AEO audit and implementation skill for autonomous agents. Platform-agnostic analysis with adaptive implementation for React/Next.js, WordPress, Static HTML, Shopify, and other platforms. Use when agent needs to audit any website, generate recommendations, and implement optimizations directly.
version: 4.0-universal
last_updated: 2026-03-14
---

# Universal SEO + AEO Agent Skill

## AGENT CAPABILITIES REQUIRED

**This skill assumes the agent can:**
- Access and read website files/directories
- Analyze live website URLs
- Parse HTML, JavaScript, CSS
- Edit files directly
- Execute bash commands (for build tools)
- Access browser/crawling tools
- Make HTTP requests

---

## WORKFLOW OVERVIEW

```
PHASE 1: PLATFORM DETECTION
↓
PHASE 2: UNIVERSAL AUDIT (platform-agnostic analysis)
↓
PHASE 3: GENERATE RECOMMENDATIONS (prioritized, platform-specific)
↓
PHASE 4: IMPLEMENT CHANGES (platform-adaptive procedures)
↓
PHASE 5: VALIDATE & VERIFY
↓
PHASE 6: REPORT RESULTS
```

---

## PHASE 1: PLATFORM DETECTION

### Procedure: Identify Website Platform

**Execute file system checks in this order:**

```
STEP 1: Check for React/Next.js/SPA
IF exists: package.json
  THEN read package.json
  CHECK dependencies for:
    - "react" → React site
    - "next" → Next.js
    - "gatsby" → Gatsby
    - "vite" → Vite
  CHECK for: src/, components/, .tsx, .jsx files
  PLATFORM: "React/SPA"
  BUILD_SYSTEM: [vite|next|gatsby|create-react-app]
  PROCEED_TO: React Implementation Guide

STEP 2: Check for WordPress
IF exists: wp-config.php OR wp-content/ directory
  THEN PLATFORM: "WordPress"
  CHECK for theme location: wp-content/themes/[active-theme]/
  PROCEED_TO: WordPress Implementation Guide

STEP 3: Check for Static Site Generators
IF exists: _config.yml → Jekyll
IF exists: config.toml → Hugo
IF exists: eleventy.config.js → Eleventy
  THEN PLATFORM: "Static Site Generator"
  PROCEED_TO: Static Site Implementation Guide

STEP 4: Check for Shopify
IF exists: config.yml with "theme" AND "store"
IF exists: layout/theme.liquid
  THEN PLATFORM: "Shopify"
  PROCEED_TO: Shopify Implementation Guide

STEP 5: Check for Static HTML
IF exists: Multiple .html files in root
IF NO build tools detected (no package.json, no wp-config.php)
  THEN PLATFORM: "Static HTML"
  PROCEED_TO: Static HTML Implementation Guide

STEP 6: Unknown Platform
IF none of above detected:
  PLATFORM: "Unknown"
  PROCEED_TO: Generic Recommendations (no direct implementation)
```

**Output from this phase:**
```json
{
  "platform": "React/SPA|WordPress|Static|Shopify|Unknown",
  "buildSystem": "vite|next|gatsby|webpack|none",
  "entryPoint": "/path/to/main/file",
  "activeTheme": "theme-name (if applicable)",
  "notes": "Additional platform-specific details"
}
```

---

## PHASE 2: UNIVERSAL AUDIT

**These checks are PLATFORM-AGNOSTIC** - they analyze the rendered output and live site behavior, regardless of how it's built.

### 2.1: LIVE SITE ANALYSIS

**Prerequisite:** Obtain live site URL

**Procedure: Fetch and Analyze Homepage**

```
1. FETCH https://domain.com
   - Store HTML response
   - Store HTTP headers
   - Note response time

2. EXTRACT key elements:
   - <title> tag
   - <meta name="description">
   - <meta name="robots">
   - All <h1>, <h2>, <h3> tags
   - Schema markup (JSON-LD in <script type="application/ld+json">)
   - All <link rel="canonical">
   - All internal/external links
   - All images (src, alt attributes)

3. CHECK robots.txt:
   - Fetch https://domain.com/robots.txt
   - Parse for User-agent rules
   - CHECK AI crawler access (GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, PerplexityBot, CCBot)

4. CHECK sitemap:
   - Fetch https://domain.com/sitemap.xml
   - Count total URLs
   - Verify valid XML format
```

**Procedure: Technical Performance Analysis**

```
1. RUN PageSpeed Insights (via API or Lighthouse)
   URL: https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=SITE_URL
   
   EXTRACT metrics:
   - LCP (Largest Contentful Paint) - Target: ≤2.5s
   - INP (Interaction to Next Paint) - Target: ≤200ms
   - CLS (Cumulative Layout Shift) - Target: ≤0.1
   - Performance Score (0-100)
   - Mobile vs Desktop scores

2. CHECK mobile-friendliness:
   - Responsive design
   - Font sizes ≥16px
   - Tap targets ≥44px
   - No horizontal scrolling

3. CHECK HTTPS:
   - All pages HTTPS
   - Valid SSL certificate
   - No mixed content warnings
```

**Procedure: Content Analysis**

```
FOR EACH important page (homepage, top 5 service pages, top 5 blog posts):

1. FETCH page HTML

2. EXTRACT content structure:
   - H1 count (should be exactly 1)
   - H2 count (minimum 3 for long content)
   - Total word count
   - Primary keyword presence
   - Reading level (calculate Flesch-Kincaid)

3. CHECK E-E-A-T signals:
   - Author name visible?
   - Author bio link?
   - "Last updated" date visible?
   - Contact information complete?

4. CHECK schema markup:
   - Extract all JSON-LD blocks
   - Validate against schema.org types
   - Identify missing schema opportunities

5. ANALYZE first paragraph:
   - Word count (for question pages, should be 40-60 for AEO)
   - Contains direct answer?
   - Includes primary keyword?
```

### 2.2: SEO FUNDAMENTALS AUDIT

**For each page analyzed, check:**

**Title Tags:**
```
EXTRACT: <title> content
VALIDATE:
  ✓ Length 50-60 characters
  ✓ Includes primary keyword
  ✓ Keyword in first 10 characters
  ✓ Unique across site
  ✓ No keyword stuffing (keyword appears ≤2 times)

IF fails: PRIORITY: HIGH
RECOMMENDATION: [specific improvement]
```

**Meta Descriptions:**
```
EXTRACT: <meta name="description" content="...">
VALIDATE:
  ✓ Exists
  ✓ Length 150-160 characters
  ✓ Includes primary keyword
  ✓ Contains call-to-action
  ✓ Unique across site

IF fails: PRIORITY: MEDIUM
```

**Header Hierarchy:**
```
EXTRACT: All H1-H6 tags
VALIDATE:
  ✓ Exactly one H1
  ✓ H1 contains primary keyword
  ✓ Logical hierarchy (no H4 before H3)
  ✓ H2s exist (≥3 for content >1000 words)

FOR AEO:
  CHECK: Are H2s in question format?
  IF NOT and page targets questions: PRIORITY: MEDIUM
```

**Images:**
```
EXTRACT: All <img> tags
FOR EACH image:
  CHECK:
    ✓ Has alt attribute
    ✓ Alt text descriptive (not keyword stuffing)
    ✓ Alt text <125 characters
    ✓ Modern format (WebP, AVIF)
    ✓ Lazy loading (loading="lazy")

COUNT images without alt: IF >0, PRIORITY: MEDIUM
```

**Internal Linking:**
```
EXTRACT: All internal <a> tags
VALIDATE:
  ✓ 3-5 internal links per 1000 words
  ✓ Descriptive anchor text (not "click here")
  ✓ Links to relevant pages
  ✓ No broken links

IDENTIFY orphan pages (zero internal links)
IF orphans exist: PRIORITY: HIGH
```

### 2.3: AEO AUDIT

**AI Crawler Access:**
```
PARSE: robots.txt
FOR EACH AI crawler: [GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, PerplexityBot, CCBot]
  IF Disallow: / OR blocked:
    PRIORITY: CRITICAL
    ISSUE: "AI crawler [name] is blocked"
    FIX: "Add 'User-agent: [name]' followed by 'Allow: /'"
```

**Schema Markup for AEO:**
```
EXTRACT: All JSON-LD schema blocks
CHECK for presence of:
  - FAQPage schema (highest AEO impact)
  - Article schema (author E-E-A-T)
  - Organization OR LocalBusiness schema
  - Person schema (author pages)

FOR EACH missing on appropriate pages:
  PRIORITY: HIGH
  RECOMMENDATION: [specific schema to add]
```

**Question-Format Content:**
```
ANALYZE H2 headers across site
COUNT: Headers in question format (What/How/Why/When/Where)
CALCULATE: Percentage of question headers

IF <20% AND site targets question keywords:
  PRIORITY: MEDIUM
  RECOMMENDATION: "Convert H2s to question format for AEO"
```

**Direct Answers:**
```
FOR pages targeting question keywords:
  EXTRACT first paragraph after H1
  COUNT words
  
  IF >100 words:
    PRIORITY: MEDIUM
    RECOMMENDATION: "Create concise 40-60 word direct answer in first paragraph"
  
  IF missing keyword in first paragraph:
    PRIORITY: HIGH
    RECOMMENDATION: "Include primary keyword in first paragraph answer"
```

### 2.4: LOCAL SEO AUDIT (if applicable)

**Detection: Is this a local business?**
```
CHECK for LocalBusiness schema OR
CHECK for NAP (Name, Address, Phone) on site

IF local business indicators present:
  EXECUTE local SEO audit
```

**NAP Consistency Check:**
```
EXTRACT NAP from:
  - Website footer
  - Contact page
  - About page
  - LocalBusiness schema (if present)

COMPARE all instances:
  IF any inconsistency found:
    PRIORITY: CRITICAL
    ISSUE: "NAP inconsistent: [list variations]"
    RECOMMENDATION: "Standardize to: [specific format]"
```

**LocalBusiness Schema:**
```
IF local business BUT no LocalBusiness schema:
  PRIORITY: CRITICAL
  RECOMMENDATION: "Add LocalBusiness schema to homepage"

IF LocalBusiness schema exists:
  VALIDATE required properties:
    - name
    - address (complete PostalAddress)
    - telephone
    - geo (latitude, longitude)
    - openingHoursSpecification
  
  FOR EACH missing property:
    PRIORITY: HIGH
```

---

## PHASE 3: GENERATE RECOMMENDATIONS

### Output Format: Structured Recommendations

**After audit completion, generate report in this format:**

```markdown
# SEO + AEO Audit Report
**Site:** [URL]
**Platform:** [Detected Platform]
**Date:** [YYYY-MM-DD]

## Executive Summary
- Total Issues Found: [count]
- Critical: [count]
- High Priority: [count]
- Medium Priority: [count]
- Low Priority: [count]

## Critical Issues (Fix Immediately)

### 1. [Issue Title]
**Priority:** CRITICAL
**Impact:** [Specific impact on SEO/AEO]
**Current State:** [What was found]
**Recommendation:** [Specific fix]
**Implementation:** [Platform-specific instructions - see Phase 4]
**Validation:** [How to verify fix]

[Repeat for each critical issue]

## High Priority Issues (Fix This Week)

[Same format as Critical]

## Medium Priority Issues (Fix This Month)

[Same format]

## Low Priority Issues (Nice to Have)

[Same format]

## AEO Opportunities

### AI Visibility Status
- AI Crawlers Allowed: [Yes/No - list blocked ones]
- FAQ Schema Present: [Yes/No - count of pages]
- Question-Format Headers: [X% of total]
- Citation-Worthy Content: [Assessment]

### Recommendations for AI Search
[Specific AEO improvements]

## Technical Health Summary
- Core Web Vitals: [LCP/INP/CLS scores]
- Mobile-Friendly: [Yes/No]
- HTTPS: [Yes/No/Mixed Content]
- Schema Markup: [Count of types implemented]

## Implementation Plan

### Week 1: Critical Fixes
- [ ] [Task 1]
- [ ] [Task 2]

### Week 2: High Priority
- [ ] [Task 1]
- [ ] [Task 2]

### Week 3-4: Medium Priority
- [ ] [Task 1]

## Estimated Impact
- Expected ranking improvement: [Conservative estimate]
- Expected AI citation increase: [Estimate]
- Expected traffic increase: [Percentage]

---
**Next Steps:** Proceed to Phase 4 (Implementation) for platform-specific procedures.
```

---

## PHASE 4: IMPLEMENTATION (Platform-Specific)

### 4.1: REACT/NEXT.JS/SPA IMPLEMENTATION

**Platform Detection Confirmed:** package.json with "react", .tsx/.jsx files

**Key Files to Edit:**
- Layout component (usually `src/Layout.tsx` or `app/layout.tsx`)
- Individual page components
- Public assets folder
- Build configuration

#### Implementation: AI Crawler Access (robots.txt)

```
LOCATION: public/robots.txt (React/Vite) OR public/robots.txt (Next.js)

PROCEDURE:
1. CHECK if public/robots.txt exists
   IF NOT: CREATE public/robots.txt

2. READ current content

3. ADD or UPDATE:
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

4. ENSURE no conflicting Disallow rules above these

5. SAVE file

6. IF Vite/React: File automatically served from public/
   IF Next.js: File automatically served from public/

7. VERIFY: After build/deploy, check https://domain.com/robots.txt
```

#### Implementation: Meta Tags (Title, Description)

**For React/Vite:**

```tsx
LOCATION: Find main Layout or App component

CURRENT CODE (typical):
import { Helmet } from 'react-helmet-async'; // or react-helmet

PROCEDURE:
1. IDENTIFY which component controls <head> (usually Layout or per-page)

2. UPDATE <Helmet> component:

<Helmet>
  <title>Optimized Title 50-60 Chars | Brand</title>
  <meta 
    name="description" 
    content="Optimized meta description 150-160 characters with primary keyword and call-to-action." 
  />
  <meta name="robots" content="index, follow" />
</Helmet>

3. FOR page-specific meta:
   - Add <Helmet> to individual page components
   - Override defaults with page-specific content

4. SAVE file

5. REBUILD: npm run build (or dev server auto-reloads)

6. VERIFY: View page source, check <title> and <meta> tags
```

**For Next.js:**

```tsx
LOCATION: app/layout.tsx (App Router) OR pages/_app.tsx (Pages Router)

PROCEDURE (App Router - Next.js 13+):
1. EDIT app/layout.tsx

2. ADD metadata export:

export const metadata = {
  title: 'Optimized Title 50-60 Chars | Brand',
  description: 'Optimized meta description 150-160 characters with primary keyword.',
  robots: 'index, follow',
}

3. FOR page-specific metadata:
   EDIT individual page.tsx files:
   
export const metadata = {
  title: 'Page-Specific Title',
  description: 'Page-specific description',
}

4. SAVE files

5. Next.js automatically generates <head> tags

6. VERIFY: View page source after dev server restart
```

#### Implementation: Schema Markup

**React/Next.js Schema Implementation:**

```tsx
LOCATION: Create src/components/Schema.tsx (React) OR components/Schema.tsx (Next.js)

PROCEDURE:
1. CREATE Schema component:

// Schema.tsx
import React from 'react';

interface SchemaProps {
  data: object;
}

export const Schema: React.FC<SchemaProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

2. CREATE schema data objects:

// schemaData.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-2-1234-5678",
    "contactType": "customer service"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is X?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct answer in 40-60 words."
      }
    }
  ]
};

3. ADD to Layout component:

import { Schema } from './components/Schema';
import { organizationSchema } from './schemaData';

// In return statement:
<Schema data={organizationSchema} />

4. FOR page-specific schema (FAQ, Article):
   ADD to individual page components with page-specific data

5. SAVE files

6. REBUILD

7. VALIDATE: 
   - View page source, check for <script type="application/ld+json">
   - Copy JSON to Google Rich Results Test
```

#### Implementation: Author Attribution

```tsx
LOCATION: Article/blog post components

PROCEDURE:
1. CREATE author data structure:

// types/author.ts
export interface Author {
  name: string;
  title: string;
  bio: string;
  image: string;
  credentials: string[];
}

2. CREATE Author component:

// components/Author.tsx
export const Author: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="author-byline">
      <img src={author.image} alt={author.name} />
      <div>
        <p className="author-name">{author.name}</p>
        <p className="author-title">{author.title}</p>
      </div>
    </div>
  );
};

3. ADD to article pages:

import { Author } from '@/components/Author';

// In page component:
<Author author={{
  name: "Full Name",
  title: "Position | Credentials",
  bio: "...",
  image: "/authors/name.jpg",
  credentials: ["Degree", "Certification"]
}} />

4. ADD Person schema:

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Full Name",
  "jobTitle": "Position",
  "url": "https://domain.com/about/author-name"
};

<Schema data={personSchema} />

5. SAVE, rebuild, verify
```

#### Implementation: "Last Updated" Date

```tsx
LOCATION: Article/content components

PROCEDURE:
1. ADD to page metadata or frontmatter:

// In page component or data:
const lastUpdated = "2026-03-14";

2. DISPLAY in component:

<p className="last-updated">
  Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
</p>

3. ADD to Article schema:

const articleSchema = {
  ...otherProps,
  "datePublished": "2025-01-15",
  "dateModified": "2026-03-14"
};

4. SAVE, rebuild, verify
```

#### Implementation: Question-Format Headers

```tsx
LOCATION: Page components with content

PROCEDURE:
1. IDENTIFY H2 tags that should be questions

CURRENT:
<h2>Benefits of AI Automation</h2>

CHANGE TO:
<h2>What Are the Benefits of AI Automation?</h2>

2. MAINTAIN keyword while converting to natural question

3. ENSURE first paragraph after question provides direct answer (40-60 words)

4. SAVE, rebuild, verify
```

#### Implementation: FAQ Section

```tsx
LOCATION: Service/product page components

PROCEDURE:
1. CREATE FAQ component:

// components/FAQ.tsx
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
};

2. CREATE FAQ data:

const faqData: FAQItem[] = [
  {
    question: "What is AI automation?",
    answer: "Direct answer in 40-60 words..."
  },
  // 5-10 questions total
];

3. ADD to page:

<FAQ items={faqData} />

4. ADD FAQ schema (see schema procedure above)

5. SAVE, rebuild, verify
```

---

### 4.2: WORDPRESS IMPLEMENTATION

**Platform Detection Confirmed:** wp-config.php, wp-content/ directory

**Access Methods:**
- Direct file editing (wp-content/themes/[theme]/)
- WordPress admin (wp-admin)
- Database (wp_options, wp_posts)
- Plugins (Yoast, Rank Math, etc.)

#### Implementation: AI Crawler Access

```
LOCATION: Root directory robots.txt

PROCEDURE:
1. CHECK if robots.txt exists in WordPress root

2. IF using SEO plugin (Yoast, Rank Math):
   - Navigate to plugin settings
   - Check "Tools" or "Edit robots.txt" section
   - ADD crawler rules via plugin interface
   
3. IF manual robots.txt:
   - Connect via FTP/SFTP or file manager
   - EDIT robots.txt in root directory
   - ADD AI crawler rules (see universal template)

4. VERIFY: https://domain.com/robots.txt

ALTERNATIVE via .htaccess:
- Generally not needed for robots.txt
- Stick to direct file or plugin approach
```

#### Implementation: Meta Tags

**Using Yoast SEO or Rank Math:**

```
PROCEDURE:
1. NAVIGATE to page/post in wp-admin

2. SCROLL to SEO meta box (usually below editor)

3. EDIT:
   - SEO Title: [optimized title 50-60 chars]
   - Meta Description: [optimized description 150-160 chars]

4. YOAST specific:
   - Focus Keyphrase: [primary keyword]
   - Check Yoast SEO analysis suggestions

5. SAVE page/post

6. VERIFY: View page source

FOR site-wide defaults:
- Yoast: SEO → Search Appearance → Content Types
- Rank Math: Rank Math → Titles & Meta
```

**Without SEO plugin (theme files):**

```
LOCATION: wp-content/themes/[active-theme]/header.php

PROCEDURE:
1. LOCATE <head> section

2. ADD custom meta tags:

<?php if (is_home() || is_front_page()): ?>
  <meta name="description" content="Homepage description" />
<?php elseif (is_page('contact')): ?>
  <meta name="description" content="Contact page description" />
<?php endif; ?>

3. BETTER: Use custom fields and display dynamically

4. SAVE file

5. VERIFY on live site
```

#### Implementation: Schema Markup

**Using Plugin (Recommended):**

```
PLUGIN OPTIONS:
- Schema Pro (premium)
- Schema & Structured Data for WP (free)
- Rank Math (includes schema)

PROCEDURE (Schema & Structured Data for WP):
1. INSTALL plugin from wp-admin → Plugins

2. NAVIGATE to Schema & Structured Data for WP settings

3. ENABLE schema types:
   - Organization (for homepage)
   - FAQ (for service pages)
   - Article (auto-applied to posts)
   - LocalBusiness (if applicable)

4. CONFIGURE each type:
   - Fill in business details
   - Map fields to WordPress data

5. FOR FAQ schema:
   - Install FAQ block or use Gutenberg FAQ block
   - Add questions/answers in page editor
   - Plugin auto-generates schema

6. VALIDATE: Google Rich Results Test

7. PUBLISH
```

**Manual Schema (theme files):**

```
LOCATION: wp-content/themes/[active-theme]/header.php OR footer.php

PROCEDURE:
1. ADD schema JSON-LD before </head> or before </body>:

<?php if (is_home() || is_front_page()): ?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "<?php bloginfo('name'); ?>",
  "url": "<?php echo home_url(); ?>",
  "logo": "<?php echo get_template_directory_uri(); ?>/images/logo.png"
}
</script>
<?php endif; ?>

2. FOR dynamic data:
   - Use WordPress functions: get_the_title(), get_the_author(), etc.
   - Build schema from post/page data

3. SAVE file

4. VERIFY in page source
```

#### Implementation: Author Attribution

```
PROCEDURE:
1. ENSURE authors have complete profiles:
   - wp-admin → Users → [Author]
   - Fill: Biographical Info, Website, Social links

2. DISPLAY author bio on posts:
   EDIT single.php or content-single.php in theme:

<div class="author-box">
  <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
  <h3><?php the_author(); ?></h3>
  <p><?php the_author_meta('description'); ?></p>
  <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>">
    View all posts by <?php the_author(); ?>
  </a>
</div>

3. ADD Person schema:
   - Use schema plugin
   - OR add manually in author template

4. SAVE theme file

5. VERIFY on post pages
```

#### Implementation: Last Updated Date

```
PROCEDURE:
1. DISPLAY modified date on posts:
   EDIT single.php in theme:

<?php if (get_the_time('U') !== get_the_modified_time('U')): ?>
  <p class="last-updated">
    Last updated: <?php the_modified_date(); ?>
  </p>
<?php endif; ?>

2. ADD to schema:
   IF using schema plugin: Map "dateModified" field
   IF manual: Use get_the_modified_date() in schema JSON

3. UPDATE posts:
   - Make minor edit
   - Click "Update" to refresh modified date

4. SAVE theme files

5. VERIFY on live posts
```

#### Implementation: FAQ Section

```
USING GUTENBERG BLOCKS:
1. EDIT page in block editor

2. ADD block: Search for "FAQ" or use Paragraph + Heading pattern

3. CREATE structure:
   <h2>Frequently Asked Questions</h2>
   <h3>Question 1?</h3>
   <p>Answer 1 in 40-60 words.</p>
   
4. REPEAT for 5-10 questions

5. INSTALL FAQ schema plugin OR manually add FAQ schema (see schema section)

6. PUBLISH page

USING PLUGIN:
- Ultimate FAQ plugin (free)
- Heroic KB (knowledge base with FAQs)
- Follow plugin documentation for setup
```

---

### 4.3: STATIC HTML IMPLEMENTATION

**Platform Detection Confirmed:** .html files in root, no build tools

**Direct file editing required**

#### Implementation: AI Crawler Access

```
LOCATION: robots.txt in root directory

PROCEDURE:
1. CREATE OR EDIT robots.txt file

2. ADD content:
User-agent: GPTBot
Allow: /

[... all AI crawlers as listed in universal template]

3. UPLOAD to root via FTP/SFTP

4. VERIFY: https://domain.com/robots.txt
```

#### Implementation: Meta Tags

```
LOCATION: Each .html file

PROCEDURE:
1. OPEN file in text editor

2. LOCATE <head> section

3. EDIT OR ADD:

<title>Optimized Title 50-60 Chars | Brand</title>
<meta name="description" content="Optimized description 150-160 characters with primary keyword.">
<meta name="robots" content="index, follow">

4. ENSURE each page has unique title and description

5. SAVE file

6. UPLOAD to server

7. VERIFY in page source
```

#### Implementation: Schema Markup

```
LOCATION: Each .html file

PROCEDURE:
1. OPEN file in text editor

2. LOCATE </head> tag

3. INSERT BEFORE </head>:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/images/logo.png"
}
</script>

4. FOR FAQ schema:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is X?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer in 40-60 words."
      }
    }
  ]
}
</script>

5. VALIDATE JSON syntax (use jsonlint.com)

6. SAVE file

7. UPLOAD to server

8. VERIFY with Google Rich Results Test
```

#### Implementation: Headers and Content

```
LOCATION: Each .html file

PROCEDURE:
1. IDENTIFY headers in HTML:
   <h2>Current Header</h2>

2. CONVERT to questions where appropriate:
   <h2>What Are the Benefits of X?</h2>

3. ADD direct answer after question header:
   <h2>What Are the Benefits of X?</h2>
   <p>Direct answer in 40-60 words with primary keyword and specific value proposition.</p>

4. SAVE file

5. UPLOAD

6. VERIFY on live site
```

#### Implementation: FAQ Section

```
LOCATION: Service/product .html files

PROCEDURE:
1. DECIDE where FAQ section will appear (usually before footer)

2. ADD HTML structure:

<section class="faq">
  <h2>Frequently Asked Questions</h2>
  
  <div class="faq-item">
    <h3>Question 1?</h3>
    <p>Answer 1 in 40-60 words.</p>
  </div>
  
  <div class="faq-item">
    <h3>Question 2?</h3>
    <p>Answer 2 in 40-60 words.</p>
  </div>
  
  <!-- Repeat for 5-10 questions -->
</section>

3. ADD CSS styling (in <style> or external CSS):

.faq {
  max-width: 800px;
  margin: 40px auto;
}

.faq-item {
  margin-bottom: 24px;
}

.faq-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

4. ADD FAQ schema (see schema section)

5. SAVE file

6. UPLOAD

7. VERIFY
```

---

### 4.4: SHOPIFY IMPLEMENTATION

**Platform Detection Confirmed:** config.yml, theme.liquid files

**Access via Shopify admin theme editor**

#### Implementation: AI Crawler Access

```
LOCATION: Shopify automatically generates robots.txt

PROCEDURE:
1. Shopify's default robots.txt allows all crawlers

2. IF custom robots.txt needed:
   - Create robots.txt.liquid in theme/layout or theme/templates
   - Shopify has limitations on custom robots.txt
   - Generally, default is sufficient for AI crawlers

3. VERIFY: https://yourstore.myshopify.com/robots.txt

NOTE: Shopify controls base robots.txt, limited customization
```

#### Implementation: Meta Tags

```
LOCATION: Admin → Online Store → Preferences OR theme.liquid

PROCEDURE (Store-wide):
1. Shopify Admin → Online Store → Preferences

2. EDIT:
   - Homepage title
   - Homepage meta description
   - Social sharing image

3. SAVE

PROCEDURE (Per-page):
1. FOR products:
   - Products → [Product] → Edit SEO
   - Custom title and description

2. FOR collections:
   - Collections → [Collection] → Edit SEO

3. FOR pages:
   - Pages → [Page] → Edit SEO

4. SAVE each page

PROCEDURE (Theme files):
1. Admin → Online Store → Themes → Actions → Edit code

2. LOCATE theme.liquid

3. FIND <head> section

4. Shopify uses Liquid variables:
   <title>{{ page_title }}{% if current_tags %} | {{ current_tags | join: ', ' }}{% endif %}</title>
   <meta name="description" content="{{ page_description }}">

5. CUSTOMIZE as needed

6. SAVE
```

#### Implementation: Schema Markup

```
LOCATION: theme.liquid OR section files

PROCEDURE:
1. Admin → Themes → Edit code

2. OPEN theme.liquid

3. ADD schema before </head>:

{% if template == 'index' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{{ shop.name }}",
  "url": "{{ shop.url }}",
  "logo": "{{ shop.logo | img_url: 'master' }}"
}
</script>
{% endif %}

4. FOR product schema (Shopify auto-generates Product schema):
   - Usually handled automatically
   - Verify in Google Rich Results Test

5. FOR FAQ schema:
   - Create FAQ section template
   - Add schema to specific pages/sections

6. SAVE theme files

7. VERIFY on live site
```

#### Implementation: FAQs on Product/Collection Pages

```
PROCEDURE:
1. CREATE custom section:
   - Sections → Add a new section
   - Name: faq-section.liquid

2. ADD Liquid code:

<div class="faq-section">
  <h2>{{ section.settings.heading }}</h2>
  {% for block in section.blocks %}
    <div class="faq-item">
      <h3>{{ block.settings.question }}</h3>
      <p>{{ block.settings.answer }}</p>
    </div>
  {% endfor %}
</div>

{% schema %}
{
  "name": "FAQ Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "Frequently Asked Questions"
    }
  ],
  "blocks": [
    {
      "type": "faq",
      "name": "FAQ Item",
      "settings": [
        {
          "type": "text",
          "id": "question",
          "label": "Question"
        },
        {
          "type": "textarea",
          "id": "answer",
          "label": "Answer"
        }
      ]
    }
  ]
}
{% endschema %}

3. ADD section to pages via theme customizer

4. INPUT questions/answers (40-60 words each)

5. ADD FAQ schema to section

6. SAVE and publish
```

---

### 4.5: GENERIC/UNKNOWN PLATFORM

**When platform cannot be definitively identified:**

**Provide recommendations WITHOUT direct implementation**

```
OUTPUT FORMAT:

# SEO Recommendations for [Domain]

## Platform Detection: Unable to determine

We were unable to identify your website platform automatically. Below are generic recommendations that can be adapted to any platform.

## Recommendations

### 1. [Issue Title]
**Current State:** [What was found]
**Recommendation:** [What should be done]
**Implementation:** Please implement the following changes through your CMS or contact your web developer:

[Code snippet or instructions]

**Validation:** After implementation, verify by [validation method]

---

FOR EACH recommendation:
- Provide HTML/code examples
- Explain WHERE the change should be made (generally)
- Provide validation steps
- DO NOT attempt to edit files (unknown structure)
```

---

## PHASE 5: VALIDATION & VERIFICATION

### Post-Implementation Checklist

**Execute after each implementation:**

```
1. VISUAL VERIFICATION:
   - Load page in browser
   - Confirm change visible to users
   - Check mobile view
   - Verify no layout breaking

2. HTML SOURCE VERIFICATION:
   - Right-click → View Page Source
   - Confirm code changes present
   - Check for syntax errors
   - Verify meta tags in <head>

3. SCHEMA VALIDATION:
   - Copy page URL
   - Run Google Rich Results Test: https://search.google.com/test/rich-results
   - Confirm no errors
   - Document any warnings

4. PERFORMANCE CHECK:
   - Run PageSpeed Insights
   - Compare Core Web Vitals to baseline
   - IF degraded: Identify cause, fix or rollback

5. MOBILE CHECK:
   - Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
   - Verify responsive display
   - Check tap targets, readability

6. ROBOTS.TXT VERIFICATION:
   - Visit https://domain.com/robots.txt
   - Verify changes present
   - Test with Google Robots Testing Tool (GSC)

7. CRAWLABILITY CHECK:
   - IF Google Search Console access:
     * Submit URL for indexing
     * Check for crawl errors
   - ELSE: Wait 48-72 hours, monitor

8. FUNCTIONAL TESTING:
   - Click all modified links
   - Test any interactive elements
   - Verify forms still work (if applicable)

9. BACKUP VERIFICATION:
   - IF made file changes: Confirm backup exists
   - Document what was changed

10. DOCUMENTATION:
    - Log: File changed, what was changed, when
    - Note: Validation results
    - Flag: Any issues for follow-up
```

### Build/Deploy Verification (React/Next.js/SPA)

```
AFTER file changes in React/Next.js:

1. REBUILD application:
   npm run build
   
   OR for development:
   npm run dev

2. CHECK for build errors:
   - Read console output
   - Fix any TypeScript/ESLint errors
   - Re-build until clean

3. TEST locally:
   - Navigate to localhost:3000 (or configured port)
   - Verify changes appear
   - Check console for runtime errors

4. DEPLOY to production:
   - Follow platform deployment process (Vercel, Netlify, etc.)
   - Wait for deployment completion

5. VERIFY on live site:
   - Visit production URL
   - Re-run all validation checks
   - Confirm changes deployed correctly

6. CLEAR CDN cache if applicable:
   - Some hosts cache aggressively
   - Manually purge cache if changes don't appear
```

---

## PHASE 6: REPORTING & MONITORING

### Generate Implementation Report

```markdown
# SEO Implementation Report
**Site:** [URL]
**Platform:** [Platform]
**Implementation Date:** [YYYY-MM-DD]

## Changes Implemented

### Critical Fixes Completed
- [X] Issue 1: [Description]
  - **Action Taken:** [Specific change made]
  - **Files Modified:** [List files]
  - **Validation:** [Result]
  
- [X] Issue 2: [Description]
  - ...

### High Priority Fixes Completed
- [X] Issue 3: [Description]
  - ...

## Validation Results

### Schema Markup
- Organization Schema: ✓ Valid
- FAQ Schema: ✓ Valid (3 pages)
- Article Schema: ✓ Valid (all blog posts)

### Technical Health
- Core Web Vitals: LCP 2.1s ✓ | INP 180ms ✓ | CLS 0.08 ✓
- Mobile-Friendly: ✓ Passed
- HTTPS: ✓ All pages secure

### AI Crawler Access
- ✓ All AI crawlers allowed
- ✓ robots.txt verified

## Before/After Comparison

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Pages with Schema | 0 | 15 | +15 |
| Question Headers | 5% | 45% | +40% |
| AI Crawlers Allowed | 0/6 | 6/6 | 100% |
| Mobile-Friendly | No | Yes | ✓ |

## Pending Items

### Medium Priority (Scheduled for next week)
- [ ] Issue X: [Description]
- [ ] Issue Y: [Description]

### Low Priority (Backlog)
- [ ] Issue Z: [Description]

## Expected Impact Timeline

**Week 1-2:**
- Schema markup detected by Google
- Improved mobile experience

**Week 3-4:**
- Potential ranking improvements
- AI citation opportunities increase

**Month 2-3:**
- Measurable traffic increase expected
- Monitor keyword rankings

## Monitoring Plan

### Weekly Checks:
- Google Search Console (errors, impressions)
- Keyword rankings (top 10 targets)
- AI citation spot-check (ChatGPT, Perplexity)

### Monthly Review:
- Traffic trends
- Ranking changes
- Conversion rate
- AI visibility growth

## Next Steps

1. Monitor implementation for 2 weeks
2. Address any technical issues
3. Begin medium-priority optimizations
4. Schedule 30-day review

---
**Implementation Status:** Complete
**Validation Status:** All checks passed
**Deployment Status:** Live on production
```

### Ongoing Monitoring Procedures

**Weekly Monitoring (Autonomous Agent Task):**

```
EXECUTE every 7 days:

1. KEYWORD RANKING CHECK:
   - Check top 10 target keywords
   - Document position changes
   - Note new rankings in top 100

2. AI CITATION CHECK:
   - Query ChatGPT: "best [category] in [location]"
   - Query Perplexity: Same
   - Check Google for AI Overview
   - Document: Cited? Position? Context?

3. TECHNICAL HEALTH:
   - Google Search Console: New errors?
   - Core Web Vitals: Any degradation?
   - Mobile usability: New issues?

4. ANALYTICS REVIEW:
   - Traffic trends (up/down/stable)
   - Top landing pages
   - Conversion rate

5. GENERATE ALERT if:
   - Rankings drop >10 positions
   - Core Web Vitals enter "Poor" range
   - New critical errors in GSC
   - Traffic drops >20% week-over-week

6. LOG results for trend analysis
```

**Monthly Reporting (Autonomous Agent Task):**

```
EXECUTE on 1st of each month:

1. COMPILE data from weekly checks

2. ANALYZE trends:
   - Ranking trajectory (improving/declining/stable)
   - Traffic trends (YoY, MoM)
   - AI visibility growth
   - Technical health summary

3. CALCULATE impact:
   - Organic traffic change (%)
   - Keyword rankings gained/lost
   - AI citations change
   - Conversions from organic

4. GENERATE recommendations:
   - Content refresh opportunities
   - New schema implementations
   - Technical optimizations
   - Link building targets

5. OUTPUT monthly report (see template above)

6. FLAG any issues requiring human review
```

---

## APPENDIX: QUICK REFERENCE

### Priority Decision Matrix

```
IF issue prevents indexing OR blocks AI:
  THEN PRIORITY: CRITICAL
  IMPLEMENT: Within 24 hours

ELSE IF issue significantly impacts rankings:
  THEN PRIORITY: HIGH
  IMPLEMENT: Within 1 week

ELSE IF issue moderately impacts SEO/AEO:
  THEN PRIORITY: MEDIUM
  IMPLEMENT: Within 1 month

ELSE:
  PRIORITY: LOW
  IMPLEMENT: When capacity allows
```

### Platform-Specific File Locations Reference

```
React/Vite:
- robots.txt: public/robots.txt
- Meta tags: src/Layout.tsx or index.html
- Schema: src/components/Schema.tsx
- Styles: src/index.css or component files

Next.js:
- robots.txt: public/robots.txt
- Meta tags: app/layout.tsx or pages/_app.tsx
- Schema: components/Schema.tsx
- Styles: app/globals.css or component files

WordPress:
- robots.txt: root/robots.txt
- Meta tags: Via plugin OR theme/header.php
- Schema: Via plugin OR theme files
- Styles: wp-content/themes/[theme]/style.css

Static HTML:
- robots.txt: root/robots.txt
- Meta tags: Each .html file <head>
- Schema: Each .html file <head>
- Styles: css/styles.css or <style> tags

Shopify:
- robots.txt: Auto-generated (limited customization)
- Meta tags: Admin → Preferences OR theme.liquid
- Schema: theme.liquid or section files
- Styles: theme.scss.liquid or Assets/
```

### Essential Validation URLs

```
Google Rich Results Test:
https://search.google.com/test/rich-results

Google Mobile-Friendly Test:
https://search.google.com/test/mobile-friendly

PageSpeed Insights:
https://pagespeed.web.dev/

Google Search Console:
https://search.google.com/search-console

JSON-LD Validator:
https://jsonlint.com/

Schema.org Validator:
https://validator.schema.org/
```

### AI Crawler User-Agent List

```
GPTBot
ChatGPT-User
Google-Extended
anthropic-ai
PerplexityBot
CCBot
ClaudeBot
Omgilibot
Amazonbot
cohere-ai
```

---

## END OF SKILL FILE

**This skill enables autonomous agents to:**
1. Detect any website platform
2. Execute comprehensive SEO + AEO audits
3. Generate prioritized, actionable recommendations
4. Implement changes directly (platform-adaptive)
5. Validate all implementations
6. Monitor ongoing performance
7. Report results to humans

**Human Review Required For:**
- Final approval before deploying to production
- Access credentials (if needed)
- Strategic decisions (which keywords to target)
- Budget allocation (paid tools, backlinks)
- Brand voice/content tone

**Agent Autonomy Recommended For:**
- Technical audits
- Code implementations
- Schema markup
- Meta tag optimization
- Ongoing monitoring
- Weekly/monthly reporting

---

**Version:** 4.0-universal
**Last Updated:** March 14, 2026
**Platforms Supported:** React/Next.js/SPA, WordPress, Static HTML, Shopify, Generic
**License:** MIT
