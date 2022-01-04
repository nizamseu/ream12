import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <h1>Loading</h1>;
    }

    if (user.email && admin) {
        return children;
    } else return <Navigate to="/dashboard" state={{ from: location }} />;
};

export default AdminRoute;