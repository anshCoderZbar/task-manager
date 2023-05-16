import axios from "axios";
import { useNotifications } from "reapop";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { loginSchema } from "./variables/validation";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "assets/icons";

export default function SignIn() {
  const { notify } = useNotifications();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    loginQuery.mutate(formData);
  };

  const loginQuery = useMutation(["login"], {
    mutationFn: (onSubmit) =>
      axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, onSubmit),
    onSuccess: (data) => {
      notify(data?.data?.message, "success");
      sessionStorage.setItem("userData", JSON.stringify(data?.data));
      navigate("/admin");
    },
    onError: (error) => {
      notify(error?.response?.data?.message, "error");
    },
  });

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            name="email"
            state={errors?.email?.message ? "error" : ""}
            type="email"
            {...register("email")}
          />
          <p className="errorMessage">{errors.email?.message}</p>
          <InputField
            label="Password*"
            placeholder="password"
            id="password"
            name="password"
            type="password"
            state={errors?.password?.message ? "error" : ""}
            {...register("password")}
          />
          <p className="errorMessage">{errors.password?.message}</p>
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          {loginQuery?.isLoading ? (
            <div className="flex items-center justify-center">
              <LoadingIcon />
            </div>
          ) : (
            <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Sign In
            </button>
          )}
        </form>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
