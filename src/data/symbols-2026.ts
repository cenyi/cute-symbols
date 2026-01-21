/**
 * 2026年10大核心分类符号库
 * 包含完整的SEO标签和多语言支持
 */

export interface Symbol2026 {
  id: string;
  symbol: string;
  category: string;
  unicode: string;
  tags: {
    en: string[];
    fil?: string[];
    ms?: string[];
    bn?: string[];
    pl?: string[];
  };
  seo: {
    en: string;
    fil?: string;
    ms?: string;
    bn?: string;
    pl?: string;
  };
  usage: {
    en: string;
    fil?: string;
    ms?: string;
    bn?: string;
    pl?: string;
  };
}

// 1. ♥ 爱心系列 (35个)
export const heartsSymbols: Symbol2026[] = [
  {    
    id: 'heart-1',
    symbol: '♡',
    category: 'hearts',
    unicode: 'U+2661',
    tags: {
      en: ['heart', 'love', 'white heart', 'outline', 'cute', 'aesthetic', 'cute heart symbols', 'cute symbols to copy', 'copy and paste cute symbols', 'cute symbols for instagram', 'cute bio symbols', 'cute name symbols', 'cute symbols for roblox', 'cute symbols aesthetic', 'cute symbols copy and paste'],
      fil: ['puso', 'pag-ibig', 'puting puso', 'guhit', 'cute', 'aesthetic'],
      ms: ['hati', 'cinta', 'hati putih', 'garisan', 'comel', 'aesthetic'],
      bn: ['হৃদয়', 'ভালোবাসা', 'সাদা হৃদয়', 'রূপরেখা', 'সুন্দর', 'aesthetic'],
      pl: ['serce', 'miłość', 'białe serce', 'kontur', 'słodkie', 'aesthetic']
    },
    seo: {
      en: 'white heart symbol cute aesthetic love',
      fil: 'puting puso simbolo cute aesthetic pag-ibig',
      ms: 'hati putih simbol comel aesthetic cinta',
      bn: 'সাদা হৃদয় প্রতীক সুন্দর aesthetic ভালোবাসা',
      pl: 'białe serce symbol słodkie aesthetic miłość'
    },
    usage: {
      en: 'Perfect for Instagram bio, couple names, romantic posts',
      fil: 'Perpekto para sa Instagram bio, pangalan ng magkasintahan, romantic na post',
      ms: 'Sempurna untuk Instagram bio, nama pasangan, posting romantik',
      bn: 'Instagram বায়ো, কাপলের নাম, রোমান্টিক পোস্টের জন্য সেরা',
      pl: 'Idealne do Instagram bio, nazw par, romantycznych postów'
    }
  },
  {
    id: 'heart-2',
    symbol: '♥',
    category: 'hearts',
    unicode: 'U+2665',
    tags: {
      en: ['heart', 'love', 'black heart', 'filled', 'classic'],
      fil: ['puso', 'pag-ibig', 'itim na puso', 'punuan', 'klassik'],
      ms: ['hati', 'cinta', 'hati hitam', 'isi', 'klasik'],
      bn: ['হৃদয়', 'ভালোবাসা', 'কালো হৃদয়', 'পূর্ণ', 'ক্লাসিক'],
      pl: ['serce', 'miłość', 'czarne serce', 'wypełnione', 'klasyczne']
    },
    seo: {
      en: 'black heart symbol love classic romantic',
      fil: 'itim na puso simbolo pag-ibig klassik romantiko',
      ms: 'hati hitam simbol cinta klasik romantik',
      bn: 'কালো হৃদয় প্রতীক ভালোবাসা ক্লাসিক রোমান্টিক',
      pl: 'czarne serce symbol miłość klasyczny romantyczny'
    },
    usage: {
      en: 'Classic heart for names, bios, love messages',
      fil: 'Klassik na puso para sa pangalan, bio, mensahe ng pag-ibig',
      ms: 'Hati klasik untuk nama, bio, mesej cinta',
      bn: 'নাম, বায়ো, ভালোবাসার বার্তার জন্য ক্লাসিক হৃদয়',
      pl: 'Klasyczne serce do nazw, bio, miłosnych wiadomości'
    }
  },
  {
    id: 'heart-3',
    symbol: '❥',
    category: 'hearts',
    unicode: 'U+2765',
    tags: {
      en: ['heart', 'arrow', 'cupid', 'love', 'romantic'],
      fil: ['puso', 'pana', 'cupid', 'pag-ibig', 'romantiko'],
      ms: ['hati', 'panah', 'cupid', 'cinta', 'romantik'],
      bn: ['হৃদয়', 'তীর', 'কিউপিড', 'ভালোবাসা', 'রোমান্টিক'],
      pl: ['serce', 'strzała', 'cupid', 'miłość', 'romantyczny']
    },
    seo: {
      en: 'heart arrow cupid love symbol romantic',
      fil: 'pusong pana cupid pag-ibig simbolo romantiko',
      ms: 'hati panah cupid cinta simbol romantik',
      bn: 'হৃদয় তীর কিউপিড ভালোবাসা প্রতীক রোমান্টিক',
      pl: 'serce strzała cupid miłość symbol romantyczny'
    },
    usage: {
      en: 'Romantic symbol for love confessions, couple content',
      fil: 'Romantikong simbolo para sa pag-amin sa pag-ibig, content ng magkasintahan',
      ms: 'Simbol romantik untuk pengakuan cinta, kandungan pasangan',
      bn: 'ভালোবাসার স্বীকারোক্তি, কাপল কন্টেন্টের জন্য রোমান্টিক প্রতীক',
      pl: 'Romantyczny symbol do wyznań miłosnych, treści dla par'
    }
  },
  {
    id: 'heart-4',
    symbol: '❦',
    category: 'hearts',
    unicode: 'U+2766',
    tags: {
      en: ['heart', 'floral', 'decorative', 'elegant'],
      fil: ['puso', 'bulaklak', 'dekoratibo', 'elegante'],
      ms: ['hati', 'bunga', 'hiasan', 'elegan'],
      bn: ['হৃদয়', 'ফুল', 'আলংকারিক', 'মার্জিত'],
      pl: ['serce', 'kwiatowy', 'dekoracyjny', 'elegancki']
    },
    seo: {
      en: 'floral heart decorative elegant symbol',
      fil: 'pusong floral dekoratibo elegante simbolo',
      ms: 'hati bunga hiasan elegan simbol',
      bn: 'ফুলের হৃদয় আলংকারিক মার্জিত প্রতীক',
      pl: 'kwiatowe serce dekoracyjny elegancki symbol'
    },
    usage: {
      en: 'Elegant heart for wedding, romantic events',
      fil: 'Eleganteng puso para sa kasal, romantikong event',
      ms: 'Hati elegan untuk perkahwinan, acara romantis',
      bn: 'বিয়ে, রোমান্টিক অনুষ্ঠানের জন্য মার্জিত হৃদয়',
      pl: 'Eleganckie serce na śluby, romantyczne wydarzenia'
    }
  },
  {
    id: 'heart-5',
    symbol: '❣',
    category: 'hearts',
    unicode: 'U+2763',
    tags: {
      en: ['heart', 'exclamation', 'emphasis', 'love'],
      fil: ['puso', 'padyak', 'diin', 'pag-ibig'],
      ms: ['hati', 'seruan', 'penekanan', 'cinta'],
      bn: ['হৃদয়', 'বিস্ময়বোধক', 'জোর', 'ভালোবাসা'],
      pl: ['serce', 'wykrzyknik', 'nacisk', 'miłość']
    },
    seo: {
      en: 'heart exclamation emphasis love symbol',
      fil: 'pusong padyak diin pag-ibig simbolo',
      ms: 'hati seruan penekanan cinta simbol',
      bn: 'হৃদয় বিস্ময়বোধক জোর ভালোবাসা প্রতীক',
      pl: 'serce wykrzyknik nacisk miłość symbol'
    },
    usage: {
      en: 'Emphasize love, excitement in messages',
      fil: 'Diin ang pag-ibig, excitement sa mga mensahe',
      ms: 'Tekankan cinta, kegembiraan dalam mesej',
      bn: 'বার্তায় ভালোবাসা, উত্তেজনা জোর দিন',
      pl: 'Podkreśl miłość, ekscytację w wiadomościach'
    }
  },
  {
    id: 'heart-6',
    symbol: 'ღ',
    category: 'hearts',
    unicode: 'U+10E6',
    tags: {
      en: ['heart', 'georgian', 'cute', 'unique'],
      fil: ['puso', 'georgian', 'cute', 'unique'],
      ms: ['hati', 'georgian', 'comel', 'unik'],
      bn: ['হৃদয়', 'জর্জিয়ান', 'সুন্দর', 'অনন্য'],
      pl: ['serce', 'gruzińskie', 'słodkie', 'unikalne']
    },
    seo: {
      en: 'georgian heart cute unique symbol',
      fil: 'georgian na puso cute unique simbolo',
      ms: 'hati georgian comel unik simbol',
      bn: 'জর্জিয়ান হৃদয় সুন্দর অনন্য প্রতীক',
      pl: 'gruzińskie serce słodkie unikalny symbol'
    },
    usage: {
      en: 'Unique heart for standing out in bios',
      fil: 'Unique na puso para tumayo sa bio',
      ms: 'Hati unik untuk menonjol dalam bio',
      bn: 'বায়োতে আলাদা হওয়ার জন্য অনন্য হৃদয়',
      pl: 'Unikalne serce do wyróżnienia w bio'
    }
  },
  {
    id: 'heart-7',
    symbol: '🩷',
    category: 'hearts',
    unicode: 'U+1FA77',
    tags: {
      en: ['heart', 'pink', 'emoji', 'cute', 'soft'],
      fil: ['puso', 'pink', 'emoji', 'cute', 'malambot'],
      ms: ['hati', 'pink', 'emoji', 'comel', 'lembut'],
      bn: ['হৃদয়', 'গোলাপি', 'ইমোজি', 'সুন্দর', 'নরম'],
      pl: ['serce', 'różowy', 'emoji', 'słodkie', 'miękkie']
    },
    seo: {
      en: 'pink heart emoji cute soft love',
      fil: 'pink na puso emoji cute malambot na pag-ibig',
      ms: 'hati pink emoji comel lembut cinta',
      bn: 'গোলাপি হৃদয় ইমোজি সুন্দর নরম ভালোবাসা',
      pl: 'różowe serce emoji słodkie miękkie miłość'
    },
    usage: {
      en: 'Soft pink heart for girly aesthetic',
      fil: 'Malambot na pink na puso para sa girly aesthetic',
      ms: 'Hati pink lembut untuk aesthetic gadis',
      bn: 'গার্লি aesthetic এর জন্য নরম গোলাপি হৃদয়',
      pl: 'Miękkie różowe serce do dziewczęcego aesthetic'
    }
  },
  {
    id: 'heart-8',
    symbol: '💗',
    category: 'hearts',
    unicode: 'U+1F497',
    tags: {
      en: ['heart', 'growing', 'emoji', 'love', 'expanding'],
      fil: ['puso', 'lumalaki', 'emoji', 'pag-ibig', 'expanding'],
      ms: ['hati', 'membesar', 'emoji', 'cinta', 'mengembang'],
      bn: ['হৃদয়', 'বর্ধমান', 'ইমোজি', 'ভালোবাসা', 'সম্প্রসারিত'],
      pl: ['serce', 'rosnące', 'emoji', 'miłość', 'rozszerzające']
    },
    seo: {
      en: 'growing heart emoji love expanding',
      fil: 'lumalaking puso emoji pag-ibig expanding',
      ms: 'hati membesar emoji cinta mengembang',
      bn: 'বর্ধমান হৃদয় ইমোজি ভালোবাসা সম্প্রসারিত',
      pl: 'rosnące serce emoji miłość rozszerzające'
    },
    usage: {
      en: 'Growing love, increasing affection',
      fil: 'Lumalaking pag-ibig, dumaraming paghahanga',
      ms: 'Cinta yang semakin membesar, kasih sayang yang bertambah',
      bn: 'বর্ধমান ভালোবাসা, বৃদ্ধি পাওয়া স্নেহ',
      pl: 'Rosnąca miłość, wzrastające uczucie'
    }
  },
  {
    id: 'heart-9',
    symbol: '💖',
    category: 'hearts',
    unicode: 'U+1F496',
    tags: {
      en: ['heart', 'sparkling', 'emoji', 'shiny', 'love'],
      fil: ['puso', 'kumikisap', 'emoji', 'shiny', 'pag-ibig'],
      ms: ['hati', 'berkilau', 'emoji', 'bersinar', 'cinta'],
      bn: ['হৃদয়', 'ঝকঝকে', 'ইমোজি', 'উজ্জ্বল', 'ভালোবাসা'],
      pl: ['serce', 'błyszczące', 'emoji', 'lśniące', 'miłość']
    },
    seo: {
      en: 'sparkling heart emoji shiny love',
      fil: 'kumikisap na puso emoji shiny pag-ibig',
      ms: 'hati berkilau emoji bersinar cinta',
      bn: 'ঝকঝকে হৃদয় ইমোজি উজ্জ্বল ভালোবাসা',
      pl: 'błyszczące serce emoji lśniąca miłość'
    },
    usage: {
      en: 'Sparkling love, special affection',
      fil: 'Kumikisap na pag-ibig, espesyal na paghahanga',
      ms: 'Cinta berkilau, kasih sayang istimewa',
      bn: 'ঝকঝকে ভালোবাসা, বিশেষ স্নেহ',
      pl: 'Błyszcząca miłość, szczególne uczucie'
    }
  },
  {
    id: 'heart-10',
    symbol: '💕',
    category: 'hearts',
    unicode: 'U+1F495',
    tags: {
      en: ['heart', 'two hearts', 'emoji', 'love', 'couple'],
      fil: ['puso', 'dalawang puso', 'emoji', 'pag-ibig', 'magkasintahan'],
      ms: ['hati', 'dua hati', 'emoji', 'cinta', 'pasangan'],
      bn: ['হৃদয়', 'দুটি হৃদয়', 'ইমোজি', 'ভালোবাসা', 'কাপল'],
      pl: ['serce', 'dwa serca', 'emoji', 'miłość', 'para']
    },
    seo: {
      en: 'two hearts emoji love couple romantic',
      fil: 'dalawang puso emoji pag-ibig magkasintahan romantiko',
      ms: 'dua hati emoji cinta pasangan romantik',
      bn: 'দুটি হৃদয় ইমোজি ভালোবাসা কাপল রোমান্টিক',
      pl: 'dwa serca emoji miłość para romantyczny'
    },
    usage: {
      en: 'Perfect for couple names, romantic content',
      fil: 'Perpekto para sa pangalan ng magkasintahan, romantikong content',
      ms: 'Sempurna untuk nama pasangan, kandungan romantis',
      bn: 'কাপলের নাম, রোমান্টিক কন্টেন্টের জন্য সেরা',
      pl: 'Idealne do nazw par, romantycznych treści'
    }
  },
  {
    id: 'heart-11',
    symbol: '💘',
    category: 'hearts',
    unicode: 'U+1F498',
    tags: {
      en: ['heart', 'arrow', 'emoji', 'cupid', 'love'],
      fil: ['puso', 'pana', 'emoji', 'cupid', 'pag-ibig'],
      ms: ['hati', 'panah', 'emoji', 'cupid', 'cinta'],
      bn: ['হৃদয়', 'তীর', 'ইমোজি', 'কিউপিড', 'ভালোবাসা'],
      pl: ['serce', 'strzała', 'emoji', 'cupid', 'miłość']
    },
    seo: {
      en: 'heart arrow emoji cupid love romantic',
      fil: 'pusong pana emoji cupid pag-ibig romantiko',
      ms: 'hati panah emoji cupid cinta romantik',
      bn: 'হৃদয় তীর ইমোজি কিউপিড ভালোবাসা রোমান্টিক',
      pl: 'serce strzała emoji cupid miłość romantyczny'
    },
    usage: {
      en: 'Cupid arrow for love confessions',
      fil: 'Pana ni cupid para sa pag-amin sa pag-ibig',
      ms: 'Panah cupid untuk pengakuan cinta',
      bn: 'ভালোবাসার স্বীকারোক্তির জন্য কিউপিডের তীর',
      pl: 'Strzała Kupidyna do wyznań miłosnych'
    }
  },
  {
    id: 'heart-12',
    symbol: '💝',
    category: 'hearts',
    unicode: 'U+1F49D',
    tags: {
      en: ['heart', 'gift', 'emoji', 'present', 'love'],
      fil: ['puso', 'regalo', 'emoji', 'presenta', 'pag-ibig'],
      ms: ['hati', 'hadiah', 'emoji', 'hadiah', 'cinta'],
      bn: ['হৃদয়', 'উপহার', 'ইমোজি', 'উপহার', 'ভালোবাসা'],
      pl: ['serce', 'prezent', 'emoji', 'dar', 'miłość']
    },
    seo: {
      en: 'heart gift emoji present love romantic',
      fil: 'pusong regalo emoji presenta pag-ibig romantiko',
      ms: 'hati hadiah emoji hadiah cinta romantik',
      bn: 'হৃদয় উপহার ইমোজি উপহার ভালোবাসা রোমান্টিক',
      pl: 'serce prezent emoji dar miłość romantyczny'
    },
    usage: {
      en: 'Gift of love, special presents',
      fil: 'Regalo ng pag-ibig, espesyal na presente',
      ms: 'Hadiah cinta, hadiah istimewa',
      bn: 'ভালোবাসার উপহার, বিশেষ উপহার',
      pl: 'Prezent miłości, specjalne dary'
    }
  },
  {
    id: 'heart-13',
    symbol: '💓',
    category: 'hearts',
    unicode: 'U+1F493',
    tags: {
      en: ['heart', 'beating', 'emoji', 'pulse', 'love'],
      fil: ['puso', 'tumitibok', 'emoji', 'pulse', 'pag-ibig'],
      ms: ['hati', 'berdegup', 'emoji', 'degupan', 'cinta'],
      bn: ['হৃদয়', 'স্পন্দনশীল', 'ইমোজি', 'স্পন্দন', 'ভালোবাসা'],
      pl: ['serce', 'bijące', 'emoji', 'puls', 'miłość']
    },
    seo: {
      en: 'beating heart emoji pulse love excited',
      fil: 'tumitibok na puso emoji pulse pag-ibig excited',
      ms: 'hati berdegup emoji degupan cinta teruja',
      bn: 'স্পন্দনশীল হৃদয় ইমোজি স্পন্দন ভালোবাসা উত্তেজিত',
      pl: 'bijące serce emoji puls miłość podekscytowany'
    },
    usage: {
      en: 'Excited love, heartbeat feeling',
      fil: 'Excited na pag-ibig, feeling ng heartbeat',
      ms: 'Cinta teruja, rasa degupan jantung',
      bn: 'উত্তেজিত ভালোবাসা, হৃদস্পন্দন অনুভব',
      pl: 'Podekscytowana miłość, uczucie bicia serca'
    }
  },
  {
    id: 'heart-14',
    symbol: '💞',
    category: 'hearts',
    unicode: 'U+1F49E',
    tags: {
      en: ['heart', 'revolving', 'emoji', 'love', 'spinning'],
      fil: ['puso', 'ikot', 'emoji', 'pag-ibig', 'spinning'],
      ms: ['hati', 'berputar', 'emoji', 'cinta', 'berpusing'],
      bn: ['হৃদয়', 'ঘূর্ণায়মান', 'ইমোজি', 'ভালোবাসা', 'ঘোরা'],
      pl: ['serce', 'obracające', 'emoji', 'miłość', 'kręcące']
    },
    seo: {
      en: 'revolving hearts emoji love spinning',
      fil: 'ikot na puso emoji pag-ibig spinning',
      ms: 'hati berputar emoji cinta berpusing',
      bn: 'ঘূর্ণায়মান হৃদয় ইমোজি ভালোবাসা ঘোরা',
      pl: 'obracające się serca emoji miłość kręcące'
    },
    usage: {
      en: 'Dizzy in love, overwhelming affection',
      fil: 'Lula sa pag-ibig, sobrang paghahanga',
      ms: 'Pening kerana cinta, kasih sayang yang meluap-luap',
      bn: 'ভালোবাসায় মুগ্ধ, অতিশয় স্নেহ',
      pl: 'Szczęśliwy z miłości, przytłaczające uczucie'
    }
  },
  {
    id: 'heart-15',
    symbol: '💟',
    category: 'hearts',
    unicode: 'U+1F49F',
    tags: {
      en: ['heart', 'decoration', 'emoji', 'ornament'],
      fil: ['puso', 'dekorasyon', 'emoji', 'ornamento'],
      ms: ['hati', 'hiasan', 'emoji', 'ornamen'],
      bn: ['হৃদয়', 'সজ্জা', 'ইমোজি', 'অলংকার'],
      pl: ['serce', 'dekoracja', 'emoji', 'ornament']
    },
    seo: {
      en: 'heart decoration emoji ornament love',
      fil: 'pusong dekorasyon emoji ornamento pag-ibig',
      ms: 'hati hiasan emoji ornamen cinta',
      bn: 'হৃদয় সজ্জা ইমোজি অলংকার ভালোবাসা',
      pl: 'serce dekoracja emoji ornament miłość'
    },
    usage: {
      en: 'Decorative heart for bios, posts',
      fil: 'Dekoratibong puso para sa bio, post',
      ms: 'Hati hiasan untuk bio, siaran',
      bn: 'বায়ো, পোস্টের জন্য আলংকারিক হৃদয়',
      pl: 'Dekoracyjne serce do bio, postów'
    }
  },
  {
    id: 'heart-16',
    symbol: '💔',
    category: 'hearts',
    unicode: 'U+1F494',
    tags: {
      en: ['heart', 'broken', 'emoji', 'sad', 'heartbreak'],
      fil: ['puso', 'sira', 'emoji', 'malungkot', 'sira ng puso'],
      ms: ['hati', 'patah', 'emoji', 'sedih', 'patah hati'],
      bn: ['হৃদয়', 'ভাঙা', 'ইমোজি', 'দুঃখী', 'হৃদয় ভাঙা'],
      pl: ['serce', 'złamane', 'emoji', 'smutne', 'złamane serce']
    },
    seo: {
      en: 'broken heart emoji sad heartbreak',
      fil: 'sirang puso emoji malungkot sira ng puso',
      ms: 'hati patah emoji sedih patah hati',
      bn: 'ভাঙা হৃদয় ইমোজি দুঃখী হৃদয় ভাঙা',
      pl: 'złamane serce emoji smutne złamane serce'
    },
    usage: {
      en: 'Heartbreak, sad emotions, breakup',
      fil: 'Sira ng puso, malungkot na emotion, hiwalayan',
      ms: 'Patah hati, emosi sedih, putus cinta',
      bn: 'হৃদয় ভাঙা, দুঃখী আবেগ, ব্রেকআপ',
      pl: 'Złamane serce, smutne emocje, rozstanie'
    }
  },
  {
    id: 'heart-17',
    symbol: '🖤',
    category: 'hearts',
    unicode: 'U+1F5A4',
    tags: {
      en: ['heart', 'black', 'emoji', 'dark', 'aesthetic'],
      fil: ['puso', 'itim', 'emoji', 'dark', 'aesthetic'],
      ms: ['hati', 'hitam', 'emoji', 'gelap', 'aesthetic'],
      bn: ['হৃদয়', 'কালো', 'ইমোজি', 'অন্ধকার', 'aesthetic'],
      pl: ['serce', 'czarne', 'emoji', 'ciemne', 'aesthetic']
    },
    seo: {
      en: 'black heart emoji dark aesthetic love',
      fil: 'itim na puso emoji dark aesthetic pag-ibig',
      ms: 'hati hitam emoji gelap aesthetic cinta',
      bn: 'কালো হৃদয় ইমোজি অন্ধকার aesthetic ভালোবাসা',
      pl: 'czarne serce emoji ciemne aesthetic miłość'
    },
    usage: {
      en: 'Dark aesthetic, edgy love content',
      fil: 'Dark aesthetic, edgy na content ng pag-ibig',
      ms: 'Gelap aesthetic, kandungan cinta yang garang',
      bn: 'অন্ধকার aesthetic, এজি ভালোবাসা কন্টেন্ট',
      pl: 'Ciemne aesthetic, wyraziste treści miłosne'
    }
  },
  {
    id: 'heart-18',
    symbol: '🤍',
    category: 'hearts',
    unicode: 'U+1F90D',
    tags: {
      en: ['heart', 'white', 'emoji', 'pure', 'clean'],
      fil: ['puso', 'puti', 'emoji', 'pure', 'malinis'],
      ms: ['hati', 'putih', 'emoji', 'murni', 'bersih'],
      bn: ['হৃদয়', 'সাদা', 'ইমোজি', 'বিশুদ্ধ', 'পরিষ্কার'],
      pl: ['serce', 'białe', 'emoji', 'czyste', 'pure']
    },
    seo: {
      en: 'white heart emoji pure clean love',
      fil: 'puting puso emoji pure malinis na pag-ibig',
      ms: 'hati putih emoji murni bersih cinta',
      bn: 'সাদা হৃদয় ইমোজি বিশুদ্ধ পরিষ্কার ভালোবাসা',
      pl: 'białe serce emoji czyste czysta miłość'
    },
    usage: {
      en: 'Pure love, clean aesthetic',
      fil: 'Pure na pag-ibig, malinis na aesthetic',
      ms: 'Cinta murni, aesthetic yang bersih',
      bn: 'বিশুদ্ধ ভালোবাসা, পরিষ্কার aesthetic',
      pl: 'Czysta miłość, czyste aesthetic'
    }
  },
  {
    id: 'heart-19',
    symbol: '🥰',
    category: 'hearts',
    unicode: 'U+1F970',
    tags: {
      en: ['face', 'hearts', 'emoji', 'love', 'adore'],
      fil: ['mukha', 'puso', 'emoji', 'pag-ibig', 'adore'],
      ms: ['muka', 'hati', 'emoji', 'cinta', 'mengagumi'],
      bn: ['মুখ', 'হৃদয়', 'ইমোজি', 'ভালোবাসা', 'উপাসনা'],
      pl: ['twarz', 'serca', 'emoji', 'miłość', 'uwielbienie']
    },
    seo: {
      en: 'smiling face hearts emoji love adore',
      fil: 'ngiting mukha puso emoji pag-ibig adore',
      ms: 'muka tersenyum hati emoji cinta mengagumi',
      bn: 'হাসিমুখ হৃদয় ইমোজি ভালোবাসা উপাসনা',
      pl: 'uśmiechnięta twarz serca emoji miłość uwielbienie'
    },
    usage: {
      en: 'Loving face, adoration, affection',
      fil: 'Loving na mukha, adorasyon, pagmamahal',
      ms: 'Muka penuh kasih, kaguman, kasih sayang',
      bn: 'ভালোবাসার মুখ, উপাসনা, স্নেহ',
      pl: 'Kochająca twarz, adoracja, uczucie'
    }
  },
  {
    id: 'heart-combo-1',
    symbol: '💖💗💕',
    category: 'hearts',
    unicode: 'U+1F496 U+1F497 U+1F495',
    tags: {
      en: ['hearts', 'combo', 'multiple', 'love', 'aesthetic'],
      fil: ['puso', 'combo', 'marami', 'pag-ibig', 'aesthetic'],
      ms: ['hati', 'kombo', 'pelbagai', 'cinta', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'একাধিক', 'ভালোবাসা', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'wiele', 'miłość', 'aesthetic']
    },
    seo: {
      en: 'multiple hearts combo aesthetic love',
      fil: 'maraming puso combo aesthetic pag-ibig',
      ms: 'pelbagai hati kombo aesthetic cinta',
      bn: 'একাধিক হৃদয় কম্বো aesthetic ভালোবাসা',
      pl: 'wiele serc kombinacja aesthetic miłość'
    },
    usage: {
      en: 'Heart combo for Instagram bio, aesthetic posts',
      fil: 'Heart combo para sa Instagram bio, aesthetic na post',
      ms: 'Kombo hati untuk Instagram bio, siaran aesthetic',
      bn: 'Instagram বায়ো, aesthetic পোস্টের জন্য হৃদয় কম্বো',
      pl: 'Kombinacja serc do Instagram bio, aesthetic postów'
    }
  },
  {
    id: 'heart-combo-2',
    symbol: '💗🖤♡',
    category: 'hearts',
    unicode: 'U+1F497 U+1F5A4 U+2661',
    tags: {
      en: ['hearts', 'combo', 'mixed', 'love', 'aesthetic'],
      fil: ['puso', 'combo', 'halo', 'pag-ibig', 'aesthetic'],
      ms: ['hati', 'kombo', 'campur', 'cinta', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'মিশ্রিত', 'ভালোবাসা', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'mieszane', 'miłość', 'aesthetic']
    },
    seo: {
      en: 'mixed hearts combo aesthetic love',
      fil: 'halong puso combo aesthetic pag-ibig',
      ms: 'hati campur kombo aesthetic cinta',
      bn: 'মিশ্রিত হৃদয় কম্বো aesthetic ভালোবাসা',
      pl: 'mieszane serca kombinacja aesthetic miłość'
    },
    usage: {
      en: 'Mixed heart combo for unique aesthetic',
      fil: 'Halong puso combo para sa unique aesthetic',
      ms: 'Kombo hati campur untuk aesthetic unik',
      bn: 'অনন্য aesthetic এর জন্য মিশ্রিত হৃদয় কম্বো',
      pl: 'Mieszana kombinacja serc do unikalnego aesthetic'
    }
  },
  {
    id: 'heart-combo-3',
    symbol: '💕💗♡',
    category: 'hearts',
    unicode: 'U+1F495 U+1F497 U+2661',
    tags: {
      en: ['hearts', 'combo', 'sweet', 'love', 'aesthetic'],
      fil: ['puso', 'combo', 'matamis', 'pag-ibig', 'aesthetic'],
      ms: ['hati', 'kombo', 'manis', 'cinta', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'মিষ্টি', 'ভালোবাসা', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'słodkie', 'miłość', 'aesthetic']
    },
    seo: {
      en: 'sweet hearts combo aesthetic love',
      fil: 'matamis na puso combo aesthetic pag-ibig',
      ms: 'hati manis kombo aesthetic cinta',
      bn: 'মিষ্টি হৃদয় কম্বো aesthetic ভালোবাসা',
      pl: 'słodkie serca kombinacja aesthetic miłość'
    },
    usage: {
      en: 'Sweet heart combo for romantic aesthetic',
      fil: 'Matamis na puso combo para sa romantikong aesthetic',
      ms: 'Kombo hati manis untuk aesthetic romantis',
      bn: 'রোমান্টিক aesthetic এর জন্য মিষ্টি হৃদয় কম্বো',
      pl: 'Słodka kombinacja serc do romantycznego aesthetic'
    }
  },
  {
    id: 'heart-combo-4',
    symbol: '💕🖤💗',
    category: 'hearts',
    unicode: 'U+1F495 U+1F5A4 U+1F497',
    tags: {
      en: ['hearts', 'combo', 'dark love', 'aesthetic'],
      fil: ['puso', 'combo', 'dark na pag-ibig', 'aesthetic'],
      ms: ['hati', 'kombo', 'cinta gelap', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'অন্ধকার ভালোবাসা', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'ciemna miłość', 'aesthetic']
    },
    seo: {
      en: 'dark love hearts combo aesthetic',
      fil: 'dark na pag-ibig puso combo aesthetic',
      ms: 'cinta gelap hati kombo aesthetic',
      bn: 'অন্ধকার ভালোবাসা হৃদয় কম্বো aesthetic',
      pl: 'ciemna miłość serca kombinacja aesthetic'
    },
    usage: {
      en: 'Dark love combo for edgy aesthetic',
      fil: 'Dark na pag-ibig combo para sa edgy aesthetic',
      ms: 'Kombo cinta gelap untuk aesthetic yang garang',
      bn: 'এজি aesthetic এর জন্য অন্ধকার ভালোবাসা কম্বো',
      pl: 'Kombinacja ciemnej miłości do edgy aesthetic'
    }
  },
  {
    id: 'heart-combo-5',
    symbol: '♡💕🖤',
    category: 'hearts',
    unicode: 'U+2661 U+1F495 U+1F5A4',
    tags: {
      en: ['hearts', 'combo', 'elegant', 'aesthetic'],
      fil: ['puso', 'combo', 'elegante', 'aesthetic'],
      ms: ['hati', 'kombo', 'elegan', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'মার্জিত', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'eleganckie', 'aesthetic']
    },
    seo: {
      en: 'elegant hearts combo aesthetic love',
      fil: 'eleganteng puso combo aesthetic pag-ibig',
      ms: 'hati elegan kombo aesthetic cinta',
      bn: 'মার্জিত হৃদয় কম্বো aesthetic ভালোবাসা',
      pl: 'eleganckie serca kombinacja aesthetic miłość'
    },
    usage: {
      en: 'Elegant heart combo for sophisticated aesthetic',
      fil: 'Eleganteng puso combo para sa sophisticated aesthetic',
      ms: 'Kombo hati elegan untuk aesthetic canggih',
      bn: 'পরিশীলিত aesthetic এর জন্য মার্জিত হৃদয় কম্বো',
      pl: 'Elegancka kombinacja serc do wyrafinowanego aesthetic'
    }
  },
  {
    id: 'heart-combo-6',
    symbol: '💗💕♡',
    category: 'hearts',
    unicode: 'U+1F497 U+1F495 U+2661',
    tags: {
      en: ['hearts', 'combo', 'overflowing', 'love'],
      fil: ['puso', 'combo', 'sobrang dami', 'pag-ibig'],
      ms: ['hati', 'kombo', 'melimpah', 'cinta'],
      bn: ['হৃদয়', 'কম্বো', 'প্রচুর', 'ভালোবাসা'],
      pl: ['serca', 'kombinacja', 'obfite', 'miłość']
    },
    seo: {
      en: 'overflowing hearts combo love',
      fil: 'sobrang daming puso combo pag-ibig',
      ms: 'hati melimpah kombo cinta',
      bn: 'প্রচুর হৃদয় কম্বো ভালোবাসা',
      pl: 'obfite serca kombinacja miłość'
    },
    usage: {
      en: 'Overflowing love combo for passionate posts',
      fil: 'Sobrang daming pag-ibig combo para sa passionate na post',
      ms: 'Kombo cinta melimpah untuk siaran bersemangat',
      bn: 'উত্সাহী পোস্টের জন্য প্রচুর ভালোবাসা কম্বো',
      pl: 'Kombinacja obfitej miłości do namiętnych postów'
    }
  },
  {
    id: 'heart-combo-7',
    symbol: '🖤💗💕',
    category: 'hearts',
    unicode: 'U+1F5A4 U+1F497 U+1F495',
    tags: {
      en: ['hearts', 'combo', 'balanced', 'aesthetic'],
      fil: ['puso', 'combo', 'balance', 'aesthetic'],
      ms: ['hati', 'kombo', 'seimbang', 'aesthetic'],
      bn: ['হৃদয়', 'কম্বো', 'ভারসাম্য', 'aesthetic'],
      pl: ['serca', 'kombinacja', 'zbalansowane', 'aesthetic']
    },
    seo: {
      en: 'balanced hearts combo aesthetic',
      fil: 'balanced na puso combo aesthetic',
      ms: 'hati seimbang kombo aesthetic',
      bn: 'ভারসাম্যপূর্ণ হৃদয় কম্বো aesthetic',
      pl: 'zbalansowane serca kombinacja aesthetic'
    },
    usage: {
      en: 'Balanced heart combo for harmonious aesthetic',
      fil: 'Balanced na puso combo para sa harmonious aesthetic',
      ms: 'Kombo hati seimbang untuk aesthetic harmoni',
      bn: 'সুরেলা aesthetic এর জন্য ভারসাম্যপূর্ণ হৃদয় কম্বো',
      pl: 'Zbalansowana kombinacja serc do harmonicznego aesthetic'
    }
  },
  {
    id: 'heart-20',
    symbol: '💛',
    category: 'hearts',
    unicode: 'U+1F49B',
    tags: {
      en: ['heart', 'yellow', 'emoji', 'friendship', 'happy'],
      fil: ['puso', 'dilaw', 'emoji', 'pagkakaibigan', 'masaya'],
      ms: ['hati', 'kuning', 'emoji', 'persahabatan', 'gembira'],
      bn: ['হৃদয়', 'হলুদ', 'ইমোজি', 'বন্ধুত্ব', 'খুশি'],
      pl: ['serce', 'żółte', 'emoji', 'przyjaźń', 'szczęśliwe']
    },
    seo: {
      en: 'yellow heart emoji friendship happy',
      fil: 'dilaw na puso emoji pagkakaibigan masaya',
      ms: 'hati kuning emoji persahabatan gembira',
      bn: 'হলুদ হৃদয় ইমোজি বন্ধুত্ব খুশি',
      pl: 'żółte serce emoji przyjaźń szczęśliwe'
    },
    usage: {
      en: 'Friendship, happiness, positive vibes',
      fil: 'Pagkakaibigan, kaligayahan, positive vibes',
      ms: 'Persahabatan, kebahagiaan, aura positif',
      bn: 'বন্ধুত্ব, সুখ, ইতিবাচক ভাইবস',
      pl: 'Przyjaźń, szczęście, pozytywne wibracje'
    }
  },
  {
    id: 'heart-21',
    symbol: '💙',
    category: 'hearts',
    unicode: 'U+1F499',
    tags: {
      en: ['heart', 'blue', 'emoji', 'trust', 'calm'],
      fil: ['puso', 'asul', 'emoji', 'tiwala', 'kalmado'],
      ms: ['hati', 'biru', 'emoji', 'kepercayaan', 'tenang'],
      bn: ['হৃদয়', 'নীল', 'ইমোজি', 'বিশ্বাস', 'শান্ত'],
      pl: ['serce', 'niebieskie', 'emoji', 'zaufanie', 'spokój']
    },
    seo: {
      en: 'blue heart emoji trust calm',
      fil: 'asul na puso emoji tiwala kalmado',
      ms: 'hati biru emoji kepercayaan tenang',
      bn: 'নীল হৃদয় ইমোজি বিশ্বাস শান্ত',
      pl: 'niebieskie serce emoji zaufanie spokój'
    },
    usage: {
      en: 'Trust, loyalty, calm love',
      fil: 'Tiwala, loyalty, kalmadong pag-ibig',
      ms: 'Kepercayaan, kesetiaan, cinta yang tenang',
      bn: 'বিশ্বাস, অনুগত্ব, শান্ত ভালোবাসা',
      pl: 'Zaufanie, lojalność, spokojna miłość'
    }
  },
  {
    id: 'heart-22',
    symbol: '💚',
    category: 'hearts',
    unicode: 'U+1F49A',
    tags: {
      en: ['heart', 'green', 'emoji', 'nature', 'growth'],
      fil: ['puso', 'berde', 'emoji', 'kalikasan', 'paglaki'],
      ms: ['hati', 'hijau', 'emoji', 'alam', 'pertumbuhan'],
      bn: ['হৃদয়', 'সবুজ', 'ইমোজি', 'প্রকৃতি', 'প্রবৃদ্ধি'],
      pl: ['serce', 'zielone', 'emoji', 'natura', 'wzrost']
    },
    seo: {
      en: 'green heart emoji nature growth',
      fil: 'berde na puso emoji kalikasan paglaki',
      ms: 'hati hijau emoji alam pertumbuhan',
      bn: 'সবুজ হৃদয় ইমোজি প্রকৃতি প্রবৃদ্ধি',
      pl: 'zielone serce emoji natura wzrost'
    },
    usage: {
      en: 'Nature, growth, environmental love',
      fil: 'Kalikasan, paglaki, pagmamahal sa environment',
      ms: 'Alam, pertumbuhan, cinta alam sekitar',
      bn: 'প্রকৃতি, প্রবৃদ্ধি, পরিবেশের ভালোবাসা',
      pl: 'Natura, wzrost, ekologiczna miłość'
    }
  },
  {
    id: 'heart-23',
    symbol: '💜',
    category: 'hearts',
    unicode: 'U+1F49C',
    tags: {
      en: ['heart', 'purple', 'emoji', 'luxury', 'compassion'],
      fil: ['puso', 'lila', 'emoji', 'luho', 'awa'],
      ms: ['hati', 'ungu', 'emoji', 'kemewahan', 'belas kasihan'],
      bn: ['হৃদয়', 'বেগুনি', 'ইমোজি', 'বিলাসবহুল', 'সহানুভূতি'],
      pl: ['serce', 'fioletowe', 'emoji', 'luksus', 'współczucie']
    },
    seo: {
      en: 'purple heart emoji luxury compassion',
      fil: 'lila na puso emoji luho awa',
      ms: 'hati ungu emoji kemewahan belas kasihan',
      bn: 'বেগুনি হৃদয় ইমোজি বিলাসবহুল সহানুভূতি',
      pl: 'fioletowe serce emoji luksus współczucie'
    },
    usage: {
      en: 'Compassion, luxury, spiritual love',
      fil: 'Awa, luho, spiritual na pag-ibig',
      ms: 'Belas kasihan, kemewahan, cinta rohani',
      bn: 'সহানুভূতি, বিলাসবহুল, আধ্যাত্মিক ভালোবাসা',
      pl: 'Współczucie, luksus, duchowa miłość'
    }
  },
  {
    id: 'heart-24',
    symbol: '🧡',
    category: 'hearts',
    unicode: 'U+1F9E1',
    tags: {
      en: ['heart', 'orange', 'emoji', 'energy', 'vitality'],
      fil: ['puso', 'kahel', 'emoji', 'energy', 'vitality'],
      ms: ['hati', 'oren', 'emoji', 'tenaga', 'vitaliti'],
      bn: ['হৃদয়', 'কমলা', 'ইমোজি', 'শক্তি', 'প্রাণশক্তি'],
      pl: ['serce', 'pomarańczowe', 'emoji', 'energia', 'witalność']
    },
    seo: {
      en: 'orange heart emoji energy vitality',
      fil: 'kahel na puso emoji energy vitality',
      ms: 'hati oren emoji tenaga vitaliti',
      bn: 'কমলা হৃদয় ইমোজি শক্তি প্রাণশক্তি',
      pl: 'pomarańczowe serce emoji energia witalność'
    },
    usage: {
      en: 'Energy, vitality, enthusiastic love',
      fil: 'Energy, vitality, enthusiastic na pag-ibig',
      ms: 'Tenaga, vitaliti, cinta yang ghairah',
      bn: 'শক্তি, প্রাণশক্তি, উত্সাহী ভালোবাসা',
      pl: 'Energia, witalność, entuzjastyczna miłość'
    }
  },
  {
    id: 'heart-25',
    symbol: '🤎',
    category: 'hearts',
    unicode: 'U+1F90E',
    tags: {
      en: ['heart', 'brown', 'emoji', 'earthy', 'grounded'],
      fil: ['puso', 'kayumanggi', 'emoji', 'earthy', 'grounded'],
      ms: ['hati', 'perang', 'emoji', 'alam', 'bumi'],
      bn: ['হৃদয়', 'বাদামী', 'ইমোজি', 'পার্থিব', 'মাটির'],
      pl: ['serce', 'brązowe', 'emoji', 'ziemskie', 'uziemiające']
    },
    seo: {
      en: 'brown heart emoji earthy grounded',
      fil: 'kayumangging puso emoji earthy grounded',
      ms: 'hati perang emoji alam bumi',
      bn: 'বাদামী হৃদয় ইমোজি পার্থিব মাটির',
      pl: 'brązowe serce emoji ziemskie uziemiające'
    },
    usage: {
      en: 'Earthy love, grounded feelings',
      fil: 'Earthy na pag-ibig, grounded feelings',
      ms: 'Cinta alam, perasaan yang terikat',
      bn: 'পার্থিব ভালোবাসা, মাটির অনুভূতি',
      pl: 'Ziemska miłość, uziemiające uczucia'
    }
  },
  {
    id: 'heart-26',
    symbol: '❤️',
    category: 'hearts',
    unicode: 'U+2764',
    tags: {
      en: ['heart', 'red', 'emoji', 'love', 'classic'],
      fil: ['puso', 'pula', 'emoji', 'pag-ibig', 'klassik'],
      ms: ['hati', 'merah', 'emoji', 'cinta', 'klasik'],
      bn: ['হৃদয়', 'লাল', 'ইমোজি', 'ভালোবাসা', 'ক্লাসিক'],
      pl: ['serce', 'czerwone', 'emoji', 'miłość', 'klasyczne']
    },
    seo: {
      en: 'red heart emoji love classic romantic',
      fil: 'pulang puso emoji pag-ibig klassik romantiko',
      ms: 'hati merah emoji cinta klasik romantik',
      bn: 'লাল হৃদয় ইমোজি ভালোবাসা ক্লাসিক রোমান্টিক',
      pl: 'czerwone serce emoji miłość klasyczny romantyczny'
    },
    usage: {
      en: 'Classic red heart for love and romance',
      fil: 'Klassik na pulang puso para sa pag-ibig at romantiko',
      ms: 'Hati merah klasik untuk cinta dan romantis',
      bn: 'ভালোবাসা এবং রোমান্সের জন্য ক্লাসিক লাল হৃদয়',
      pl: 'Klasyczne czerwone serce do miłości i romansu'
    }
  },
  {
    id: 'heart-27',
    symbol: '💋',
    category: 'hearts',
    unicode: 'U+1F48B',
    tags: {
      en: ['kiss', 'lips', 'love', 'romantic', 'flirty'],
      fil: ['halik', 'labi', 'pag-ibig', 'romantiko', 'flirty'],
      ms: ['ciuman', 'bibir', 'cinta', 'romantik', 'menggoda'],
      bn: ['চুমু', 'ঠোঁট', 'ভালোবাসা', 'রোমান্টিক', 'ফ্লার্টি'],
      pl: ['pocałunek', 'usta', 'miłość', 'romantyczny', 'flirciarski']
    },
    seo: {
      en: 'kiss mark lips love romantic',
      fil: 'marka ng halik labi pag-ibig romantiko',
      ms: 'tanda ciuman bibir cinta romantik',
      bn: 'চুমুর চিহ্ন ঠোঁট ভালোবাসা রোমান্টিক',
      pl: 'ślad pocałunku usta miłość romantyczny'
    },
    usage: {
      en: 'Send kisses, flirty messages',
      fil: 'Magpadala ng halik, flirty na mensahe',
      ms: 'Hantar ciuman, mesej menggoda',
      bn: 'চুমু পাঠান, ফ্লার্টি বার্তা',
      pl: 'Wyślij pocałunki, flirciarskie wiadomości'
    }
  },
  {
    id: 'heart-28',
    symbol: '♥️',
    category: 'hearts',
    unicode: 'U+2665',
    tags: {
      en: ['heart', 'suit', 'cards', 'love', 'classic'],
      fil: ['puso', 'suit', 'baraha', 'pag-ibig', 'klassik'],
      ms: ['hati', 'suit', 'kad', 'cinta', 'klasik'],
      bn: ['হৃদয়', 'স্যুট', 'কার্ড', 'ভালোবাসা', 'ক্লাসিক'],
      pl: ['serce', 'kolor', 'karty', 'miłość', 'klasyczne']
    },
    seo: {
      en: 'heart suit playing cards love',
      fil: 'pusong suit baraha pag-ibig',
      ms: 'suit hati kad main cinta',
      bn: 'হৃদয় স্যুট তাস খেলা ভালোবাসা',
      pl: 'kolor serce karty gry miłość'
    },
    usage: {
      en: 'Card games, classic heart symbol',
      fil: 'Larong baraha, klassik na simbolo ng puso',
      ms: 'Permainan kad, simbol hati klasik',
      bn: 'তাস খেলা, ক্লাসিক হৃদয় প্রতীক',
      pl: 'Gry karciane, klasyczny symbol serca'
    }
  },
  {
    id: 'heart-29',
    symbol: '❤️‍🔥',
    category: 'hearts',
    unicode: 'U+2764 U+200D U+1F525',
    tags: {
      en: ['heart', 'fire', 'passionate', 'burning', 'hot'],
      fil: ['puso', 'apoy', 'passionate', 'sunog', 'mainit'],
      ms: ['hati', 'api', 'bersemangat', 'terbakar', 'panas'],
      bn: ['হৃদয়', 'আগুন', 'উত্সাহী', 'জ্বলন্ত', 'গরম'],
      pl: ['serce', 'ogień', 'namiętny', 'palący', 'gorący']
    },
    seo: {
      en: 'heart on fire passionate burning love',
      fil: 'puso sa apoy passionate sunog na pag-ibig',
      ms: 'hati terbakar bersemangat cinta',
      bn: 'জ্বলন্ত হৃদয় উত্সাহী জ্বলন্ত ভালোবাসা',
      pl: 'płonące serce namiętny paląca miłość'
    },
    usage: {
      en: 'Passionate burning love, intense feelings',
      fil: 'Passionate na sunog na pag-ibig, intense feelings',
      ms: 'Cinta yang terbakar bersemangat, perasaan intens',
      bn: 'উত্সাহী জ্বলন্ত ভালোবাসা, তীব্র অনুভূতি',
      pl: 'Namiętna płonąca miłość, intensywne uczucia'
    }
  },
  {
    id: 'heart-30',
    symbol: '❤️‍🩹',
    category: 'hearts',
    unicode: 'U+2764 U+200D U+1FA79',
    tags: {
      en: ['heart', 'bandage', 'healing', 'recovery', 'mending'],
      fil: ['puso', 'bendahe', 'paggagaling', 'pagrekobera', 'pag-ayos'],
      ms: ['hati', 'balutan', 'penyembuhan', 'pemulihan', 'pembaikan'],
      bn: ['হৃদয়', 'ব্যান্ডেজ', 'আরোগ্য', 'পুনরুদ্ধার', 'মেরামত'],
      pl: ['serce', 'oprawka', 'gojenie', 'powrót', 'naprawianie']
    },
    seo: {
      en: 'mending heart bandage healing recovery',
      fil: 'nagpapagaling na puso bendahe paggagaling pagrekobera',
      ms: 'hati pulih balutan penyembuhan pemulihan',
      bn: 'আরোগ্যমান হৃদয় ব্যান্ডেজ নিরাময় পুনরুদ্ধার',
      pl: 'gojące się serce opprawka leczenie powrót'
    },
    usage: {
      en: 'Healing heart, recovery from heartbreak',
      fil: 'Paggagaling na puso, pagrekobera sa sira ng puso',
      ms: 'Hati yang sembuh, pulih dari patah hati',
      bn: 'আরোগ্যমান হৃদয়, হৃদয় ভাঙা থেকে পুনরুদ্ধার',
      pl: 'Gojące się serce, powrót po złamanym sercu'
    }
  },
  {
    id: 'heart-31',
    symbol: '💞',
    category: 'hearts',
    unicode: 'U+1F49E',
    tags: {
      en: ['hearts', 'revolving', 'spinning', 'love', 'dizzy'],
      fil: ['puso', 'ikot', 'spinning', 'pag-ibig', 'lula'],
      ms: ['hati', 'berputar', 'berpusing', 'cinta', 'pening'],
      bn: ['হৃদয়', 'ঘূর্ণায়মান', 'ঘোরা', 'ভালোবাসা', 'মুগ্ধ'],
      pl: ['serca', 'obracające', 'kręcące', 'miłość', 'szczęśliwy']
    },
    seo: {
      en: 'revolving hearts spinning dizzy love',
      fil: 'ikot na puso spinning lula pag-ibig',
      ms: 'hati berputar berpusing pening cinta',
      bn: 'ঘূর্ণায়মান হৃদয় ঘোরা মুগ্ধ ভালোবাসা',
      pl: 'obracające się serca kręcące szczęśliwa miłość'
    },
    usage: {
      en: 'Spinning with love, dizzy in affection',
      fil: 'Spinning sa pag-ibig, lula sa paghahanga',
      ms: 'Berpusing dengan cinta, pening dengan kasih sayang',
      bn: 'ভালোবাসায় ঘোরা, স্নেহে মুগ্ধ',
      pl: 'Kręcić się z miłością, szczęśliwy z uczucia'
    }
  },
  {
    id: 'heart-32',
    symbol: '💓',
    category: 'hearts',
    unicode: 'U+1F493',
    tags: {
      en: ['heart', 'beating', 'pulse', 'alive', 'excited'],
      fil: ['puso', 'tumitibok', 'pulse', 'buhay', 'excited'],
      ms: ['hati', 'berdegup', 'degupan', 'hidup', 'teruja'],
      bn: ['হৃদয়', 'স্পন্দনশীল', 'স্পন্দন', 'জীবন্ত', 'উত্তেজিত'],
      pl: ['serce', 'bijące', 'puls', 'żywe', 'podekscytowane']
    },
    seo: {
      en: 'beating heart pulse alive excited',
      fil: 'tumitibok na puso pulse buhay excited',
      ms: 'hati berdegup degupan hidup teruja',
      bn: 'স্পন্দনশীল হৃদয় স্পন্দন জীবন্ত উত্তেজিত',
      pl: 'bijące serce puls żywe podekscytowane'
    },
    usage: {
      en: 'Alive with excitement, beating heart',
      fil: 'Buhay na excited, tumitibok na puso',
      ms: 'Hidup dengan kegembiraan, hati berdegup',
      bn: 'উত্তেজনায় জীবন্ত, স্পন্দনশীল হৃদয়',
      pl: 'Żywe z ekscytacją, bijące serce'
    }
  },
  {
    id: 'heart-33',
    symbol: '💗',
    category: 'hearts',
    unicode: 'U+1F497',
    tags: {
      en: ['heart', 'growing', 'expanding', 'more love', 'increasing'],
      fil: ['puso', 'lumalaki', 'expanding', 'more na pag-ibig', 'dumarami'],
      ms: ['hati', 'membesar', 'mengembang', 'lebih cinta', 'bertambah'],
      bn: ['হৃদয়', 'বর্ধমান', 'সম্প্রসারিত', 'আরও ভালোবাসা', 'বৃদ্ধি'],
      pl: ['serce', 'rosnące', 'rozszerzające', 'więcej miłości', 'wzrost']
    },
    seo: {
      en: 'growing heart expanding more love',
      fil: 'lumalaking puso expanding more na pag-ibig',
      ms: 'hati membesar mengembang lebih cinta',
      bn: 'বর্ধমান হৃদয় সম্প্রসারিত আরও ভালোবাসা',
      pl: 'rosnące serce rozszerzające więcej miłości'
    },
    usage: {
      en: 'Love that keeps growing and expanding',
      fil: 'Pag-ibig na patuloy na lumalaki at expanding',
      ms: 'Cinta yang terus membesar dan mengembang',
      bn: 'ভালোবাসা যা ক্রমাগত বৃদ্ধি এবং সম্প্রসারিত হয়',
      pl: 'Miłość, która wciąż rośnie i rozszerza się'
    }
  },
  {
    id: 'heart-34',
    symbol: '💖',
    category: 'hearts',
    unicode: 'U+1F496',
    tags: {
      en: ['heart', 'sparkle', 'shiny', 'bright', 'radiant'],
      fil: ['puso', 'kisap', 'shiny', 'maliwanag', 'radiant'],
      ms: ['hati', 'kilau', 'bersinar', 'cerah', 'berseri'],
      bn: ['হৃদয়', 'ঝকঝকে', 'উজ্জ্বল', 'উজ্জ্বল', 'উজ্জ্বল'],
      pl: ['serce', 'iskra', 'lśniące', 'jasne', 'promienne']
    },
    seo: {
      en: 'sparkling heart shiny bright radiant',
      fil: 'kumikisap na puso shiny maliwanag radiant',
      ms: 'hati berkilau bersinar cerah berseri',
      bn: 'ঝকঝকে হৃদয় উজ্জ্বল উজ্জ্বল উজ্জ্বল',
      pl: 'błyszczące serce lśniące jasne promienne'
    },
    usage: {
      en: 'Radiant love, shining bright with affection',
      fil: 'Radiant na pag-ibig, shining bright sa paghahanga',
      ms: 'Cinta berseri, bersinar terang dengan kasih sayang',
      bn: 'উজ্জ্বল ভালোবাসা, স্নেহের সাথে উজ্জ্বল হয়ে উঠেছে',
      pl: 'Promienna miłość, świecąca jasno uczuciem'
    }
  },
  {
    id: 'heart-35',
    symbol: '💘',
    category: 'hearts',
    unicode: 'U+1F498',
    tags: {
      en: ['heart', 'arrow', 'cupid', 'strike', 'love'],
      fil: ['puso', 'pana', 'cupid', 'strike', 'pag-ibig'],
      ms: ['hati', 'panah', 'cupid', 'kena', 'cinta'],
      bn: ['হৃদয়', 'তীর', 'কিউপিড', 'আঘাত', 'ভালোবাসা'],
      pl: ['serce', 'strzała', 'cupid', 'trafienie', 'miłość']
    },
    seo: {
      en: 'heart arrow cupid strike love',
      fil: 'pusong pana cupid strike pag-ibig',
      ms: 'hati panah cupid kena cinta',
      bn: 'হৃদয় তীর কিউপিড আঘাত ভালোবাসা',
      pl: 'serce strzała cupid trafienie miłość'
    },
    usage: {
      en: 'Struck by cupids arrow, falling in love',
      fil: 'Tamaan ng pana ni cupid, nahulog sa pag-ibig',
      ms: 'Kenakan panah cupid, jatuh cinta',
      bn: 'কিউপিডের তীরে আঘাত, প্রেমে পড়া',
      pl: 'Trafiony strzałą Kupidyna, zakochany'
    }
  }
];

