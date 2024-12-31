// RoleProtectedAdmin.js
import BaseAdmin from './BaseAdmin';
import withRole from '../hoc/RoleBasedHOC';

export default withRole(BaseAdmin, 'ROLE_ADMIN');
