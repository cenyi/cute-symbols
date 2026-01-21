import type { APIRoute } from 'astro';

export const prerender = false;

// 使用 import.meta.glob 预加载所有符号文件
const symbolFiles = import.meta.glob('../../../data/symbols/*.json', { eager: true });

export const GET: APIRoute = async ({ params }) => {
  const { category } = params;

  try {
    // 查找对应的分类文件
    const categoryFilePath = `../../../data/symbols/${category}.json`;
    const categoryFile = symbolFiles[categoryFilePath];

    if (!categoryFile) {
      throw new Error(`Category '${category}' not found`);
    }

    // 类型断言，确保 data 是预期的格式
    const data = (categoryFile as any).default;

    // 返回分类数据
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          category: data.category,
          name: data.name,
          description: data.description,
          color: data.color,
          icon: data.icon,
          symbols: data.symbols
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
    
    // 尝试返回默认数据
    try {
      if (category === 'all') {
        return new Response(
          JSON.stringify({
            success: true,
            data: {
              category: 'all',
              name: { en: 'All Symbols' },
              description: { en: 'All cute symbols' },
              color: '#ff6b9d',
              icon: '✨',
              symbols: []
            }
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: `Category '${category}' not found`
        }),
        { status: 404 }
      );
    } catch (fallbackError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Category not found'
        }),
        { status: 404 }
      );
    }
  }
};
