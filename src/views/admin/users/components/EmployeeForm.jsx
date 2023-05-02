import React from "react";
import { useForm } from "react-hook-form";

import InputField from "components/fields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeValidation } from "../variable/validation";

export const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(employeeValidation) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <div className="inputScrollBar h-[700px] overflow-auto">
        <InputField
          extra="mb-3"
          label="Username"
          placeholder="Username"
          id="userName"
          state={errors?.userName?.message ? "error" : ""}
          type="text"
          name="userName"
          {...register("userName")}
        />
        <p className="errorMessage">{errors?.userName?.message}</p>
        <InputField
          extra="mb-3"
          label="Email"
          placeholder="Email"
          id="email"
          type="email"
          state={errors?.email?.message ? "error" : ""}
          name="email"
          {...register("email")}
        />
        <p className="errorMessage">{errors?.email?.message}</p>
        <InputField
          extra="mb-3"
          label="Designation"
          placeholder="Designation"
          id="designation"
          name="designation"
          state={errors?.designation?.message ? "error" : ""}
          type="text"
          {...register("designation")}
        />
        <p className="errorMessage">{errors?.designation?.message}</p>
        <InputField
          extra="mb-3"
          label="Phone No"
          placeholder="Phone No"
          id="phone"
          name="phone"
          state={errors?.phone?.message ? "error" : ""}
          type="number"
          {...register("phone")}
        />
        <p className="errorMessage">{errors?.phone?.message}</p>
        <div className="mb-3">
          <label
            className="text-sm font-bold  text-navy-700 dark:text-white"
            htmlFor="upload"
          >
            Upload file
          </label>
          <input
            className="mt-2 block  h-12 w-full cursor-pointer rounded-sm border bg-white/0 p-3 text-sm outline-none"
            id="upload"
            type="file"
            name="upload"
            {...register("upload")}
          />
          <p className="errorMessage">{errors?.upload?.message}</p>
        </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3">
          <div>
            <InputField
              extra="mb-3"
              label="Joining date"
              placeholder="Joining date"
              id="joiningdate"
              state={errors?.joiningDate?.message ? "error" : ""}
              name="joiningDate"
              type="date"
              {...register("joiningDate")}
            />
            <p className="errorMessage">{errors?.joiningDate?.message}</p>
          </div>
          <div>
            <InputField
              extra="mb-3"
              label="Date of birth"
              placeholder="Date of birth"
              id="birthDate"
              name="birthDate"
              type="date"
              state={errors?.birthDate?.message ? "error" : ""}
              {...register("birthDate")}
            />
            <p className="errorMessage">{errors?.birthDate?.message}</p>
          </div>
        </div>
        <InputField
          extra="mb-3"
          label="Blood group"
          placeholder="Blood group"
          id="bloodGroup"
          name="bloodGroup"
          type="text"
          state={errors?.bloodGroup?.message ? "error" : ""}
          {...register("bloodGroup")}
        />
        <p className="errorMessage">{errors?.bloodGroup?.message}</p>
        <InputField
          extra="mb-3"
          label="Password"
          placeholder="Password"
          id="password"
          name="password"
          state={errors?.password?.message ? "error" : ""}
          type="password"
          {...register("password")}
        />
        <p className="errorMessage">{errors?.password?.message}</p>
        <InputField
          extra="mb-3"
          label="Confirm Password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          state={errors?.confirmPassword?.message ? "error" : ""}
          {...register("confirmPassword")}
        />
        <p className="errorMessage">{errors?.confirmPassword?.message}</p>
      </div>
      <button className="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </form>
  );
};
