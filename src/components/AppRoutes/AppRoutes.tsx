import React, { useContext } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CHAT_ROUTE, LOGIN_ROUTE } from 'constants/consts';
import { AppContextType, Context } from 'context/context';
import { privateRoutes, publicRoutes } from 'routes/routes';

export const AppRoutes = (): any => {
  // @ts-ignore
  const { auth } = useContext<AppContextType | null>(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.Component />} />
      ))}
      <Route path={'/*'} element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.Component />} />
      ))}
      <Route path={'/*'} element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
