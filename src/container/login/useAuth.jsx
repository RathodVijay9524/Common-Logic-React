import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { login, fetchUserData, setUser } from '../redux/authSlice';
import { useForm } from './useForm';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user, loading, error } = useSelector((state) => state.auth);

  const { values, handleChange, resetForm } = useForm({
    usernameOrEmail: '',
    password: '',
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  const loginHandler = async () => {
    const result = await dispatch(login({ usernameOrEmail: values.usernameOrEmail, password: values.password }));
    if (result.meta.requestStatus === 'fulfilled') {
      await dispatch(fetchUserData());
      const user = result.payload?.data?.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
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

  return { loginHandler, loading, error, user, token, values, handleChange, resetForm };
};
