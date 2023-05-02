import { PopupModal } from "components/modal";
import React, { useState } from "react";
import { ProjectDetailCard } from "./ProjectDetailCard";

export const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-6">
        <h2 className="mb-2 text-lg font-bold">Project Name</h2>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600">Pricing:</span>
          <span className="text-sm font-bold text-gray-700">$1000</span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600">Assignees:</span>
          <span className="text-sm font-bold text-gray-700">
            John Doe, Jane Doe
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600">Total Hours:</span>
          <span className="text-sm font-bold text-gray-700">50</span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600">
            Advance Payment:
          </span>
          <span className="text-sm font-bold text-gray-700">$500</span>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
          >
            View details
          </button>
          <button className="rounded bg-brand-500 py-2 px-4 font-bold text-white hover:bg-brand-700">
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
