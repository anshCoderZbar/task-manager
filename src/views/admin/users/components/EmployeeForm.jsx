import InputField from "components/fields/InputField";
import React from "react";

export const EmployeeForm = () => {
  return (
    <div className="p-5">
      <div className="inputScrollBar h-[700px] overflow-auto">
        <InputField
          extra="mb-3"
          label="Username"
          placeholder="Username"
          id="userName"
          type="text"
        />
        <InputField
          extra="mb-3"
          label="Email"
          placeholder="Email"
          id="email"
          type="email"
        />
        <InputField
          extra="mb-3"
          label="Designation"
          placeholder="Designation"
          id="designation"
          type="email"
        />
        <InputField
          extra="mb-3"
          label="Phone No"
          placeholder="Phone No"
          id="phone"
          type="number"
        />
        <InputField
          extra="mb-3"
          label="Joining date"
          placeholder="Joining date"
          id="phone"
          type="date"
        />
        <InputField
          extra="mb-3"
          label="Date of birth"
          placeholder="Date of birth"
          id="dob"
          type="date"
        />
        <InputField
          extra="mb-3"
          label="Blood group"
          placeholder="Blood group"
          id="bloodGroup"
          type="text"
        />
        <InputField
          extra="mb-3"
          label="Password"
          placeholder="Password"
          id="password"
          type="password"
        />
        <InputField
          extra="mb-3"
          label="Confirm Password"
          placeholder="Confirm Password"
          id="confirmPassword"
          type="password"
        />
      </div>
      <button class="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </div>
  );
};
