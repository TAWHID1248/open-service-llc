# IZZY SERVICE Inc. — React + Django Rebuild Plan

Source: 16 screenshots of the existing WordPress/PHP site (izzyservice.com) + site map.rtf.
Goal: rebuild the same site (property maintenance company — plumbing, HVAC, roofing,
renovation, painting, electrical) as a decoupled app: **Django REST API backend** +
**React (Vite) frontend**, with close visual fidelity to the screenshots.

## 1. Site inventory (from screenshots + site map)

| Page | URL (old) | Notes |
|---|---|---|
| Home | `/` | Hero, services grid (6), "Why Choose IZZY SERVICE Inc.", testimonials, FAQ preview, CTA banner |
| Services (list) | `/services/` | Sidebar service nav + 6 service cards (Electrical, Painting, HVAC, Plumbing, Renovation, Roofing) |
| Service detail | `/services/electricity/` | Title, intro, "Why Choose Us" bullets, "Our Range of Electrical Services" bullets, image gallery |
| Service detail | `/services/painting/`, `/services/painting-2/` | Same template, two painting variants (likely interior/exterior — duplicate slugs in source site) |
| Service detail | `/services/plumbing/` | Same template |
| Service detail | `/services/renovation/` | Same template |
| Service detail | `/services/roofing/` | Same template |
| About Us | `/about-us/` | Mission, "What We Do", "Why Choose Us", "Our Vision", "Get in Touch" |
| FAQ | `/faq/` | Accordion list of Q&A |
| Testimonials | `/testimonials/` | Grid of client quotes |
| Privacy Policy | `/privacy-policy/` | Standard legal sections (1–7) |
| Contact | `/contact/` | Contact form + company contact info |
| Category: Exterior Renovation | `/category/exterior-renovation/` | Blog-style post list + sidebar (search, recent posts, recent comments, featured service, random FAQ, services list) |
| Category: Home Maintenance | `/category/home-maintenance/` | Same blog template, different category |

**Repeated on every page:**
- Top bar: phone, email, address, social icons
- Header: logo + nav (HOME, OUR SERVICES, ABOUT US, FAQ, PRIVACY POLICY, CONTACT — CONTACT styled as a button)
- Blue gradient page-title banner under header
- CTA band: "Do You Need Reliable Property Maintenance?" + "LEARN MORE" button
- Footer: 3 columns (About IZZY SERVICE Inc., Random Testimonial, Quick Contact) + copyright bar with link list

**Color/style:** dark navy header text on white, blue (#1a4f8a-ish) gradient banners and CTA bands, black footer, yellow/orange accent for icons and arrows, card-based content blocks, sans-serif (Helvetica-like) type.

## 2. Architecture

```
izzyservice/
├── backend/                 Django project ("config") + app ("core")
│   ├── config/               settings, urls, wsgi/asgi
│   ├── core/                  models, serializers, views, admin, migrations
│   ├── media/                  uploaded images (gallery, testimonial photos)
│   └── manage.py
├── frontend/                 Vite + React app
│   ├── src/
│   │   ├── api/                axios client + endpoint functions
│   │   ├── components/         Header, Footer, TopBar, CTASection, ServiceCard,
│   │   │                       TestimonialCard, FAQAccordion, BlogSidebar
│   │   ├── pages/               Home, Services, ServiceDetail, AboutUs, FAQ,
│   │   │                        Testimonials, PrivacyPolicy, Contact,
│   │   │                        CategoryBlog
│   │   ├── styles/               theme (colors, variables) + per-component CSS
│   │   └── App.jsx, main.jsx, router
└── PROJECT_PLAN.md (this file)
```

- **Backend:** Django 5 + Django REST Framework + django-cors-headers. SQLite for dev.
  Django admin is the CMS — non-technical edits (new testimonial, FAQ, blog post) happen
  there without touching code.
- **Frontend:** Vite + React + React Router v6 + axios. Fetches all dynamic content from
  the API; layout/structure is in React components/CSS matching the screenshots.
- **Dev servers:** Django on `:8000` (`/api/...`), Vite on `:5173`, CORS allowed from
  `localhost:5173`.

## 3. Data models (Django `core` app)

- **Service** — name, slug, short_description, icon, hero_image, intro (rich text),
  why_choose_us (list of bullet items, JSON or related model), services_offered
  (bullets), gallery (related ServiceImage model), order
- **ServiceImage** — FK to Service, image, caption
- **Testimonial** — author_name, author_title, quote, is_featured
- **FAQ** — question, answer, order
- **Category** — name, slug (exterior-renovation, home-maintenance)
- **BlogPost** — title, slug, category (FK), excerpt, body, published_date
- **ContactMessage** — name, email, phone, subject, message, created_at (write-only
  from the API; read only in Django admin)

## 4. API endpoints (DRF)

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/services/` | GET | List all services (for home + services page) |
| `/api/services/<slug>/` | GET | Service detail incl. gallery |
| `/api/testimonials/` | GET | All / featured testimonials |
| `/api/faqs/` | GET | All FAQs, ordered |
| `/api/blog/?category=<slug>` | GET | Blog posts filtered by category |
| `/api/blog/<slug>/` | GET | Single post |
| `/api/contact/` | POST | Submit contact form → stored as ContactMessage |

## 5. Frontend pages & routes

| Route | Page | Key content from screenshots |
|---|---|---|
| `/` | Home | Hero CTA, 6 service tiles, "Why Choose Us", testimonials, FAQ teaser, CTA band |
| `/services` | Services | Sidebar nav + 6 cards linking to detail pages |
| `/services/:slug` | ServiceDetail | Reused for all 6 services, content from API |
| `/about-us` | About Us | Static sections matching screenshot copy |
| `/faq` | FAQ | Accordion, data from `/api/faqs/` |
| `/testimonials` | Testimonials | Grid, data from `/api/testimonials/` |
| `/privacy-policy` | Privacy Policy | Static legal copy (sections 1–7) |
| `/contact` | Contact | Form posting to `/api/contact/` + static contact info |
| `/category/:slug` | CategoryBlog | Reused for exterior-renovation & home-maintenance, posts from `/api/blog/` + sidebar widgets |

Shared on every route: `TopBar`, `Header`, `Footer`, and `CTASection` injected by a layout
wrapper.

## 6. Build order

1. Django project scaffold, settings (DRF, CORS, media), `core` app
2. Models + migrations
3. Serializers + API views/urls
4. Django admin registration for all models
5. Seed data (fixture or data migration) transcribed from the screenshots — real service
   copy, testimonials, FAQs, sample blog posts for both categories
6. Vite React scaffold, router, axios client, theme/CSS variables
7. Shared layout components (TopBar, Header, Footer, CTASection)
8. Home page
9. Services list + Service detail (dynamic)
10. About Us, FAQ, Testimonials, Privacy Policy
11. Contact page + working form submission
12. Category/blog pages
13. Run both servers together, click through every route, fix visual/console issues

## 7. Out of scope (unless you want it added later)

- User authentication / accounts
- Payment processing
- Real email delivery for contact form (will store in DB only; can wire up SMTP later)
- Production deployment config (Docker, hosting, domain) — can do as a follow-up

## 8. Already done

- Installed Node.js (v24 LTS via nvm) and confirmed Python 3.13 / Django 6.0 available
  locally, since neither Node nor Homebrew was present on this machine.

---
Once you approve this plan (or tell me what to change), I'll scaffold the backend and
frontend and work through the build order above.
