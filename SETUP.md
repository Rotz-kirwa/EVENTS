# Premium Event Website - Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

This will install:
- **React Router** - For navigation and routing
- **Tailwind CSS** - For styling with custom luxury theme
- **Framer Motion** - For smooth animations
- **React Query** - For server state management
- **Axios** - For API calls
- **React Hook Form + Zod** - For form handling and validation
- **react-i18next** - For internationalization (English/Swahili)
- **React Helmet Async** - For SEO meta tags

### 2. Environment Configuration

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then update the values in `.env` with your actual configuration:
- API endpoints
- CMS credentials
- Google Maps API key
- Analytics tracking IDs
- Payment gateway keys
- WhatsApp number

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components (Button, Card, Modal, etc.)
│   ├── layout/           # Layout components (Header, Footer, Navigation)
│   ├── home/             # Homepage specific components
│   ├── services/         # Services page components
│   ├── portfolio/        # Portfolio components
│   ├── tools/            # Interactive tools (Event Planner, Venue Visualizer)
│   └── portal/           # Client portal components
├── pages/                # Page components
├── hooks/                # Custom React hooks
├── context/              # Context providers (Auth, Language, etc.)
├── services/             # API service layer
├── utils/                # Utility functions
├── constants/            # Constants and configuration
└── styles/               # Global styles and theme
```

## Design System

### Colors
- **Gold**: #D4AF37 (Primary luxury color)
- **Navy**: #001F3F (Secondary professional color)
- **Burgundy**: #800020 (Accent color)
- **Cream**: #FFFDD0 (Background accent)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Next Steps

1. Review the implementation plan in `.kiro/specs/premium-event-website/tasks.md`
2. Start implementing components following the task list
3. Test each feature as you build it
4. Configure your backend/CMS integration
5. Deploy to production

## Support

For questions or issues, refer to:
- Requirements: `.kiro/specs/premium-event-website/requirements.md`
- Design: `.kiro/specs/premium-event-website/design.md`
- Tasks: `.kiro/specs/premium-event-website/tasks.md`
