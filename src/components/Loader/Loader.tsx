import React from 'react';

import { Container, Grid } from '@mui/material';

import 'components/Loader/Loader.css';
import { navbarSize } from 'constants/consts';

export const Loader = (): any => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - navbarSize }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid container alignItems={'center'} direction={'column'}>
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};
