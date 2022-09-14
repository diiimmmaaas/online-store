import React, { useContext } from 'react';

import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { Loader } from 'components/Loader/Loader';
import { Navbar } from 'components/Navbar/Navbar';
import { AppContextType, Context } from 'context/context';

const App = (): any => {
  // @ts-ignore
  const { auth } = useContext<AppContextType | null>(Context);
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
