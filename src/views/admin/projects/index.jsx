import React, { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { PopupModal } from "components/modal";
import { ProjectForm } from "./components/ProjectForm";

export const ProjectsOverView = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-5s mx-auto mb-auto flex h-full min-h-[84vh] w-full flex-col gap-5 p-2 md:pr-2">
      <div className="flex justify-between pt-7">
        <h2 className="text-lg font-bold dark:text-white">Projects</h2>
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-brand-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            Add projects
          </button>
        </div>
      </div>
      <PopupModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasCloseButton={true}
        classes="max-w-2xl"
      >
        <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
          Create Projects
        </h4>
        <ProjectForm setIsOpen={setIsOpen} />
      </PopupModal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ProjectCard />
      </div>
    </div>
  );
};
