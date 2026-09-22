import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { DIContainer } from './Container';
import type { ServiceRegistry } from './Container';

const DIContext = createContext<DIContainer | null>(null);

interface DIProviderProps {
  children: ReactNode;
  container?: DIContainer;
}

export const DIProvider: React.FC<DIProviderProps> = ({ 
  children, 
  container = DIContainer.getInstance() 
}) => {
  return (
    <DIContext.Provider value={container}>
      {children}
    </DIContext.Provider>
  );
};

export const useDI = (): DIContainer => {
  const context = useContext(DIContext);
  if (!context) {
    throw new Error('useDI debe ser usado dentro de un <DIProvider>');
  }
  return context;
};

export const useService = <K extends keyof ServiceRegistry>(key: K): ServiceRegistry[K] => {
  const container = useDI();
  return container.get(key);
};
