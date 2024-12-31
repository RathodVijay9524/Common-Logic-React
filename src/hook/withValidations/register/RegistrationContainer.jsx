/* eslint-disable react/prop-types */
import useRegistration from '../../hooks/useRegistration';
import useValidation from '../../hooks/useValidation';
import RegistrationForm from './RegistrationForm';

const RegistrationContainer = ({ registrationEndpoint }) => {
  const { values, handleChange, resetForm, handleSubmit, loading, error, success } = useRegistration(registrationEndpoint);
  const { errors, validate } = useValidation({
    username: '',
    email: '',
    password: '',
    phoNo: '',
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    validate(name, value);
  };

  return (
    <RegistrationForm
      loading={loading}
      error={error}
      success={success}
      values={values}
      handleChange={handleFieldChange}
      handleSubmit={handleSubmit}
      errors={errors}
      resetForm={resetForm}
    />
  );
};

export default RegistrationContainer;
