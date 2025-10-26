# Oath Website

Marketing website for Oath - Honor your commitments with intelligent reminders.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom Oath design tokens
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

### Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Project Structure

```
oath-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── faq/               # FAQ page
│   ├── features/          # Features page
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   └── layout.tsx         # Root layout with SEO
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── FeatureCard.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── screenshots/   # App screenshots
├── styles/
│   ├── globals.css        # Global styles
│   └── oath-design-tokens.css  # Brand design tokens
└── tailwind.config.ts     # Tailwind configuration
```

## Pages

- **Home (/):** Landing page with hero, features, how it works, AI showcase, and CTAs
- **Features (/features):** Detailed feature breakdowns
- **About (/about):** Mission, values, and brand story
- **FAQ (/faq):** Frequently asked questions
- **Privacy Policy (/privacy):** Privacy policy for App Store compliance
- **Terms of Service (/terms):** Terms of service for App Store compliance
- **Contact (/contact):** Contact form and information

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. Push this repository to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Next.js and configure everything

6. Click "Deploy"

### Connect Custom Domain

1. In your Vercel project dashboard, go to "Settings" → "Domains"

2. Add your custom domain

3. Update your domain's DNS records:
   - For apex domain (oath.app): Add A record pointing to Vercel's IP
   - For www subdomain: Add CNAME record pointing to your Vercel deployment

4. Vercel will automatically provision SSL certificates

## Environment Variables

No environment variables required for basic deployment.

If you want to add a contact form backend:
- Add form service API keys to Vercel environment variables
- Update `/app/contact/page.tsx` to integrate with your chosen service (Formspree, Vercel Forms, etc.)

## Brand Compliance

This website is built to match the Oath iOS app brand:
- Uses exact brand colors (Emerald #0FAA77)
- System font stack (no custom web fonts)
- Direct, honest copy tone
- No gamification or excessive motivation
- Clean, minimal design
- All design tokens from OathBrandKit

## App Store Compliance

Required pages for App Store submission:
- ✅ Privacy Policy (/privacy)
- ✅ Terms of Service (/terms)
- ✅ Contact page (/contact)

Make sure these URLs are publicly accessible before submitting to the App Store.

## Performance

- Lighthouse score target: >90
- All pages are statically generated
- Images should be optimized (WebP format recommended)
- Minimal JavaScript bundle

## License

Proprietary - Oath. All rights reserved.
