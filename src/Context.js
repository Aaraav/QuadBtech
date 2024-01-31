import React, { createContext, useState } from 'react';

// Create a context
 export const SummaryContext = createContext();

// Create a provider component
export const SummaryProvider = ({ children }) => {
  const [currentSummary, setCurrentSummary] = useState('');

  

  return (
    <SummaryContext.Provider value={{ setCurrentSummary, currentSummary }}>
      {children}
    </SummaryContext.Provider>
  );
};

export default {SummaryContext,SummaryProvider}