// 2. 🌸 花朵植物系列 (32个)
export const flowersSymbols: Symbol2026[] = [
  {
    id: 'flower-1',
    symbol: '✿',
    category: 'flowers',
    unicode: 'U+273F',
    tags: {
      en: ['flower', 'blossom', 'nature', 'cute', 'aesthetic'],
    },
    seo: {
      en: 'flower blossom symbol cute aesthetic nature',
    },
    usage: {
      en: 'Perfect for nature lovers, soft aesthetic',
    }
  },
  {
    id: 'flower-2',
    symbol: '❀',
    category: 'flowers',
    unicode: 'U+2740',
    tags: {
      en: ['flower', 'white', 'simple', 'elegant'],
    },
    seo: {
      en: 'white flower symbol simple elegant',
    },
    usage: {
      en: 'Elegant flower for minimalist aesthetic',
    }
  },
  {
    id: 'flower-3',
    symbol: '🌸',
    category: 'flowers',
    unicode: 'U+1F338',
    tags: {
      en: ['cherry blossom', 'pink', 'spring', 'japanese', 'cute'],
    },
    seo: {
      en: 'cherry blossom emoji pink spring japanese',
    },
    usage: {
      en: 'Japanese aesthetic, spring vibes, soft girl',
    }
  },
  {
    id: 'flower-4',
    symbol: '🌺',
    category: 'flowers',
    unicode: 'U+1F33A',
    tags: {
      en: ['hibiscus', 'tropical', 'summer', 'exotic'],
    },
    seo: {
      en: 'hibiscus flower emoji tropical summer',
    },
    usage: {
      en: 'Tropical vibes, summer aesthetic',
    }
  },
  {
    id: 'flower-5',
    symbol: '🌷',
    category: 'flowers',
    unicode: 'U+1F337',
    tags: {
      en: ['tulip', 'spring', 'elegant', 'romantic'],
    },
    seo: {
      en: 'tulip flower emoji spring elegant romantic',
    },
    usage: {
      en: 'Romantic flower for elegant aesthetic',
    }
  },
  {
    id: 'flower-6',
    symbol: '🌹',
    category: 'flowers',
    unicode: 'U+1F339',
    tags: {
      en: ['rose', 'love', 'romantic', 'classic'],
    },
    seo: {
      en: 'rose flower emoji love romantic classic',
    },
    usage: {
      en: 'Classic love symbol, romantic posts',
    }
  },
  {
    id: 'flower-7',
    symbol: '💐',
    category: 'flowers',
    unicode: 'U+1F490',
    tags: {
      en: ['bouquet', 'flowers', 'gift', 'celebration'],
    },
    seo: {
      en: 'flower bouquet emoji gift celebration',
    },
    usage: {
      en: 'Celebration, gift giving, special occasions',
    }
  },
  {
    id: 'flower-8',
    symbol: '🌻',
    category: 'flowers',
    unicode: 'U+1F33B',
    tags: {
      en: ['sunflower', 'happy', 'bright', 'summer'],
    },
    seo: {
      en: 'sunflower emoji happy bright summer',
    },
    usage: {
      en: 'Happy vibes, positive energy, summer',
    }
  },
  {
    id: 'flower-9',
    symbol: '🪻',
    category: 'flowers',
    unicode: 'U+1FABB',
    tags: {
      en: ['lavender', 'purple', 'calm', 'aesthetic'],
    },
    seo: {
      en: 'lavender flower emoji purple calm aesthetic',
    },
    usage: {
      en: 'Calm aesthetic, purple vibes, relaxation',
    }
  },
  {
    id: 'flower-combo-1',
    symbol: '🌸💗',
    category: 'flowers',
    unicode: 'U+1F338 U+1F497',
    tags: {
      en: ['flower', 'heart', 'combo', 'cute', 'love'],
    },
    seo: {
      en: 'flower heart combo cute love aesthetic',
    },
    usage: {
      en: 'Cute combo for romantic, soft aesthetic',
    }
  }
];

