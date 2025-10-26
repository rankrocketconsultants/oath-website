import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-block font-semibold text-body rounded-oath-md transition-all duration-150 hover:transform hover:-translate-y-0.5";

  const variants = {
    primary: "bg-gradient-to-br from-oath-emerald-primary to-oath-emerald-deep text-white px-8 py-oath-lg shadow-oath-md hover:shadow-oath-lg",
    secondary: "border-2 border-oath-emerald-primary text-oath-emerald-primary px-8 py-3 hover:bg-oath-emerald-surface",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
