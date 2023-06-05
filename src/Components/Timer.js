import { useEffect, useState } from 'react';
import TimeRemaining from './TimeRemaining';
import Avacado from "./Avacado";
import "../App.css";
import Avacado2 from './Avacado2';

function Timer({totalTime, startTimer, clear, setActionActive, setStart, breakTime, setBreakTime}) {
  const [timeRemaining, updateTimeRemaining] = useState(totalTime)
  const [timer, setTimer] = useState();
  const [timerDone, setTimerDone] = useState(false);
  const minute = Math.floor(timeRemaining / 60000) * 6;

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
      {/* <div className="timer">
        <Avacado minute={minute} />
      </div> */}
      <div className='avacado'>
        <span className='progressBar' style={{height: "100%"}}></span>
      </div>
      {/* <Avacado2 /> */}

      <TimeRemaining timerDone={timerDone} timeRemaining={timeRemaining} />
    </>
  );
}

export default Timer;
