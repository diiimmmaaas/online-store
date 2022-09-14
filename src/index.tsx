import React, { createContext } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBkBgyI9agYBnZb7cJ9-rOd87Ysp8d5GCw',
  authDomain: 'online-store-4a966.firebaseapp.com',
  projectId: 'online-store-4a966',
  storageBucket: 'online-store-4a966.appspot.com',
  messagingSenderId: '452378656062',
  appId: '1:452378656062:web:6deb7c604200713396006f',
  measurementId: 'G-WKKJ74KTF6',
});

type AppContextType = {
  firebase: any;
  auth: any;
  firestore: any;
};

const Context = createContext<AppContextType | null>(null);

const auth = firebase.auth();
const firestore = firebaseApp.firestore();

root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>,
);
