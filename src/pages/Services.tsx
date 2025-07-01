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
        <div className="relative z-20 flex flex-col justify-center items-start h-full w-full max-w-4xl px-8 md:px-16 mt-32 md:mt-48">
          <span className="text-white/80 text-sm mb-4">Quote from CEO</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6" style={{textShadow: '0 2px 16px rgba(0,0,0,0.25)'}}>
            EcoPower delivers tools and systems engineered to harmonize with natural processes.
          </h1>
          <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-200">Get Started</button>
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
            <div className="service-card h-full">
              
            </div>
            
            {/* Water Service */}
            <div className="service-card h-full">
              
            </div>
            
            {/* Telecoms Service */}
            <div className="service-card h-full">
              
            </div>
            
            {/* Sustainability Service */}
            <div className="service-card h-full">
              
            </div>
            
            {/* Energy Efficiency Service */}
            <div className="service-card h-full">
              
            </div>
            
            {/* Custom Service */}
            <div className="service-card h-full">
              
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
                We're committed to delivering exceptional service and value to all our clients
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
                      We partner with leading utility providers to secure the most competitive rates for your business.
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
                      We handle all the paperwork and coordination required to switch providers.
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
                      Our team provides continuous support and regular reviews to ensure you're always getting the best deal.
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block text-[var(--primary-color)] text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Maximize Your Business Potential</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover how Revo Utilities transforms your business operations with innovative utility solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Cost Savings Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/10">
              <div className="w-16 h-16 mb-6 bg-[var(--primary-color)]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Significant Cost Savings</h3>
              <p className="text-gray-300 mb-6">
                Leverage our expertise to reduce your utility expenses by 10-15% on average, with some clients saving up to 30%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Average 15% savings
                </span>
                <span className="mx-3">•</span>
                <span>No upfront costs</span>
              </div>
            </div>
            
            {/* Time Efficiency Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/10">
              <div className="w-16 h-16 mb-6 bg-[var(--primary-color)]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Time Efficiency</h3>
              <p className="text-gray-300 mb-6">
                Save countless hours with our end-to-end utility management, from research to implementation and ongoing support.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  80% time saved
                </span>
                <span className="mx-3">•</span>
                <span>Dedicated account manager</span>
              </div>
            </div>
            
            {/* Expert Advice Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/10">
              <div className="w-16 h-16 mb-6 bg-[var(--primary-color)]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Expert Guidance</h3>
              <p className="text-gray-300 mb-6">
                Access industry experts who provide tailored recommendations based on your specific business needs and goals.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  15+ years experience
                </span>
                <span className="mx-3">•</span>
                <span>Ongoing support</span>
              </div>
            </div>
            
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-300">
                Continuous account management and regular rate reviews
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    to="/contact" 
                    variant="secondary" 
                    size="lg"
                    className="group relative overflow-hidden px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary-color)]/20 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Get Started Now</span>
                    <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></span>
                  </Button>
                  <Button 
                    to="/about" 
                    variant="outline" 
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/5 hover:border-white/50 px-8 py-4 font-medium transition-all duration-300"
                  >
                    Learn More
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
