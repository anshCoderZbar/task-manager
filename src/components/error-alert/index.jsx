import React from "react";

export const ErrorAlert = ({ heading, description }) => {
  return (
    <div
      className="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
      role="alert"
    >
      <p className="font-bold">{heading}</p>
      <p>{description}</p>
    </div>
  );
};
