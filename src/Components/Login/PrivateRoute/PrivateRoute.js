import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (user.email) {
    return children;
  } else return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
