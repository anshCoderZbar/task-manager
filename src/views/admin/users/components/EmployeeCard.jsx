import React from "react";
import { Link } from "react-router-dom";

import avatar from "assets/img/avatars/avatar.png";

import { BiEdit, BiCake, BiDonateBlood } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineDelete,
  AiFillPhone,
} from "react-icons/ai";

export const EmployeeCard = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4 sm:p-5">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="employee-avatar"
            className="h-16 w-16 rounded-full "
          />
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
          <div className="ml-auto flex">
            <button className="mr-2 rounded-md border px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100">
              <BiEdit />
            </button>
            <button className="rounded-md border px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-100">
              <AiOutlineDelete />
            </button>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="mb-3 flex items-center">
            <AiFillPhone className="text-gray-600" />
            <span className="ml-2 text-gray-700">123-456-7890</span>
          </div>
          <div className="mb-3 flex items-center">
            <AiOutlineCalendar className="text-gray-600" />
            <span className="ml-2 text-gray-700">Joined on 01-01-2020</span>
          </div>
          <div className="mb-3 flex items-center">
            <BiCake className="text-gray-600" />
            <span className="ml-2 text-gray-700">
              Date of birth: 01-01-1990
            </span>
          </div>
          <div className="mb-3 flex items-center">
            <BiDonateBlood className="text-gray-600" />
            <span className="ml-2 text-gray-700">Blood Group: O+</span>
          </div>
          <div className="flex items-center">
            <AiOutlineMail className="text-gray-600" />
            <span className="ml-2 text-gray-700">johndoe@example.com</span>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            to="/admin/employees/John_Doe"
            className="rounded-md border px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            View Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
