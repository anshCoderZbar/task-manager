import React from "react";

export const ProjectCard = () => {
  return (
    <div class="overflow-hidden rounded-lg bg-white shadow-md">
      <div class="p-6">
        <h2 class="mb-2 text-lg font-bold">Project Name</h2>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-bold text-gray-600">Pricing:</span>
          <span class="text-sm font-bold text-gray-700">$1000</span>
        </div>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-bold text-gray-600">Assignees:</span>
          <span class="text-sm font-bold text-gray-700">
            John Doe, Jane Doe
          </span>
        </div>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-bold text-gray-600">Total Hours:</span>
          <span class="text-sm font-bold text-gray-700">50</span>
        </div>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-bold text-gray-600">Advance Payment:</span>
          <span class="text-sm font-bold text-gray-700">$500</span>
        </div>
        <div class="flex justify-end">
          <button class="rounded bg-brand-500 py-2 px-4 font-bold text-white hover:bg-brand-700">
            Edit Time
          </button>
        </div>
      </div>
    </div>
  );
};
