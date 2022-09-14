import { createContext } from 'react';

import firebase from 'firebase/compat/app';

export type AppContextType = {
  firebase: typeof firebase;
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
};

export const Context = createContext<AppContextType | null>(null);
