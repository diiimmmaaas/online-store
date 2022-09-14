import React, { useContext } from 'react';

import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';

import { LOGIN_ROUTE } from 'constants/consts';
import { AppContextType, Context } from 'context/context';

export const Navbar = (): any => {
  // @ts-ignore
  const { auth } = useContext<AppContextType | null>(Context);
  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant={'dense'}>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <Button onClick={() => auth.signOut()} variant={'outlined'} color="inherit">
                Logout
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={'outlined'} color="inherit">
                  Login
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
