
/*
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withAuth = (Component, allowedRoles = []) => {
  return (props) => {
    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = !!user;
    const userRoles = user ? user.roles.map((role) => role.name) : [];
    const isAllowed = allowedRoles.length === 0 || allowedRoles.some((role) => userRoles.includes(role));

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    if (!isAllowed) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
*/


// usage of this


/*

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginContainer from './components/LoginContainer';
import RegistrationContainer from './components/RegistrationContainer';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import Unauthorized from './components/Unauthorized';
import withAuth from './hoc/withAuth';

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedAdminPanel = withAuth(AdminPanel, ['ROLE_ADMIN']);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegistrationContainer registrationEndpoint="/auth/register/user" />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/admin" element={<ProtectedAdminPanel />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;


*/