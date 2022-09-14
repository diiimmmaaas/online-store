import { createContext } from 'react';

type AppContextType = {
  firebase?: any;
  auth?: any;
  firestore?: any;
};

export const Context = createContext<AppContextType | null>(null);
