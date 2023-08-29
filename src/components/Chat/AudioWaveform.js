import React from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContianer, Wave, PlayButton } from "./Waveform.styled";

const AudioWaveform = ({ fileURL }) => {
    const [playing, setPlaying] = React.useState(false);
    const [waveform,setWaveform] = React.useState(null)
    React.useEffect(() => {
        
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

      waveform?.load(fileURL);
    }, [waveform]);

    const handlePlay = () => {
    setPlaying(!playing);
    waveform?.playPause();
  };
    return (
      <WaveformContianer>
        <PlayButton onClick={handlePlay}>
          {!playing ? "Play" : "Pause"}
        </PlayButton>
        <Wave id="waveform" />
        <audio id="track" src={fileURL} />
        <div>0.52</div>
      </WaveformContianer>
    );
}

export default AudioWaveform;