// 3. ⭐ 星星闪光系列 (38个) - 精选20个核心
export const starsSymbols: Symbol2026[] = [
  { id: 'star-1', symbol: '⭐', category: 'stars', unicode: 'U+2B50', tags: { en: ['star', 'yellow', 'bright'] }, seo: { en: 'yellow star bright symbol' }, usage: { en: 'Highlight important content' } },
  { id: 'star-2', symbol: '✨', category: 'stars', unicode: 'U+2728', tags: { en: ['sparkles', 'shiny', 'magic'] }, seo: { en: 'sparkles shiny magic symbol' }, usage: { en: 'Add sparkle to text' } },
  { id: 'star-3', symbol: '🌟', category: 'stars', unicode: 'U+1F31F', tags: { en: ['glowing star', 'bright', 'shiny'] }, seo: { en: 'glowing star bright emoji' }, usage: { en: 'Emphasize special content' } },
  { id: 'star-4', symbol: '✩', category: 'stars', unicode: 'U+2729', tags: { en: ['star', 'outline', 'simple'] }, seo: { en: 'outline star simple symbol' }, usage: { en: 'Minimalist decoration' } },
  { id: 'star-5', symbol: '⋆', category: 'stars', unicode: 'U+22C6', tags: { en: ['star', 'small', 'cute'] }, seo: { en: 'small star cute symbol' }, usage: { en: 'Cute decoration' } },
  { id: 'star-6', symbol: '☾', category: 'stars', unicode: 'U+263E', tags: { en: ['moon', 'crescent', 'night'] }, seo: { en: 'crescent moon night symbol' }, usage: { en: 'Night aesthetic' } },
  { id: 'star-7', symbol: '☄️', category: 'stars', unicode: 'U+2604', tags: { en: ['comet', 'shooting star', 'wish'] }, seo: { en: 'comet shooting star wish' }, usage: { en: 'Make a wish content' } },
  { id: 'star-8', symbol: '*ೃ༄', category: 'stars', unicode: 'U+002A U+0EC3 U+0F04', tags: { en: ['star', 'decorative', 'aesthetic'] }, seo: { en: 'decorative star aesthetic symbol' }, usage: { en: 'Aesthetic decoration' } },
  { id: 'star-9', symbol: '✧', category: 'stars', unicode: 'U+2727', tags: { en: ['sparkle', 'star', 'cute'] }, seo: { en: 'sparkle star cute symbol' }, usage: { en: 'Cute sparkle effect' } },
  { id: 'star-10', symbol: '˚✧', category: 'stars', unicode: 'U+02DA U+2727', tags: { en: ['sparkle', 'combo', 'aesthetic'] }, seo: { en: 'sparkle combo aesthetic' }, usage: { en: 'Aesthetic combo' } },
  { id: 'star-combo-1', symbol: '✧˖°', category: 'stars', unicode: 'U+2727 U+02D6 U+00B0', tags: { en: ['star', 'combo', 'aesthetic'] }, seo: { en: 'star combo aesthetic decoration' }, usage: { en: 'Title decoration' } },
  { id: 'star-combo-2', symbol: '˚₊·', category: 'stars', unicode: 'U+02DA U+208A U+00B7', tags: { en: ['dots', 'combo', 'aesthetic'] }, seo: { en: 'dots combo aesthetic' }, usage: { en: 'Aesthetic separator' } },
  { id: 'star-combo-3', symbol: '*ੈ✩‧₊˚', category: 'stars', unicode: 'U+002A U+0A48 U+2729', tags: { en: ['star', 'combo', 'complete'] }, seo: { en: 'complete star combo aesthetic' }, usage: { en: 'Full aesthetic line' } }
];

