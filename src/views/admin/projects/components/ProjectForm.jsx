import InputField from "components/fields/InputField";
import { MultiSelectDropDown } from "components/multi-select";
import React from "react";

export const ProjectForm = () => {
  return (
    <div className="p-5">
      <InputField
        extra="mb-3"
        label="Project Name"
        placeholder="Project Name"
        id="projectName"
        type="text"
      />
      <InputField
        extra="mb-3"
        label="Pricing"
        placeholder="Pricing"
        id="pricing"
        type="number"
      />
      <div>
        <label
          className={`ml-3 text-sm font-bold text-navy-700 dark:text-white`}
        >
          Assigness
        </label>
        <MultiSelectDropDown />
      </div>
      <InputField
        extra="mb-3"
        label="Total Hours"
        placeholder="Total Hours"
        id="pricing"
        type="text"
      />
      <InputField
        extra="mb-3"
        label="Advance payment"
        placeholder="Advance payment"
        id="advancePayment"
        type="number"
      />
      <button class="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </div>
  );
};
