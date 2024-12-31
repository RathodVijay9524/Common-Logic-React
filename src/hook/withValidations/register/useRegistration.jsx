import { useState } from 'react';
import axiosInstance from '../../redux/axiosInstance';
import { useForm } from './useForm';

const useRegistration = (registrationEndpoint) => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    phoNo: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post(registrationEndpoint, values);
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

  return { values, handleChange, resetForm, handleSubmit, loading, error, success };
};

export default useRegistration;
