# Quick Start Guide - LULé Transportation Website

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
cd "lule-eco-deliveries-main 3"
npm install
```

### Development
```bash
npm run dev
```
Visit: `http://localhost:8080`

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Two-tier header with CTAs
│   ├── Hero.tsx            # Main hero with animations
│   ├── Services.tsx        # Animated services section
│   ├── Contact.tsx         # Contact form component
│   ├── MobileMenu.tsx      # Mobile navigation
│   └── ...
├── pages/
│   ├── Index.tsx           # Home page
│   ├── Contact.tsx         # Contact page
│   ├── Tracking.tsx        # Delivery tracking page
│   └── NotFound.tsx        # 404 page
├── assets/
│   ├── hero-truck.png      # Main hero image
│   ├── hero-van.png
│   ├── mini-van.png
│   └── lule-logo.png
└── App.tsx                 # Main app with routing
```

## 🎨 Key Features

### Header
- **Top Bar**: Language switcher, Tracking, Quote buttons
- **Main Nav**: Logo (clickable to home), navigation links
- **Mobile**: Hamburger menu with full-screen overlay

### Hero Section
- Animated headline with environmental focus
- Large fleet showcase image
- Two prominent CTA cards:
  - "ENVOI ET LIVRAISON"
  - "COLLECTE"

### Pages
1. **Home** (`/`) - Full landing page
2. **Contact** (`/contact`) - Contact form and info
3. **Tracking** (`/tracking`) - Delivery tracking

## 🎭 Animations

All animations are powered by **Framer Motion** for optimal performance:

- **Fade in**: Content appears smoothly
- **Slide in**: Elements slide from bottom
- **Hover effects**: Cards lift and scale
- **Scroll triggers**: Animate when scrolling into view
- **Stagger**: Sequential animations for lists

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` or component classes:
- Primary Blue: `bg-blue-700`
- Orange CTA: `variant="orange"`
- Green Text: `text-green-600`

### Content
- Hero text: `src/components/Hero.tsx`
- Services: `src/components/Services.tsx`
- Contact info: `src/components/Contact.tsx`, `src/components/Footer.tsx`

### Images
Replace images in `src/assets/`:
- Logo: `lule-logo.png`
- Hero: `hero-truck.png`
- Icons: `express-delivery-icon.jpg`, etc.

## 📱 Responsive Design

Breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

Test on:
- Chrome DevTools (all device sizes)
- Real mobile devices
- Different browsers

## 🔍 SEO

### Meta Tags
Edit `index.html`:
- Title
- Description
- Keywords
- Open Graph tags
- Schema.org structured data

### Content
- Use semantic HTML (`<header>`, `<main>`, `<section>`)
- Add alt text to all images
- Use proper heading hierarchy (H1 → H6)

## 🚨 Common Issues

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

### Images Not Loading
- Check file names match imports (case-sensitive)
- Verify images exist in `src/assets/`
- Check import paths use `@/assets/...`

### Animations Not Working
- Verify `framer-motion` is installed: `npm list framer-motion`
- Install if missing: `npm install framer-motion`

### 404 on GitHub Pages
- Check `vite.config.ts` base matches repo name
- Verify GitHub Pages is enabled in repo settings
- Clear browser cache

## 📊 Performance Tips

1. **Optimize Images**:
   ```bash
   # Use tools like:
   - tinypng.com
   - squoosh.app
   - ImageOptim (Mac)
   ```

2. **Code Splitting**:
   ```typescript
   // Use dynamic imports for large components
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```

3. **Bundle Analysis**:
   ```bash
   npm run build -- --mode analysis
   ```

## 🌐 Deployment

### GitHub Pages
1. Update `vite.config.ts` base URL
2. Run `npm run deploy`
3. Enable GitHub Pages in repo settings

### Other Platforms
- **Vercel**: Connect repo, auto-deploy
- **Netlify**: Drag & drop `dist` folder
- **Custom Server**: Upload `dist` folder contents

## 📞 Support

### Contact Information
- Phone: +33 6 51 88 81 44
- Email: idriss.attobi@gmail.com
- Address: 51 boulevard Alfred Wallach, 68100 Mulhouse

### Useful Links
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## ✅ Pre-Deployment Checklist

- [ ] Test all pages (Home, Contact, Tracking)
- [ ] Test mobile menu
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Test forms (if backend connected)
- [ ] Validate SEO meta tags
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Preview build with `npm run preview`
- [ ] Update contact information if needed
- [ ] Update social media links
- [ ] Check analytics tracking (if implemented)

## 🎉 You're Ready!

Your website is now:
- ✅ Built and tested
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Animated and engaging
- ✅ Ready to deploy

Run `npm run dev` to start developing or `npm run deploy` to go live!
