// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/authSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({ usernameOrEmail: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(login(credentials));
    if (result.meta.requestStatus === 'fulfilled') {
      const { roles } = result.payload.data.user;
      if (roles.includes('ROLE_ADMIN')) navigate('/admin');
      else if (roles.includes('ROLE_SUPER_USER')) navigate('/super-user');
      else if (roles.includes('ROLE_WORKER')) navigate('/worker');
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username or Email"
        value={credentials.usernameOrEmail}
        onChange={(e) => setCredentials({ ...credentials, usernameOrEmail: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
