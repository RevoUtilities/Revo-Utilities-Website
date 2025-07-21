// Social sharing utilities with proper metadata
export interface ShareData {
  title: string;
  description: string;
  url: string;
  hashtags?: string[];
}

export class SocialShareManager {
  private static formatHashtags(tags?: string[]): string {
    if (!tags || tags.length === 0) return '';
    return tags.map(tag => `#${tag.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')}`).join(' ');
  }

  public static getTwitterShareUrl(data: ShareData): string {
    const params = new URLSearchParams();
    
    // Twitter has a 280 character limit, so we need to be strategic
    const hashtags = this.formatHashtags(data.hashtags);
    const maxTitleLength = 200 - data.url.length - hashtags.length;
    const truncatedTitle = data.title.length > maxTitleLength 
      ? `${data.title.substring(0, maxTitleLength - 3)}...`
      : data.title;
    
    params.append('text', truncatedTitle);
    params.append('url', data.url);
    
    if (hashtags) {
      params.append('hashtags', data.hashtags!.join(','));
    }
    
    return `https://x.com/intent/tweet?${params.toString()}`;
  }

  public static getFacebookShareUrl(data: ShareData): string {
    const params = new URLSearchParams();
    params.append('u', data.url);
    
    // Facebook will automatically pull title, description, and image from OG tags
    return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
  }

  public static getLinkedInShareUrl(data: ShareData): string {
    const params = new URLSearchParams();
    params.append('mini', 'true');
    params.append('url', data.url);
    params.append('title', data.title);
    params.append('summary', data.description);
    
    return `https://www.linkedin.com/shareArticle?${params.toString()}`;
  }

  public static getEmailShareUrl(data: ShareData): string {
    const subject = encodeURIComponent(`Check out: ${data.title}`);
    const body = encodeURIComponent(
      `I thought you might find this interesting:\n\n${data.title}\n\n${data.description}\n\nRead more: ${data.url}\n\nShared from Revo Utilities`
    );
    
    return `mailto:?subject=${subject}&body=${body}`;
  }

  public static async copyToClipboard(data: ShareData): Promise<boolean> {
    const shareText = `${data.title}\n\n${data.description}\n\n${data.url}`;
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        return true;
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        return success;
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }

  public static async nativeShare(data: ShareData): Promise<boolean> {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: data.title,
          text: data.description,
          url: data.url,
        });
        return true;
      } catch (error) {
        // User cancelled or error occurred
        console.error('Native share failed:', error);
        return false;
      }
    }
    return false;
  }
}

// Helper function for blog posts
export const createBlogShareData = (post: {
  title: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}): ShareData => ({
  title: post.title,
  description: post.excerpt,
  url: `${window.location.origin}/blog/${post.slug}`,
  hashtags: post.tags ? [...post.tags, 'RevoUtilities', 'EnergyTips'] : ['RevoUtilities', 'EnergyTips']
});