/* eslint-disable react/prop-types */

import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;

// usage of that 

/*



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginContainer from './components/LoginContainer';
import RegistrationContainer from './components/RegistrationContainer';
import Dashboard from './components/Dashboard'; // Your protected component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegistrationContainer registrationEndpoint="/auth/register/user" />} />
        <PrivateRoute path="/dashboard" element={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;



*/