import React from 'react';

const formatTime = (val, ...rest) => {
  let value = val.toString();
  if (value.length < 2) {
    value = '0' + value;
  }
  if (rest[0] === 'ms' && value.length < 3) {
    value = '0' + value;
  }
  return value;
};

const useStopwatch = () => {
  const [running, setRunning] = React.useState(false);
  const [currentTimeMs, setCurrentTimeMs] = React.useState(0);
  const [currentTimeSec, setCurrentTimeSec] = React.useState(0);
  const [currentTimeMin, setCurrentTimeMin] = React.useState(0);

  const timerRef = React.useRef(null);

  const startTimer = () => {
      if (!running) {
          console.log("running", running);
      setRunning(true);
          timerRef.current = setInterval(() => setCurrentTimeMs((time) => time + 1000), 1000);
          console.log("running", running);
      }
    console.log('running', running)
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setCurrentTimeMs(0);
    setCurrentTimeSec(0);
    setCurrentTimeMin(0);
  };

  React.useEffect(() => {
    if (currentTimeMs >= 1000) {
      setCurrentTimeSec((time) => time + 1);
      setCurrentTimeMs(0);
    }
    if (currentTimeSec >= 60) {
      setCurrentTimeMin((time) => time + 1);
      setCurrentTimeSec(0);
    }
  }, [currentTimeMs]);

  return [`${formatTime(currentTimeMin)}:${formatTime(currentTimeSec)}`, startTimer, stopTimer, resetTimer] ;
};

export default useStopwatch;
