# ORION LED Car Lights Ordering System 🚗💡

An e-commerce web application built for **ORION**, a company that specializes in selling LED car lights. This platform allows customers to browse available stocks, filter products, add items to cart, and securely checkout — all in a clean, modern UI.

## 🔧 Tech Stack

- **React** (with TypeScript) – Frontend framework
- **TanStack Router** – Type-safe routing and page navigation
- **TailwindCSS** – Utility-first CSS for styling
- **shadcn/ui** – Accessible and reusable UI components

---

## 🚀 Features

### 🏠 Landing Page
A sleek homepage showcasing ORION’s LED car lighting solutions and brand highlights.

### 🛒 Stock Page
- Browse all available LED products
- Filter by categories or tags (e.g., "Headlights", "Interior", "New", "On Sale")

### 🔍 Product Details
Displays item info, pricing, badge labels (e.g., NEW), and product images.

### ➕ Add to Cart
Add and remove items from your shopping cart with instant UI updates.

### 💳 Checkout
A secure and streamlined checkout process for quick purchases.

### 🧾 Payment Method
Select preferred payment methods (e.g., Cash on Delivery, GCash, PayPal — depending on implementation).

### 👤 User Profile
- Sign Up / Sign In
- Edit user profile information
- View past orders (if supported)

### 📞 Contact Page
Company contact details with interactive call, email, and social media links.

### 🧾 About Page
Overview of ORION's mission, history, and core offerings.

---

## 📁 Project Structure (Simplified)

```bash
src/
├── components/
├── pages/
├── routes/               # TanStack route definitions
├── features/             # Modular features (e.g., Cart, Auth, Filters)
├── lib/                  # Utility functions
├── constants/            # Static data like product categories, icons
├── assets/               # Images, logos
└── App.tsx
```

# 🛠️ Setup & Development
## 1. Clone the repository
git clone https://github.com/karlosM1/orion-led-ph.git
- cd orion

## 2. Install dependencies
npm install

## 3. Run the development server
npm run dev


# 📌 Future Improvements
- Admin Dashboard for managing stock
- Order history and tracking
- Real-time inventory updates
- Payment gateway integration
