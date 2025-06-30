import { Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  position?: string;
};

const TestimonialCard = ({ quote, author, position }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full transition-transform hover:-translate-y-1 duration-200">
      <div className="mb-4">
        <Quote className="h-8 w-8 text-[var(--primary-color)] opacity-70 mb-2" />
        <blockquote className="italic text-lg text-neutral-800 leading-relaxed">
          {quote}
        </blockquote>
      </div>
      <div className="flex items-center mt-auto pt-6">
        <div className="h-10 w-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-lg mr-3 shadow">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-neutral-900">{author}</p>
          {position && <p className="text-sm text-neutral-500">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
