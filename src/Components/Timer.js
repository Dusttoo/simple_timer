import { useEffect, useState } from 'react';
import TimeRemaining from './TimeRemaining';
import useSound from "use-sound";
import "../App.css";

const alarm = require('../Assets/alarm.mp3')

function Timer({totalTime, startTimer, clear, setActionActive, setStart, breakTime, setBreakTime}) {
  const [timeRemaining, updateTimeRemaining] = useState(totalTime)
  const [timer, setTimer] = useState();
  const [timerDone, setTimerDone] = useState(false);
  const [timerCompleteSound] = useSound(alarm);
  const resetTimer = () => {
      clearInterval(timer);
      setActionActive(null);
      setBreakTime(!breakTime);
      updateTimeRemaining(totalTime);
      setTimerDone(true);
  };
  const start = () => {
    const timer = setInterval(() => {
        updateTimeRemaining(timeRemaining => timeRemaining - 1000);
        if (timeRemaining === 0) {
            resetTimer();
            timerCompleteSound();
        }
    }, 1000);
    setTimer(timer);
  }


  //start and stop timer
  useEffect(() => { 
    if (startTimer){ 
        setTimerDone(false);
        start(); 
    } else {
        clearInterval(timer);
    }
  }, [startTimer]);

  //When timer reaches 0
  useEffect(() => {
    if (timeRemaining === 0) {
        resetTimer();
    }
  }, [timeRemaining, timer]);

  //When total time changes
  useEffect(() => {
    clearInterval(timer);
    setTimerDone(false);
    updateTimeRemaining(totalTime);

  }, [totalTime])

  //clean up for interval
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  //reset
  useEffect(() => {
    if(clear) {
        setActionActive(null);
        setStart(false);
        clearInterval(timer);
        updateTimeRemaining(totalTime);
        setTimerDone(false);
    }
  }, [clear])

  return (
    <>
      <div className="timer">
        <TimeRemaining timerDone={timerDone} timeRemaining={timeRemaining} breakTime={breakTime}/>

        <span
          className="progressBar"
          style={{
            height: `${
              !breakTime
                ? 100 - (timeRemaining / totalTime) * 100
                : (timeRemaining / totalTime) * 100
            }%`,
          }}
        ></span>
      </div>
    </>
  );
}

export default Timer;
