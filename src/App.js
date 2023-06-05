import { useState, useEffect } from "react";
import Timer from "./Components/Timer";
import { calculateMilliseconds } from "./utils";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [start, setStart] = useState(false);
  const [clear, setClear] = useState(false);
  const [timeActive, setTimeActive] = useState();
  const [actionActive, setActionActive] = useState();
  const [breakTime, setBreakTime] = useState(false);
  const [breakActive, setBreakActive] = useState('Work')
  const TIMEFRAMES = [.25, 15, 5, 25, 30];

  const updateTimeSelection = (minutes) => {
    const timeInMillisecconds = calculateMilliseconds(minutes);
    setTotalTime(timeInMillisecconds);
    setTimeActive(minutes);
    setClear(true)
  }

  const updateActionSelection = (title) => {
    if(title === 'Pause') {
      setClear(false)
      setStart(false)
    } else {
      setClear(false)
      setStart(true)
    }

    setActionActive(title);
  }
  const updateBreakSelection = (breakStatus) => {
    if(!breakStatus) {
      setBreakActive('Work');
      setBreakTime(false);
    } else {
      setBreakActive('Break');
      setBreakTime(true);
    }
  };

  useEffect(() => {
    updateBreakSelection(breakTime);
    setClear(true);
  }, [breakTime])
  

  return (
    <div className="App">
      <Header />
      <div className="timerTypeContainer">
        <button
          onClick={() => updateBreakSelection(false)}
          className={`${breakActive === "Work" ? "active" : "timeButton"}`}
        >
          Work
        </button>
        <button
          onClick={() => updateBreakSelection(true)}
          className={`${breakActive === "Break" ? "active" : "timeButton"}`}
        >
          Break
        </button>
      </div>
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
        <button className="timeButton" onClick={() => setClear(true)}>
          Reset
        </button>
      </div>
      <div className="timerContainer">
        <Timer
          totalTime={totalTime}
          startTimer={start}
          setActionActive={setActionActive}
          setStart={setStart}
          clear={clear}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
        />
      </div>
    </div>
  );
}

export default App;
