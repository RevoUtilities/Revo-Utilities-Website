import Button from '../components/Button';
import Container from '../components/ui/Container';
import ResponsiveImage from '../components/ResponsiveImage';

const NotFound = () => {
  return (
    <div className="bg-[var(--background)] min-h-screen font-sans">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="text-6xl md:text-8xl font-bold text-[var(--primary-color)] block">404</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--secondary-color)] mt-4 mb-4">
                Page Not Found
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Looks like this page has gone off-grid! Don't worry though - we can help you find what you're looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button to="/" variant="primary" size="lg" className="text-lg px-8 py-4">
                Back to Home
              </Button>
              <Button to="/comparison" variant="secondary" size="lg" className="text-lg px-8 py-4">
                Get Energy Quote
              </Button>
            </div>

            {/* Helpful links */}
            <div className="text-center lg:text-left">
              <p className="text-neutral-600 mb-4">Or try one of these popular pages:</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button to="/services" variant="outline" size="sm">Our Services</Button>
                <Button to="/blog" variant="outline" size="sm">Latest Insights</Button>
                <Button to="/team" variant="outline" size="sm">Meet the Team</Button>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="flex-1 max-w-lg w-full relative">
            <div className="relative">
              <ResponsiveImage
                src="/images/optimized/hero-800w.webp"
                alt="Renewable energy infrastructure"
                className="rounded-3xl shadow-2xl border-4 border-white/50 opacity-75"
                imgClassName="rounded-3xl object-cover"
                width={600}
                height={600}
              />
              
              {/* Overlay message */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🔍</div>
                  <p className="text-neutral-700 font-medium">
                    Let's get you back on track
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;