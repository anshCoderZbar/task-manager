import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { GrClose } from "react-icons/gr";

export const PopupModal = (props) => {
  const closeModal = () => {
    props?.setIsOpen(false);
  };

  return (
    <Transition appear show={props?.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000] bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full transform overflow-hidden rounded-md bg-[#fff]  text-left align-middle shadow-xl transition-all ${props?.classes}`}
              >
                {props?.hasCloseButton ? (
                  <button
                    className="absolute right-4 top-4 block"
                    onClick={closeModal}
                  >
                    <GrClose />
                  </button>
                ) : null}
                {props?.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
