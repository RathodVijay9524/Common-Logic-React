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
  const [backendErrors, setBackendErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post(registrationEndpoint, values);
      setLoading(false);
      setSuccess(response.data);
      setError(null);
      setBackendErrors({});
      resetForm();
    } catch (err) {
      setLoading(false);
      setError(err.response && err.response.data ? err.response.data : 'Registration failed.');
      setSuccess(null);
      if (err.response && err.response.data && err.response.data.errors) {
        setBackendErrors(err.response.data.errors);
      }
    }
  };

  return { values, handleChange, resetForm, handleSubmit, loading, error, success, backendErrors };
};

export default useRegistration;
