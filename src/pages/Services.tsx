import { useEffect } from 'react';
import Button from '../components/Button';

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
          <button className="mt-6 mb-8 px-8 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-light)] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-200">Get Started</button>
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
              We deliver end-to-end utility management solutions designed to optimize costs, improve efficiency, and provide peace of mind for your business operations.
            </p>
            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 mb-12">
              <div className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[var(--primary-color)]">15-30%</div>
                <div className="text-sm text-gray-500 mt-1">Average Savings</div>
              </div>
              <div className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[var(--primary-color)]">24/7</div>
                <div className="text-sm text-gray-500 mt-1">Support</div>
              </div>
              <div className="px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[var(--primary-color)]">100%</div>
                <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Energy Service */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Energy Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l8-12h-7V2z" fill="#F59E42"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy</h3>
              <p className="text-gray-600 mb-4">We partner with leading utility suppliers to secure the most competitive rates for your business.</p>
            </div>
            {/* Telecoms Service */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Telecoms Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#3B82F6" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Telecoms</h3>
              <p className="text-gray-600 mb-4">Business broadband, phone systems, and connectivity solutions.</p>
            </div>
            {/* Merchant Services */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Merchant Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="2" fill="#10B981"/><rect x="7" y="10" width="2" height="2" fill="#fff"/><rect x="11" y="10" width="6" height="2" fill="#fff"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Merchant Services</h3>
              <p className="text-gray-600 mb-4">POS/EPOS solutions and payment processing for all business types.</p>
            </div>
            {/* EV Solutions */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* EV Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="12" width="16" height="6" rx="3" fill="#F59E42"/><circle cx="7" cy="18" r="2" fill="#3B82F6"/><circle cx="17" cy="18" r="2" fill="#3B82F6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">EV Solutions</h3>
              <p className="text-gray-600 mb-4">Electric vehicle charging infrastructure and support for your fleet.</p>
            </div>
            {/* Renewables */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Renewables Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 2v8m0 0l4-4m-4 4l-4-4" stroke="#10B981" strokeWidth="2"/><circle cx="12" cy="16" r="6" fill="#A3E635"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Renewables</h3>
              <p className="text-gray-600 mb-4">Solar, wind, and green energy solutions for a sustainable future.</p>
            </div>
            {/* Insurance */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Insurance Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="10" rx="2" fill="#F59E42"/><path d="M12 8v10" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Insurance</h3>
              <p className="text-gray-600 mb-4">Business insurance solutions through our trusted partners.</p>
            </div>
            {/* Refrigeration Solutions */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Refrigeration Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="7" y="6" width="10" height="12" rx="2" fill="#3B82F6"/><rect x="11" y="10" width="2" height="4" fill="#fff"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Refrigeration Solutions</h3>
              <p className="text-gray-600 mb-4">Commercial refrigeration from Husky for efficient cooling.</p>
            </div>
            {/* Business Funding / Finance */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Funding Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="2" fill="#10B981"/><path d="M12 10v8" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Funding / Finance</h3>
              <p className="text-gray-600 mb-4">Flexible funding and finance options through our partners.</p>
            </div>
            {/* Energy Efficiency Audit and Strategies */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Audit Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#A3E635"/><path d="M8 12h8M12 8v8" stroke="#2563EB" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficiency Audit and Strategies</h3>
              <p className="text-gray-600 mb-4">Comprehensive audits and tailored strategies to maximise your energy efficiency and savings.</p>
            </div>
            {/* Change of Tenancy / Ownership Support */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Tenancy Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="2" fill="#3B82F6"/><path d="M12 6v4" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Change of Tenancy / Ownership Support</h3>
              <p className="text-gray-600 mb-4">We handle all the paperwork and coordination required to switch suppliers.</p>
            </div>
            {/* Water & Waste Service (moved lower) */}
            <div className="service-card h-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
              <div className="mb-4">{/* Water & Waste Icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" fill="#2563EB"/><rect x="6" y="16" width="12" height="4" rx="2" fill="#A3A3A3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Water & Waste</h3>
              <p className="text-gray-600 mb-4">Combined water procurement and sustainable waste management to reduce costs and improve efficiency for your business.</p>
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
                variant="primary" 
                size="lg" 
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>

            {/* Full Service */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col relative border-2 border-[var(--primary-color)] transform hover:-translate-y-1">
              <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[var(--primary-color)] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Service</h3>
              <p className="text-gray-700 mb-6">
                Complete management of your utility needs, including bill validation, contract negotiation, and ongoing support.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-700 mb-6">
                Tailored utility management strategies designed for larger businesses with complex requirements.
              </p>
              <Button 
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
                  <a  className="inline-block px-8 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full hover:bg-[var(--primary-dark)] transition-colors duration-200">
                    Get Started
                  </a>
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
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
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