// 4. 🎀 蝴蝶结饰品系列 (28个) - 精选15个核心
export const bowsSymbols: Symbol2026[] = [
  { id: 'bow-1', symbol: '🎀', category: 'bows', unicode: 'U+1F380', tags: { en: ['bow', 'ribbon', 'pink', 'cute'] }, seo: { en: 'pink bow ribbon cute emoji' }, usage: { en: 'Girly aesthetic, gifts' } },
  { id: 'bow-2', symbol: '🪢', category: 'bows', unicode: 'U+1FAA2', tags: { en: ['knot', 'tie', 'decorative'] }, seo: { en: 'knot tie decorative symbol' }, usage: { en: 'Decorative element' } },
  { id: 'bow-3', symbol: '୨୧', category: 'bows', unicode: 'U+0B68 U+0B67', tags: { en: ['brackets', 'cute', 'aesthetic'] }, seo: { en: 'cute brackets aesthetic symbol' }, usage: { en: 'Wrap text cutely' } },
  { id: 'bow-4', symbol: 'ʚɞ', category: 'bows', unicode: 'U+029A U+025E', tags: { en: ['wings', 'angel', 'cute'] }, seo: { en: 'angel wings cute symbol' }, usage: { en: 'Angel aesthetic' } },
  { id: 'bow-5', symbol: '꒰꒱', category: 'bows', unicode: 'U+A4B0 U+A4B1', tags: { en: ['brackets', 'soft', 'aesthetic'] }, seo: { en: 'soft brackets aesthetic' }, usage: { en: 'Soft girl aesthetic' } },
  { id: 'bow-6', symbol: '𖥦', category: 'bows', unicode: 'U+16966', tags: { en: ['decorative', 'unique', 'aesthetic'] }, seo: { en: 'unique decorative aesthetic symbol' }, usage: { en: 'Unique decoration' } },
  { id: 'bow-7', symbol: 'ෆ', category: 'bows', unicode: 'U+0DC6', tags: { en: ['heart', 'sinhala', 'cute'] }, seo: { en: 'sinhala heart cute symbol' }, usage: { en: 'Unique heart' } },
  { id: 'bow-combo-1', symbol: '🎀💗', category: 'bows', unicode: 'U+1F380 U+1F497', tags: { en: ['bow', 'heart', 'combo'] }, seo: { en: 'bow heart combo cute' }, usage: { en: 'Girly combo' } }
];

