# Lumi Salon – Service-Based Demo Website (Oulu)

> **Note:** This site is designed as a demo for service-based businesses. Default language: Finnish, with option to select English (i18n-ready for future localization).

## Top Banner
- **Phone:** +358 40 123 4567
- **Email:** info@lumisalo.fi
- **Working Hours:** Mon–Fri 09:00–18:00 | Sat 10:00–16:00
- **Location:** Oulu, Finland
- **Socials:**
  - Facebook
  - Instagram

---

## Navigation
**Menu Items:**
1. Home
2. Services
3. Gallery
4. Testimonials
5. Contact

**CTA:** Book Now / Call Now

---

## Hero Section
### Headline
> Beautiful Hair, Confident You

### Subheadline
> Professional hair styling and beauty care in the heart of Oulu.

### Description
We specialize in modern cuts, color, and treatments tailored to your style. Our experienced stylists ensure you look and feel your best — every time.

### CTAs
- **Primary:** Book an Appointment
- **Secondary:** Call Now (+358 40 123 4567)

### Image / Media
- Full-width hero image of a stylist at work or salon interior.
- Descriptive alt text for accessibility.

---

## Services Section
### Section Title
> Our Services

### Section Intro
We offer professional hair and beauty services for all occasions. Here are some of our most popular options:

**Service List**
1. **Haircuts & Styling**
   - Women’s, Men’s, and Children’s cuts with personalized styling.
2. **Coloring & Highlights**
   - Expert color matching, balayage, and root touch-ups.
3. **Treatments**
   - Deep-conditioning, keratin, and scalp care.
4. **Makeup & Beauty**
   - Event and bridal makeup services.
5. **Nails & Brows**
   - Manicure, pedicure, and brow shaping.

**Optional CTA:** View Full Price List

---

## Pricing Section (Optional)
### Section Title
> Transparent Pricing

| Service | Starting From (€) |
|----------|-------------------|
| Women’s Haircut | 45 |
| Men’s Haircut | 35 |
| Hair Coloring | 80 |
| Blow Dry & Styling | 30 |
| Makeup | 60 |

_Note: Prices may vary depending on hair length and service details._

---

## Gallery Section
### Section Title
> Our Work

Showcase your recent transformations and salon atmosphere.

**Implementation Notes**
- Responsive image grid or masonry layout.
- Each image should have descriptive alt text (e.g., “Before and after balayage”).
- Optional: enable lightbox preview.

---

## Testimonials Section
### Section Title
> What Our Clients Say

**Testimonials**
1. “Absolutely love my new haircut! The staff were friendly and professional.”  
   — *Emma K.*

2. “Best salon experience in Oulu! Highly recommend for coloring and style.”  
   — *Laura S.*

3. “They really listen and deliver exactly what I wanted. I’ll definitely return!”  
   — *Mia T.*

Include star ratings or icons for visual context.

---

## Contact / Booking Section
### Section Title
> Book an Appointment

### Subheadline
> Ready for your next look? Get in touch with us today.

**Contact Form**
- Name (required)
- Email or Phone (required)
- Message / Service Request (textarea)
- Submit button: “Send Message”

**Implementation Tips**
- Use a service like **Formspree**, **Getform**, or **Netlify Forms** to handle submissions without a database.
- Include inline validation and clear labels for accessibility.

**Map**
- Embed a Google Map iframe showing Lumi Salo’s location in Oulu.

**Alternative CTA**
- “Prefer to call?” → clickable phone link: `tel:+358401234567`

---

## Footer
**Content**
- Short about text: “We’re a local salon in Oulu offering modern cuts, color, and beauty services since 2018.”
- Address: Kauppurienkatu 10, 90100 Oulu, Finland
- Contact: +358 40 123 4567 | info@lumisalo.fi
- Social icons: Facebook / Instagram
- Quick links: Home, Services, Gallery, Contact
- Copyright © 2025 Lumi Salo. All rights reserved.

---

## SEO & Accessibility Notes
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`.
- Each section should have one clear `<h2>` and readable hierarchy (`h3` for subtopics).
- Add `alt` text for all images.
- Ensure buttons and links have descriptive text (avoid “click here”).
- Include meta tags for description and Open Graph data for sharing.
- Site default language: **Finnish**, with English toggle available (i18n-ready).

---

## Suggested File/Component Mapping (Next.js 14)
app/
 ├─ [locale]/
 │   ├─ page.tsx             ← Server component: selects messages
 │   └─ HomeClient.tsx       ← Client component: orchestrates page sections
components/
 ├─ Header/
 │   ├─ TopBanner.tsx
 │   ├─ Navbar.tsx
 ├─ Hero/
 │   └─ Hero.tsx
 ├─ Services/
 │   └─ Services.tsx
 ├─ Pricing/
 │   └─ Pricing.tsx
 ├─ Gallery/
 │   └─ Gallery.tsx
 ├─ Testimonials/
 │   └─ Testimonials.tsx
 ├─ ContactForm/
 │   └─ ContactForm.tsx
 ├─ Footer/
 │   └─ Footer.tsx
messages/
 ├─ fi.json
 └─ en.json
styles/
 └─ globals.css