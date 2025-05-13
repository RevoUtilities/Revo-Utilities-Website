import { useState, useEffect, memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Twitter, Facebook, Linkedin, Bookmark, Clock } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '../components/ui/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPosts } from '../utils';
import { detectHighCPUUsage } from '../utils/disableHoverAnimations';

// Import optimization stylesheet
import '../styles/blogOptimizations.css';

// Memoized ShareMenu component to prevent unnecessary re-renders
const ShareMenu = memo(({ isOpen, onClose, slug }: { 
  isOpen: boolean, 
  onClose: () => void, 
  slug: string 
}) => {
  const getShareUrl = (slug: string) => {
    return `${window.location.origin}/blog/${slug}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 bottom-12 w-48 bg-white rounded-md shadow-xl py-1 z-20 border border-gray-200"
        >
          <a 
            className="hover:bg-gray-100 hover:translate-x-1 transition-all flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl(slug))}&text=${encodeURIComponent('Check out this article')}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Twitter size={16} className="mr-2 text-[#1DA1F2]" /> Twitter
          </a>
          <a 
            className="hover:bg-gray-100 hover:translate-x-1 transition-all flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(slug))}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Facebook size={16} className="mr-2 text-[#4267B2]" /> Facebook
          </a>
          <a 
            className="hover:bg-gray-100 hover:translate-x-1 transition-all flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl(slug))}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin size={16} className="mr-2 text-[#0077B5]" /> LinkedIn
          </a>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 hover:translate-x-1 transition-all flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
          >
            <Bookmark size={16} className="mr-2 text-gray-500" /> Save for later
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

// Memoized PostCard component to prevent unnecessary re-renders
const PostCard = memo(({ post }: { post: BlogPost }) => {
  const [shareOpen, setShareOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full">
      {post.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="240"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-200"></div>
        </div>
      )}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          {post.author.avatarUrl && (
            <img 
              src={post.author.avatarUrl} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2 border-2 border-white shadow-sm"
              loading="lazy"
              width="32"
              height="32"
            />
          )}
          <div className="text-xs text-gray-600 font-medium">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
            <span className="mx-1">•</span>
            {post.author.name}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 leading-tight line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap">
            {post.tags.slice(0, 2).map(tag => (
              <span 
                key={tag}
                className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full px-2 py-0.5 text-xs font-medium mr-1.5 mb-1.5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <div>
            <Link 
              to={`/blog/${post.slug}`}
              className="block"
              aria-label={`Read more about ${post.title}`}
            >
              <Button 
                variant="link" 
                size="sm" 
                icon={<ArrowRight size={14} />}
              >
                Read more
              </Button>
            </Link>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShareOpen(!shareOpen)}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              aria-label="Share this post"
              aria-expanded={shareOpen}
            >
              <Share2 size={16} className="text-gray-600" />
            </button>
            <ShareMenu
              isOpen={shareOpen}
              onClose={() => setShareOpen(false)}
              slug={post.slug}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState<string | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isHighCPU, setIsHighCPU] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const blogContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Performance monitoring - uses a very lightweight approach to prevent causing spikes itself
    let frameCount = 0;
    let lastTime = performance.now();
    let consecutiveSlowFrames = 0;
    let rafId = 0;
    
    const checkPerformance = () => {
      const now = performance.now();
      frameCount++;
      
      if (now - lastTime >= 1000) { // Check every second
        const fps = frameCount * 1000 / (now - lastTime);
        
        // If FPS is below threshold, mark as high CPU usage
        if (fps < 30) {
          consecutiveSlowFrames++;
          if (consecutiveSlowFrames >= 2 && !isHighCPU) {
            setIsHighCPU(true);
            document.body.classList.add('high-cpu-mode');
            // Cancel animations and reduce visual effects
            if (blogContainerRef.current) {
              blogContainerRef.current.classList.add('high-cpu-mode');
            }
            // Disable framer-motion animations
            document.querySelectorAll('.blog-animation').forEach(el => {
              el.classList.remove('blog-animation');
              el.classList.add('no-animation');
            });
          }
        } else {
          consecutiveSlowFrames = 0;
        }
        
        frameCount = 0;
        lastTime = now;
      }
      
      rafId = requestAnimationFrame(checkPerformance);
    };
    
    // Start performance monitoring - only if not in reduced motion mode
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(checkPerformance);
    } else {
      // If user prefers reduced motion, directly apply high-CPU optimizations
      setIsHighCPU(true);
      document.body.classList.add('high-cpu-mode');
    }

    // Initialize original CPU usage detection as fallback
    detectHighCPUUsage();
    
    // Add CSS to optimize when high CPU is detected
    const style = document.createElement('style');
    style.textContent = `
      .high-cpu-detected .blog-animation {
        animation: none !important;
        transform: none !important;
        transition: none !important;
        opacity: 1 !important;
      }
      
      .high-cpu-detected img {
        transform: none !important;
        transition: none !important;
      }
      
      .high-cpu-detected .transition-all,
      .high-cpu-detected .transition-transform,
      .high-cpu-detected .transition-opacity {
        transition: none !important;
      }
      
      .high-cpu-detected svg,
      .high-cpu-detected .animate-spin,
      .high-cpu-detected .animate-pulse {
        animation: none !important;
      }
      
      .high-cpu-detected .hero-gradient {
        background: linear-gradient(to bottom, var(--primary-dark), var(--primary-color)) !important;
      }
      
      @media (prefers-reduced-motion: reduce) {
        *, ::before, ::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Load posts with proper error handling
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
        // Short delay before animations to ensure smooth loading
        setTimeout(() => setIsPageLoaded(true), 50);
      }
    };

    loadPosts();

    return () => {
      // Clean up style element when component unmounts
      document.head.removeChild(style);
      
      // Clean up performance monitoring
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Remove classes added to DOM
      document.body.classList.remove('high-cpu-mode');
    };
  }, []);

  const toggleShare = (postId: string) => {
    // Debounced share toggle to prevent excessive re-renders
    if (shareOpen === postId) {
      setShareOpen(null);
    } else {
      setShareOpen(postId);
    }
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.length > 0 ? posts.slice(1) : [];

  // Calculate appropriate animation settings based on performance
  const getAnimationSettings = () => {
    // Disable animations if reduced motion is preferred or we're in high CPU mode
    if (prefersReducedMotion || isHighCPU) {
      return {
        initial: {}, 
        animate: {},
        transition: { duration: 0 }
      };
    }
    
    // Normal animation settings
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 }
    };
  };
  
  return (
    <div 
      ref={blogContainerRef}
      className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 blog-page ${isHighCPU ? 'high-cpu-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        className="hero-gradient pt-20 pb-16 sm:pt-24 sm:pb-18 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Static background blobs instead of animated ones */}
          <div className="absolute top-20 right-[-10%] w-1/3 h-1/3 bg-[var(--primary-color)]/20 rounded-full blur-[50px] transform -rotate-12"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-[var(--primary-color)]/15 rounded-full blur-[60px] transform rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            {...getAnimationSettings()}
            animate={isPageLoaded ? getAnimationSettings().animate : {}}
            className="text-center blog-animation hw-accelerated"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 gradient-text leading-loose pb-2 text-white tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">Revo Utilities Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4 py-3 backdrop-blur-md glass-dark rounded-xl shadow-lg">
              Insights, tips, and news about energy efficiency, utility savings, and sustainable practices for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <svg className="w-10 h-10 text-[var(--primary-color)]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 12 12"
                  to="360 12 12"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-64 text-center">
            <p className="text-xl text-gray-600 mb-4">No blog posts available yet.</p>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            {/* Featured Post Section */}
            {featuredPost && (
              <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-12 md:mb-16 blog-animation"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200/40">
                  <div className="md:flex">
                    {featuredPost.imageUrl && (
                      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img 
                          src={featuredPost.imageUrl} 
                          alt={featuredPost.title} 
                          className="w-full h-full object-cover"
                          loading="eager"
                          width="600"
                          height="400"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className={`p-6 sm:p-8 md:p-10 flex flex-col ${featuredPost.imageUrl ? 'md:w-1/2' : 'w-full'}`}>
                      <div className="flex items-center mb-4">
                        {featuredPost.author.avatarUrl && (
                          <img 
                            src={featuredPost.author.avatarUrl} 
                            alt={featuredPost.author.name} 
                            className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-md"
                            loading="eager"
                            width="40"
                            height="40"
                          />
                        )}
                        <div>
                          <div className="flex items-center text-sm text-[var(--primary-color)] font-semibold">
                            <Clock size={14} className="mr-1" />
                            {new Date(featuredPost.date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="text-base text-gray-700 font-medium">by {featuredPost.author.name}</div>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-gray-800 leading-tight tracking-tight">{featuredPost.title}</h2>
                      <p className="text-gray-600 mb-6 line-clamp-4 md:line-clamp-5 flex-grow text-base md:text-lg leading-relaxed">{featuredPost.excerpt}</p>
                      
                      {featuredPost.tags && featuredPost.tags.length > 0 && (
                        <div className="mb-5 flex flex-wrap">
                          {featuredPost.tags.map(tag => (
                            <span 
                              key={tag}
                              className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 border border-[var(--primary-color)]/20 shadow-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="block"
                          aria-label={`Read more about ${featuredPost.title}`}
                        >
                          <Button 
                            variant="primary" 
                            size="md" 
                            icon={<ArrowRight size={18} />}
                            className="min-h-[48px] flex items-center justify-center shadow-md"
                          >
                            Read Full Article
                          </Button>
                        </Link>
                        <div className="relative">
                          <button 
                            onClick={() => toggleShare(featuredPost.id)}
                            className="p-2.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                            aria-label="Share this post"
                            aria-expanded={shareOpen === featuredPost.id}
                          >
                            <Share2 size={18} className="text-gray-700" />
                          </button>
                          <ShareMenu
                            isOpen={shareOpen === featuredPost.id}
                            onClose={() => setShareOpen(null)}
                            slug={featuredPost.slug}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-200/60 blog-animation"
              >
                <h3 className="text-2xl font-semibold mb-6 md:mb-8 text-gray-700 relative inline-block">
                  <span className="relative inline-block">
                    More Articles
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-transparent rounded-full"></span>
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {otherPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
