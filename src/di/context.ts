import { createContext } from 'react';
import type { DIContainer } from './Container';

export const DIContext = createContext<DIContainer | null>(null);
