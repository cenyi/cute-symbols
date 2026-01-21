/**
 * 动态生成 Sitemap.xml
 * 包含所有页面和多语言版本
 * 2026 SEO优化
 */
import { locales } from '../i18n/config';
import { getCollection } from 'astro:content';

// 基础URL
const siteUrl = 'https://cute-symbols.uk';

// URL 类型定义
interface SitemapUrl {
  url: string;
  changefreq: string;
  priority: number;
  lastmod: string;
}

// 生成所有页面的URL
async function generateSitemap(): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [];

  // 1. 各语言首页
  locales.forEach(locale => {
    urls.push({
      url: locale === 'en' ? `${siteUrl}/` : `${siteUrl}/${locale}/`,
      changefreq: 'daily',
      priority: 1.0,
      lastmod: '2026-01-17'
    });
  });

  // 2. 博客首页
  locales.forEach(locale => {
    const langPrefix = locale === 'en' ? '' : `/${locale}`;
    urls.push({
      url: `${siteUrl}${langPrefix}/blog`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: '2026-01-17'
    });
  });

  // 3. 博客文章页面
  try {
    const blogPosts = await getCollection('blog');
    blogPosts.forEach(post => {
      const langPrefix = post.data.lang === 'en' ? '' : `/${post.data.lang}`;
      urls.push({
        url: `${siteUrl}${langPrefix}/blog/${post.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: post.data.updatedDate ? post.data.updatedDate.toISOString().split('T')[0] : post.data.pubDate.toISOString().split('T')[0]
      });
    });
  } catch (error) {
    console.warn('Could not load blog posts for sitemap:', error);
  }

  // 4. About 页面
  locales.forEach(locale => {
    const langPrefix = locale === 'en' ? '' : `/${locale}`;
    urls.push({
      url: `${siteUrl}${langPrefix}/about`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: '2026-01-17'
    });
  });

  // 5. Contact 页面
  locales.forEach(locale => {
    const langPrefix = locale === 'en' ? '' : `/${locale}`;
    urls.push({
      url: `${siteUrl}${langPrefix}/contact`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: '2026-01-17'
    });
  });

  // 6. Privacy 页面
  locales.forEach(locale => {
    const langPrefix = locale === 'en' ? '' : `/${locale}`;
    urls.push({
      url: `${siteUrl}${langPrefix}/privacy`,
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: '2026-01-17'
    });
  });

  // 7. Terms 页面
  locales.forEach(locale => {
    const langPrefix = locale === 'en' ? '' : `/${locale}`;
    urls.push({
      url: `${siteUrl}${langPrefix}/terms`,
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: '2026-01-17'
    });
  });

  return urls;
}

export async function GET() {
  const urls = await generateSitemap();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(url => {
  // 为每个URL添加多语言链接
  const basePath = url.url.replace(siteUrl, '').replace(/^\/(fil|ms|bn|pl)/, '') || '/';
  const hreflangLinks = locales.map(locale => {
    const langUrl = locale === 'en' 
      ? `${siteUrl}${basePath === '/' ? '' : basePath}`
      : `${siteUrl}/${locale}${basePath === '/' ? '' : basePath}`;
    return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${langUrl}" />`;
  }).join('\n');
  
  return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${hreflangLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${basePath === '/' ? '' : basePath}" />
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
