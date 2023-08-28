import React from 'react'
import MicRecorder from "mic-recorder-to-mp3";


const Recorder = () => {
    const Mp3Recorder = new MicRecorder({ bitRate: 128 });
    const [isRecording, setIsRecording] = React.useState(false);
    const [blobURL, setBlobURL] = React.useState('');
    const [isBlocked, setIsBlocked] = React.useState(false);

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
            setIsRecording(false)
        })
        .catch((e) => console.log(e));
        
    };
  return (
    <div>
      <button onClick={start} disabled={isRecording}>
        Record
      </button>
      <button onClick={stop} disabled={!isRecording}>
        Stop
      </button>
      <audio src={blobURL} controls="controls" />
    </div>
  );
}

export default Recorder
