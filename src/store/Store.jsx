import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const Store = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("userData"));
    if (auth) {
      setUserDetails(auth);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAppContext = () => useContext(UserContext);
