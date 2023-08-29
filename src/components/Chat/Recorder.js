import React from 'react'
import MicRecorder from "mic-recorder-to-mp3";
import { Microphone } from 'phosphor-react';
import { Box, IconButton } from '@mui/material';
import useStopwatch from '../../hooks/useStopwatch';


const Recorder = () => {
    const [Mp3Recorder, setMp3Recorder] = React.useState(
      new MicRecorder({ bitRate: 128 })
    );
    const [isRecording, setIsRecording] = React.useState(false);
    const [blobURL, setBlobURL] = React.useState('');
    const [isBlocked, setIsBlocked] = React.useState(false);
  let [time, startTimer, stopTimer, resetTimer] = useStopwatch();
    React.useEffect(() => {
        navigator.getUserMedia(
          { audio: true },
          () => {
            console.log("Permission Granted");
            setIsBlocked( false );
          },
          () => {
            console.log("Permission Denied");
            setIsBlocked( true );
          }
        );
    }, [])
    
     const start = () => {
       if (isBlocked) {
         console.log("Permission Denied");
       } else {
         Mp3Recorder.start()
           .then(() => {
             setIsRecording(true);
             console.log("recording")
             startTimer();
           })
           .catch((e) => console.error(e));
       }
    };
    
    const stop = () => {
      Mp3Recorder.stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const blobURL = URL.createObjectURL(blob);
            setBlobURL(blobURL);
          setIsRecording(false);
          stopTimer();
        })
        .catch((e) => console.log(e));
        
    };
  return (
    <Box>
      {/* <button onClick={start} disabled={isRecording}>
        <Microphone />
      </button> */}
      <IconButton onClick={start}>
        <Microphone />
        { time}
      </IconButton>
      <button onClick={stop} disabled={!isRecording}>
        Stop
      </button>
      {/* <audio src={blobURL} controls="controls" /> */}
    </Box>
  );
}

export default Recorder