// 5. 颜文字系列 (25个) - 精选15个核心
export const kaomojiSymbols: Symbol2026[] = [
  { id: 'kaomoji-1', symbol: '╰(*´•͈ ꪹ•͈`*)╯', category: 'kaomoji', unicode: 'Complex', tags: { en: ['happy', 'cute', 'excited'] }, seo: { en: 'happy cute kaomoji excited' }, usage: { en: 'Express happiness' } },
  { id: 'kaomoji-2', symbol: '૮₍ ˶•⤙•˶ ₎ა', category: 'kaomoji', unicode: 'Complex', tags: { en: ['bear', 'cute', 'shy'] }, seo: { en: 'cute bear kaomoji shy' }, usage: { en: 'Shy expression' } },
  { id: 'kaomoji-3', symbol: '꒰ᐡ•͈ ꒳ •͈ᐡ꒱', category: 'kaomoji', unicode: 'Complex', tags: { en: ['cat', 'cute', 'happy'] }, seo: { en: 'cute cat kaomoji happy' }, usage: { en: 'Happy cat face' } },
  { id: 'kaomoji-4', symbol: '⁺◟( •̀ᗝ •́ )◟⁺', category: 'kaomoji', unicode: 'Complex', tags: { en: ['excited', 'happy', 'energetic'] }, seo: { en: 'excited happy kaomoji energetic' }, usage: { en: 'Show excitement' } },
  { id: 'kaomoji-5', symbol: '(˵ •̀ ᴗ -˵ )', category: 'kaomoji', unicode: 'Complex', tags: { en: ['wink', 'cute', 'playful'] }, seo: { en: 'wink cute kaomoji playful' }, usage: { en: 'Playful wink' } },
  { id: 'kaomoji-6', symbol: '(๑•́ ₃ •̀๑)', category: 'kaomoji', unicode: 'Complex', tags: { en: ['kiss', 'love', 'cute'] }, seo: { en: 'kiss love kaomoji cute' }, usage: { en: 'Send kisses' } },
  { id: 'kaomoji-7', symbol: '(´｡• ᵕ •｡`)', category: 'kaomoji', unicode: 'Complex', tags: { en: ['soft', 'gentle', 'cute'] }, seo: { en: 'soft gentle kaomoji cute' }, usage: { en: 'Gentle expression' } }
];

