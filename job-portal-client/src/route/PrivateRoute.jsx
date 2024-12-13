import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    const loaction = useLocation()

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;