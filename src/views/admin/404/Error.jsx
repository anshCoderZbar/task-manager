import React from "react";

export const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};
