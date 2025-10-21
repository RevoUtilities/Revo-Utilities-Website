// ResponsiveImage removed as it's unused
import { Mail, Linkedin, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { SEOManager, pageSEOConfigs } from '../utils/seoUtils';
import { useLocation } from 'react-router-dom';
import { getGradientTextClass } from '../utils/browserDetection';

// Hide scrollbar utility class

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const subject = `Enquiry for ${member.name} - Revo Utilities`;
  const body = `Hi Revo Utilities Team,%0A%0AI'd like to speak with ${member.name} regarding business utilities.%0A%0ACompany: %0APhone: %0A%0AThanks,`;
  const emailHref = `mailto:admin@revo-utilities.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  return (
  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden h-full w-full max-w-[400px] transition-all duration-300 border border-gray-100">
    <div className="aspect-[4/3] relative overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
      <p className="text-[var(--primary-color)] font-medium mb-3 text-sm uppercase tracking-wide">{member.role}</p>
      <p className="text-gray-600 mb-6 leading-relaxed text-sm" title={member.bio}>{member.bio}</p>
      <div className="flex gap-3 pt-2 border-t border-gray-100">
        <a href="https://www.linkedin.com/company/revo-utilities/people/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--primary-color)]/10 hover:bg-[var(--primary-color)] hover:text-white rounded-full transition-all duration-200 group/link" aria-label={`LinkedIn profile of ${member.name}`}>
          <Linkedin size={16} className="text-[var(--primary-color)] group-hover/link:text-white" />
        </a>
        <a href={emailHref} className="p-2 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-full transition-all duration-200 group/link" aria-label={`Email ${member.name}`}>
          <Mail size={16} className="text-gray-600 group-hover/link:text-white" />
        </a>
      </div>
    </div>
  </div>
  );
};

const Team = () => {
  const [gradientTextClass, setGradientTextClass] = useState('gradient-text');
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Set appropriate gradient text class based on browser
    setGradientTextClass(getGradientTextClass());
  }, []);

  useEffect(() => {
    SEOManager.setupPageSEO(
      {
        ...pageSEOConfigs.team,
        title: 'Meet the Team | Utility Consultants | Revo Utilities',
        description:
          'Meet the Revo Utilities team—experienced utility consultants helping UK businesses reduce costs on gas, electricity, water, and telecoms.',
        keywords: 'utility consultants UK, energy experts team, business utility advisors, Revo Utilities team',
        structuredDataType: 'organization',
        robots: 'index, follow',
        breadcrumbs: SEOManager.generateBreadcrumbs(location.pathname),
      },
      location.pathname
    );
  }, [location.pathname]);

  const teamMembers: TeamMember[] = [

    {
      name: 'Ryan Hughes-Francis',
      role: 'Business Operations Director',
      bio: 'Leading REVO Utilities with his drive, focus and passion.  His mission is to offer sustainability and give time back to businesses across the UK to thrive in economical challenging times.  Understanding every client is at the forefront of what we strive to achieve.',
      imageUrl: '/logos/Revo/team/optimized/ryan-revo.webp'
    },
    {
      name: 'Graham Fisher',
      role: 'Managing Director',
      bio: 'Our MD for the REVO Group has been a business for a life time growing and help the organisation sustainability across Scotland and now supporting REVO Utilities in it’s venture to become the UK wide preferred partner for any business',
      imageUrl: '/logos/Revo/team/optimized/graham-revo.webp'
    },
    {
      name: 'Jade Brown',
      role: 'Head of Business Support',
      bio: 'Jade is an experienced Business Support professional with experience at both Corporate and SME level. She supports our clients from the initial enquiry and throughout, helping prepare quotes, processing contracts and renewals and dealing with any enquiries or issues that may arise.',
      imageUrl: '/logos/Revo/team/optimized/jade-revo.webp'
    },
    {
      name: 'Cassidy Erwin',
      role: 'Senior Business Support',
      bio: 'Cassidy is Revo Utilities Senior Business Support professional. She is also a trainee business development manager and is passionate about helping businesses reduce costs and improve their energy efficiency.',
      imageUrl: '/logos/Revo/team/optimized/cassidy-revo.webp'
    },
    {
      name: 'Elliot Goppy',
      role: 'Business Development Manager',
      bio: 'Elliot brings extensive experience in the telecoms sector across the UK. As our Business Development Manager, he focuses on expanding partnerships and delivering innovative telecom solutions to help businesses stay connected and competitive.',
      imageUrl: '/logos/Revo/team/optimized/elliot-revo.webp'
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Meet Our <span className={gradientTextClass}>Team</span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
              Meet the dedicated professionals with a personable approach, striving to support your business in every way, so you can focus on what matters most.
            </p>
            <Button to="/comparison" variant="primary" size="lg" icon={<ChevronRight size={20} />}>
              Work with us
            </Button>
          </div>
        </div>
        {/* Subtle bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Leadership</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the experts behind Revo Utilities&apos; success, each bringing unique expertise and passion to serve our clients
            </p>
          </div>

          {/* Enhanced grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Louise Moriarty",
                timeAgo: "2 weeks ago",
                review: "Been using ryan for past 3 years nothing to much trouble absolutely brilliant company",
                rating: 5
              },
              {
                name: "Caulton Cuffy",
                timeAgo: "4 months ago",
                review: "Fantastic service, very charismatic sales man, gave me everything i needed at a price cheaper than the market rate. Thank you REVO",
                rating: 5
              },
              {
                name: "Gamal Sakban",
                timeAgo: "4 months ago",
                review: "Incredibly friendly and professional. Best in the industry, highly recommend!",
                rating: 5
              },
              {
                name: "Shannon Thomson",
                timeAgo: "4 months ago",
                review: "Ryan is so friendly and professional! Would definitely recommend",
                rating: 5
              },
              {
                name: "Mya Reid",
                timeAgo: "4 months ago",
                review: "Super friendly and helpful. Offers very competitive rates, best about!",
                rating: 5
              },
              {
                name: "Erica Jeffers",
                timeAgo: "4 months ago",
                review: "Excellent experience, professional, courteous and saved me money",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{review.review}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.timeAgo}</p>
                  </div>
                  <div className="w-10 h-10 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
                    <span className="text-[var(--primary-color)] font-semibold text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values - Split Screen Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Foundation</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The mission, vision, and values that drive everything we do at Revo Utilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Mission & Vision */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At REVO Utilities, our mission is to empower businesses with utility solutions that drive efficiency, cost-effectiveness, and peace of mind. We simplify the complexities of utility procurement, offering tailored contracts that provide the best value and ongoing support, giving our clients more time to focus on what matters most—their growth and success.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary-color)] pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We strive to be the best at what we do and to those we serve. Our goal is to create a one-stop solution for any new or existing business, and to be the first point of call for all the businesses we service. Our vision is to create a future where utility solutions are accessible, affordable, and sustainable, enabling businesses of all sizes to thrive.
                </p>
              </div>
            </div>

            {/* Right Side - Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
                    <p className="text-gray-600 leading-relaxed">We build trust by delivering transparent, honest, and reliable services that put our clients&apos; interests first.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer-Centricity</h4>
                    <p className="text-gray-600 leading-relaxed">Our clients are at the heart of everything we do. We strive to exceed their expectations with personalised and innovative solutions, always on hand to provide support when needed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h4>
                    <p className="text-gray-600 leading-relaxed">We are committed to helping our clients&apos; businesses become sustainable with eco-friendly solutions and supporting them for life.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">We aim for the highest standards in everything we do, from customer service to delivering the best utility contracts and prices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[var(--primary-color)] rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 leading-relaxed">We are forward thinkers, continually seeking better ways to serve our clients with the latest in utility insights and trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-[var(--primary-color)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Interested in joining our team?</h2>
              <p className="text-white/80">We&apos;re always looking for talented individuals to help us grow.</p>
            </div>
            <a
              href="mailto:ryan@revo-utilities.com?subject=Career%20Opportunity%20Inquiry&body=Hi%20Ryan%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20career%20opportunities%20at%20Revo%20Utilities.%20I%20would%20love%20to%20discuss%20how%20I%20can%20contribute%20to%20your%20team.%0A%0AThank%20you%20for%20your%20time%2C%0A%0ABest%20regards"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-200"
            >
              Get In Touch
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
