import React, { createContext, useContext, useEffect, useState } from "react";

const CombinedContext = createContext({});

export const Store = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("userData"));
    if (auth) {
      setUserDetails(auth);
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      setStartTime(performance.now() - time * 10);
      const id = setInterval(() => {
        const currentTime = performance.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 10);
        setTime(elapsedTime);
      }, 10);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  const startAndStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
    } else {
      setStartTime(performance.now() - time * 10);
      setIsRunning(true);
    }
  };

  return (
    <CombinedContext.Provider
      value={{ userDetails, setUserDetails, time, isRunning, startAndStop }}
    >
      {children}
    </CombinedContext.Provider>
  );
};

export const useAppContext = () => useContext(CombinedContext);
