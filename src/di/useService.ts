import { useContext } from 'react';
import { DIContext } from './context';
import type { DIContainer, ServiceRegistry } from './Container';

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
