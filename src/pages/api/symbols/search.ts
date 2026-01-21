import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    // 获取搜索参数
    const searchParams = new URL(url).searchParams;
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'all';

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

    // 读取索引文件
    const indexPath = path.join(process.cwd(), 'src', 'data', 'symbols', 'index.json');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const indexData = JSON.parse(indexContent);

    let results: any[] = [];

    // 如果指定了分类，只搜索该分类
    const categoriesToSearch = category === 'all'
      ? indexData.categories
      : indexData.categories.filter((cat: any) => cat.id === category);

    // 遍历所有分类文件并搜索
    for (const cat of categoriesToSearch) {
      const catPath = path.join(process.cwd(), 'src', 'data', 'symbols', cat.file);

      if (!fs.existsSync(catPath)) continue;

      const catContent = fs.readFileSync(catPath, 'utf-8');
      const catData = JSON.parse(catContent);

      // 搜索符号
      const matchingSymbols = catData.symbols.filter((symbol: any) => {
        const symbolChar = symbol.char.toLowerCase();
        const tags = symbol.tags || [];
        const searchLower = query.toLowerCase();

        return symbolChar.includes(searchLower) ||
               tags.some((tag: string) => tag.toLowerCase().includes(searchLower));
      });

      // 添加分类信息到结果
      const enriched = matchingSymbols.map((symbol: any) => ({
        ...symbol,
        category: catData.category,
        categoryIcon: catData.icon,
        categoryColor: catData.color
      }));

      results = [...results, ...enriched];
    }

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
    return new Response(JSON.stringify({
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