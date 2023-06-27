import { PopupModal } from "components/modal";
import React, { useState } from "react";
import { ProjectDetailCard } from "./ProjectDetailCard";
import { Timer } from "./Timer";
import axios from "axios";
import { bearerToken } from "components/utils";
import { useQuery } from "@tanstack/react-query";

export const ProjectCard = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const fetchProjects = () => {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/showprojects`,
      bearerToken()
    );
  };

  const fetchProjectQuery = useQuery(["fetch-project"], fetchProjects);
  return (
    <>
      {fetchProjectQuery?.data?.data?.projectdata.length >= 1
        ? fetchProjectQuery?.data?.data?.projectdata.map((projects, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white text-navy-700 shadow-md dark:bg-navy-700 dark:text-white"
              >
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="mr-2 text-lg font-bold capitalize">
                      {projects?.name}
                    </h2>
                    <Timer />
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
                      Pricing:
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
                      ${projects?.pricing}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
                      Assignees:
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
                      {projects?.assigness.split("@@").map((name, i) => {
                        return (
                          <span key={i}>
                            {name}
                            {i < projects?.assigness.split("@@").length - 1
                              ? " , "
                              : ""}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
                      Total Hours:
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
                      {projects?.total_hours}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-100">
                      Advance Payment:
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-100">
                      {projects?.payments?.at(0)?.amountpaid}
                    </span>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setProjectId(projects?.id);
                      }}
                      className="rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 dark:bg-green-900"
                    >
                      View details
                    </button>
                    {userData?.user?.role?.toLowerCase() === "admin" ? (
                      <button className="rounded bg-brand-500 py-2 px-4 font-bold text-white hover:bg-brand-700 dark:bg-brand-800">
                        Edit Time
                      </button>
                    ) : null}
                  </div>
                  <PopupModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    hasCloseButton={true}
                    classes="max-w-2xl"
                  >
                    <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
                      Details of project
                    </h4>
                    <ProjectDetailCard id={projectId} />
                  </PopupModal>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};
