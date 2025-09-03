import { useEffect } from 'react';
import Button from '../components/Button';
import { SEOManager, pageSEOConfigs } from '../utils/seoUtils';
import { useLocation } from 'react-router-dom';

const PARTNER_LOGOS: { src: string; alt: string }[] = [
  { src: '/logos/partnership-logos/Airtricity.webp', alt: 'Airtricity' },
  { src: '/logos/partnership-logos/British Gas Lite.webp', alt: 'British Gas Lite' },
  { src: '/logos/partnership-logos/Castle Water.webp', alt: 'Castle Water' },
  { src: '/logos/partnership-logos/Conrad Energy.webp', alt: 'Conrad Energy' },
  { src: '/logos/partnership-logos/Crown Gas Power.webp', alt: 'Crown Gas & Power' },
  { src: '/logos/partnership-logos/Dawn Insurance.webp', alt: 'Dawn Insurance' },
  { src: '/logos/partnership-logos/Drax.webp', alt: 'Drax' },
  { src: '/logos/partnership-logos/Dyce.webp', alt: 'Dyce' },
  { src: '/logos/partnership-logos/Ecotricity.webp', alt: 'Ecotricity' },
  { src: '/logos/partnership-logos/Engie.webp', alt: 'Engie' },
  { src: '/logos/partnership-logos/Eon Next.webp', alt: 'E.ON Next' },
  { src: '/logos/partnership-logos/Everflow.webp', alt: 'Everflow' },
  { src: '/logos/partnership-logos/EVOPay.webp', alt: 'EVO Payments' },
  { src: '/logos/partnership-logos/Global Payments.webp', alt: 'Global Payments' },
  { src: '/logos/partnership-logos/Intelligent Business Water.webp', alt: 'Intelligent Business Water' },
  { src: '/logos/partnership-logos/Jellyfish.webp', alt: 'Jellyfish' },
  { src: '/logos/partnership-logos/My Guava.webp', alt: 'My Guava' },
  { src: '/logos/partnership-logos/National Gas.webp', alt: 'National Gas' },
  { src: '/logos/partnership-logos/o2-Daisy.webp', alt: 'O2 Daisy' },
  { src: '/logos/partnership-logos/Pozitive.webp', alt: 'Pozitive' },
  { src: '/logos/partnership-logos/Smartest Energy.webp', alt: 'Smartest Energy' },
  { src: '/logos/partnership-logos/Take Payments.webp', alt: 'Take Payments' },
  { src: '/logos/partnership-logos/Tomato energy.webp', alt: 'Tomato Energy' },
  { src: '/logos/partnership-logos/Total Energies.webp', alt: 'Total Energies' },
  { src: '/logos/partnership-logos/UGP.webp', alt: 'UGP' },
  { src: '/logos/partnership-logos/Valda.webp', alt: 'Valda' },
  { src: '/logos/partnership-logos/WorldPay.webp', alt: 'WorldPay' },
  { src: '/logos/partnership-logos/YU Energy.webp', alt: 'YU Energy' },
];

