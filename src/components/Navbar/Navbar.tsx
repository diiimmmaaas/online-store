import React from 'react';

import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

import { LOGIN_ROUTE } from 'constants/consts';

export const Navbar = (): any => {
  const user = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant={'dense'}>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <Button variant={'outlined'} color="inherit">
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
