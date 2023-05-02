import React from "react";
import { useForm } from "react-hook-form";

import InputField from "components/fields/InputField";
import { MultiSelectDropDown } from "components/multi-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectSchema } from "../variables/validation";

export const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(projectSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <InputField
        extra="mb-3"
        label="Project Name"
        placeholder="Project Name"
        id="projectName"
        name="projectName"
        state={errors?.projectName?.message ? "error" : ""}
        type="text"
        {...register("projectName")}
      />
      <p className="errorMessage">{errors?.projectName?.message}</p>
      <InputField
        extra="mb-3"
        label="Pricing"
        placeholder="Pricing"
        id="pricing"
        name="pricing"
        state={errors?.pricing?.message ? "error" : ""}
        type="number"
        {...register("pricing")}
      />
      <p className="errorMessage">{errors?.pricing?.message}</p>

      <div className="mb-3">
        <label className={`text-sm font-bold text-navy-700 dark:text-white`}>
          Assigness
        </label>
        <MultiSelectDropDown
          control={control}
          name="assigness"
          errors={errors?.assigness?.message ? true : false}
        />
        <p className="errorMessage">{errors?.assigness?.message}</p>
      </div>
      <InputField
        extra="mb-3"
        label="Total Hours"
        placeholder="Total Hours"
        id="totalHours"
        name="totalHours"
        type="text"
        state={errors?.totalHours?.message ? "error" : ""}
        {...register("totalHours")}
      />
      <p className="errorMessage">{errors?.totalHours?.message}</p>

      <InputField
        extra="mb-3"
        label="Advance payment"
        placeholder="Advance payment"
        id="advancePayment"
        name="advancePayment"
        type="number"
        {...register("advancePayment")}
      />
      <button className="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </form>
  );
};
