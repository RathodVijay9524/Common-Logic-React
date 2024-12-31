import useAuth from '../../hooks/useAuth';
import Login from './Login';

const LoginContainer = () => {
  const { loginHandler, loading, error, values, handleChange, resetForm } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginHandler();
  };

  return (
    <Login
      loading={loading}
      error={error}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
    />
  );
};

export default LoginContainer;
