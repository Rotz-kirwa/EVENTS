# Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

The error you're seeing is because the npm packages haven't been installed yet. Run this command in your terminal:

```bash
npm install
```

This will install all required packages:
- react-router-dom (routing)
- @tanstack/react-query (data fetching)
- axios (HTTP client)
- react-hook-form & zod (forms & validation)
- framer-motion (animations)
- react-i18next & i18next (internationalization)
- react-helmet-async (SEO)
- tailwindcss (styling)
- And more...

### Step 2: Start Development Server

After installation completes, start the dev server:

```bash
npm run dev
```

### Step 3: Open in Browser

The application will be available at:
```
http://localhost:5173
```

## ✅ What You'll See

- **Homepage** with:
  - Animated hero section with image slider
  - Services overview with 8 service cards
  - Responsive navigation header
  - Footer with social links
  - Language switcher (English/Swahili)

- **Navigation** to:
  - Services (placeholder)
  - Portfolio (placeholder)
  - About (placeholder)
  - Blog (placeholder)
  - Contact (placeholder)

## 🎨 Features Implemented

✓ Luxury design with gold, navy, burgundy colors  
✓ Smooth animations with Framer Motion  
✓ Responsive mobile-first design  
✓ Bilingual support (EN/SW)  
✓ SEO-ready with React Helmet  
✓ Reusable component library  

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📝 Environment Variables (Optional)

Copy `.env.example` to `.env` if you want to configure:
- API endpoints
- CMS credentials
- Google Maps API key
- Analytics IDs
- Payment gateway keys

```bash
cp .env.example .env
```

## 🐛 Troubleshooting

### Issue: "Failed to resolve import"
**Solution:** Run `npm install` first

### Issue: Port 5173 already in use
**Solution:** Kill the process or Vite will suggest an alternative port

### Issue: Tailwind styles not loading
**Solution:** Make sure `tailwind.config.js` and `postcss.config.js` exist

### Issue: Fonts not loading
**Solution:** Check internet connection (Google Fonts are loaded via CDN)

## 📚 Next Steps

1. Review `IMPLEMENTATION_STATUS.md` for completed features
2. Check `.kiro/specs/premium-event-website/tasks.md` for remaining tasks
3. Start implementing additional pages and features
4. Customize content in `src/constants/config.js`

## 🎯 Current Implementation Status

**Completed:** ~15% (6 out of 32 tasks)  
**Functional:** Homepage, navigation, basic routing  
**Ready for:** Continued development

## 💡 Tips

- All components use Tailwind CSS classes
- Animations are handled by Framer Motion
- Translations are in `src/locales/en/` and `src/locales/sw/`
- Path aliases are configured (@components, @pages, etc.)
- Components follow a consistent structure with PropTypes

## 🆘 Need Help?

- Check `SETUP.md` for detailed setup instructions
- Review component files for usage examples
- See design specifications in `.kiro/specs/premium-event-website/design.md`
- Check requirements in `.kiro/specs/premium-event-website/requirements.md`

---

**Happy Coding! 🎉**
