import React, { useContext } from 'react';

import { Button, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import firebase from 'firebase/compat/app';

import { navbarSize } from 'constants/consts';
import { Context } from 'context/context';

export const Login = (): any => {
  // @ts-ignore
  const { auth } = useContext(Context);

  const onLogin = async (): Promise<any> => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);

    console.log(user);
  };

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
            <Button onClick={onLogin}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
