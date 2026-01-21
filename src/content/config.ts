/**
 * Astro Content Collections 配置
 * 用于博客文章的类型安全和SEO优化
 */
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Cute Symbols Team'),
    
    // SEO优化
    keywords: z.array(z.string()),
    canonicalURL: z.string().optional(),
    
    // 分类和标签
    category: z.enum([
      'instagram',
      'tiktok',
      'roblox',
      'discord',
      'twitter',
      'social-media',
      'tutorials',
      'guides'
    ]),
    tags: z.array(z.string()),
    
    // 特色图片
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    
    // 文章元数据
    readingTime: z.number().optional(), // 分钟
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    
    // 多语言支持
    lang: z.enum(['en', 'fil', 'ms', 'bn', 'pl']), // 移除默认值，确保每篇文章都明确指定语言
    
    // 多语言关联（同一篇文章的其他语言版本）
    translations: z.record(z.string()).optional(), // { zh: 'slug-zh', en: 'slug-en' }
    
    // 相关文章（用于内部链接）
    relatedPosts: z.array(z.string()).optional(),
    
    // SEO增强
    featured: z.boolean().default(false), // 是否为精选文章
    tier: z.enum(['tier1', 'tier2', 'tier3']).default('tier2'),
  }),
});

export const collections = {
  'blog': blogCollection,
};
