import React from "react";

import avatar from "assets/img/avatars/avatar11.png";

import {
  AiOutlineDelete,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiEdit, BiDonateBlood, BiCake } from "react-icons/bi";

export const EmployeeCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg ">
      <div className="flex gap-5">
        <div className="mx-2 min-w-[25%] max-w-[25%]">
          <img
            src={avatar}
            alt="client-profile"
            className="rounded-full border-2 p-1"
          />
          <h2 className="mt-2 text-center text-base font-bold capitalize">
            Manager
          </h2>
          <div className="mt-2 flex justify-center">
            <button className="rounded-l-md border p-3 text-center text-xl font-bold text-green-900">
              <BiEdit />
            </button>
            <button className="rounded-r-md border p-3 text-center text-xl font-bold text-red-900">
              <AiOutlineDelete />
            </button>
          </div>
        </div>
        <div className="w-[75%] border-l-2 pl-4">
          <div className="border-b-[1px]  py-2">
            <h5 className="text-[1.2em] font-bold capitalize tracking-tight text-gray-900 ">
              Rahul
            </h5>
            <span className="rounded-md bg-[#A0D9B4] py-1 px-2 text-xs font-semibold capitalize">
              employee
            </span>
          </div>
          <div className="my-3 grid grid-cols-1 place-items-start gap-x-0 gap-y-5 py-5 lg:grid-cols-2">
            <div className="flex items-center gap-1">
              <AiFillPhone />
              <span className="text-sm">98784878778</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineCalendar />
              <span className="text-sm">12-10-2022</span>
            </div>
            <div className="flex items-center gap-1">
              <BiCake />
              <span className="text-sm">12-10-2022</span>
            </div>
            <div className="flex items-center gap-1">
              <BiDonateBlood />
              <span className="text-sm">A+</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail />
              <span className="text-sm">example@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
