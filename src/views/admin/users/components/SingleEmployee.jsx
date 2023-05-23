import React, { useEffect, useState } from "react";
import avatar from "assets/img/avatars/avatar.png";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { bearerToken } from "components/utils";

export const SingleEmployee = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const singleEmployee = () => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/user/${id}`,
      bearerToken()
    );
  };

  const singleEmployeeQuery = useQuery(
    ["single-employee-page"],
    singleEmployee
  );
  useEffect(() => {
    setUserData(singleEmployeeQuery?.data?.data?.user);
  }, [singleEmployeeQuery?.data?.data]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex justify-center">
          <img
            src={avatar}
            alt={userData?.username}
            className="mx-auto mt-6 h-32 w-32 rounded-full"
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="mb-2 text-2xl font-bold capitalize">
            {userData?.username}
          </h1>
          <p className="mb-2 capitalize text-gray-600">
            {userData?.designation}
          </p>
          <p className="mb-2 text-gray-600">{userData?.email}</p>
          <p className="mb-2 text-gray-600">{userData?.phoneNo}</p>
          <p className="mb-2 uppercase text-gray-600">{`Blood Group: ${userData?.bloodgroup}`}</p>
          <h2 className="mb-4 text-xl font-bold">Files</h2>
          <ul className="mb-4 list-disc pl-4">
            {userData?.file?.split("@@")?.map((file, i) => (
              <li key={i} className="mb-2 flex items-center">
                <img
                  src={file}
                  alt={file}
                  className="mr-2 h-4 w-4 object-cover"
                />
                <a
                  href={file}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 block text-blue-600 hover:underline"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h2 className="mb-2 text-xl font-bold">Dates</h2>
            <p className="mb-2 text-gray-600">
              <span className="font-medium">Joining Date:</span>{" "}
              {userData?.joiningdate}
            </p>
            <p className="mb-2 text-gray-600">
              <span className="font-medium">Date of Birth:</span>{" "}
              {userData?.dateofbirth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
