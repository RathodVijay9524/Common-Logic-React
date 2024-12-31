// RoleBasedHOC.js

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withRole = (WrappedComponent, requiredRole) => {
  const RoleBasedComponent = (props) => {
    const { user } = useSelector((state) => state.auth);

    if (!user || !user.roles.includes(requiredRole)) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  return RoleBasedComponent;
};

export default withRole;
