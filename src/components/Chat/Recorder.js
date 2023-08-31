import React from 'react'
import MicRecorder from "mic-recorder-to-mp3";
import { Microphone, Stop } from 'phosphor-react';
import { Box, IconButton, Stack } from '@mui/material';
import useStopwatch from '../../hooks/useStopwatch';
import AudioWaveform from './AudioWaveform';


const Recorder = ({ handleRecording, handleBlobURL }) => {
  const [Mp3Recorder, setMp3Recorder] = React.useState(
    new MicRecorder({ bitRate: 128 })
  );
  const [isRecording, setIsRecording] = React.useState(false);
  const [blobURL, setBlobURL] = React.useState("");
  const [isBlocked, setIsBlocked] = React.useState(false);
  let [time, startTimer, stopTimer, resetTimer] = useStopwatch();

  React.useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        setIsBlocked(true);
      }
    );
  }, []);

  const start = () => {
    if (isBlocked) {
    } else {
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true);
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

  React.useEffect(() => {
    handleRecording(isRecording);
  }, [isRecording]);

  React.useEffect(() => {
    handleBlobURL(blobURL);
  }, [blobURL]);

  return (
    <Box width={blobURL || isRecording ? "300px" : "unset"}>
      {/* <audio src={blobURL} controls="controls" /> */}
      {blobURL ? (
        <AudioWaveform fileURL={blobURL} />
      ) : isRecording ? (
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "14px",
            backgroundColor: "#eceff5",
            height: "35px",
            paddingX:'10px'
          }}
        >
          <Box sx={{display:'flex' , gap:'10px'}}>
            <img src="circle.png" width={23} />
            {time}
          </Box>

          <IconButton onClick={stop} disabled={!isRecording}>
            <Stop size={25} color="#637381" />
          </IconButton>
        </Stack>
      ) : (
        <IconButton onClick={start}>
          <Microphone />
        </IconButton>
      )}
    </Box>
  );
};

export default Recorder
