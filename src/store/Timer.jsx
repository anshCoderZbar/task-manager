import React, { createContext, useState, useEffect, useContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startAndStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <TimerContext.Provider value={{ time, isRunning, startAndStop }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => useContext(TimerContext);
