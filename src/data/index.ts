/**
 * Cute Symbols - 2026年最新最全的可爱符号库
 * 移动端优先 + AI 友好 + SEO 优化
 * 适用于 Instagram Bio, Roblox 名字, 个人简介美化
 */

// 导入2026新数据
import { allSymbols2026, getSymbolsByCategory2026, searchSymbols2026, type Symbol2026 } from './symbols-2026';
import { CATEGORIES_2026, getCategoryInfo2026, getAllCategoryNames } from './categories-2026';

// 符号类型定义（保持向后兼容）
export interface Symbol {
  id: string;
  symbol: string;
  category: string;
  tags: string[];
  unicode: string;
}

// 导出2026新分类系统
export { CATEGORIES_2026, getCategoryInfo2026, getAllCategoryNames };
export type { Symbol2026 };

// 2026年10大核心分类（简化版，用于UI）
export const CATEGORIES = CATEGORIES_2026.map(cat => ({
  id: cat.id,
  key: cat.id,
  icon: cat.icon,
  color: cat.color
}));

// 转换2026符号为旧格式（向后兼容）
function convertSymbol2026ToLegacy(symbol: Symbol2026): Symbol {
  return {
    id: symbol.id,
    symbol: symbol.symbol,
    category: symbol.category,
    tags: symbol.tags.en, // 默认使用英文标签
    unicode: symbol.unicode
  };
}

// 所有符号的集合（使用2026新数据）
export const allSymbols: Symbol[] = allSymbols2026.map(convertSymbol2026ToLegacy);

// 新增：获取分类信息
export function getCategoryInfo(categoryId: string) {
  return CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];
}

// 按分类获取符号
export function getSymbolsByCategory(category: string): Symbol[] {
  return allSymbols.filter(symbol => symbol.category === category);
}

// 新增：获取分类详情（包含badges和描述）
export function getCategoryDetail(categoryId: string) {
  return CATEGORIES_2026.find(c => c.id === categoryId);
}

// 搜索符号（支持中英文 + 2026关键词）
export function searchSymbols(query: string): Symbol[] {
  const lowerQuery = query.toLowerCase();
  return allSymbols.filter(symbol =>
    symbol.symbol.includes(query) ||
    symbol.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// 获取所有分类（兼容旧版）
export const categories = [
  { id: 'all', key: 'all' },
  ...CATEGORIES.map(cat => ({ id: cat.id, key: cat.key }))
];

// 统计信息（2026增强版）
export const stats = {
  total: allSymbols.length,
  byCategory: CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = allSymbols.filter(s => s.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>),
  totalCategories: CATEGORIES.length,
  // AI 友好字段
  lastUpdated: '2026-01-15',
  version: '2026.2',
  freshness: '2026年最新'
};

// AI 友好的 SEO 内容
export const seoContent = {
  siteTitle: 'Cute Symbols - 2026年最新最全的可爱符号库',
  siteDescription: '2026年最新最全的可爱符号库，包含120+个精选符号，涵盖爱心💖、星星⭐、花朵🌸、颜文字(*´•͈ ꪹ•͈`*)等10大分类。2026年最受欢迎、2026年最受女生喜欢、2026年ins热门。支持一键复制，适用于Instagram Bio、Roblox名字、个人简介美化。',

  keywords: [
    'cute symbols 2026',
    '2026年最新',
    '2026年最全',
    '2026年最受欢迎',
    '2026年最受女生喜欢',
    'aesthetic symbols 2026',
    'kaomoji 2026',
    'kawaii symbols 2026',
    'instagram bio symbols 2026',
    'roblox name symbols 2026'
  ],

  // AI 友好的结构化内容
  structuredData: {
    name: 'Cute Symbols - 可爱符号复制',
    description: '2026年最新最全的可爱符号库，包含爱心、星星、花朵、颜文字等符号',
    keywords: 'cute symbols, aesthetic symbols, kaomoji, 2026年最新, 2026年最全',
    audience: 'Social media users, gamers, content creators',
    features: [
      '2026年最新符号',
      '一键复制',
      '10大核心分类',
      '移动端优化',
      '多语言支持'
    ]
  }
};

// 2026年热门符号推荐（AI 抓取友好）
export const trendingSymbols2026 = {
  hearts: ['♡', '♥', '💖', '💗', '💕'],
  stars: ['⭐', '✨', '✩', '⋆', '☾'],
  flowers: ['🌸', '✿', '❀', '🌺', '🌷'],
  kaomoji: ['╰(*´•͈ ꪹ•͈`*)╯', '(´｡• ᵕ •｡`)', '༊*·˚'],
  aesthetic: ['꒰ა ♱ ໒꒱', '𐙚', '*ੈ✩‧₊˚']
};
