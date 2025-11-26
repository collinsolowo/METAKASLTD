import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:border-metakas-accent hover:border-opacity-50' : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`${baseClasses} ${hoverClasses} border border-transparent ${className}`}
    >
      {children}
    </motion.div>
  );
};
