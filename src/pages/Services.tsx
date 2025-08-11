import { useEffect } from 'react';
import { SEOManager, pageSEOConfigs } from '../utils/seoUtils';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // SEO
    SEOManager.setupPageSEO(
      {
        ...pageSEOConfigs.services,
        title: 'Business Utility Services | Energy, Water, Telecoms | Revo Utilities',
        description:
          'End-to-end business utility services: brokerage, renewables, EV, telecoms and water. Reduce costs and improve efficiency with Revo Utilities.',
        keywords:
          'business utility services, business energy services, utility broker UK, water and waste services, telecoms for business, EV charging solutions',
        structuredDataType: 'service',
        robots: 'index, follow',
        breadcrumbs: SEOManager.generateBreadcrumbs(location.pathname),
      },
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-start overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="https://images.pexels.com/photos/33493/windrader-wind-power-fichtelberg-wind-park.jpg"
          alt="Wind turbines at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.6)' }}
          loading="lazy"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Text content, left-aligned and moved down */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full w-full max-w-4xl px-8 md:px-16 mt-12 md:mt-16">
          <span className="text-white/80 text-sm mb-4">Quote from CEO</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6" style={{textShadow: '0 2px 16px rgba(0,0,0,0.25)'}}>
          Revo Utilities specialises in helping you focus on what matters most - <span className="text-[var(--primary-color)]">your business.</span>
          </h1>
          <Button to="/comparison" variant="primary" size="lg" className="mt-6 mb-8 px-8 py-3 text-lg font-semibold rounded-full shadow-lg">Get Started</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[var(--primary-color)] text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Comprehensive <span className="relative">Utility Solutions
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--primary-color)]/20 -z-10 rounded-full"></span></span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We deliver end-to-end utility management solutions designed to optimise costs, improve efficiency, and provide peace of mind for your business operations.
            </p>
            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 mb-12">
              <div className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[var(--primary-color)]">15-30%</div>
                <div className="text-sm text-gray-500 mt-1">Average Savings</div>
              </div>
              <div className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[var(--primary-color)]">100%</div>
                <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Energy Service */}
              <div id="energy" className="service-card h-full flex flex-col items-center text-center p-8 bg-[var(--primary-color)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-5 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Energy</h3>
                <p className="text-secondary mb-4">We partner with leading utility suppliers to secure the most competitive tariffs for your business.</p>
              </div>

              {/* Telecoms Service */}
              <div id="telecoms" className="service-card h-full flex flex-col items-center text-center p-8 bg-[var(--primary-color)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-5 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Telecoms</h3>
                <p className="text-secondary">Business broadband, phone systems & connectivity solutions tailored to your needs.</p>
              </div>

              {/* Merchant Services */}
              <div className="service-card h-full flex flex-col items-center text-center p-8 bg-[var(--primary-color)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-5 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Merchant Services</h3>
                <p className="text-secondary">POS/EPOS solutions & payment processing for all business types & sizes.</p>
              </div>

              {/* Water & Waste Service */}
              <div id="water" className="service-card h-full flex flex-col items-center text-center p-8 bg-[var(--primary-color)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-5 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Water & Waste</h3>
                <p className="text-secondary">Combined water procurement & sustainable waste management solutions for your business.</p>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Additional Services</h3>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                In addition to our core services, we also offer a range of specialised solutions to meet your business needs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* EV Solutions */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 19V7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v12"></path>
                      <line x1="5" y1="19" x2="19" y2="19"></line>
                      <line x1="8" y1="11" x2="16" y2="11"></line>
                      <line x1="8" y1="15" x2="16" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">EV Solutions</h4>
                    <p className="text-sm text-gray-600">Charging infrastructure and fleet support</p>
                  </div>
                </div>

                {/* Renewables */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Renewables</h4>
                    <p className="text-sm text-gray-600">Solar, wind, and green energy solutions</p>
                  </div>
                </div>

                {/* Insurance */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 10V3l9 7-9 7-9-7 9-7"></path>
                      <path d="M3 21h18"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance</h4>
                    <p className="text-sm text-gray-600">Business insurance through trusted partners</p>
                  </div>
                </div>

                {/* Refrigeration */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2"></rect>
                      <line x1="12" y1="6" x2="12" y2="10"></line>
                      <line x1="12" y1="14" x2="12" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Refrigeration</h4>
                    <p className="text-sm text-gray-600">Commercial cooling solutions</p>
                  </div>
                </div>

                {/* Business Funding */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Funding</h4>
                    <p className="text-sm text-gray-600">Finance options through partners</p>
                  </div>
                </div>

                {/* IT Services */}
                <a href="https://www.revo-it.com/" target="_blank" rel="noopener noreferrer" className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="text-[var(--primary-color)] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">IT Services</h4>
                    <p className="text-sm text-gray-600">Technical support and cloud solutions</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-gray-600">
                  Don&apos;t see what you&apos;re looking for? Contact us to discuss your specific requirements or start a
                  {' '}<Link to="/comparison" className="text-[var(--primary-color)] underline">business energy comparison</Link>.
                </p>
                <div className="flex justify-center mt-4">
                  <Button to="/comparison" variant="primary" size="md" className="px-6 py-2.5 font-medium rounded-lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We believe in clarity and transparency in all our dealings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* No Upfront Fees */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">No Upfront Fees</h3>
              <p className="text-gray-700 mb-6">
                Our service is completely free to use. We only get paid when you save money on your utilities.
              </p>
              <Button
                to="/comparison"
                variant="primary"
                size="lg"
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>

            {/* Full Service */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col relative border-2 border-[var(--primary-color)] transform hover:-translate-y-1 overflow-hidden">
              {/* Top banner - part of card structure */}
              <div className="bg-[var(--primary-color)] text-white text-xs font-bold text-center py-2">
                Most Popular
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">Full Service</h3>
                <p className="text-gray-700 mb-6">
                  Complete management of your utility needs, including bill validation, contract negotiation, and ongoing support.
                </p>
                <Button
                  to="/comparison"
                  variant="primary"
                  size="lg"
                  className="w-full text-center"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Bespoke Solutions</h3>
              <p className="text-gray-700 mb-6">
                Tailored utility management strategies designed for larger businesses with complex requirements.
              </p>
              <Button
                to="/comparison"
                variant="glass"
                size="lg"
                className="w-full text-center"
              >
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Revo Utilities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Revo Utilities?</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We&apos;re committed to delivering exceptional service and value to all our clients
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Revo Utilities?</h2>

              <div className="space-y-6">
                {/* Access to Best Rates */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Access to the Best Rates</h3>
                    <p className="text-gray-700">
                      We partner with leading utility suppliers to secure the most competitive rates for your business.
                    </p>
                  </div>
                </div>

                {/* Personalised Service */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalised Service</h3>
                    <p className="text-gray-700">
                      We take the time to understand your business needs and provide tailored solutions.
                    </p>
                  </div>
                </div>

                {/* Seamless Switching */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Seamless Switching</h3>
                    <p className="text-gray-700">
                      We handle all the paperwork and coordination required to switch suppliers.
                    </p>
                  </div>
                </div>

                {/* Ongoing Support */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-700">
                      Our team provides continuous support and regular reviews to ensure you&apos;re always getting the best deal.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button to="/comparison" variant="primary" size="lg" className="px-8 py-3 font-medium rounded-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                alt="Business person on laptop"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.414-1.414l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Average Savings</p>
                    <p className="text-2xl font-bold">23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* (Section moved to Comparison page as requested) */}

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] opacity-95">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--primary-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--primary-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                <span className="inline-block text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">Start Saving Today</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Ready to transform your business utilities?</h2>
                <p className="text-white/80 text-lg mb-6">Join hundreds of businesses already saving on their utility costs with our expert solutions. Get your free, no-obligation consultation now.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    to="/comparison"
                    variant="secondary"
                    size="lg"
                    className="group relative overflow-hidden px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary-color)]/20 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Get Started Now</span>
                    <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></span>
                  </Button>
                  <Button
                    to="/team"
                    variant="outline"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/5 hover:border-white/50 px-8 py-4 font-medium transition-all duration-300"
                  >
                    Meet The Team
                  </Button>
                </div>

                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No upfront costs</span>
                  <span className="mx-1">•</span>
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No risk, no obligation</span>
                </div>
              </div>

              <div className="relative flex-shrink-0 hidden lg:block">
                <div className="relative w-64 h-64 bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] rounded-2xl opacity-30 blur"></div>
                  <div className="relative h-full flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">15-30%</div>
                    <div className="text-sm text-white/70">Average savings for our clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
