import React, { useContext, useState } from 'react';

import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Loader } from 'components/Loader/Loader';
import { navbarSize } from 'constants/consts';
import { AppContextType, Context } from 'context/context';

export const Chat = (): any => {
  // @ts-ignore
  const { auth, firestore } = useContext<AppContextType | null>(Context);

  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );

  const [value, setValue] = useState<string>('');

  const sendMessage = async (): Promise<any> => {
    firestore.collection('messages').add({
      uid: user?.uid,
      displayName: user?.displayName,
      photoUrl: user?.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - navbarSize }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <div
          style={{
            width: '80%',
            height: '60vh',
            border: '1px solid gray',
            borderRadius: '10px',
            overflowY: 'auto',
          }}
        >
          {messages!.map((message, index) => (
            <div
              style={{
                margin: '10px',
                border:
                  user!.uid === message.uid
                    ? '2px solid' + ' green'
                    : '2px' + ' dashed red',
                marginLeft: user!.uid === message.uid ? 'auto' : '10px',
                width: 'fit-content',
                padding: 5,
              }}
              key={index}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '80%' }}
        >
          <TextField
            variant={'outlined'}
            fullWidth
            maxRows={2}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button
            style={{ marginTop: '10px' }}
            variant={'outlined'}
            onClick={sendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
