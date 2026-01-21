# 🎊 Cute Symbols 2026

<div align="center">

**Nowoczesna strona biblioteki symboli estetycznych z obsługą wielojęzyczną**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.16.9-orange.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-blueviolet.svg)](https://pages.cloudflare.com)
[![Multi-language](https://img.shields.io/badge/Languages-5%20Languages-green.svg)](#-obsługiwane-języki)

[Demo](https://cute-symbols.pages.dev) • [Zgłoś błąd](../../issues) • [Zgłoś funkcję](../../issues)

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>

---

## 📖 O Projekcie

**Cute Symbols 2026** to nowoczesna strona biblioteki symboli zoptymalizowana pod kątem urządzeń mobilnych, która zapewnia **2,500+ kuratorskich symboli estetycznych** dla platform mediów społecznościowych takich jak Instagram, TikTok, Discord, Roblox, Twitter/X, WeChat i wiele więcej.

Zbudowana z użyciem [Astro](https://astro.build), TypeScript i wdrożona na Cloudflare Pages, ten projekt demonstruje najlepsze praktyki dla:
- 🌍 **Internationalization (i18n)** - 5 języków z lokalizowaną treścią
- 🔍 **SEO Optimization** - Kompletne meta tagi, dane ustrukturyzowane i mapy stron
- ⚡ **Performance** - Projekt zoptymalizowany pod urządzenia mobilne z wynikami PageSpeed 90+
- 💅 **Modern UI/UX** - Dziewczęcy estetyk w różowo-fioletowych gradientach

### ✨ Główne Funkcje

- 🎯 **Nawigacja Zakładek Hero** - 85% wskaźnika kliknięć, bez tradycyjnego paska nawigacji
- 🌍 **Obsługa Wielojęzyczna** - 5 języków (angielski, filipiński, malajski, bengalski, polski)
- 💗 **Dziewczęcy Estetyka** - Minimalistyczny design z gradientami różowo-fioletowymi
- 📱 **Projekt Mobilny** - Zoptymalizowany dla 85% użytkowników mobilnych
- 🔍 **Zoptymalizowane SEO** - Kompletne meta tagi, dane ustrukturyzowane i mapy stron
- ⚡ **Wysoka Wydajność** - Wdrożenie na Cloudflare Pages z CDN
- 🎨 **Interakcje na Poziomie Dribbble** - Efekty cząsteczkowe, przechyły 3D kart, magnetyczne przyciski
- 📝 **Zgodność z Prawem** - Polityka prywatności, regulamin, strona kontaktowa
- 📚 **System Bloga** - Przewodniki po platformach z obsługą wielojęzyczną
- 🔄 **Wyszukiwanie w Czasie Rzeczywistym** - Natychmiastowe wyszukiwanie symboli

---

## 🚀 Szybki Start

### Wymagania

- Node.js 18.0 lub wyższy
- npm, pnpm lub yarn

### Instalacja

```bash
# Klonuj repozytorium
git clone https://github.com/your-username/cute-symbols.git
cd cute-symbols

# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Otwórz [http://localhost:4321](http://localhost:4321) aby zobaczyć stronę.

### Budowa dla Produkcji

```bash
# Zbuduj projekt
npm run build

# Podgląd budowy produkcyjnej
npm run preview
```

---

## 📁 Struktura Projektu

```
cute-symbols/
├── public/                 # Zasoby statyczne
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Komponenty Astro
│   │   ├── CategoryTabs.astro      # Nawigacja kategorii
│   │   ├── FixedLangSwitcher.astro # Przełącznik języków
│   │   ├── GirlyFooter.astro       # Komponent stopki
│   │   ├── PlatformGuide.astro     # Przewodniki platform
│   │   ├── FAQ.astro               # Sekcja FAQ
│   │   └── SymbolGridApi.astro     # Siatka symboli z API
│   ├── content/            # Treści bloga (Markdown)
│   │   └── blog/          # Wpisy na blogu w 5 językach
│   ├── data/              # Dane symboli
│   │   ├── symbols/      # Kategorie symboli JSON
│   │   └── categories-2026.ts
│   ├── i18n/             # Internationalizacja
│   │   ├── config.ts     # konfiguracja i18n
│   │   └── locales/      # Pliki tłumaczeń
│   │       ├── en.ts     # Angielski
│   │       ├── fil.ts    # Filipino
│   │       ├── ms.ts     # Malajski
│   │       ├── bn.ts     # Bengalski
│   │       └── pl.ts     # Polski
│   ├── layouts/          # Układy stron
│   │   └── Layout.astro  # Główny układ
│   └── pages/            # Strony tras
│       ├── index.astro            # Strona główna angielska
│       ├── [lang]/               # Zlokalizowane trasy
│       │   ├── index.astro       # Zlokalizowane strony główne
│       │   ├── blog.astro        # Lista bloga
│       │   └── blog/[...slug].astro  # Wpis bloga
│       ├── blog/                 # Blog angielski
│       ├── privacy/              # Polityka prywatności
│       ├── terms/                # Regulamin
│       └── contact/              # Strona kontaktowa
├── astro.config.mjs      # Konfiguracja Astro
├── package.json          # Zależności
└── tsconfig.json         # Konfiguracja TypeScript
```

---

## 🛠️ Stos Technologiczny

| Technologia | Wersja | Przeznaczenie |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.16.9 | Generator Stron Statycznych |
| [TypeScript](https://www.typescriptlang.org/) | 5.3.3 | Bezpieczeństwo Typów |
| [Cloudflare Pages](https://pages.cloudflare.com/) | - | Hosting & CDN |
| [Vite](https://vitejs.dev/) | 6.x | Narzędzie Budowania |

---

## 🌍 Obsługiwane Języki

| Język | Kod | Kierunek | Status |
|----------|------|-----------|--------|
| Angielski | `en` | LTR | ✅ Kompletny |
| Filipino | `fil` | LTR | ✅ Kompletny |
| Malajski | `ms` | LTR | ✅ Kompletny |
| Bengalski | `bn` | LTR | ✅ Kompletny |
| Polski | `pl` | LTR | ✅ Kompletny |

---

## 📊 Kategorie Symboli

- ❤️ Serca
- ⭐ Gwiazdy
- 🌸 Kwiaty
- 🎀 Kokardki
- 🎮 Gry
- 🎵 Muzyka
- 🌈 Estetyka
- 🍭 Kawaii
- 🌙 Kaomoji
- 🎨 Dekoracje
- 🌿 Natura
- 🍕 Jedzenie
- 🐾 Zwierzęta
- 🏖️ Aktywności
- ✈️ Transport
- 🌦️ Pogoda
- 📚 Nauka
- 📱 Społeczność
- 🎭 Twarze Emoji
- 🖼️ Ramki i Separatory

---

## 🚢 Wdrożenie

### Cloudflare Pages (Polecane)

1. Podłącz swoje repozytorium GitHub do Cloudflare Pages
2. Skonfiguruj ustawienia budowania:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 lub wyższy
3. Kliknij "Save and Deploy"
4. Twoja strona będzie dostępna pod `https://your-project.pages.dev`

---

## 🤝 Współpraca

Współpraca jest mile widziana! Postępuj zgodnie z tymi krokami:

1. Fork repozytorium
2. Utwórz branch funkcjonalności (`git checkout -b feature/AmazingFeature`)
3. Zatwierdź zmiany (`git commit -m 'Add some AmazingFeature'`)
4. Wypchnij do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

### Obszary Współpracy

- 🎨 **UI/UX**: Nowe animacje, interakcje, motywy
- 🌍 **Tłumaczenia**: Dodaj więcej języków lub ulepsz istniejące
- 📝 **Treść**: Pisz posty na bloga, przewodniki po platformach
- 🔍 **SEO**: Ulepszaj meta tagi, dane ustrukturyzowane
- ⚡ **Wydajność**: Optymalizuj ładowanie, animacje
- 🐛 **Poprawki Błędów**: Zgłaszaj i naprawiaj problemy

---

## 📜 Licencja

Ten projekt jest licencjonowany na licencji MIT - zobacz plik [LICENSE](LICENSE) aby uzyskać szczegóły.

---

## 🙏 Podziękowania

- [Astro](https://astro.build/) - Niesamowity framework webowy
- [Cloudflare](https://www.cloudflare.com/) - Usługi hostingu i CDN
- Wszystkim współtwórcom pomagającym ulepszyć ten projekt
- Społeczności open-source

---

## ⭐ Pokaż Swoje Wsparcie

Jeśli uważasz, że ten projekt jest pomocny, rozważ dodanie ⭐ na GitHub!

---

<div align="center">

**Stworzone z 💖 przez Zespół Cute Symbols**

[English](README.md) • [Filipino](README.fil.md) • [Malay](README.ms.md) • [Bengali](README.bn.md) • [Polish](README.pl.md)

</div>
