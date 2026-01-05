# Development Guide

This guide provides technical details for developers working with the NextMerce eCommerce template.

## 🏗 Project Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Sanity CMS (if using)
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production

# Email Configuration (for contact forms)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@example.com
EMAIL_SERVER_PASSWORD=your-password
```

## 🛠 Development Workflow

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📁 File Structure Details

### App Router Structure

```
src/app/(site)/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Homepage
└── (pages)/
    ├── all-categories/
    ├── contact/
    ├── error/
    ├── shop-details/
    ├── shop-with-sidebar/
    └── shop-without-sidebar/
```

### Component Organization

Components are organized by feature:
- **Auth**: Authentication related components
- **Blog**: Blog functionality
- **Cart**: Shopping cart features
- **Checkout**: Checkout process
- **Common**: Shared/reusable components
- **Header**: Navigation and header
- **Home**: Homepage sections
- **Shop**: Product listing and details

## 🔄 State Management

### Redux Store Structure

The application uses Redux Toolkit with the following slices:

#### Cart Slice (`src/redux/features/cart-slice.ts`)

```typescript
interface CartState {
  items: CartItem[];
  total: number;
  quantity: number;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}
```

#### Wishlist Slice (`src/redux/features/wishlist-slice.ts`)

```typescript
interface WishlistState {
  items: Product[];
}
```

#### Quick View Slice (`src/redux/features/quickView-slice.ts`)

```typescript
interface QuickViewState {
  isOpen: boolean;
  product: Product | null;
}
```

### Context Providers

Additional state is managed through React Context:

- **QuickViewModalContext**: Quick view modal state
- **CartSidebarModalContext**: Cart sidebar state
- **PreviewSliderContext**: Product image gallery state

## 🎨 Styling System

### Tailwind Configuration

Custom configuration in `tailwind.config.ts`:

```typescript
// Custom colors
colors: {
  body: "#6C6F93",
  meta: {
    DEFAULT: "#F7F9FC",
    // ... more colors
  }
}

// Custom font
fontFamily: {
  "euclid-circular-a": ["Euclid Circular A"],
}

// Container settings
container: {
  center: true,
  padding: {
    DEFAULT: "1rem",
    sm: "2rem",
    xl: "0",
  },
}
```

### CSS Files

- `src/css/style.css`: Main styles
- `src/css/euclid-circular-a-font.css`: Custom font
- `src/css/async-gallery.css`: Gallery styles

## 📊 Data Management

### Static Data

Sample data is stored in `src/data/`:

- `categories.ts`: Product categories
- `shopData.ts`: Sample products
- `blogData.ts`: Blog posts
- `menuData.ts`: Navigation menu items

### Type Definitions

TypeScript interfaces in `src/types/`:

- `Product`: Product structure
- `Category`: Category information
- `BlogItem`: Blog post data
- `Menu`: Menu item structure
- `Testimonial`: Testimonial data

## 🔧 Key Features Implementation

### Shopping Cart

- Add/remove items
- Quantity management
- Persistent storage (localStorage)
- Real-time total calculation

### Product Filtering

- Category filtering
- Price range filtering
- Search functionality
- Sort options

### Authentication

- NextAuth.js integration
- Social login providers
- Session management
- Protected routes

### Image Gallery

- Product image galleries
- Thumbnail navigation
- Zoom functionality
- Responsive images

## 🚀 Performance Optimization

### Next.js Optimizations

- App Router for better performance
- Automatic code splitting
- Image optimization with `next/image`
- Static generation where possible

### Bundle Analysis

```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `package.json`:

```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## 🧪 Testing

### Testing Setup

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Test Structure

```
__tests__/
├── components/
├── pages/
└── utils/
```

## 🚀 Deployment

### Vercel Deployment

1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform.

## 🔍 Debugging

### Common Issues

1. **Build Errors**: Check TypeScript errors with `npm run lint`
2. **Styling Issues**: Verify Tailwind classes and custom CSS
3. **State Issues**: Check Redux DevTools for state changes
4. **Routing Issues**: Verify App Router file structure

### Development Tools

- **Redux DevTools**: Debug state changes
- **React DevTools**: Inspect component tree
- **Next.js DevTools**: Performance monitoring

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)