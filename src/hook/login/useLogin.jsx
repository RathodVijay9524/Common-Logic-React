/* eslint-disable no-unused-vars */
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
  const navigate = useNavigate();
  const { loginHandler, loading, error, user, token, values, handleChange, resetForm } = useAuth();

  const loginUser = async () => {
    const result = await loginHandler({ usernameOrEmail: values.usernameOrEmail, password: values.password });
    if (result.meta.requestStatus === 'fulfilled') {
      if (user) {
        const userRoles = user.roles.map((role) => role.name);
        if (userRoles.includes('ROLE_ADMIN')) navigate('/admin');
        else if (userRoles.includes('ROLE_WORKER')) navigate('/worker');
        else if (userRoles.includes('ROLE_NORMAL')) navigate('/user');
      }
    } else {
      console.error('Login failed:', result.error.message);
    }
    return result;
  };

  return { loginUser, loading, error, values, handleChange, resetForm };
};

export default useLogin;
