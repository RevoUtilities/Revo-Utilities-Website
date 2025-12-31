import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, LifeBuoy, Rocket, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';
import Button from '../components/Button';
import { SEOManager, pageSEOConfigs } from '../utils/seoUtils';

const VIDEO_URL = 'https://docs.google.com/videos/d/1pYSdXdPtBe4D1d6pn19qS7S21qQ8RxXJYSjVPFIcOLM/edit?usp=sharing';
const PLACEHOLDER_IMAGE_SRC = '/logos/optimized/REVO-Brokers-Placeholder.webp';

const SubBrokerPartnerships = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    SEOManager.setupPageSEO(
      {
        ...pageSEOConfigs.partnerships,
        title: 'Sub-broker Partnerships | Grow with Revo Utilities',
        description:
          'Partner with Revo Utilities as a sub-broker. Expand your offering with our supplier network, dedicated support, and a partnership-first approach.',
        keywords:
          'sub broker, broker partnership, referral partners, introducer, utility broker network, business utilities partnership',
        structuredDataType: 'organization',
        robots: 'index, follow',
        breadcrumbs: SEOManager.generateBreadcrumbs(location.pathname),
      },
      location.pathname
    );
  }, [location.pathname]);

  const benefits = [
    {
      Icon: Zap,
      iconClassName: 'text-amber-600',
      iconBgClassName: 'bg-amber-500/10',
      title: 'Supplier access',
      description: 'Tap into our wider supplier and service partner ecosystem across key categories.',
    },
    {
      Icon: LifeBuoy,
      iconClassName: 'text-blue-600',
      iconBgClassName: 'bg-blue-500/10',
      title: 'Operational support',
      description: 'We reduce admin friction with a partnership model designed to keep delivery smooth.',
    },
    {
      Icon: Users,
      iconClassName: 'text-emerald-600',
      iconBgClassName: 'bg-emerald-500/10',
      title: 'Client-first approach',
      description: 'Transparent, service-led delivery that supports long-term retention.',
    },
    {
      Icon: Rocket,
      iconClassName: 'text-purple-600',
      iconBgClassName: 'bg-purple-500/10',
      title: 'Simple onboarding',
      description: 'A clear process with quick setup and a defined handover between teams.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-28 md:pt-36 pb-14 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></span>
              Partnerships
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-gray-900">
              Grow our <span className="text-[var(--secondary-color)]">sub-broker</span> network
            </h1>

            <p className="text-gray-700 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              If you already support businesses with utilities or whether you are a new broker or introducer, we’d love to explore a sub-broker partnership with you.
              Bring your experience — we’ll bring the infrastructure, supplier access and operational support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/partnerships" variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Back to Partnerships
              </Button>
              <Button href={VIDEO_URL} variant="outline" size="lg">
                Open overview video
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-2 shadow-sm">
                <TrendingUp className="w-4 h-4 text-[var(--primary-color)]" />
                <span className="text-sm text-gray-700 font-medium">Built for growth</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-2 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[var(--secondary-color)]" />
                <span className="text-sm text-gray-700 font-medium">Partnership-first</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary-color)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--secondary-color)]/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What a sub-broker partnership looks like</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Here is a small introduction to what a sub-broker partnership looks like. If you are interested in learning more, please contact us.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map(({ Icon, iconClassName, iconBgClassName, title, description }) => (
                  <div key={title} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgClassName} mb-4`}>
                      <Icon className={`w-6 h-6 ${iconClassName}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-4">What you can expect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Clear onboarding steps',
                    'Defined process & handover',
                    'Support when you need it',
                    'Aligned service standards',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <img
                    src={PLACEHOLDER_IMAGE_SRC}
                    alt="Sub-broker partnerships video placeholder"
                    className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                    <div className="text-white">
                      <p className="text-sm font-semibold">Watch overview (placeholder)</p>
                      <p className="text-xs text-white/90">Opens in Google Drive</p>
                    </div>
                    <div className="shrink-0 rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold">
                      Open
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[var(--primary-color)]/5 border border-[var(--primary-color)]/10">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                    <TrendingUp className="w-4 h-4 text-[var(--primary-color)]" />
                    Momentum
                  </div>
                  <div className="mt-2 text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-xs text-gray-600">Partner relationships</div>
                </div>
                <div className="p-5 rounded-2xl bg-[var(--secondary-color)]/5 border border-[var(--secondary-color)]/10">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[var(--secondary-color)]" />
                    Service
                  </div>
                  <div className="mt-2 text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Support-led approach</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>
                  Prefer to start from our main partnerships overview?{' '}
                  <a href="/partnerships" className="text-[var(--primary-color)] hover:underline">
                    Go back to Partnerships
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Want to explore a sub-broker partnership?</h2>
                <p className="text-gray-700">Start with our main partnerships page and we’ll take it from there.</p>
              </div>
              <div className="w-full md:w-auto">
                <Button
                  to="/partnerships"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto px-8 py-4 rounded-full font-semibold leading-none !border-2 !border-transparent whitespace-nowrap text-center !bg-none !bg-[var(--primary-color)] !text-black hover:!bg-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary-light)] !shadow-md"
                >
                  View Partnerships
                </Button>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <a href="mailto:partnerships@revo-utilities.com" className="text-[var(--primary-color)] hover:underline">
                partnerships@revo-utilities.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubBrokerPartnerships;
