import React from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContianer, Wave, PlayButton } from "./Waveform.styled";
import { IconButton, Stack } from "@mui/material";
import { Pause, Play } from "phosphor-react";

const AudioWaveform = ({ fileURL }) => {
  const [playing, setPlaying] = React.useState(false);
  const [waveform, setWaveform] = React.useState(null);

  React.useEffect(() => {
    if (waveform === null) {
      setWaveform(
        WaveSurfer.create({
          barWidth: 3,
          barRadius: 3,
          barGap: 2,
          barMinHeight: 1,
          cursorWidth: 1,
          container: "#waveform",
          backend: "WebAudio",
          height: 80,
          progressColor: "#FE6E00",
          responsive: true,
          waveColor: "#C4C4C4",
          cursorColor: "transparent",
        })
      );
    }

    waveform?.load(fileURL);
  }, [waveform]);

  const handlePlay = () => {
    setPlaying(!playing);
    waveform?.playPause();
    waveform.on("finish", () => setPlaying(false));  
  };
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"10px"}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "14px",
        backgroundColor: "#eceff5",
        height: "35px",
        padding: "2px 10px",
        overflow: "hidden"
      }}
    >
      <IconButton onClick={handlePlay}>
        {!playing ? <Play size={23} /> : <Pause size={23} />}
      </IconButton>
      <Wave id="waveform" sx={{ width: "100%", height: "50px" }} />
    </Stack>
  );
};

export default AudioWaveform;
