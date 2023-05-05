import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "components/fields/InputField";
import { MultiSelectDropDown } from "components/multi-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectSchema } from "../variables/validation";

export const ProjectForm = () => {
  const [tabs, setTabs] = useState({
    fullPayment: true,
    partialyPayment: false,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(projectSchema) });

  const [fields, setFields] = useState([{ phase: "", payment: "" }]);

  const handleAddField = () => {
    setFields([...fields, { phase: "", payment: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const onSubmit = (data) => {
    console.log(data);
    const phasePaymentArr = [];

    for (let i = 1; i <= 5; i++) {
      const paymentKey = `paymentPhase_${i}`;
      const phaseKey = `phase_${i}`;
      if (data[paymentKey] && data[phaseKey]) {
        const obj = {
          [paymentKey]: data[paymentKey],
          [phaseKey]: data[phaseKey],
        };
        phasePaymentArr.push(obj);
      }
    }
    console.log(phasePaymentArr);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" p-5">
      <div
        className={
          tabs.partialyPayment && fields.length >= 2
            ? `inputScrollBar h-[550px] overflow-auto`
            : null
        }
      >
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
        <div className="my-3 flex  items-center gap-3">
          <div
            className="flex items-center space-x-2"
            onClick={() =>
              setTabs({
                fullPayment: true,
                partialyPayment: false,
              })
            }
          >
            <input
              type="radio"
              id="option1"
              name="option"
              value="option1"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={tabs.fullPayment ? true : false}
              readOnly
            />
            <label htmlhtmlFor="option1" className="font-medium text-gray-700">
              Full payment
            </label>
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={() =>
              setTabs({
                fullPayment: false,
                partialyPayment: true,
              })
            }
          >
            <input
              type="radio"
              id="option2"
              name="option"
              value="option2"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label htmlhtmlFor="option2" className="font-medium text-gray-700">
              Partialy paid
            </label>
            {tabs.partialyPayment && fields.length < 4 ? (
              <div
                role="button"
                onClick={handleAddField}
                className="rounded bg-brand-500 py-1 px-4 font-bold text-white hover:bg-brand-700"
              >
                Add
              </div>
            ) : null}
          </div>
        </div>
        {tabs.fullPayment && tabs.fullPayment ? (
          <InputField
            extra="mb-3"
            label="Amount Paid"
            placeholder="Amount paid"
            id="fullPayment"
            name="fullPayment"
            type="text"
            state={errors?.totalHours?.message ? "error" : ""}
            {...register("fullPayment")}
          />
        ) : null}
        {tabs.partialyPayment && tabs.partialyPayment ? (
          <div className="grid ">
            {fields.map((field, index) => (
              <div key={index} className="relative flex gap-3">
                <InputField
                  extra="mb-3"
                  label={`Phase ${index + 1}`}
                  placeholder={`Phase ${index + 1}`}
                  id={`Phase_${index + 1}`}
                  name={`Phase ${index + 1}`}
                  type="text"
                  {...register(`phase_${index + 1}`)}
                  required
                />
                <InputField
                  extra="mb-3"
                  label="Amount Paid"
                  placeholder="Amount paid"
                  type="number"
                  name={`paymentPhase_${index + 1}`}
                  {...register(`paymentPhase_${index + 1}`)}
                  required
                />
                <div
                  role="button"
                  onClick={() => handleRemoveField(index)}
                  className="absolute top-8 right-0 h-11 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
                >
                  Remove
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <button className="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </form>
  );
};
