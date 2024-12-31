import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUserOptimistic } from '../../redux/adminSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);
  const logs = useSelector((state) => state.admin.logs);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserOptimistic(userId));
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="mt-4">
        <h3>Manage Users</h3>
        {error && <p className="text-danger">{error}</p>}
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.roles.map(role => role.name).join(', ')}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3>View Logs</h3>
        <ul className="list-group">
          {logs.map(log => (
            <li key={log.id} className="list-group-item">{log.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
