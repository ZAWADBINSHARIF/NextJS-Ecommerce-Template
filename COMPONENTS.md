# Components Documentation

This document provides detailed information about the components used in the NextMerce eCommerce template.

## 🏗 Component Architecture

The components are organized into logical folders based on their functionality:

### Auth Components
- **Signin**: User sign-in form
- **Signup**: User registration form

### Blog Components
- **BlogItem**: Individual blog post card
- **Categories**: Blog category navigation
- **LatestPosts**: Recent blog posts section
- **LatestProducts**: Featured products in blog
- **SearchForm**: Blog search functionality

### Cart Components
- **Discount**: Discount code input
- **OrderSummary**: Cart total and summary
- **SingleItem**: Individual cart item

### Checkout Components
- **Billing**: Billing address form
- **Coupon**: Coupon code input
- **Login**: Checkout login form
- **Notes**: Order notes
- **OrderList**: Order items list
- **PaymentMethod**: Payment options
- **Shipping**: Shipping address form
- **ShippingMethod**: Shipping options

### Common Components
- **Breadcrumb**: Navigation breadcrumbs
- **Newsletter**: Newsletter signup
- **PreLoader**: Loading spinner
- **PreviewSlider**: Product image gallery
- **ProductItem**: Product card component
- **QuickViewModal**: Quick product view modal
- **ScrollToTop**: Back to top button
- **CartSidebarModal**: Shopping cart sidebar

### Header Components
- **CustomSelect**: Custom dropdown select
- **Dropdown**: Navigation dropdown menu

### Home Components
- **BestSeller**: Best selling products section
- **Categories**: Product categories grid
- **Countdown**: Countdown timer component
- **Hero**: Homepage hero section
- **NewArrivals**: New products section
- **PromoBanner**: Promotional banner
- **Testimonials**: Customer testimonials

### Shop Components
- **SingleGridItem**: Product grid item
- **SingleListItem**: Product list item

## 🔧 Key Components Details

### Header Component
Location: `src/components/Header/index.tsx`

Features:
- Navigation menu
- Search functionality
- Cart icon with item count
- User account dropdown
- Mobile responsive hamburger menu

### ProductItem Component
Location: `src/components/Common/ProductItem.tsx`

Props:
```typescript
interface ProductItemProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}
```

Features:
- Product image with hover effects
- Rating display
- Price information
- Add to cart functionality
- Quick view modal trigger

### CartSidebarModal Component
Location: `src/components/Common/CartSidebarModal/index.tsx`

Features:
- Slide-in cart sidebar
- Cart items list
- Quantity controls
- Remove items
- Total calculation
- Checkout button

### QuickViewModal Component
Location: `src/components/Common/QuickViewModal.tsx`

Features:
- Product image gallery
- Product details
- Size/color selection
- Add to cart from modal
- Wishlist functionality

## 🎨 Styling

All components use Tailwind CSS for styling with custom utilities defined in `tailwind.config.ts`. The design system includes:

- Custom color palette
- Typography scale
- Spacing system
- Responsive breakpoints

## 🔄 State Management

Components interact with Redux store through:

- `useAppSelector` for reading state
- `useAppDispatch` for dispatching actions

Key slices:
- Cart management
- Wishlist functionality
- Product details
- Quick view state

## 📱 Responsive Design

All components are designed mobile-first with responsive breakpoints:
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up

## 🔧 Customization

To customize components:

1. **Styling**: Modify Tailwind classes or update `tailwind.config.ts`
2. **Functionality**: Edit component logic in respective files
3. **Layout**: Adjust component structure and props
4. **Data**: Update data files in `src/data/` folder

## 📝 TypeScript Types

Component props are typed using TypeScript interfaces defined in `src/types/`. Key types include:

- `Product`: Product data structure
- `Category`: Category information
- `BlogItem`: Blog post structure
- `Menu`: Navigation menu items