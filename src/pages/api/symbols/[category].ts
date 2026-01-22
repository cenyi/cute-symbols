import type { APIRoute } from 'astro';
import { getSymbolsByCategory2026, allSymbols2026 } from '../../../data/symbols-2026';
import { CATEGORIES_2026 } from '../../../data/categories-2026';
import { type Locale } from '../../../i18n/config';

export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
  // 确保 category 不是 undefined
  const category = params.category as string;
  
  // 获取语言参数，确保是支持的语言
  const searchParams = new URL(url).searchParams;
  const langParam = searchParams.get('lang');
  // 定义支持的语言类型
  const supportedLangs: Locale[] = ['en', 'fil', 'ms', 'bn', 'pl', 'zh', 'ja', 'ko'];
  // 验证语言参数，默认使用英语
  const lang = supportedLangs.includes(langParam as Locale) ? langParam as Locale : 'en';

  try {
    // 获取分类信息
    const categoryInfo = CATEGORIES_2026.find(cat => cat.id === category);
    
    if (!categoryInfo) {
      throw new Error(`Category '${category}' not found`);
    }

    // 获取符号数据
    let symbols = [];
    if (category === 'all') {
      // 返回所有符号
      symbols = allSymbols2026;
    } else {
      // 返回分类符号
      symbols = getSymbolsByCategory2026(category);
    }

    // 转换符号格式，添加分类信息
    const formattedSymbols = symbols.map(symbol => ({
      id: symbol.id,
      char: symbol.symbol,
      tags: symbol.tags[lang] || symbol.tags.en || [],
      unicode: symbol.unicode,
      popular: symbol.tags.en?.includes('popular') || false
    }));

    // 返回分类数据
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          category: category,
          name: categoryInfo.names[lang] || categoryInfo.names.en,
          description: categoryInfo.descriptions[lang] || categoryInfo.descriptions.en,
          color: categoryInfo.color,
          icon: categoryInfo.icon,
          symbols: formattedSymbols
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600'
        }
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: `Category '${category}' not found`
      }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
