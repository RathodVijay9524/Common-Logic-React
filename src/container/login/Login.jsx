/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ loading, error, values, handleChange, handleSubmit, resetForm }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="card-title text-center mb-4">Login</h2>
            {error && <p className="text-danger">{error.message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username or Email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="usernameOrEmail"
                  value={values.usernameOrEmail}
                  onChange={handleChange}
                />
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
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <button className="btn btn-link mt-3 p-0 text-left" onClick={() => { /* handle forgot password */ }}>
              Forgot Password?
            </button>
            <div className="mt-4 text-center">
              Dont have an account? <Link to="/">Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
