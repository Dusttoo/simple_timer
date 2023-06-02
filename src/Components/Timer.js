import { useEffect, useState } from 'react';
import avacado from "../Assets/avacado.svg";
import spoon from "../Assets/spoon.svg";
import "../App.css";

function Timer({totalTime}) {
  console.log('hello')
  const [timeRemaining, updateTimeRemaining] = useState(totalTime)
  console.log(timeRemaining);

  useEffect(() => {
    const interval = setInterval(updateTimeRemaining(() => timeRemaining - 1000), 10000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="timerContainer">
        <p>Time remaining: {timeRemaining}</p>
        {timeRemaining <= 0 && <p>Times up!</p>}
        <img src={avacado} className="timer" alt="Avacado Timer" />
        <img src={spoon} className="minuteHand" alt="Spoon Minute Hand" />
    </div>
  );
}

export default Timer;

/*
User selects a count down time: 5 minutes (300000ms)
Minute hand position is set
While totalTime > 0:
    Timer starts counting down by second: totalTime - 1000
    Minute hand position is updated
    Time remaining is updated
When totalTime <= 0:
    Display finished notification

*/