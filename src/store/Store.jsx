import React, { createContext, useContext, useEffect, useState } from "react";

const CombinedContext = createContext({});

export const Store = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("userData"));
    if (auth) {
      setUserDetails(auth);
    }
  }, []);

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
    <CombinedContext.Provider
      value={{ userDetails, setUserDetails, time, isRunning, startAndStop }}
    >
      {children}
    </CombinedContext.Provider>
  );
};

export const useAppContext = () => useContext(CombinedContext);
