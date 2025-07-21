import { useEffect, useState } from 'react';
import Button from '../components/Button';
import type { BlogPost } from '../utils';
import { fetchBlogPosts } from '../utils';
import Container from '../components/ui/Container';
import ResponsiveImage from '../components/ResponsiveImage';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { logger } from '../utils/logger';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts when component mounts
    const loadBlogPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts.slice(0, 3));
      } catch (error) {
        logger.error('Failed to fetch blog posts for home page', 'Home', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const LOGOS = [
    { src: '/logos/optimized/British_Gas_logo.svg.webp', alt: 'British Gas' },
    { src: '/logos/optimized/EDF_Energy_logo.svg.webp', alt: 'EDF Energy' },
    { src: '/logos/optimized/Logo_E.ON.svg.webp', alt: 'E.ON' },
    { src: '/logos/optimized/YGP-Logo-Colour@2x.webp', alt: 'YGPower' },
    { src: '/logos/optimized/RWE_npower_logo.webp', alt: 'RWE npower' },
    { src: '/logos/optimized/ScottishPower_Logo_2023.svg.webp', alt: 'Scottish Power' },
    { src: '/logos/optimized/SSEenergy.svg.webp', alt: 'SSE' },
    { src: '/logos/optimized/OSSO-Energy-logo.svg', alt: 'OSSO Energy' },
  ];

  return (
    <div className="bg-[var(--background)] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="hero-section relative overflow-hidden -mt-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5"></div>

        <Container className="relative pt-8 pb-12 md:pt-12 md:pb-16">
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
              <span className="font-medium">UK Energy Specialists</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">Zero Upfront Costs</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Main content */}
            <div className="flex-1 max-w-3xl text-center lg:text-left">
              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                <span className="text-[var(--secondary-color)]">Leading UK energy business</span>
              </h1>

              {/* Value proposition */}
              <p className="text-xl md:text-2xl text-neutral-700 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We don't just find cheaper rates—we architect your complete energy transition with
                <span className="font-semibold text-[var(--primary-color)]"> renewable solutions</span>,
                <span className="font-semibold text-[var(--secondary-color)]"> expert negotiations</span>, and
                <span className="font-semibold text-neutral-800"> lifetime support</span>.
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">£</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800">Average Savings</div>
                    <div className="text-xs text-neutral-600">25-40% reduction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800">Green Energy</div>
                    <div className="text-xs text-neutral-600">100% renewable options</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">24/7</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800">Support</div>
                    <div className="text-xs text-neutral-600">Dedicated account manager</div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button to="/comparison" variant="primary" size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                  Get Your Free Energy Audit
                </Button>
                <Button to="/services" variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
                  Explore Solutions
                </Button>
              </div>

              {/* Social proof */}
              <div className="mt-6 text-center lg:text-left">
                <p className="text-sm text-neutral-600 mb-2">Trusted by 500+ UK businesses</p>
                <div className="flex justify-center lg:justify-start items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="ml-2 text-sm text-neutral-600 font-medium">4.9/5 average rating</span>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="flex-1 max-w-lg w-full relative">
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--primary-color)]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--secondary-color)]/20 rounded-full blur-xl animate-pulse delay-1000"></div>

              <div className="relative">
                <ResponsiveImage
                  src="/images/optimized/hero-800w.webp"
                  alt="Renewable energy infrastructure with wind turbines and solar panels"
                  className="rounded-3xl shadow-2xl border-4 border-white/50"
                  imgClassName="rounded-3xl object-cover"
                  width={600}
                  height={600}
                  priority
                />

                {/* Overlay stats card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[var(--primary-color)]">£2.3M+</div>
                      <div className="text-xs text-neutral-600">Client savings in 2024</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--secondary-color)]">85%</div>
                      <div className="text-xs text-neutral-600">Choose renewable energy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Logo Banner - Infinite Scroll */}
      <div className="logo-marquee w-full overflow-hidden py-4 border-a border-neutral-100 min-h-[64px] h-20 bg-transparent">
        <div className="logo-track flex items-center gap-12 h-full">
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
        <style>{`
          .logo-track {
            width: fit-content;
            animation: logo-scroll 32s linear infinite;
            animation-play-state: running;
          }
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Mission and Vision */}
      <Container className="py-12 md:py-16">
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
              src="/images/optimized/revo-energy.webp"
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
      <Container className="py-8 md:py-12">
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
      <div className="bg-[var(--secondary-color)] py-12 md:py-16">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">20+ years experience</h2>
          <p className="text-lg md:text-xl text-white/90 mb-2">Dedicated support throughout the lifetime of your contract.</p>
        </Container>
      </div>

      {/* Latest News / Insights */}
      <Container className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-8">Latest insights in green energy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center h-40 text-[var(--primary-color)] text-xl">Loading...</div>
          ) : blogPosts.length === 0 ? (
            <div className="col-span-3 text-center text-neutral-500">No news available.</div>
          ) : (
            blogPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
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
              </Link>
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
        <Container className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-20">
          <div className="flex-1 max-w-2xl text-white flex flex-col items-center md:items-start mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">"We are proud partners of some of the UK's leading energy suppliers meaning that you can rest assured that you'll receive a personalised, cost-effective deal that suits your needs specifically."</h2>
            <p className="text-lg mb-4 text-center md:text-left">Let us help your business thrive in the new era of sustainable energy.</p>
            <Button to="/comparison" variant="primary" size="lg" className="mb-0">
              Get Started
            </Button>
          </div>
          <div className="flex-1 max-w-md w-full">
            <ResponsiveImage
              src="/images/optimized/revo-deal.webp"
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
