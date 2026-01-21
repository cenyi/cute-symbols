import type { APIRoute } from 'astro';
import { searchSymbols2026 } from '../../../data/symbols-2026';
import { CATEGORIES_2026 } from '../../../data/categories-2026';
import { type Locale } from '../../../i18n/config';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    // 获取搜索参数
    const searchParams = new URL(url).searchParams;
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'all';
    const langParam = searchParams.get('lang');
    
    // 定义支持的语言类型
    const supportedLangs: Locale[] = ['en', 'fil', 'ms', 'bn', 'pl'];
    // 验证语言参数，默认使用英语
    const lang = supportedLangs.includes(langParam as Locale) ? langParam as Locale : 'en';

    if (!query) {
      return new Response(JSON.stringify({
        error: 'Query parameter "q" is required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // 执行搜索
    let searchResults = searchSymbols2026(query, lang);

    // 如果指定了分类，过滤结果
    if (category !== 'all') {
      searchResults = searchResults.filter(symbol => symbol.category === category);
    }

    // 获取分类信息映射
    const categoryMap = new Map(
      CATEGORIES_2026.map(cat => [cat.id, cat])
    );

    // 格式化搜索结果
    const results = searchResults.map(symbol => {
      const catInfo = categoryMap.get(symbol.category);
      return {
        id: symbol.id,
        char: symbol.symbol,
        tags: symbol.tags[lang] || symbol.tags.en || [],
        unicode: symbol.unicode,
        popular: symbol.tags.en?.includes('popular') || false,
        category: symbol.category,
        categoryIcon: catInfo?.icon || '✨',
        categoryColor: catInfo?.color || '#ff6b9d'
      };
    });

    return new Response(JSON.stringify({
      success: true,
      query,
      category,
      count: results.length,
      results
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 搜索结果缓存5分钟
      }
    });

  } catch (error) {
    console.error('Search API Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};