import React, { useContext } from 'react';
import { Grid,Button, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';



const useStyles = makeStyles((theme) => ({
  video: {
    display: 'block',
    width: '550px',
    position:'relative',
    borderRadius:'20px',
    [theme.breakpoints.down('xs')]: {
      width: '96vw',
      
    },
  },
  gridContainer: {
    justifyContent: 'center',
    padding: '10px',
    borderRadius:'20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  button:{
    cursor: 'default' ,
    textTransform:'none',
    color:'white',
    fontFamily: "Montserrat",
    fontWeight:'20',
    backgroundColor:'#000000',
    borderRadius:'8px',
    opacity:'0.7',
    padding:'2px 3px',
    position:'absolute',
    zIndex: '3',
    transform:'translate(10px,-40px)',
  },
  paper: {
    padding: '0px',
    // border: '1px solid #14eacf8a',
    // boxShadow :'1px 1px 25px #14EACFFF',
    backgroundColor:'transparent',
    margin: '2px',
    borderRadius:'20px',
    [theme.breakpoints.down('xs')]: {
      margin:'2px',
    },
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            {/* <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography> */}
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            <Button className={classes.button} >{name || 'Name'}</Button>           
          </Grid>
        </Paper>
      )}
      
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            {/* <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography> */}
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
            <Button className={classes.button}>{name || 'Name'}</Button>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;



