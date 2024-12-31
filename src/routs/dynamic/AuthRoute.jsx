/* eslint-disable react/prop-types */

import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, allowedRoles = [], ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user;
  const userRoles = user ? user.roles.map((role) => role.name) : [];
  const isAllowed = allowedRoles.length === 0 || allowedRoles.some((role) => userRoles.includes(role));

  return (
    <Route
      {...rest}
      element={
        !isAuthenticated ? (
          <Navigate to="/login" />
        ) : !isAllowed ? (
          <Navigate to="/unauthorized" />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default AuthRoute;


//  usage of this

/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginContainer from './components/LoginContainer';
import RegistrationContainer from './components/RegistrationContainer';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Unauthorized from './components/Unauthorized';
import AuthRoute from './components/AuthRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegistrationContainer registrationEndpoint="/auth/register/user" />} />
        <AuthRoute path="/dashboard" component={Dashboard} />
        <AuthRoute path="/admin" component={AdminPanel} allowedRoles={['ROLE_ADMIN']} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;



*/