// 6. 分隔线系列 (20个) - 精选10个核心
export const dividersSymbols: Symbol2026[] = [
  { id: 'divider-1', symbol: '──⋅⋆☾⋆⋅──', category: 'dividers', unicode: 'Complex', tags: { en: ['divider', 'moon', 'aesthetic'] }, seo: { en: 'moon divider aesthetic line' }, usage: { en: 'Section divider' } },
  { id: 'divider-2', symbol: '♡୨୧♡', category: 'dividers', unicode: 'Complex', tags: { en: ['divider', 'heart', 'cute'] }, seo: { en: 'heart divider cute line' }, usage: { en: 'Cute divider' } },
  { id: 'divider-3', symbol: '༊*·˚', category: 'dividers', unicode: 'Complex', tags: { en: ['divider', 'simple', 'aesthetic'] }, seo: { en: 'simple divider aesthetic' }, usage: { en: 'Minimalist divider' } },
  { id: 'divider-4', symbol: '❀⸝⋆˚꒰🌸꒱˚⸝❀', category: 'dividers', unicode: 'Complex', tags: { en: ['divider', 'flower', 'spring'] }, seo: { en: 'flower divider spring aesthetic' }, usage: { en: 'Spring divider' } },
  { id: 'divider-5', symbol: '── ♡ ♡ ♡ ──', category: 'dividers', unicode: 'Complex', tags: { en: ['divider', 'hearts', 'love'] }, seo: { en: 'hearts divider love line' }, usage: { en: 'Love divider' } }
];

