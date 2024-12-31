import { Link } from 'react-router-dom';
import useRegistration from '../../hooks/useRegistration';

const UserRegistration = () => {
  const {
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
  } = useRegistration('/auth/register/user');

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="card-title text-center mb-4">User Registration</h2>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success.message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  onBlur={checkUsernameAvailability}
                />
                {usernameAvailable === false && (
                  <p className="text-danger">
                    Username already exists! Choose another username.
                  </p>
                )}
                {usernameAvailable === true && (
                  <p className="text-success">
                    Username is available
                  </p>
                )}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  onBlur={checkEmailAvailability}
                />
                {emailAvailable === false && (
                  <p className="text-danger">
                    Email already exists! Choose another email.
                  </p>
                )}
                {emailAvailable === true && (
                  <p className="text-success">
                    Email is available
                  </p>
                )}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoNo"
                  value={user.phoNo}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
                  {loading ? 'Registering...' : 'Register'}
                </button>
                <button type="button" className="btn btn-secondary mt-3" onClick={resetForm}>
                  Reset
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              Already registered? <Link to="/login">Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
