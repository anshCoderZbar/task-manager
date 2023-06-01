import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

const App = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authData = JSON.parse(sessionStorage.getItem("userData"));
    setAuth(authData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={auth && auth.token ? "/admin" : "/auth"} replace />
          }
        />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