// 7. 动物玩偶系列 (22个) - 精选12个核心
export const animalsSymbols: Symbol2026[] = [
  { id: 'animal-1', symbol: '🐱', category: 'animals', unicode: 'U+1F431', tags: { en: ['cat', 'pet', 'cute'] }, seo: { en: 'cat pet cute emoji' }, usage: { en: 'Pet content' } },
  { id: 'animal-2', symbol: '🐻', category: 'animals', unicode: 'U+1F43B', tags: { en: ['bear', 'cute', 'teddy'] }, seo: { en: 'bear cute teddy emoji' }, usage: { en: 'Cute bear content' } },
  { id: 'animal-3', symbol: '🧸', category: 'animals', unicode: 'U+1F9F8', tags: { en: ['teddy bear', 'plush', 'toy'] }, seo: { en: 'teddy bear plush toy emoji' }, usage: { en: 'Toy collection' } },
  { id: 'animal-4', symbol: '𓃠', category: 'animals', unicode: 'U+130E0', tags: { en: ['hieroglyph', 'unique', 'aesthetic'] }, seo: { en: 'hieroglyph unique aesthetic symbol' }, usage: { en: 'Unique decoration' } },
  { id: 'animal-5', symbol: '𐙚', category: 'animals', unicode: 'U+10065A', tags: { en: ['ancient', 'unique', 'aesthetic'] }, seo: { en: 'ancient unique aesthetic symbol' }, usage: { en: 'Ancient aesthetic' } },
  { id: 'animal-6', symbol: '🐰', category: 'animals', unicode: 'U+1F430', tags: { en: ['rabbit', 'bunny', 'cute'] }, seo: { en: 'rabbit bunny cute emoji' }, usage: { en: 'Bunny content' } }
];

