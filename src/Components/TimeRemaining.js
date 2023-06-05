import { millisecondsToMinutes } from "../utils";
import "../App.css";

function TimeRemaining({ timerDone, timeRemaining, breakTime }) {
  return (
    <div className="timeRemainingContainer">
     <h2 className="timeRemainingHeader">{breakTime ? 'Break' : 'Work'}</h2>
      <p className="timeRemaining">
        {!timerDone
          ? `${millisecondsToMinutes(timeRemaining)}`
          : `Times Up! Start your ${breakTime ? 'break' : 'work'}`}
      </p>
    </div>
  );
}

export default TimeRemaining;
