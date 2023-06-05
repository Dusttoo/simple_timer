import { millisecondsToMinutes } from "../utils";
import "../App.css";

function TimeRemaining({ timerDone, timeRemaining, breakTime }) {
  return (
    <div className="timeRemainingContainer">
      <p className="timeRemaining">
        {!timerDone
          ? `${breakTime ? 'Break time' : 'Work time' } remaining: ${millisecondsToMinutes(timeRemaining)}`
          : `Times Up! Start your ${breakTime ? 'break' : 'work'}`}
      </p>
    </div>
  );
}

export default TimeRemaining;
