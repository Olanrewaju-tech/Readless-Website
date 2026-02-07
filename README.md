# Readless Landing Page

A professional, fully responsive Next.js landing page for Readless - the book summary app that makes self-improvement accessible.

## 🚀 Features

- ✅ Hero section with logo and app store buttons (coming soon state)
- ✅ How It Works section (4-step process)
- ✅ App screenshots preview
- ✅ Features showcase
- ✅ Free vs Premium pricing comparison
- ✅ Book categories library
- ✅ Waitlist/email capture form
- ✅ Contact information and social links
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized
- ✅ Fast loading with Next.js 14

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Upload the project to your server**

2. **Install dependencies:**
```bash
cd readless-landing
npm install
```

3. **Build for production:**
```bash
npm run build
```

4. **Start the production server:**
```bash
npm start
```

The site will run on `http://localhost:3000` by default.

## 🌐 Deployment Options

### Option 1: Running with PM2 (Recommended for VPS/Server)

```bash
# Install PM2 globally
npm install -g pm2

# Start the app
pm2 start npm --name "readless" -- start

# Save PM2 config
pm2 save

# Set PM2 to start on boot
pm2 startup
```

### Option 2: Running with Custom Port

```bash
# Start on port 8080
PORT=8080 npm start
```

### Option 3: Using Nginx as Reverse Proxy

Create `/etc/nginx/sites-available/readless`:

```nginx
server {
    listen 80;
    server_name getreadless.tech www.getreadless.tech;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/readless /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 4: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t readless-landing .
docker run -d -p 3000:3000 --name readless readless-landing
```

## 📁 Project Structure

```
readless-landing/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── HowItWorks.tsx    # Process explanation
│   ├── AppPreview.tsx    # App screenshots
│   ├── Features.tsx      # Feature list
│   ├── Pricing.tsx       # Free vs Premium
│   ├── Categories.tsx    # Book categories
│   ├── Waitlist.tsx      # Email capture
│   └── Footer.tsx        # Footer with contact
├── public/
│   └── images/           # Logo and screenshots
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Update Contact Information

Edit `components/Footer.tsx`:
- Email: `info@getreadless.tech`
- LinkedIn: `https://www.linkedin.com/company/getreadless`

### Modify Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    yellow: '#F5B800',    // Your brand yellow
    dark: '#2C3135',      // Dark gray
    darker: '#1A1D21',    // Darker gray
  },
}
```

### Add Waitlist API Integration

Edit `components/Waitlist.tsx` and uncomment the API call section:
```typescript
await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
})
```

## 🔧 Development

Run in development mode:
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Performance

- Next.js 14 with App Router
- Automatic image optimization
- Static generation where possible
- Tailwind CSS for minimal CSS bundle
- No external dependencies except React/Next.js

## 📊 SEO

The page includes:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading times

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=8080 npm start
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

© 2026 Readless. All rights reserved.

## 📞 Support

For questions or issues:
- Email: info@getreadless.tech
- LinkedIn: https://www.linkedin.com/company/getreadless

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
