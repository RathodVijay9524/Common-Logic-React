/* eslint-disable react/prop-types */

import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  const userRoles = user ? user.roles.map((role) => role.name) : [];

  const isAllowed = user && allowedRoles.some((role) => userRoles.includes(role));

  return (
    <Route
      {...rest}
      element={isAllowed ? <Component /> : <Navigate to="/unauthorized" />}
    />
  );
};

export default ProtectedRoute;

// usage of that

/*

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import LoginContainer from './components/LoginContainer';
import RegistrationContainer from './components/RegistrationContainer';
import Dashboard from './components/Dashboard'; // Your protected component
import AdminPanel from './components/AdminPanel'; // Your admin component
import Unauthorized from './components/Unauthorized'; // Your unauthorized component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegistrationContainer registrationEndpoint="/auth/register/user" />} />
        <PrivateRoute path="/dashboard" element={Dashboard} />
        <ProtectedRoute path="/admin" element={AdminPanel} allowedRoles={['ROLE_ADMIN']} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;



*/
