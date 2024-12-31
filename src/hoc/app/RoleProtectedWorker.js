// RoleProtectedWorker.js
import BaseWorker from './BaseWorker';
import withRole from '../hoc/RoleBasedHOC';

export default withRole(BaseWorker, 'ROLE_WORKER');
