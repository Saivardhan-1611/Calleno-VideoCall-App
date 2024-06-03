import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  Typo:{
    fontFamily: "Montserrat",
  },
  button:{
    backgroundColor: '#0e78f9ff',
    fontFamily: "Montserrat",
    borderRadius: '10px',
    color:'white',
    marginTop: 20,
    '&:hover': {
      backgroundColor: '#0e78f9ff',
  },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  hangButton:{
    marginTop: 20,
    backgroundColor: "#de3d3d",
    fontFamily: "Montserrat",
    color:'white',
    '&:hover': {
      backgroundColor: '#de3d3d',
  },
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6" className={classes.Typo}>Account Info</Typography>
              <TextField label="Name" className={classes.Typo} value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className={classes.button}>
                <Button variant="contained" fullWidth startIcon={<Assignment fontSize="large" />} className={classes.button}>
                  Copy ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6" className={classes.Typo}>Make a call</Typography>
              <TextField label="ID to call" value={idToCall} className={classes.Typo} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.hangButton}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained"  startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.button}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;