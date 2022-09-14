import React from 'react';

import { Button, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';

import { navbarSize } from 'constants/consts';

export const Login = (): any => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - navbarSize }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          container
          alignItems={'center'}
          direction={'column'}
          style={{ width: '400', background: 'lightgray' }}
        >
          <Box p={5}>
            <Button>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
