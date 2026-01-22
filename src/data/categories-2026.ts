/**
 * 2026年10大核心分类配置
 * 包含多语言支持和SEO优化
 */

export interface Category2026 {
  id: string;
  icon: string;
  color: string;
  names: {
    en: string;
    fil: string;
    ms: string;
    bn: string;
    pl: string;
  };
  descriptions: {
    en: string;
    fil: string;
    ms: string;
    bn: string;
    pl: string;
  };
  badges: {
    en: string[];
    fil: string[];
  };
  seoKeywords: {
    en: string[];
    fil: string[];
  };
  useCases: {
    en: string[];
    fil: string[];
  };
}

export const CATEGORIES_2026: Category2026[] = [
  {
    id: 'hearts',
    icon: '♥',
    color: '#ff6b9d',
    names: {
      en: 'Hearts',
      fil: 'Mga Puso',
      ms: 'Hati',
      bn: 'হৃদয়',
      pl: 'Serce'
    },
    descriptions: {
      en: '2026 most popular heart symbols for love, romance, and cute aesthetics',
      fil: 'Pinakasikat na simbolo ng puso para sa 2026 para sa pag-ibig at romance',
      ms: 'Simbol hati paling popular 2026 untuk cinta, kasih sayang, dan estetik comel',
      bn: '২০২৬ সালের সবচেয়ে জনপ্রিয় হৃদয় প্রতীক, ভালোবাসা এবং সুন্দর নান্দনিকতার জন্য',
      pl: 'Najpopularniejsze symbole serc na 2026 dla miłości, romantyzmu i uroczej estetyki'
    },
    badges: {
      en: ['2026 Most Popular', 'Girls\' Favorite', 'Ins Trending'],
      fil: ['Pinakasikat sa 2026', 'Paborito ng Babae', 'Trending sa IG']
    },
    seoKeywords: {
      en: ['heart symbols', 'love symbols', 'cute hearts', 'aesthetic hearts', 'romantic symbols', 'couple names', 'instagram bio hearts'],
      fil: ['mga simbolo ng puso', 'mga simbolo ng pag-ibig', 'mga cuarting puso', 'mga puso na aesthetic', 'mga romantic na simbolo', 'mga pangalan ng mag-jowa', 'mga puso sa bio ng IG']
    },
    useCases: {
      en: ['Instagram Bio', 'Couple Names', 'Love Messages', 'Romantic Posts', 'Dating Profiles'],
      fil: ['Bio sa Instagram', 'Pangalan ng Mag-Jowa', 'Mensahe ng Pag-Ibig', 'Mga Post na Romantic', 'Profile sa Dating App']
    }
  },
  {
    id: 'flowers',
    icon: '🌸',
    color: '#ffa07a',
    names: {
      en: 'Flowers & Nature',
      fil: 'Mga Bulaklak at Kalikasan',
      ms: 'Bunga & Alam Semula Jadi',
      bn: 'ফুল এবং প্রকৃতি',
      pl: 'Kwiaty i Natura'
    },
    descriptions: {
      en: '2026 latest flower and nature symbols for soft girl, coquette, and aesthetic vibes',
      fil: 'Pinakabagong simbolo ng bulaklak at kalikasan para sa 2026 para sa soft girl, coquette, at aesthetic vibes',
      ms: 'Simbol bunga dan alam semula jadi terkini 2026 untuk soft girl, coquette, dan vibe estetik',
      bn: '২০২৬ সালের সর্বশেষ ফুল এবং প্রকৃতি প্রতীক, soft girl, coquette এবং নান্দনিক ভাইবসের জন্য',
      pl: 'Najnowsze symbole kwiatów i natury z 2026 dla soft girl, coquette i estetycznych wibracji'
    },
    badges: {
      en: ['2026 Latest', 'Aesthetic', 'Soft Girl'],
      fil: ['Pinakabago sa 2026', 'Aesthetic', 'Soft Girl']
    },
    seoKeywords: {
      en: ['flower symbols', 'nature symbols', 'cherry blossom', 'soft girl aesthetic', 'coquette symbols', 'spring vibes'],
      fil: ['mga simbolo ng bulaklak', 'mga simbolo ng kalikasan', 'cherry blossom', 'soft girl aesthetic', 'mga simbolo na coquette', 'spring vibes']
    },
    useCases: {
      en: ['Instagram Posts', 'Xiaohongshu', 'Soft Aesthetic', 'Nature Lovers', 'Spring Content'],
      fil: ['Mga Post sa Instagram', 'Xiaohongshu', 'Soft Aesthetic', 'Mga Mahilig sa Kalikasan', 'Content tungkol sa Spring']
    }
  },
  {
    id: 'stars',
    icon: '⭐',
    color: '#ffd700',
    names: {
      en: 'Stars & Sparkles',
      fil: 'Mga Bituin at Sparkles',
      ms: 'Bintang & Kilau',
      bn: 'তারা এবং চকচকে',
      pl: 'Gwiazdy i Błyskotki'
    },
    descriptions: {
      en: '2026 complete collection of star and sparkle symbols for titles, dividers, and highlights',
      fil: 'Kumpletong koleksyon ng 2026 ng mga simbolo ng bituin at sparkles para sa mga titulo, divider, at highlights',
      ms: 'Koleksi lengkap 2026 simbol bintang dan kilau untuk tajuk, pemisah, dan sorotan',
      bn: '২০২৬ সালের সম্পূর্ণ তারা এবং চকচকে প্রতীক সংগ্রহ, শিরোনাম, বিভাজক এবং হাইলাইটের জন্য',
      pl: 'Pełna kolekcja symboli gwiazd i błyskotek z 2026 do tytułów, separatorów i wyróżnień'
    },
    badges: {
      en: ['2026 Complete', 'Essential', 'Shiny'],
      fil: ['Kumpleto sa 2026', 'Essential', 'Makintab']
    },
    seoKeywords: {
      en: ['star symbols', 'sparkle symbols', 'shiny symbols', 'title decorations', 'divider symbols', 'highlight symbols'],
      fil: ['mga simbolo ng bituin', 'mga simbolo ng sparkles', 'mga kinang na simbolo', 'mga decorasyon sa titulo', 'mga simbolo ng divider', 'mga simbolo ng highlight']
    },
    useCases: {
      en: ['Titles', 'Dividers', 'Highlights', 'Headers', 'Emphasis'],
      fil: ['Mga Titulo', 'Mga Divider', 'Mga Highlight', 'Mga Header', 'Pahalagahan']
    }
  },
  {
    id: 'bows',
    icon: '🎀',
    color: '#ff69b4',
    names: {
      en: 'Bows & Ribbons',
      fil: 'Mga Bow at Ribbons',
      ms: 'Ikatan Reben & Riben',
      bn: 'বো এবং ফিতা',
      pl: 'Kokardki i Wstążki'
    },
    descriptions: {
      en: '2026 girls\' favorite bow and ribbon symbols for cute, girly, and coquette aesthetics',
      fil: 'Paboritong simbolo ng bow at ribbon ng mga babae sa 2026 para sa cute, girly, at coquette aesthetics',
      ms: 'Simbol ikatan reben dan riben kegemaran gadis 2026 untuk estetik comel, girly, dan coquette',
      bn: '২০২৬ সালের মেয়েদের প্রিয় বো এবং ফিতা প্রতীক, সুন্দর, নারীসুলভ এবং coquette নান্দনিকতার জন্য',
      pl: 'Ulubione symbole kokardek i wstążek dziewczynek z 2026 dla uroczej, dziewczęcej i kokieteryjnej estetyki'
    },
    badges: {
      en: ['2026 Girls\' Favorite', 'Aesthetic', 'Sweet'],
      fil: ['Paborito ng Babae sa 2026', 'Aesthetic', 'Matamis']
    },
    seoKeywords: {
      en: ['bow symbols', 'ribbon symbols', 'cute bows', 'girly symbols', 'coquette aesthetic', 'pink aesthetic'],
      fil: ['mga simbolo ng bow', 'mga simbolo ng ribbon', 'mga cuarting bow', 'mga simbol na girly', 'coquette aesthetic', 'pink aesthetic']
    },
    useCases: {
      en: ['Girly Bios', 'Gift Posts', 'Coquette Accounts', 'Cute Aesthetics', 'Princess Vibes'],
      fil: ['Mga Girly na Bio', 'Mga Post ng Gift', 'Mga Coquette Account', 'Mga Cute na Aesthetic', 'Princess Vibes']
    }
  },
  {
    id: 'kaomoji',
    icon: '(*´•͈ ꪹ•͈`*)',
    color: '#87ceeb',
    names: {
      en: 'Kaomoji',
      fil: 'Mga Kaomoji',
      ms: 'Kaomoji',
      bn: 'কাওমোজি',
      pl: 'Kaomoji'
    },
    descriptions: {
      en: '2026 latest cute Japanese kaomoji for unique nicknames, signatures, and self-introductions',
      fil: 'Pinakabagong cute na Japanese na kaomoji para sa 2026 para sa mga unique na nickname, signature, at self-intro',
      ms: 'Kaomoji Jepun comel terkini 2026 untuk nama panggilan unik, tandatangan, dan pengenalan diri',
      bn: '২০২৬ সালের সর্বশেষ সুন্দর জাপানি কাওমোজি, অনন্য ডাকনাম, স্বাক্ষর এবং আত্মপরিচয়ের জন্য',
      pl: 'Najnowsze urocze japońskie kaomoji z 2026 do unikalnych pseudonimów, podpisów i przedstawień'
    },
    badges: {
      en: ['2026 Latest', 'Super Cute', 'Expressions'],
      fil: ['Pinakabago sa 2026', 'Super Cute', 'Mga Ekspresyon']
    },
    seoKeywords: {
      en: ['kaomoji', 'japanese emoticons', 'cute faces', 'text faces', 'kawaii symbols', 'anime emoticons'],
      fil: ['kaomoji', 'mga Japanese emoticon', 'mga cuarting mukha', 'mga mukha sa text', 'mga simbolo na kawaii', 'mga anime emoticon']
    },
    useCases: {
      en: ['Nicknames', 'Signatures', 'Self-Intros', 'Chat Messages', 'Cute Reactions'],
      fil: ['Mga Nickname', 'Mga Signature', 'Mga Self-Intro', 'Mga Mensahe sa Chat', 'Mga Cute na Reaction']
    }
  },
  {
    id: 'dividers',
    icon: '───',
    color: '#ddaedf',
    names: {
      en: 'Dividers',
      fil: 'Mga Divider',
      ms: 'Pemisah',
      bn: 'বিভাজক',
      pl: 'Separatory'
    },
    descriptions: {
      en: '2026 complete divider and decoration symbols for long posts, bio sections, and text formatting',
      fil: 'Kumpletong simbolo ng divider at decorasyon sa 2026 para sa mga mahabang post, bio section, at text formatting',
      ms: 'Simbol pemisah dan hiasan lengkap 2026 untuk post panjang, seksyen bio, dan pemformatan teks',
      bn: '২০২৬ সালের সম্পূর্ণ বিভাজক এবং সাজসজ্জা প্রতীক, দীর্ঘ পোস্ট, বায়ো সেকশন এবং টেক্সট ফরম্যাটিংয়ের জন্য',
      pl: 'Pełna kolekcja separatorów i dekoracji z 2026 do długich postów, sekcji bio i formatowania tekstu'
    },
    badges: {
      en: ['2026 Complete', 'Decorative', 'Dividers'],
      fil: ['Kumpleto sa 2026', 'Pang-dekorasyon', 'Mga Divider']
    },
    seoKeywords: {
      en: ['divider symbols', 'text dividers', 'line decorations', 'section separators', 'bio dividers', 'post formatting'],
      fil: ['mga simbolo ng divider', 'mga divider sa text', 'mga linyang decorasyon', 'mga separator ng seksyon', 'mga divider sa bio', 'post formatting']
    },
    useCases: {
      en: ['Long Posts', 'Bio Sections', 'Text Formatting', 'WeChat Moments', 'Instagram Captions'],
      fil: ['Mga Mahabang Post', 'Mga Seksyon ng Bio', 'Text Formatting', 'WeChat Moments', 'Instagram Caption']
    }
  },
  {
    id: 'animals',
    icon: '🐱',
    color: '#ffb347',
    names: {
      en: 'Animals & Plush',
      fil: 'Mga Hayop at Plush',
      ms: 'Haiwan & Mainan Lembut',
      bn: 'প্রাণী এবং প্লাশ',
      pl: 'Zwierzęta i Pluszaki'
    },
    descriptions: {
      en: '2026 most popular cute animal and plush symbols for pet accounts, healing vibes, and kawaii content',
      fil: 'Pinakasikat na cuarting simbolo ng hayop at plush sa 2026 para sa pet account, healing vibes, at kawaii content',
      ms: 'Simbol haiwan dan mainan lembut comel paling popular 2026 untuk akaun haiwan peliharaan, vibe penyembuhan, dan kandungan kawaii',
      bn: '২০২৬ সালের সবচেয়ে জনপ্রিয় সুন্দর প্রাণী এবং প্লাশ প্রতীক, পোষা প্রাণীর অ্যাকাউন্ট, নিরাময়কর ভাইবস এবং kawaii কন্টেন্টের জন্য',
      pl: 'Najpopularniejsze urocze symbole zwierząt i pluszaków z 2026 do kont zwierząt, uzdrawiających wibracji i treści kawaii'
    },
    badges: {
      en: ['2026 Most Popular', 'Cute Pets', 'Kawaii'],
      fil: ['Pinakasikat sa 2026', 'Mga Cuarting Alaga', 'Kawaii']
    },
    seoKeywords: {
      en: ['animal symbols', 'pet symbols', 'cute animals', 'plush toys', 'kawaii animals', 'healing vibes'],
      fil: ['mga simbolo ng hayop', 'mga simbolo ng alaga', 'mga cuarting hayop', 'mga plush toy', 'mga hayop na kawaii', 'healing vibes']
    },
    useCases: {
      en: ['Pet Accounts', 'Healing Content', 'Kawaii Aesthetic', 'Toy Collections', 'Cute Posts'],
      fil: ['Mga Account ng Alaga', 'Healing na Content', 'Kawaii Aesthetic', 'Koleksyon ng Toy', 'Mga Cuarting Post']
    }
  },
  {
    id: 'combos',
    icon: '✨',
    color: '#e6e6fa',
    names: {
      en: 'Aesthetic Combos',
      fil: 'Mga Aesthetic na Combo',
      ms: 'Combo Estetik',
      bn: 'নান্দনিক কম্বো',
      pl: 'Estetyczne Kombinacje'
    },
    descriptions: {
      en: '2026 complete aesthetic combo presets - copy entire lines for titles and signatures',
      fil: 'Kumpletong preset ng aesthetic combo sa 2026 - kopyahin ang buong linya para sa mga titulo at signature',
      ms: 'Preset combo estetik lengkap 2026 - salin keseluruhan baris untuk tajuk dan tandatangan',
      bn: '২০২৬ সালের সম্পূর্ণ নান্দনিক কম্বো প্রিসেট - শিরোনাম এবং স্বাক্ষরের জন্য পুরো লাইন কপি করুন',
      pl: 'Pełna zestaw estetycznych kombinacji z 2026 - kopiuj całe linie do tytułów i podpisów'
    },
    badges: {
      en: ['2026 Complete', 'Combos', 'Ins Style'],
      fil: ['Kumpleto sa 2026', 'Mga Combo', 'Ins Style']
    },
    seoKeywords: {
      en: ['aesthetic combos', 'symbol combinations', 'ready-made titles', 'signature presets', 'instagram aesthetic'],
      fil: ['mga aesthetic combo', 'mga kombinsyon ng simbolo', 'mga handang titulo', 'mga preset ng signature', 'instagram aesthetic']
    },
    useCases: {
      en: ['Titles', 'Signatures', 'Headers', 'Instagram Bios', 'Quick Copy'],
      fil: ['Mga Titulo', 'Mga Signature', 'Mga Header', 'Instagram Bio', 'Mabilis na Kopya']
    }
  },
  {
    id: 'aesthetic',
    icon: '꒰ა ♱ ໒꒱',
    color: '#b0c4de',
    names: {
      en: 'High Aesthetic',
      fil: 'High Aesthetic',
      ms: 'Estetik Tinggi',
      bn: 'হাই নান্দনিক',
      pl: 'Wysoka Estetyka'
    },
    descriptions: {
      en: '2026 most popular high-end aesthetic symbols - unique and non-mainstream',
      fil: 'Pinakasikat na high-end aesthetic simbolo sa 2026 - unique at hindi common',
      ms: 'Simbol estetik high-end paling popular 2026 - unik dan bukan arus perdana',
      bn: '২০২৬ সালের সবচেয়ে জনপ্রিয় হাই-এন্ড নান্দনিক প্রতীক - অনন্য এবং মূলধারার বাইরের',
      pl: 'Najpopularniejsze high-end estetyczne symbole z 2026 - unikalne i nieszablonowe'
    },
    badges: {
      en: ['2026 Most Popular', 'High Aesthetic', 'Unique'],
      fil: ['Pinakasikat sa 2026', 'High Aesthetic', 'Unique']
    },
    seoKeywords: {
      en: ['high aesthetic', 'unique symbols', 'rare symbols', 'non-mainstream', 'exclusive aesthetic', 'special characters'],
      fil: ['high aesthetic', 'mga unique na simbolo', 'mga rarong simbolo', 'hindi mainstream', 'exclusive aesthetic', 'mga special character']
    },
    useCases: {
      en: ['Unique Bios', 'Exclusive Content', 'High-End Aesthetic', 'Stand Out', 'Premium Vibes'],
      fil: ['Mga Unique na Bio', 'Exclusive na Content', 'High-End Aesthetic', 'Magstand Out', 'Premium Vibes']
    }
  },
  {
    id: 'arrows',
    icon: '➜',
    color: '#9370db',
    names: {
      en: 'Arrows & Pointers',
      fil: 'Mga Arrow at Pointer',
      ms: 'Anak Panah & Penunjuk',
      bn: 'তীর এবং পয়েন্টার',
      pl: 'Strzałki i Wskaźniki'
    },
    descriptions: {
      en: '2026 arrow and pointer symbols for link in bio, shop links, and call-to-action',
      fil: 'Mga simbolo ng arrow at pointer sa 2026 para sa link in bio, shop links, at call-to-action',
      ms: 'Simbol anak panah dan penunjuk 2026 untuk link dalam bio, pautan kedai, dan seruan bertindak',
      bn: '২০২৬ সালের তীর এবং পয়েন্টার প্রতীক, বায়োতে লিংক, দোকানের লিংক এবং কল-টু-অ্যাকশনের জন্য',
      pl: 'Symbole strzałek i wskaźników z 2026 do linków w bio, linków do sklepu i wezwań do działania'
    },
    badges: {
      en: ['2026 Essential', 'CTA', 'Links'],
      fil: ['Essential sa 2026', 'CTA', 'Mga Link']
    },
    seoKeywords: {
      en: ['arrow symbols', 'pointer symbols', 'link indicators', 'call to action', 'bio links', 'shop links'],
      fil: ['mga simbolo ng arrow', 'mga simbolo ng pointer', 'mga indicator ng link', 'call to action', 'mga link sa bio', 'mga link sa shop']
    },
    useCases: {
      en: ['Link in Bio', 'Shop Links', 'Call-to-Action', 'Directions', 'Emphasis'],
      fil: ['Link sa Bio', 'Mga Link sa Shop', 'Call-to-Action', 'Mga Direksyon', 'Pahalagahan']
    }
  },
  {
    id: 'music',
    icon: '🎵',
    color: '#F472B6',
    names: {
      en: 'Music',
      fil: 'Musika',
      ms: 'Muzik',
      bn: 'সঙ্গীত',
      pl: 'Muzyka'
    },
    descriptions: {
      en: 'Musical notes, instruments, and audio symbols for music lovers',
      fil: 'Mga nota ng musika, instrumento, at simbolo ng audio para sa mga mahilig sa musika',
      ms: 'Nota muzik, instrumen, dan simbol audio untuk peminat muzik',
      bn: 'সঙ্গীত নোট, যন্ত্র, এবং অডিওডিও সিম্বল সঙ্গীতপ্রেমীদের জন্য',
      pl: 'Nutki muzyczne, instrumenty i symbole audio dla miłośników muzyki'
    },
    badges: {
      en: ['Melodies', 'Rhythms', 'Beats'],
      fil: ['Melodya', 'Ritmo', 'Beats']
    },
    seoKeywords: {
      en: ['music symbols', 'musical notes', 'audio symbols', 'instrument emoji', 'song decoration'],
      fil: ['mga simbolo ng musika', 'nota muzikal', 'sMBOL ng audio', 'emoji ng instrument', 'dekorasyon ng kanta']
    },
    useCases: {
      en: ['Music Bios', 'Playlist Titles', 'Artist Names', 'Song Covers'],
      fil: ['Mga Bio sa Musika', 'Pamagat ng Playlist', 'Pangalan ng Artist', 'Cover ng Kanta']
    }
  },
  {
    id: 'food',
    icon: '🍰',
    color: '#F9A8D4',
    names: {
      en: 'Food & Drinks',
      fil: 'Pagkain at Inumin',
      ms: 'Makanan & Minuman',
      bn: 'খাদ্য ওযদ্রপানী',
      pl: 'Jedzenie i Napoje'
    },
    descriptions: {
      en: 'Cute food and beverage symbols for foodies and dessert lovers',
      fil: 'Mga simbolo ng pagkain at inumin para sa mga foodie at mga mahilig sa meryenda',
      ms: 'Simbol makanan dan minuman untuk foodie dan peminat pencuci mulut',
      bn: 'খাদ্য এবং পানীর সিম্বল ফুডপ্রিয় এবং মিষ্ঠাখ্যদের জন্য',
      pl: 'Symbole jedzenia i napojów dla foodió i miłośników deserów'
    },
    badges: {
      en: ['Sweet', 'Yummy', 'Tasty'],
      fil: ['Matamis', 'Masarap', 'Malinamnam']
    },
    seoKeywords: {
      en: ['food symbols', 'dessert emoji', 'drink symbols', 'cafe symbols', 'cute food'],
      fil: ['mga simbolo ng pagkain', 'emoji ng meryenda', 'simbolo ng inumin', 'mga simbolo ng cafe', 'masarap na pagkain']
    },
    useCases: {
      en: ['Restaurant Bios', 'Food Posts', 'Cafe Names', 'Recipe Titles'],
      fil: ['Mga Bio sa Restaurant', 'Post ng Pagkain', 'Pangalan ng Cafe', 'Pamagat ng Recipe']
    }
  },
  {
    id: 'weather',
    icon: '☀️',
    color: '#38BDF8',
    names: {
      en: 'Weather & Sky',
      fil: 'Panahon at Langit',
      ms: 'Cuaca & Langit',
      bn: 'আবহাওী ওআকাশ',
      pl: 'Pogoda i Niebo'
    },
    descriptions: {
      en: 'Weather symbols including sun, moon, stars, clouds, and seasonal elements',
      fil: 'Mga simbolo ng panahon kabilang ang araw, buwan, bituin, ulap, at mga elementong pana-panahon',
      ms: 'Simbol cuaca termasuklah matahari, bulan, bintang, awan, dan elemen musim',
      bn: 'আবহাওী সম্বল সূর্য, চন্দ্র, তারা, মেঘ এবং মৌসুমো আবহাওীী উপাদান মানস',
      pl: 'Symbole pogody w tym słońce, księżyca, gwiazdy, chmury i elementy pór roku'
    },
    badges: {
      en: ['Sunny', 'Starry', 'Dreamy'],
      fil: ['Sunny', 'Star', 'Dreamy']
    },
    seoKeywords: {
      en: ['weather symbols', 'sun moon symbols', 'sky symbols', 'seasonal emoji', 'nature vibes'],
      fil: ['mga simbolo ng panahon', 'sUmut ng buwan', 'mga simbolo ng langit', 'emoji ng pana-panahon', 'vibes ng kalikasan']
    },
    useCases: {
      en: ['Weather Updates', 'Travel Posts', 'Nature Photography', 'Daily Status'],
      fil: ['Update ng Panahon', 'Post ng Paglalakbay', 'Potograpiya ng Kalikasan', 'Status Araw-araw']
    }
  },
  {
    id: 'decorative',
    icon: '✨',
    color: '#A855F7',
    names: {
      en: 'Decorative',
      fil: 'Dekoratibong',
      ms: 'Hiasan',
      bn: 'সাজসজ্জা',
      pl: 'Dekoracyjne'
    },
    descriptions: {
      en: 'Sparkles, gems, crowns, and magical decorative elements',
      fil: 'Mga kilay, gem, korona, at mga elementong dekoratibong mahika',
      ms: 'Kilau, permata, mahkota, dan elemen hiasan ajaib',
      bn: 'ঝলকানি, মণি, মুকুট, এবং জাদুকরিয সাজসজ্ঞ উপাদান',
      pl: 'Błyskotki, klejnoty, korony i magiczne elementy dekoracyjne'
    },
    badges: {
      en: ['Magical', 'Fancy', 'Elegant'],
      fil: ['Mahiwang', 'Fancy', 'Elegante']
    },
    seoKeywords: {
      en: ['decorative symbols', 'sparkles', 'fancy elements', 'magic symbols', 'glitter'],
      fil: ['mga simbolo ng dekoratibong', 'sparkles', 'mga elementong fancy', 'mga simbolo ng mahika', 'glitter']
    },
    useCases: {
      en: ['Highlighting', 'Emphasis', 'Magical Vibes', 'Fantasy Themes'],
      fil: ['Pagpapahalag', 'Pahalagahan', 'Magical Vibes', 'Mga Temang Pantasiya']
    }
  },
  {
    id: 'borders',
    icon: '『』',
    color: '#EC4899',
    names: {
      en: 'Borders & Brackets',
      fil: 'Mga Border at Kurungan',
      ms: 'Sempadan & Kurungan',
      bn: 'সীমানা এবং বন্ধনী',
      pl: 'Ramki i Nawiasy'
    },
    descriptions: {
      en: 'Cute borders, brackets, and frames for text decoration',
      fil: 'Mga border na cute, kurungan, at frame para sa dekorasyon ng teksto',
      ms: 'Sempadan comel, kurungan, dan bingkai untuk hiasan teks',
      bn: 'টেক্স ডেকোর সীমানা, বন্ধনী, এবং ফ্রেম টেক্সস ডেকোর সাজসজ্ঞ',
      pl: 'Urocze ramki, nawiasy i ramki do dekoracji tekstu'
    },
    badges: {
      en: ['Frames', 'Boxes', 'Style'],
      fil: ['Frame', 'Box', 'Estilo']
    },
    seoKeywords: {
      en: ['border symbols', 'brackets', 'text frames', 'decorative boxes', 'fancy borders'],
      fil: ['mga simbolo ng border', 'mga kurungan', 'frame ng teksto', 'mga dekoratibong box', 'mga border na fancy']
    },
    useCases: {
      en: ['Text Emphasis', 'Quote Boxes', 'Name Styling', 'Content Organization'],
      fil: ['Pahalag sa Teksto', 'Mga Box ng Kutuhan', 'Styling ng Pangalan', 'Organisasyon ng Content']
    }
  },
  {
    id: 'text-decorations',
    icon: '˚✧',
    color: '#F472B6',
    names: {
      en: 'Text Decorations',
      fil: 'Dekorasyon sa Teksto',
      ms: 'Hiasan Teks',
      bn: 'টেক্সস ডেকোর সাজসজ্ঞ',
      pl: 'Dekoracje Tekstu'
    },
    descriptions: {
      en: 'Tiny decorative symbols for text styling and embellishment',
      fil: 'Mga maliit na simbolo para sa styling ng teksto at pagpapahaba',
      ms: 'Simbol kecil untuk gaya teks dan hiasan',
      bn: 'টেক্সস ডেকোর সাজসজ্ঞ স্টাইল এবং প্রসারণের জন্য',
      pl: 'Małe dekoracje do stylizacji tekstu i upiększania'
    },
    badges: {
      en: ['Minimal', 'Aesthetic', 'Cute'],
      fil: ['Minimal', 'Aesthetic', 'Cute']
    },
    seoKeywords: {
      en: ['text decorations', 'text symbols', 'aesthetic text', 'cute text embellishments'],
      fil: ['mga dekorasyon sa teksto', 'mga simbolo ng teksto', 'aesthetic na teksto', 'mga cute na text embellishments']
    },
    useCases: {
      en: ['Username Styling', 'Bio Decorations', 'Name Embellishments', 'Text Breaks'],
      fil: ['Styling ng Username', 'Dekorasyon ng Bio', 'Pagpapahaba sa Pangalan', 'Text Breaks']
    }
  },
  {
    id: 'emoji-faces',
    icon: '🥺',
    color: '#FCD34D',
    names: {
      en: 'Emoji Faces',
      fil: 'Mga Mukha ng Emoji',
      ms: 'Muka Emoji',
      bn: 'ইমোজি ফেইস',
      pl: 'Twarze Emoji'
    },
    descriptions: {
      en: 'Adorable and expressive face emojis and kaomoji',
      fil: 'Mga cute at expressive na face emojis at kaomoji',
      ms: 'Muka comel dan ekspresif emoji faces dan kaomoji',
      bn: 'সুপ্রাণী এবং এক্সপ্রেসিভ ফেস ইমোজি',
      pl: 'Słodkie i wyrazne twarze emoji i kaomoji'
    },
    badges: {
      en: ['Expressive', 'Cute', 'Emotional'],
      fil: ['Expressive', 'Cute', 'Emotional']
    },
    seoKeywords: {
      en: ['emoji faces', 'cute faces', 'kaomoji', 'expressive emojis', 'emotional symbols'],
      fil: ['mga mukha ng emoji', 'cute faces', 'kaomoji', 'mga expressive na emojis', 'mga emosyonal na simbolo']
    },
    useCases: {
      en: ['Emoji Art', 'Reactions', 'Status Updates', 'Chats'],
      fil: ['Emoji Art', 'Mga Reaksyon', 'Status Update', 'Mga Chat']
    }
  },
  {
    id: 'seasonal',
    icon: '🎃🎄',
    color: '#F59E0B',
    names: {
      en: 'Seasonal & Holiday',
      fil: 'Mga Panahon at Holiday',
      ms: 'Musim & Cuti',
      bn: 'ঋতু এবং ছুটি',
      pl: 'Sezonowe i Święta'
    },
    descriptions: {
      en: 'Symbols for seasons, holidays, and special celebrations',
      fil: 'Mga simbolo para sa panahon, holiday, at mga espesyal na selebrasyon',
      ms: 'Simbol untuk musim, cuti, dan sambutan peraya',
      bn: 'ঋতু, ছুটি এবং বিশেষ উৎসজাধিক উপলখাযান সিম্বল',
      pl: 'Symbole dla pór roku, świąt i specjalnych celebracji'
    },
    badges: {
      en: ['Festive', 'Celebration', 'Events'],
      fil: ['PistHubad', 'Selebrasyon', 'Mga Kaganapan']
    },
    seoKeywords: {
      en: ['seasonal symbols', 'holiday emojis', 'festival symbols', 'celebration icons'],
      fil: ['mga simbolo ng panahon', 'holiday emojis', 'mga simbolo ng pistHubad', 'mga icon ng selebrasyon']
    },
    useCases: {
      en: ['Holiday Posts', 'Event Promotions', 'Seasonal Greetings', 'Festival Updates'],
      fil: ['Post ng Holiday', 'Promosyon ng Kaganapan', 'Pagsunod ng Panahon', 'Update ng PistHubad']
    }
  },
  {
    id: 'activities',
    icon: '🎮',
    color: '#8B5CF6',
    names: {
      en: 'Activities & Hobbies',
      fil: 'Mga Aktibidad at Libangan',
      ms: 'Aktiviti & Hobi',
      bn: 'কার্যকলপা এবং শখ',
      pl: 'Aktywności i Hobby'
    },
    descriptions: {
      en: 'Sports, games, arts, music, travel, and hobby symbols',
      fil: 'Mga simbolo ng sports, games, sining, musika, paglalakbay, at mga hobi',
      ms: 'Simbol sukan, permainan, seni, muzik, pelancongan, dan hobi',
      bn: 'খেলাধার, খেলা, শিল্প, সঙ্গীত, ভ্রমণ, এবং শখীী সিম্বল',
      pl: 'Sporty, gry, sztuka, muzyka, podróże i hobby'
    },
    badges: {
      en: ['Fun', 'Creative', 'Lifestyle'],
      fil: ['Enjoyable', 'Creative', 'Lifestyle']
    },
    seoKeywords: {
      en: ['activity symbols', 'hobby icons', 'sports emoji', 'gaming symbols', 'lifestyle icons'],
      fil: ['mga simbolo ng aktibidad', 'icon ng hobi', 'sports emoji', 'mga simbolo ng gaming', 'mga icon ng lifestyle']
    },
    useCases: {
      en: ['Gaming Profiles', 'Hobby Posts', 'Activity Status', 'Interest Sharing'],
      fil: ['Profile ng Gamer', 'Post ng Hobby', 'Status ng Aktibidad', 'Pagbabahagi ng Interest']
    }
  },
  {
    id: 'nature',
    icon: '🌿',
    color: '#10B981',
    names: {
      en: 'Nature Elements',
      fil: 'Mga Elemento ng Kalikasan',
      ms: 'Elemen Alam Semula Jadi',
      bn: 'প্রকৃতির উপাদান',
      pl: 'Elementy Natury'
    },
    descriptions: {
      en: 'Plants, flowers, water, fire, and earth elemental symbols',
      fil: 'Mga halaman, bulaklak, tubig, apoy, at elemental simbolo ng lupa',
      ms: 'Tumbuhan, bunga, air, api, dan simbol elemen bumi',
      bn: 'গাছ, ফুল, জল, অগ্নি, এবং মৌলিক উপাদান সিম্বল',
      pl: 'Rośliny, kwiaty, woda, ogień i symboliki elementów ziemi'
    },
    badges: {
      en: ['Organic', 'Natural', 'Eco-friendly'],
      fil: ['Organik', 'Natural', 'Eco-friendly']
    },
    seoKeywords: {
      en: ['nature symbols', 'plant symbols', 'eco symbols', 'earth elements', 'natural vibes'],
      fil: ['mga simbolo ng kalikasan', 'simbolo ng halaman', 'eco simbolo', 'mga elemento ng lupa', 'natural na vibes']
    },
    useCases: {
      en: ['Eco Posts', 'Nature Photography', 'Environmental Content', 'Zen Vibes'],
      fil: ['Eco Post', 'Potograpiya ng Kalikasan', 'Content na Pangkalikasan', 'Zen Vibes']
    }
  },
  {
    id: 'math',
    icon: '∞',
    color: '#8B5CF6',
    names: {
      en: 'Math & Science',
      fil: 'Matematika at Siyensya',
      ms: 'Matematik & Sains',
      bn: 'গণিত ও বিজ্ঞান',
      pl: 'Matematyka i Nauka'
    },
    descriptions: {
      en: 'Mathematical symbols for infinity, equations, and scientific notation',
      fil: 'Mga simbolo ng matematika para sa infinity, equation, at siyentipikong notasyon',
      ms: 'Simbol matematik untuk ketakterhinggaan, persamaan, dan notasi saintifik',
      bn: 'অসীম, সমীকরণ এবং বৈজ্ঞানিক স্বরলিপির জন্য গাণিতিক প্রতীক',
      pl: 'Symbole matematyczne dla nieskończoności, równań i notacji naukowych'
    },
    badges: {
      en: ['Infinite', 'Scientific', 'Smart'],
      fil: ['Infinity', 'Siyentipiko', 'Matalino']
    },
    seoKeywords: {
      en: ['math symbols', 'infinity symbol', 'pi symbol', 'scientific notation', 'mathematical symbols', 'equation symbols'],
      fil: ['mga simbolo ng matematika', 'simbolo ng infinity', 'simbolo ng pi', 'siyentipikong notasyon']
    },
    useCases: {
      en: ['Math Homework', 'Science Posts', 'Smart Bios', 'Educational Content'],
      fil: ['Math Homework', 'Post sa Siyensya', 'Matalinong Bio', 'Edukasyonal na Content']
    }
  },
  {
    id: 'hands',
    icon: '👋',
    color: '#FBBF24',
    names: {
      en: 'Hand Gestures',
      fil: 'Mga Kilos ng Kamay',
      ms: 'Isyarat Tangan',
      bn: 'হাত ইশারা',
      pl: 'Gesty Ręczne'
    },
    descriptions: {
      en: 'Hand gesture emojis for waving, clapping, thumbs up, and more',
      fil: 'Mga emoji ng kilos ng kamay para sa pagwawave, pagpalakpaka, thumbs up, at marami pa',
      ms: 'Emoji isyarat tangan untuk melambai, bertepuk, ibu jari ke atas, dan banyak lagi',
      bn: 'হাতের ইশারা ইমোজি দেওয়া, তালি বাজানো, থাম্ব আপ এবং আরও অনেক কিছুর জন্য',
      pl: 'Emoji gestów ręki do machania, klaszczania, kciuka w górę i więcej'
    },
    badges: {
      en: ['Expressive', 'Gestures', 'Social'],
      fil: ['Expressive', 'Mga Kilos', 'Sosyal']
    },
    seoKeywords: {
      en: ['hand gestures', 'hand emoji', 'thumbs up', 'waving hand', 'clapping hands'],
      fil: ['mga kilos ng kamay', 'emoji ng kamay', 'thumbs up', 'pagwawave ng kamay']
    },
    useCases: {
      en: ['Greetings', 'Reactions', 'Social Media', 'Comments'],
      fil: ['Pagbati', 'Mga Reaksyon', 'Social Media', 'Mga Komento']
    }
  },
  {
    id: 'gaming',
    icon: '🎮',
    color: '#EF4444',
    names: {
      en: 'Gaming',
      fil: 'Paglalaro',
      ms: 'Permainan',
      bn: 'গেমিং',
      pl: 'Gry'
    },
    descriptions: {
      en: 'Gaming symbols including controllers, dice, cards, and trophies',
      fil: 'Mga simbolo ng gaming kabilang ang controller, dice, card, at trophy',
      ms: 'Simbol permainan termasuk pengawal, dadu, kad, dan trofi',
      bn: 'গেমিং প্রতীক যার মধ্যে কন্ট্রোলার, ডাইস, কার্ড এবং ট্রফি অন্তর্ভুক্ত',
      pl: 'Symbole gier w tym kontrolery, kości, karty i trofea'
    },
    badges: {
      en: ['Gamers', 'Esports', 'Achievement'],
      fil: ['Mga Gamer', 'Esports', 'Achievement']
    },
    seoKeywords: {
      en: ['gaming symbols', 'video game emoji', 'esports icons', 'gamer tags', 'game controller'],
      fil: ['mga simbolo ng gaming', 'emoji ng video game', 'icon ng esports', 'mga tag ng gamer']
    },
    useCases: {
      en: ['Gamer Bios', 'Esports Teams', 'Achievement Posts', 'Game Reviews'],
      fil: ['Mga Bio ng Gamer', 'Mga Koponan ng Esports', 'Post ng Achievement', 'Review ng Laro']
    }
  },
  {
    id: 'emotions',
    icon: '😊',
    color: '#F59E0B',
    names: {
      en: 'Emotions & Faces',
      fil: 'Mga Emosyon at Mukha',
      ms: 'Emosi & Muka',
      bn: 'আবেগ ও মুখ',
      pl: 'Emocje i Twarze'
    },
    descriptions: {
      en: 'Expressive face emojis showing emotions, feelings, and reactions',
      fil: 'Mga expressive na face emoji na nagpapakita ng emoosyon, damdamin, at reaksyon',
      ms: 'Emoji muka ekspresif yang menunjukkan emosi, perasaan, dan tindak balas',
      bn: 'আবেগ, অনুভূতি এবং প্রতিক্রিয়া দেখানো রঙিন মুখের ইমোজি',
      pl: 'Ekspresyjne emoji twarzy pokazujące emocje, uczucia i reakcje'
    },
    badges: {
      en: ['Expressive', 'Emotional', 'Reactions'],
      fil: ['Expressive', 'Emosyonal', 'Mga Reaksyon']
    },
    seoKeywords: {
      en: ['emotion emoji', 'face emoji', 'smiley faces', 'emotional symbols', 'reaction faces'],
      fil: ['emoji ng emosyon', 'emoji ng mukha', 'mga ngiting mukha', 'mga simbol na emosyonal']
    },
    useCases: {
      en: ['Status Updates', 'Chat Reactions', 'Social Posts', 'Expressing Feelings'],
      fil: ['Status Update', 'Mga Reaksyon sa Chat', 'Post sa Social', 'Pagpapahayag ng Damdamin']
    }
  },
  {
    id: 'text-decor',
    icon: '̣̣',
    color: '#EC4899',
    names: {
      en: 'Text Decorations',
      fil: 'Dekorasyon sa Teksto',
      ms: 'Hiasan Teks',
      bn: 'টেক্সস ডেকোর',
      pl: 'Dekoracje Tekstu'
    },
    descriptions: {
      en: 'Tiny decorative marks and accents for text embellishment',
      fil: 'Mga maliit na markang dekoratibo at accent para sa pagpapahaba ng teksto',
      ms: 'Tanda hiasan kecil dan aksen untuk hiasan teks',
      bn: 'টেক্সস সাজসজ্জার জন্য ক্ষুদ্র আলংকারিক চিহ্ন এবং অ্যাকসেন্ট',
      pl: 'Małe znaki dekoracyjne i akcenty do upiększania tekstu'
    },
    badges: {
      en: ['Subtle', 'Minimal', 'Aesthetic'],
      fil: ['Subtle', 'Minimal', 'Aesthetic']
    },
    seoKeywords: {
      en: ['text decorations', 'text accents', 'aesthetic text', 'text embellishments', 'typing symbols'],
      fil: ['mga dekorasyon sa teksto', 'mga accent sa teksto', 'aesthetic na teksto']
    },
    useCases: {
      en: ['Username Styling', 'Bio Accents', 'Name Decoration', 'Text Effects'],
      fil: ['Styling ng Username', 'Mga Accent sa Bio', 'Dekorasyon ng Pangalan', 'Mga Epekto sa Teksto']
    }
  }
];

// 获取分类信息（支持多语言）
export function getCategoryInfo2026(categoryId: string, locale: string = 'en'): Category2026 | undefined {
  return CATEGORIES_2026.find(c => c.id === categoryId);
}

// 获取所有分类名称（用于导航）
export function getAllCategoryNames(locale: string = 'en') {
  return CATEGORIES_2026.map(cat => ({
    id: cat.id,
    name: cat.names[locale as keyof typeof cat.names] || cat.names.en,
    icon: cat.icon
  }));
}
