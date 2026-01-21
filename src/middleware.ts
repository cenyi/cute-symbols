/**
 * Astro Middleware - 自动语言检测和重定向
 * 基于Cloudflare提供的IP国家信息
 */
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 🔥 排除不需要语言检测的路径
  const skipPaths = [
    '/api',           // API路由
    '/_astro',        // Astro内部文件
    '/assets',        // 静态资源
    '/.well-known',   // 系统文件
    '/robots.txt',    // SEO文件
    '/sitemap.xml',   // 站点地图
    '/favicon',       // 图标
    '/manifest',      // PWA清单
  ];

  // 如果匹配排除路径，直接跳过
  if (skipPaths.some(path => pathname.startsWith(path))) {
    return next();
  }

  // 🔥 检查是否是无效的语言路径（如 /categories, /xyz 等）
  // 如果路径格式是 /xxx 且 xxx 不是有效语言，返回 404
  const validLangs = ['fil', 'ms', 'bn', 'pl'];
  const validPaths = ['blog', 'about', 'contact', 'privacy', 'terms', 'sitemap.xml', 'robots.txt', 'manifest.json']; // 完整的有效页面路径
  const invalidLangMatch = pathname.match(/^\/([^\/]+)\/?$/);
  if (invalidLangMatch && 
      !validLangs.includes(invalidLangMatch[1]) && 
      !validPaths.includes(invalidLangMatch[1]) && 
      pathname !== '/') {
    // 返回 404
    return new Response('Not Found', { status: 404, statusText: 'Not Found' });
  }

  // 如果用户已经在特定语言路径上，不处理（避免无限重定向）
  // 支持: /fil/, /ms/, /bn/, /pl/
  const isLangPath = /^\/(fil|ms|bn|pl)\//.test(pathname + '/');

  if (isLangPath) {
    return next();
  }

  // 🔥 Cloudflare Pages 自动提供IP国家信息
  const country = context.request.headers.get('cf-ipcountry');

  // 国家代码到语言的映射
  const countryToLang: Record<string, string> = {
    // 菲律宾语 → Filipino
    'PH': 'fil',

    // 马来语 → Malay
    // 覆盖：马来西亚、文莱、新加坡、印尼
    'MY': 'ms',
    'BN': 'ms',
    'SG': 'ms',
    'ID': 'ms',

    // 孟加拉语 → Bengali
    'BD': 'bn',

    // 波兰语 → Polish
    'PL': 'pl',
  };

  // 检测到国家且映射到非英语语言
  if (country && countryToLang[country]) {
    const targetLang = countryToLang[country];

    // 只对首页和分类页面进行重定向
    // 其他页面（如博客、联系页面）保持原路径
    const shouldRedirect = pathname === '/' || pathname.startsWith('/categories');

    if (shouldRedirect) {
      // 重定向到对应语言版本
      // 例如：/ → /fil/, /categories → /fil/categories
      const newPathname = pathname === '/' ? `/${targetLang}/` : `/${targetLang}${pathname}`;

      return context.redirect(newPathname);
    }
  }

  // 默认：显示英文页面（不重定向）
  return next();
});
