import Button from '../components/Button';
import { useEffect, useMemo, useState } from 'react';
import { SEOManager, pageSEOConfigs } from '../utils/seoUtils';
import { useLocation } from 'react-router-dom';
import { fetchBlogPosts } from '../utils';
import Container from '../components/ui/Container';
import ResponsiveImage from '../components/ResponsiveImage';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    SEOManager.setupPageSEO(
      {
        ...pageSEOConfigs.home,
        // Stronger home targeting
        title: 'Business Utilities Comparison | Save on Gas, Electricity & Water | Revo Utilities',
        description:
          'Compare business utilities with Revo Utilities. Expert brokers for UK businesses to cut costs on gas, electricity and water with tailored contracts and renewable options.',
        keywords:
          'business utilities comparison, compare business energy, business gas prices, business electricity rates, water costs UK, utility broker UK',
        structuredDataType: 'organization',
        robots: 'index, follow',
      },
      location.pathname
    );
  }, [location.pathname]);
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
    select: (posts) => posts.slice(0, 3),
  });

  const [logosPaused, setLogosPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setLogosPaused(true);
    }

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setLogosPaused(event.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const PARTNERSHIP_LOGOS = [
    'Airtricity.webp',
    'British Gas Lite.webp',
    'Castle Water.webp',
    'Conrad Energy.webp',
    'Crown Gas Power.webp',
    'Dawn Insurance.webp',
    'Drax.webp',
    'Dyce.webp',
    'Ecotricity.webp',
    'Engie.webp',
    'Eon Next.webp',
    'Everflow.webp',
    'EVOPay.webp',
    'Global Payments.webp',
    'Intelligent Business Water.webp',
    'Jellyfish.webp',
    'My Guava.webp',
    'National Gas.webp',
    'o2-Daisy.webp',
    'Pozitive.webp',
    'Smartest Energy.webp',
    'Take Payments.webp',
    'Tomato energy.webp',
    'Total Energies.webp',
    'UGP.webp',
    'Valda.webp',
    'WorldPay.webp',
    'YU Energy.webp',
  ];

  // Keep the same number of logos as before (8), randomly selected per render
  const SELECTED_LOGOS = useMemo(() => {
    const count = 8;
    const shuffled = [...PARTNERSHIP_LOGOS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map((file) => ({
      src: `/logos/partnership-logos/${file}`,
      alt: file
        .replace(/\.(webp|png|jpg|jpeg|svg)$/i, '')
        .replace(/[-_]/g, ' '),
    }));
  }, []);

  return (
    <div className="bg-[var(--background)] min-h-screen font-sans">
      {/* Hero Section (2025 redesign) */}
      <div className="hero-section relative overflow-hidden -mt-8">
        {/* Subtle background wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[var(--background)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-10 md:pt-14 pb-12 md:pb-16">
          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left: copy */}
            <div className="lg:col-span-6 text-center lg:text-left max-w-3xl">
              {/* Trust indicators aligned to left column */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4 mb-5 md:mb-6 text-sm text-neutral-700">
                <span className="inline-flex items-center gap-2 bg-white shadow-sm ring-1 ring-black/5 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-medium">20+ Years Experience</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white shadow-sm ring-1 ring-black/5 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></span>
                  <span className="font-medium">UK Energy Specialists</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white shadow-sm ring-1 ring-black/5 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="font-medium">Zero Upfront Costs</span>
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-5">
                <span className="text-[var(--secondary-color)]">Leading UK <br />energy business</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-7 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We don&apos;t just find cheaper rates—we architect your complete energy transition with
                <span className="font-semibold text-[var(--primary-color)]"> renewable solutions</span>,
                <span className="font-semibold text-[var(--secondary-color)]"> expert negotiations</span>, and
                <span className="font-semibold text-neutral-800"> lifetime support</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button to="/comparison" variant="primary" size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl">
                  Get Your Free Energy Audit
                </Button>
                <Button to="/our-services" variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white hover:bg-white">
                  Explore Solutions
                </Button>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <p className="text-sm text-neutral-600 mb-2">Trusted by 500+ UK businesses</p>
                <div className="flex justify-center lg:justify-start items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  <span className="ml-2 text-sm text-neutral-600 font-medium">4.9/5 average rating</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                Start your <Link to="/comparison" className="text-[var(--primary-color)] underline">business utilities comparison</Link> or explore our
                {' '}<Link to="/our-services" className="text-[var(--primary-color)] underline">utility services for businesses</Link>. <br />For tips and updates, visit our
                {' '}<Link to="/insights" className="text-[var(--primary-color)] underline">energy and utilities blog</Link>.
              </p>
            </div>

            {/* Right: visual card */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-[4/3] rounded-3xl shadow-2xl ring-1 ring-black/10 overflow-hidden bg-white">
                <ResponsiveImage
                  src="/images/optimized/hero-800w.webp"
                  alt="Green energy landscape with wide skies"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  width={1200}
                  height={900}
                  priority
                />
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
        </div>
      </div>

      {/* Logo Banner - Infinite Scroll */}
      <div className="logo-marquee w-full overflow-hidden py-4 border-a border-neutral-100 min-h-[64px] bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-2">
            <span id="logo-marquee-description" className="sr-only">
              Scrolling logos of our energy partners
            </span>
            <button
              type="button"
              onClick={() => setLogosPaused((prev) => !prev)}
              className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:right-0 focus-visible:-top-2 focus-visible:z-10 rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-color)]"
              aria-pressed={logosPaused}
              aria-controls="partner-logo-track"
              aria-describedby="logo-marquee-description"
            >
              {logosPaused ? 'Resume logos motion' : 'Pause logos motion'}
            </button>
          </div>
          <div
            id="partner-logo-track"
            className={`logo-track flex items-center gap-12 h-full ${logosPaused ? 'is-paused' : ''}`}
            aria-labelledby="logo-marquee-description"
          >
          {/* First set of logos */}
          {SELECTED_LOGOS.map((logo, i) => (
            <img
              key={`first-${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              style={{ minWidth: 100, maxWidth: 140 }}
              loading="lazy"
            />
          ))}
          {/* Second set of logos for seamless loop */}
          {SELECTED_LOGOS.map((logo, i) => (
            <img
              key={`second-${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              style={{ minWidth: 100, maxWidth: 140 }}
              loading="lazy"
            />
          ))}
          {/* Third set of logos to ensure no gaps */}
          {SELECTED_LOGOS.map((logo, i) => (
            <img
              key={`third-${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              style={{ minWidth: 100, maxWidth: 140 }}
              loading="lazy"
            />
          ))}
          </div>
        </div>
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
        <p className="text-center text-neutral-600 mb-10">We&apos;ve made saving on your utilities simple</p>
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
            <p className="text-gray-600 text-sm">We&apos;ll find the most competitive rates from our trusted suppliers.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Swap supplier or stay with your supplier</h3>
            <p className="text-gray-600 text-sm">We&apos;ll handle the process seamlessly, even negotiating a better deal with your current supplier.</p>
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
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-8">Latest insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center h-40 text-[var(--primary-color)] text-xl">Loading...</div>
          ) : blogPosts.length === 0 ? (
            <div className="col-span-3 text-center text-neutral-500">No news available.</div>
          ) : (
            blogPosts.map(post => (
              <Link
                key={post.id}
                to={`/insights/${post.slug}`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">&quot;We are proud partners of some of the UK&apos;s leading energy suppliers meaning that you can rest assured that you&apos;ll receive a personalised, cost-effective deal that suits your needs specifically.&quot;</h2>
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
