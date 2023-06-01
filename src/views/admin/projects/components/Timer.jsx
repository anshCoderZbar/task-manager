import React from "react";
import { PauseIcon, PlayIcon } from "assets/icons";
import { useAppContext } from "store/Store";

export const Timer = () => {
  const { time, isRunning, startAndStop } = useAppContext();

  const days = Math.floor(time / 8640000);
  const hours = Math.floor((time % 8640000) / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

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
