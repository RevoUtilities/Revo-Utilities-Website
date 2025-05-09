import { ArrowRight, ChevronRight, Droplet, Globe, Laptop, Lightbulb, Target, Zap } from 'lucide-react';
import { useEffect } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Removed animations */}
      <section 
        className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 bg-cover bg-center relative overflow-hidden" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?h=1080&w=1920")' 
        }}>
        {/* Removed blur effects */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/4 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">Our Utility</span> 
                <div className="inline-block relative mt-2 md:mt-0 md:ml-3">
                  <span className="text-white">Services</span>
                </div>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                <span className="glass-dark inline-block px-6 py-4 rounded-xl">
                  Comprehensive utility solutions for your business, all in one place
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="lg" icon={<ChevronRight size={20} />} className="w-full sm:w-auto">
                  Request a quote
                </Button>
                <Button to="#services" variant="glass" size="lg" className="w-full sm:w-auto">
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Removed animations */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a range of utility services to help businesses save money and streamline their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Energy Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Gas & Electricity"
                description="Find the most competitive rates for your business energy needs with our comprehensive comparison service. We work with leading UK suppliers to ensure you get the best deal."
                icon={<Zap size={32} className="text-blue-500" />}
                link="/contact"
              />
            </div>
            
            {/* Water Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Water Services"
                description="optimise your water usage and costs. Our water services help businesses reduce consumption, identify leaks early, and secure better rates."
                icon={<Droplet size={32} className="text-cyan-500" />}
                link="/contact"
              />
            </div>
            
            {/* Telecoms Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Business Telecoms"
                description="Stay connected with reliable, cost-effective telecom solutions. From broadband to VoIP systems, we'll help you find the right package for your business."
                icon={<Laptop size={32} className="text-indigo-500" />}
                link="/contact"
              />
            </div>
            
            {/* Sustainability Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Green Energy Solutions"
                description="Transition to sustainable energy sources with our green energy solutions. Reduce your carbon footprint while potentially lowering costs."
                icon={<Globe size={32} className="text-green-500" />}
                link="/contact"
              />
            </div>
            
            {/* Energy Efficiency Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Energy Efficiency Audits"
                description="Identify opportunities to reduce energy consumption with our comprehensive audit service. We'll help you implement changes that save money and improve sustainability."
                icon={<Lightbulb size={32} className="text-yellow-500" />}
                link="/contact"
              />
            </div>
            
            {/* Custom Service */}
            <div className="service-card h-full">
              <ServiceCard
                title="Custom Solutions"
                description="Don't see what you need? We offer customized utility management solutions tailored to your specific business requirements."
                icon={<Target size={32} className="text-red-500" />}
                link="/contact"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Transparent Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We believe in clarity and transparency in all our dealings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* No Upfront Fees */}
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-4">No Upfront Fees</h3>
              <p className="text-gray-700 mb-6">
                Our service is completely free to use. We only get paid when you save money on your utilities.
              </p>
              <a href="/contact" className="inline-block px-6 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] font-medium rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200">
                Get Started
              </a>
            </div>

            {/* Full Service */}
            <div className="bg-white p-8 rounded-lg shadow-sm h-full relative">
              <div className="absolute top-4 right-4 bg-[var(--primary-color)] text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Service</h3>
              <p className="text-gray-700 mb-6">
                Complete management of your utility needs, including bill validation, contract negotiation, and ongoing support.
              </p>
              <a href="/contact" className="inline-block px-6 py-2 bg-[var(--primary-color)] text-white font-medium rounded-full hover:bg-[var(--primary-dark)] transition-colors duration-200">
                Get Started
              </a>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-700 mb-6">
                Tailored utility management strategies designed for larger businesses with complex requirements.
              </p>
              <a href="/contact" className="inline-block px-6 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] font-medium rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Revo Utilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <a href="/contact" className="inline-block px-8 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full hover:bg-[var(--primary-dark)] transition-colors duration-200">
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

      {/* Benefits Section - Simplified */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Why choose Revo Utilities for your business utility needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-300">
                Businesses typically save 10-15% on utility costs through our service
              </p>
            </div>
            
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
              <p className="text-gray-300">
                We handle all the research and paperwork, saving you valuable time
              </p>
            </div>
            
            <div className="p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-300">
                Our experienced team provides personalized recommendations
              </p>
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

      {/* CTA Section - Simplified */}
      <section className="py-16 bg-[var(--primary-color)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to optimise your utility spending?</h2>
              <p className="text-white/80">Get in touch today for a free, no-obligation consultation.</p>
            </div>
            <Button to="/contact" variant="outline" size="lg" icon={<ArrowRight size={20} />}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
