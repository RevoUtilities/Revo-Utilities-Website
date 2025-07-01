import { ArrowRight, Check, Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/ui/Card';


const Comparison = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Calculate the width of one testimonial card (approximate, for smooth loop)
  // We'll use a fixed width for each card for simplicity

  const faqs = [
    {
      question: "How does the utility comparison process work?",
      answer: "Our process is simple and efficient. First, you provide your business details and current utility information through our form. Our expert team then analyses your requirements and compares rates from leading UK suppliers. We&apos;ll present you with the best options tailored to your business needs, with clear explanations of each tariff&apos;s benefits."
    },
    {
      question: "What information do I need to provide for a comparison?",
      answer: "To get an accurate comparison, we&apos;ll need your business name, current supplier details, and approximate annual consumption. Don&apos;t worry if you don&apos;t have all the information - our team can help you find the necessary details from your existing bills or meter readings."
    },
    {
      question: "Are there any fees for using your comparison service?",
      answer: "No, our comparison service is completely free. We&apos;re paid by the energy suppliers when you switch through us, which means you get expert advice and support at no additional cost to your business."
    },
    {
      question: "How long does it take to switch suppliers?",
      answer: "The switching process typically takes 4-6 weeks to complete. This includes the cooling-off period, meter readings, and the actual switch. Our team will guide you through each step and keep you informed of the progress."
    },
    {
      question: "What happens if I'm in a fixed-term contract?",
      answer: "If you're in a fixed-term contract, we can still help you plan your switch for when your contract ends. We&apos;ll note your contract end date and contact you before it expires to ensure a smooth transition to a better deal."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Hero Section with Background Color */}
      <div className="bg-gradient-to-b from-gray-500 to-gray-50">
        <section className="relative w-full pt-10 pb-8 md:pt-20 md:pb-16 lg:pt-40 lg:pb-32 flex items-center px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* Headline and subheadline */}
          <div className="flex-1 md:pr-8 flex flex-col justify-center w-full">
            <span className="uppercase tracking-widest text-[var(--primary-color)] font-semibold text-sm mb-4 block">Your Utility Advisor</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--secondary-color)] leading-tight">
              Your <span className="bg-primary-400 text-black font-extrabold rounded-md px-2 py-0.5" style={{lineHeight: '1.2'}}>Trusted</span> Utility Partner, Delivering Value with Integrity.
            </h1>
            <p className="text-base md:text-lg text-[var(--secondary-color)]/80 mb-6 md:mb-8">
              Your savings are our priority. We stand by your side with expertise and dedication, ensuring you get the best deal for your business utilities.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <Button to="#form" variant="primary" size="lg" icon={<ArrowRight size={20} />}>Call for a Free Quote</Button>
              <div className="flex items-center text-[var(--primary-color)] font-semibold text-base sm:text-lg sm:ml-4">
                <Phone size={20} className="mr-2" />
                0800 123 4567
              </div>
            </div>
          </div>
          {/* Form Card */}
          <div id="form" className="flex-1 w-full max-w-md bg-white rounded-xl shadow-lg p-5 md:p-8 mt-8 md:mt-0 md:self-center">
            <h2 className="text-2xl font-bold mb-4 text-[var(--secondary-color)]">Get Your Free Utilities Comparison</h2>
            <p className="text-[var(--secondary-color)]/80 mb-6">Fill in your details and our team will get back to you with a tailored quote.</p>
            <form className="space-y-5" autoComplete="off" aria-label="Utilities Comparison Enquiry Form">
              <Input label="Name" id="name" name="name" type="text" required placeholder="Your full name" variant="glass" />
              <Input label="Business Name" id="businessName" name="businessName" type="text" required placeholder="Your business name" variant="glass" />
              <Input label="Email" id="email" name="email" type="email" required placeholder="Email Address" variant="glass" />
              <Input label="Current Supplier" id="currentSupplier" name="currentSupplier" type="text" required placeholder="Eon, British Gas, etc" variant="glass" />
              <Button type="submit" variant="primary" size="lg" className="w-full mt-4 mb-4">Get My Free Quote</Button>
            </form>
          </div>
        </div>
      </section>
      </div>

      {/* Logo Bar Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-sm font-medium text-[var(--secondary-color)]/60 mb-6">COMPARE AGAINST LEADING UK ENERGY SUPPLIERS</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            <img src="/logos/British_Gas_logo.svg.png" alt="British Gas" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
            <img src="/logos/EDF_Energy_logo.svg.png" alt="EDF Energy" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
            <img src="/logos/Logo_E.ON.svg.png" alt="E.ON Next" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
            <img src="/logos/ScottishPower_Logo_2023.svg.png" alt="ScottishPower" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
            <img src="/logos/Octopus_Group_Logo.svg.png" alt="Octopus Energy" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
            <img src="/logos/Ovo_Energy_logo.svg.png" alt="OVO Energy" className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary-color)] mb-3">Compare Our Popular Energy Tariffs</h2>
            <p className="text-[var(--secondary-color)]/70 max-w-2xl mx-auto">Find the perfect energy solution for your business with our range of competitive tariffs</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
            <table className="min-w-full text-left text-[var(--secondary-color)]">
              <thead>
                <tr className="bg-[var(--primary-color)]/10">
                  <th className="py-4 px-4 md:px-6 font-bold text-base md:text-lg">Tariff</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-base md:text-lg">Contract</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-base md:text-lg">Exit Fee</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-base md:text-lg">100% Renewable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 md:px-6 font-semibold">Variable</td>
                  <td className="py-4 px-4 md:px-6">No contract</td>
                  <td className="py-4 px-4 md:px-6">£0</td>
                  <td className="py-4 px-4 md:px-6">✗</td>
                </tr>
                <tr className="border-b border-gray-100 bg-[var(--primary-color)]/5">
                  <td className="py-4 px-4 md:px-6 font-semibold">1 Year Fixed</td>
                  <td className="py-4 px-4 md:px-6">12 months</td>
                  <td className="py-4 px-4 md:px-6">£50</td>
                  <td className="py-4 px-4 md:px-6">✗</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 md:px-6 font-semibold text-[var(--primary-color)]">1 Year Fixed + Greener</td>
                  <td className="py-4 px-4 md:px-6">12 months</td>
                  <td className="py-4 px-4 md:px-6">£50</td>
                  <td className="py-4 px-4 md:px-6 text-green-600">✔</td>
                </tr>
                <tr className="bg-[var(--primary-color)]/5">
                  <td className="py-4 px-4 md:px-6 font-semibold">2 Year Fixed</td>
                  <td className="py-4 px-4 md:px-6">24 months</td>
                  <td className="py-4 px-4 md:px-6">£95</td>
                  <td className="py-4 px-4 md:px-6">✗</td>
                </tr>
              </tbody>
            </table>
            <div className="text-xs text-[var(--secondary-color)]/60 px-4 md:px-6 py-3">*Boiler cover and smart thermostat upgrades available on select tariffs. Contact us for details.</div>
          </div>
        </div>
      </section>

      {/* Benefits/Trust Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-[var(--background)]">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary-color)] mb-3">Why Choose Revo Utilities</h2>
          <p className="text-[var(--secondary-color)]/70 max-w-2xl mx-auto">We bring expertise and dedication to every client relationship</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          <Card className="h-full p-5 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-4">
              <Check size={24} className="text-[var(--primary-color)]" />
            </div>
            <h3 className="font-semibold text-[var(--secondary-color)] mb-2">Competitive Rates</h3>
            <p className="text-[var(--secondary-color)]/70 text-sm">Access to the UK's leading energy suppliers ensures you get the most competitive rates.</p>
          </Card>
          <Card className="h-full p-5 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-4">
              <Check size={24} className="text-[var(--primary-color)]" />
            </div>
            <h3 className="font-semibold text-[var(--secondary-color)] mb-2">10+ Years Experience</h3>
            <p className="text-[var(--secondary-color)]/70 text-sm">Over a decade of experience serving UK businesses with reliable energy solutions.</p>
          </Card>
          <Card className="h-full p-5 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-4">
              <Check size={24} className="text-[var(--primary-color)]" />
            </div>
            <h3 className="font-semibold text-[var(--secondary-color)] mb-2">Tailored Solutions</h3>
            <p className="text-[var(--secondary-color)]/70 text-sm">Custom solutions designed for your business needs and usage patterns.</p>
          </Card>
          <Card className="h-full p-5 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-4">
              <Check size={24} className="text-[var(--primary-color)]" />
            </div>
            <h3 className="font-semibold text-[var(--secondary-color)] mb-2">Dedicated Support</h3>
            <p className="text-[var(--secondary-color)]/70 text-sm">Free account management and personalised attention throughout your contract.</p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary-color)] mb-3">Frequently Asked Questions</h2>
            <p className="text-[var(--secondary-color)]/70 max-w-2xl mx-auto">Find answers to common questions about our utility comparison service</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[var(--secondary-color)]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-[var(--primary-color)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-[var(--secondary-color)]/80 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[var(--primary-color)]/30 to-[var(--secondary-color)]/10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-xl p-8 md:p-12">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-[var(--primary-color)] text-xs font-semibold tracking-widest uppercase mb-3">Our Main Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--secondary-color)]">Our Breakthrough Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover the key services and benefits that set Revo Utilities apart for your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Energy */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l8-12h-7V2z" fill="#F59E42"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Energy</h3>
              <p className="text-gray-500 text-sm">Competitive business energy rates and expert switching support.</p>
            </div>
            {/* Telecoms */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#3B82F6" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Telecoms</h3>
              <p className="text-gray-500 text-sm">Business broadband, phone, and connectivity solutions.</p>
            </div>
            {/* Merchant Services */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="2" fill="#10B981"/><rect x="7" y="10" width="2" height="2" fill="#fff"/><rect x="11" y="10" width="6" height="2" fill="#fff"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Merchant Services</h3>
              <p className="text-gray-500 text-sm">POS/EPOS solutions and payment processing.</p>
            </div>
            {/* Water & Waste */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" fill="#2563EB"/><rect x="6" y="16" width="12" height="4" rx="2" fill="#A3A3A3"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Water & Waste</h3>
              <p className="text-gray-500 text-sm">Combined water procurement and waste management.</p>
            </div>
            {/* Account Management */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#F59E42"/><rect x="6" y="14" width="12" height="6" rx="3" fill="#3B82F6"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Account Management</h3>
              <p className="text-gray-500 text-sm">Free, dedicated support for your business utilities.</p>
            </div>
            {/* Renewables */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v8m0 0l4-4m-4 4l-4-4" stroke="#10B981" strokeWidth="2"/><circle cx="12" cy="16" r="6" fill="#A3E635"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Renewables</h3>
              <p className="text-gray-500 text-sm">Solar, wind, and green energy solutions.</p>
            </div>
            {/* EV Solutions */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="12" width="16" height="6" rx="3" fill="#F59E42"/><circle cx="7" cy="18" r="2" fill="#3B82F6"/><circle cx="17" cy="18" r="2" fill="#3B82F6"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">EV Solutions</h3>
              <p className="text-gray-500 text-sm">Electric vehicle charging infrastructure and support.</p>
            </div>
            {/* Insurance */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="10" rx="2" fill="#F59E42"/><path d="M12 8v10" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Insurance</h3>
              <p className="text-gray-500 text-sm">Business insurance solutions through our partners.</p>
            </div>
            {/* Refrigeration Solutions */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="6" width="10" height="12" rx="2" fill="#3B82F6"/><rect x="11" y="10" width="2" height="4" fill="#fff"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Refrigeration Solutions</h3>
              <p className="text-gray-500 text-sm">Commercial refrigeration from Husky for efficient cooling.</p>
            </div>
            {/* Business Funding / Finance */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="8" rx="2" fill="#10B981"/><path d="M12 10v8" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-semibold text-[var(--secondary-color)] mb-1">Business Funding / Finance</h3>
              <p className="text-gray-500 text-sm">Flexible funding and finance options through our partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Your Business Potential Section (moved from Services) */}
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
    </div>
  );
};

export default Comparison;
