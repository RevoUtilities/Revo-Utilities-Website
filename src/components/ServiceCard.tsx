import { ReactNode } from 'react';
import Button from './Button';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
};

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col justify-between">
      <div>
        <div className="h-14 w-14 bg-gradient-to-br from-[var(--primary-color)]/90 to-[var(--primary-dark)]/80 rounded-2xl flex items-center justify-center mb-5 text-black shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
      </div>
      <div className="mt-auto">
        <Button to={link} variant="outline" size="sm">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
