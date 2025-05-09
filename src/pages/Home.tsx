import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Droplet, Laptop, Mail, Users, Zap, Check, Clock, ArrowRight, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { isSafari, getAnimationConfig } from '../utils/browserDetection';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ResponsiveImage from '../components/ResponsiveImage';
import type { BlogPost } from '../utils';
import { fetchBlogPosts } from '../utils';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [shareOpen, setShareOpen] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const animConfig = getAnimationConfig();

  useEffect(() => {
    // Fetch blog posts when component mounts
    const loadBlogPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
    
    // Detect Safari browser
    setIsSafariBrowser(isSafari());
  }, []);

  // Function to toggle share menu for blog posts
  const toggleShare = (id: string) => {
    if (shareOpen === id) {
      setShareOpen(null);
    } else {
      setShareOpen(id);
    }
  };

  // Function to get share URL for a blog post
  const getShareUrl = (slug: string) => {
    return `${window.location.origin}/blog/${slug}`;
  };

  // Animation variants - optimised for Safari and reduced motion preferences
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: animConfig.staggerChildrenDelay
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6 * animConfig.durationMultiplier,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage 
            src="https://www.goodfreephotos.com/albums/other-landscapes/agriculture-landscape-under-clouds-and-sky.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            sizes="100vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {/* Only render blur effects if not in Safari or when animation effects are enabled */}
          {(animConfig.enableParallaxEffects && !prefersReducedMotion) && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 * animConfig.durationMultiplier }}
                className={`absolute top-20 right-[-10%] w-1/3 h-1/3 bg-[var(--primary-color)]/10 rounded-full ${isSafariBrowser ? 'blur-[30px]' : 'blur-[100px]'} transform -rotate-12 ${prefersReducedMotion ? '' : 'animate-[pulse_10s_ease-in-out_infinite]'}`}
                style={{ willChange: 'transform, opacity' }}
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 * animConfig.durationMultiplier, delay: 0.3 }}
                className={`absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-[var(--primary-color)]/5 rounded-full ${isSafariBrowser ? 'blur-[36px]' : 'blur-[120px]'} transform rotate-12 ${prefersReducedMotion ? '' : 'animate-[pulse_15s_ease-in-out_infinite]'}`}
                style={{ willChange: 'transform, opacity' }}
              ></motion.div>
            </>
          )}
        </div>
        <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="w-full md:w-4/5 lg:w-3/4 mb-8 md:mb-0"
              initial="hidden"
              animate="show"
              variants={staggerContainer}>
              <motion.h1 
                variants={fadeInUp} 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="relative z-10 px-2 text-black inline-block">
                  <motion.span 
                    className="absolute inset-0 bg-[var(--primary-color)] rounded-lg transform -rotate-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 * animConfig.durationMultiplier }}
                    style={{ willChange: 'transform, opacity' }}
                  ></motion.span>
                  <span className="relative">Paying too much</span>
                </span> <span className="text-white">for your</span> 
                <div className="inline-block">
                  <span className="text-white">energy, water</span>
                </div> <span className="text-white">and telecoms?</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8 max-w-2xl">
                <span className="backdrop-blur-sm glass-dark inline-block px-6 py-4 rounded-xl">
                  Save money on your water and energy bills in the UK with
                  <span className="font-semibold text-[var(--primary-color)]"> Revo Utilities</span>
                </span>
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6">
                <Button to="/contact" variant="primary" size="lg" icon={<ChevronRight size={20} />} className="w-full sm:w-auto mb-3 sm:mb-0 min-h-[48px] sm:min-h-[44px]">
                  Start saving today
                </Button>
                <Button to="/services" variant="glass" size="lg" className="w-full sm:w-auto min-h-[48px] sm:min-h-[44px]">
                  Explore our services
                </Button>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="mt-12 glass inline-block px-6 py-3 rounded-full bg-white/10">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-[var(--primary-color)] rounded-full pulse"></div>
                  <span className="text-white/80 text-sm">Trusted by 500+ UK businesses</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 * animConfig.durationMultiplier }}
              viewport={{ once: true, margin: isSafariBrowser ? '-10% 0px -10% 0px' : '0px' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Energy comparison in the UK</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 * animConfig.durationMultiplier, delay: 0.3 }}
                viewport={{ once: true, margin: isSafariBrowser ? '-10% 0px -10% 0px' : '0px' }}
                className="h-0.5 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--hover-color)] mb-6 rounded-full"></motion.div>
              <p className="text-gray-700 mb-6">
                Revo Utilities specialises in finding the most competitive rates in commercial gas, electricity, water and telecoms so you can focus on what matters most - your business. We are proud partners of some of the UK's leading energy suppliers meaning that you can rest assured that you'll receive a personalised, cost-effective deal that suits your needs specifically.
              </p>
              <p className="text-gray-700 mb-6">
                We know that every business is different. That's why our services are tailored to meet your specific business requirements and budget by understanding how your business works and building a relationship to meet your needs!
              </p>
              <p className="text-gray-700">
                If you're interested and want to find out more, we're always happy to help. Our team of experts offers reliable customer service, straightforward billing and significant savings on your business utilities.
              </p>
            </motion.div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 * animConfig.durationMultiplier, delay: 0.1 }}
                  viewport={{ once: true, margin: isSafariBrowser ? '-10% 0px -10% 0px' : '0px' }}>
                  <ServiceCard
                    title="Gas & Electricity"
                    description="Find competitive rates on business gas and electricity supplies"
                    icon={<Zap size={28} />}
                    link="/services"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 * animConfig.durationMultiplier, delay: 0.2 }}
                  viewport={{ once: true, margin: isSafariBrowser ? '-10% 0px -10% 0px' : '0px' }}>
                  <ServiceCard
                    title="Water"
                    description="optimise your water usage and costs with our smart solutions"
                    icon={<Droplet size={28} />}
                    link="/services"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}>
                  <ServiceCard
                    title="Telecoms"
                    description="Get reliable telecoms services at competitive rates for your business"
                    icon={<Laptop size={28} />}
                    link="/services"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}>
                  <ServiceCard
                    title="Contact Us"
                    description="Get in touch with our team for personalised assistance"
                    icon={<Mail size={28} />}
                    link="/contact"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-100 relative">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
              How It Works <span className="relative">
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[var(--primary-color)]/20 transform -skew-x-12"></span>
                <span className="relative">in three easy steps</span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              We've made saving on your utilities simple
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="glass-card p-5 sm:p-8 group hover:scale-105 transition-all duration-500 ease-out">
              <div className="h-16 w-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-6 shadow-lg group-hover:rotate-6 transition-all duration-500">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[var(--primary-color)] transition-colors duration-300">Fill in our quote form</h3>
              <div className="w-12 h-0.5 bg-[var(--primary-color)]/60 rounded mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-600">Tell us about your business and its utility requirements.</p>
            </div>
            
            <div className="glass-card p-5 sm:p-8 group hover:scale-105 transition-all duration-500 ease-out">
              <div className="h-16 w-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-6 shadow-lg group-hover:rotate-6 transition-all duration-500">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[var(--primary-color)] transition-colors duration-300">Get a personalised comparison quote</h3>
              <div className="w-12 h-0.5 bg-[var(--primary-color)]/60 rounded mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-600">We'll find the most competitive rates from our trusted suppliers.</p>
            </div>
            
            <div className="glass-card p-5 sm:p-8 group hover:scale-105 transition-all duration-500 ease-out">
              <div className="h-16 w-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-6 shadow-lg group-hover:rotate-6 transition-all duration-500">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[var(--primary-color)] transition-colors duration-300">Swap providers or stay with your current providers</h3>
              <div className="w-12 h-0.5 bg-[var(--primary-color)]/60 rounded mb-4 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-gray-600">We'll handle the transition seamlessly if you decide to switch.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button to="/contact" variant="primary" size="lg" icon={<ChevronRight size={20} />}>
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[var(--secondary-color)] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute right-0 top-1/4 w-56 h-56 bg-[var(--primary-color)]/5 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-[var(--primary-color)]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose <span className="text-[var(--primary-color)]">Revo Utilities</span>?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="glass-dark p-5 sm:p-8 rounded-xl backdrop-blur-lg group hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--primary-color)] text-black shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                    <p className="text-gray-300">Access to the UK's leading energy providers ensures you get the most competitive rates.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-dark p-5 sm:p-8 rounded-xl backdrop-blur-lg group hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--primary-color)] text-black shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">10+ Years Experience</h3>
                    <p className="text-gray-300">Part of the Revo family with over a decade of experience serving customers.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-dark p-5 sm:p-8 rounded-xl backdrop-blur-lg group hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--primary-color)] text-black shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-300">Custom solutions designed specifically for your business needs and consumption patterns.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-dark p-5 sm:p-8 rounded-xl backdrop-blur-lg group hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--primary-color)] text-black shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                    <p className="text-gray-300">Free account management throughout your contract with personalised attention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg" 
                icon={<ChevronRight size={20} />}
                className="group"
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-56 h-56 bg-[var(--primary-color)]/5 rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-[var(--primary-color)]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              <span className="relative inline-block">
                Our Latest Insights
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-transparent rounded-full"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl">
              Stay updated with the latest news, tips, and insights on energy efficiency and utility management for your business
            </motion.p>
          </div>

          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center h-64"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
            </motion.div>
          ) : blogPosts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <p className="text-lg text-gray-500">No blog posts available at the moment.</p>
              <Button to="/blog" variant="outline" size="md" className="mt-4">
                Check our blog page
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      </div>
                    )}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
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
                      <h3 className="text-xl font-bold mt-1 mb-3 leading-tight">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap">
                          {post.tags.slice(0, 2).map(tag => (
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
                              variant="outline" 
                              size="sm" 
                              icon={<ArrowRight size={16} />}
                              className="mt-1 w-full sm:w-auto min-h-[48px] sm:min-h-[44px] flex items-center justify-center sm:justify-start hover:shadow-sm"
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
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button 
              to="/blog" 
              variant="primary"
              size="lg"
              className="group"
            >
              View All Articles
              <motion.div
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Comparison CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">Ready to compare your utilities?</h2>
              <p className="text-black/80">We're here to help you save money and time.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <Button 
                to="/contact" 
                variant="glass" 
                size="lg" 
                className="mt-6 md:mt-0 min-h-[48px] sm:min-h-[44px] w-full sm:w-auto"
                icon={<Users size={20} />}
              >
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
