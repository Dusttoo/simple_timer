import { useEffect, useState } from 'react';
import avacado from "../Assets/avacado.svg";
import spoon from "../Assets/spoon.svg";
import { millisecondsToMinutes } from '../utils';
import "../App.css";

function Timer({totalTime, startTimer, clear}) {
  const [timeRemaining, updateTimeRemaining] = useState(totalTime)
  const [timer, setTimer] = useState();

  const start = () => {
    const timer = setInterval(() => {
        updateTimeRemaining(timeRemaining => timeRemaining - 1000);
        if (timeRemaining === 0) {
            clearInterval(timer);
        }
    }, 1000);
    setTimer(timer);
  }

  useEffect(() => { 
    if (startTimer){ 
        start(); 
    } 
    else {
        clearInterval(timer);
    }
  }, [startTimer]);

  useEffect(() => {
    if (timeRemaining === 0) {
        clearInterval(timer);
    }
  }, [timeRemaining, timer]);

  useEffect(() => {
    clearInterval(timer);
    updateTimeRemaining(totalTime);
  }, [totalTime])

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className="timerContainer">
        <p className='timeRemaining'>Time remaining: {millisecondsToMinutes(timeRemaining)}</p>
        {timeRemaining <= 0 && <p>Times up!</p>}
        <img src={avacado} className="timer" alt="Avacado Timer" />
        <img src={spoon} className="minuteHand" alt="Spoon Minute Hand" />
    </div>
  );
}

export default Timer;
