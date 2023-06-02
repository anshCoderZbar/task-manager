import { PopupModal } from "components/modal";
import React, { useState } from "react";
import { ProjectDetailCard } from "./ProjectDetailCard";
import { Timer } from "./Timer";

export const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg bg-white text-navy-700 shadow-md dark:bg-navy-700 dark:text-white">
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="mr-2 text-lg font-bold">Project Name</h2>
          <Timer />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
            Pricing:
          </span>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
            $1000
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
            Assignees:
          </span>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
            John Doe, Jane Doe
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
            Total Hours:
          </span>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
            50
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
            Advance Payment:
          </span>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
            $500
          </span>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 dark:bg-green-900"
          >
            View details
          </button>
          <button className="rounded bg-brand-500 py-2 px-4 font-bold text-white hover:bg-brand-700 dark:bg-brand-800">
            Edit Time
          </button>
        </div>
        <PopupModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          hasCloseButton={true}
          classes="max-w-2xl"
        >
          <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
            Details of project
          </h4>
          <ProjectDetailCard />
        </PopupModal>
      </div>
    </div>
  );
};
