type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company?: string;
};

const TestimonialCard = ({ quote, author, position, company }: TestimonialProps) => {
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="text-[var(--primary-color)] mb-4 text-3xl">"</div>
      <blockquote className="text-gray-700 mb-6 italic">
        {quote}
      </blockquote>
      <div className="flex items-center">
        <div className="h-10 w-10 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-600">{position}{company ? `, ${company}` : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
