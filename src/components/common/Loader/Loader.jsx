import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Loader = ({ size = 'md', color = 'gold', fullScreen = false }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };
  
  const colors = {
    gold: 'border-gold',
    navy: 'border-navy',
    burgundy: 'border-burgundy',
    white: 'border-white',
  };
  
  const spinner = (
    <motion.div
      className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        {spinner}
      </div>
    );
  }
  
  return spinner;
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['gold', 'navy', 'burgundy', 'white']),
  fullScreen: PropTypes.bool,
};

export default Loader;
