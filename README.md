# Modern Ecommerce Store

A full-featured, modern ecommerce website built with Next.js 14, TypeScript, Tailwind CSS, Supabase, and Stripe.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Catalog**: Browse products with filtering and sorting
- **Shopping Cart**: Add/remove items with persistent storage
- **Product Search**: Find products quickly
- **Category Navigation**: Browse by product categories
- **Mobile Responsive**: Optimized for all devices

### Backend & Database
- **Supabase Integration**: PostgreSQL database with real-time features
- **User Authentication**: Secure login/signup system
- **Product Management**: CRUD operations for products
- **Order Management**: Track orders and order history

### Payment Processing
- **Stripe Integration**: Secure payment processing
- **Multiple Payment Methods**: Credit cards, digital wallets
- **Order Confirmation**: Email receipts and confirmations

### Performance & SEO
- **Next.js 14**: App Router with server-side rendering
- **Image Optimization**: Automatic image optimization
- **SEO Friendly**: Meta tags and structured data
- **Fast Loading**: Optimized performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **State Management**: Zustand
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/indan-007/modern-ecommerce-store.git
   cd modern-ecommerce-store
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Fill in your environment variables:
   - Supabase project URL and keys
   - Stripe publishable and secret keys
   - Other configuration values

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the database migrations (see Database Schema section)
   - Configure authentication providers

5. **Set up Stripe**
   - Create a Stripe account
   - Get your API keys from the dashboard
   - Set up webhooks for order processing

6. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

### Products Table
\`\`\`sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  image_url VARCHAR,
  category VARCHAR,
  stock_quantity INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

### Orders Table
\`\`\`sql
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR DEFAULT 'pending',
  stripe_payment_intent_id VARCHAR,
  shipping_address JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

### Order Items Table
\`\`\`sql
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\`\`\`

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Environment Variables for Production
- \`NEXT_PUBLIC_SUPABASE_URL\`
- \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
- \`SUPABASE_SERVICE_ROLE_KEY\`
- \`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY\`
- \`STRIPE_SECRET_KEY\`
- \`STRIPE_WEBHOOK_SECRET\`

## 🔧 Configuration

### Supabase Setup
1. Create tables using the provided schema
2. Set up Row Level Security (RLS) policies
3. Configure authentication providers
4. Set up storage buckets for product images

### Stripe Setup
1. Configure webhook endpoints
2. Set up product catalog
3. Configure payment methods
4. Test with Stripe's test cards

## 📱 Features Overview

### Customer Features
- Browse products by category
- Search and filter products
- Add items to cart
- Secure checkout with Stripe
- User account management
- Order history and tracking

### Admin Features (Future Enhancement)
- Product management dashboard
- Order management
- Customer management
- Analytics and reporting
- Inventory tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Stripe for payment processing
- Tailwind CSS for the styling system
- Vercel for hosting and deployment

## 📞 Support

For support, email support@yourstore.com or join our Slack channel.

---

Built with ❤️ using modern web technologies