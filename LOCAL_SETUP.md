# 💻 Run Readless Landing Page Locally

## Prerequisites

Before you start, make sure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

## Check if Node.js is Installed

Open your terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see version numbers like `v18.x.x` or higher.

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Extract the Project

Extract `readless-landing.tar.gz` or unzip the folder.

You should have a folder structure like:
```
readless-landing/
├── app/
├── components/
├── public/
├── package.json
└── ...
```

### Step 2: Open Terminal in Project Folder

**On Windows:**
- Open the `readless-landing` folder
- Hold `Shift` + Right-click inside the folder
- Select "Open PowerShell window here" or "Open Command window here"

**On Mac/Linux:**
- Open Terminal
- Navigate to the folder:
```bash
cd /path/to/readless-landing
```

### Step 3: Install Dependencies

```bash
npm install
```

This will download all required packages (may take 2-3 minutes).

### Step 4: Run Development Server

```bash
npm run dev
```

You'll see output like:
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
```

### Step 5: View in Browser

Open your browser and go to:
```
http://localhost:3000
```

🎉 **You should see your Readless landing page!**

---

## 🛠️ Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Check for code issues
npm run lint
```

---

## 📝 Making Changes

The development server has **hot reload** - any changes you make will automatically update in the browser!

### Edit Content:

1. **Hero Section** - Edit `components/Hero.tsx`
2. **Features** - Edit `components/Features.tsx`
3. **Pricing** - Edit `components/Pricing.tsx`
4. **Colors** - Edit `tailwind.config.js`
5. **Contact Info** - Edit `components/Footer.tsx`

### Example - Change Hero Text:

Open `components/Hero.tsx` and find:
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
  Understanding the human mind,
  <span className="block text-brand-yellow">one chapter at a time</span>
</h1>
```

Change the text, save the file, and see it update instantly in your browser!

---

## 🎨 Customizing

### Change Brand Colors:

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    yellow: '#F5B800',    // Your yellow
    dark: '#2C3135',      // Dark background
    darker: '#1A1D21',    // Darker background
  },
}
```

### Add New Section:

1. Create new file: `components/NewSection.tsx`
2. Import in `app/page.tsx`:
```tsx
import NewSection from '@/components/NewSection'
```
3. Add to page:
```tsx
<NewSection />
```

---

## 🐛 Troubleshooting

### "Command not found: npm"
Install Node.js from https://nodejs.org/

### "Port 3000 already in use"
```bash
# Windows - Kill process on port 3000
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=8080 npm run dev
```

### "Module not found" errors
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing
```bash
# Hard refresh browser
# Windows: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Or restart dev server
# Press Ctrl+C to stop, then npm run dev again
```

### TypeScript errors
```bash
# Most TypeScript errors can be ignored during development
# If needed, create next-env.d.ts:
npx next
```

---

## 📁 Project Structure

```
readless-landing/
├── app/
│   ├── page.tsx          # Main page (imports all components)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
│
├── components/
│   ├── Hero.tsx          # Hero section with logo
│   ├── HowItWorks.tsx    # How it works (4 steps)
│   ├── AppPreview.tsx    # App screenshots
│   ├── Features.tsx      # Features list
│   ├── Pricing.tsx       # Free vs Premium
│   ├── Categories.tsx    # Book categories
│   ├── Waitlist.tsx      # Email signup form
│   └── Footer.tsx        # Footer with contact
│
├── public/
│   └── images/           # Logo + screenshots
│       ├── logo.png
│       ├── screen1.jpg
│       ├── screen2.jpg
│       ├── screen3.jpg
│       ├── screen4.jpg
│       └── screen5.jpg
│
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
├── next.config.js        # Next.js config
└── postcss.config.js     # PostCSS config
```

---

## ✅ Testing Checklist

Before deploying, test these:

- [ ] Page loads at http://localhost:3000
- [ ] All images load (logo + screenshots)
- [ ] Responsive on mobile (resize browser)
- [ ] Email form accepts input (waitlist)
- [ ] All sections visible
- [ ] Links work (LinkedIn, email)
- [ ] No console errors (F12 → Console tab)

---

## 🚀 Next Steps

Once you're happy with the local version:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Test production build locally:**
   ```bash
   npm start
   ```

3. **Deploy to your server** (see DEPLOYMENT.md)

---

## 📞 Need Help?

- Check README.md for full documentation
- Check DEPLOYMENT.md for server deployment
- Email: info@getreadless.tech

---

**Enjoy building!** 🎉
