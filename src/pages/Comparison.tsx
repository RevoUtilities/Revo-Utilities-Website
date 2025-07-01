import { ArrowRight, Check, Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/ui/Input';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials, Testimonial } from '../data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/ui/Card';

const TESTIMONIAL_SCROLL_SPEED = 30; // pixels per second (slow breeze)

const Comparison = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Calculate the width of one testimonial card (approximate, for smooth loop)
  // We'll use a fixed width for each card for simplicity
  const cardWidth = 380; // px
  const gap = 32; // px (Tailwind gap-8)
  const totalCards = testimonials.length;
  const totalWidth = totalCards * (cardWidth + gap);
  const animationDuration = totalWidth / TESTIMONIAL_SCROLL_SPEED;

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
      question: "What happens if I&apos;m in a fixed-term contract?",
      answer: "If you&apos;re in a fixed-term contract, we can still help you plan your switch for when your contract ends. We&apos;ll note your contract end date and contact you before it expires to ensure a smooth transition to a better deal."
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
            <p className="text-[var(--secondary-color)]/70 text-sm">Access to the UK&apos;s leading energy providers ensures you get the most competitive rates.</p>
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

      {/* Testimonials Section - horizontal auto-scrolling loop */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-[var(--primary-color)]/5">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--secondary-color)] mb-3">What Our Clients Say</h2>
          <p className="text-[var(--secondary-color)]/80 text-base md:text-lg">Trusted by businesses across the UK</p>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6 lg:gap-8 w-max px-2"
            style={{ width: totalWidth * 2 }}
            animate={{ x: [0, -totalWidth] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: animationDuration * 2, // double for two loops
            }}
          >
            {/* Render two sets for seamless infinite loop */}
            {[...testimonials, ...testimonials].map((t: Testimonial, i: number) => (
              <div key={i} className="w-[280px] sm:w-[320px] md:w-[360px]" style={{ maxWidth: cardWidth }}>
                <TestimonialCard quote={t.quote} author={t.author} position={t.position || ''} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comparison;
