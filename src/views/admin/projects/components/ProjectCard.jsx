import React from "react";

export const ProjectCard = () => {
  return (
    <div className="dark:bg-neutral-700 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <h5 className="text-neutral-800 dark:text-neutral-50 mb-2 text-xl font-medium leading-tight">
        ProjectName
      </h5>
      <p className="text-neutral-600 dark:text-neutral-200 mb-4 text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolore,
        rerum magnam ipsa sed doloribus magni unde eius laborum expedita
        praesentium officiis voluptate eveniet sequi eos quas, iure sapiente
        ullam....
      </p>
      <button
        type="button"
        className="rounded-md bg-brand-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white text-white shadow-[0_4px_9px_-4px_#3b71ca]"
      >
        Edit timeline
      </button>
    </div>
  );
};
