import { millisecondsToMinutes } from "../utils";
import "../App.css";

function TimeRemaining({ timerDone, timeRemaining }) {
  return (
    <div className="timeRemainingContainer">
      <p className="timeRemaining">
        {!timerDone
          ? `Time remaining: ${millisecondsToMinutes(timeRemaining)}`
          : `Times Up! Start your break`}
      </p>
    </div>
  );
}

export default TimeRemaining;
