import { useState } from "react";
import Timer from "./Components/Timer";
import { calculateMilliseconds } from "./utils";
import "./App.css";

function App() {
  const [totalTime, setTotalTime] = useState(300000);
  const [start, setStart] = useState(false);
  const [clear, setClear] = useState(false);
  const [timeActive, setTimeActive] = useState();
  const [actionActive, setActionActive] = useState();

  const TIMEFRAMES = [5, 10, 15, 20, 25];

  const updateTimeSelection = (minutes) => {
    const timeInMillisecconds = calculateMilliseconds(minutes);
    setTotalTime(timeInMillisecconds);
    setTimeActive(minutes);
    
  }

  const updateActionSelection = (title) => {
    if(title === 'Pause') {
      setStart(false)
    } else {
      setStart(true)
    }

    setActionActive(title);
  }
  console.log(typeof(active))
  return (
    <div className="App">
      <h1 className="title">Pomodocado</h1>
      <div className="timeSelection">
        {TIMEFRAMES.map((time) => (
          <button
            value={time}
            key={time}
            className={`${+timeActive === time ? "active" : "timeButton"}`}
            onClick={(e) => updateTimeSelection(e.target.value)}
          >
            {time} minutes
          </button>
        ))}
      </div>
      <div className="timerControls">
        <button
          className={`${actionActive === "Pause" ? "active" : "timeButton"}`}
          onClick={() => updateActionSelection("Pause")}
        >
          Pause
        </button>
        <button
          className={`${actionActive === "Start" ? "active" : "timeButton"}`}
          onClick={() => updateActionSelection("Start")}
        >
          Start
        </button>
        <button
          className="timeButton"
          onClick={() => setClear(true)}
        >
          Reset
        </button>
      </div>
      <Timer totalTime={totalTime} startTimer={start} setStart={setStart} />
    </div>
  );
}

export default App;
