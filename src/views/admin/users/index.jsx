import React, { useEffect, useState } from "react";

import { PopupModal } from "components/modal";
import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeCard } from "./components/EmployeeCard";
import { useNavigate } from "react-router-dom";

export const Employees = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("userData"));

    if (auth?.user?.role.toLowerCase() !== "admin") {
      navigate("/admin/");
    }

    if (!auth?.token) {
      navigate("/auth/");
    }
  }, []);

  return (
    <div className="pt-5s mx-auto mb-auto flex h-full min-h-[84vh] w-full flex-col gap-5 p-2 md:pr-2">
      <div className="flex justify-between pt-7">
        <h2 className="text-lg font-bold">Employees</h2>
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-brand-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            Add Employees
          </button>
        </div>
      </div>
      <PopupModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasCloseButton={true}
        classes="max-w-2xl"
      >
        <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
          Create Employees
        </h4>
        <EmployeeForm setIsOpen={setIsOpen} />
      </PopupModal>
      <EmployeeCard />
    </div>
  );
};
