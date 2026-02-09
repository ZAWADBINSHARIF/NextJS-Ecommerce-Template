## 📖 Overview

This is a modern, responsive eCommerce template built with Next.js 16, featuring a clean design and essential eCommerce functionality. The template includes product listings, shopping cart, checkout process, user authentication, and more.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Shopping Cart**: Add/remove products, quantity management
- **Product Catalog**: Product listings with categories and search
- **User Authentication**: Sign in/sign up functionality
- **Wishlist**: Save favorite products
- **Checkout Process**: Complete order flow with shipping and payment
- **Blog System**: Integrated blog with categories
- **Responsive Design**: Mobile-first approach
- **TypeScript**: Full type safety
- **Redux State Management**: Centralized state with Redux Toolkit

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: NextAuth.js
- **CMS**: Sanity
- **Icons/Images**: Custom icons and images
- **Forms**: React Hook Form (implied)
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ZAWADBINSHARIF/NextJS-Ecommerce-Template.git
   cd nextjs-ecommerce-template-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add necessary environment variables for Sanity and NextAuth.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-ecommerce-template-main/
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── (site)/      # Main site layout and pages
│   │   └── (pages)/     # Additional pages
│   ├── components/      # Reusable React components
│   │   ├── Auth/        # Authentication components
│   │   ├── Blog/        # Blog-related components
│   │   ├── Cart/        # Shopping cart components
│   │   ├── Checkout/    # Checkout process components
│   │   ├── Common/      # Shared components
│   │   ├── Header/      # Header and navigation
│   │   ├── Home/        # Homepage sections
│   │   ├── Shop/        # Shop and product components
│   │   └── ...
│   ├── context/         # React Context providers
│   ├── css/             # Global styles and fonts
│   ├── data/            # Static data files
│   ├── redux/           # Redux store and slices
│   │   ├── features/    # Redux Toolkit slices
│   │   └── provider.tsx # Redux provider
│   └── types/           # TypeScript type definitions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎯 Usage

### Key Components

- **Header**: Navigation, search, cart icon
- **Home**: Hero section, categories, featured products
- **Shop**: Product grid/list with filters
- **Product Details**: Individual product pages with gallery
- **Cart**: Shopping cart sidebar/modal
- **Checkout**: Multi-step checkout process
- **Auth**: Sign in/up forms
- **Blog**: Blog posts and categories

### State Management

The app uses Redux Toolkit for state management with the following slices:

- `cart-slice`: Shopping cart state
- `wishlist-slice`: Wishlist functionality
- `quickView-slice`: Quick view modal
- `product-details`: Product detail state

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Fonts**: Euclid Circular A font
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Configured but not fully implemented

## 🔧 Configuration

### Tailwind CSS

Custom configuration in `tailwind.config.ts` includes:
- Custom color palette
- Font family setup
- Container settings
- Extended spacing and typography

### Next.js Config

Basic configuration in `next.config.js` with image optimization and other settings.

## 🚀 Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

The app can be deployed to Vercel, Netlify, or any platform supporting Next.js.

## 📄 Available Routes

The template includes the following pages:

- `/` - Homepage with hero, categories, and featured products
- `/all-categories` - Browse all product categories
- `/contact` - Contact form and information
- `/error` - Error page
- `/shop-details` - Individual product detail page
- `/shop-product` - Shop page with sidebar filters
- `/shop-without-sidebar` - Shop page without sidebar

## 📚 Documentation

- **[Components Documentation](COMPONENTS.md)** - Detailed component reference
- **[Development Guide](DEVELOPMENT.md)** - Technical development information

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

- Community Support: [GitHub Issues](https://github.com/ZAWADBINSHARIF/NextJS-Ecommerce-Template/issues)
- Premium Support: Available with NextMerce Pro
