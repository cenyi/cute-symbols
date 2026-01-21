import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { join } from 'path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { category } = params;

  try {
    // 读取对应的JSON文件
    const filePath = join(process.cwd(), 'src/data/symbols', `${category}.json`);
    
    // 读取文件内容
    const fileContent = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

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
