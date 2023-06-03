import { useState } from "react";
import Timer from "./Components/Timer";
import { calculateMilliseconds } from "./utils";
import "./App.css";

function App() {
  const [totalTime, setTotalTime] = useState(300000);
  const [start, setStart] = useState(false);
  const [clear, setClear] = useState(false);
  const TIMEFRAMES = [5, 10, 15, 20, 25];

  const updateTimeSelection = (minutes) => {
    const timeInMillisecconds = calculateMilliseconds(minutes);
    setTotalTime(timeInMillisecconds);
  }

  return (
    <div className="App">
      <div className="timeSelection">
        {TIMEFRAMES.map((time) => (
          <button
            value={time}
            onClick={(e) => updateTimeSelection(e.target.value)}
          >
            {time} minutes
          </button>
        ))}
      </div>
      <div className="timerControls">
        <button onClick={() => setStart(false)}>Pause</button>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setClear(true)}>Reset</button>
      </div>
      <Timer totalTime={totalTime} startTimer={start} setStart={setStart} />
    </div>
  );
}

export default App;
