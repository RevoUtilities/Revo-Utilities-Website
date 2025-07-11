// ResponsiveImage removed as it's unused
import { Mail, Linkedin, ChevronRight, Target, Shield, BookOpen, Heart } from 'lucide-react';
import Button from '../components/Button';
import { useEffect } from 'react';

// Hide scrollbar utility class

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full w-[320px]">
    <div className="aspect-[3/4] relative overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="object-cover w-full h-full transform scale-[1.02]"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-[var(--primary-color)] font-medium mb-3">{member.role}</p>
      <p className="text-gray-700 mb-4">{member.bio}</p>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/company/revo-utilities/people/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" aria-label={`LinkedIn profile of ${member.name}`}>
          <Linkedin size={18} className="text-gray-700" />
        </a>
        <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" aria-label={`Email ${member.name}`}>
          <Mail size={18} className="text-gray-700" />
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Removed the mouse movement tracking that was updating navbar classes
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: 'Graham Fisher',
      role: 'Managing Director',
      bio: 'Our MD for the REVO Group has been a business for a life time growing and help the organisation sustainability across Scotland and now supporting REVO Utilities in it’s venture to become the UK wide preferred partner for any business',
      imageUrl: '/logos/Revo/team/optimized/graham-revo.webp'
    },
    {
      name: 'Ryan Hughes-Francis',
      role: 'Business Operations Director',
      bio: 'Leading REVO Utilities with his drive, focus and passion.  His mission is to offer sustainability and give time back to businesses across the UK to thrive in economical challenging times.  Understanding every client is at the forefront of what we strive to achieve.',
      imageUrl: '/logos/Revo/team/optimized/ryan-revo.webp'
    },
    {
      name: 'Jade Brown',
      role: 'Head of Business Support',
      bio: 'Jade is an experienced Business Support professional with experience at both Corporate and SME level. She supports our clients from the initial enquiry and throughout, helping prepare quotes, processing contracts and renewals and dealing with any enquiries or issues that may arise.  Jade is dedicated to going the extra mile to solve problems with keen attention to detail, ensuring the team is full supported.',
      imageUrl: '/logos/Revo/team/optimized/jade-revo.webp'
    },
    {
      name: 'Lisa McKay',
      role: 'Business Development Manager',
      bio: 'Lisa is a Business Development Manager with over 10 years experience in the utilities sector. She is responsible for identifying and pursuing new business opportunities, building relationships with potential clients and negotiating contracts. Lisa is focused on the growth of REVO Utilities and helping businesses save money on their energy bills.',
      imageUrl: '/logos/Revo/team/optimized/lisa-revo.webp'
    },
    {
      name: 'Cassidy Erwin',
      role: 'Senior Business Support',
      bio: 'Cassidy is Revo Utilities Senior Business Support professional. She is also a trainee business development manager and is passionate about helping businesses reduce costs and improve their energy efficiency.',
      imageUrl: '/logos/Revo/team/optimized/cassidy-revo.webp'
    }
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Removed animations */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Meet Our <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)]">Team</span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Meet the dedicated professionals with a personable approach, striving to support your business in every way, so you can focus on what matters most.
            </p>
            <Button to="/comparison" variant="primary" size="lg" icon={<ChevronRight size={20} />}>
              Work with us
            </Button>
          </div>
        </div>
      </section>

      {/* Team Members Section - Modern responsive grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the experts behind Revo Utilities&apos; success
            </p>
          </div>

          {/* Responsive grid for team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Mission & Vision</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">Our purpose and direction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <span className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] font-bold px-4 py-1 rounded-full mb-4 text-sm tracking-wide">Mission</span>
              <p className="text-gray-800 text-lg">At REVO Utilities, our mission is to empower businesses with utility solutions that drive efficiency, cost-effectiveness, and peace of mind. We simplify the complexities of utility procurement, offering tailored contracts that provide the best value and ongoing support, giving our clients more time to focus on what matters most—their growth and success.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <span className="inline-block bg-[var(--primary-light)]/10 text-[var(--primary-light)] font-bold px-4 py-1 rounded-full mb-4 text-sm tracking-wide">Vision</span>
              <p className="text-gray-800 text-lg">We strive to be the best at what we do and to those we serve. Our goal is to create a one-stop solution for any new or existing business, and to be the first point of call for all the businesses we service. Our vision is to create a future where utility solutions are accessible, affordable, and sustainable, enabling businesses of all sizes to thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Updated to match new client copy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at Revo Utilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg h-full flex flex-col items-center text-center">
              <Shield className="w-6 h-6 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-700">We build trust by delivering transparent, honest, and reliable services that put our clients' interests first.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg h-full flex flex-col items-center text-center">
              <Heart className="w-6 h-6 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer-Centricity</h3>
              <p className="text-gray-700">Our clients are at the heart of everything we do. We strive to exceed their expectations with personalised and innovative solutions, always on hand to provide support when needed.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg h-full flex flex-col items-center text-center">
              <BookOpen className="w-6 h-6 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-700">We are committed to helping our clients' businesses become sustainable with eco-friendly solutions and supporting them for life.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg h-full flex flex-col items-center text-center">
              <Target className="w-6 h-6 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-700">We aim for the highest standards in everything we do, from customer service to delivering the best utility contracts and prices.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg h-full flex flex-col items-center text-center">
              <Linkedin className="w-6 h-6 text-[var(--primary-color)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">We are forward thinkers, continually seeking better ways to serve our clients with the latest in utility insights and trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA - Removed animations */}
      <section className="py-16 bg-[var(--primary-color)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Interested in joining our team?</h2>
              <p className="text-white/80">We&apos;re always looking for talented individuals to help us grow.</p>
            </div>
            <Button to="/comparison" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
