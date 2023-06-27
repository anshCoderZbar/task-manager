import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { bearerToken } from "components/utils";
import { LoadingIcon } from "assets/icons";

export const ProjectDetailCard = ({ id }) => {
  const [projectData, setProjectData] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const fetchSingleProject = () => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/showprojectById/${id}`,
      bearerToken()
    );
  };

  const fetchSingleProjectQuery = useQuery(
    ["fetch-single-project"],
    fetchSingleProject
  );

  useEffect(() => {
    setProjectData(fetchSingleProjectQuery?.data?.data?.projectdata);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [fetchSingleProjectQuery?.data?.data]);

  return (
    <>
      {fetchSingleProjectQuery?.isLoading || showLoader ? (
        <div className="flex max-w-2xl justify-center p-7">
          <LoadingIcon />
        </div>
      ) : (
        <div className="rounded-lg px-6 pb-6">
          <h2 className="mb-2 text-lg font-bold capitalize">
            {projectData?.name ? projectData?.name : ""}
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Assignees:</span>
              <span className="text-gray-500">
                {projectData?.assigness.split("@@").map((name, i) => {
                  return (
                    <span key={i}>
                      {name}
                      {i < projectData?.assigness?.split("@@").length - 1
                        ? " , "
                        : ""}
                    </span>
                  );
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Pricing:</span>
              <span className="text-gray-500">
                ${projectData?.pricing ? projectData?.pricing : ""}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Total Hours:</span>
              <span className="text-gray-500">
                {projectData?.total_hours ? projectData?.total_hours : ""}
              </span>
            </div>
            {projectData?.payments?.map((data, index) => {
              console.log(data);
              return (
                <div key={index}>
                  {data.paymenttype.toLowerCase() === "full" ? (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Full Payment:</span>
                      <span className="text-gray-500">${data?.amountpaid}</span>
                    </div>
                  ) : null}
                  {data.paymenttype.toLowerCase() === "partialy" ? (
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        Partial Payment Phase {index + 1}:
                      </span>
                      <span className="text-gray-500">
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <span className="ml-3">${data?.amountpaid}</span>
                          </div>
                        </div>
                      </span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
