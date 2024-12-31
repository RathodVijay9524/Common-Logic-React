import { useState, useEffect } from 'react';
import axiosInstance from '../../redux/axiosInstance';
import checkAvailability from '../../service/user-service';

const useRegistration = (registrationEndpoint) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phoNo: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [emailAvailable, setEmailAvailable] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    if (name === 'username') {
      setUsernameAvailable(null);
    }
    if (name === 'email') {
      setEmailAvailable(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post(registrationEndpoint, user);
      setLoading(false);
      setSuccess(response.data);
      setError(null);
      handleReset();
    } catch (err) {
      setLoading(false);
      setError(err.response && err.response.data ? err.response.data : 'Registration failed.');
      setSuccess(null);
    }
  };

  const handleReset = () => {
    setUser({
      name: '',
      username: '',
      email: '',
      password: '',
      phoNo: '',
    });
    setError(null);
    setSuccess(null);
    setUsernameAvailable(null);
    setEmailAvailable(null);
  };

  const checkUsernameAvailability = async () => {
    if (user.username) {
      const exists = await checkAvailability(user.username);
      setUsernameAvailable(!exists);
    }
  };

  const checkEmailAvailability = async () => {
    if (user.email) {
      const exists = await checkAvailability(user.email);
      setEmailAvailable(!exists);
    }
  };

  useEffect(() => {
    console.log('Username Available State:', usernameAvailable);
  }, [usernameAvailable]);

  useEffect(() => {
    console.log('Email Available State:', emailAvailable);
  }, [emailAvailable]);

  return {
    user,
    loading,
    error,
    success,
    usernameAvailable,
    emailAvailable,
    handleChange,
    handleSubmit,
    handleReset,
    checkUsernameAvailability,
    checkEmailAvailability,
  };
};

export default useRegistration;
