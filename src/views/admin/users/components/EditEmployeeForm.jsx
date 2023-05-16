import React, { useEffect, useState } from "react";
import { useNotifications } from "reapop";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeValidation } from "../variable/validation";
import { ImCross } from "react-icons/im";

import InputField from "components/fields/InputField";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { bearerToken } from "components/utils";
import { LoadingIcon } from "assets/icons";

export const EditEmployeeForm = ({ setIsOpen, id }) => {
  const { notify } = useNotifications();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(employeeValidation),
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [defaultFileValue, setDefaultFileValue] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const singleEmployee = () => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/user/${id}`,
      bearerToken()
    );
  };

  const singleEmployeeQuery = useQuery(["single-employee"], singleEmployee);

  useEffect(() => {
    const defaultValue = {};
    defaultValue.userName = singleEmployeeQuery?.data?.data?.user?.username;
    defaultValue.email = singleEmployeeQuery?.data?.data?.user?.email;
    defaultValue.designation =
      singleEmployeeQuery?.data?.data?.user?.designation;
    defaultValue.phone = singleEmployeeQuery?.data?.data?.user?.phone;
    const defaultFile = singleEmployeeQuery?.data?.data?.user?.file.split("@@");
    if (defaultFile && defaultFile.length > 0) {
      setDefaultFileValue(defaultFile);
    }
    defaultValue.joiningDate =
      singleEmployeeQuery?.data?.data?.user?.joiningdate;
    defaultValue.birthDate = singleEmployeeQuery?.data?.data?.user?.dateofbirth;
    defaultValue.bloodGroup = singleEmployeeQuery?.data?.data?.user?.bloodgroup;
    reset({ ...defaultValue });
  }, [singleEmployeeQuery?.data?.data]);

  const handleDeleteImg = (img) => {
    const newFile = defaultFileValue?.filter((data) => data !== img);
    setDefaultFileValue(newFile);
  };

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("username", data?.userName);
    // formData.append("email", data?.email);
    // formData.append("designation", data?.designation);
    // formData.append("phone", data?.phone);
    // selectedFiles.forEach((file, index) => {
    //   formData.append(`file[${index}]`, file);
    // });
    // formData.append("joiningdate", data?.joiningDate);
    // formData.append("dateofbirth", data?.birthDate);
    // formData.append("bloodgroup", data?.bloodGroup);
    // formData.append("password", data?.password);
    // formData.append("password_confirmation", data?.confirmPassword);
    // editEmployeeQuery.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      {singleEmployeeQuery?.isLoading ? (
        <div className="flex items-start justify-center">
          <LoadingIcon />
        </div>
      ) : (
        <div className="inputScrollBar h-[700px] overflow-auto">
          <InputField
            extra="mb-3"
            label="Username"
            placeholder="Username"
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
              className={`mt-2 block  h-12 w-full cursor-pointer rounded-sm border ${
                errors?.upload?.message ? "border-red-500" : "bg-white/0"
              } p-3 text-sm outline-none`}
              type="file"
              name="upload"
              multiple
              onChange={handleFileChange}
            />
            {defaultFileValue &&
              defaultFileValue?.map((img, index) => {
                return (
                  <div key={index} className="relative">
                    <img src={img} className="mt-3" />
                    <div
                      onClick={() => handleDeleteImg(img)}
                      className="absolute top-3 right-3 cursor-pointer text-white"
                    >
                      <ImCross />
                    </div>
                  </div>
                );
              })}
            {selectedFiles?.map((file, index) => (
              <div key={index}>
                <p>{file.name}</p>
                {file.type.startsWith("image/") && (
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                )}
                <button onClick={() => handleRemoveFile(index)}>Remove</button>
              </div>
            ))}
            <p className="errorMessage !mt-4">{errors?.upload?.message}</p>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3">
            <div>
              <InputField
                extra="mb-3"
                label="Joining date"
                placeholder="Joining date"
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
            name="password"
            state={errors?.password?.message ? "error" : ""}
            type="password"
            autoComplete="false"
            {...register("password")}
          />
          <p className="errorMessage">{errors?.password?.message}</p>
          <InputField
            extra="mb-3"
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            autoComplete="false"
            state={errors?.confirmPassword?.message ? "error" : ""}
            {...register("confirmPassword")}
          />
          <p className="errorMessage">{errors?.confirmPassword?.message}</p>
        </div>
      )}

      <button className="bg-transparent hover:border-transparent rounded border border-[#422AFB] py-2 px-4 font-semibold text-navy-700 hover:bg-brand-500 hover:text-white">
        Create
      </button>
    </form>
  );
};
