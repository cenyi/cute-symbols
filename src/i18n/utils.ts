import { type Locale } from './config';
import enTranslations from './locales/en.json';
import filTranslations from './locales/fil.json';
import msTranslations from './locales/ms.json';
import bnTranslations from './locales/bn.json';
import plTranslations from './locales/pl.json';

// 所有翻译
const translations: Record<Locale, any> = {
  en: enTranslations,
  fil: filTranslations,
  ms: msTranslations,
  bn: bnTranslations,
  pl: plTranslations
};

// 获取翻译函数
export function getTranslations(locale: Locale) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // 如果翻译不存在，回退到英文
        value = translations['en'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // 如果英文也不存在，返回key
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
}
