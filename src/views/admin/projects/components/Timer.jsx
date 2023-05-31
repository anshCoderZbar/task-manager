import React, { useState, useEffect } from "react";
import { PauseIcon, PlayIcon } from "assets/icons";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const days = Math.floor(time / 8640000);
  const hours = Math.floor((time % 8640000) / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    console.log(time);
  };

  return (
    <div className="flex items-center py-4 text-center">
      <div className="text-2xl font-semibold">
        {days > 0 && (
          <span>
            {days} {days === 1 ? "day" : "days"}
          </span>
        )}
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className="">
        <button
          className="rounded-lg p-2 focus:outline-none"
          onClick={startAndStop}
        >
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
};
