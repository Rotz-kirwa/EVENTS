import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({
  children,
  hover = false,
  padding = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md transition-all duration-normal';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const Component = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { y: -4 },
    transition: { duration: 0.3 },
  } : {};
  
  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
