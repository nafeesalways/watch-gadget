# 🕒 Yazole Watch Landing Page

A complete **Responsive Single Page Landing Site** with integrated order form, smooth animations, and fair marketing layout for the Yazole Brand Watch collection.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Components Overview](#-components-overview)
- [Animations](#-animations)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

- 🎨 **Modern & Responsive Design** - Fully optimized for mobile, tablet, and desktop
- 🚀 **Performance Optimized** - Built with Next.js for blazing-fast page loads
- 💳 **Integrated Order Form** - Complete checkout with Cash on Delivery option
- 🎭 **Smooth Animations** - Vertical & horizontal sliding animations for products
- ⭐ **Customer Reviews Section** - Display social proof with ratings
- 🎁 **Special Offers Banner** - Eye-catching promotional section with 50% discount
- 📱 **Mobile-First Approach** - Seamless experience across all devices
- 🌈 **Gradient Backgrounds** - Beautiful pink, purple, and blue color schemes
- 🖼️ **Optimized Images** - Next.js Image component for automatic optimization
- 📍 **Location & Contact** - Footer with address and contact information

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **React 18** | UI library for component-based architecture |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **React Icons** | Icon library (Font Awesome, etc.) |
| **Next.js Image** | Automatic image optimization |

---

## 📁 Project Structure

```bash
yazole-watch-landing/
├── app/
│   ├── globals.css           # Tailwind imports + custom animations
│   ├── layout.js             # Root layout with metadata
│   ├── page.js               # Main page combining all sections
│   └── favicon.ico           # Site favicon
├── components/
│   ├── Navbar.jsx             # Top navigation bar
│   ├── Banner.jsx             # Hero section with animated watch image
│   ├── WhyYazole.jsx          # Brand value proposition section
│   ├── Features.jsx           # Product features with icons
│   ├── WatchCarousel.jsx      # Product showcase carousel/grid
│   ├── ServicesVideo.jsx      # Service highlights or video section
│   ├── PriceCTA.jsx           # Price display with call-to-action
│   ├── Occasions.jsx          # Different watch types with horizontal animation
│   ├── Reviews.jsx            # Customer testimonials with star ratings
│   ├── SpecialOffer.jsx       # 50% OFF banner with vertical animations
│   ├── OrderForm.jsx          # Billing details & checkout form
│   └── Footer.jsx             # Site footer with links & copyright
├── public/
│   └── images/               # All product images, avatars, banners
│       ├── watches.png       # Main banner watch image
│       ├── img9.jpg          # Occasions section watch
│       ├── img10.jpg         # Special offer left watch
│       ├── img11.jpg         # Special offer right watch
│       ├── avatar-1.png      # Customer review avatars
│       └── ...               # Other images
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── README.md                 # This file


1.Clone the repository
git clone https://github.com/yourusername/watch-gadget.git
cd yazole-watch-landing


2.Install dependencies
npm install
# or
yarn install
# or
pnpm install

3.Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
