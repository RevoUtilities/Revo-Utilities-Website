// Utility for managing dynamic meta tags
export interface MetaTagsConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  tags?: string[];
  siteName?: string;
}

class MetaTagsManager {
  private defaultConfig: MetaTagsConfig = {
    title: 'Revo Utilities | Save on Business Gas, Electricity & Water',
    description: 'Revo Utilities helps UK businesses save up to 50% on gas, electricity, and water rates. Get independent advice, competitive quotes, and flexible billing from trusted experts.',
    image: '/public/logos/Revo/revo-utilities-meta-card.webp',
    url: 'https://www.revo-utilities.com/',
    type: 'website',
    siteName: 'Revo Utilities'
  };

  private createdTags: Set<string> = new Set();

  private setMetaTag(property: string, content: string, isProperty = true) {
    const attribute = isProperty ? 'property' : 'name';
    const selector = `meta[${attribute}="${property}"]`;
    
    let tag = document.querySelector(selector) as HTMLMetaElement;
    
    if (tag) {
      tag.content = content;
    } else {
      tag = document.createElement('meta');
      tag.setAttribute(attribute, property);
      tag.content = content;
      document.head.appendChild(tag);
      this.createdTags.add(selector);
    }
  }

  private setTitle(title: string) {
    document.title = title;
    
    // Also update the title meta tag if it exists
    const titleMeta = document.querySelector('meta[name="title"]') as HTMLMetaElement;
    if (titleMeta) {
      titleMeta.content = title;
    }
  }

  private setCanonicalUrl(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonical) {
      canonical.href = url;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = url;
      document.head.appendChild(canonical);
      this.createdTags.add('link[rel="canonical"]');
    }
  }

  public updateMetaTags(config: MetaTagsConfig) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    // Basic meta tags
    if (finalConfig.title) {
      this.setTitle(finalConfig.title);
    }
    
    if (finalConfig.description) {
      this.setMetaTag('description', finalConfig.description, false);
    }

    if (finalConfig.url) {
      this.setCanonicalUrl(finalConfig.url);
    }

    // Open Graph tags
    this.setMetaTag('og:type', finalConfig.type || 'website');
    this.setMetaTag('og:site_name', finalConfig.siteName || 'Revo Utilities');
    
    if (finalConfig.title) {
      this.setMetaTag('og:title', finalConfig.title);
    }
    
    if (finalConfig.description) {
      this.setMetaTag('og:description', finalConfig.description);
    }
    
    if (finalConfig.url) {
      this.setMetaTag('og:url', finalConfig.url);
    }
    
    if (finalConfig.image) {
      // Ensure image URL is absolute
      const imageUrl = finalConfig.image.startsWith('http') 
        ? finalConfig.image 
        : `${window.location.origin}${finalConfig.image}`;
      
      this.setMetaTag('og:image', imageUrl);
      this.setMetaTag('og:image:width', '1200');
      this.setMetaTag('og:image:height', '630');
      this.setMetaTag('og:image:type', 'image/webp');
    }

    // Article-specific tags
    if (finalConfig.type === 'article') {
      if (finalConfig.author) {
        this.setMetaTag('article:author', finalConfig.author);
      }
      
      if (finalConfig.publishedTime) {
        this.setMetaTag('article:published_time', finalConfig.publishedTime);
      }
      
      if (finalConfig.tags) {
        // Remove existing article:tag meta tags
        const existingTags = document.querySelectorAll('meta[property="article:tag"]');
        existingTags.forEach(tag => tag.remove());
        
        // Add new tags
        finalConfig.tags.forEach(tag => {
          this.setMetaTag('article:tag', tag);
        });
      }
    }

    // Twitter Card tags
    this.setMetaTag('twitter:card', 'summary_large_image', false);
    
    if (finalConfig.title) {
      this.setMetaTag('twitter:title', finalConfig.title, false);
    }
    
    if (finalConfig.description) {
      this.setMetaTag('twitter:description', finalConfig.description, false);
    }
    
    if (finalConfig.image) {
      // Ensure image URL is absolute for Twitter
      const imageUrl = finalConfig.image.startsWith('http') 
        ? finalConfig.image 
        : `${window.location.origin}${finalConfig.image}`;
      
      this.setMetaTag('twitter:image', imageUrl, false);
    }
    
    if (finalConfig.url) {
      this.setMetaTag('twitter:url', finalConfig.url, false);
    }
  }

  public resetToDefault() {
    this.updateMetaTags(this.defaultConfig);
  }

  public cleanup() {
    // Remove dynamically created tags
    this.createdTags.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        element.remove();
      }
    });
    this.createdTags.clear();
  }
}

// Export singleton instance
export const metaTagsManager = new MetaTagsManager();

// Helper function for blog posts
export const updateBlogPostMeta = (post: {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
  author: { name: string };
  date: string;
  tags?: string[];
}) => {
  const url = `${window.location.origin}/insights/${post.slug}`;
  
  // Use post image if available, otherwise fallback to default
  let imageUrl = '/public/logos/Revo/revo-utilities-meta-card.webp';
  if (post.imageUrl) {
    imageUrl = post.imageUrl.startsWith('http') 
      ? post.imageUrl 
      : post.imageUrl;
  }
  
  metaTagsManager.updateMetaTags({
    title: `${post.title} | Revo Utilities Blog`,
    description: post.excerpt,
    url,
    image: imageUrl,
    type: 'article',
    author: post.author.name,
    publishedTime: new Date(post.date).toISOString(),
    tags: post.tags,
    siteName: 'Revo Utilities'
  });
};