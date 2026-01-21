# 🎊 Cute Symbols 2026

<div align="center">

**Laman web simbol estetik moden dengan sokongan bahasa berbilang**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.16.9-orange.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-blueviolet.svg)](https://pages.cloudflare.com)
[![Multi-language](https://img.shields.io/badge/Languages-5%20Languages-green.svg)](#-bahasa-yang-disokong)

[Demo Langsung](https://cute-symbols.pages.dev) • [Lapor Pepijat](../../issues) • [Ciri Fitur](../../issues)

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>

---

## 📖 Perihal

**Cute Symbols 2026** ialah laman web perpustakaan simbol moden dan mesra pengguna yang menyediakan **2,500+ simbol estetik kurasi** untuk platform media sosial seperti Instagram, TikTok, Discord, Roblox, Twitter/X, WeChat, dan lain-lain.

Dibina dengan [Astro](https://astro.build), TypeScript, dan dilancarkan di Cloudflare Pages, projek ini menunjukkan amalan terbaik untuk:
- 🌍 **Internationalization (i18n)** - 5 bahasa dengan kandungan dilokalkan
- 🔍 **SEO Optimization** - Meta tag lengkap, data berstruktur, dan peta laman
- ⚡ **Performance** - Reka bentuk mesra pengguna dengan skor PageSpeed 90+
- 💅 **UI/UX Moden** - Estetik pink girly dengan interaksi peringkat Dribbble

### ✨ Ciri-ciri Utama

- 🎯 **Navigasi Tab Hero** - Kadar klik 85%, tiada navbar tradisional
- 🌍 **Sokongan Bahasa Berbilang** - 5 bahasa (English, Filipino, Bahasa Melayu, Bengali, Polish)
- 💗 **Estetik Pink Girly** - Reka bentuk minimalis dengan gradien pink/ungu
- 📱 **Reka Bentuk Mesra Pengguna** - Dioptimumkan untuk 85% pengguna mudah alih
- 🔍 **SEO Dioptimumkan** - Meta tag lengkap, data berstruktur, dan peta laman
- ⚡ **Prestasi Tinggi** - Pelancaran Cloudflare Pages dengan CDN
- 🎨 **Interaksi Peringkat Dribbble** - Kesan zarah, kecondongan kad 3D, butang magnet
- 📝 **Pematuhan Undang-undang** - Dasar Privasi, Terma Perkhidmatan, Halaman Hubungi
- 📚 **Sistem Blog** - Panduan platform dengan sokongan bahasa berbilang
- 🔄 **Carian Masa Nyata** - Carian simbol segera dengan nyahumpan

---

## 🚀 Permulaan Pantas

### Prasyarat

- Node.js 18.0 atau lebih tinggi
- npm, pnpm, atau yarn

### Pemasangan

```bash
# Klon repositori
git clone https://github.com/your-username/cute-symbols.git
cd cute-symbols

# Pasang kebergantungan
npm install

# Mulakan pelayan pembangunan
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) untuk melihat laman.

### Bina untuk Produksi

```bash
# Bina projek
npm run build

# Pratonton binaan produksi
npm run preview
```

---

## 📁 Struktur Projek

```
cute-symbols/
├── public/                 # Aset statik
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Komponen Astro
│   │   ├── CategoryTabs.astro      # Navigasi kategori
│   │   ├── FixedLangSwitcher.astro # Penukar bahasa
│   │   ├── GirlyFooter.astro       # Komponen footer
│   │   ├── PlatformGuide.astro     # Panduan platform
│   │   ├── FAQ.astro               # Bahagian FAQ
│   │   └── SymbolGridApi.astro     # Grid simbol dengan API
│   ├── content/            # Kandungan blog (Markdown)
│   │   └── blog/          # Siarkan blog dalam 5 bahasa
│   ├── data/              # Data simbol
│   │   ├── symbols/      # Kategori simbol JSON
│   │   └── categories-2026.ts
│   ├── i18n/             # Internationalization
│   │   ├── config.ts     # Konfigurasi i18n
│   │   └── locales/      # Fail terjemahan
│   │       ├── en.ts     # English
│   │       ├── fil.ts    # Filipino
│   │       ├── ms.ts     # Malay
│   │       ├── bn.ts     # Bengali
│   │       └── pl.ts     # Polish
│   ├── layouts/          # Susun atur halaman
│   │   └── Layout.astro  # Susun atur utama
│   └── pages/            # Halaman laluan
│       ├── index.astro            # Laman utama English
│       ├── [lang]/               # Laluan dilokalkan
│       │   ├── index.astro       # Laman utama dilokalkan
│       │   ├── blog.astro        # Senarai blog
│       │   └── blog/[...slug].astro  # Siarkan blog
│       ├── blog/                 # Blog English
│       ├── privacy/              # Dasar privasi
│       ├── terms/                # Terma perkhidmatan
│       └── contact/              # Halaman hubungi
├── astro.config.mjs      # Konfigurasi Astro
├── package.json          # Kebergantungan
└── tsconfig.json         # Konfigurasi TypeScript
```

---

## 🛠️ Teknologi

| Teknologi | Versi | Tujuan |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.16.9 | Penjana Laman Statik |
| [TypeScript](https://www.typescriptlang.org/) | 5.3.3 | Keselamatan Jenis |
| [Cloudflare Pages](https://pages.cloudflare.com/) | - | Hosting & CDN |
| [Vite](https://vitejs.dev/) | 6.x | Alat Bina |

---

## 🌍 Bahasa Yang Disokong

| Bahasa | Kod | Arah | Status |
|----------|------|-----------|--------|
| English | `en` | Kiri ke Kanan | ✅ Lengkap |
| Filipino | `fil` | Kiri ke Kanan | ✅ Lengkap |
| Bahasa Melayu | `ms` | Kiri ke Kanan | ✅ Lengkap |
| Bengali | `bn` | Kiri ke Kanan | ✅ Lengkap |
| Polish | `pl` | Kiri ke Kanan | ✅ Lengkap |

---

## 📊 Kategori Simbol

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

## 🚢 Pelancaran

### Cloudflare Pages (Disyorkan)

1. Sambungkan repositori GitHub anda ke Cloudflare Pages
2. Konfigurasikan tetapan binaan:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 atau lebih tinggi
3. Klik "Save and Deploy"
4. Laman anda akan hidup di `https://your-project.pages.dev`

---

## 🤝 Menyumbang

Sumbangan dialu-alukan! Sila ikut langkah ini:

1. Fork repositori
2. Cipta ciri cabangan (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan anda (`git commit -m 'Add some AmazingFeature'`)
4. Tolak ke cabang (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Bidang untuk Sumbangan

- 🎨 **UI/UX**: Animasi baharu, interaksi, tema
- 🌍 **Terjemahan**: Tambah bahasa lain atau baiki yang sedia ada
- 📝 **Kandungan**: Tulis siarkan blog, panduan platform
- 🔍 **SEO**: Baiki meta tag, data berstruktur
- ⚡ **Prestasi**: Optimumkan pemuatan, animasi
- 🐛 **Pembetulan Pepijat**: Laporkan dan baiki isu

---

## 📜 Lesen

Projek ini dilicenskan di bawah Lesen MIT - lihat fail [LICENSE](LICENSE) untuk butiran.

---

## 🙏 Penghargaan

- [Astro](https://astro.build/) - Framework web yang hebat
- [Cloudflare](https://www.cloudflare.com/) - Perkhidmatan hosting dan CDN
- Semua penyumbang yang membantu memperbaiki projek ini
- Komuniti sumber terbuka

---

## ⭐ Tunjukkan Sokongan Anda

Jika anda mendapati projek ini membantu, pertimbangkan untuk memberikannya ⭐ bintang di GitHub!

---

<div align="center">

**Dibuat dengan 💖 oleh Pasukan Cute Symbols**

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>
