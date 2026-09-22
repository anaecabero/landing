import type { ReactNode } from 'react';
import { DIContainer } from './Container';
import { DIContext } from './context';

interface DIProviderProps {
  children: ReactNode;
  container?: DIContainer;
}

export const DIProvider = ({ 
  children, 
  container = DIContainer.getInstance() 
}: DIProviderProps) => {
  return (
    <DIContext.Provider value={container}>
      {children}
    </DIContext.Provider>
  );
};
