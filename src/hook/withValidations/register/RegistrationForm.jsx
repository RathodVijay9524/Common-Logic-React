/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = ({ loading, error, success, values, handleChange, handleSubmit, errors, resetForm }) => {
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
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p className="text-danger">{errors.username}</p>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoNo"
                  value={values.phoNo}
                  onChange={handleChange}
                />
                {errors.phoNo && <p className="text-danger">{errors.phoNo}</p>}
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

export default RegistrationForm;
