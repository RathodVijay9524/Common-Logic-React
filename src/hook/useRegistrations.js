// using Form Hook

import { useState, useEffect } from 'react';
import axiosInstance from '../../redux/axiosInstance';
import checkAvailability from '../../service/user-service';
import { useForm } from './useForm';

const useRegistration = (registrationEndpoint) => {
  const { values: user, handleChange, resetForm } = useForm({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post(registrationEndpoint, user);
      setLoading(false);
      setSuccess(response.data);
      setError(null);
      resetForm();
    } catch (err) {
      setLoading(false);
      setError(err.response && err.response.data ? err.response.data : 'Registration failed.');
      setSuccess(null);
    }
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
    resetForm,
    checkUsernameAvailability,
    checkEmailAvailability,
  };
};

export default useRegistration;
