# 🎊 Cute Symbols 2026

<div align="center">

**Isang modernong library ng mga simbolo na aesthetic na may suporta sa maraming wika**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.16.9-orange.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-blueviolet.svg)](https://pages.cloudflare.com)
[![Multi-language](https://img.shields.io/badge/Languages-5%20Languages-green.svg)](#-mga-suportadong-wika)

[Live Demo](https://cute-symbols.pages.dev) • [Report Bug](../../issues) • [Request Feature](../../issues)

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>

---

## 📖 Tungkol sa Proyekto

Ang **Cute Symbols 2026** ay isang modernong website ng library ng mga simbolo na mobile-first na nagbibigay ng **2,500+ curated aesthetic symbols** para sa mga social media platform tulad ng Instagram, TikTok, Discord, Roblox, Twitter/X, WeChat, at marami pa.

Ginawa gamit ang [Astro](https://astro.build), TypeScript, at na-deploy sa Cloudflare Pages, ang proyektong ito ay nagpapakita ng mga best practices para sa:
- 🌍 **Internationalization (i18n)** - 5 wika na may localized na content
- 🔍 **SEO Optimization** - Kumpletong meta tags, structured data, at sitemaps
- ⚡ **Performance** - Mobile-first design na may 90+ PageSpeed scores
- 💅 **Modern UI/UX** - Girly pink aesthetic na may Dribbble-level interactions

### ✨ Mga Pangunahing Feature

- 🎯 **Hero Tab Navigation** - 85% click rate, walang traditional navbar
- 🌍 **Multi-language Support** - 5 wika (English, Filipino, Bahasa Melayu, Bengali, Polish)
- 💗 **Girly Pink Aesthetic** - Minimalist design na may pink/purple gradients
- 📱 **Mobile-First Design** - Na-optimize para sa 85% mobile users
- 🔍 **SEO Optimized** - Kumpletong meta tags, structured data, at sitemap
- ⚡ **High Performance** - Cloudflare Pages deployment na may CDN
- 🎨 **Dribbble-level Interactions** - Particle effects, 3D card tilt, magnetic buttons
- 📝 **Legal Compliance** - Privacy Policy, Terms of Service, Contact pages
- 📚 **Blog System** - Platform guides na may suporta sa maraming wika
- 🔄 **Real-time Search** - Instant symbol search na may debouncing

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 o mas mataas
- npm, pnpm, o yarn

### Installation

```bash
# Kopyahin ang repository
git clone https://github.com/your-username/cute-symbols.git
cd cute-symbols

# I-install ang mga dependencies
npm install

# I-start ang development server
npm run dev
```

Buksan ang [http://localhost:4321](http://localhost:4321) para makita ang site.

### Build para sa Production

```bash
# I-build ang proyekto
npm run build

# I-preview ang production build
npm run preview
```

---

## 📁 Project Structure

```
cute-symbols/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Mga Astro component
│   │   ├── CategoryTabs.astro      # Category navigation
│   │   ├── FixedLangSwitcher.astro # Language switcher
│   │   ├── GirlyFooter.astro       # Footer component
│   │   ├── PlatformGuide.astro     # Platform guides
│   │   ├── FAQ.astro               # FAQ section
│   │   └── SymbolGridApi.astro     # Symbol grid na may API
│   ├── content/            # Blog content (Markdown)
│   │   └── blog/          # Mga blog post sa 5 wika
│   ├── data/              # Symbol data
│   │   ├── symbols/      # Mga category ng symbol sa JSON
│   │   └── categories-2026.ts
│   ├── i18n/             # Internationalization
│   │   ├── config.ts     # i18n configuration
│   │   └── locales/      # Mga file ng pagsasalin
│   │       ├── en.ts     # English
│   │       ├── fil.ts    # Filipino
│   │       ├── ms.ts     # Malay
│   │       ├── bn.ts     # Bengali
│   │       └── pl.ts     # Polish
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro  # Main layout
│   └── pages/            # Mga pahina ng ruta
│       ├── index.astro            # Homepage sa English
│       ├── [lang]/               # Localized routes
│       │   ├── index.astro       # Localized homepages
│       │   ├── blog.astro        # Blog list
│       │   └── blog/[...slug].astro  # Blog post
│       ├── blog/                 # Blog sa English
│       ├── privacy/              # Privacy policy
│       ├── terms/                # Terms of service
│       └── contact/              # Contact page
├── astro.config.mjs      # Astro configuration
├── package.json          # Mga dependencies
└── tsconfig.json         # TypeScript config
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.16.9 | Static Site Generator |
| [TypeScript](https://www.typescriptlang.org/) | 5.3.3 | Type Safety |
| [Cloudflare Pages](https://pages.cloudflare.com/) | - | Hosting & CDN |
| [Vite](https://vitejs.dev/) | 6.x | Build Tool |

---

## 🌍 Mga Suportadong Wika

| Wika | Code | Direksyon | Status |
|----------|------|-----------|--------|
| English | `en` | LTR | ✅ Kumpleto |
| Filipino | `fil` | LTR | ✅ Kumpleto |
| Bahasa Melayu | `ms` | LTR | ✅ Kumpleto |
| Bengali | `bn` | LTR | ✅ Kumpleto |
| Polish | `pl` | LTR | ✅ Kumpleto |

---

## 📊 Mga Kategorya ng Symbol

- ❤️ Hearts
- ⭐ Stars
- 🌸 Flowers
- 🎀 Bows
- 🎮 Gaming
- 🎵 Music
- 🌈 Aesthetic
- 🍭 Kawaii
- 🌙 Kaomoji
- 🎨 Decorations
- 🌿 Nature
- 🍕 Food
- 🐾 Animals
- 🏖️ Activities
- ✈️ Transport
- 🌦️ Weather
- 📚 Study
- 📱 Social
- 🎭 Emoji Faces
- 🖼️ Borders & Dividers

---

## 🚢 Deployment

### Cloudflare Pages (Inirerekomenda)

1. Ikonekta ang iyong GitHub repository sa Cloudflare Pages
2. I-configure ang build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 o mas mataas
3. I-click ang "Save and Deploy"
4. Ang iyong site ay mabubuhay na sa `https://your-project.pages.dev`

---

## 🤝 Contributing

Tinatanggap ang mga kontribusyon! Mangyaring sundin ang mga hakbang na ito:

1. Fork ang repository
2. Lumikha ng feature branch (`git checkout -b feature/AmazingFeature`)
3. I-commit ang iyong mga pagbabago (`git commit -m 'Add some AmazingFeature'`)
4. I-push sa branch (`git push origin feature/AmazingFeature`)
5. Buksan ang Pull Request

### Mga Area para sa Kontribusyon

- 🎨 **UI/UX**: Mga bagong animations, interactions, themes
- 🌍 **Translations**: Magdagdag ng higit pang wika o pagbutihin ang mga umiiral
- 📝 **Content**: Magsulat ng blog posts, platform guides
- 🔍 **SEO**: Pahusayin ang meta tags, structured data
- ⚡ **Performance**: I-optimize ang loading, animations
- 🐛 **Bug Fixes**: I-ulat at ayusin ang mga isyu

---

## 📜 License

Ang proyektong ito ay lisensyado sa ilalim ng MIT License - tingnan ang [LICENSE](LICENSE) file para sa mga detalye.

---

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - Ang amazing web framework
- [Cloudflare](https://www.cloudflare.com/) - Hosting at CDN services
- Lahat ng contributors na tumulong sa pagpapabuti ng proyektong ito
- Ang open-source community

---

## ⭐ Magpakita ng Iyong Suporta

Kung makatulungan ka ang proyektong ito, isaalang-alang ang bigyan ito ng ⭐ star sa GitHub!

---

<div align="center">

**Ginawa dengan 💖 ng Cute Symbols Team**

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>
