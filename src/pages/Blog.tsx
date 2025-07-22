import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchBlogPosts, type BlogPost as ServiceBlogPost } from '../utils/blogService';
import { metaTagsManager } from '../utils/metaTags';
import { StructuredDataManager } from '../utils/structuredData';
import { useQuery } from '@tanstack/react-query';

// Consolidated BlogPost type for the application
interface AppBlogPost extends ServiceBlogPost {
  readTime: string;
  category: string;
  featured?: boolean;
  author: { // Override ServiceBlogPost['author'] to add role and make avatarUrl required
    name: string;
    avatarUrl: string; // Required in the app
    role: string;
  };
  // Ensure imageUrl is always present for AppBlogPost, overriding optional from ServiceBlogPost
  imageUrl: string;
}


// Loading skeleton component
const BlogPostSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div className="h-3 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

// Blog post card component for grid view
const BlogPostCard = ({ post }: { post: AppBlogPost }) => (
  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </Link>
    
    <div className="p-6 flex flex-col flex-grow">
      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3 self-start">
        {post.category}
      </span>
      
      <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
        <Link to={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center">
          {post.author.avatarUrl ? (
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2 object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
              <User size={16} className="text-gray-500" />
            </div>
          )}
          <span className="text-sm text-gray-700">{post.author.name}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          {post.readTime}
        </div>
      </div>
      
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </article>
);

// Featured blog post component
const FeaturedPost = ({ post }: { post: AppBlogPost }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
    <div className="md:flex">
      <div className="md:w-1/2">
        <Link to={`/blog/${post.slug}`} className="block h-full">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover min-h-80"
            loading="eager"
          />
        </Link>
      </div>
      
      <div className="p-8 md:w-1/2 flex flex-col">
        <div className="flex items-center mb-4">
          {post.author.avatarUrl && (
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-3 object-cover"
              loading="eager"
            />
          )}
          <div>
            <div className="flex items-center gap-2 text-[#c5d200] font-medium">
              <Clock size={14} className="mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="text-sm text-gray-600">by {post.author.name}</div>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          <Link to={`/blog/${post.slug}`} className="text-[#c5d200] hover:text-[#a6b100] transition-colors duration-200">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          {post.excerpt}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f7f7f7] text-[#c5d200]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link 
            to={`/blog/${post.slug}`}
            className="group inline-flex items-center gap-2 text-[#c5d200] hover:text-[#a6b100] transition-colors duration-200"
          >
            Read full article
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// Helper function to calculate read time
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const textLength = content.split(/\s+/).length;
  return Math.ceil(textLength / wordsPerMinute);
};

// Main Blog component
export default function Blog() {
  const { data: servicePosts = [], isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  // Transform posts as before
  const posts: AppBlogPost[] = servicePosts.map((post, index) => {
    const appAuthor = {
      name: post.author?.name || 'REVO Utilities Team',
      avatarUrl: post.author?.avatarUrl || 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
      role: (post.author as ServiceBlogPost['author'] & { role?: string })?.role || 'Energy Expert',
    };
    return {
      ...post,
      readTime: `${calculateReadTime(post.content)} min read`,
      category: (post.tags?.[0]?.charAt(0)?.toUpperCase() || '') + (post.tags?.[0]?.slice(1) || 'General'),
      featured: index === 0,
      author: appAuthor,
      tags: post.tags || [],
      imageUrl: post.imageUrl || 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80',
    };
  });

  // Update meta tags for blog listing page
  useEffect(() => {
    metaTagsManager.updateMetaTags({
      title: 'Revo Utilities Blog | Energy Tips & Industry Insights',
      description: 'Stay updated with the latest energy industry news, cost-saving tips, and sustainability insights from Revo Utilities. Expert advice for UK businesses.',
      url: `${window.location.origin}/blog`,
      type: 'website'
    });

    // Add structured data for blog listing
    StructuredDataManager.addBlogListingStructuredData();
  }, []);
  
  // Cleanup meta tags and structured data when component unmounts
  useEffect(() => {
    return () => {
      metaTagsManager.resetToDefault();
      StructuredDataManager.cleanup();
    };
  }, []);
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-lg text-gray-600 mb-6">{error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const featuredPost = posts[0]; // First post is always featured
  const otherPosts = posts.slice(1); // All other posts

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Revo Utilities Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Your trusted source for energy-saving strategies, sustainability trends, and utility management tips.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500">
            Discover actionable advice and the latest updates from the Revo Utilities team.
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(4)].map((_, i) => (
              <BlogPostSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                  Featured Article
                </h2>
                <FeaturedPost post={featuredPost} />
              </motion.div>
            )}

            {otherPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                  Latest Articles
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {otherPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}

        {!isLoading && posts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No blog posts found</h3>
            <p className="mt-1 text-gray-500">Check back later for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
