# SUPERPOWER 01 — Umadevi: Beyond the Code

> **AWS Student Builder Challenge: Build Your Tech Superpower 2026**

A visually stunning, fully functional personal portfolio website built with **React + Vite**, featuring a cosmic design language, interactive Superpower Discovery Machine, and AWS Amplify deployment readiness.

---

## 🚀 Live Demo

> Deployed via AWS Amplify — [Add your live URL here after deployment]

---

## ✨ Features

- **Cosmic Visual Design** — Deep midnight navy background with electric blue, violet and magenta neon gradients, glassmorphism cards and animated stars
- **Interactive Superpower Discovery Machine** — Click to reveal one of 6 unique developer superpowers with animated rings, particle effects and rich discovery cards
- **Smooth Animations** — Framer Motion scroll reveals, floating elements and micro-interactions
- **Dark / Light Theme** — Toggle with persistence via localStorage
- **Fully Responsive** — Works beautifully on desktop, tablet and mobile
- **SEO Optimized** — Meta tags, semantic HTML and proper heading structure
- **AWS Ready** — Configured for AWS Amplify hosting

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Vite | Build tool & dev server |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |
| Vanilla CSS | Custom design system |
| AWS Amplify | Hosting & CI/CD |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with active section detection
│   ├── Hero.jsx            # Cosmic hero with orbital portrait
│   ├── About.jsx           # Personal story, education, interests
│   ├── Skills.jsx          # Technology cards with progress bars
│   ├── Projects.jsx        # Project cards with problem statements
│   ├── SuperpowerMachine.jsx  # ⭐ Interactive discovery machine
│   ├── Contact.jsx         # Contact cards and social links
│   └── Footer.jsx          # Footer with AWS badge
├── data/
│   └── portfolioData.js    # ✏️ All editable content lives here
├── App.jsx                 # Root with theme management
├── App.css                 # Component styles
├── index.css               # Global design system
└── main.jsx                # Entry point
public/
└── favicon.svg
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✏️ Personalizing Your Portfolio

All content is centralized in **`src/data/portfolioData.js`**. Replace every `[placeholder]` value with your real information:

1. **`personalInfo`** — Name, email, GitHub, LinkedIn, Twitter
2. **`aboutData`** — Bio paragraphs, education, interests, aspirations  
3. **`skills`** — Proficiency levels for each technology
4. **`projects`** — Titles, descriptions, tech stacks, GitHub/demo links
5. **`superpowers`** — Already complete with 6 unique discovery outcomes

### Adding Your Photo

Replace the portrait placeholder in `Hero.jsx` and `About.jsx`:

```jsx
// In Hero.jsx — find hero__portrait div and replace placeholder with:
<img src="/your-photo.jpg" alt="Umadevi" />

// Place your-photo.jpg in the public/ directory
```

### Adding Project Screenshots

Place screenshot images in `public/` and update `portfolioData.js`:

```js
image: '/project-screenshot.png',  // instead of null
```

---

## ☁️ AWS Amplify Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "feat: SUPERPOWER 01 — Umadevi portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to AWS Amplify

1. Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select **GitHub** as source provider
4. Authorize AWS Amplify to access your GitHub
5. Select your repository and `main` branch
6. Amplify auto-detects Vite — confirm build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
7. Click **"Save and deploy"**

### Step 3: Custom Domain (Optional)

In Amplify Console → App Settings → Domain management → Add custom domain

### Build Settings (amplify.yml — auto-detected)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 🔒 Security Notes

- Never commit `.env` files with real secrets
- All external links use `rel="noopener noreferrer"`
- No API keys or credentials in source code
- AWS IAM follows least-privilege principles

---

## 📜 License

MIT — Built with passion for the AWS Student Builder Challenge 2026.

---

*"Building Ideas into Real-World Solutions." — Umadevi*
