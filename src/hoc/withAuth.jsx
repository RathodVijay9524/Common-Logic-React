

/*
const withAuth = (WrappedComponent, allowedRoles) => {
return (props) => 
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      navigate('/login');
    }
  }, [navigate, user, allowedRoles]);

  return user && allowedRoles.includes(user.role) ? <WrappedComponent {...props} /> : 
};
};

export default withAuth;

null;  */


/*

import withAuth from './withAuth';

const AdminPage = () => {
  return <div>Admin Page</div>;
};

export default withAuth(AdminPage, ['ROLE_ADMIN']);


*/