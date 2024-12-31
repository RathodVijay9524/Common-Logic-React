/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, fetchUserData, setUser } from '../../redux/authSlice';

const useLogin = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await dispatch(login({ usernameOrEmail, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        await dispatch(fetchUserData());
        const user = result.payload.data.user;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      } else {
        console.error('Login failed:', result.error.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return {
    usernameOrEmail,
    setUsernameOrEmail,
    password,
    setPassword,
    handleLogin,
  };
};

export default useLogin;