// 8. 美学组合系列 (25个) - 精选10个核心
export const combosSymbols: Symbol2026[] = [
  { id: 'combo-1', symbol: '༊*·˚', category: 'combos', unicode: 'Complex', tags: { en: ['aesthetic', 'combo', 'simple'] }, seo: { en: 'aesthetic combo simple decoration' }, usage: { en: 'Simple aesthetic line' } },
  { id: 'combo-2', symbol: '*ੈ✩‧₊˚', category: 'combos', unicode: 'Complex', tags: { en: ['aesthetic', 'stars', 'combo'] }, seo: { en: 'aesthetic stars combo decoration' }, usage: { en: 'Star aesthetic line' } },
  { id: 'combo-3', symbol: '✧˖°', category: 'combos', unicode: 'Complex', tags: { en: ['aesthetic', 'sparkle', 'combo'] }, seo: { en: 'aesthetic sparkle combo' }, usage: { en: 'Sparkle decoration' } },
  { id: 'combo-4', symbol: '˚₊·', category: 'combos', unicode: 'Complex', tags: { en: ['aesthetic', 'dots', 'minimal'] }, seo: { en: 'aesthetic dots minimal combo' }, usage: { en: 'Minimal decoration' } },
  { id: 'combo-5', symbol: '✧˖° 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 ˚₊·', category: 'combos', unicode: 'Complex', tags: { en: ['profile', 'title', 'aesthetic'] }, seo: { en: 'profile title aesthetic combo' }, usage: { en: 'Profile title' } }
];

// 9. 高级aesthetic系列 (20个) - 精选10个核心
export const aestheticSymbols: Symbol2026[] = [
  { id: 'aesthetic-1', symbol: '꒰ა ♱ ໒꒱', category: 'aesthetic', unicode: 'Complex', tags: { en: ['gothic', 'aesthetic', 'unique'] }, seo: { en: 'gothic aesthetic unique symbol' }, usage: { en: 'Gothic aesthetic' } },
  { id: 'aesthetic-2', symbol: '𐙚', category: 'aesthetic', unicode: 'U+10065A', tags: { en: ['ancient', 'rare', 'aesthetic'] }, seo: { en: 'ancient rare aesthetic symbol' }, usage: { en: 'Rare decoration' } },
  { id: 'aesthetic-3', symbol: '⸼۪ 𖹭', category: 'aesthetic', unicode: 'Complex', tags: { en: ['unique', 'aesthetic', 'special'] }, seo: { en: 'unique aesthetic special symbol' }, usage: { en: 'Special decoration' } },
  { id: 'aesthetic-4', symbol: '*ೃ༄', category: 'aesthetic', unicode: 'Complex', tags: { en: ['aesthetic', 'decorative', 'elegant'] }, seo: { en: 'aesthetic decorative elegant symbol' }, usage: { en: 'Elegant decoration' } }
];

// 10. 箭头指示系列 - 精选10个核心
export const arrowsSymbols: Symbol2026[] = [
  { id: 'arrow-1', symbol: '➜', category: 'arrows', unicode: 'U+279C', tags: { en: ['arrow', 'right', 'pointer'] }, seo: { en: 'right arrow pointer symbol' }, usage: { en: 'Link indicator' } },
  { id: 'arrow-2', symbol: '➤', category: 'arrows', unicode: 'U+27A4', tags: { en: ['arrow', 'bold', 'pointer'] }, seo: { en: 'bold arrow pointer symbol' }, usage: { en: 'Strong indicator' } },
  { id: 'arrow-3', symbol: '➵', category: 'arrows', unicode: 'U+27B5', tags: { en: ['arrow', 'decorative', 'pointer'] }, seo: { en: 'decorative arrow pointer' }, usage: { en: 'Decorative pointer' } },
  { id: 'arrow-4', symbol: '➶', category: 'arrows', unicode: 'U+27B6', tags: { en: ['arrow', 'three', 'pointer'] }, seo: { en: 'three arrow pointer symbol' }, usage: { en: 'Triple pointer' } },
  { id: 'arrow-5', symbol: '↬', category: 'arrows', unicode: 'U+21AC', tags: { en: ['arrow', 'wave', 'pointer'] }, seo: { en: 'wave arrow pointer symbol' }, usage: { en: 'Wave pointer' } },
  { id: 'arrow-6', symbol: '⤷', category: 'arrows', unicode: 'U+2937', tags: { en: ['arrow', 'down right', 'pointer'] }, seo: { en: 'down right arrow pointer' }, usage: { en: 'Down right pointer' } },
  { id: 'arrow-7', symbol: '⟿', category: 'arrows', unicode: 'U+27FF', tags: { en: ['arrow', 'long', 'pointer'] }, seo: { en: 'long arrow pointer symbol' }, usage: { en: 'Long pointer' } }
];

// 导出所有符号
export const allSymbols2026: Symbol2026[] = [
  ...heartsSymbols,
  ...flowersSymbols,
  ...starsSymbols,
  ...bowsSymbols,
  ...kaomojiSymbols,
  ...dividersSymbols,
  ...animalsSymbols,
  ...combosSymbols,
  ...aestheticSymbols,
  ...arrowsSymbols
];

// 按分类获取符号
export function getSymbolsByCategory2026(category: string): Symbol2026[] {
  return allSymbols2026.filter(s => s.category === category);
}

// 搜索符号（支持多语言）
export function searchSymbols2026(query: string, locale: 'en' | 'fil' | 'ms' | 'bn' | 'pl' = 'en'): Symbol2026[] {
  const lowerQuery = query.toLowerCase();
  return allSymbols2026.filter(symbol =>
    symbol.symbol.includes(query) ||
    (symbol.tags[locale] && symbol.tags[locale]!.some((tag: string) => tag.toLowerCase().includes(lowerQuery))) ||
    (symbol.seo[locale] && symbol.seo[locale]!.toLowerCase().includes(lowerQuery))
  );
}
