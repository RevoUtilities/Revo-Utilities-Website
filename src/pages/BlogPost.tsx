import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPostBySlug, fetchBlogPosts } from '../utils';

// Custom X (formerly Twitter) icon since Lucide doesn't have an X icon
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
    fill="currentColor" />
  </svg>
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const [prevPost, setPrevPost] = useState<{ slug: string; title: string } | null>(null);
  const [nextPost, setNextPost] = useState<{ slug: string; title: string } | null>(null);

  useEffect(() => {
    const loadPostData = async () => {
      if (!slug) return;
      setLoading(true);
      setPrevPost(null); // Reset on slug change
      setNextPost(null); // Reset on slug change
      try {
        // Fetch current post and all posts in parallel
        const [fetchedPost, allPosts] = await Promise.all([
          fetchBlogPostBySlug(slug),
          fetchBlogPosts()
        ]);

        setPost(fetchedPost);

        if (fetchedPost && allPosts.length > 0) {
          const currentIndex = allPosts.findIndex(p => p.slug === fetchedPost.slug);
          if (currentIndex !== -1) {
            // Set previous post if not the first one
            if (currentIndex > 0) {
              setPrevPost({ slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title });
            }
            // Set next post if not the last one
            if (currentIndex < allPosts.length - 1) {
              setNextPost({ slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title });
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch blog post data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPostData();
  }, [slug]);

  const toggleShare = () => {
    setShareOpen(!shareOpen);
  };

  const getShareUrl = () => {
    return `${window.location.origin}/blog/${slug}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 flex justify-center items-center p-4">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)] mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Post Not Found</h1>
        <p className="mb-6 text-center text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog">
          <Button 
            variant="primary" 
            icon={<ArrowLeft size={16} />}
            className="min-h-[44px] flex items-center justify-center"
          >
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section - Styled like Blog.tsx and Contact.tsx */}
      <section className="hero-gradient pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/blog" className="inline-block mb-6 md:mb-8 group">
            <Button 
              variant="ghost" 
              size="sm" 
              icon={<ArrowLeft size={16} className="text-white group-hover:text-gray-200"/>}
              className="min-h-[44px] flex items-center justify-center text-white hover:text-gray-200 hover:bg-white/10"
            >
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div className="flex items-center mb-3 sm:mb-0">
                {post.author.avatarUrl && (
                  <img 
                    src={post.author.avatarUrl} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full mr-3 border-2 border-white/50"
                  />
                )}
                <div>
                  <span className="text-sm text-gray-300 font-medium">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <div className="text-base text-gray-100">by {post.author.name}</div>
                </div>
              </div>
              <div className="relative">
                <button 
                  onClick={toggleShare}
                  className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Share this post"
                  aria-expanded={shareOpen}
                >
                  <Share2 size={18} className="text-gray-200" />
                </button>
                {shareOpen && (
                  <div className="absolute right-0 top-10 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200 text-gray-700">
                    {/* Share links remain the same, but will now appear on a white dropdown */}
                    <a 
                      href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(getShareUrl())}`} 
                      target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left">
                      <XIcon /> <span className="ml-2">X</span>
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`} 
                      target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left">
                      <Facebook size={16} className="mr-2" /> Facebook
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl())}&title=${encodeURIComponent(post.title)}`} 
                      target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left">
                      <Linkedin size={16} className="mr-2" /> LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight md:leading-tight text-white pb-1">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <article className="max-w-4xl mx-auto bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-xl -mt-24 md:-mt-32 relative z-10">
          {post.imageUrl && (
            <div className="relative w-full mb-6 md:mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
                loading="eager"
                width="800"
                height="400"
              />
            </div>
          )}
          
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <style dangerouslySetInnerHTML={{ __html: `
            .blog-content {
              font-size: 1.125rem;
              line-height: 1.8;
              color: #374151;
            }
            
            .blog-content p {
              margin-bottom: 1.75rem;
            }
            
            .blog-content h2 {
              font-size: 1.875rem;
              font-weight: 700;
              color: #111827;
              margin-top: 2.5rem;
              margin-bottom: 1.25rem;
              line-height: 1.3;
            }
            
            .blog-content h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #111827;
              margin-top: 2rem;
              margin-bottom: 1rem;
              line-height: 1.4;
            }
            
            .blog-content ul {
              margin-top: 0;
              margin-bottom: 1.75rem;
              padding-left: 1.5rem;
            }
            
            .blog-content li {
              margin-bottom: 0.75rem;
              position: relative;
              padding-left: 0.5rem;
            }
            
            .blog-content li::before {
              content: "";
              position: absolute;
              left: -1rem;
              top: 0.75rem;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #4f46e5;
            }
            
            .blog-content a {
              color: var(--primary-color);
              text-decoration: none;
            }
            
            .blog-content a:hover {
              text-decoration: underline;
            }
          `}} />
          
          {/* Blog Post Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm">
            <p className="mb-4">- Written by the team at REVO Utilities</p>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4">
                <span className="mr-2">Tags:</span>
                {post.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
                aria-label="Share on X"
              >
                <XIcon />
                <span className="sr-only">X</span>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </article>

        {/* Previous/Next Post Navigation */}
        { (prevPost || nextPost) && (
          <nav className="max-w-4xl mx-auto mt-10 md:mt-16 pt-8 md:pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="md" 
                  icon={<ArrowLeft size={18} className="mr-2 transition-transform duration-200 ease-in-out group-hover:-translate-x-1" />}
                  className="w-full justify-start text-left min-h-[60px] sm:min-h-[70px] p-3 sm:p-4 focus-ring-primary"
                >
                  <div>
                    <span className="text-xs text-gray-500 block group-hover:text-gray-600 transition-colors">Previous Post</span>
                    <span className="font-medium text-gray-700 group-hover:text-[var(--primary-color)] block truncate max-w-[180px] xs:max-w-[220px] sm:max-w-[200px] md:max-w-[250px] transition-colors">{prevPost.title}</span>
                  </div>
                </Button>
              </Link>
            ) : <div className="w-full sm:w-auto"></div> /* Placeholder to maintain layout */}
            
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="md" 
                  className="w-full justify-end text-right min-h-[60px] sm:min-h-[70px] p-3 sm:p-4 focus-ring-primary"
                >
                  <div className="mr-2">
                    <span className="text-xs text-gray-500 block group-hover:text-gray-600 transition-colors">Next Post</span>
                    <span className="font-medium text-gray-700 group-hover:text-[var(--primary-color)] block truncate max-w-[180px] xs:max-w-[220px] sm:max-w-[200px] md:max-w-[250px] transition-colors">{nextPost.title}</span>
                  </div>
                  <ArrowRight size={18} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : <div className="w-full sm:w-auto"></div> /* Placeholder to maintain layout */}
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;