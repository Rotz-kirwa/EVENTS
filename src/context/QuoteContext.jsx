import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuoteContext = createContext(null);

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SERVICE':
      return {
        ...state,
        services: [...state.services, action.payload],
      };
    case 'REMOVE_SERVICE':
      return {
        ...state,
        services: state.services.filter(s => s.id !== action.payload),
      };
    case 'UPDATE_SERVICE':
      return {
        ...state,
        services: state.services.map(s =>
          s.id === action.payload.id ? { ...s, ...action.payload.updates } : s
        ),
      };
    case 'SET_EVENT_DETAILS':
      return {
        ...state,
        eventDetails: { ...state.eventDetails, ...action.payload },
      };
    case 'CLEAR_QUOTE':
      return initialState;
    case 'LOAD_QUOTE':
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  services: [],
  eventDetails: {
    eventType: '',
    eventDate: '',
    guestCount: 0,
    venue: '',
    budget: '',
  },
};

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);
  
  // Load quote from localStorage on mount
  useEffect(() => {
    const savedQuote = localStorage.getItem('quote');
    if (savedQuote) {
      try {
        dispatch({ type: 'LOAD_QUOTE', payload: JSON.parse(savedQuote) });
      } catch (err) {
        console.error('Error loading saved quote:', err);
      }
    }
  }, []);
  
  // Save quote to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(state));
  }, [state]);
  
  const addService = (service) => {
    dispatch({ type: 'ADD_SERVICE', payload: service });
  };
  
  const removeService = (serviceId) => {
    dispatch({ type: 'REMOVE_SERVICE', payload: serviceId });
  };
  
  const updateService = (serviceId, updates) => {
    dispatch({ type: 'UPDATE_SERVICE', payload: { id: serviceId, updates } });
  };
  
  const setEventDetails = (details) => {
    dispatch({ type: 'SET_EVENT_DETAILS', payload: details });
  };
  
  const clearQuote = () => {
    dispatch({ type: 'CLEAR_QUOTE' });
    localStorage.removeItem('quote');
  };
  
  const calculateTotal = () => {
    return state.services.reduce((total, service) => {
      const price = parseFloat(service.price) || 0;
      const quantity = service.quantity || 1;
      return total + (price * quantity);
    }, 0);
  };
  
  const value = {
    services: state.services,
    eventDetails: state.eventDetails,
    addService,
    removeService,
    updateService,
    setEventDetails,
    clearQuote,
    calculateTotal,
    itemCount: state.services.length,
  };
  
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};

QuoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export default QuoteContext;
