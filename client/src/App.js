import React from 'react';
import './App.css';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',

  [theme.breakpoints.down('xs')]: {
    width: '90%',
  },
}));

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

function App() {
  return (
    <Wrapper>
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </StyledAppBar>

      {/* Components */}
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Wrapper>
  );
}

export default App;
