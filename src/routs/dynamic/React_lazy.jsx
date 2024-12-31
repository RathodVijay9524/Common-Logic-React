
/*

Lazy Loading with React.lazyand Suspense
Lazy loading is a technique that allows you to load components only when they are needed. This can significantly reduce the initial load time of your application.

Step 1: Import React.lazyand Suspense

First, import React.lazy and Suspense from React.

Lazy Loading with React.lazyand Suspense: Reduces the initial load time by loading components only when they are needed.

Code Splitting with Webpack: Splits your application into smaller bundles, which can be loaded on demand, further reducing the load time.

*/


import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner'; // A simple loading spinner component

const LoginContainer = lazy(() => import('./components/LoginContainer'));
const RegistrationContainer = lazy(() => import('./components/RegistrationContainer'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const Unauthorized = lazy(() => import('./components/Unauthorized'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegistrationContainer registrationEndpoint="/auth/register/user" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
