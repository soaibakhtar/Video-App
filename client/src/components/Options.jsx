import React, { useContext, useState } from 'react'
import {Button,TextField, Grid, Typography, Container, Paper} from "@mui/material"
import { styled } from '@mui/system'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {Assignment, Phone, PhoneDisabled} from "@mui/icons-material"

import {SocketContext} from "../SocketContext"

function Options({children}) {
  const {me, callAccepted, name, setName, leaveCall, callUser, callEnded} = useContext(SocketContext)
  const [idToCall,setIdToCall] = useState('');




  return (
    <Container>
      <Paper elevation={10}>
          <form noValidate autoComplete='off'>
              <Grid container>
                  <Grid item xs={12} md={6}>
                      <Typography gutterBottom variant='h6'> Account Info </Typography>
                      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                      <CopyToClipboard text={me}>
                          <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize="large"/>}>
                                  Copy Your Id
                          </Button>
                      </CopyToClipboard>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <Typography gutterBottom variant='h6'> Make a Call </Typography>
                      <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth/>
                      {callAccepted && !callEnded ? (<Button variant='contained' color='secondary' startIcon={<PhoneDisabled fontSize='large'/>} fullWidth onClick={leaveCall}>Hang Up</Button>) : (<Button variant='contained' color='primary' startIcon={<Phone fontSize='large'/>} fullWidth onClick={() => callUser(idToCall)} >Call</Button>)}
                  </Grid>
              </Grid>
          </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options