import { ArrowRight, Mail, MapPin, Phone, CheckCircle, Loader } from 'lucide-react';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  serviceType: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormFeedback {
  visible: boolean;
  message: string;
  type: string;
}

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: 'electricity'
  });
  
  // Form validation state
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<FormFeedback>({ 
    visible: false, 
    message: '', 
    type: 'success' 
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    
    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim() && !/^[0-9\s+()-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set form feedback to success state
      setFormFeedback({
        visible: true,
        message: 'Thank you for your message! We\'ll be in touch soon.',
        type: 'success'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: 'electricity'
      });
    } catch (error) {
      setFormFeedback({
        visible: true,
        message: 'There was an error submitting your message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      
      // Hide feedback after 5 seconds
      setTimeout(() => {
        setFormFeedback(prev => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Removed animations */}
      <section 
        className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cover bg-center relative overflow-hidden" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80")' 
        }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              Get in <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">Touch</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              We're here to help with all your utility needs. Reach out to our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Removed animations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact Us
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mb-6 rounded-full"></div>
                <p className="text-gray-700 mb-8">
                  Fill out the form below and one of our utility experts will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Info Cards - Removed animations */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start p-5 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">+44 1234 567890</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">info@revoutilities.co.uk</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-gray-700">123 Business Park, London, UK</p>
                    <p className="text-gray-500 text-sm mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                {/* Form Success/Error Message */}
                {formFeedback.visible && formFeedback.type === 'success' && (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-6 flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-1">Message Sent!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. One of our team members will be in touch with you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Service Type Field */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                    >
                      <option value="electricity">Electricity</option>
                      <option value="gas">Gas</option>
                      <option value="water">Water</option>
                      <option value="telecoms">Telecoms</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Removed animations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our services and how we can help your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How does your service work?</h3>
              <p className="text-gray-700">
                We analyse your current utility usage and costs, then search the market for better deals. Once we find the best options, we handle the switching process for you, including all paperwork and coordination with suppliers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Is there a fee for your service?</h3>
              <p className="text-gray-700">
                Our service is completely free for businesses. We're paid by the suppliers when we help you switch, which means we're incentivized to find you the best deals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How much can I save?</h3>
              <p className="text-gray-700">
                Savings vary depending on your current rates and usage, but our clients typically save 10-15% on their utility costs. We'll provide a detailed breakdown of potential savings before you make any decisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How long does the switching process take?</h3>
              <p className="text-gray-700">
                The switching process typically takes 4-6 weeks, but this can vary depending on your current contract terms and the supplier you're switching to. We'll keep you informed throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Removed animations */}
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

export default Contact;