const Partnerships = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    SEOManager.setupPageSEO(
      {
        ...pageSEOConfigs.partnerships,
        title: 'Our Partnerships | Trusted Utility & Payments Partners | Revo Utilities',
        description:
          'We partner with leading energy, water, telecoms and payments providers. Explore our trusted network that helps deliver savings and service excellence.',
        keywords:
          'utility partners, energy partners, water partners, merchant services partners, telecom partners, UK business utilities partnerships',
        structuredDataType: 'organization',
        robots: 'index, follow',
        breadcrumbs: SEOManager.generateBreadcrumbs(location.pathname),
      },
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-12 bg-gradient-to-b from-white to-gray-50/60 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-[var(--primary-color)] text-sm font-semibold tracking-widest uppercase mb-3">Our Network</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Strategic <span className="text-[var(--secondary-color)]">Partnerships</span> that power results
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              We collaborate with a carefully curated ecosystem of suppliers and service providers across energy, water, telecoms and payments to deliver the best outcomes for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/comparison" variant="primary" size="lg">Get a free quote</Button>
              <Button to="/our-services" variant="secondary" size="lg">Explore services</Button>
            </div>
            
            {/* Additional internal links */}
            <div className="mt-6 text-sm text-gray-600">
              <p>
                Learn more about our <a href="/our-services" className="text-[var(--primary-color)] hover:underline">business utility services</a> or 
                {' '}<a href="/team" className="text-[var(--primary-color)] hover:underline">meet our expert team</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary-color)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>
      </section>

      {/* About REVO Group (from provided copy, edited for brevity & SEO) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the REVO Group</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                REVO Utilities, <a href="https://www.revo-it.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline font-medium">REVO IT</a>, <a href="https://www.revo-training.co.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline font-medium">REVO Training</a> and REVO Commercial work together to deliver joined-up operational solutions. REVO Utilities leads on energy procurement, metering and tariff optimisation, alongside water, telecoms, waste and merchant services to reduce business costs. REVO IT provides tailored support, hardware and security. REVO Training delivers SVQ Level 2–4 qualifications, and REVO Commercial manages property services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full"></div>
                  <span className="text-sm text-gray-600">Integrated solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[var(--secondary-color)] rounded-full"></div>
                  <span className="text-sm text-gray-600">Cost optimisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Business support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business team collaboration and partnership"
                className="rounded-2xl shadow-lg w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">United we achieve more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vetted suppliers</h3>
              <p className="text-gray-600">We partner only with reputable, financially stable providers with excellent service records.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Better pricing</h3>
              <p className="text-gray-600">Leverage our partner relationships for competitive tariffs and favourable terms.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Seamless switching</h3>
              <p className="text-gray-600">End-to-end support to move or renew with minimal disruption to your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partnerships (from provided copy) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured partnerships</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A selection of strategic relationships that help us deliver better pricing, choice and support.</p>
          </div>
          {/* Wide banner image emphasising connection */}
          <div className="relative mb-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1723618971975-97c7b8babd97?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Network of connected points representing partnerships"
              className="rounded-2xl shadow-lg w-full h-44 md:h-56 lg:h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/10 to-black/10"></div>
          </div>

          {/* Partnership showcase image removed per feedback */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Innasol & PPAs */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innasol & Power Purchase Agreements</h3>
              <p className="text-gray-700">Renewable solutions with access to competitive PPAs via partners including Drax, Valda and Conrad Energy—supporting practical decarbonisation and long-term value.</p>
            </div>

            {/* EV Solutions */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--secondary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">E.ON Drive (EV)</h3>
              <p className="text-gray-700">Fully funded EV charging solutions that can generate returns for sites and estates, delivered end-to-end through our partners.</p>
            </div>

            {/* Insurance */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dawn Insurance</h3>
              <p className="text-gray-700">FCA-regulated commercial insurance with 20+ years&apos; experience—care, engineering, hospitality and property—with REVO ensuring clients are fully protected.</p>
            </div>

            {/* Finance */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Satellite Finance</h3>
              <p className="text-gray-700">Specialist asset finance and tailored loans to support investment and cash flow—helping clients act quickly when it matters.</p>
            </div>

            {/* Refrigeration */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Husky Commercial</h3>
              <p className="text-gray-700">Energy‑efficient commercial refrigeration for retail and hospitality—reducing consumption and cost while maintaining performance.</p>
            </div>

            {/* Retail supply */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--secondary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">VSL (Vape Supplier Ltd)</h3>
              <p className="text-gray-700">Leading UK vape wholesale partner—supporting retailers, symbol groups and multi‑site operators with margin‑enhancing ranges and support. <a href="/our-services" className="text-[var(--primary-color)] hover:underline">Learn about our retail solutions</a>.</p>
            </div>

            {/* Trade associations */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scottish Grocers Federation (SGF)</h3>
              <p className="text-gray-700">Utility support partner to SGF members since 2024—helping over 5,000 stores reduce costs across energy, water, telecoms and payments. <a href="/comparison" className="text-[var(--primary-color)] hover:underline">Get your free comparison</a>.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">The Giftware Association</h3>
              <p className="text-gray-700">National trade body partner (from 2025). We provide guidance on utilities, cost reduction and free account management for members. <a href="/our-services" className="text-[var(--primary-color)] hover:underline">Explore our services</a>.</p>
            </div>

            {/* Engineering & industrial */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--primary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Glacier Energy Services</h3>
              <p className="text-gray-700">A long‑standing relationship (10+ years) supporting global operations across oil & gas and renewables—driving sustainability and operational efficiency. <a href="/our-services" className="text-[var(--primary-color)] hover:underline">Discover our energy solutions</a>.</p>
            </div>

            {/* Take Payments - Featured Partnership (balanced card) */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--secondary-color)] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute top-4 right-4 px-2 py-1 bg-[var(--secondary-color)]/15 text-[var(--secondary-color)] text-xs font-semibold rounded-full">Featured</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Take Payments</h3>
              <p className="text-gray-700">Our strategic partnership with Take Payments provides comprehensive payment solutions for businesses across the UK—card processing and EPOS systems that streamline payment operations and reduce fees. <a href="https://www.takepayments.com/revo-utilities/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">Visit Take Payments</a>.</p>
            </div>

            {/* Community & third sector */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-[var(--secondary-color)] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Community & CICs</h3>
              <p className="text-gray-700">We support organisations such as Leeds West Indian Carnival, Radio Buena CIC and BMACC—reflecting our commitment to community impact, not just profit. <a href="/team" className="text-[var(--primary-color)] hover:underline">Meet our team</a>.</p>
            </div>

            {/* Client examples */}
            <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Retail & hospitality examples</h3>
              <p className="text-gray-700">Spar stores (Renfrew, Maryhill, Duntocher), McCallums Foods, Blue Lagoon Fish & Chips, Cleone Foods (Island Delight), Best Western Glasgow, The Edinburgh Collection, Twelve Grains. <a href="/comparison" className="text-[var(--primary-color)] hover:underline">Join our client network</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Masonry/Grid Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trusted by industry leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A selection of our partners across energy, water, telecoms and payments.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center max-w-6xl mx-auto">
            {PARTNER_LOGOS.map((logo, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories Section (image removed per feedback) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our partnership ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive coverage across all your business utility needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:col-span-2">
              <div className="p-6 rounded-2xl bg-[var(--primary-color)] text-white shadow-md">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Energy & Water</h3>
                <p className="text-white/90 text-sm">Gas, electricity and water suppliers with strong commercial programmes and sustainable options.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Payments & Merchant Services</h3>
                <p className="text-gray-600 text-sm">EPOS, card processing and payments solutions to streamline your operations and reduce fees.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Telecoms & Connectivity</h3>
                <p className="text-gray-600 text-sm">Reliable business connectivity and communications from established telecom partners.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-6 py-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">E</div>
                <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">T</div>
              </div>
              <span className="text-sm text-gray-600 font-medium">All utilities covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-14 md:py-20 bg-[var(--secondary-color)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">Ready to leverage our partner network?</h3>
              <p className="text-white/90 text-base sm:text-lg">Get a no‑obligation consultation and see how much you could save.</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto justify-center md:justify-end items-center">
              <Button
                to="/comparison"
                variant="primary"
                size="lg"
                className="w-full max-w-md px-8 py-4 rounded-full font-semibold leading-none !border-2 !border-transparent whitespace-nowrap text-center shadow-lg"
              >
                Get Started
              </Button>
              <Button
                to="/our-services"
                variant="outline"
                size="lg"
                className="w-full max-w-md px-8 py-4 rounded-full font-semibold leading-none text-white !border-2 !border-white/70 hover:bg-white/10 hover:!border-white/80 whitespace-nowrap text-center"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;


