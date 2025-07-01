import { useEffect, useState } from 'react';
import Button from '../components/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPosts } from '../utils';
import Container from '../components/ui/Container';
import ResponsiveImage from '../components/ResponsiveImage';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts when component mounts
    const loadBlogPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Function to toggle share menu for blog posts

  // Function to get share URL for a blog post

  // Simple animation variants


  const LOGOS = [
    { src: '/logos/British_Gas_logo.svg.png', alt: 'British Gas' },
    { src: '/logos/EDF_Energy_logo.svg.png', alt: 'EDF Energy' },
    { src: '/logos/Logo_E.ON.svg.png', alt: 'E.ON' },
    { src: '/logos/Octopus_Group_Logo.svg.png', alt: 'Octopus' },
    { src: '/logos/Ovo_Energy_logo.svg.png', alt: 'Ovo Energy' },
    { src: '/logos/RWE_npower_logo.png', alt: 'RWE npower' },
    { src: '/logos/ScottishPower_Logo_2023.svg.png', alt: 'Scottish Power' },
    { src: '/logos/SSEenergy.svg.png', alt: 'SSE' },
  ];

  return (
    <div className="bg-[var(--background)] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="py-16 md:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-10">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--accent-color)] mb-6">
              Paying too much for <span className="text-[var(--primary-color)]">utilities?</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-xl">
              Save money on your energy, telecoms, merchant services rates, water and waste with REVO Utilities
            </p>
            <Button to="/services" variant="primary" size="lg" className="mb-4">
              Explore our services
            </Button>
          </div>
          <div className="flex-1 max-w-md w-full">
            <ResponsiveImage
              src="/images/optimized/hero-800w.webp"
              alt="Smiling engineer at solar panel site"
              className="rounded-2xl shadow-lg"
              imgClassName="rounded-2xl object-cover"
              width={600}
              height={600}
              priority
            />
          </div>
        </Container>
      </div>

      {/* Logo Banner - Infinite Scroll */}
      <div className="w-full bg-transparent py-8 border-a border-neutral-100 overflow-hidden min-h-[64px] h-24">
        <div className="relative w-full h-full">
          <div
            className="flex items-center gap-12 animate-logo-scroll h-full"
            style={{
              width: 'max-content',
              animation: 'logo-scroll 32s linear infinite',
              animationPlayState: 'running',
            }}
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <img
                key={logo.alt + i}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ minWidth: 100, maxWidth: 140 }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-scroll,
          .animate-logo-scroll:hover {
            will-change: transform;
            animation-play-state: running !important;
          }
        `}</style>
      </div>

      {/* Mission and Vision */}
      <Container className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-[var(--primary-color)] rounded-2xl shadow-lg p-10 md:p-16">
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Mission and Vision
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              We aim to lead the transition to renewable energy by offering tailored solutions that prioritise sustainability and innovation.
            </p>
            <p className="text-white/90 text-lg">
              Our mission is to empower businesses to thrive in a greener future—delivering cost savings, expert advice, and a seamless switch to better utility suppliers.
            </p>
          </div>
          <div className="flex-1 max-w-md w-full">
            <ResponsiveImage
              src="/images/optimized/hero-1280w.webp"
              alt="Solar panels at sunset"
              className="rounded-2xl shadow-2xl border-4 border-white"
              imgClassName="rounded-2xl object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </Container>

      {/* How It Works in Three Easy Steps */}
      <Container className="py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[var(--secondary-color)]">How It Works in three easy steps</h2>
        <p className="text-center text-neutral-600 mb-10">We've made saving on your utilities simple</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Fill in our quote form</h3>
            <p className="text-gray-600 text-sm">Tell us about your business and its utility requirements.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Get a personalised comparison quote</h3>
            <p className="text-gray-600 text-sm">We'll find the most competitive rates from our trusted suppliers.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Swap supplier or stay with your supplier</h3>
            <p className="text-gray-600 text-sm">We'll handle the process seamlessly, even negotiating a better deal with your current supplier.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button to="/comparison" variant="primary" size="lg">
            Get Your Free Quote
          </Button>
        </div>
      </Container>

      {/* Experience & Support Section */}
      <div className="bg-[var(--secondary-color)] py-16 md:py-20">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">20+ years experience</h2>
          <p className="text-lg md:text-xl text-white/90 mb-2">Dedicated support throughout the lifetime of your contract.</p>
        </Container>
      </div>

      {/* Latest News / Insights */}
      <Container className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-8">Latest insights in green energy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center h-40 text-[var(--primary-color)] text-xl">Loading...</div>
          ) : blogPosts.length === 0 ? (
            <div className="col-span-3 text-center text-neutral-500">No news available.</div>
          ) : (
            blogPosts.map(post => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="h-56 w-full overflow-hidden">
                  <ResponsiveImage
                    src={post.imageUrl || '/images/optimized/hero-400w.webp'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    imgClassName="w-full h-full object-cover"
                    width={600}
                    height={224}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-neutral-500 mb-2 flex items-center gap-2">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.excerpt.split(' ').length > 30 ? '5 min read' : '3 min read'}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--accent-color)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-700 line-clamp-3">{post.excerpt}</p>
                </div>
              </a>
            ))
          )}
        </div>
      </Container>

      {/* Testimonial Section */}
      <Container className="py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--primary-color)]">
            What our clients say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real feedback from businesses who trust Revo Utilities to save them money and simplify their utilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} author={t.author} position={t.position || ''} />
          ))}
        </div>
      </Container>

      {/* CEO Quote / Call to Action */}
      <div className="relative bg-[var(--secondary-color)] py-16 md:py-24">
        <Container className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 max-w-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"Revo Utilities delivers tools and systems engineered to harmonize with natural processes."</h2>
            <p className="text-lg mb-8">Let us help your business thrive in the new era of sustainable energy.</p>
            <Button to="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
          <div className="flex-1 max-w-md w-full">
            <ResponsiveImage
              src="/images/optimized/hero-1920w.webp"
              alt="Wind turbines at sunset"
              className="rounded-2xl shadow-lg"
              imgClassName="rounded-2xl object-cover"
              width={600}
              height={400}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
