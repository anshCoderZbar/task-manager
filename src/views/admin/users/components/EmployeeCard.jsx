import React, { useState } from "react";
import { Link } from "react-router-dom";

import avatar from "assets/img/avatars/avatar.png";

import { BiEdit, BiCake, BiDonateBlood } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineDelete,
  AiFillPhone,
} from "react-icons/ai";
import { bearerToken } from "components/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNotifications } from "reapop";
import queryClient from "queryClient";
import { ErrorAlert } from "components/error-alert";
import { LoadingIcon } from "assets/icons";
import { EditEmployeeForm } from "./EditEmployeeForm";
import { PopupModal } from "components/modal";

export const EmployeeCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const { notify } = useNotifications();
  const fetchEmployees = () => {
    return axios?.get(
      `${process.env.REACT_APP_API_BASE_URL}/users`,
      bearerToken()
    );
  };

  const fetchEmployeeQuery = useQuery(["fetch-employee"], fetchEmployees);

  const handleDelete = (id) => {
    deleteEmployeeQuery.mutate(id);
  };

  const deleteEmployeeQuery = useMutation(["deleteEmploye"], {
    mutationFn: (handleDelete) =>
      axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/user-delete/${handleDelete}`,
        bearerToken()
      ),
    onSuccess: (data) => {
      notify(data?.data?.message, "success");
      queryClient.invalidateQueries(["fetch-employee"]);
    },
    onError: (error) => {
      notify(error?.response?.data?.errors, "error");
    },
  });

  return (
    <>
      {fetchEmployeeQuery?.isError ? (
        fetchEmployeeQuery?.error?.code === "ERR_NETWORK" ? (
          <ErrorAlert
            heading="Network Error"
            description="Please try again later"
          />
        ) : (
          <ErrorAlert
            heading="Request failed"
            description={
              fetchEmployeeQuery?.error?.response?.data
                ? fetchEmployeeQuery?.error?.response?.data
                : "OOPS! some error occured"
            }
          />
        )
      ) : null}
      {fetchEmployeeQuery?.isLoading ? (
        <div className="grid h-[60vh] place-items-center">
          <LoadingIcon />
        </div>
      ) : fetchEmployeeQuery?.data?.data?.user?.length <= 0 ? (
        <ErrorAlert
          heading="Employees not found"
          description="Please add employees to display"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
          {fetchEmployeeQuery?.data?.data?.user?.length >= 1
            ? fetchEmployeeQuery?.data?.data?.user?.map((user, i) => {
                return (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg bg-white shadow-md"
                  >
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center">
                        <img
                          src={avatar}
                          alt="employee-avatar"
                          className="h-16 w-16 rounded-full "
                        />
                        <div className="ml-3">
                          <h3 className="text-lg font-medium capitalize text-gray-900">
                            {user?.username}
                          </h3>
                          <p className="text-sm capitalize text-gray-600">
                            {user?.designation}
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          <button
                            onClick={() => {
                              setIsOpen(true);
                              setUserId(user?.id);
                            }}
                            className="mr-2 rounded-md border px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100"
                          >
                            <BiEdit />
                          </button>
                          <PopupModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            hasCloseButton={true}
                            classes="max-w-2xl"
                          >
                            <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
                              Edit Employees
                            </h4>
                            <EditEmployeeForm
                              setIsOpen={setIsOpen}
                              id={userId}
                            />
                          </PopupModal>
                          <button
                            onClick={() => handleDelete(user?.id)}
                            className="rounded-md border px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-100"
                          >
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <div className="mb-3 flex items-center">
                          <AiFillPhone className="text-gray-600" />
                          <span className="ml-2 text-gray-700">
                            {user?.phone}
                          </span>
                        </div>
                        <div className="mb-3 flex items-center">
                          <AiOutlineCalendar className="text-gray-600" />
                          <span className="ml-2 text-gray-700">
                            Joined on {user?.joiningdate}
                          </span>
                        </div>
                        <div className="mb-3 flex items-center">
                          <BiCake className="text-gray-600" />
                          <span className="ml-2 text-gray-700">
                            Date of birth: {user?.dateofbirth}
                          </span>
                        </div>
                        <div className="mb-3 flex items-center">
                          <BiDonateBlood className="text-gray-600" />
                          <span className="ml-2 uppercase text-gray-700">
                            Blood Group: {user?.bloodgroup}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <AiOutlineMail className="text-gray-600" />
                          <span className="ml-2 text-gray-700">
                            {user?.email}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Link
                          to={`/admin/employees/${user?.id}`}
                          className="rounded-md border px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100"
                        >
                          View Full Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </>
  );
};
