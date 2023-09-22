import "./styles.css";
import React, { useState, useEffect } from "react";

const CounterComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
