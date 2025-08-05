#!/usr/bin/env node

/**
 * Script to update sitemap.xml with dynamic blog posts
 * Run this script after adding new blog posts or during build process
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock blog posts - replace with actual blog data source
const getBlogPosts = () => {
  // In a real application, this would fetch from your CMS or database
  return [
    {
      slug: 'energy-saving-tips-uk-businesses',
      publishedAt: '2025-01-15',
      updatedAt: '2025-01-20'
    },
    {
      slug: 'understanding-business-electricity-rates',
      publishedAt: '2025-01-10',
      updatedAt: '2025-01-10'
    },
    {
      slug: 'water-efficiency-commercial-properties',
      publishedAt: '2025-01-05',
      updatedAt: '2025-01-05'
    }
  ];
};

const generateSitemap = (blogPosts) => {
  const baseUrl = 'https://www.revo-utilities.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { loc: '/', lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: '/our-services', lastmod: currentDate, changefreq: 'monthly', priority: '0.9' },
    { loc: '/comparison', lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { loc: '/insights', lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    { loc: '/team', lastmod: currentDate, changefreq: 'monthly', priority: '0.7' }
  ];

  const blogUrls = blogPosts.map(post => ({
    loc: `/insights/${post.slug}`,
    lastmod: post.updatedAt || post.publishedAt,
    changefreq: 'yearly',
    priority: '0.6'
  }));

  const allUrls = [...staticPages, ...blogUrls];

  const urlEntries = allUrls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

${urlEntries}

</urlset>`;
};

const updateSitemap = () => {
  try {
    const blogPosts = getBlogPosts();
    const sitemapContent = generateSitemap(blogPosts);
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap updated successfully!');
    console.log(`📄 Generated sitemap with ${blogPosts.length} blog posts`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
updateSitemap();