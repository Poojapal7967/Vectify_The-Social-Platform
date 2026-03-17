<div align="center">

# 🚀 Vectify — Where Voices Orbit

**A next-gen social platform blending the best of Twitter & Reddit with a cosmic space theme.**

[![Deploy to GitHub Pages](https://github.com/Poojapal7967/Vectify_The-Social-Platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/Poojapal7967/Vectify_The-Social-Platform/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES2024-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[🌐 Live Demo](https://poojapal7967.github.io/Vectify_The-Social-Platform/) · [🐛 Report Bug](https://github.com/Poojapal7967/Vectify_The-Social-Platform/issues) · [✨ Request Feature](https://github.com/Poojapal7967/Vectify_The-Social-Platform/issues)

</div>

---

## 🌌 About Vectify

Vectify is a **cosmic-themed social platform** that combines the best aspects of Twitter and Reddit into one beautiful experience. Share your thoughts, upvote/downvote posts, join topic-based communities, and connect with others — all wrapped in a stunning space-inspired UI with twinkling stars, nebula animations, and glass morphism design.

### ✨ Key Highlights

- 🎨 **Cosmic UI** — Deep space aesthetics with animated stars, nebula drift, and glass morphism cards
- 🤖 **Interactive Mascot** — An animated companion that guides you through onboarding
- 🗳️ **Reddit-style Voting** — Upvote and downvote posts with community-driven ranking
- 🐦 **Twitter-style Feed** — Like, share, and comment on posts in a familiar feed format
- 👻 **Anonymous Mode** — Browse and interact without revealing your identity
- 📱 **Responsive Design** — Seamless experience across desktop and mobile

---

## 🎯 Features

### 🔐 Authentication & Onboarding
- Sign Up / Login with clean modal UI
- Public and Anonymous user modes
- Profile setup with avatar, bio, and location
- Contact discovery and invite flow

### 📰 Social Feed
- **Posts** with text content, author info, topic tags, and timestamps
- **Topic Communities** — Subreddit-style topics like `v/technology`, `v/design`, `v/science`, `v/gaming`
- **Compose** new posts (public users)
- **Trending Topics** in the sidebar
- **Suggested Users** to follow

### 💬 Interactions
- ⬆️⬇️ **Upvote / Downvote** — Reddit-style voting system
- ❤️ **Like** — Show appreciation with animated hearts
- 💬 **Comment** — Threaded discussions on posts
- 🔄 **Share** — Share posts to your orbit

### 🎨 Design System
| Element | Style |
|---------|-------|
| **Theme** | Dark cosmic space |
| **Colors** | Purple `#977DFF`, Cyan `#38bdf8`, Pink `#f472b6` |
| **Fonts** | Outfit (display) + Space Grotesk (body) |
| **Effects** | Glass morphism, twinkling stars, nebula drift |
| **Layout** | 3-column responsive (sidebar / feed / trending) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Vanilla JavaScript** | Core application logic — no frameworks |
| **CSS3** | Custom design system with animations |
| **Vite** | Lightning-fast build tool & dev server |
| **GitHub Actions** | CI/CD for automated deployment |
| **GitHub Pages** | Hosting |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Poojapal7967/Vectify_The-Social-Platform.git

# Navigate to project directory
cd Vectify_The-Social-Platform

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment

Vectify is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

### How It Works

1. Every push to the `main` branch triggers the deployment workflow
2. GitHub Actions builds the project with Vite
3. The `dist/` output is deployed to GitHub Pages
4. The site is live at: **https://poojapal7967.github.io/Vectify_The-Social-Platform/**

### Manual Deployment

You can also trigger a deployment manually from the **Actions** tab in the repository.

### Deploy to Other Platforms

<details>
<summary>📦 Vercel</summary>

1. Import your GitHub repo at [vercel.com](https://vercel.com)
2. Set the **Build Command** to `npm run build`
3. Set the **Output Directory** to `dist`
4. Deploy!

</details>

<details>
<summary>📦 Netlify</summary>

1. Import your GitHub repo at [netlify.com](https://netlify.com)
2. Set the **Build Command** to `npm run build`
3. Set the **Publish Directory** to `dist`
4. Deploy!

</details>

---

## 📁 Project Structure

```
Vectify_The-Social-Platform/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── vectify-icon.svg        # App favicon
├── src/
│   ├── main.js                 # Application logic (routing, state, rendering)
│   ├── style.css               # Complete design system & animations
│   ├── counter.js              # Utility component
│   └── javascript.svg          # Asset
├── index.html                  # Entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies & scripts
├── LICENSE                     # MIT License
└── README.md                   # You are here! 👋
```

---

## 🗺️ Roadmap

- [ ] Backend API integration with database
- [ ] Real-time messaging & notifications
- [ ] User authentication with OAuth
- [ ] Image & media uploads in posts
- [ ] Dark/Light theme toggle
- [ ] PWA support for mobile install
- [ ] Search functionality
- [ ] User profile pages

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aman Bundela**

- GitHub: [@Amanbundela75](https://github.com/Amanbundela75)

---

<div align="center">

**⭐ Star this repo if you like Vectify!**

Made with 💜 by Aman Bundela

</div>
