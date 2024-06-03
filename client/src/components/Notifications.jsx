import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  Typo:{
    fontFamily: "Montserrat",
  },
  button:{

    marginRight:30,
    backgroundColor: '#5cdb5c',
    fontFamily: "Montserrat",
    borderRadius: '10px',
    color:'black',
    '&:hover': {
      backgroundColor: '#279704',
      color:'white',
  },
},
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant="h6" className={classes.Typo}> Incoming call from {call.name || 'your Friend'}</Typography>
          <Button style={{maxWidth: '90px', maxHeight: '40px', minWidth: '80px', minHeight: '30px'}} className={classes.button} variant="contained" color="green" onClick={answerCall}>
            <b>
            Answer
            </b>
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;