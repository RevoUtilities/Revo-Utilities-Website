// Structured data utilities for SEO
export interface BlogPostStructuredData {
  title: string;
  description: string;
  author: { name: string };
  date: string;
  imageUrl?: string;
  url: string;
  tags?: string[];
}

export class StructuredDataManager {
  private static createBlogPostSchema(data: BlogPostStructuredData) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title,
      "description": data.description,
      "author": {
        "@type": "Person",
        "name": data.author.name
      },
      "datePublished": new Date(data.date).toISOString(),
      "dateModified": new Date(data.date).toISOString(),
      "publisher": {
        "@type": "Organization",
        "name": "Revo Utilities",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/public/logos/Revo/revo-utilities-meta-card.webp`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url
      },
      ...(data.imageUrl && {
        "image": {
          "@type": "ImageObject",
          "url": data.imageUrl,
          "width": 1200,
          "height": 630
        }
      }),
      ...(data.tags && {
        "keywords": data.tags.join(", ")
      }),
      "url": data.url,
      "isPartOf": {
        "@type": "Blog",
        "@id": `${window.location.origin}/blog`,
        "name": "Revo Utilities Blog"
      }
    };
  }

  private static createBlogSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Revo Utilities Blog",
      "description": "Energy industry insights, cost-saving tips, and sustainability advice for UK businesses",
      "url": `${window.location.origin}/blog`,
      "publisher": {
        "@type": "Organization",
        "name": "Revo Utilities",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/public/logos/Revo/revo-utilities-meta-card.webp`
        }
      }
    };
  }

  public static addBlogPostStructuredData(data: BlogPostStructuredData) {
    const schema = this.createBlogPostSchema(data);
    this.addStructuredData('blog-post-schema', schema);
  }

  public static addBlogListingStructuredData() {
    const schema = this.createBlogSchema();
    this.addStructuredData('blog-schema', schema);
  }

  private static addStructuredData(id: string, schema: object) {
    // Remove existing schema with same ID
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  public static removeStructuredData(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  }

  public static cleanup() {
    this.removeStructuredData('blog-post-schema');
    this.removeStructuredData('blog-schema');
  }
}