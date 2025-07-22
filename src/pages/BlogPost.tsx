import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Facebook, Linkedin, ArrowRight, Mail, Copy, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPostBySlug, fetchBlogPosts } from '../utils';
import { logger } from '../utils/logger';
import { updateBlogPostMeta, metaTagsManager } from '../utils/metaTags';
import { SocialShareManager, createBlogShareData } from '../utils/socialShare';
import { StructuredDataManager } from '../utils/structuredData';
import { useQuery } from '@tanstack/react-query';

// Custom X (formerly Twitter) icon since Lucide doesn't have an X icon
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor" />
  </svg>
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [shareOpen, setShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Fetch the single post
  const {
    data: post,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPostBySlug(slug!),
    enabled: !!slug,
  });

  // Fetch all posts for prev/next navigation
  const { data: allPosts = [], isLoading: isAllPostsLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  // Find prev/next posts from cached list
  let prevPost: { slug: string; title: string } | null = null;
  let nextPost: { slug: string; title: string } | null = null;
  if (post && allPosts.length > 0) {
    const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
    if (currentIndex !== -1) {
      if (currentIndex > 0) {
        prevPost = { slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title };
      }
      if (currentIndex < allPosts.length - 1) {
        nextPost = { slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title };
      }
    }
  }

  // Meta/structured data logic
  useEffect(() => {
    if (post) {
      updateBlogPostMeta(post);
      StructuredDataManager.addBlogPostStructuredData({
        title: post.title,
        description: post.excerpt,
        author: post.author,
        date: post.date,
        imageUrl: post.imageUrl,
        url: `${window.location.origin}/blog/${post.slug}`,
        tags: post.tags,
      });
    }
    return () => {
      metaTagsManager.resetToDefault();
      StructuredDataManager.cleanup();
    };
  }, [post]);

  const toggleShare = () => {
    setShareOpen(!shareOpen);
  };

  const handleCopyLink = async () => {
    if (!post) return;

    const shareData = createBlogShareData(post);
    const success = await SocialShareManager.copyToClipboard(shareData);

    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (!post) return;

    const shareData = createBlogShareData(post);
    const success = await SocialShareManager.nativeShare(shareData);

    if (success) {
      setShareOpen(false);
    }
  };

  if (isPostLoading || isAllPostsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-[var(--primary-color)]">Loading...</div>
      </div>
    );
  }

  if (postError || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Failed to load blog post.</div>
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
              icon={<ArrowLeft size={16} className="text-white group-hover:text-gray-200" />}
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
                  <div className="absolute right-0 top-10 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200 text-gray-700">
                    {/* Native share (mobile) */}
                    {typeof navigator !== 'undefined' && 'share' in navigator && (
                      <button
                        onClick={handleNativeShare}
                        className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                      >
                        <Share2 size={16} className="mr-2" /> Share
                      </button>
                    )}

                    {/* Social platforms */}
                    <a
                      href={SocialShareManager.getTwitterShareUrl(createBlogShareData(post))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      <XIcon /> <span className="ml-2">X (Twitter)</span>
                    </a>
                    <a
                      href={SocialShareManager.getFacebookShareUrl(createBlogShareData(post))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      <Facebook size={16} className="mr-2" /> Facebook
                    </a>
                    <a
                      href={SocialShareManager.getLinkedInShareUrl(createBlogShareData(post))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      <Linkedin size={16} className="mr-2" /> LinkedIn
                    </a>

                    {/* Email share */}
                    <a
                      href={SocialShareManager.getEmailShareUrl(createBlogShareData(post))}
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      <Mail size={16} className="mr-2" /> Email
                    </a>

                    {/* Copy link */}
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      {copySuccess ? (
                        <>
                          <Check size={16} className="mr-2 text-green-600" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2" /> Copy Link
                        </>
                      )}
                    </button>
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

          <style dangerouslySetInnerHTML={{
            __html: `
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
                href={SocialShareManager.getTwitterShareUrl(createBlogShareData(post))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Share on X"
              >
                <XIcon />
                <span className="sr-only">X</span>
              </a>
              <a
                href={SocialShareManager.getFacebookShareUrl(createBlogShareData(post))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={SocialShareManager.getLinkedInShareUrl(createBlogShareData(post))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={SocialShareManager.getEmailShareUrl(createBlogShareData(post))}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Share via Email"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </article>

        {/* Previous/Next Post Navigation */}
        {(prevPost || nextPost) && (
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