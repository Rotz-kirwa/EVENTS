import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FilterBar = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            activeFilter === category.id
              ? 'bg-gold text-navy shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
          <span className="ml-2 text-sm opacity-75">({category.count})</span>
        </motion.button>
      ))}
    </div>
  );
};

FilterBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;
