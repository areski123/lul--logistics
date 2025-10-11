# LULé - Logistique Urbaine de Livraison écologique

Website for LULé, a specialized logistics company providing flexible and efficient vehicle transport solutions under 3.5 tons in Haut-Rhin, France.

## 🚚 About LULé

**Company:** LULé - Logistique Urbaine de Livraison écologique  
**Tagline:** "Delivering Reliability Across Haut-Rhin"  
**Established:** 2023  
**Location:** 51 boulevard Alfred Wallach, 68100 Mulhouse, Haut-Rhin  
**Phone:** +33 6 51 88 81 44  
**Email:** idriss.attobi@gmail.com  

## 🌟 Features

### Core Services
- **Light Transport** - Vehicles under 3.5 tons
- **Parcel Delivery** - Secure delivery with real-time tracking
- **Business Logistics** - Custom solutions for enterprises
- **Express Delivery** - 2-hour delivery service
- **Moving Services** - Personal and professional moves

### Service Tiers
- **Standard** - 24-48h delivery with online tracking
- **Express** - 2-hour delivery, 24/7 availability

### Website Features
- ✅ **Online Booking System** - Comprehensive form with validation
- ✅ **Multi-language Support** - French and English
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Google Analytics Integration** - Track user behavior
- ✅ **FAQ Section** - Comprehensive Q&A
- ✅ **Contact Information** - Multiple contact methods
- ✅ **Modern UI/UX** - Professional and approachable design
- ✅ **SEO Optimized** - Search engine friendly

## 🛠️ Technology Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Date Handling:** date-fns

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lule-eco-deliveries
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📱 Website Sections

1. **Hero Section** - Company introduction with key stats
2. **Services** - Detailed service offerings with pricing tiers
3. **Booking System** - Comprehensive reservation form
4. **About Us** - Company story, mission, and vision
5. **Process** - How our service works
6. **Fleet** - Vehicle information and features
7. **Clients** - Customer testimonials
8. **Testimonials** - Customer reviews
9. **Partners** - Business partnerships
10. **FAQ** - Frequently asked questions
11. **Contact** - Contact information and form

## 🌐 Multi-language Support

The website supports both French and English:
- **French (FR)** - Default language
- **English (EN)** - Secondary language
- Language switcher in header
- All content translated
- Form validation in both languages

## 📊 Analytics & Tracking

- **Google Analytics** integration ready
- Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID
- Tracks page views and user interactions
- Conversion tracking for booking forms

## 🎨 Design System

### Colors
- **Primary:** Green (#22c55e)
- **Secondary:** Blue (#3b82f6)
- **Accent:** Orange (#f97316)
- **Background:** White/Grey gradients

### Typography
- **Font:** Modern sans-serif (system fonts)
- **Headings:** Bold, clear hierarchy
- **Body:** Readable, accessible text

## 📞 Contact Information

- **Phone:** +33 6 51 88 81 44
- **Email:** idriss.attobi@gmail.com
- **Address:** 51 boulevard Alfred Wallach, 68100 Mulhouse, Haut-Rhin
- **WhatsApp:** +33 6 51 88 81 44

## 🔧 Customization

### Adding New Services
1. Update the services array in `src/components/Services.tsx`
2. Add corresponding translations in `src/contexts/LanguageContext.tsx`

### Modifying Contact Information
1. Update contact details in `src/components/Contact.tsx`
2. Update header information in `src/components/Header.tsx`

### Adding New Languages
1. Extend the `Language` type in `src/contexts/LanguageContext.tsx`
2. Add translations object for the new language
3. Update the language switcher logic

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Structured data markup
- Mobile-responsive design
- Fast loading times
- Clean URL structure

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA routing

## 📝 License

This project is proprietary software for LULé - Logistique Urbaine de Livraison écologique.

## 🤝 Support

For technical support or questions about the website:
- **Email:** idriss.attobi@gmail.com
- **Phone:** +33 6 51 88 81 44

---

**LULé** - Delivering Reliability Across Haut-Rhin 🚚