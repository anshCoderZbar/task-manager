import React from "react";

export const ProjectDetailCard = () => {
  return (
    <div className="rounded-lg p-6  shadow-md">
      <h2 className="mb-4 text-lg font-bold">Project Name</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Assignees:</span>
          <span className="text-gray-500">John Doe, Jane Doe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Pricing:</span>
          <span className="text-gray-500">$1000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Total Hours:</span>
          <span className="text-gray-500">50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Advance Payment:</span>
          <span className="text-gray-500">$500</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Full Payment:</span>
          <span className="text-gray-500">$1000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Partial Payment:</span>
          <span className="text-gray-500">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span>25%</span>
                <span>Phase 1</span>
              </div>
              <div className="flex justify-between">
                <span>50%</span>
                <span>Phase 2</span>
              </div>
              <div className="flex justify-between">
                <span>75%</span>
                <span>Phase 3</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
