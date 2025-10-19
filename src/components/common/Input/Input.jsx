import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  label,
  type = 'text',
  error,
  helperText,
  icon,
  fullWidth = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'px-4 py-3 border rounded-lg transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <div className={`${widthClass} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`${baseStyles} ${errorStyles} ${icon ? 'pl-10' : ''} ${widthClass}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
