# NexusForge — AI-Powered Digital Growth Agency

A premium agency landing page built with **Next.js 15**, **Neo-Brutalist design**, and **Supabase** for data storage.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS (Neo-Brutalist design system)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Font**: Space Grotesk via `next/font`
- **Deployment**: Vercel / Netlify

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout + SEO metadata
│   ├── page.js             # Home page (all sections)
│   ├── globals.css          # Neo-Brutalist design system
│   ├── privacy/page.js     # Privacy policy
│   ├── terms/page.js       # Terms of service
│   └── api/
│       ├── contact/route.js     # POST → Supabase contacts
│       └── newsletter/route.js  # POST → Supabase subscribers
├── components/             # 16 React components
│   ├── Navbar.jsx           # Fixed nav (client)
│   ├── Hero.jsx             # Animated counters (client)
│   ├── Marquee.jsx          # Infinite scroll social proof
│   ├── ProblemSolution.jsx  # Comparison cards
│   ├── Services.jsx         # Feature grid
│   ├── Process.jsx          # 4-step flow
│   ├── Results.jsx          # Case study bento grid
│   ├── WhyUs.jsx            # Value props
│   ├── TechStack.jsx        # Tech badges
│   ├── Testimonials.jsx     # Asymmetric cards
│   ├── Pricing.jsx          # 3-tier pricing
│   ├── FAQ.jsx              # Accordion (client)
│   ├── CTABanner.jsx        # Full-width CTA
│   ├── Contact.jsx          # Form + API (client)
│   ├── Footer.jsx           # Newsletter + links (client)
│   └── ScrollReveal.jsx     # Intersection Observer
├── data/                   # Editable content
│   ├── siteConfig.js        # Brand, nav, stats, socials
│   ├── services.js          # 4 service objects
│   ├── testimonials.js      # 3 testimonials
│   ├── pricing.js           # 3 pricing tiers
│   └── faq.js               # 6 FAQ items
└── lib/
    └── supabase.js          # Supabase client
```

## Supabase Setup

Create these tables in your Supabase project:

```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now()
);
```

## Design System

| Token | Value |
|-------|-------|
| Primary | `#ffe17c` (Yellow) |
| Charcoal | `#171e19` |
| Sage | `#b7c6c2` |
| Borders | `2px solid #000` |
| Shadows | Hard (0 blur) — 4px / 8px / 12px |
| Buttons | Push effect: `translate(4px, 4px)` on hover |

## License

MIT
