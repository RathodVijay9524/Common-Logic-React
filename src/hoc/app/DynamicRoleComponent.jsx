/* eslint-disable react/prop-types */
// DynamicRoleComponent.js

import withRole from '../hoc/RoleBasedHOC';

const DynamicRoleComponent = ({ component: Component, requiredRole }) => {
  const ProtectedComponent = withRole(Component, requiredRole);
  return <ProtectedComponent />;
};

export default DynamicRoleComponent;

/*

import DynamicRoleComponent from './components/DynamicRoleComponent';
import BaseAdmin from './components/BaseAdmin';
import BaseWorker from './components/BaseWorker';
import BaseSuperUser from './components/BaseSuperUser';

<Routes>
  <Route
    path="/admin"
    element={<DynamicRoleComponent component={BaseAdmin} requiredRole="ROLE_ADMIN" />}
  />
  <Route
    path="/worker"
    element={<DynamicRoleComponent component={BaseWorker} requiredRole="ROLE_WORKER" />}
  />
  <Route
    path="/super-user"
    element={<DynamicRoleComponent component={BaseSuperUser} requiredRole="ROLE_SUPER_USER" />}
  />
</Routes>;



*/



/*

src/
├── components/
│   ├── BaseAdmin.js
│   ├── BaseWorker.js
│   ├── BaseSuperUser.js
│   ├── RoleProtectedAdmin.js
│   ├── RoleProtectedWorker.js
│   ├── RoleProtectedSuperUser.js
│   ├── DynamicRoleComponent.js
│   ├── Login.js
│   ├── Navbar.js
│   └── Footer.js
├── hoc/
│   └── RoleBasedHOC.js
├── context/
│   └── AuthContext.js
├── utils/
│   └── authUtils.js
├── App.js
├── index.js
└── styles/
    ├── App.css
    ├── Navbar.css
    └── Footer.css


*/