import React from 'react';

import './App.css';

import { AppRoutes } from 'components/AppRoutes/AppRoutes';
import { Navbar } from 'components/Navbar/Navbar';

const App = (): any => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
