import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Context } from 'context/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCuggcmfZQbEFqmeph5bekY5hBUy-MSLSU',
  authDomain: 'real-chat-e910d.firebaseapp.com',
  projectId: 'real-chat-e910d',
  storageBucket: 'real-chat-e910d.appspot.com',
  messagingSenderId: '23331031174',
  appId: '1:23331031174:web:c0e8bf2818e3d031d36907',
  measurementId: 'G-7RECF4JMYD',
});

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
