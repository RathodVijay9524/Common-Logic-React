/* eslint-disable no-unused-vars */
// Container Components
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { login, fetchUserData, setUser } from '../../redux/authSlice';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleLogin = async (usernameOrEmail, password) => {
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

  return (
    <Login
      loading={loading}
      error={error}
      onLogin={handleLogin}
    />
  );
};

export default LoginContainer;
