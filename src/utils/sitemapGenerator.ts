// Dynamic sitemap generation utility
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private static baseUrl = 'https://www.revo-utilities.com';
  
  private static staticPages: SitemapUrl[] = [
    {
      loc: '/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: '/our-services',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: '/comparison',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: '/insights',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: '/team',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    }
  ];

  public static async generateSitemap(blogPosts?: Array<{ slug: string; updatedAt?: string; publishedAt?: string }>): Promise<string> {
    const urls: SitemapUrl[] = [...this.staticPages];

    // Add blog posts if provided
    if (blogPosts) {
      blogPosts.forEach(post => {
        urls.push({
          loc: `/insights/${post.slug}`,
          lastmod: post.updatedAt || post.publishedAt || new Date().toISOString().split('T')[0],
          changefreq: 'yearly',
          priority: 0.6
        });
      });
    }

    return this.generateXML(urls);
  }

  private static generateXML(urls: SitemapUrl[]): string {
    const urlEntries = urls.map(url => {
      const fullUrl = url.loc.startsWith('http') ? url.loc : `${this.baseUrl}${url.loc}`;
      
      return `  <url>
    <loc>${fullUrl}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

${urlEntries}

</urlset>`;
  }

  // Method to update sitemap with new blog posts
  public static async updateSitemapWithBlogPosts(blogPosts: Array<{ slug: string; updatedAt?: string; publishedAt?: string }>) {
    const sitemapContent = await this.generateSitemap(blogPosts);
    
    // In a real application, you would save this to public/sitemap.xml
    // For now, we'll just return the content
    return sitemapContent;
  }
}