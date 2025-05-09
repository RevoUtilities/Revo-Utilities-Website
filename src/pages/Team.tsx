// ResponsiveImage removed as it's unused
import { Mail, Linkedin, ChevronRight, Target, Shield, BookOpen, Heart } from 'lucide-react';
import Button from '../components/Button';
import { useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const Team = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Removed the mouse movement tracking that was updating navbar classes
  }, []);
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Ryan Hughes-Francis',
      role: 'Director',
      bio: 'Leading our strategic vision and operations with extensive experience in the utilities sector.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3'
    },
    {
      name: 'Graham Fisher',
      role: 'Director',
      bio: 'Overseeing our client relationships and service delivery with a focus on customer satisfaction.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
    },
    {
      name: 'Sarah Johnson',
      role: 'Energy Consultant',
      bio: 'specialised in finding the best energy deals for businesses of all sizes.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3'
    },
    {
      name: 'David Chen',
      role: 'Sustainability Expert',
      bio: 'Helping businesses reduce their carbon footprint while optimizing energy usage.',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'We put our clients at the center of everything we do, ensuring solutions that truly meet their needs.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in every interaction and transaction.'
    },
    {
      icon: BookOpen,
      title: 'Expertise',
      description: 'Our team continuously develops their knowledge to provide the most current and effective solutions.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'We\'re committed to promoting environmentally responsible choices throughout our service offerings.'
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
              Our experienced professionals are dedicated to finding the best utility solutions for your business
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={<ChevronRight size={20} />}>
              Work with us
            </Button>
          </div>
        </div>
      </section>

      {/* Team Members Section - Removed animations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the experts behind Revo Utilities' success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
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
                    <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <Linkedin size={18} className="text-gray-700" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <Mail size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Removed animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light)] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at Revo Utilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 border border-gray-200 rounded-lg h-full">
                  <div className="w-14 h-14 mb-6 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--primary-color)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA - Removed animations */}
      <section className="py-16 bg-[var(--primary-color)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Interested in joining our team?</h2>
              <p className="text-white/80">We're always looking for talented individuals to help us grow.</p>
            </div>
            <Button to="/contact" variant="outline" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
