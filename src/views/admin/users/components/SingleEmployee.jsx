import React from "react";
import avatar from "assets/img/avatars/avatar11.png";

export const SingleEmployee = () => {
  const name = "John Smith";
  const email = "john.smith@example.com";
  const designation = "Software Engineer";
  const phoneNo = "123-456-7890";
  const files = [
    {
      name: "Resume",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPN2Ac0SDtBOQYGGh0VVD3ZOzCqfw9aNbNBNwno-z&s",
    },
    {
      name: "Cover Letter",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPN2Ac0SDtBOQYGGh0VVD3ZOzCqfw9aNbNBNwno-z&s",
    },
    {
      name: "References",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPN2Ac0SDtBOQYGGh0VVD3ZOzCqfw9aNbNBNwno-z&s",
    },
  ];
  const joiningDate = "2022-01-01";
  const dateOfBirth = "1990-05-02";
  const bloodGroup = "O+";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex justify-center">
          <img
            src={avatar}
            alt={name}
            className="mx-auto mt-6 h-32 w-32 rounded-full"
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="mb-2 text-2xl font-bold">{name}</h1>
          <p className="mb-2 text-gray-600">{designation}</p>
          <p className="mb-2 text-gray-600">{email}</p>
          <p className="mb-2 text-gray-600">{phoneNo}</p>
          <p className="mb-2 text-gray-600">{`Blood Group: ${bloodGroup}`}</p>
          <h2 className="mb-4 text-xl font-bold">Files</h2>
          <ul className="mb-4 list-disc pl-4">
            {files.map((file, i) => (
              <li key={i} className="mb-2 flex items-center">
                <img
                  src={file.url}
                  alt={file.name}
                  className="mr-2 h-4 w-4 object-cover"
                />
                <span className="text-gray-600">{file.name}</span>
                <a
                  href={file.url}
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
              <span className="font-medium">Joining Date:</span> {joiningDate}
            </p>
            <p className="mb-2 text-gray-600">
              <span className="font-medium">Date of Birth:</span> {dateOfBirth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
