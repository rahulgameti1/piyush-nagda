# Balaji Electricals — Static Website

Premium air cooler website for **Balaji Electricals** — built as a pure static site for GitHub Pages hosting.

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it anything (e.g., `balaji-electricals`)
3. Keep it **Public**
4. Click **Create repository**

### Step 2: Push this code
Open terminal in this folder and run:
```bash
git init
git add .
git commit -m "Initial commit - Balaji Electricals static site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, folder **/ (root)**
5. Click **Save**

### Step 4: Your site is live!
After 1-2 minutes, your site will be at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 📁 Project Structure
```
├── index.html          → Single page app entry
├── css/                → All stylesheets
│   ├── globals.css     → Design system & tokens
│   ├── navbar.css      → Navigation
│   ├── home.css        → Home page
│   ├── products.css    → Products listing
│   ├── whatsapp.css    → WhatsApp button
│   └── ...             → Other page styles
├── js/
│   ├── app.js          → SPA router
│   ├── products-data.js→ All 8 product configs
│   ├── cart.js         → Cart (localStorage)
│   ├── whatsapp.js     → WhatsApp widget
│   ├── pages/          → Page renderers
│   └── components/     → Reusable components
```

## ✨ Features
- 🏠 Home page with hero, featured products, testimonials
- 📦 Products page with filters (series, type, price, sort)
- 🔍 Individual product detail pages
- ✦ AI Cooler Finder (4-step wizard with recommendation algorithm)
- ⚖️ Compare up to 3 coolers side by side
- 🛒 Shopping cart with localStorage persistence
- 💬 **WhatsApp direct chat** button on every page
- 📱 Contact & Checkout forms send via WhatsApp
- 📱 Fully responsive design
- 🎨 Premium pastel design with animations

## 💬 WhatsApp Integration
- Floating chat button (bottom-left corner)
- Contact form → sends message via WhatsApp
- Checkout → sends order details via WhatsApp
- Product pages → "Enquire on WhatsApp" button
- WhatsApp number: **+91 7339803084**
