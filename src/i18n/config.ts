// 支持的语言列表
export const locales = ['en', 'fil', 'ms', 'bn', 'pl'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = 'en';

// 语言元数据
export const localeNames: Record<Locale, string> = {
  en: 'English',
  fil: 'Filipino',
  ms: 'Bahasa Melayu',
  bn: 'বাংলা',
  pl: 'Polski'
};

// 语言方向（用于RTL语言）
export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fil: 'ltr',
  ms: 'ltr',
  bn: 'ltr',
  pl: 'ltr'
};
