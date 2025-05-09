import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Twitter, Facebook, Linkedin, Bookmark, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPosts } from '../utils';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState<string | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Set page as loaded for animations
    setTimeout(() => setIsPageLoaded(true), 100);

    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const toggleShare = (postId: string) => {
    setShareOpen(shareOpen === postId ? null : postId);
  };

  const getShareUrl = (slug: string) => {
    return `${window.location.origin}/blog/${slug}`;
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section - Styled like Contact.tsx */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-gradient pt-20 pb-16 sm:pt-24 sm:pb-18 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[-10%] w-1/3 h-1/3 bg-[var(--primary-color)]/20 rounded-full blur-[100px] transform -rotate-12 animate-[pulse_10s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-[var(--primary-color)]/15 rounded-full blur-[120px] transform rotate-12 animate-[pulse_15s_ease-in-out_infinite]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 gradient-text leading-loose pb-2 text-white tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">Revo Utilities Blog</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4 py-3 backdrop-blur-md glass-dark rounded-xl shadow-lg"
            >
              Insights, tips, and news about energy efficiency, utility savings, and sustainable practices for your business.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
          </motion.div>
        ) : posts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center h-64 text-center"
          >
            <p className="text-xl text-gray-600 mb-4">No blog posts available yet.</p>
            <p className="text-gray-500">Check back soon for new content!</p>
          </motion.div>
        ) : (
          <>
            {/* Featured Post Section */}
            {featuredPost && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-12 md:mb-16"
              >
                <motion.div 
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200/40"
                >
                  <div className="md:flex">
                    {featuredPost.imageUrl && (
                      <motion.div 
                        className="md:w-1/2 relative h-64 md:h-auto overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <img 
                          src={featuredPost.imageUrl} 
                          alt={featuredPost.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                          loading="lazy"
                          width="600"
                          height="400"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 md:opacity-0 md:hover:opacity-70 transition-opacity duration-300"></div>
                      </motion.div>
                    )}
                    <div className={`p-6 sm:p-8 md:p-10 flex flex-col ${featuredPost.imageUrl ? 'md:w-1/2' : 'w-full'}`}>
                      <div className="flex items-center mb-4">
                        {featuredPost.author.avatarUrl && (
                          <motion.img 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            src={featuredPost.author.avatarUrl} 
                            alt={featuredPost.author.name} 
                            className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-md"
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
                            <motion.span 
                              key={tag}
                              whileHover={{ y: -2, backgroundColor: 'var(--primary-color)', color: 'white' }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                              className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 border border-[var(--primary-color)]/20 shadow-sm"
                            >
                              #{tag}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link 
                            to={`/blog/${featuredPost.slug}`}
                            className="block"
                            aria-label={`Read more about ${featuredPost.title}`}
                          >
                            <Button 
                              variant="primary" 
                              size="md" 
                              icon={<ArrowRight size={18} />}
                              className="min-h-[48px] flex items-center justify-center shadow-md hover:shadow-lg"
                            >
                              Read Full Article
                            </Button>
                          </Link>
                        </motion.div>
                        <div className="relative">
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            onClick={() => toggleShare(featuredPost.id)}
                            className="p-2.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] shadow-sm hover:shadow"
                            aria-label="Share this post"
                            aria-expanded={shareOpen === featuredPost.id}
                          >
                            <Share2 size={18} className="text-gray-700" />
                          </motion.button>
                          <AnimatePresence>
                            {shareOpen === featuredPost.id && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 bottom-12 w-48 bg-white rounded-md shadow-xl py-1 z-20 border border-gray-200"
                              >
                                <motion.a 
                                  whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl(featuredPost.slug))}&text=${encodeURIComponent(featuredPost.title)}`}
                                  target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                >
                                  <Twitter size={16} className="mr-2 text-[#1DA1F2]" /> Twitter
                                </motion.a>
                                <motion.a 
                                  whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(featuredPost.slug))}`}
                                  target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                >
                                  <Facebook size={16} className="mr-2 text-[#4267B2]" /> Facebook
                                </motion.a>
                                <motion.a 
                                  whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl(featuredPost.slug))}&title=${encodeURIComponent(featuredPost.title)}`}
                                  target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                >
                                  <Linkedin size={16} className="mr-2 text-[#0077B5]" /> LinkedIn
                                </motion.a>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-gray-200/60"
              >
                <h3 className="text-2xl font-semibold mb-6 md:mb-8 text-gray-700 relative inline-block">
                  <span className="relative inline-block">
                    More Articles
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-transparent rounded-full"></span>
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {otherPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="h-full"
                    >
                      <motion.div 
                        whileHover={{ 
                          y: -5,
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200/40 transition-all duration-300 flex flex-col h-full"
                      >
                        {post.imageUrl && (
                          <div className="relative w-full h-48 overflow-hidden">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              loading="lazy"
                              width="400"
                              height="240"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <motion.div 
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm"
                            >
                              <Bookmark size={14} className="text-[var(--primary-color)]" />
                            </motion.div>
                          </div>
                        )}
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-3">
                            {post.author.avatarUrl && (
                              <img 
                                src={post.author.avatarUrl} 
                                alt={post.author.name} 
                                className="w-8 h-8 rounded-full mr-2 border border-white shadow-sm"
                              />
                            )}
                            <div>
                              <div className="text-xs text-[var(--primary-color)] font-medium flex items-center">
                                <Clock size={12} className="mr-1" />
                                {new Date(post.date).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric'
                                })}
                              </div>
                              <div className="text-sm text-gray-600">by {post.author.name}</div>
                            </div>
                          </div>
                          <h2 className="text-xl font-bold mt-1 mb-3 leading-tight">{post.title}</h2>
                          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>
                          
                          {post.tags && post.tags.length > 0 && (
                            <div className="mb-4 flex flex-wrap">
                              {post.tags.map(tag => (
                                <motion.span 
                                  key={tag}
                                  whileHover={{ y: -2, backgroundColor: 'var(--primary-color)', color: 'white' }}
                                  className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 transition-colors duration-200 border border-gray-200/80"
                                >
                                  #{tag}
                                </motion.span>
                              ))}
                            </div>
                          )}

                          <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="block"
                                aria-label={`Read more about ${post.title}`}
                              >
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  icon={<ArrowRight size={16} />}
                                  className="mt-1 w-full sm:w-auto min-h-[44px] flex items-center justify-center sm:justify-start hover:shadow-sm"
                                >
                                  Read More
                                </Button>
                              </Link>
                            </motion.div>
                            <div className="relative">
                              <motion.button 
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                onClick={() => toggleShare(post.id)}
                                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                                aria-label="Share this post"
                                aria-expanded={shareOpen === post.id}
                              >
                                <Share2 size={16} className="text-gray-600" />
                              </motion.button>
                              <AnimatePresence>
                                {shareOpen === post.id && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 bottom-10 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
                                  >
                                    <motion.a 
                                      whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl(post.slug))}&text=${encodeURIComponent(post.title)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                    >
                                      <Twitter size={16} className="mr-2 text-[#1DA1F2]" /> Twitter
                                    </motion.a>
                                    <motion.a 
                                      whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(post.slug))}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                    >
                                      <Facebook size={16} className="mr-2 text-[#4267B2]" /> Facebook
                                    </motion.a>
                                    <motion.a 
                                      whileHover={{ backgroundColor: "#f3f4f6", x: 3 }}
                                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl(post.slug))}&title=${encodeURIComponent(post.title)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center px-3 py-2 text-sm text-gray-700 w-full text-left"
                                    >
                                      <Linkedin size={16} className="mr-2 text-[#0077B5]" /> LinkedIn
                                    </motion.a>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
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