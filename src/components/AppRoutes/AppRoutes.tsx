import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { CHAT_ROUTE, LOGIN_ROUTE } from 'constants/consts';
import { privateRoutes, publicRoutes } from 'routes/routes';

export const AppRoutes = (): any => {
  const user = false;

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
