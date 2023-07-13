import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeDiv, setActiveDiv] = useState(0);

  const contextValue = {
    activeDiv,
    setActiveDiv

   
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;