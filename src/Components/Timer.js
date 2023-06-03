import { useEffect, useState } from 'react';
import avacado from "../Assets/avacado.svg";
import spoon from "../Assets/spoon.svg";
import { millisecondsToMinutes } from '../utils';
import "../App.css";

function Timer({totalTime, startTimer, clear}) {
  const [timeRemaining, updateTimeRemaining] = useState(totalTime)
  const [timer, setTimer] = useState();
  const minute = Math.floor(timeRemaining / 60000) * 6;

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
      <div className="timeRemainingContainer">
        <p className="timeRemaining">
          Time remaining: {millisecondsToMinutes(timeRemaining)}
        </p>
      </div>

      {timeRemaining <= 0 && <p>Times up!</p>}
      <div className="timer">
        <div className="minuteContainer">
          <img
            style={{
              transform: "rotate(" + minute + "deg)",
            }}
            className="minuteHand"
            alt="Spoon Minute Hand"
            src={spoon}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
